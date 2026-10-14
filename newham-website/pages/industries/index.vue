<template>
  <div>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-12 pb-20 pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-20">
        <div>
          <p class="eyebrow-dark">Industries</p>
          <h1 class="h-display mt-4 text-white">M&amp;E support for the projects you build</h1>
          <p class="lead-dark mt-6 max-w-xl">Our software and engineers are built around the M&amp;E packages of building and infrastructure projects — fire protection, ACMV, ELV, plumbing and electrical.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/appointment" class="btn-accent">Book a discovery call <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
          </div>
        </div>
        <img src="/images/photos/hero-building-digital.webp" alt="Illustration of a building model with MEP services and engineers" width="2000" height="1116" fetchpriority="high" class="w-full rounded-2xl border border-white/10 shadow-frame" />
      </div>
    </section>

    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Sectors" title="Sectors we support" lead="Choose a sector to see the typical M&E scope and how software, talent and engineering services fit." />
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="ind in industries" :key="ind.id">
            <NuxtLink :to="`/industries/${ind.id}`" class="card-hover group flex h-full flex-col">
              <span class="icon-tile"><i :class="ind.icon" aria-hidden="true"></i></span>
              <h2 class="mt-5 text-lg font-semibold group-hover:text-brand-700">{{ ind.name }}</h2>
              <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{{ ind.summary }}</p>
              <ul class="mt-4 flex flex-wrap gap-2"><li v-for="s in ind.scope" :key="s" class="chip">{{ s }}</li></ul>
              <span class="mt-5 text-sm font-semibold text-brand-700">How we help <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <UiCtaBand />
  </div>
</template>

<script setup lang="ts">
import { industries } from '~/data/industries'
const siteUrl = useRuntimeConfig().public.siteUrl as string
useSeoMeta({
  title: 'Industries: M&E support by sector',
  description: 'How Newham supports M&E work on commercial, residential, industrial, data centre, healthcare, infrastructure and retail projects with software and engineers.',
  ogTitle: 'Industries Newham supports',
  ogDescription: 'Typical M&E scope by sector and how CCorex software, dedicated engineers and engineering services help.',
  ogUrl: siteUrl + '/industries'
})
useHead({ link: [{ rel: 'canonical', href: siteUrl + '/industries' }] })
</script>
