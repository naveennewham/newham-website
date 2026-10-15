<template>
  <div v-if="t">
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative py-20 lg:py-24">
        <NuxtLink to="/case-studies" class="text-sm font-medium text-ink-300 hover:text-white"><i class="fa-solid fa-arrow-left mr-1 text-xs" aria-hidden="true"></i> All trades</NuxtLink>
        <div class="mt-6 flex items-center gap-4">
          <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-400"><i :class="t.icon" class="text-lg" aria-hidden="true"></i></span>
          <p class="eyebrow-dark">Project experience</p>
        </div>
        <h1 class="h-display mt-4 max-w-3xl text-white">{{ t.name }}</h1>
        <p class="lead-dark mt-6 max-w-2xl">{{ t.summary }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 class="h-section">Typical deliverables</h2>
          <ul class="mt-8 grid gap-3 sm:grid-cols-2">
            <li v-for="d in t.deliverables" :key="d" class="flex gap-3 rounded-xl border border-ink-100 bg-white p-4 shadow-card">
              <i class="fa-solid fa-circle-check mt-0.5 text-brand-600" aria-hidden="true"></i><span class="text-sm text-ink-800">{{ d }}</span>
            </li>
          </ul>
        </div>
        <aside class="space-y-6">
          <div class="card">
            <h2 class="text-base font-semibold">Standards &amp; formats</h2>
            <ul class="mt-3 flex flex-wrap gap-2"><li v-for="s in t.standards" :key="s" class="chip">{{ s }}</li></ul>
          </div>
          <div class="card">
            <h2 class="text-base font-semibold">Roles involved</h2>
            <ul class="mt-3 flex flex-wrap gap-2"><li v-for="r in t.roles" :key="r" class="chip">{{ r }}</li></ul>
          </div>
          <div class="card bg-ink-50">
            <h2 class="text-base font-semibold">Ways to engage</h2>
            <p class="mt-2 text-sm text-ink-600">Dedicated people through <NuxtLink to="/talent-outsourcing" class="font-semibold text-brand-700">talent outsourcing</NuxtLink>, or scoped deliverables through <NuxtLink to="/engineering-services" class="font-semibold text-brand-700">engineering services</NuxtLink>.</p>
          </div>
        </aside>
      </div>
    </section>

    <UiCtaBand :title="`Discuss your ${t.name.toLowerCase()} work`" />
  </div>
</template>

<script setup lang="ts">
import { tradeById } from '~/data/experience'
const route = useRoute()
const id = String(route.params.id)
const t = tradeById(id)
if (!t) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

const siteUrl = useRuntimeConfig().public.siteUrl as string
useSeoMeta({
  title: `${t!.name}: M&E project experience`,
  description: `${t!.summary}`.slice(0, 160),
  ogTitle: `${t!.name} — Newham project experience`,
  ogDescription: t!.summary,
  ogUrl: `${siteUrl}/case-studies/${id}`
})
useHead({ link: [{ rel: 'canonical', href: `${siteUrl}/case-studies/${id}` }] })
</script>
