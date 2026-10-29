<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid items-center gap-12 pb-20 pt-16 lg:grid-cols-[1.2fr_1fr] lg:pt-20">
        <div>
          <p class="eyebrow-dark">Construction software · Singapore</p>
          <h1 class="h-display mt-4 text-white">Construction software for Singapore contractors</h1>
          <p class="lead-dark mt-6 max-w-xl">CCorex covers the three jobs that decide a contractor’s margin: pricing the tender, controlling project cost, and paying the people who build it. Each app works on its own, and all three share one sign-in, one approvals engine and ARIVU, the AI assistant included in every plan.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-accent">Book a live demo <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <a href="#apps" class="btn-ghost-dark">See the three apps</a>
          </div>
        </div>
        <figure class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur" aria-label="What CCorex covers">
          <figcaption class="text-xs font-semibold uppercase tracking-wider text-cyan-300">In CCorex</figcaption>
          <ul class="mt-4 space-y-2">
            <li v-for="p in heroPoints" :key="p" class="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white">
              <span>{{ p }}</span><i class="fa-solid fa-check text-xs text-cyan-400" aria-hidden="true"></i>
            </li>
          </ul>
        </figure>
      </div>
    </section>

    <!-- Problems -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="The problem today" title="Tender, project and payroll data live in different spreadsheets" />
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </div>
      </div>
    </section>

    <!-- The three apps -->
    <section id="apps" class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader eyebrow="What you get" title="Three apps, one platform" lead="Start with the app that fixes your biggest leak, then add the others on the same sign-in." />
        <div class="mt-12 grid gap-4 lg:grid-cols-3">
          <article v-for="a in appCards" :key="a.slug" class="card flex flex-col">
            <p class="flex items-center gap-2 font-semibold text-ink-900"><UiAppIcon :app="a.slug" size="xs" />{{ a.name }}</p>
            <p class="mt-1 text-sm text-brand-700">{{ a.for }}</p>
            <ul class="mt-4 flex-1 space-y-2 text-sm text-ink-700">
              <li v-for="f in a.points" :key="f" class="flex gap-2"><i class="fa-solid fa-check mt-1 text-xs text-brand-600" aria-hidden="true"></i><span>{{ f }}</span></li>
            </ul>
            <div class="mt-6 flex flex-wrap items-center gap-4">
              <NuxtLink :to="`/products/${a.slug}`" class="btn-secondary">See {{ a.name }}</NuxtLink>
              <NuxtLink :to="a.solution.to" class="text-sm font-semibold text-brand-700 hover:text-brand-800">{{ a.solution.label }} <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Checklist -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="Singapore checklist" title="What to look for in construction software in Singapore" lead="Generic project tools miss the parts of Singapore construction that cost money: pricing the client’s BOQ, progress claims with GST, and site payroll with CPF. Here is how CCorex handles each." />
        <div class="relative mt-10 overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-card">
          <table class="w-full min-w-[560px] text-left text-sm">
            <caption class="sr-only">What to look for in construction software in Singapore</caption>
            <thead class="bg-ink-50 text-xs uppercase tracking-wider text-ink-500">
              <tr><th scope="col" class="w-1/3 px-5 py-3 font-semibold">What to look for</th><th scope="col" class="px-5 py-3 font-semibold">In CCorex</th></tr>
            </thead>
            <tbody class="divide-y divide-ink-100">
              <tr v-for="c in checklist" :key="c.need" class="align-top">
                <th scope="row" class="px-5 py-4 font-semibold text-ink-900">{{ c.need }}</th>
                <td class="px-5 py-4 leading-relaxed text-ink-700">{{ c.how }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Solutions + guides -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-8 lg:grid-cols-2">
        <div>
          <p class="eyebrow">By task</p>
          <ul class="mt-4 grid gap-3">
            <li v-for="s in construction" :key="s.slug">
              <NuxtLink :to="solutionPath(s)" class="card flex items-center gap-3 hover:border-brand-200"><i :class="s.icon" class="text-brand-600" aria-hidden="true"></i><span class="font-semibold">{{ s.name }}</span></NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="eyebrow">Guides</p>
          <ul class="mt-4 space-y-3">
            <li v-for="g in guides" :key="g.to">
              <NuxtLink :to="g.to" class="card flex items-center justify-between gap-3 hover:border-brand-200"><span class="font-semibold">{{ g.title }}</span><i class="fa-solid fa-arrow-right text-xs text-brand-600" aria-hidden="true"></i></NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-tight">
      <div class="container-site grid gap-10 py-6 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="Questions we are asked" />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand title="See CCorex on one of your own tenders or projects" lead="Book a 30-minute demo. Bring a tender, a project budget or a month of attendance, and we will walk through it in the app that fits." />
  </div>
</template>

<script setup lang="ts">
// Hub page for broad "construction software Singapore" searches, linking to every construction solution page.
import { solutionPages, solutionPath } from '~/data/solutions'

const heroPoints = ['Tender estimating & BOQ pricing', 'Project budgets, POs & claims', 'HR & Singapore payroll', 'One sign-in & approvals', 'ARIVU AI in every plan']
const problems = [
  { icon: 'fa-solid fa-file-excel', title: 'Rates re-keyed every tender', text: 'Each estimator keeps their own price file, and figures are typed again into the client’s BOQ before the deadline.' },
  { icon: 'fa-solid fa-chart-line', title: 'Overruns found at month-end', text: 'Purchases are approved by message, and nobody sees budget against actual until the accounts close.' },
  { icon: 'fa-solid fa-clipboard-list', title: 'Site payroll pieced together', text: 'Attendance from each site is collected by hand, then CPF and overtime are checked again in spreadsheets.' }
]
const appCards = [
  {
    slug: 'deepcost' as const, name: 'DeepCost', for: 'Tender and MEP estimating, any trade',
    points: ['AI tender summary from the tender documents', 'Take-off by building, floor and room', 'One price library, with Fire Protection, ACMV, A&A and ELV seeded; other trades set up at onboarding or imported from Excel', 'FOT AI prices on top of the client’s BOQ', 'Approval at each stage before the bid goes out'],
    solution: { to: '/solutions/tender-estimating-software', label: 'Tender estimating' }
  },
  {
    slug: 'deeptrack' as const, name: 'DeepTrack', for: 'Project delivery and cost control for construction',
    points: ['Project budgets from templates, by cost centre', 'Budget against actual on every project', 'Purchase requests and POs with multi-level approval and thresholds', 'Payment requests matched to POs', 'Progressive claims and payment certificates, with GST'],
    solution: { to: '/solutions/construction-cost-control-software', label: 'Cost control' }
  },
  {
    slug: 'deephr' as const, name: 'DeepHR', for: 'HR and Singapore payroll for office and site teams',
    points: ['Face and GPS attendance on each worker’s own phone', 'Leave under the Employment Act, claims and timesheets', 'Payroll with CPF, SDL and SHG funds', 'Itemised payslips for every employee', 'Employee self-service'],
    solution: { to: '/solutions/construction-payroll-software', label: 'Construction payroll' }
  }
]
const checklist = [
  { need: 'Pricing on the client’s BOQ', how: 'DeepCost’s FOT AI finds the quantity and amount columns on the client’s BOQ PDF, so your library prices are filled in on top of it and your estimator reviews the result.' },
  { need: 'Every trade, not just one', how: 'DeepCost covers any trade. Fire Protection, ACMV, A&A and ELV libraries come seeded in SGD; other trades are set up during onboarding or imported from Excel.' },
  { need: 'Approvals before money is committed', how: 'DeepTrack routes purchase requests through your approval levels and thresholds, for example project manager, then finance, then general manager, before a PO is issued.' },
  { need: 'Budget against actual on every project', how: 'Committed and actual costs are tracked against the approved budget by cost centre, so overruns show up while there is still time to act.' },
  { need: 'Progress claims with GST', how: 'Claims are built from a breakdown of works with cumulative percentages, GST at the current 9% rate, and a payment certificate generated from the claim.' },
  { need: 'Site attendance into payroll', how: 'DeepHR captures face and GPS check-ins on each worker’s phone. HR approves each session, and approved hours flow into payroll with CPF, SDL and SHG.' },
  { need: 'One sign-in, sold app by app', how: 'Each app is sold on its own. Add the others later on the same sign-in and approvals engine, with ARIVU, the AI assistant, included in every plan.' }
]
const construction = solutionPages.filter((s) => s.group === 'construction')
const guides = [
  { to: '/resources/what-is-a-boq', title: 'BOQ meaning: what is a bill of quantities?' },
  { to: '/resources/progress-claims-singapore', title: 'Progress claims in Singapore' },
  { to: '/resources/budget-vs-actual-construction', title: 'Budget vs actual in construction' },
  { to: '/resources/construction-payroll-singapore', title: 'Construction payroll in Singapore' },
  { to: '/resources/construction-digitalisation-grants-singapore', title: 'Grants for construction software in Singapore' }
]
const faqs = [
  { q: 'What does construction software do for a Singapore contractor?', a: 'It replaces the spreadsheets and chat messages used to price tenders, approve purchases, track project cost and run site payroll. CCorex covers these with three apps: DeepCost for estimating, DeepTrack for project cost control and DeepHR for HR and payroll.' },
  { q: 'Do we have to buy all three apps?', a: 'No. Each app is sold on its own in Starter, Growth and Enterprise tiers, with a tailored quote. You can add the others later on the same sign-in.' },
  { q: 'Is CCorex built for Singapore?', a: 'Yes. Prices are in SGD, claims carry GST at 9%, and DeepHR runs Singapore payroll with CPF, SDL and self-help group funds, with leave following the Employment Act.' },
  { q: 'Which trades does DeepCost support?', a: 'Any trade. Fire Protection, ACMV, A&A and ELV come with seeded price libraries; other trades are set up during onboarding or imported from Excel.' },
  { q: 'Is there AI in CCorex?', a: 'Yes. ARIVU, the AI assistant, is included in every plan. DeepCost also has an AI tender summary and FOT AI for pricing the client’s BOQ. Your team reviews and approves every figure.' },
  { q: 'Is CCorex a PSG pre-approved solution?', a: 'Not at present. Our grants guide explains the Built Environment PSG and the move to the EDGE Grant, and what to check before you buy any software.' },
  { q: 'How is CCorex priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com for a quote.' }
]

const config = useRuntimeConfig()
const pageUrl = `${config.public.siteUrl}/solutions/construction-software-singapore`
useSeoMeta({
  title: 'Construction Software Singapore: Estimating, Projects, Payroll',
  description: 'Construction software for Singapore contractors: tender estimating on the client’s BOQ, project budgets, POs and progress claims, and site payroll with CPF.',
  ogTitle: 'Construction Software Singapore | CCorex',
  ogDescription: 'Tender estimating, project cost control and Singapore payroll for contractors, on one sign-in.'
})
useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'CCorex',
      applicationCategory: 'BusinessApplication', applicationSubCategory: 'Construction management software', operatingSystem: 'Web', url: pageUrl,
      description: 'Construction software for Singapore contractors: tender estimating, project cost control, and HR and payroll.',
      areaServed: { '@type': 'Country', name: 'Singapore' },
      publisher: { '@type': 'Organization', name: 'Newham Solutions Pte. Ltd.' }
    })
  }]
})
</script>
