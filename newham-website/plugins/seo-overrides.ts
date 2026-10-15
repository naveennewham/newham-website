// SEO overrides published from Markaiting (approved title/description fixes arrive as a
// pull request that edits data/seo-overrides.json only). They win over each page's own
// useSeoMeta, on the server render and on client-side navigation.
import overrides from '~/data/seo-overrides.json'

type Override = { title?: string; description?: string }

export default defineNuxtPlugin(() => {
  const route = useRoute()
  const current = computed<Override | undefined>(() => (overrides as Record<string, Override>)[route.path.replace(/\/+$/, '') || '/'])
  useHead(() => {
    const o = current.value
    if (!o) return {}
    return {
      ...(o.title ? { title: o.title, titleTemplate: '%s' } : {}),
      meta: [
        ...(o.description ? [{ name: 'description', content: o.description }, { property: 'og:description', content: o.description }] : []),
        ...(o.title ? [{ property: 'og:title', content: o.title }] : []),
      ],
    }
  }, { tagPriority: 'critical' })
})
