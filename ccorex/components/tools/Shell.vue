<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative pb-14 pt-14 lg:pt-16">
        <nav aria-label="Breadcrumb" class="text-xs text-ink-300">
          <NuxtLink to="/tools" class="hover:text-white">Free calculators</NuxtLink>
          <span class="mx-2" aria-hidden="true">/</span><span class="text-ink-200">{{ tool.name }}</span>
        </nav>
        <p class="eyebrow-dark mt-5">{{ eyebrow }}</p>
        <h1 class="h-display mt-4 max-w-4xl text-white">{{ h1 }}</h1>
        <p class="lead-dark mt-5 max-w-2xl">{{ lead }}</p>
      </div>
    </section>

    <!-- Calculator -->
    <section class="section-tight">
      <div class="container-site">
        <slot />
        <p class="mt-6 flex gap-2 text-xs leading-relaxed text-ink-500">
          <i class="fa-solid fa-circle-info mt-0.5" aria-hidden="true"></i>
          <span>{{ disclaimer }} Nothing you enter leaves your browser or is saved.</span>
        </p>
      </div>
    </section>

    <!-- How it is calculated -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <UiSectionHeader eyebrow="Method" title="How it is calculated" />
          <NuxtLink :to="tool.guide.to" class="card mt-8 flex items-center justify-between gap-3 hover:border-brand-200">
            <span><span class="block text-xs font-semibold uppercase tracking-wider text-ink-500">Full guide</span><span class="font-semibold">{{ tool.guide.title }}</span></span>
            <i class="fa-solid fa-arrow-right text-xs text-brand-600" aria-hidden="true"></i>
          </NuxtLink>
        </div>
        <div class="tool-prose text-sm leading-relaxed text-ink-700"><slot name="method" /></div>
      </div>
    </section>

    <!-- DeepHR -->
    <section class="section-tight">
      <div class="container-site">
        <div class="flex flex-col gap-6 rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-2xl">
            <p class="eyebrow">{{ cta.eyebrow }}</p>
            <p class="mt-3 text-ink-700">{{ cta.text }}</p>
          </div>
          <div class="flex shrink-0 flex-wrap gap-3">
            <NuxtLink :to="cta.to" class="btn-primary">{{ cta.label }}</NuxtLink>
            <NuxtLink to="/products/deephr" class="btn-secondary">See DeepHR</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ + other tools -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 py-6 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <UiSectionHeader eyebrow="FAQ" title="Questions people ask" />
          <p class="mt-8 text-sm font-semibold text-ink-900">Other free calculators</p>
          <ul class="mt-3 space-y-2">
            <li v-for="t in others" :key="t.slug"><NuxtLink :to="toolPath(t)" class="text-sm font-semibold text-brand-700 hover:text-brand-900">{{ t.name }}</NuxtLink></li>
          </ul>
        </div>
        <UiFaqList :items="faqs" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Shared layout for the free calculators (/tools/<slug>). The calculator and the method text come from the page.
import { tools, toolPath } from '~/data/tools'

const props = defineProps<{
  slug: string; seoTitle: string; seoDescription: string; eyebrow: string; h1: string; lead: string
  disclaimer: string; faqs: { q: string; a: string }[]
  cta: { eyebrow: string; text: string; to: string; label: string }
}>()

const tool = tools.find((t) => t.slug === props.slug)!
const others = tools.filter((t) => t.slug !== props.slug)
const config = useRuntimeConfig()
const pageUrl = `${config.public.siteUrl}${toolPath(tool)}`
useSeoMeta({ title: props.seoTitle, description: props.seoDescription, ogTitle: `${props.seoTitle} | CCorex`, ogDescription: props.seoDescription })
useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'WebApplication', name: tool.name, url: pageUrl, description: props.seoDescription,
      applicationCategory: 'BusinessApplication', operatingSystem: 'Web', isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'SGD' },
      areaServed: { '@type': 'Country', name: 'Singapore' },
      publisher: { '@type': 'Organization', name: 'Newham Solutions Pte. Ltd.', url: config.public.siteUrl }
    })
  }]
})
</script>

<style scoped>
.tool-prose :deep(h3) { @apply mt-6 text-base font-semibold text-ink-900; }
.tool-prose :deep(h3:first-child) { @apply mt-0; }
.tool-prose :deep(p) { @apply mt-3; }
.tool-prose :deep(ul) { @apply mt-3 list-disc space-y-1.5 pl-5; }
.tool-prose :deep(a) { @apply font-semibold text-brand-700 hover:text-brand-900; }
.tool-prose :deep(table) { @apply mt-4 w-full overflow-hidden rounded-xl border border-ink-100 bg-white text-left text-sm; }
.tool-prose :deep(th) { @apply bg-ink-50 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink-500; }
.tool-prose :deep(td) { @apply border-t border-ink-100 px-4 py-2.5; }
.tool-prose :deep(code) { @apply rounded bg-white px-1.5 py-0.5 text-[13px] text-ink-900; }
</style>
