// Microsoft Clarity (heatmaps and session recordings), only after analytics consent.
// - Inert unless NUXT_PUBLIC_CLARITY_ID is set at build time (pages are prerendered).
// - Uses the same signal as Google Analytics: the analytics choice in the mk_consent cookie.
//   Granted mid-visit: Clarity loads then. Withdrawn: recording stops, Clarity's cookies are
//   cleared, and it is not loaded again on later pages.
// - Never loads in browsers our team has flagged as internal (?internal=1, see tracking.client.ts).
// - Clarity's default masking is kept (form input is masked); nothing here unmasks content.

type Clarity = ((...args: unknown[]) => void) & { q?: unknown[] }
declare global { interface Window { clarity?: Clarity } }

export default defineNuxtPlugin(() => {
  const id = (useRuntimeConfig().public as { clarityId?: string }).clarityId?.trim()
  if (!id) return

  // Same flag as tracking.client.ts. Read the query too, as this plugin may run before that one sets it.
  let internal = false
  try {
    const flag = new URL(window.location.href).searchParams.get('internal')
    internal = flag === '1' || (flag !== '0' && localStorage.getItem('mk_internal') === '1')
  } catch { /* storage blocked */ }
  if (internal) return

  const { consent } = useConsent()
  let loaded = false
  let running = false

  function clarity(...args: unknown[]) {
    const w = window
    w.clarity = w.clarity || function (...a: unknown[]) { (w.clarity!.q = w.clarity!.q || []).push(a) } as Clarity
    w.clarity(...args)
  }

  function load() {
    loaded = true
    clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' })
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.clarity.ms/tag/${encodeURIComponent(id!)}`
    document.head.appendChild(s)
  }

  function clearCookies() {
    for (const name of ['_clck', '_clsk']) {
      document.cookie = `${name}=; Max-Age=0; path=/`
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${window.location.hostname.replace(/^www\./, '')}`
    }
  }

  function apply() {
    if (consent.value.analytics) {
      if (!loaded) load()
      else if (!running) { clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' }); clarity('start') }
      running = true
    } else if (running) {
      clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' })
      clarity('stop')
      clearCookies()
      running = false
    }
  }

  watch(consent, apply, { immediate: true })
})
