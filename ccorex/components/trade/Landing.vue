<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid items-center gap-12 pb-20 pt-16 lg:grid-cols-[1.2fr_1fr] lg:pt-20">
        <div>
          <p class="eyebrow-dark flex items-center gap-2"><UiAppIcon app="deepcost" size="xs" />DeepCost for {{ trade }}</p>
          <h1 class="h-display mt-4 text-white">{{ h1 }}</h1>
          <p class="lead-dark mt-6 max-w-xl">{{ lead }}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-accent">Book a live demo <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <NuxtLink to="/products/deepcost" class="btn-ghost-dark">See DeepCost</NuxtLink>
          </div>
        </div>
        <!-- What a line costs: the pricing rule, shown with this trade's item groups -->
        <figure class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur" aria-label="Example item groups for this trade">
          <figcaption class="text-xs font-semibold uppercase tracking-wider text-cyan-300">Item groups you price in DeepCost</figcaption>
          <ul class="mt-4 space-y-2">
            <li v-for="g in itemGroups" :key="g" class="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white">
              <span>{{ g }}</span><i class="fa-solid fa-check text-xs text-cyan-400" aria-hidden="true"></i>
            </li>
          </ul>
          <p class="mt-4 rounded-xl bg-white/10 px-4 py-3 text-sm text-ink-100"><b class="text-white">Line cost</b> = quantity × (material + installation price), from your library or your override.</p>
          <p class="mt-2 text-[11px] text-ink-300">Illustration — item groups are templates you define per trade.</p>
        </figure>
      </div>
    </section>

    <!-- Problems -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader :eyebrow="`${trade} estimating today`" :title="problemTitle" />
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </div>
      </div>
    </section>

    <!-- Workflow -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" :title="`A ${trade.toLowerCase()} tender in DeepCost`" lead="One linked record from the tender to the priced Form of Tender. Steps marked AI use DeepCost's AI features; your estimators review every output." />
        <div class="mt-12"><UiFlowPipeline :steps="flow" :interval="2000" /></div>
      </div>
    </section>

    <!-- Features -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader :eyebrow="`Built for ${trade.toLowerCase()}`" :title="featureTitle" />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UiFeatureCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :text="f.text" />
        </div>
      </div>
    </section>

    <!-- Other trades + guides -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-8 lg:grid-cols-2">
        <div>
          <p class="eyebrow">Other trades</p>
          <ul class="mt-4 grid gap-3 sm:grid-cols-2">
            <li v-for="t in otherTrades" :key="t.to">
              <NuxtLink :to="t.to" class="card flex items-center gap-3 hover:border-brand-200"><i :class="t.icon" class="text-brand-600" aria-hidden="true"></i><span class="font-semibold">{{ t.name }} estimating</span></NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="eyebrow">Guides</p>
          <ul class="mt-4 space-y-3">
            <li v-for="g in guideLinks" :key="g.to">
              <NuxtLink :to="g.to" class="card flex items-center justify-between gap-3 hover:border-brand-200"><span class="font-semibold">{{ g.title }}</span><i class="fa-solid fa-arrow-right text-xs text-brand-600" aria-hidden="true"></i></NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-tight">
      <div class="container-site grid gap-10 py-6 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" :title="`${trade} estimating questions`" />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand :title="`See DeepCost on a ${trade.toLowerCase()} tender`" lead="Bring a recent tender to a 30-minute demo. We will walk through the take-off, pricing and Form of Tender on your own trade." />
  </div>
</template>

<script setup lang="ts">
// Shared layout for DeepCost trade pages (/estimating/<trade>). Content and SEO come from the page.
interface Card { icon: string; title: string; text: string }
const props = defineProps<{
  slug: string; trade: string; seoTitle: string; seoDescription: string
  h1: string; lead: string; itemGroups: string[]
  problemTitle: string; problems: Card[]
  featureTitle: string; features: Card[]
  guideLinks: { to: string; title: string }[]
  faqs: { q: string; a: string }[]
}>()

const all = [
  { slug: 'fire-protection', name: 'Fire protection', icon: 'fa-solid fa-fire-extinguisher', to: '/estimating/fire-protection' },
  { slug: 'acmv', name: 'ACMV', icon: 'fa-solid fa-fan', to: '/estimating/acmv' },
  { slug: 'elv', name: 'ELV', icon: 'fa-solid fa-network-wired', to: '/estimating/elv' }
]
const otherTrades = all.filter((t) => t.slug !== props.slug)

const flow = [
  { title: 'Tender received', text: 'Opportunity, trades, team and submission date.', icon: 'fa-solid fa-inbox' },
  { title: 'AI tender summary', text: 'Key fields read from the tender documents.', icon: 'fa-solid fa-file-lines', ai: true },
  { title: 'Area schedule', text: 'Building, floor, room and hazard class.', icon: 'fa-solid fa-layer-group' },
  { title: 'MTO per area', text: 'Item groups priced from your library.', icon: 'fa-solid fa-calculator' },
  { title: 'FOT AI', text: 'Prices filled on the client’s BOQ PDF.', icon: 'fa-solid fa-table-list', ai: true },
  { title: 'Submit', text: 'Area, component and FOT reports to Excel or PDF.', icon: 'fa-solid fa-file-export' }
]

const config = useRuntimeConfig()
const pageUrl = `${config.public.siteUrl}/estimating/${props.slug}`
useSeoMeta({ title: props.seoTitle, description: props.seoDescription, ogTitle: `${props.seoTitle} | CCorex`, ogDescription: props.seoDescription })
useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: `DeepCost for ${props.trade}`,
        applicationCategory: 'BusinessApplication', applicationSubCategory: `${props.trade} estimating`, operatingSystem: 'Web',
        url: pageUrl, description: props.seoDescription,
        isPartOf: { '@type': 'SoftwareApplication', name: 'CCorex', url: config.public.siteUrl },
        publisher: { '@type': 'Organization', name: 'Newham Technological Solutions' }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: props.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })
    }
  ]
})
</script>
