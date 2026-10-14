<template>
  <div>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative py-20 lg:py-24">
        <p class="eyebrow-dark">Pricing</p>
        <h1 class="h-display mt-4 max-w-3xl text-white">How we price our work</h1>
        <p class="lead-dark mt-6 max-w-2xl">Every engagement is quoted for your scope. Here is how each pillar is charged, so you know what to expect before the discovery call.</p>
      </div>
    </section>

    <section class="section">
      <div class="container-site grid gap-6 lg:grid-cols-3">
        <div v-for="m in models" :key="m.title" class="card flex flex-col p-7">
          <span class="icon-tile"><i :class="m.icon" aria-hidden="true"></i></span>
          <h2 class="mt-5 text-xl font-bold">{{ m.title }}</h2>
          <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ m.text }}</p>
          <ul class="mt-5 flex-1 space-y-2.5 text-sm">
            <li v-for="b in m.bullets" :key="b" class="flex gap-2.5 text-ink-700"><i class="fa-solid fa-check mt-1 text-brand-600" aria-hidden="true"></i>{{ b }}</li>
          </ul>
          <a v-if="m.external" :href="m.to" target="_blank" rel="noopener" class="btn-secondary mt-7">{{ m.cta }} <i class="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i></a>
          <NuxtLink v-else :to="m.to" class="btn-secondary mt-7">{{ m.cta }}</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="Principles" title="What applies to every quote" />
        <ul class="grid gap-4 sm:grid-cols-2">
          <li v-for="p in principles" :key="p.title" class="card p-5">
            <p class="font-semibold text-ink-900">{{ p.title }}</p>
            <p class="mt-1 text-sm text-ink-600">{{ p.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <UiCtaBand title="Get a quote for your scope" lead="Tell us about your pipeline and team on a 30-minute discovery call. We will follow up with a written proposal." />
  </div>
</template>

<script setup lang="ts">
import { CCOREX_URL } from '~/data/ccorex'
const siteUrl = useRuntimeConfig().public.siteUrl as string
useSeoMeta({
  title: 'Pricing for software, talent and engineering',
  description: 'How Newham prices CCorex software, monthly dedicated M&E engineers and fire protection or commercial engineering services: retainer, project or hybrid.',
  ogTitle: 'How Newham prices its work',
  ogDescription: 'CCorex subscriptions, monthly dedicated engineers, and retainer or project-based engineering services.',
  ogUrl: siteUrl + '/pricing'
})
useHead({ link: [{ rel: 'canonical', href: siteUrl + '/pricing' }] })

const models = [
  {
    icon: 'fa-solid fa-laptop-code', title: 'CCorex software',
    text: 'Per-user subscription to the CCorex apps your business needs. Plans and pricing are on ccorex.com.',
    bullets: ['Start with one app and add more', 'One sign-in across the suite', 'Onboarding planned with you'],
    to: CCOREX_URL + '/pricing', cta: 'CCorex plans', external: true
  },
  {
    icon: 'fa-solid fa-user-group', title: 'Talent outsourcing',
    text: 'A monthly fee per dedicated professional, based on role, seniority and hours.',
    bullets: ['Single specialist, project team or managed capacity', 'No recruitment fees', 'Scale up or down month to month'],
    to: '/talent-outsourcing', cta: 'Talent outsourcing'
  },
  {
    icon: 'fa-solid fa-fire-flame-curved', title: 'Engineering services',
    text: 'Retainer, project-based or a hybrid of both, for fire protection design and commercial support.',
    bullets: ['Retainer for a steady pipeline', 'Fixed price per deliverable', 'Hybrid: retainer plus project top-ups'],
    to: '/engineering-services', cta: 'Engineering services'
  }
]

const principles = [
  { title: 'Scope in writing', text: 'Deliverables, team, timelines and price are agreed before work starts.' },
  { title: 'Priced in SGD', text: 'Services are billed monthly in Singapore dollars.' },
  { title: 'No setup fees', text: 'No recruitment or setup fees for talent or engineering services.' },
  { title: 'Third-party costs shown separately', text: 'PE endorsement and other third-party fees are quoted separately.' }
]
</script>
