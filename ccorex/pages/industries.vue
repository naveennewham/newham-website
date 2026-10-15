<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-14 pb-24 pt-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:pt-24">
        <div>
          <p class="eyebrow-dark">Industries</p>
          <h1 class="h-display mt-5 text-white">Built for the businesses that build.</h1>
          <p class="lead-dark mt-6 max-w-xl">CCorex is made for engineering and construction contractors — mainly MEP and fire-protection firms in Singapore and India — that win work by pricing it accurately and keep margin by controlling it on site.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-accent">Book a live demo <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <a href="#mep" class="btn-ghost-dark">MEP trades</a>
          </div>
        </div>
        <div class="relative lg:-mr-24">
          <img src="/images/photos/mep-model-laptop.webp" alt="Engineer reviewing a 3D MEP services model on a laptop" width="2000" height="1055" class="aspect-[16/10] w-full rounded-2xl border border-white/10 object-cover shadow-frame" loading="eager" />
          <div class="absolute -bottom-8 left-6 right-6 hidden rounded-2xl border border-white/10 bg-[#0b111c]/90 p-4 shadow-frame backdrop-blur sm:block lg:right-auto lg:w-80">
            <p class="text-xs font-semibold uppercase tracking-wider text-cyan-400">Purpose-built for</p>
            <ul class="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-ink-100">
              <li v-for="s in segments" :key="s.id" class="flex items-center gap-2"><i :class="s.icon" class="text-cyan-400" aria-hidden="true"></i>{{ s.short }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Segment overview -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Who we build for" title="Four kinds of construction business, one platform" lead="Different trades, the same pressures: tender deadlines, thin margins, approvals and a mixed office and site workforce." />
        <ul class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="s in segments" :key="s.id">
            <a :href="`#${s.id}`" class="card-hover group flex h-full flex-col overflow-hidden p-0">
              <img :src="s.photo" :alt="s.photoAlt" width="2000" height="1100" class="aspect-[16/10] w-full object-cover" :class="s.photoPos" loading="lazy" />
              <div class="flex flex-1 flex-col p-5">
                <i :class="s.icon" class="text-brand-600" aria-hidden="true"></i>
                <h3 class="mt-3 text-lg font-semibold">{{ s.name }}</h3>
                <p class="mt-1.5 flex-1 text-sm leading-relaxed text-ink-600">{{ s.summary }}</p>
                <span class="mt-4 text-sm font-semibold text-brand-700 group-hover:text-brand-900">How CCorex helps <i class="fa-solid fa-arrow-down ml-1 text-xs" aria-hidden="true"></i></span>
              </div>
            </a>
          </li>
        </ul>
        <p class="mt-6 text-center text-xs text-ink-500">Photos are illustrative stock images.</p>
      </div>
    </section>

    <!-- MEP trades -->
    <section id="mep" class="section scroll-mt-20 bg-ink-50">
      <div class="container-site">
        <div class="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <UiSectionHeader eyebrow="MEP contractors" title="Estimate every M&E trade in one system" lead="DeepCost comes seeded with Fire Protection, ACMV, A&amp;A and ELV, priced in SGD. Each trade has its own item groups, components, templates and validation rules; add your own trades and take off by building, floor and room." />
            <ul class="mt-8 space-y-3">
              <li v-for="b in mepPoints" :key="b" class="flex gap-3 text-ink-700"><i class="fa-solid fa-circle-check mt-1 text-brand-600" aria-hidden="true"></i>{{ b }}</li>
            </ul>
            <div class="mt-8 flex flex-wrap gap-3">
              <NuxtLink to="/products/deepcost" class="btn-primary">Explore DeepCost</NuxtLink>
              <NuxtLink to="/products/deepplan-ai" class="btn-secondary"><i class="fa-solid fa-wand-magic-sparkles text-xs text-ai-600" aria-hidden="true"></i>Drawing take-off with DeepPlan</NuxtLink>
            </div>
          </div>
          <UiBrowserFrame src="/images/product/deepcost-area-schedule.webp" alt="DeepCost area schedule organising a project by building, floor and room" url="deepcost.app / area schedule" />
        </div>
        <ul class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <li v-for="t in trades" :key="t.name" class="card h-full">
            <span class="icon-tile" :class="t.tone"><i :class="t.icon" aria-hidden="true"></i></span>
            <h3 class="mt-4 text-base font-semibold">{{ t.name }}</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-ink-600">{{ t.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Other segments -->
    <section v-for="(s, i) in detail" :id="s.id" :key="s.id" class="section scroll-mt-20" :class="i % 2 ? 'bg-ink-50' : 'bg-white'">
      <div class="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
        <div :class="i % 2 ? 'lg:order-2' : ''">
          <p class="eyebrow"><i :class="s.icon" aria-hidden="true"></i>{{ s.name }}</p>
          <h2 class="h-section mt-3">{{ s.title }}</h2>
          <p class="lead mt-4">{{ s.lead }}</p>
          <div class="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-rose-700">Common challenges</p>
              <ul class="mt-3 space-y-2 text-sm text-ink-700">
                <li v-for="c in s.challenges" :key="c" class="flex gap-2"><i class="fa-solid fa-xmark mt-1 text-xs text-rose-500" aria-hidden="true"></i>{{ c }}</li>
              </ul>
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">How CCorex helps</p>
              <ul class="mt-3 space-y-2 text-sm text-ink-700">
                <li v-for="h in s.helps" :key="h" class="flex gap-2"><i class="fa-solid fa-check mt-1 text-xs text-brand-600" aria-hidden="true"></i>{{ h }}</li>
              </ul>
            </div>
          </div>
          <div class="mt-8 flex flex-wrap items-center gap-2">
            <span class="text-sm font-semibold text-ink-900">Key apps:</span>
            <NuxtLink v-for="a in s.apps" :key="a.slug" :to="`/products/${a.slug}`" class="chip hover:border-brand-300 hover:text-brand-800">{{ a.name }}</NuxtLink>
          </div>
        </div>
        <UiVerticalFlow :steps="s.flow" :title="`How it runs in CCorex`" />
      </div>
    </section>

    <!-- Singapore -->
    <section class="section relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>
      <div class="container-site relative">
        <UiSectionHeader dark center eyebrow="Built for Singapore and India" title="Local rules for an office and site workforce" lead="DeepTrack works in SGD with 9% GST and BCA workheads. DeepHR runs payroll for Singapore or India, with each organisation set to one jurisdiction." />
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="c in singapore" :key="c.title" class="rounded-2xl border border-white/10 bg-white/5 p-5">
            <i :class="c.icon" class="text-cyan-400" aria-hidden="true"></i>
            <p class="mt-3 font-semibold text-white">{{ c.title }}</p>
            <p class="mt-1 text-sm leading-relaxed text-ink-300">{{ c.text }}</p>
          </li>
        </ul>
        <p class="mt-10 text-center"><NuxtLink to="/products/deephr" class="btn-accent">Explore DeepHR</NuxtLink></p>
      </div>
    </section>

    <UiCtaBand title="Tell us what you build" lead="Show us a recent tender or project and we will walk through how CCorex would handle it, trade by trade." secondary-label="Solutions by role" secondary-to="/solutions" />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Industries: MEP, main contractors & EPC',
  description: 'CCorex for MEP and fire-protection contractors in Singapore and India (Fire Protection, ACMV, A&A, ELV), main contractors, EPC firms and tender-based specialists.',
  ogTitle: 'CCorex for MEP contractors, main contractors and EPC companies',
  ogDescription: 'Tender estimating, project cost control and Singapore or India HR & payroll for MEP, fire-protection, main contractor and EPC businesses.'
})
useHead({ link: [{ rel: 'canonical', href: config.public.siteUrl + '/industries' }] })

const segments = [
  { id: 'mep', short: 'MEP contractors', name: 'MEP contractors', icon: 'fa-solid fa-bolt', photo: '/images/photos/bim-mep-building.webp', photoAlt: 'Cutaway building model showing MEP services', photoPos: 'object-center', summary: 'Fire protection, ACMV, A&A, ELV and your own trades — priced from one library.' },
  { id: 'main-contractors', short: 'Main contractors', name: 'Main contractors', icon: 'fa-solid fa-helmet-safety', photo: '/images/photos/bim-team-review.webp', photoAlt: 'Project team reviewing a building model on large screens', photoPos: 'object-center', summary: 'Many projects, many subcontractors — one view of budgets, procurement and claims.' },
  { id: 'epc', short: 'EPC companies', name: 'EPC companies', icon: 'fa-solid fa-industry', photo: '/images/photos/hero-building-digital.webp', photoAlt: 'Illustration of a digital building model with engineers', photoPos: 'object-right', summary: 'Engineering, procurement and construction under one approval-driven project spine.' },
  { id: 'specialists', short: 'Specialists', name: 'Tender-based specialists', icon: 'fa-solid fa-file-signature', photo: '/images/photos/bim-engineer-workstation.webp', photoAlt: 'Engineer working on drawings and a 3D model at a workstation', photoPos: 'object-center', summary: 'Specialist subcontractors who win work by pricing tenders fast and accurately.' }
]
const mepPoints = [
  'Area schedules by building, floor and area, with hazard class and dimensions',
  'Components priced by material and installation, with dated price history',
  'Item-group templates per trade; one order per trade per tender',
  'Validation rules — e.g. hazard class decides which sprinkler type is allowed',
  'Checklist approvals for area schedule, MTO and Form of Tender'
]
const trades = [
  { name: 'Fire protection', icon: 'fa-solid fa-fire-extinguisher', tone: 'bg-red-50 text-mep-fire', text: 'Sprinkler, hydrant and alarm components, with validation rules by hazard class. Seeded.' },
  { name: 'ACMV', icon: 'fa-solid fa-fan', tone: 'bg-blue-50 text-mep-mech', text: 'Ductwork, equipment and accessories grouped and priced from your library. Seeded.' },
  { name: 'ELV', icon: 'fa-solid fa-network-wired', tone: 'bg-indigo-50 text-indigo-700', text: 'Extra-low-voltage systems with their own item groups and templates. Seeded.' },
  { name: 'A&A', icon: 'fa-solid fa-hammer', tone: 'bg-amber-50 text-mep-elec', text: 'Addition and alteration works set up as their own trade. Seeded.' },
  { name: 'Your own trades', icon: 'fa-solid fa-plus', tone: 'bg-cyan-50 text-mep-plumb', text: 'Add electrical, plumbing or any other trade, and bulk-import its library from Excel.' }
]
const DC = { name: 'DeepCost', slug: 'deepcost' }
const DT = { name: 'DeepTrack', slug: 'deeptrack' }
const HR = { name: 'DeepHR', slug: 'deephr' }
const DP = { name: 'DeepPlan AI', slug: 'deepplan-ai' }
const DD = { name: 'Deep Drive', slug: 'deep-drive' }
const detail = [
  {
    id: 'main-contractors', name: 'Main contractors', icon: 'fa-solid fa-helmet-safety',
    title: 'Control many projects from one place',
    lead: 'Budgets, procurement, invoice matching, client claims and manpower for every project — with approvals and thresholds that match your organisation.',
    challenges: ['Margin visible only at project close', 'Purchases committed outside the budget', 'Subcontractor invoices paid without a match'],
    helps: ['Projects with contract value, retention and payment terms', 'Purchase requests raised against an approved budget', 'Invoices matched against PO and delivery', 'Approval thresholds and a screen-by-role matrix per tenant'],
    apps: [DT, HR, DD],
    flow: [
      { title: 'Project set up', text: 'Contract value, retention and payment terms.', icon: 'fa-solid fa-folder-plus', app: 'DeepTrack' },
      { title: 'Budget approved', text: 'Approval thresholds that match your organisation.', icon: 'fa-solid fa-scale-balanced', app: 'DeepTrack' },
      { title: 'Purchase request', text: 'Raised against the approved budget.', icon: 'fa-solid fa-file-circle-plus', app: 'DeepTrack' },
      { title: 'PO and delivery', text: 'Ordered and received on the project.', icon: 'fa-solid fa-truck-ramp-box', app: 'DeepTrack' },
      { title: 'Invoice matched', text: 'Against the PO and delivery before payment.', icon: 'fa-solid fa-file-invoice-dollar', app: 'DeepTrack' },
      { title: 'Client claim', text: 'Progress claims with retention.', icon: 'fa-solid fa-hand-holding-dollar', app: 'DeepTrack' }
    ]
  },
  {
    id: 'epc', name: 'EPC companies', icon: 'fa-solid fa-industry',
    title: 'One platform from tender to final claim',
    lead: 'Win the job in DeepCost, deliver it in DeepTrack and staff it with DeepHR — the same sign-in and users across engineering, procurement and construction.',
    challenges: ['Estimates, procurement and site cost in separate systems', 'Approvals across several managers and directors', 'Labour cost missing from project cost'],
    helps: ['Tender → area schedule → MTO → priced Form of Tender', 'PR → PO → delivery → invoice → payment, tracked', 'Month-end allocates labour and overhead to projects', 'ARIVU answers across all three apps'],
    apps: [DC, DT, HR],
    flow: [
      { title: 'Tender priced', text: 'Area schedule → MTO → priced Form of Tender.', icon: 'fa-solid fa-calculator', app: 'DeepCost' },
      { title: 'Job won, project opened', text: 'Budgets and approvals across managers and directors.', icon: 'fa-solid fa-diagram-project', app: 'DeepTrack' },
      { title: 'Procure', text: 'PR → PO → delivery → invoice → payment, tracked.', icon: 'fa-solid fa-cart-flatbed', app: 'DeepTrack' },
      { title: 'Staff and pay', text: 'Attendance, leave and payroll for the people on site.', icon: 'fa-solid fa-user-group', app: 'DeepHR' },
      { title: 'Month-end', text: 'Labour and overhead allocated to projects.', icon: 'fa-solid fa-calendar-check', app: 'DeepTrack' },
      { title: 'Ask across all three', text: 'ARIVU answers from your data, read-only.', icon: 'fa-solid fa-wand-magic-sparkles', app: 'ARIVU AI' }
    ]
  },
  {
    id: 'specialists', name: 'Tender-based specialists', icon: 'fa-solid fa-file-signature',
    title: 'Turn tenders around without cutting corners',
    lead: 'When your business runs on bids, estimating speed and pricing consistency decide what you win and what you keep.',
    challenges: ['Tender documents read by hand, bid after bid', 'Rates drift between estimators', 'Priced figures re-typed into the client’s BOQ'],
    helps: ['AI tender summary of the tender documents', 'One priced library behind every number', 'FOT AI overlays your figures on the client’s BOQ PDF', 'Drawings measured in DeepPlan (AI take-off in early access)'],
    apps: [DC, DP],
    flow: [
      { title: 'Tender received', text: 'Documents uploaded to the opportunity.', icon: 'fa-solid fa-inbox', app: 'DeepCost' },
      { title: 'AI tender summary', text: 'Key fields read from the tender documents.', icon: 'fa-solid fa-wand-magic-sparkles', app: 'DeepCost' },
      { title: 'Drawings measured', text: 'AI take-off in early access.', icon: 'fa-solid fa-compass-drafting', app: 'DeepPlan AI' },
      { title: 'Priced from one library', text: 'The same rates behind every number.', icon: 'fa-solid fa-book-open', app: 'DeepCost' },
      { title: 'FOT AI', text: 'Your figures overlaid on the client’s BOQ PDF.', icon: 'fa-solid fa-table-list', app: 'DeepCost' }
    ]
  }
]
const singapore = [
  { icon: 'fa-solid fa-landmark', title: 'Singapore payroll', text: 'CPF (incl. graduated rates for new PRs), SDL and SHG funds: CDAC, SINDA, MBMF, ECF.' },
  { icon: 'fa-solid fa-indian-rupee-sign', title: 'India payroll', text: 'EPF, ESI, Professional Tax and TDS, with ECR, ESIC, PT, 24Q and Form 16 Part B.' },
  { icon: 'fa-solid fa-business-time', title: 'MOM overtime & proration', text: 'MOM proration and OT rate rules; warnings above 72 OT hours a month.' },
  { icon: 'fa-solid fa-location-crosshairs', title: 'Site attendance', text: 'Face and GPS check-in on the employee’s own phone — no hardware to buy.' }
]
</script>
