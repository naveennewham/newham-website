<template>
  <div>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-12 pb-20 pt-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:pt-20">
        <div>
          <p class="eyebrow-dark">CCorex software · {{ app.category }}</p>
          <h1 class="h-display mt-4 text-white">{{ s.title }}</h1>
          <p class="lead-dark mt-6 max-w-xl">{{ s.lead }}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a :href="canonical" target="_blank" rel="noopener" class="btn-accent">Full details on ccorex.com <i class="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i></a>
            <NuxtLink to="/appointment" class="btn-ghost-dark">Book a discovery call</NuxtLink>
          </div>
          <p v-if="s.note" class="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-ink-200"><i class="fa-solid fa-flask text-cyan-400" aria-hidden="true"></i>{{ s.note }}</p>
        </div>
        <UiBrowserFrame v-if="s.screenshot" :src="s.screenshot.src" :alt="s.screenshot.alt" :url="s.screenshot.url" :width="s.screenshot.width" :height="s.screenshot.height" dark eager />
        <img v-else-if="s.image" :src="s.image.src" :alt="s.image.alt" :width="s.image.width" :height="s.image.height" fetchpriority="high" class="w-full rounded-2xl border border-white/10 shadow-frame" />
      </div>
    </section>

    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <UiSectionHeader eyebrow="At a glance" :title="`What ${s.name} does`" lead="A short summary. Screens, plans and the full feature list are on ccorex.com." />
        <ul class="space-y-4">
          <li v-for="p in s.points" :key="p" class="flex gap-3 rounded-xl border border-ink-100 bg-white p-4 shadow-card">
            <i class="fa-solid fa-circle-check mt-0.5 text-brand-600" aria-hidden="true"></i>
            <span class="text-ink-800">{{ p }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <p class="eyebrow">Software + specialists</p>
          <h2 class="mt-2 text-2xl font-bold sm:text-3xl">Need people to run it as well?</h2>
          <p class="lead mt-3">Newham’s estimators, QS and BIM engineers can work in {{ s.name }} for you, or alongside your team.</p>
        </div>
        <div class="flex flex-wrap gap-3 lg:justify-end">
          <NuxtLink to="/talent-outsourcing" class="btn-primary">Talent outsourcing</NuxtLink>
          <NuxtLink to="/engineering-services" class="btn-secondary">Engineering services</NuxtLink>
        </div>
      </div>
    </section>

    <UiCtaBand :title="`Talk to us about ${s.name}`" secondary-label="Visit ccorex.com" :secondary-to="canonical" />
  </div>
</template>

<script setup lang="ts">
// Short CCorex app summary on newhamtech.com, canonicalised to the ccorex.com product page.
import { ccorexSummaries, ccorexApps, ccorexAppUrl } from '~/data/ccorex'

const props = defineProps<{ slug: string; path: string }>()
const s = ccorexSummaries[props.slug]!
const app = ccorexApps.find((a) => a.slug === props.slug)!
const canonical = ccorexAppUrl(props.slug)

useSeoMeta({
  title: `${s.name} — CCorex`,
  description: `${s.lead} Part of the CCorex suite by Newham.`.slice(0, 160),
  ogTitle: s.title,
  ogDescription: s.lead
})
// The canonical page for each app is on ccorex.com.
useHead({ link: [{ rel: 'canonical', href: canonical }] })
</script>
