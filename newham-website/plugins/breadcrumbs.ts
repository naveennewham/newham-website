// BreadcrumbList structured data for every page below the home page, so Google can show the
// page's place in the site (Home › Products › DeepCost) in results. Guide pages add their own.
const NAMES: Record<string, string> = {
  services: 'Services', 'talent-outsourcing': 'Talent outsourcing', 'engineering-services': 'Engineering services', 'case-studies': 'Project experience', appointment: 'Book a discovery call', guides: 'Guides',
  industries: 'Industries',
  pricing: 'Pricing', about: 'About', contact: 'Contact', privacy: 'Privacy policy',
}

export default defineNuxtPlugin(() => {
  const route = useRoute()
  const site = (useRuntimeConfig().public.siteUrl as string).replace(/\/$/, '')
  useHead(() => {
    const parts = route.path.split('/').filter(Boolean)
    if (!parts.length || (parts[0] === 'guides' && parts.length > 1) || parts[0] === 'ccorex' || parts[0] === 'product' || parts[0] === 'deeptrack') return {}
    const items = [{ name: 'Home', path: '' }, ...parts.map((p, i) => ({ name: NAMES[p] ?? p.replace(/-/g, ' '), path: `/${parts.slice(0, i + 1).join('/')}` }))]
    return {
      script: [{
        key: 'breadcrumbs', type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'BreadcrumbList',
          itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${site}${it.path || '/'}` })),
        }),
      }],
    }
  })
})
