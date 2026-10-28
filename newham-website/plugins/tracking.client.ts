// Google tags and first-touch attribution, only after consent.
// - Consent Mode v2 defaults to "denied" in an inline head script (nuxt.config).
// - gtag.js loads only once the visitor allows analytics or marketing, and only if an ID is set.
// - First touch (UTMs, click ids, landing page, referrer) is kept in memory on landing and
//   written to a 90-day first-party cookie only with marketing consent.
// - Apollo's website visitor tracker (company-level B2B visitor identification) loads only
//   with marketing consent.
// - Pages viewed this visit (for lead scoring) are kept only with analytics consent.

type Gtag = (...args: unknown[]) => void
declare global { interface Window { dataLayer: unknown[]; gtag?: Gtag } }

const CLICK_IDS = ['gclid', 'gbraid', 'wbraid', 'li_fat_id', 'fbclid', 'msclkid']
const UTMS = ['source', 'medium', 'campaign', 'term', 'content']

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public as { gaId?: string; adsId?: string; adsLeadLabel?: string; siteUrl?: string; apolloAppId?: string }
  const { consent } = useConsent()
  const ft = useCookie<Record<string, unknown> | null>('mk_ft', { maxAge: 60 * 60 * 24 * 90, sameSite: 'lax', path: '/', default: () => null })
  // gtag.js only acts on Arguments objects in dataLayer (as in Google's snippet); a plain array
  // is ignored, which silently dropped consent updates, config and events.
  // eslint-disable-next-line prefer-rest-params
  const gtag: Gtag = function () { window.dataLayer = window.dataLayer || []; window.dataLayer.push(arguments) }
  window.gtag = gtag

  // What brought the visitor here, captured once per visit, in memory until consent.
  const url = new URL(window.location.href)
  const ownHost = url.hostname.replace(/^www\./, '')
  let referrer: string | null = null
  try { referrer = document.referrer && new URL(document.referrer).hostname.replace(/^www\./, '') !== ownHost ? document.referrer : null } catch { referrer = null }
  const utm = Object.fromEntries(UTMS.map((k) => [k, url.searchParams.get(`utm_${k}`)]).filter(([, v]) => v))
  const clickIds = Object.fromEntries(CLICK_IDS.map((k) => [k, url.searchParams.get(k)]).filter(([, v]) => v))
  const landing = { landingPage: url.pathname, referrer, utm, clickIds, at: new Date().toISOString() }
  const isCampaign = Object.keys(utm).length > 0 || Object.keys(clickIds).length > 0

  let loaded = false
  function loadGtag() {
    const id = config.gaId || config.adsId
    if (loaded || !id) return
    loaded = true
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
    document.head.appendChild(s)
    gtag('js', new Date())
  }

  let apolloLoaded = false
  function loadApollo() {
    if (apolloLoaded || !config.apolloAppId) return
    apolloLoaded = true
    const s = document.createElement('script')
    s.async = true
    s.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${Math.random().toString(36).substring(7)}`
    s.onload = () => (window as unknown as { trackingFunctions?: { onLoad: (o: { appId: string }) => void } }).trackingFunctions?.onLoad({ appId: config.apolloAppId! })
    document.head.appendChild(s)
  }

  function apply() {
    const c = consent.value
    gtag('consent', 'update', {
      analytics_storage: c.analytics ? 'granted' : 'denied',
      ad_storage: c.marketing ? 'granted' : 'denied',
      ad_user_data: c.marketing ? 'granted' : 'denied',
      ad_personalization: c.marketing ? 'granted' : 'denied',
    })
    if (c.analytics || c.marketing) loadGtag()
    if (c.analytics && config.gaId) gtag('config', config.gaId)
    if (c.marketing && config.adsId) gtag('config', config.adsId)
    if (c.marketing) loadApollo()
    // First touch: keep the earliest; a new campaign click replaces a plain earlier visit.
    if (c.marketing && (!ft.value || (isCampaign && !Object.keys((ft.value.clickIds as object) ?? {}).length && !Object.keys((ft.value.utm as object) ?? {}).length))) {
      ft.value = landing
    }
    if (!c.marketing && ft.value) ft.value = null
    if (!c.analytics) { try { sessionStorage.removeItem('mk_pv') } catch { /* blocked */ } }
  }

  function recordPage(path: string) {
    if (!consent.value.analytics) return
    try {
      const pv = JSON.parse(sessionStorage.getItem('mk_pv') || '[]') as string[]
      if (pv[pv.length - 1] !== path) pv.push(path)
      sessionStorage.setItem('mk_pv', JSON.stringify(pv.slice(-20)))
    } catch { /* storage blocked */ }
  }

  watch(consent, apply, { immediate: true })
  recordPage(url.pathname)
  nuxtApp.$router.afterEach((to) => recordPage(to.path))

  return {
    provide: {
      track: {
        /** Fire after a successful enquiry. No-ops without consent or IDs. */
        lead(form: string) {
          if (consent.value.analytics && config.gaId) gtag('event', 'generate_lead', { form })
          if (consent.value.marketing && config.adsId && config.adsLeadLabel) gtag('event', 'conversion', { send_to: `${config.adsId}/${config.adsLeadLabel}` })
        },
        /** A named interaction such as a call-to-action click. Analytics consent only. */
        event(name: string, params: Record<string, unknown> = {}) {
          if (consent.value.analytics && config.gaId) gtag('event', name, params)
        },
        pagesViewed(): string[] {
          try { return JSON.parse(sessionStorage.getItem('mk_pv') || '[]') } catch { return [] }
        },
      },
    },
  }
})
