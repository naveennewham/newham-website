<template>
  <div>
    <UiVideoLightbox v-model:open="tourOpen" src="/videos/tour-deepcost.mp4" poster="/videos/tour-deepcost-poster.webp" title="DeepCost tour" />
    <!-- Hero (inline so it can carry a decorative video background) -->
    <section class="relative overflow-hidden bg-hero text-white">
      <FxAurora palette="ai" />
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>
      <div class="container-site relative grid gap-12 pb-20 pt-16 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:pt-20">
        <div>
          <nav aria-label="Breadcrumb" class="mb-6 text-xs text-ink-300">
            <NuxtLink to="/products" class="hover:text-white">Products</NuxtLink>
            <span class="mx-2" aria-hidden="true">/</span><span class="text-white">DeepCost</span>
          </nav>
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg text-sky-700"><i class="fa-solid fa-calculator" aria-hidden="true"></i></span>
            <span class="eyebrow-dark">DeepCost · MEP estimation</span>
            <span class="inline-flex items-center gap-1.5 rounded-full bg-ai-gradient px-3 py-1 text-xs font-semibold"><i class="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>AI tender summary · FOT AI</span>
          </div>
          <h1 class="h-display mt-6 text-white">MEP estimating software that takes you from tender to a priced Form of Tender.</h1>
          <p class="lead-dark mt-5 max-w-xl">DeepCost is the tender-estimation app in CCorex. An AI tender summary, area-based material take-off, one priced library, FOT AI on the client's BOQ and an approval at every stage — one linked record from tender received to tender submitted.</p>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li v-for="p in heroPoints" :key="p" class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-100">
              <i class="fa-solid fa-check text-cyan-400" aria-hidden="true"></i>{{ p }}
            </li>
          </ul>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-accent">Book a live demo <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <NuxtLink to="/pricing" class="btn-ghost-dark">See plans</NuxtLink>
            <button type="button" class="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm font-semibold text-white hover:text-cyan-400" @click="tourOpen = true">
              <span class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20"><i class="fa-solid fa-play ml-0.5 text-xs" aria-hidden="true"></i></span>Watch the tour<span class="text-ink-300">· 0:36</span>
            </button>
          </div>
        </div>
        <div class="lg:-mr-24">
          <UiBrowserFrame
            src="/images/product/deepcost-area-schedule.webp"
            alt="DeepCost material take-off for a government school project: block, level and room tree on the left, room dimensions and fire alarm item groups priced by material and installation cost in SGD on the right"
            url="deepcost.app / mto"
            dark
            eager
          />
          <p class="mt-2 text-right text-[11px] text-ink-300">Real DeepCost screen.</p>
        </div>
      </div>
    </section>

    <!-- Problem -->
    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="The problem" title="Estimating is slow, inconsistent and hard to trust" lead="Tender documents read by hand, take-offs in spreadsheets, prices that drift between estimators, approvals over email — and a Form of Tender re-keyed line by line into the client's BOQ." />
          <p class="mt-6 rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">The result: slow bids, thin or inaccurate margins, and disputes down the line.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" title="From tender received to priced Form of Tender" lead="One linked record runs from the tender, through areas and material take-off (MTO), to the priced Form of Tender (FOT) — the schedule you submit with the bid. Steps marked AI use DeepCost's AI features; your estimators review every output." />
        <div class="mt-12"><UiFlowPipeline :steps="flow" :interval="2000" /></div>
        <ul class="mt-10 grid gap-4 sm:grid-cols-3">
          <li v-for="s in stepNotes" :key="s.title" class="flex gap-3">
            <span class="icon-tile h-9 w-9 shrink-0 text-sm"><i :class="s.icon" aria-hidden="true"></i></span>
            <div><p class="font-semibold text-ink-900">{{ s.title }}</p><p class="text-sm text-ink-600">{{ s.text }}</p></div>
          </li>
        </ul>
      </div>
    </section>

    <!-- AI -->
    <section class="section relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>
      <div class="container-site relative">
        <UiSectionHeader dark center eyebrow="AI in DeepCost" lead="Two AI features work on your tender today — a summary of the tender documents and FOT AI on the client's BOQ PDF — and ARIVU answers questions about your opportunities. Every AI output is editable; your estimators stay in control of every number.">
          <template #title>Read the tender and price the BOQ with <span class="text-ai-gradient">AI</span></template>
        </UiSectionHeader>
        <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <UiReveal class="min-w-0">
            <h3 class="flex items-center gap-2 text-lg font-semibold text-white"><i class="fa-solid fa-file-lines text-cyan-400" aria-hidden="true"></i>AI tender summary</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-300">Reads the uploaded tender documents and fills a predefined set of fields. Edit the answers, refine the prompts and export to Excel or PDF.</p>
            <div class="mt-5"><DemoDeepCostTenderSummary /></div>
          </UiReveal>
          <UiReveal :delay="120" class="min-w-0">
            <h3 class="flex items-center gap-2 text-lg font-semibold text-white"><i class="fa-solid fa-table-list text-cyan-400" aria-hidden="true"></i>FOT AI on the client's BOQ</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-300">Upload the client's BOQ PDF. DeepCost finds the quantity and amount columns, overlays editable figures on the rows that need pricing, shows page totals and saves a revision of the annotated PDF.</p>
            <div class="mt-5"><DemoDeepCostFotAi /></div>
          </UiReveal>
        </div>
        <div class="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <ul class="grid gap-4 sm:grid-cols-2">
            <li v-for="a in aiPoints" :key="a.title" class="rounded-2xl border border-white/10 bg-white/5 p-5">
              <i :class="a.icon" class="text-cyan-400" aria-hidden="true"></i>
              <p class="mt-3 font-semibold text-white">{{ a.title }}</p>
              <p class="mt-1 text-sm leading-relaxed text-ink-300">{{ a.text }}</p>
            </li>
          </ul>
          <div class="rounded-2xl border border-white/10 bg-ink-950/80 p-6 shadow-frame">
            <p class="flex items-center gap-3 text-sm font-semibold text-white">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-ai-gradient"><i class="fa-solid fa-wand-magic-sparkles text-sm" aria-hidden="true"></i></span>
              Things estimators ask ARIVU
            </p>
            <ul class="mt-5 space-y-3">
              <li v-for="q in arivuPrompts" :key="q" class="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm text-ink-100">
                <i class="fa-regular fa-comment mt-0.5 text-cyan-400" aria-hidden="true"></i>{{ q }}
              </li>
            </ul>
            <p class="mt-5 text-xs text-ink-300">Example questions. ARIVU reads, but never changes, your organisation's data — in DeepCost and every other CCorex app.</p>
            <div class="mt-6 flex flex-wrap gap-3">
              <NuxtLink to="/products/arivu-ai" class="btn-accent">Explore ARIVU AI</NuxtLink>
              <NuxtLink to="/products/deepplan-ai" class="btn-ghost-dark">Drawing take-off with DeepPlan</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product tour -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="Product tour" title="See the screens your estimators work in" lead="Real DeepCost screens, from the opportunity pipeline to the price library behind every number." />
        <div class="mt-12"><UiScreenshotTabs :tabs="tour" label="DeepCost product tour" /></div>
      </div>
    </section>

    <!-- Control -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Control built in" title="Every stage checked, every price traceable" lead="Area schedule, MTO and FOT each move submit → approve → complete. Validation rules stop wrong components going into the take-off, and every line is priced the same way." />
        <div class="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-[1.25fr_1fr]">
          <DemoDeepCostLifecycle />
          <DemoDeepCostValidationRule />
        </div>
        <div class="mt-4"><DemoDeepCostPricing /></div>
      </div>
    </section>

    <!-- Differentiators -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Why DeepCost" title="Built around how MEP estimating really works" />
        <div class="mt-12 grid gap-4 lg:grid-cols-2">
          <UiReveal v-for="(d, i) in differentiators" :key="d.title" as="article" :delay="i * 100" class="card flex flex-col">
            <div class="flex items-center gap-3">
              <span class="icon-tile"><i :class="d.icon" aria-hidden="true"></i></span>
              <p class="font-display text-sm font-bold text-brand-600">{{ String(i + 1).padStart(2, '0') }}</p>
            </div>
            <h3 class="mt-5 text-xl font-bold">{{ d.title }}</h3>
            <ul class="mt-5 grid flex-1 gap-4">
              <li v-for="b in d.bullets" :key="b.title" class="flex gap-3">
                <i class="fa-solid fa-circle-check mt-1 text-brand-600" aria-hidden="true"></i>
                <div><p class="font-semibold text-ink-900">{{ b.title }}</p><p class="text-sm leading-relaxed text-ink-600">{{ b.text }}</p></div>
              </li>
            </ul>
            <p class="mt-6 border-t border-ink-100 pt-4 text-sm font-medium text-brand-800">{{ d.outcome }}</p>
          </UiReveal>
        </div>
      </div>
    </section>

    <!-- Modules -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader eyebrow="The platform" title="Everything estimating needs, in one place" lead="Pipeline, estimation, AI and control modules work from one shared price library — with role-based permissions, validation rules and approvals throughout." />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="g in modules" :key="g.group" class="card">
            <span class="icon-tile"><i :class="g.icon" aria-hidden="true"></i></span>
            <h3 class="mt-5 text-lg font-semibold">{{ g.group }}</h3>
            <ul class="mt-4 space-y-2.5 text-sm text-ink-700">
              <li v-for="m in g.items" :key="m" class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-xs text-brand-600" aria-hidden="true"></i>{{ m }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Roles -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Built for your whole team" title="One system, tailored to every role" lead="Each user has one DeepCost role, synced from the CCorex portal, and is assigned the trades they may work on. Roles hold named permissions per screen, per master, per workflow stage and per AI feature." />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UiFeatureCard v-for="r in roles" :key="r.title" :icon="r.icon" :title="r.title" :text="r.text" />
        </div>
      </div>
    </section>

    <!-- Suite -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <div class="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <UiSectionHeader eyebrow="Part of the CCorex suite" title="Win it in DeepCost. Deliver it in DeepTrack. Staff it with DeepHR." lead="DeepCost is one app on the CCorex platform — one sign-in at dash.ccorex.com, one user base managed by your organisation admin, and roles per app." />
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-brand-100 bg-brand-50 p-5">
              <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">Available today</p>
              <ul class="mt-3 space-y-2 text-sm text-ink-700">
                <li v-for="t in suiteToday" :key="t" class="flex gap-2"><i class="fa-solid fa-check mt-1 text-xs text-brand-600" aria-hidden="true"></i>{{ t }}</li>
              </ul>
            </div>
            <div class="rounded-2xl border border-ink-100 bg-ink-50 p-5">
              <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">On the roadmap</p>
              <ul class="mt-3 space-y-2 text-sm text-ink-700">
                <li v-for="t in suiteNext" :key="t" class="flex gap-2"><i class="fa-solid fa-road mt-1 text-xs text-ink-400" aria-hidden="true"></i>{{ t }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12"><UiAppGrid :exclude="['deepcost']" /></div>
      </div>
    </section>

    <!-- Plans -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="DeepCost plans" title="Start with one estimator. Scale to a bid team." lead="Pricing that scales with your estimating team. Tell us how you estimate and we will put together a tailored quote." />
        <div class="mt-12 grid gap-4 lg:grid-cols-3">
          <div v-for="p in plans" :key="p.name" class="card relative flex flex-col" :class="p.popular ? 'border-brand-600 ring-1 ring-brand-600' : ''">
            <span v-if="p.popular" class="absolute -top-3 left-6 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
            <h3 class="text-xl font-bold">{{ p.name }}</h3>
            <p class="mt-1 text-sm text-ink-500">{{ p.for }}</p>
            <ul class="mt-6 flex-1 space-y-2.5 text-sm">
              <li v-for="f in p.features" :key="f" class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-brand-600" aria-hidden="true"></i>{{ f }}</li>
            </ul>
            <NuxtLink to="/contact" class="mt-8" :class="p.popular ? 'btn-primary' : 'btn-secondary'">Get a tailored quote</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="DeepCost questions buyers ask" lead="Anything else? Email admin@newhamtech.com or book a demo." />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand
      title="Price every tender with confidence."
      lead="Summarise the tender with AI, take off materials by area, price from one library and submit a checked Form of Tender. See it on your own tender in a live demo."
      secondary-label="See all plans"
      secondary-to="/pricing"
    />
  </div>
</template>

<script setup lang="ts">
const tourOpen = ref(false)
const config = useRuntimeConfig()
const pageUrl = config.public.siteUrl + '/products/deepcost'
const description = 'DeepCost is MEP tender estimating software: AI tender summary, area schedules, material take-off, a priced library and FOT AI for the client\'s BOQ.'

useSeoMeta({
  title: 'DeepCost — MEP estimating & take-off software',
  description,
  ogTitle: 'DeepCost — MEP estimating & material take-off software',
  ogDescription: description
})
useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'DeepCost',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'MEP cost estimation',
      operatingSystem: 'Web',
      url: pageUrl,
      description,
      isPartOf: { '@type': 'SoftwareApplication', name: 'CCorex', url: config.public.siteUrl },
      publisher: { '@type': 'Organization', name: 'Newham Technological Solutions' }
    })
  }]
})

const heroPoints = ['AI tender summary', 'Area-based material take-off', 'FOT AI on the client\'s BOQ', 'Approval at every stage']

const problems = [
  { icon: 'fa-solid fa-hourglass-half', title: 'Slow manual take-offs', text: 'Tender documents read page by page and quantities counted in spreadsheets, bid after bid — estimators become the bottleneck.' },
  { icon: 'fa-solid fa-arrow-trend-down', title: 'Pricing that drifts', text: 'Every estimator uses their own rates. There is no single, current, dated price library.' },
  { icon: 'fa-solid fa-envelope-open-text', title: 'No approval control', text: 'Take-offs and prices go out with no checklist, sign-off or revision trail.' },
  { icon: 'fa-solid fa-link-slash', title: 'Re-keying the BOQ', text: 'Your priced figures are typed again into the client\'s BOQ, line by line, just before the deadline.' }
]

const flow = [
  { title: 'Customer & opportunity', text: 'Tender type, trades, team and submission date.', icon: 'fa-solid fa-handshake' },
  { title: 'Tender docs + AI summary', text: 'Files in the tender\'s file manager; summary reviewed.', icon: 'fa-solid fa-file-lines', ai: true },
  { title: 'Area schedule', text: 'Building, floor, room, hazard class.', icon: 'fa-solid fa-layer-group' },
  { title: 'Order per trade', text: 'From an item-group template; revisions with a reason.', icon: 'fa-solid fa-clipboard-list' },
  { title: 'MTO per area', text: 'Item groups and components, priced from the library.', icon: 'fa-solid fa-calculator' },
  { title: 'Priced FOT / FOT AI', text: 'Line by line, or overlaid on the client\'s BOQ PDF.', icon: 'fa-solid fa-table-list', ai: true },
  { title: 'Tender submission', text: 'Area, component and FOT reports to Excel or PDF.', icon: 'fa-solid fa-file-export' }
]
const stepNotes = [
  { icon: 'fa-solid fa-tags', title: 'Priced from the library', text: 'Line cost = quantity × (material + installation price), from the latest price or your override.' },
  { icon: 'fa-solid fa-percent', title: 'Separate markups', text: 'Selling price applies material and installation markups separately. Assemblies sum their child components.' },
  { icon: 'fa-solid fa-code-branch', title: 'One linked record', text: 'The area schedule feeds the MTO, and the MTO unlocks the FOT — no re-entry.' }
]

const tour = [
  { title: 'Dashboard', text: 'Monthly project count, status chart, pending actions and recent estimates.', src: '/images/product/deepcost-dashboard.webp', url: 'deepcost.app / dashboard', alt: 'DeepCost dashboard with customer and opportunity counts, a monthly project count chart and a project status breakdown' },
  { title: 'Opportunities', text: 'Capture tenders with customer, tender type, sector, trades, estimator and submission date.', src: '/images/product/deepcost-opportunity.webp', url: 'deepcost.app / opportunities', alt: 'DeepCost Add New Opportunity form with customer, contact person, tender type, sector, services, assigned team, estimator, priority, submission date and tender document attachments' },
  { title: 'Area schedule & MTO', text: 'Take off by block, floor and room, priced by material and installation.', src: '/images/product/deepcost-mto.webp', url: 'deepcost.app / mto', alt: 'DeepCost material take-off for a church project, with blocks, floors and rooms on the left and the main alarm panel item group priced by material and installation cost in SGD' },
  { title: 'Review', text: 'Cost, selling price and profit rolled up by building, floor and area.', src: '/images/product/deepcost-review.webp', url: 'deepcost.app / review', alt: 'DeepCost area review showing total quantity, cost price, selling price and profit in SGD, broken down by block, floor and room for material and installation' },
  { title: 'Price library', text: 'Part codes, brands, units, material and installation prices, markups and datasheets.', src: '/images/product/deepcost-catalog.webp', url: 'deepcost.app / components', alt: 'DeepCost components catalog listing item group, part code, brand, unit, material price, installation price and markup for fire alarm components' },
  { title: 'Validation engine', text: 'Rules per trade and item group — for example, hazard class decides which sprinkler type is allowed.', src: '/images/product/deepcost-validation.webp', url: 'deepcost.app / validation', alt: 'DeepCost Validation Engine screen for managing validation rules by service and item group' }
]

const differentiators = [
  {
    icon: 'fa-solid fa-book-open', title: 'A price library your estimates trust',
    bullets: [
      { title: 'Components with pricing', text: 'Part code, brand, unit, material and installation price and markup, datasheet and assemblies.' },
      { title: 'Dated price history', text: 'Every price change is dated; the MTO uses the latest price unless the estimator overrides it.' },
      { title: 'Templates & master-data upload', text: 'Item-group templates per trade, plus bulk Excel import of library data. Seeded trades: Fire Protection, ACMV, A&A and ELV, priced in SGD.' }
    ],
    outcome: 'Price once, reuse everywhere — consistent numbers on every bid.'
  },
  {
    icon: 'fa-solid fa-route', title: 'From tender received to tender submitted',
    bullets: [
      { title: 'Opportunity pipeline', text: 'Tender type (Design & Build, BOQ, Hybrid), sector, trades, priority, stage and next action, with a file manager per tender.' },
      { title: 'Orders with revisions', text: 'One order per tender and trade. A revision is a chained copy with a reason.' },
      { title: 'Submission-ready exports', text: 'Area, component and FOT reports export to Excel or PDF as the tender submission.' }
    ],
    outcome: 'One thread from tender to Form of Tender — nothing re-keyed.'
  }
]

const modules = [
  { group: 'Pipeline', icon: 'fa-solid fa-filter-circle-dollar', items: ['Customers & contacts', 'Opportunities (tenders)', 'Tender file manager', 'Orders & revisions'] },
  { group: 'Estimation', icon: 'fa-solid fa-calculator', items: ['Area schedule', 'Material take-off (MTO)', 'Form of Tender (FOT)', 'Area, component & FOT reviews'] },
  { group: 'AI', icon: 'fa-solid fa-wand-magic-sparkles', items: ['AI tender summary', 'FOT AI on the client\'s BOQ', 'ARIVU questions & document search', 'Opportunity summaries'] },
  { group: 'Library & control', icon: 'fa-solid fa-sliders', items: ['Price library & history', 'Templates & master-data upload', 'Validation engine', 'Roles, permissions & trades'] }
]

const roles = [
  { icon: 'fa-solid fa-handshake', title: 'Sales', text: 'Creates customers and opportunities, with trades, team and submission date.' },
  { icon: 'fa-solid fa-calculator', title: 'Estimator', text: 'Builds area schedules, MTOs and FOTs, and submits them.' },
  { icon: 'fa-solid fa-user-check', title: 'Manager', text: 'Approves submitted work against a checklist.' },
  { icon: 'fa-solid fa-user-gear', title: 'Admin', text: 'Completes approved work and maintains the price library.' },
  { icon: 'fa-solid fa-layer-group', title: 'Per-trade assignment', text: 'Each user is assigned the trades they may work on — Fire Protection, ACMV, A&A, ELV or your own.' },
  { icon: 'fa-solid fa-users-gear', title: 'Named permissions', text: 'View per screen, add and edit per master, submit, approve, complete and revoke per stage, and switches for each AI feature.' }
]

const aiPoints = [
  { icon: 'fa-regular fa-comments', title: 'Ask ARIVU', text: 'Questions about customers, opportunities, orders and tender documents — answered from your data.' },
  { icon: 'fa-solid fa-magnifying-glass', title: 'Document search', text: 'Tender files are indexed so ARIVU can search them and summarise an opportunity.' },
  { icon: 'fa-solid fa-user-lock', title: 'AI by permission', text: 'Separate role permissions switch AI chat, the tender summary and FOT AI on or off.' },
  { icon: 'fa-solid fa-pen-to-square', title: 'Always editable', text: 'Summary answers and FOT figures are edited by your team before anything is exported.' }
]
const arivuPrompts = [
  'Summarise the open Fire Protection tenders due this month.',
  'What does the specification say about sprinkler pipe material?',
  'Which estimates are waiting for my approval?'
]

const suiteToday = ['One sign-in at dash.ccorex.com', 'Users and roles managed by your organisation admin', 'Users provisioned into each app automatically', 'ARIVU in every app, read-only']
const suiteNext = ['Won tender → DeepTrack project without re-entry', 'A dedicated quotation document (today the FOT export is the quotation)']

const plans = [
  { name: 'Starter', for: 'Small estimating teams', features: ['Customers & opportunities', 'Area schedules & MTO', 'Price library', 'Area, component & FOT reviews', 'Dashboard'] },
  { name: 'Growth', for: 'Growing contractors', popular: true, features: ['Everything in Starter', 'Submit, approve & complete with checklists', 'Item-group templates & order revisions', 'Validation engine', 'Dated price history & assemblies'] },
  { name: 'Enterprise', for: 'Multi-team estimating', features: ['Everything in Growth', 'Custom roles & per-trade assignment', 'Master-data upload', 'Email notifications at every stage', 'Priority support'] }
]

const faqs = [
  { q: 'What does DeepCost cover?', a: 'Tender estimating from tender received to priced tender submission: customer and opportunity, tender documents and an AI tender summary, area schedule, an order per trade, material take-off (MTO) per area and the priced Form of Tender (FOT). Area, component and FOT reports export as the submission.' },
  { q: 'What is the FOT?', a: 'The Form of Tender — the priced schedule submitted with a tender. In DeepCost it unlocks once the MTO is submitted. You can price it line by line, or use FOT AI: upload the client\'s BOQ PDF and DeepCost finds the quantity and amount columns and overlays editable figures on the rows that need pricing.' },
  { q: 'How does the approval workflow work?', a: 'Area schedule, MTO and FOT each move through Not Started, In Progress, Submitted, Approved and Completed (area schedule and MTO also have Revision). Approval needs checklist ticks — measurements or quantities, plus material and installation prices verified. Revoking needs a reason, kept as history, and emails go to the next stage\'s users.' },
  { q: 'How are prices calculated?', a: 'Line cost is quantity × (material price + installation price), using the latest dated price from the library or an estimator\'s override. Selling price applies material and installation markups separately, and assemblies sum their child components. Prices are in SGD.' },
  { q: 'Which trades are supported?', a: 'DeepCost comes seeded with Fire Protection, ACMV, A&A and ELV. Each trade has its own item groups, components, templates and validation rules — for example, hazard class decides which sprinkler type is allowed — and you can bulk-import your own library from Excel.' },
  { q: 'How does DeepCost work with DeepTrack and DeepHR?', a: 'All CCorex apps share one sign-in, one user base and centrally managed roles today, and ARIVU can answer questions across them. Passing a won tender straight into a DeepTrack project without re-entry is on the CCorex roadmap.' },
  { q: 'How is DeepCost priced?', a: 'Plans scale with your estimating team — Starter, Growth and Enterprise. Contact us for a tailored quote.' }
]
</script>
