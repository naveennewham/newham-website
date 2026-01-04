// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/main.css',
    'animate.css/animate.min.css'
  ],
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
      ]
    }
  },
  compatibilityDate: '2024-07-04'
})
