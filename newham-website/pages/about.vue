<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-12 pb-20 pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-20">
        <div>
          <p class="eyebrow-dark">About Newham</p>
          <h1 class="h-display mt-4 text-white">A construction partner that builds software <span class="text-cyan-400">and</span> does the engineering.</h1>
          <p class="lead-dark mt-6 max-w-xl">Newham Technological Solutions works with construction businesses in Singapore and India in three ways: we build CCorex construction software, we provide dedicated M&amp;E engineering professionals, and we deliver scoped engineering services.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/appointment" class="btn-accent">Book a discovery call <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <NuxtLink to="/contact" class="btn-ghost-dark">Contact us</NuxtLink>
          </div>
        </div>
        <AboutPillarHub />
      </div>
    </section>

    <!-- Who we are -->
    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-2 lg:items-start">
        <UiSectionHeader eyebrow="Who we are" title="Built around how M&E work really gets done" />
        <div class="space-y-5 text-ink-700">
          <p class="lead">Construction firms in Singapore face the same squeeze: tenders keep coming, experienced M&amp;E engineers are hard to hire, and the work is still spread across spreadsheets, email and paper.</p>
          <p>Our engineering work — take-offs, BOQs, shop drawings, fire protection design — and our software sit side by side. <a :href="CCOREX_URL" target="_blank" rel="noopener" class="font-semibold text-brand-700 hover:text-brand-900">CCorex</a> is designed around the same estimating, project and payroll problems our engineers deal with, and our engineers know how to use it.</p>
          <p>The result is a partner that can give you the tools, the people, or both — and that understands the codes, the trades and the paperwork behind a Singapore M&amp;E package.</p>
        </div>
      </div>
    </section>

    <!-- Pillars -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="What we do" title="Three pillars, one partner" lead="Engage one pillar on its own, or combine them so software and specialists work from the same data." />
        <div class="mt-12"><HomePillars /></div>
      </div>
    </section>

    <!-- Singapore focus -->
    <section class="section">
      <div class="container-site grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <img src="/images/photos/bim-mep-building.webp" alt="Building cut-away showing MEP services modelled in BIM (illustration)" width="2000" height="1333" loading="lazy" decoding="async" class="w-full rounded-2xl border border-ink-100 shadow-lift" />
        <div>
          <UiSectionHeader eyebrow="Singapore focus" title="Local codes, local workflows" lead="Our engineers are trained to the standards Singapore projects are checked against, and our software is built for local payroll and paperwork." />
          <ul class="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            <li v-for="f in focus" :key="f.title" class="flex gap-3">
              <span class="icon-tile h-9 w-9 shrink-0 text-sm"><i :class="f.icon" aria-hidden="true"></i></span>
              <div><p class="font-semibold text-ink-900">{{ f.title }}</p><p class="text-sm text-ink-600">{{ f.text }}</p></div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- How we work -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How we work" title="Clear scope, dedicated people, regular review" lead="Every engagement — software, talent or services — follows the same steps." />
        <div class="mt-12"><UiStepFlow :steps="steps" /></div>
      </div>
    </section>

    <!-- Values -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Our values" title="How we behave with clients" />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <UiFeatureCard v-for="v in values" :key="v.title" :icon="v.icon" :title="v.title" :text="v.text" />
        </div>
      </div>
    </section>

    <UiCtaBand title="Let's talk about your projects" />
  </div>
</template>

<script setup lang="ts">
import { CCOREX_URL } from '~/data/ccorex'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl as string

useSeoMeta({
  title: 'About Newham Technological Solutions',
  description: 'Newham builds CCorex construction software and provides dedicated M&E engineers and engineering services to contractors and consultants in Singapore.',
  ogTitle: 'About Newham — construction software and specialist engineers',
  ogDescription: 'Who Newham is: CCorex software, engineering talent outsourcing and construction engineering services for Singapore construction.',
  ogUrl: siteUrl + '/about'
})
useHead({ link: [{ rel: 'canonical', href: siteUrl + '/about' }] })

const focus = [
  { icon: 'fa-solid fa-fire-extinguisher', title: 'Fire protection codes', text: 'SS CP 52 for sprinkler design and hydraulic calculations under the SCDF Fire Code, with NFPA 13 where the project specification calls for it.' },
  { icon: 'fa-solid fa-file-circle-check', title: 'Authority submissions', text: 'Drawings and documents prepared for SCDF and BCA requirements.' },
  { icon: 'fa-solid fa-building-columns', title: 'Local trades and formats', text: 'Fire protection, ACMV, ELV, plumbing and electrical, in Singapore tender formats.' },
  { icon: 'fa-solid fa-sack-dollar', title: 'Singapore payroll', text: 'DeepHR payroll covers CPF, SDL and self-help group funds.' }
]

const steps = [
  { title: 'Listen', text: 'A discovery call about your pipeline, systems and gaps.' },
  { title: 'Scope in writing', text: 'Deliverables, team and pricing agreed before work starts.' },
  { title: 'Onboard', text: 'We learn your templates, standards and tools.' },
  { title: 'Deliver & review', text: 'Dedicated people, review cycles and capacity adjusted as you need.' }
]

const values = [
  { icon: 'fa-solid fa-ruler-combined', title: 'Domain first', text: 'We hire and train for construction engineering, not general IT or staffing.' },
  { icon: 'fa-solid fa-eye', title: 'Transparent', text: 'Scope, pricing and progress are visible to you. You direct the work.' },
  { icon: 'fa-solid fa-handshake', title: 'Dedicated', text: 'The same people on your projects, learning your way of working.' },
  { icon: 'fa-solid fa-screwdriver-wrench', title: 'Practical', text: 'Software and services shaped by real take-offs, tenders and claims.' }
]
</script>
