<template>
  <ul class="grid gap-6 lg:grid-cols-3">
    <li v-for="p in pillars" :key="p.title" class="flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-shadow duration-200 hover:shadow-lift">
      <img :src="p.img" :alt="p.alt" width="640" height="340" loading="lazy" decoding="async" class="aspect-[16/8.5] w-full object-cover" />
      <div class="flex flex-1 flex-col p-6">
        <p class="eyebrow">{{ p.eyebrow }}</p>
        <h3 class="mt-2 text-xl font-bold">{{ p.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ p.text }}</p>
        <ul class="mt-5 flex-1 space-y-2.5 text-sm">
          <li v-for="b in p.bullets" :key="b" class="flex gap-2.5 text-ink-700"><i class="fa-solid fa-check mt-1 text-brand-600" aria-hidden="true"></i>{{ b }}</li>
        </ul>
        <a v-if="p.external" :href="p.to" target="_blank" rel="noopener" class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900">{{ p.cta }} <i class="fa-solid fa-arrow-up-right-from-square text-[11px]" aria-hidden="true"></i><span class="sr-only"> (opens ccorex.com in a new tab)</span></a>
        <NuxtLink v-else :to="p.to" class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900">{{ p.cta }} <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
// Newham's three pillars. Used on the homepage and the About page.
import { CCOREX_URL } from '~/data/ccorex'

const pillars = [
  {
    eyebrow: '01 · Software', title: 'CCorex construction software',
    text: 'Our AI-powered suite for construction businesses — estimating, project delivery and HR & payroll on one login.',
    bullets: ['DeepCost tender estimation, with AI tender summary and FOT AI', 'DeepTrack budgets, procurement, claims and invoice matching', 'DeepHR attendance, leave and Singapore payroll'],
    img: '/images/photos/hero-ccorex-suite.webp', alt: 'Illustration of the CCorex apps connected to one platform',
    to: CCOREX_URL, cta: 'Explore CCorex', external: true
  },
  {
    eyebrow: '02 · Talent', title: 'Engineering talent outsourcing',
    text: 'Dedicated M&E professionals trained to Singapore codes, working on your projects, to your templates and standards.',
    bullets: ['BIM modellers and drafters (Revit MEP, AutoCAD)', 'Estimators and quantity surveyors', 'Tender coordinators and fire protection engineers'],
    img: '/images/photos/bim-engineer-workstation.webp', alt: 'Engineer working on an MEP coordination model across two monitors (stock photo)',
    to: '/talent-outsourcing', cta: 'Talent outsourcing'
  },
  {
    eyebrow: '03 · Engineering', title: 'Construction engineering services',
    text: 'Fire protection design and commercial project support, delivered as a scoped service by a domain-trained team.',
    bullets: ['Sprinkler design and hydraulic calculations to SS CP 52 (NFPA 13 where specified)', 'Estimation, BOQ and tender support', 'Project QS, progress claims and document control'],
    img: '/images/photos/mep-model-laptop.webp', alt: 'MEP model reviewed on a laptop with a stylus (stock photo)',
    to: '/engineering-services', cta: 'Engineering services'
  }
]
</script>
