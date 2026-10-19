<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid items-center gap-12 pb-20 pt-16 lg:grid-cols-[1.2fr_1fr] lg:pt-20">
        <div>
          <p class="eyebrow-dark flex items-center gap-2"><UiAppIcon :app="app" size="xs" />{{ eyebrow }}</p>
          <h1 class="h-display mt-4 text-white">{{ h1 }}</h1>
          <p class="lead-dark mt-6 max-w-xl">{{ lead }}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-accent">Book a live demo <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <NuxtLink :to="`/products/${app}`" class="btn-ghost-dark">See {{ appName }}</NuxtLink>
            <a v-if="earlyAccess?.length" href="#early-access" class="btn-ghost-dark">Singapore early access</a>
          </div>
        </div>
        <figure class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur" :aria-label="`What ${appName} covers`">
          <figcaption class="text-xs font-semibold uppercase tracking-wider text-cyan-300">In {{ appName }}</figcaption>
          <ul class="mt-4 space-y-2">
            <li v-for="p in heroPoints" :key="p" class="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white">
              <span>{{ p }}</span><i class="fa-solid fa-check text-xs text-cyan-400" aria-hidden="true"></i>
            </li>
          </ul>
        </figure>
      </div>
    </section>

    <!-- Problems -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="The problem today" :title="problemTitle" />
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </div>
      </div>
    </section>

    <!-- Workflow -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" :title="flowTitle" />
        <div class="mt-12"><UiFlowPipeline :steps="flow" :interval="2000" /></div>
      </div>
    </section>

    <!-- Features -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="What you get" :title="featureTitle" />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UiFeatureCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :text="f.text" />
        </div>
      </div>
    </section>

    <SolutionEarlyAccess v-if="earlyAccess?.length" :items="earlyAccess" />

    <!-- Other solutions + guides -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-8 lg:grid-cols-2">
        <div>
          <p class="eyebrow">Also for Singapore contractors</p>
          <ul class="mt-4 grid gap-3">
            <li v-for="s in otherSolutions" :key="s.to">
              <NuxtLink :to="s.to" class="card flex items-center gap-3 hover:border-brand-200"><i :class="s.icon" class="text-brand-600" aria-hidden="true"></i><span class="font-semibold">{{ s.name }}</span></NuxtLink>
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
        <UiSectionHeader eyebrow="FAQ" title="Questions we are asked" />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand :title="ctaTitle" :lead="ctaLead" />
  </div>
</template>

<script setup lang="ts">
// Shared layout for search-led solution pages (/solutions/<slug>). Content and SEO come from the page.
interface Card { icon: string; title: string; text: string }
const props = defineProps<{
  slug: string; app: 'deeptrack' | 'deephr'; appName: string; eyebrow: string
  seoTitle: string; seoDescription: string; h1: string; lead: string; heroPoints: string[]
  problemTitle: string; problems: Card[]
  flowTitle: string; flow: { title: string; text: string; icon: string }[]
  featureTitle: string; features: Card[]
  guideLinks: { to: string; title: string }[]
  faqs: { q: string; a: string }[]
  ctaTitle: string; ctaLead: string
  earlyAccess?: string[]
}>()

const all = [
  { slug: 'construction-cost-control-software', name: 'Construction cost control software', icon: 'fa-solid fa-chart-line', to: '/solutions/construction-cost-control-software' },
  { slug: 'progress-claim-software', name: 'Progress claim software', icon: 'fa-solid fa-file-invoice-dollar', to: '/solutions/progress-claim-software' },
  { slug: 'construction-payroll-software', name: 'Construction payroll software', icon: 'fa-solid fa-money-check-dollar', to: '/solutions/construction-payroll-software' },
  { slug: 'construction-hr-software', name: 'HR software for construction', icon: 'fa-solid fa-people-group', to: '/solutions/construction-hr-software' },
  { slug: 'foreign-worker-attendance-app', name: 'Foreign worker attendance app', icon: 'fa-solid fa-user-check', to: '/solutions/foreign-worker-attendance-app' },
  { slug: 'estimating', name: 'MEP estimating and BOQ software', icon: 'fa-solid fa-calculator', to: '/products/deepcost' }
]
const otherSolutions = all.filter((s) => s.slug !== props.slug)

const config = useRuntimeConfig()
const pageUrl = `${config.public.siteUrl}/solutions/${props.slug}`
useSeoMeta({ title: props.seoTitle, description: props.seoDescription, ogTitle: `${props.seoTitle} | CCorex`, ogDescription: props.seoDescription })
useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: props.appName,
        applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: pageUrl, description: props.seoDescription,
        areaServed: { '@type': 'Country', name: 'Singapore' },
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
