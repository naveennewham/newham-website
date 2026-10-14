<template>
  <div v-if="ind">
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative py-20 lg:py-24">
        <NuxtLink to="/industries" class="text-sm font-medium text-ink-300 hover:text-white"><i class="fa-solid fa-arrow-left mr-1 text-xs" aria-hidden="true"></i> All industries</NuxtLink>
        <div class="mt-6 flex items-center gap-4">
          <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-400"><i :class="ind.icon" class="text-lg" aria-hidden="true"></i></span>
          <p class="eyebrow-dark">Industry</p>
        </div>
        <h1 class="h-display mt-4 max-w-3xl text-white">{{ ind.name }}</h1>
        <p class="lead-dark mt-6 max-w-2xl">{{ ind.summary }}</p>
        <ul class="mt-6 flex flex-wrap gap-2"><li v-for="s in ind.scope" :key="s" class="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-ink-100">{{ s }}</li></ul>
      </div>
    </section>

    <section class="section">
      <div class="container-site">
        <UiSectionHeader :title="`How Newham helps on ${ind.name.toLowerCase()} projects`" eyebrow="Three pillars" />
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <UiFeatureCard icon="fa-solid fa-laptop-code" title="CCorex software" :text="ind.software" to="/ccorex" link-label="CCorex" />
          <UiFeatureCard icon="fa-solid fa-user-group" title="Talent outsourcing" :text="ind.talent" to="/talent-outsourcing" link-label="Talent outsourcing" />
          <UiFeatureCard icon="fa-solid fa-fire-flame-curved" title="Engineering services" :text="ind.engineering" to="/engineering-services" link-label="Engineering services" />
        </div>
      </div>
    </section>

    <section class="section-tight bg-ink-50">
      <div class="container-site">
        <p class="text-sm font-semibold text-ink-900">Other sectors</p>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li v-for="o in others" :key="o.id"><NuxtLink :to="`/industries/${o.id}`" class="chip hover:border-brand-300 hover:text-brand-700">{{ o.name }}</NuxtLink></li>
        </ul>
      </div>
    </section>

    <UiCtaBand :title="`Talk to us about your ${ind.name.toLowerCase()} project`" />
  </div>
</template>

<script setup lang="ts">
import { industries, industryById } from '~/data/industries'

const route = useRoute()
const id = String(route.params.id)
const ind = industryById(id)
if (!ind) throw createError({ statusCode: 404, statusMessage: 'Industry not found', fatal: true })
const others = industries.filter((i) => i.id !== id)

const siteUrl = useRuntimeConfig().public.siteUrl as string
useSeoMeta({
  title: `${ind!.name}: M&E software and engineers`,
  description: `${ind!.summary} How Newham's CCorex software, dedicated engineers and engineering services support ${ind!.name.toLowerCase()} projects.`.slice(0, 160),
  ogTitle: `${ind!.name} — Newham`,
  ogDescription: ind!.summary,
  ogUrl: `${siteUrl}/industries/${id}`
})
useHead({ link: [{ rel: 'canonical', href: `${siteUrl}/industries/${id}` }] })
</script>
