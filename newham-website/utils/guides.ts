// Guides are Markdown files in content/guides with YAML front matter, bundled at build time.
// Markaiting publishes them through approved pull requests; nothing here fetches at runtime.
import { parse } from 'yaml'
import { Marked } from 'marked'

export interface Guide {
  slug: string; title: string; description: string; date: string; updated?: string
  author: string; authorRole?: string; keywords: string[]; related?: string
  faq: { q: string; a: string }[]; html: string; words: number; minutes: number
  download?: { file: string; title: string } // offered behind a short form on the guide page
}

const md = new Marked({ gfm: true })
md.use({ renderer: { html: (t) => t.text.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[c]!) } })

export function parseGuide(text: string): Guide | null {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(text)
  if (!m) return null
  const fm = (parse(m[1]!) ?? {}) as Record<string, unknown>
  if (fm.draft === true || !fm.slug || !fm.title) return null
  const body = m[2]!.trim()
  const words = body.split(/\s+/).filter(Boolean).length
  const dl = fm.download as { file?: unknown; title?: unknown } | undefined
  const iso = (v: unknown) => (v instanceof Date ? v.toISOString().slice(0, 10) : v ? String(v) : undefined)
  return {
    slug: String(fm.slug), title: String(fm.title), description: String(fm.description ?? ''),
    date: iso(fm.date) ?? '', updated: iso(fm.updated), author: String(fm.author ?? 'Newham team'),
    authorRole: fm.author_role ? String(fm.author_role) : undefined,
    keywords: Array.isArray(fm.keywords) ? fm.keywords.map(String) : [], related: fm.related ? String(fm.related) : undefined,
    faq: Array.isArray(fm.faq) ? (fm.faq as { q: string; a: string }[]).filter((f) => f?.q && f?.a) : [],
    html: md.parse(body, { async: false }) as string, words, minutes: Math.max(1, Math.round(words / 220)),
    download: dl?.file ? { file: String(dl.file), title: String(dl.title ?? 'Download') } : undefined,
  }
}

const files = import.meta.glob('../content/guides/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

export const guides: Guide[] = Object.values(files).map(parseGuide).filter((g): g is Guide => !!g)
  .sort((a, b) => (b.updated ?? b.date).localeCompare(a.updated ?? a.date))

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug)
