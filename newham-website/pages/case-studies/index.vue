<template>
  <div>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-12 pb-20 pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-20">
        <div>
          <p class="eyebrow-dark">Project experience</p>
          <h1 class="h-display mt-4 text-white">The M&amp;E work we do, trade by trade</h1>
          <p class="lead-dark mt-6 max-w-xl">What our engineers deliver for each trade, the standards they work to and the roles involved. Ask us on a discovery call for examples relevant to your project.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/appointment" class="btn-accent">Book a discovery call <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
          </div>
        </div>
        <img src="/images/photos/bim-mep-building.webp" alt="Building cut-away showing MEP services modelled in BIM (illustration)" width="2000" height="1333" fetchpriority="high" class="w-full rounded-2xl border border-white/10 shadow-frame" />
      </div>
    </section>

    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Trades" title="Experience by trade" />
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="t in trades" :key="t.id">
            <NuxtLink :to="`/case-studies/${t.id}`" class="card-hover group flex h-full flex-col">
              <span class="icon-tile"><i :class="t.icon" aria-hidden="true"></i></span>
              <h2 class="mt-5 text-lg font-semibold group-hover:text-brand-700">{{ t.name }}</h2>
              <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{{ t.summary }}</p>
              <span class="mt-5 text-sm font-semibold text-brand-700">Deliverables <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <UiCtaBand />
  </div>
</template>

<script setup lang="ts">
import { trades } from '~/data/experience'
const siteUrl = useRuntimeConfig().public.siteUrl as string
useSeoMeta({
  title: 'Project experience by M&E trade',
  description: 'What Newham engineers deliver across fire protection, ACMV, ELV, plumbing, electrical and commercial support, and the Singapore standards they work to.',
  ogTitle: 'Project experience — Newham',
  ogDescription: 'M&E deliverables, standards and roles by trade.',
  ogUrl: siteUrl + '/case-studies'
})
useHead({ link: [{ rel: 'canonical', href: siteUrl + '/case-studies' }] })
</script>
