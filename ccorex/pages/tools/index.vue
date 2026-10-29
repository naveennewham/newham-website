<template>
  <div>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative pb-16 pt-16 lg:pt-20">
        <p class="eyebrow-dark">Free calculators</p>
        <h1 class="h-display mt-4 max-w-3xl text-white">Free payroll and workforce calculators for Singapore</h1>
        <p class="lead-dark mt-5 max-w-2xl">Quick estimates of CPF, SDL, overtime pay, prorated annual leave and the construction foreign worker levy, using the CPF Board’s and MOM’s published rates. Free to use, with no sign-up, and nothing you enter is saved.</p>
      </div>
    </section>

    <section class="section">
      <div class="container-site">
        <ul class="grid gap-5 md:grid-cols-3">
          <li v-for="t in tools" :key="t.slug">
            <NuxtLink :to="toolPath(t)" class="card card-hover flex h-full flex-col">
              <span class="icon-tile"><i :class="t.icon" aria-hidden="true"></i></span>
              <h2 class="mt-5 text-lg font-semibold text-ink-900">{{ t.name }}</h2>
              <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{{ t.short }}</p>
              <span class="mt-5 text-sm font-semibold text-brand-700">Open the calculator <i class="fa-solid fa-arrow-right ml-1 text-xs" aria-hidden="true"></i></span>
            </NuxtLink>
          </li>
        </ul>
        <p class="mt-10 text-sm text-ink-600">
          Want the full rules behind each figure? Read the guides on <NuxtLink to="/resources/how-to-calculate-cpf-contributions" class="font-semibold text-brand-700 hover:text-brand-900">CPF</NuxtLink>,
          <NuxtLink to="/resources/overtime-calculation-singapore" class="font-semibold text-brand-700 hover:text-brand-900">overtime</NuxtLink> and the
          <NuxtLink to="/resources/foreign-worker-levy-construction-singapore" class="font-semibold text-brand-700 hover:text-brand-900">foreign worker levy</NuxtLink>, or see
          <NuxtLink to="/solutions/payroll-software-singapore" class="font-semibold text-brand-700 hover:text-brand-900">how DeepHR runs Singapore payroll</NuxtLink>.
        </p>
      </div>
    </section>

    <UiCtaBand title="Run CPF and overtime on every pay run" lead="DeepHR works out CPF, SDL, self-help group funds and MOM overtime from approved attendance and leave. Book a 30-minute demo." />
  </div>
</template>

<script setup lang="ts">
import { tools, toolPath } from '~/data/tools'

const config = useRuntimeConfig()
const pageUrl = `${config.public.siteUrl}/tools`
const description = 'Free Singapore calculators for employers: CPF contributions with 2026 rates, the Skills Development Levy, overtime pay and prorated annual leave under the Employment Act, and the construction foreign worker levy.'
useSeoMeta({ title: 'Free CPF, SDL, overtime, leave and levy calculators (Singapore)', description, ogTitle: 'Free CPF, SDL, overtime, leave and levy calculators (Singapore) | CCorex', ogDescription: description })
useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'ItemList', name: 'Free calculators',
      itemListElement: tools.map((t, i) => ({ '@type': 'ListItem', position: i + 1, url: `${config.public.siteUrl}${toolPath(t)}`, name: t.name }))
    })
  }]
})
</script>
