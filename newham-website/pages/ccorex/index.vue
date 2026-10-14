<template>
  <div>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-12 pb-20 pt-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:pt-20">
        <div>
          <p class="eyebrow-dark">Pillar 1 · Software</p>
          <h1 class="h-display mt-4 text-white">CCorex, our construction software suite</h1>
          <p class="lead-dark mt-6 max-w-xl">CCorex covers winning work, delivering it, and running the people and money behind it — estimating, project control and HR &amp; payroll on one sign-in, with AI where it saves the most time.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a :href="CCOREX_URL" target="_blank" rel="noopener" class="btn-accent">Visit ccorex.com <i class="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i></a>
            <a :href="CCOREX_SIGNIN_URL" class="btn-ghost-dark">Sign in</a>
          </div>
        </div>
        <UiBrowserFrame src="/images/product/ccorex-launcher.webp" alt="CCorex dashboard with the suite's apps under one login" url="ccorex.app / dashboard" :width="1618" :height="812" dark eager />
      </div>
    </section>

    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="The apps" title="One sign-in, one app per job" lead="A short overview. Each app has its full page on ccorex.com." />
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="a in apps" :key="a.slug">
            <component :is="a.local ? NuxtLink : 'a'" v-bind="a.local ? { to: a.local } : { href: ccorexAppUrl(a.slug), target: '_blank', rel: 'noopener' }" class="card-hover group flex h-full flex-col">
              <span class="flex h-11 w-11 items-center justify-center rounded-xl" :class="a.color"><i :class="a.icon" aria-hidden="true"></i></span>
              <span class="mt-5 flex items-center gap-2 text-lg font-semibold text-ink-900">{{ a.name }}
                <span v-if="a.ai" class="chip-ai px-2 py-0 text-[10px]">AI</span>
                <span v-else-if="a.status" class="chip px-2 py-0 text-[10px]">{{ a.status }}</span>
              </span>
              <span class="text-sm text-ink-500">{{ a.category }}</span>
              <span class="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{{ a.summary }}</span>
              <span class="mt-4 text-sm font-semibold text-brand-700 group-hover:text-brand-900">Learn more <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></span>
            </component>
          </li>
        </ul>
        <p class="mt-6 text-center text-sm text-ink-500">Deep Drive (document storage) and PDF Editor are coming soon.</p>
      </div>
    </section>

    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <p class="eyebrow">Software + specialists</p>
          <h2 class="mt-2 text-2xl font-bold sm:text-3xl">Buy the software, or let our engineers run it for you</h2>
          <p class="lead mt-3">Newham’s estimators, QS and BIM engineers can work in CCorex for you, or alongside your own team.</p>
        </div>
        <div class="flex flex-wrap gap-3 lg:justify-end">
          <NuxtLink to="/talent-outsourcing" class="btn-primary">Talent outsourcing</NuxtLink>
          <NuxtLink to="/engineering-services" class="btn-secondary">Engineering services</NuxtLink>
        </div>
      </div>
    </section>

    <UiCtaBand title="See CCorex on your own workflow" secondary-label="Visit ccorex.com" :secondary-to="CCOREX_URL" />
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'
import { ccorexApps, ccorexAppUrl, CCOREX_URL, CCOREX_SIGNIN_URL } from '~/data/ccorex'

useSeoMeta({
  title: 'CCorex construction software suite',
  description: 'CCorex by Newham: DeepCost tender estimation, DeepTrack project control, DeepHR HR & payroll, DeepPlan take-off and the ARIVU AI assistant on one sign-in.',
  ogTitle: 'CCorex — construction software by Newham',
  ogDescription: 'Estimating, project control and HR & payroll on one sign-in. Full details on ccorex.com.'
})
// Canonical product site is ccorex.com.
useHead({ link: [{ rel: 'canonical', href: CCOREX_URL + '/' }] })

const localPages: Record<string, string> = { deepcost: '/ccorex/deepcost', deeptrack: '/ccorex/deeptrack', deephr: '/ccorex/deephr', 'deepplan-ai': '/ccorex/deepplan-ai' }
const apps = ccorexApps.map((a) => ({ ...a, local: localPages[a.slug] }))
</script>
