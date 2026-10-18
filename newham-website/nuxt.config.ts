import { fileURLToPath } from 'node:url'

// Old case-study URLs (fabricated examples, removed); they redirect to /case-studies.
const oldCaseStudies = ['acmv1', 'fire1', 'cs1', 'elv1', 'ana1', 'cs2', 'cs3', 'cs4', 'cs5', 'cs6', 'ai1', 'cloud1', 'uiux1']
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/main.css', '~/assets/theme.css'],
  runtimeConfig: {
    public: {
      // Day this build was made; the sitemap uses it as lastmod for fixed pages.
      buildDate: new Date().toISOString().slice(0, 10),
      siteUrl: 'https://newhamtech.com',
      // Base URL for the standalone CCorex product site.
      ccorexBaseUrl: process.env.CCOREX_BASE_URL || 'https://ccorex.com',
      // Google tags load only after consent, and only when these are set
      // (NUXT_PUBLIC_GA_ID = G-…, NUXT_PUBLIC_ADS_ID = AW-…, NUXT_PUBLIC_ADS_LEAD_LABEL).
      gaId: '',
      adsId: '',
      adsLeadLabel: ''
    },
    // Server only (Vercel env): NUXT_MARKAITING_URL, NUXT_MARKAITING_LEAD_SECRET, NUXT_MARKAITING_WORKSPACE.
    markaitingUrl: '',
    markaitingLeadSecret: '',
    markaitingWorkspace: 'newham',
    // Existing notification webhooks keep receiving the same payload as before.
    legacyLeadWebhook: 'https://firefabx.com/webhook/newham-contact',
    legacyAppointmentWebhook: 'https://firefabx.com/webhook/newham-appointment'
  },
  // Guides (content/guides/*.md) are readable on the server for the sitemap.
  nitro: {
    serverAssets: [{ baseName: 'guides', dir: fileURLToPath(new URL('./content/guides', import.meta.url)) }],
    // Every page is static HTML served from the CDN (fast for crawlers, no cold starts).
    // Pages are found by following links from the home page, sitemap and robots.txt.
    // Redirect URLs are skipped: they must stay 301s, and Netlify serves a static file in place of a redirect.
    prerender: { crawlLinks: true, routes: ['/', '/sitemap.xml', '/robots.txt'], ignore: oldCaseStudies.map((id) => `/case-studies/${id}`) }
  },
  routeRules: {
    // Old case-study URLs (fabricated examples, removed) -> project experience.
    ...Object.fromEntries(oldCaseStudies.map((id) => [`/case-studies/${id}`, { redirect: { to: '/case-studies', statusCode: 301 } }]))
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en-SG' },
      script: [
        // Consent Mode v2: everything denied until the visitor chooses (see composables/useConsent).
        { innerHTML: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});", tagPosition: 'head' },
        { innerHTML: "(function(){var d=document.documentElement;try{var q=new URLSearchParams(location.search).get('theme');if(q==='light'||q==='dark')localStorage.setItem('theme',q);var t=q||localStorage.getItem('theme');if(t!=='light')d.classList.add('dark')}catch(e){d.classList.add('dark')}})()", tagPosition: 'head' }],
      titleTemplate: (title?: string) => (title ? `${title} | Newham` : 'Newham — Construction software and specialist M&E engineers, Singapore'),
      meta: [
        // Google Search Console ownership (URL-prefix property, verified by Markaiting's reader account).
        { name: 'google-site-verification', content: '9sljFYt16d9vobh0e1i3_qmu9ym4dsmkdN6lfeXnux0' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#062a33' },
        { property: 'og:site_name', content: 'Newham Technological Solutions' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_SG' },
        { property: 'og:image', content: 'https://newhamtech.com/images/og-newham.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/newham-logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }
      ]
    }
  },
  compatibilityDate: '2024-07-04'
})
