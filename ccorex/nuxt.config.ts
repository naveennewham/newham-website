// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: { lang: 'en-SG' },
      script: [
        // Consent Mode v2: everything denied until the visitor chooses (see composables/useConsent).
        { innerHTML: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});", tagPosition: 'head' },
        { innerHTML: "(function(){var d=document.documentElement;try{var q=new URLSearchParams(location.search).get('theme');if(q==='light'||q==='dark')localStorage.setItem('theme',q);var t=q||localStorage.getItem('theme');if(t!=='light')d.classList.add('dark')}catch(e){d.classList.add('dark')}})()", tagPosition: 'head' }],
      titleTemplate: (title?: string) => (title ? `${title} | CCorex` : 'CCorex — AI-powered construction management platform'),
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#062a33' },
        { property: 'og:site_name', content: 'CCorex' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://ccorex.com/images/og-ccorex.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/ccorex-logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }
      ]
    }
  },
  css: ['~/assets/css/main.css', '~/assets/css/theme.css'],
  runtimeConfig: {
    public: {
      siteUrl: 'https://ccorex.com',
      // CCorex portal sign-in (Functional Design Document §3).
      appLoginUrl: process.env.NUXT_PUBLIC_APP_LOGIN_URL || 'https://dash.ccorex.com',
      newhamUrl: 'https://newhamtech.com',
      // Google tags load only after consent, and only when these are set
      // (NUXT_PUBLIC_GA_ID = G-…, NUXT_PUBLIC_ADS_ID = AW-…, NUXT_PUBLIC_ADS_LEAD_LABEL).
      gaId: '',
      adsId: '',
      adsLeadLabel: ''
    },
    // Server only (Vercel env): NUXT_MARKAITING_URL, NUXT_MARKAITING_LEAD_SECRET,
    // NUXT_MARKAITING_WORKSPACE, NUXT_LEGACY_LEAD_WEBHOOK.
    markaitingUrl: '',
    markaitingLeadSecret: '',
    markaitingWorkspace: 'ccorex',
    legacyLeadWebhook: ''
  },
  routeRules: {
    // Old duplicate URLs — one canonical page per app.
    '/apps': { redirect: { to: '/products', statusCode: 301 } },
    '/apps/deepcost': { redirect: { to: '/products/deepcost', statusCode: 301 } },
    '/apps/deeptrack': { redirect: { to: '/products/deeptrack', statusCode: 301 } },
    '/apps/deephr': { redirect: { to: '/products/deephr', statusCode: 301 } },
    '/apps/deepplan-ai': { redirect: { to: '/products/deepplan-ai', statusCode: 301 } },
    '/products/deepplanai': { redirect: { to: '/products/deepplan-ai', statusCode: 301 } }
  },
  tailwindcss: {
    exposeConfig: false
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
