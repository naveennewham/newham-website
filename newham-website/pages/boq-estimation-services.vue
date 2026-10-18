<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid items-center gap-10 pb-20 pt-16 lg:grid-cols-[1.3fr_1fr] lg:pt-20">
        <div class="max-w-3xl">
          <p class="eyebrow-dark">Estimation &amp; tender support · Singapore</p>
          <h1 class="h-display mt-4 text-white">BOQ services in Singapore: BOQ preparation and M&amp;E estimation</h1>
          <p class="lead-dark mt-6 max-w-2xl">Bill of quantities (BOQ) services for M&amp;E contractors who have more tenders than estimators: take-offs, priced BOQs, rate build-ups and tender queries. Scoped in writing, turned around to your submission date.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/appointment" class="btn-accent">Send us a tender to scope <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <a href="#scope" class="btn-ghost-dark">What we prepare</a>
          </div>
          <p class="mt-6 text-sm text-ink-300">Fire protection · ACMV · electrical · ELV · plumbing &amp; sanitary</p>
        </div>
        <UiLottie src="/lottie/blueprint.json" label="Illustration of an engineer drawing a blueprint" class="mx-auto hidden aspect-square w-full max-w-md lg:block" />
      </div>
    </section>

    <!-- Problem -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="Why contractors outsource estimation" title="More tenders than estimators" lead="Tender documents arrive with short deadlines, and an experienced M&E estimator is hard to hire and hard to keep busy all year." />
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </div>
      </div>
    </section>

    <!-- Scope -->
    <section id="scope" class="section scroll-mt-16 bg-ink-50">
      <div class="container-site">
        <UiSectionHeader eyebrow="What we prepare" title="From tender documents to a priced BOQ" lead="Each deliverable is agreed in writing before work starts, in your templates and formats." />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UiFeatureCard v-for="s in scope" :key="s.title" :icon="s.icon" :title="s.title" :text="s.text" />
        </div>
      </div>
    </section>

    <!-- Trades -->
    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <UiSectionHeader eyebrow="Trades" title="M&E trades we estimate" lead="Our estimators work across the building services trades M&E contractors tender for in Singapore." />
        <ul class="grid gap-3 sm:grid-cols-2">
          <li v-for="t in trades" :key="t.title" class="card">
            <p class="font-semibold text-ink-900"><i :class="t.icon" class="mr-2 text-brand-600" aria-hidden="true"></i>{{ t.title }}</p>
            <p class="mt-1 text-sm text-ink-600">{{ t.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- How it works -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" title="Send the tender, agree the scope, receive the BOQ" />
        <div class="mt-12"><UiStepFlow :steps="steps" /></div>
        <div class="mt-10 flex gap-4 rounded-2xl border border-brand-100 bg-brand-50 p-6">
          <i class="fa-solid fa-user-check mt-1 text-brand-700" aria-hidden="true"></i>
          <div>
            <h3 class="font-semibold text-brand-900">Your team keeps the final say</h3>
            <p class="mt-1 text-sm leading-relaxed text-brand-900/80">We prepare quantities, rates and the BOQ; your estimator or commercial manager reviews and signs off before anything is submitted. Your rates, suppliers and margins stay yours.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Options -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Your options" title="Outsource the BOQ, buy CostX, or hire an estimator?" lead="Contractors short of estimating capacity usually weigh three options. Each suits a different tender volume." />
        <div class="relative mt-12 overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-card">
          <table class="w-full min-w-[760px] text-sm">
            <caption class="sr-only">Outsourced BOQ services compared with estimating software and an in-house estimator</caption>
            <thead class="bg-ink-50 text-xs uppercase tracking-wider text-ink-500">
              <tr>
                <th scope="col" class="px-5 py-3 text-left font-semibold"></th>
                <th v-for="c in optionCols" :key="c" scope="col" class="px-4 py-3 text-left font-semibold" :class="c === optionCols[0] ? 'text-brand-700' : ''">{{ c }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-ink-100">
              <tr v-for="r in optionRows" :key="r.label">
                <th scope="row" class="px-5 py-3.5 text-left font-semibold text-ink-900">{{ r.label }}</th>
                <td v-for="(v, i) in r.values" :key="i" class="px-4 py-3.5 text-ink-700" :class="i === 0 ? 'bg-brand-50/40' : ''">{{ v }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="mt-6 text-center text-sm text-ink-600">
          Choosing estimating software instead?
          <a :href="`${ccorexUrl}/compare/costx-cubicost-alternative`" class="font-semibold text-brand-700 hover:text-brand-900">See how DeepCost compares with CostX and Cubicost</a>.
        </p>
      </div>
    </section>

    <!-- Related -->
    <section class="section pt-0">
      <div class="container-site grid gap-4 md:grid-cols-2">
        <NuxtLink to="/engineering-services" class="card group">
          <p class="eyebrow">Also from Newham</p>
          <h2 class="mt-2 text-xl font-bold">Fire protection design &amp; hydraulic calculations</h2>
          <p class="mt-2 text-sm text-ink-600">Sprinkler layouts and hydraulic calculations to SS CP 52 / NFPA 13, formatted for SCDF submission.</p>
          <span class="mt-4 inline-flex text-sm font-semibold text-brand-700 group-hover:text-brand-900">Engineering services <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></span>
        </NuxtLink>
        <NuxtLink to="/talent-outsourcing" class="card group">
          <p class="eyebrow">Need someone every month?</p>
          <h2 class="mt-2 text-xl font-bold">A dedicated estimator on your team</h2>
          <p class="mt-2 text-sm text-ink-600">If your tender volume is steady, a dedicated M&amp;E estimator working your hours may suit you better than project-based BOQs.</p>
          <span class="mt-4 inline-flex text-sm font-semibold text-brand-700 group-hover:text-brand-900">Talent outsourcing <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></span>
        </NuxtLink>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 py-6 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="BOQ and estimation questions" />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand title="Have a tender closing soon?" lead="Book a 30-minute call and share the tender documents. We will confirm the scope and the date we can deliver the BOQ." />
  </div>
</template>

<script setup lang="ts">
const siteUrl = useRuntimeConfig().public.siteUrl as string
const pageUrl = siteUrl + '/boq-estimation-services'
const ccorexUrl = useRuntimeConfig().public.ccorexBaseUrl as string
const description = 'BOQ services in Singapore: BOQ preparation, M&E take-offs, rate build-ups and tender support for fire protection, ACMV, electrical, ELV and plumbing.'

const faqs = [
  { q: 'What do you need from us to prepare a BOQ?', a: 'The tender drawings and specifications, the client\'s BOQ format if there is one, your submission date, and your preferred rates or supplier prices if you want the BOQ priced with them.' },
  { q: 'Do you price the BOQ or only measure quantities?', a: 'Either. We can deliver measured quantities only, or a priced BOQ with rate build-ups using your rates and supplier prices. The scope is agreed in writing first.' },
  { q: 'Which trades do you cover?', a: 'M&E building services: fire protection, ACMV, electrical, ELV, and plumbing and sanitary.' },
  { q: 'Can you help with tender queries and addenda?', a: 'Yes. We draft RFIs, track clarifications, review addenda and flag scope gaps between the drawings, specifications and BOQ.' },
  { q: 'How is the work priced?', a: 'Per deliverable for a single tender, or as a monthly retainer for a steady pipeline. Billing is monthly in SGD, with no recruitment or setup fees. Contact admin@newhamtech.com for a quote.' },
  { q: 'Can your estimators work in our estimating software?', a: 'Yes. If you use DeepCost from CCorex, our estimators can work directly in your data; otherwise we deliver in Excel or your own templates.' },
  { q: 'Should we outsource the BOQ or buy software such as CostX or Cubicost?', a: 'Software helps an estimator you already have work faster, but someone on your team still measures and prices every tender. Outsourcing suits contractors who are short of estimators or tender in peaks. If your volume is steady, a dedicated estimator may suit you better than either.' },
  { q: 'How quickly can you prepare a BOQ?', a: 'It depends on the size of the drawing set and the number of trades. We confirm the delivery date in writing, against your submission date, before work starts.' }
]

const optionCols = ['Newham BOQ service', 'Software (CostX, Cubicost)', 'Hiring an estimator']
const optionRows = [
  { label: 'Who measures and prices', values: ['Our M&E estimators', 'Your own estimator, using the software', 'Your new employee'] },
  { label: 'What you pay for', values: ['Each tender, or a monthly retainer', 'Software licences and training', 'Salary, CPF and recruitment'] },
  { label: 'Time to first BOQ', values: ['From your first tender', 'After set-up and training', 'After hiring and onboarding'] },
  { label: 'Best when', values: ['Tenders come in peaks, or you have no spare estimator', 'You have estimators and want them faster', 'Tender volume is steady all year'] }
]

useSeoMeta({
  title: 'BOQ services in Singapore: preparation & M&E estimation',
  description,
  ogTitle: 'BOQ services in Singapore: BOQ preparation & M&E estimation — Newham',
  ogDescription: description,
  ogUrl: pageUrl
})
useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'BOQ preparation and M&E estimation services',
        alternateName: ['BOQ services', 'Bill of quantities services'],
        serviceType: 'Construction cost estimation',
        description,
        url: pageUrl,
        areaServed: { '@type': 'Country', name: 'Singapore' },
        provider: { '@type': 'Organization', name: 'Newham Technological Solutions', url: siteUrl }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
      })
    }
  ]
})

const problems = [
  { icon: 'fa-solid fa-calendar-xmark', title: 'Tenders you can\'t bid', text: 'When every estimator is on a deadline, the next tender is declined — or rushed and priced on guesswork.' },
  { icon: 'fa-solid fa-user-clock', title: 'Hiring for peaks', text: 'A full-time M&E estimator is costly in the quiet months and still not enough in the busy ones.' },
  { icon: 'fa-solid fa-scale-unbalanced', title: 'Rushed BOQs cost margin', text: 'Missed items, quantities copied from old jobs and unchecked rates show up later as losses on site.' }
]

const scope = [
  { icon: 'fa-solid fa-ruler-combined', title: 'Quantity take-off', text: 'Material and labour take-offs from tender drawings and specifications, organised by building, floor and area.' },
  { icon: 'fa-solid fa-table-list', title: 'BOQ compilation', text: 'Quantities compiled into your BOQ or the client\'s format, ready for pricing and submission.' },
  { icon: 'fa-solid fa-coins', title: 'Rate build-up', text: 'Material and installation rates built up from your price lists and supplier quotes, with cost summaries.' },
  { icon: 'fa-solid fa-circle-question', title: 'Tender queries & addenda', text: 'RFI drafting, clarification tracking, addendum review and scope gap analysis.' },
  { icon: 'fa-solid fa-folder-open', title: 'Tender compilation', text: 'Compliance checklists, subcontractor quote comparison and the compiled tender submission.' },
  { icon: 'fa-solid fa-chart-line', title: 'Post-award QS', text: 'Variation pricing, budget versus actual and progress claims once the project is won.' }
]

const trades = [
  { icon: 'fa-solid fa-fire-extinguisher', title: 'Fire protection', text: 'Sprinklers, hose reels, wet and dry risers, fire alarm and gas suppression.' },
  { icon: 'fa-solid fa-wind', title: 'ACMV', text: 'Air-conditioning and mechanical ventilation: equipment, ductwork and piping.' },
  { icon: 'fa-solid fa-bolt', title: 'Electrical', text: 'Power distribution, lighting, cabling and containment.' },
  { icon: 'fa-solid fa-network-wired', title: 'ELV', text: 'CCTV, access control, data and other extra-low-voltage systems.' },
  { icon: 'fa-solid fa-faucet-drip', title: 'Plumbing & sanitary', text: 'Water supply, sanitary and drainage pipework and fittings.' }
]

const steps = [
  { title: 'Send the tender', text: 'Drawings, specifications, the BOQ format and your submission date.' },
  { title: 'Scope & quote', text: 'Deliverables, trades, turnaround and price confirmed in writing.' },
  { title: 'Take-off & BOQ', text: 'Quantities measured, compiled and priced with your rates where agreed.' },
  { title: 'Review & hand-over', text: 'Your team reviews; we revise within scope before you submit.' }
]
</script>
