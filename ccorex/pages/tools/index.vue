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

    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader eyebrow="What each one works out" title="What you enter, and what you get back" lead="Each calculator asks for the figures you already have on the payslip or the worker list, and shows the method it used underneath the result." />
        <ul class="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <li v-for="d in details" :key="d.name" class="card">
            <span class="icon-tile h-9 w-9 text-sm"><i :class="d.icon" aria-hidden="true"></i></span>
            <h3 class="mt-4 font-semibold text-ink-900">{{ d.name }}</h3>
            <p class="mt-2 text-sm text-ink-600"><strong class="text-ink-900">You enter:</strong> {{ d.enter }}</p>
            <p class="mt-1.5 text-sm text-ink-600"><strong class="text-ink-900">You get:</strong> {{ d.get }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How to use them" title="Four steps to a figure you can check" />
        <div class="mt-12"><UiStepFlow :steps="steps" /></div>
      </div>
    </section>

    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="Questions about the calculators" lead="Each calculator page has its own questions on the rules behind the figure." />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand title="Run CPF and overtime on every pay run" lead="DeepHR works out CPF, SDL, self-help group funds and MOM overtime from approved attendance and leave. Book a 30-minute demo." />
  </div>
</template>

<script setup lang="ts">
import { tools, toolPath } from '~/data/tools'

const details = [
  { name: 'CPF contribution calculator', icon: 'fa-solid fa-calculator', enter: 'ordinary wages, additional wages this month and already paid this year, age and residency.', get: 'the employer’s and employee’s CPF for the month, with the 2026 rates, the $8,000 Ordinary Wage ceiling and PR graduated rates.' },
  { name: 'Overtime pay calculator', icon: 'fa-solid fa-user-clock', enter: 'monthly basic salary, type of employee and overtime hours this month.', get: 'the hourly basic rate, the overtime rate and the overtime pay under Part 4 of the Employment Act, with the $13.60 non-workman cap and a warning above 72 hours.' },
  { name: 'Construction foreign worker levy calculator', icon: 'fa-solid fa-helmet-safety', enter: 'Work Permit holders by source and skill tier, days worked for part months and, optionally, local employees earning the Local Qualifying Salary.', get: 'the monthly and annual levy, with quick checks on the 1:5 quota and the 10% R1 rule.' },
  { name: 'SDL calculator', icon: 'fa-solid fa-coins', enter: 'each employee’s total wages for the month.', get: 'the Skills Development Levy for each person and the month’s total, with the $2 minimum, $11.25 maximum and the total rounded down.' },
  { name: 'Pro-rated annual leave calculator', icon: 'fa-solid fa-umbrella-beach', enter: 'the year of service, the full-year leave and either the dates or the completed months worked.', get: 'the pro-rated annual leave for a joiner or leaver, using MOM’s formula and rounding rule.' }
]
const steps = [
  { title: 'Pick a calculator', text: 'CPF, SDL, overtime, pro-rated leave or the construction levy.' },
  { title: 'Enter your figures', text: 'Wages, hours, dates or headcount, as each calculator asks.' },
  { title: 'Read the result', text: 'The figure, with the method and published rates it used set out below it. Nothing you enter is saved.' },
  { title: 'Check before you pay', text: 'Confirm with the CPF Board, MOM or WP Online, which hold the final figures.' }
]
const faqs = [
  { q: 'Are these calculators free?', a: 'Yes. All five calculators are free to use, with no sign-up.' },
  { q: 'Which rates do the calculators use?', a: 'The CPF and SDL calculators use the CPF Board’s published rates, including the CPF rates from 1 January 2026. The overtime, pro-rated leave and levy calculators use MOM’s published formulas and rates. Each calculator page sets out the method and links to its source.' },
  { q: 'Can I rely on the result for payroll?', a: 'Treat it as an estimate. Confirm CPF with the CPF Board’s own contribution calculator before you pay; your levy bill and quota on WP Online are the final levy figures; and check MOM’s pages for daily-rated, piece-rated, part-time and shift workers.' },
  { q: 'Can DeepHR work these out on every pay run?', a: 'Yes for CPF, SDL, self-help group funds and overtime: DeepHR works them out on every pay run from approved attendance and leave, with an itemised PDF payslip for each employee. A foreign worker levy report, with the levy costed to each project, is in early access.' }
]

const config = useRuntimeConfig()
const pageUrl = `${config.public.siteUrl}/tools`
const description = 'Free Singapore calculators for employers: CPF with 2026 rates, the Skills Development Levy, overtime pay, prorated annual leave and the construction levy.'
useSeoMeta({ title: 'Free CPF, SDL, overtime, leave & levy calculators', description, ogTitle: 'Free CPF, SDL, overtime, leave & levy calculators | CCorex', ogDescription: description })
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
