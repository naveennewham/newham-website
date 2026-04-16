// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/main.css',
    'animate.css/animate.min.css'
  ],
  runtimeConfig: {
    public: {
      // Base URL for the standalone CCorex site. Defaults to local dev.
      ccorexBaseUrl: process.env.CCOREX_BASE_URL || 'https://ccorex.com'
    }
  },
  app: {
    pageTransition: {
      enterActiveClass: 'transition-all duration-300 ease-out',
      enterFromClass: 'opacity-0 transform translate-y-4',
      enterToClass: 'opacity-100 transform translate-y-0',
      leaveActiveClass: 'transition-all duration-200 ease-in',
      leaveFromClass: 'opacity-100 transform translate-y-0',
      leaveToClass: 'opacity-0 transform -translate-y-4',
      mode: 'out-in'
    },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css' },
        { rel: 'stylesheet', href: 'https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css' },
        { rel: 'stylesheet', href: 'https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-rounded/css/uicons-solid-rounded.css' },
        { rel: 'stylesheet', href: 'https://cdn-uicons.flaticon.com/2.6.0/uicons-brands/css/uicons-brands.css' }
      ]
    }
  },
  compatibilityDate: '2024-07-04'
})
