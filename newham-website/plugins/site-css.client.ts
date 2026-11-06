// Styles are inlined into each prerendered page, and the build makes a single stylesheet
// (cssCodeSplit is off, see nuxt.config.ts) that no page links. A page reached by client
// navigation can need styles its first page did not inline, so this loads that one file once,
// after the first page has rendered. ?v= is the build id, since /_nuxt/ files are cached for a year.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const { app } = useRuntimeConfig()
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = `${app.buildAssetsDir}site.css?v=${app.buildId}`
    document.head.appendChild(link)
  })
})
