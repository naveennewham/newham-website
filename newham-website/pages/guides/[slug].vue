<template>
  <div v-if="g">
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative py-16 lg:py-20">
        <nav aria-label="Breadcrumb" class="text-sm text-ink-300"><NuxtLink to="/guides" class="hover:text-white">Guides</NuxtLink> <span aria-hidden="true">/</span> Guide</nav>
        <h1 class="h-display mt-5 max-w-4xl text-white">{{ g.title }}</h1>
        <p class="lead-dark mt-5 max-w-3xl">{{ g.description }}</p>
        <p class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-300">
          <span><i class="fa-regular fa-user mr-1" aria-hidden="true"></i>{{ g.author }}<template v-if="g.authorRole"> · {{ g.authorRole }}</template></span>
          <span><i class="fa-regular fa-calendar mr-1" aria-hidden="true"></i><time :datetime="g.updated ?? g.date">{{ g.updated ? `Updated ${fmt(g.updated)}` : fmt(g.date) }}</time></span>
          <span><i class="fa-regular fa-clock mr-1" aria-hidden="true"></i>{{ g.minutes }} min read</span>
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article class="min-w-0">
          <div class="guide-body" v-html="parts[0]"></div>
          <GuideInlineCta :guide="g.slug" :related="g.related ? { to: g.related, label: relatedLabel } : undefined" />
          <div v-if="parts[1]" class="guide-body" v-html="parts[1]"></div>
        </article>
        <aside class="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <GuideDownloadGate v-if="g.download" :file="g.download.file" :title="g.download.title" :guide="g.slug" />
          <div v-if="g.related" class="card">
            <p class="eyebrow">Related</p>
            <NuxtLink :to="g.related" class="mt-2 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-900">{{ relatedLabel }} <i class="fa-solid fa-arrow-right ml-1 mt-1 text-xs" aria-hidden="true"></i></NuxtLink>
          </div>
          <div class="card">
            <p class="font-semibold text-ink-900">Talk to us about your projects</p>
            <p class="mt-1 text-sm text-ink-600">A 30-minute discovery call on software, M&amp;E engineers or engineering support.</p>
            <NuxtLink to="/appointment" class="btn-primary mt-4 w-full">Book a discovery call</NuxtLink>
          </div>
        </aside>
      </div>
    </section>

    <section v-if="g.faq.length" class="section bg-ink-50">
      <div class="container-site max-w-3xl">
        <UiSectionHeader eyebrow="FAQ" title="Common questions" />
        <div class="mt-8"><UiFaqList :items="g.faq" /></div>
      </div>
    </section>
    <GuideStickyCta :guide="g.slug" to="/appointment" label="Book a call" text="Talk to an engineer about your project" />
  </div>
</template>

<script setup lang="ts">


const route = useRoute()
const g = guideBySlug(String(route.params.slug))
if (!g) throw createError({ statusCode: 404, statusMessage: 'Guide not found', fatal: true })

const LABELS: Record<string, string> = {
  '/talent-outsourcing': 'M&E talent outsourcing', '/engineering-services': 'Engineering services', '/ccorex': 'CCorex software', '/services': 'All services',
  '/fire-protection-design': 'Fire protection design services', '/sprinkler-hydraulic-calculation-services': 'Sprinkler hydraulic calculation services', '/boq-estimation-services': 'BOQ and estimation services', '/shop-drawing-services': 'Shop drawing services',
  '/acmv-design-services': 'ACMV design services', '/electrical-design-services': 'Electrical design services', '/plumbing-sanitary-design-services': 'Plumbing and sanitary design services', '/elv-design-services': 'ELV design services'
}
const relatedLabel = computed(() => (g?.related ? LABELS[g.related] ?? 'Read more' : ''))
// The article in two parts, with a call to action before the third section heading
// (or the last one in a short guide), where mobile readers still are.
const parts = computed(() => {
  const html = g?.html ?? ''
  const heads = [...html.matchAll(/<h2[\s>]/g)].map((m) => m.index ?? 0)
  const at = heads.length >= 3 ? heads[2]! : heads.length >= 2 ? heads[heads.length - 1]! : -1
  return at > 0 ? [html.slice(0, at), html.slice(at)] : [html, '']
})
const fmt = (d: string) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-SG', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

const site = useRuntimeConfig().public.siteUrl as string
const url = `${site}/guides/${g!.slug}`
useSeoMeta({ title: g!.title, description: g!.description, ogTitle: g!.title, ogDescription: g!.description, ogType: 'article' })
useHead({
  link: [{ rel: 'canonical', href: url }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify([
      {
        '@context': 'https://schema.org', '@type': 'Article', headline: g!.title, description: g!.description,
        datePublished: g!.date, dateModified: g!.updated ?? g!.date, mainEntityOfPage: url, keywords: g!.keywords.join(', '),
        author: { '@type': 'Organization', name: g!.author, url: site },
        publisher: { '@type': 'Organization', name: 'Newham Solutions Pte. Ltd.', url: 'https://newhamtech.com' },
      },
      {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Guides', item: `${site}/guides` },
          { '@type': 'ListItem', position: 2, name: g!.title, item: url },
        ],
      },
    ]),
  }],
})
</script>

<style scoped>
.guide-body { max-width: 72ch; color: rgb(var(--ink-700)); font-size: 1.0625rem; line-height: 1.75; }
.guide-body :deep(h2) { @apply mt-12 text-2xl font-bold text-ink-900; }
.guide-body :deep(h3) { @apply mt-8 text-lg font-semibold text-ink-900; }
.guide-body :deep(p) { @apply mt-4; }
.guide-body :deep(ul), .guide-body :deep(ol) { @apply mt-4 space-y-2 pl-6; }
.guide-body :deep(ul) { list-style: disc; }
.guide-body :deep(ol) { list-style: decimal; }
.guide-body :deep(a) { @apply font-semibold text-brand-700 underline underline-offset-2; }
.guide-body :deep(strong) { @apply text-ink-900; }
.guide-body :deep(blockquote) { @apply mt-6 rounded-xl border-l-4 border-brand-500 bg-brand-50 px-5 py-3 text-ink-800; }
.guide-body :deep(table) { @apply mt-6 block w-full overflow-x-auto text-sm; border-collapse: collapse; }
.guide-body :deep(th), .guide-body :deep(td) { @apply border-b border-ink-100 px-3 py-2 text-left; }
.guide-body :deep(code) { @apply rounded bg-ink-100 px-1.5 py-0.5 text-sm; }
.guide-body > :deep(*:first-child) { margin-top: 0; }
</style>
