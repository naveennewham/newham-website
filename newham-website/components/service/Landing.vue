<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid items-center gap-10 pb-20 pt-16 lg:grid-cols-[1.3fr_1fr] lg:pt-20">
        <div class="max-w-3xl">
          <p class="eyebrow-dark">{{ eyebrow }}</p>
          <h1 class="h-display mt-4 text-white">{{ title }}</h1>
          <p class="lead-dark mt-6 max-w-2xl">{{ lead }}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/appointment" class="btn-accent">{{ cta }} <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <a href="#scope" class="btn-ghost-dark">What we deliver</a>
          </div>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li v-for="c in chips" :key="c" class="rounded-full border border-white/15 px-3 py-1 text-xs text-ink-200">{{ c }}</li>
          </ul>
        </div>
        <UiLottie v-if="lottie" :src="lottie" :label="lottieLabel" class="mx-auto hidden aspect-square w-full max-w-md lg:block" />
      </div>
    </section>

    <!-- Problem -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader :eyebrow="problemEyebrow" :title="problemTitle" />
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </div>
      </div>
    </section>

    <!-- Scope -->
    <section id="scope" class="section scroll-mt-16 bg-ink-50">
      <div class="container-site">
        <UiSectionHeader :eyebrow="scopeEyebrow" :title="scopeTitle" :lead="scopeLead" />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <UiFeatureCard v-for="s in scope" :key="s.title" :icon="s.icon" :title="s.title" :text="s.text" />
        </div>
        <div v-if="note" class="mt-8 flex gap-4 rounded-2xl border border-brand-100 bg-brand-50 p-6">
          <i :class="note.icon" class="mt-1 text-brand-700" aria-hidden="true"></i>
          <div>
            <h3 class="font-semibold text-brand-900">{{ note.title }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-brand-900/80">{{ note.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" :title="stepsTitle" />
        <div class="mt-12"><UiStepFlow :steps="steps" /></div>
      </div>
    </section>

    <!-- Related -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-4 md:grid-cols-3">
        <NuxtLink v-for="r in related" :key="r.to" :to="r.to" class="card group">
          <p class="eyebrow">{{ r.eyebrow }}</p>
          <h2 class="mt-2 text-lg font-bold">{{ r.title }}</h2>
          <p class="mt-2 text-sm text-ink-600">{{ r.text }}</p>
          <span class="mt-4 inline-flex text-sm font-semibold text-brand-700 group-hover:text-brand-900">{{ r.cta }} <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></span>
        </NuxtLink>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-tight">
      <div class="container-site grid gap-10 py-6 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" :title="faqTitle" />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand :title="ctaTitle" :lead="ctaLead" />
  </div>
</template>

<script setup lang="ts">
// Shared layout for Newham service landing pages: hero, problem, scope, steps, related, FAQ, CTA.
// The page passes its content and SEO fields; this component also emits Service + FAQPage data.
interface Card { icon: string; title: string; text: string }
const props = defineProps<{
  path: string; seoTitle: string; seoDescription: string
  eyebrow: string; title: string; lead: string; cta: string; chips: string[]
  lottie?: string; lottieLabel?: string
  problemEyebrow: string; problemTitle: string; problems: Card[]
  scopeEyebrow: string; scopeTitle: string; scopeLead: string; scope: Card[]
  note?: Card
  stepsTitle: string; steps: { title: string; text: string }[]
  related: { to: string; eyebrow: string; title: string; text: string; cta: string }[]
  faqTitle: string; faqs: { q: string; a: string }[]
  ctaTitle: string; ctaLead: string
  serviceName: string; serviceType: string
}>()

const siteUrl = useRuntimeConfig().public.siteUrl as string
const pageUrl = siteUrl + props.path
useSeoMeta({ title: props.seoTitle, description: props.seoDescription, ogTitle: `${props.seoTitle} — Newham`, ogDescription: props.seoDescription, ogUrl: pageUrl })
useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Service', name: props.serviceName, serviceType: props.serviceType,
        description: props.seoDescription, url: pageUrl, areaServed: { '@type': 'Country', name: 'Singapore' },
        provider: { '@type': 'Organization', name: 'Newham Solutions Pte. Ltd.', url: siteUrl },
        hasOfferCatalog: { '@type': 'OfferCatalog', name: props.serviceName, itemListElement: props.scope.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title } })) }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: props.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })
    }
  ]
})
</script>
