// https://nuxt.com/docs/api/configuration/nuxt-config
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

// Last commit date (YYYY-MM-DD) of each file under pages/, for sitemap <lastmod>. Empty when git
// history is unavailable; the sitemap then falls back to the build date.
function pageDates(): Record<string, string> {
  const dates: Record<string, string> = {}
  try {
    const log = execSync('git log --format=%cs --name-only -- pages', { cwd: fileURLToPath(new URL('.', import.meta.url)), encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
    let date = ''
    for (const line of log.split('\n')) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(line)) date = line
      else if (line.includes('pages/')) dates[line.slice(line.indexOf('pages/'))] ??= date
    }
  } catch {}
  return dates
}
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: { lang: 'en-SG' },
      script: [
        // Consent Mode v2: everything denied until the visitor chooses (see composables/useConsent).
        { innerHTML: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});", tagPosition: 'head' },
        { innerHTML: "(function(){var d=document.documentElement;try{var q=new URLSearchParams(location.search).get('theme');if(q==='light'||q==='dark')localStorage.setItem('theme',q);var t=q||localStorage.getItem('theme');if(t!=='light')d.classList.add('dark')}catch(e){d.classList.add('dark')}})()", tagPosition: 'head' },
        // Web fonts and icons as non-blocking stylesheets: a script-inserted link does not hold up
        // the first paint (text shows in the size-matched fallback from main.css meanwhile).
        { innerHTML: "['https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700;800&display=swap','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'].forEach(function(h){var l=document.createElement('link');l.rel='stylesheet';l.crossOrigin='anonymous';l.href=h;document.head.appendChild(l)})", tagPosition: 'head' }],
      titleTemplate: (title?: string) => (title ? `${title} | CCorex` : 'CCorex — AI-powered construction management platform'),
      meta: [
        // Google Search Console ownership (URL-prefix property, verified by Markaiting's reader account).
        { name: 'google-site-verification', content: 'f1yycXP3G0bTobOMlBs954eHMyqk2-pV0M-M4lETdiY' },
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
        // Fetched early, applied without blocking the first paint (see the script above).
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700;800&display=swap', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'style', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css', crossorigin: 'anonymous' }
      ]
    }
  },
  css: ['~/assets/css/main.css', '~/assets/css/theme.css'],
  runtimeConfig: {
    // Server only: page file -> last change date, read by the sitemap.
    pageDates: pageDates(),
    public: {
      // Day this build was made; the sitemap uses it as lastmod for fixed pages.
      buildDate: new Date().toISOString().slice(0, 10),
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
  // Guides (content/guides/*.md) are readable on the server for the sitemap.
  nitro: {
    serverAssets: [{ baseName: 'guides', dir: fileURLToPath(new URL('./content/guides', import.meta.url)) }],
    // Every page is static HTML served from the CDN (fast for crawlers, no cold starts).
    // Pages are found by following links from the home page, sitemap and robots.txt.
    // Skipped: /studio is dev-only (404 in production); redirect URLs must stay 301s, and
    // Netlify serves a static file in place of a redirect.
    // about.html rather than about/index.html: Netlify would 301 /about to /about/.
    prerender: { crawlLinks: true, autoSubfolderIndex: false, routes: ['/', '/sitemap.xml', '/robots.txt'], ignore: ['/studio', '/apps', '/products/deepplanai'] }
  },
  // Search engines render pages with a cap on how many files they will fetch; a page that needs
  // ~30 files can lose one and fall back to the error page. So the browser build ships few files:
  // page data inline in the HTML, styles inlined, and small code chunks merged.
  experimental: { payloadExtraction: false },
  hooks: {
    'vite:extendConfig'(config, { isClient }) {
      if (!isClient) return
      config.build ??= {}
      config.build.cssCodeSplit = false
      // Rollup merges chunks under this size into their importers, keeping execution order safe.
      const output = ((config.build.rollupOptions ??= {}).output ??= {}) as { experimentalMinChunkSize?: number }
      output.experimentalMinChunkSize = 60_000
    }
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
