// sitemap.xml: every indexable page plus published guides (read from content/guides at build).
import { parse } from 'yaml'
import { apps } from '../../data/apps'
import { solutionPages } from '../../data/solutions'
import { tools } from '../../data/tools'

const SOLUTIONS = solutionPages.filter((s) => s.slug !== 'estimating').map((s) => `/solutions/${s.slug}`)
const STATIC = ['/', '/products', '/estimating/fire-protection', '/estimating/acmv', '/estimating/elv', '/estimating/electrical', '/estimating/plumbing-sanitary', '/compare/costx-cubicost-alternative', ...SOLUTIONS, '/platform', '/solutions', '/industries', '/integrations', '/pricing', '/resources', '/tools', ...tools.map((t) => `/tools/${t.slug}`), '/faq', '/about', '/contact', '/privacy']

// <lastmod> for a fixed page: the last change to its page file (exact, folder index, or the
// dynamic [param] file that renders it), else the build date.
function pageLastmod(route: string, dates: Record<string, string>, built?: string) {
  const base = route === '/' ? 'pages/index' : `pages${route}`
  const parent = base.slice(0, base.lastIndexOf('/'))
  const dynamic = Object.keys(dates).find((f) => f.startsWith(`${parent}/[`) && f.split('/').length === base.split('/').length)
  return dates[`${base}.vue`] ?? dates[`${base}/index.vue`] ?? (dynamic && dates[dynamic]) ?? built
}

export default defineEventHandler(async (event) => {
  const site = (useRuntimeConfig(event).public.siteUrl as string).replace(/\/$/, '')
  const built = useRuntimeConfig(event).public.buildDate as string | undefined
  const dates = (useRuntimeConfig(event).pageDates ?? {}) as Record<string, string>
  const urls: { loc: string; lastmod?: string }[] = [...STATIC, ...apps.map((a) => `/products/${a.slug}`)].map((p) => ({ loc: `${site}${p}`, lastmod: pageLastmod(p, dates, built) }))
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
