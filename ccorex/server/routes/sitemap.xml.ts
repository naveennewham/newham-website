// sitemap.xml: every indexable page plus published guides (read from content/guides at build).
import { parse } from 'yaml'
import { apps } from '../../data/apps'

const STATIC = ['/', '/products', '/estimating/fire-protection', '/estimating/acmv', '/estimating/elv', '/compare/costx-cubicost-alternative', '/platform', '/solutions', '/industries', '/integrations', '/pricing', '/resources', '/faq', '/about', '/contact', '/privacy']

export default defineEventHandler(async (event) => {
  const site = (useRuntimeConfig(event).public.siteUrl as string).replace(/\/$/, '')
  const built = useRuntimeConfig(event).public.buildDate as string | undefined
  const urls: { loc: string; lastmod?: string }[] = [...STATIC, ...apps.map((a) => `/products/${a.slug}`)].map((p) => ({ loc: `${site}${p}`, lastmod: built }))
  const store = useStorage('assets:guides')
  for (const key of await store.getKeys()) {
    if (!key.endsWith('.md')) continue
    const text = String(await store.getItem(key) ?? '')
    const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
    if (!m) continue
    const fm = (parse(m[1]!) ?? {}) as Record<string, unknown>
    if (fm.draft === true || !fm.slug) continue
    const d = fm.updated ?? fm.date
    urls.push({ loc: `${site}/resources/${fm.slug}`, lastmod: d instanceof Date ? d.toISOString().slice(0, 10) : d ? String(d) : undefined })
  }
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`
})
