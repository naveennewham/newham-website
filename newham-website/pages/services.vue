<template>
  <div>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative py-20 lg:py-24">
        <p class="eyebrow-dark">Services</p>
        <h1 class="h-display mt-4 max-w-4xl text-white">Software, talent and engineering for construction teams</h1>
        <p class="lead-dark mt-6 max-w-2xl">Three ways to work with Newham. Use one on its own, or combine them so our engineers and our software work from the same data.</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink to="/appointment" class="btn-accent">Book a discovery call <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
          <NuxtLink to="/pricing" class="btn-ghost-dark">How we price</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container-site"><HomePillars /></div>
    </section>

    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Which fits?" title="Choose by the problem you have" />
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <UiFeatureCard v-for="c in choices" :key="c.title" :icon="c.icon" :title="c.title" :text="c.text" :to="c.to" :link-label="c.label" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How we work" title="The same steps for every engagement" />
        <div class="mt-12"><UiStepFlow :steps="steps" /></div>
      </div>
    </section>

    <UiCtaBand />
  </div>
</template>

<script setup lang="ts">
const siteUrl = useRuntimeConfig().public.siteUrl as string
useSeoMeta({
  title: 'Services: software, M&E talent and engineering',
  description: 'Newham services for construction: CCorex software, dedicated M&E engineering talent, and MEP design and commercial support for Singapore contractors.',
  ogTitle: 'Newham services',
  ogDescription: 'CCorex software, engineering talent outsourcing and construction engineering services.',
  ogUrl: siteUrl + '/services'
})
useHead({ link: [{ rel: 'canonical', href: siteUrl + '/services' }] })

const choices = [
  { icon: 'fa-solid fa-table-cells', title: 'Our data is everywhere', text: 'Estimates, budgets and payroll in separate spreadsheets and tools.', to: '/ccorex', label: 'CCorex software' },
  { icon: 'fa-solid fa-user-plus', title: 'We need more people', text: 'Ongoing drafting, estimating or tender work that needs dedicated capacity.', to: '/talent-outsourcing', label: 'Talent outsourcing' },
  { icon: 'fa-solid fa-clipboard-check', title: 'We need a deliverable', text: 'An MEP design (fire protection, ACMV, electrical, plumbing or ELV), a BOQ or a claim, done to scope.', to: '/engineering-services', label: 'Engineering services' }
]

const steps = [
  { title: 'Discovery call', text: 'A 30-minute call about your pipeline and gaps.' },
  { title: 'Scope & proposal', text: 'Deliverables, team and pricing in writing.' },
  { title: 'Onboarding', text: 'We learn your standards and tools.' },
  { title: 'Delivery & review', text: 'Regular reviews to adjust capacity.' }
]
</script>
