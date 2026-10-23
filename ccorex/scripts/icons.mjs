// Builds the Font Awesome subset the site ships: assets/css/icons.css (rules for the icons the
// source uses) and public/fonts/fa-*.woff2 (only those glyphs), instead of the full 6.5.1 CSS and
// ~180 KB of fonts from the CDN. Run after using a new icon: npm run icons
// The build fails when the source uses an fa-* class this subset was not made from (see nuxt.config).
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const OUT_CSS = join(ROOT, 'assets/css/icons.css')
const SCAN = ['app.vue', 'error.vue', 'assets', 'components', 'composables', 'content', 'data', 'layouts', 'pages', 'plugins', 'utils']

// Every fa-* class named anywhere in the source (icon names live in templates and data files).
export function usedIcons() {
  const found = new Set()
  const walk = (p) => {
    const s = statSync(p, { throwIfNoEntry: false })
    if (!s || p === OUT_CSS) return
    if (s.isDirectory()) return readdirSync(p).forEach((f) => walk(join(p, f)))
    if (!/\.(vue|ts|js|mjs|md|css)$/.test(p)) return
    for (const m of readFileSync(p, 'utf8').matchAll(/\bfa-[a-z0-9]+(?:-[a-z0-9]+)*/g)) found.add(m[0])
  }
  SCAN.forEach((p) => walk(join(ROOT, p)))
  return found
}

// The classes icons.css was generated for (listed in its header).
export function subsetIcons() {
  try {
    return new Set(/\/\* icons: ([^*]*)\*\//.exec(readFileSync(OUT_CSS, 'utf8'))?.[1]?.trim().split(/\s+/) ?? [])
  } catch { return new Set() }
}

async function main() {
  const postcss = (await import('postcss')).default
  const subsetFont = (await import('subset-font')).default
  const fa = join(ROOT, 'node_modules/@fortawesome/fontawesome-free')
  const used = usedIcons()
  const root = postcss.parse(['fontawesome', 'solid', 'regular'].map((f) => readFileSync(join(fa, `css/${f}.css`), 'utf8')).join('\n'))

  // Keep a selector only when every Font Awesome class in it is used (drops .fa/.fas/.fab aliases too).
  const known = new Set()
  root.walkRules((rule) => {
    if (rule.parent?.type === 'atrule' && /keyframes/.test(rule.parent.name)) return
    rule.selectors.forEach((s) => (s.match(/\.fa[a-z0-9-]*/g) ?? []).forEach((c) => known.add(c.slice(1))))
    const keep = rule.selectors.filter((s) => (s.match(/\.fa[a-z0-9-]*/g) ?? []).every((c) => used.has(c.slice(1))))
    if (keep.length) rule.selectors = keep
    else rule.remove()
  })
  root.walkAtRules((at) => {
    if (at.name === 'font-face') {
      const src = at.nodes.find((d) => d.prop === 'src')
      const file = /fa-(solid-900|regular-400)\.woff2/.exec(src?.value ?? '')?.[1]
      if (file) src.value = `url("/fonts/fa-${file}.woff2") format("woff2")`
      else at.remove()
    }
  })
  // Keyframes only for animations a kept rule still names; then drop emptied at-rules.
  const animations = new Set()
  root.walkDecls(/animation/, (d) => { if (!/keyframes/.test(d.parent?.parent?.name ?? '')) d.value.split(/[\s,]+/).forEach((w) => animations.add(w)) })
  root.walkAtRules(/keyframes/, (at) => { if (!animations.has(at.params)) at.remove() })
  root.walkAtRules((at) => { if (at.nodes && !at.nodes.length) at.remove() })
  root.walkComments((c) => c.remove())

  const glyphs = new Set()
  root.walkDecls('content', (d) => {
    const v = /^["'](.*)["']$/.exec(d.value)?.[1]
    if (!v) return
    const ch = v.startsWith('\\') ? String.fromCodePoint(parseInt(v.slice(1), 16)) : v
    glyphs.add(ch)
  })

  const text = [...glyphs].join('')
  for (const f of ['solid-900', 'regular-400']) {
    const out = await subsetFont(readFileSync(join(fa, `webfonts/fa-${f}.woff2`)), text, { targetFormat: 'woff2' })
    writeFileSync(join(ROOT, `public/fonts/fa-${f}.woff2`), out)
    console.log(`public/fonts/fa-${f}.woff2: ${out.length} bytes`)
  }
  const list = [...used].sort()
  writeFileSync(OUT_CSS, `/*! Font Awesome Free 6.5.1 subset by scripts/icons.mjs - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */\n/* icons: ${list.join(' ')} */\n${root.toString().replace(/\n{2,}/g, '\n')}\n`)
  console.log(`${relative(ROOT, OUT_CSS)}: ${glyphs.size} glyphs`)
  const unknown = list.filter((c) => !known.has(c))
  if (unknown.length) console.warn(`Not Font Awesome 6.5.1 classes (ignored): ${unknown.join(' ')}`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main()
