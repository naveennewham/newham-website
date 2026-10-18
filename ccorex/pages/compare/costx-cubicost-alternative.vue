<template>
  <div>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative pb-20 pt-16 lg:pt-20">
        <p class="eyebrow-dark">Comparison</p>
        <h1 class="h-display mt-4 max-w-4xl text-white">Looking for a CostX, Cubicost or PlanSwift alternative for MEP tenders?</h1>
        <p class="lead-dark mt-6 max-w-2xl">CostX, Cubicost and PlanSwift are established measurement and take-off tools. DeepCost is built around a different job: running an MEP contractor's tender from documents to a priced Form of Tender, with the project, purchasing and payroll on the same sign-in. Here is how to tell which fits you.</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink to="/contact" class="btn-accent">Book a live demo <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
          <a href="#table" class="btn-ghost-dark">See the comparison</a>
        </div>
      </div>
    </section>

    <!-- The difference in one line -->
    <section class="section">
      <div class="container-site grid gap-6 md:grid-cols-2">
        <div class="card">
          <p class="eyebrow">Measurement-first tools</p>
          <h2 class="mt-2 text-xl font-bold">Built to measure quantities</h2>
          <p class="mt-3 text-sm leading-relaxed text-ink-600">Tools like CostX and PlanSwift centre on taking quantities off 2D drawings (and, for CostX and Cubicost, BIM models), then building an estimate from those measurements. Quantity surveyors measuring many trades rely on this kind of tool.</p>
        </div>
        <div class="card border-brand-200">
          <p class="eyebrow flex items-center gap-2"><UiAppIcon app="deepcost" size="xs" />DeepCost</p>
          <h2 class="mt-2 text-xl font-bold">Built to win and price MEP tenders</h2>
          <p class="mt-3 text-sm leading-relaxed text-ink-600">DeepCost follows the tender: the opportunity, an AI summary of the tender documents, an area schedule, material take-off priced from one library, approvals at each stage, and FOT AI that fills your prices on the client's BOQ PDF. Drawing take-off sits in DeepPlan AI, with AI take-off in early access.</p>
        </div>
      </div>
    </section>

    <!-- Table -->
    <section id="table" class="section scroll-mt-16 bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Side by side" title="What each tool is built around" lead="Based on each vendor's own public descriptions. Check current features with each vendor before you decide." />
        <div class="relative mt-12 overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-card">
          <table class="w-full min-w-[760px] text-sm">
            <caption class="sr-only">DeepCost compared with CostX, Cubicost and PlanSwift</caption>
            <thead class="bg-ink-50 text-xs uppercase tracking-wider text-ink-500">
              <tr>
                <th scope="col" class="px-5 py-3 text-left font-semibold"></th>
                <th v-for="c in cols" :key="c" scope="col" class="px-4 py-3 text-left font-semibold" :class="c === 'DeepCost' ? 'text-brand-700' : ''">{{ c }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-ink-100">
              <tr v-for="r in rows" :key="r.label">
                <th scope="row" class="px-5 py-3.5 text-left font-semibold text-ink-900">{{ r.label }}</th>
                <td v-for="(v, i) in r.values" :key="i" class="px-4 py-3.5 text-ink-700" :class="i === 0 ? 'bg-brand-50/40' : ''">{{ v }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Choose -->
    <section class="section">
      <div class="container-site grid gap-6 lg:grid-cols-2">
        <div class="card">
          <h2 class="text-xl font-bold">DeepCost is likely a better fit if…</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="p in chooseUs" :key="p" class="flex gap-3 text-sm text-ink-700"><i class="fa-solid fa-circle-check mt-0.5 text-brand-600" aria-hidden="true"></i>{{ p }}</li>
          </ul>
        </div>
        <div class="card">
          <h2 class="text-xl font-bold">Stay with a measurement tool if…</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="p in chooseThem" :key="p" class="flex gap-3 text-sm text-ink-700"><i class="fa-solid fa-circle-info mt-0.5 text-ink-400" aria-hidden="true"></i>{{ p }}</li>
          </ul>
        </div>
        <a :href="`${config.public.newhamUrl}/boq-estimation-services`" class="card group lg:col-span-2">
          <p class="eyebrow">No estimator free for this tender?</p>
          <h2 class="mt-2 text-xl font-bold">Have the BOQ prepared for you</h2>
          <p class="mt-2 text-sm text-ink-600">Software still needs someone to measure and price. Newham's BOQ services in Singapore take your tender drawings to a priced M&amp;E BOQ in your format, for fire protection, ACMV, electrical, ELV and plumbing.</p>
          <span class="mt-4 inline-flex text-sm font-semibold text-brand-700 group-hover:text-brand-900">BOQ services from Newham <i class="fa-solid fa-arrow-up-right-from-square ml-2 mt-1 text-xs" aria-hidden="true"></i></span>
        </a>
      </div>
    </section>

    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 py-6 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="Comparison questions" />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand title="Compare on your own tender" lead="Bring a recent MEP tender to a 30-minute demo and see the take-off, pricing and Form of Tender in DeepCost." />
  </div>
</template>

<script setup lang="ts">
const cols = ['DeepCost', 'CostX', 'Cubicost', 'PlanSwift']
const rows = [
  { label: 'Main job', values: ['MEP tender estimating, from documents to priced Form of Tender', '2D and BIM take-off and estimating', 'BIM-based quantity surveying suite', 'On-screen take-off and estimating'] },
  { label: 'Made by', values: ['Newham Technological Solutions, Singapore', 'RIB Software', 'Glodon', 'ConstructConnect'] },
  { label: 'Take-off from drawings', values: ['In DeepPlan AI (AI take-off in early access)', 'Yes', 'Yes', 'Yes'] },
  { label: 'Pricing on the client’s BOQ', values: ['FOT AI finds the quantity and amount columns on the BOQ PDF', 'Check with vendor', 'Check with vendor', 'Check with vendor'] },
  { label: 'Approvals per tender stage', values: ['Area schedule, MTO and FOT each approved', 'Check with vendor', 'Check with vendor', 'Check with vendor'] },
  { label: 'Same sign-in for projects & payroll', values: ['Yes — DeepTrack and DeepHR', 'No', 'No', 'No'] },
  { label: 'Singapore PSG pre-approved', values: ['No', 'Check GoBusiness', 'Yes (per GoBusiness listing)', 'Check GoBusiness'] }
]
const chooseUs = [
  'You are an MEP or fire protection contractor pricing tenders, not a consultant QS measuring every trade.',
  'You want one priced library, validation rules and approvals so every estimator prices the same way.',
  'You re-key prices into the client’s BOQ and want that step automated.',
  'You want the won job to carry on into budgets, purchasing and payroll on the same sign-in.'
]
const chooseThem = [
  'Your main work is measuring quantities across all trades from 2D drawings or BIM models.',
  'You need PSG co-funding today and the tool you choose must be on the GoBusiness pre-approved list.',
  'Your team is already trained and productive on that tool and your process does not need tender workflow or approvals.'
]
const faqs = [
  { q: 'Is DeepCost a direct replacement for CostX or Cubicost?', a: 'Not exactly. Those tools focus on measurement and take-off. DeepCost focuses on the MEP tender workflow — pipeline, priced library, approvals and pricing on the client’s BOQ — and takes quantities from area schedules or from DeepPlan AI.' },
  { q: 'Is DeepCost PSG pre-approved?', a: 'No, not at present. If PSG co-funding is a requirement, check the pre-approved list on GoBusiness before you buy.' },
  { q: 'Can I keep my existing take-off tool and use DeepCost?', a: 'Yes. Many estimators measure in one tool and price in another. Quantities can come into DeepCost from your take-off, and library data imports from Excel.' },
  { q: 'Which trades does DeepCost come set up for?', a: 'Fire Protection, ACMV, A&A and ELV are seeded trades, priced in SGD. You extend them with your own components and templates.' },
  { q: 'How is DeepCost priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]

const config = useRuntimeConfig()
const url = `${config.public.siteUrl}/compare/costx-cubicost-alternative`
const description = 'CostX, Cubicost or PlanSwift alternative for MEP contractors in Singapore? How DeepCost compares on take-off, pricing the client’s BOQ, approvals and PSG.'
useSeoMeta({ title: 'CostX & Cubicost alternative for MEP contractors in Singapore', description, ogTitle: 'CostX, Cubicost & PlanSwift alternative for MEP tenders in Singapore | CCorex', ogDescription: description })
useHead({
  link: [{ rel: 'canonical', href: url }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }]
})
</script>
