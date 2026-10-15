// robots.txt: everything crawlable except the API, with the sitemap's location.
export default defineEventHandler((event) => {
  const site = (useRuntimeConfig(event).public.siteUrl as string).replace(/\/$/, '')
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /studio\n\nSitemap: ${site}/sitemap.xml\n`
})
