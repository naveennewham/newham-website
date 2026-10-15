<template>
  <div>
    <UiProductHero tour="deeptrack" tour-duration="0:24"
      slug="deeptrack"
      :points="heroPoints"
      screenshot="/images/product/deeptrack-overview.webp"
      screenshot-alt="DeepTrack dashboard with the module menu (projects, budget, manpower, procurement, claims, reports, settings), pending and completed project counts, total revenue, total budget, a budget-versus-actual chart and monthly revenue"
      url="deeptrack.app / dashboard"
    >
      <template #title>Project cost control for contractors, from contract to profit.</template>
      <template #lead>DeepTrack is the project delivery app in CCorex. Budgets, client claims, manpower and timesheets, procurement, accounts payable with invoice matching and month-end cost allocation in one system — built for Singapore contractors, in SGD with 9% GST.</template>
    </UiProductHero>

    <!-- Problem -->
    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="The problem" title="Projects leak margin in the gaps between tools" lead="Contract value in one file, budgets in another, procurement over email, invoices paid without a match, labour cost nowhere. By the time the numbers are added up, the margin is already gone." />
          <p class="mt-6 rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">The result: cost overruns found late, invoices paid twice, and month-ends that drag.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" title="From contract to profit — one thread" lead="Projects carry the contract terms, approved budgets back every purchase request, vendor invoices are matched before payment, client claims bill the work, and month-end allocates labour and overhead to each project." />
        <div class="mt-12"><UiStepFlow :steps="steps" /></div>
        <ul class="mt-10 grid gap-4 sm:grid-cols-3">
          <li v-for="s in stepNotes" :key="s.title" class="flex gap-3">
            <span class="icon-tile h-9 w-9 shrink-0 text-sm"><i :class="s.icon" aria-hidden="true"></i></span>
            <div><p class="font-semibold text-ink-900">{{ s.title }}</p><p class="text-sm text-ink-600">{{ s.text }}</p></div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Purchase request to payment -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="Purchase request to payment" title="One purchase, followed from request to paid" lead="Each purchase moves through the same steps, with a named role at each one. Approval routes and thresholds are the ones your tenant configures." />
        <UiReveal class="mt-10 lg:[&_li>div:first-child]:!w-[8.75rem] lg:[&_li>div:nth-child(2)]:!w-6">
          <UiFlowPipeline :steps="p2p" :interval="2000" />
        </UiReveal>
        <div class="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h3 class="text-xl font-bold">Accounts payable matching</h3>
            <p class="mt-3 text-ink-600">AP captures the vendor invoice and DeepTrack matches it against the purchase order, the delivery endorsement and the purchase request before a payment request is raised.</p>
            <p class="mt-4 text-sm text-ink-600">A payable invoice posts its net cost — excluding GST, less credit notes and write-offs — to the project cost ledger. If that month is already locked, the cost lands in the current month.</p>
          </div>
          <ul class="grid gap-3 sm:grid-cols-2">
            <UiReveal v-for="(r, i) in p2pRules" :key="r.title" as="li" class="flex gap-3 rounded-2xl border border-ink-100 bg-white p-4 shadow-card" :delay="(i % 2) * 80">
              <span class="icon-tile h-9 w-9 shrink-0 text-sm"><i :class="r.icon" aria-hidden="true"></i></span>
              <div><p class="font-semibold text-ink-900">{{ r.title }}</p><p class="mt-0.5 text-sm leading-relaxed text-ink-600">{{ r.text }}</p></div>
            </UiReveal>
          </ul>
        </div>
      </div>
    </section>

    <!-- Budget vs actual -->
    <section class="section bg-ink-50">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="Budgets" title="Budget against actual, while it still matters" lead="Budgets are built from a template’s categories against a project or client PO, and approved by the GM — plus the MD above your threshold. Matched invoices and month-end allocations then land against them." />
          <ul class="mt-8 space-y-3">
            <li v-for="b in budgetPoints" :key="b" class="flex gap-3 text-ink-700"><i class="fa-solid fa-circle-check mt-1 text-brand-600" aria-hidden="true"></i>{{ b }}</li>
          </ul>
        </div>
        <UiReveal>
          <UiChart type="bar" title="Budget against actual by category" subtitle="Illustrative project · SGD ’000" :data="budgetData" :legend="['Budget', 'Actual to date']" />
        </UiReveal>
      </div>
    </section>

    <!-- Product tour -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="Product tour" title="See where your project team works" lead="Real DeepTrack screens — from the project dashboard to budgets, purchase requests, claims, timesheets and reports." />
        <div class="mt-12"><UiScreenshotTabs :tabs="tour" label="DeepTrack product tour" /></div>
      </div>
    </section>

    <!-- Differentiators -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Why DeepTrack" title="Controls built into project transactions" />
        <div class="mt-12 grid gap-4 lg:grid-cols-2">
          <article v-for="(d, i) in differentiators" :key="d.title" class="card flex flex-col" :class="i === 0 ? 'lg:col-span-2' : ''">
            <div class="flex items-center gap-3">
              <span class="icon-tile"><i :class="d.icon" aria-hidden="true"></i></span>
              <p class="font-display text-sm font-bold text-brand-600">{{ String(i + 1).padStart(2, '0') }}</p>
            </div>
            <h3 class="mt-5 text-xl font-bold">{{ d.title }}</h3>
            <ul class="mt-5 grid flex-1 gap-4" :class="i === 0 ? 'sm:grid-cols-3' : ''">
              <li v-for="b in d.bullets" :key="b.title" class="flex gap-3">
                <i class="fa-solid fa-circle-check mt-1 text-brand-600" aria-hidden="true"></i>
                <div><p class="font-semibold text-ink-900">{{ b.title }}</p><p class="text-sm leading-relaxed text-ink-600">{{ b.text }}</p></div>
              </li>
            </ul>
            <p class="mt-6 border-t border-ink-100 pt-4 text-sm font-medium text-brand-800">{{ d.outcome }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Month-end -->
    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <div>
          <UiSectionHeader eyebrow="Month-end cost allocation" title="Labour and overhead, allocated in five stages" lead="After readiness checks, Finance runs five stages in order so each project carries its share of labour and overhead — not just its invoices." />
          <ul class="mt-8 space-y-4">
            <li v-for="r in monthEndRules" :key="r.title" class="flex gap-3">
              <span class="icon-tile h-9 w-9 shrink-0 text-sm"><i :class="r.icon" aria-hidden="true"></i></span>
              <div><p class="font-semibold text-ink-900">{{ r.title }}</p><p class="text-sm text-ink-600">{{ r.text }}</p></div>
            </li>
          </ul>
        </div>
        <ol class="relative space-y-3" aria-label="Month-end allocation stages, in order">
          <UiReveal v-for="(m, i) in monthEnd" :key="m.title" as="li" :delay="i * 110" class="relative" :style="{ marginLeft: `${i * 4}%` }">
            <div class="flex gap-4 rounded-2xl border border-ink-100 bg-white p-4 shadow-card">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-700 font-display text-sm font-bold text-white">{{ i + 1 }}</span>
              <div class="min-w-0">
                <p class="font-semibold text-ink-900">{{ m.title }}</p>
                <p class="mt-0.5 text-sm text-ink-600">{{ m.text }}</p>
                <p v-if="m.flow" class="mt-2 inline-flex flex-wrap items-center gap-1.5 text-xs font-medium text-brand-800">
                  <span class="rounded-full bg-brand-50 px-2 py-0.5">{{ m.flow[0] }}</span><i class="fa-solid fa-arrow-right text-[10px] text-ink-400" aria-hidden="true"></i><span class="rounded-full bg-brand-50 px-2 py-0.5">{{ m.flow[1] }}</span>
                </p>
              </div>
            </div>
          </UiReveal>
          <li class="flex items-center gap-3 rounded-2xl border border-dashed border-brand-300 bg-brand-50 p-4 text-sm text-brand-900" :style="{ marginLeft: '20%' }">
            <i class="fa-solid fa-lock text-brand-700" aria-hidden="true"></i>Lock the period: journal CSV downloaded, timesheets and costs frozen
          </li>
        </ol>
      </div>
    </section>

    <!-- Modules -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader eyebrow="The platform" title="Everything a project needs, in one place" lead="Projects, procurement and accounts payable, people and finance modules work as one — with a screen-by-role matrix and the approval thresholds you configure." />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="g in modules" :key="g.group" class="card">
            <span class="icon-tile"><i :class="g.icon" aria-hidden="true"></i></span>
            <h3 class="mt-5 text-lg font-semibold">{{ g.group }}</h3>
            <ul class="mt-4 space-y-2.5 text-sm text-ink-700">
              <li v-for="m in g.items" :key="m" class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-xs text-brand-600" aria-hidden="true"></i>{{ m }}</li>
            </ul>
          </div>
        </div>
        <div class="mt-6 flex flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-6 sm:flex-row sm:items-center">
          <span class="icon-tile shrink-0"><i class="fa-solid fa-plug" aria-hidden="true"></i></span>
          <div>
            <h3 class="text-base font-semibold">Integrations</h3>
            <p class="mt-1 text-sm text-ink-600">Link <strong class="font-semibold text-ink-900">Zoho Books</strong> for vendors and purchase orders, with credentials stored encrypted. Month-end produces a journal CSV, and general-ledger costs import from CSV.</p>
          </div>
          <NuxtLink to="/integrations" class="btn-secondary shrink-0 sm:ml-auto">See integrations</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Roles -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Built for your whole team" title="One system, tailored to every role" lead="Nine roles, from engineer to managing director. Engineers and PMs see only the projects they are on; individual cost rates are visible only to the Finance Controller, MD and Admin — PMs see labour totals, never rates." />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UiFeatureCard v-for="r in roles" :key="r.title" :icon="r.icon" :title="r.title" :text="r.text" />
        </div>
      </div>
    </section>

    <!-- AI -->
    <section class="section relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>
      <div class="container-site relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <UiSectionHeader dark eyebrow="AI in DeepTrack" lead="ARIVU, the CCorex AI assistant, sits inside DeepTrack. Project managers and approvers ask in plain language and get answers from their own project data, without leaving their work.">
            <template #title>Deliver projects with <span class="text-ai-gradient">ARIVU AI</span> beside you</template>
          </UiSectionHeader>
          <ul class="mt-8 grid gap-4 sm:grid-cols-3">
            <li v-for="a in aiPoints" :key="a.title" class="rounded-2xl border border-white/10 bg-white/5 p-5">
              <i :class="a.icon" class="text-cyan-400" aria-hidden="true"></i>
              <p class="mt-3 font-semibold text-white">{{ a.title }}</p>
              <p class="mt-1 text-sm leading-relaxed text-ink-300">{{ a.text }}</p>
            </li>
          </ul>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/products/arivu-ai" class="btn-accent">Explore ARIVU AI</NuxtLink>
          </div>
        </div>
        <div class="rounded-2xl border border-white/10 bg-ink-950/80 p-6 shadow-frame">
          <p class="flex items-center gap-3 text-sm font-semibold text-white">
            <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-ai-gradient"><i class="fa-solid fa-wand-magic-sparkles text-sm" aria-hidden="true"></i></span>
            Things project teams ask ARIVU
          </p>
          <ul class="mt-5 space-y-3">
            <li v-for="q in arivuPrompts" :key="q" class="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm text-ink-100">
              <i class="fa-regular fa-comment mt-0.5 text-cyan-400" aria-hidden="true"></i>{{ q }}
            </li>
          </ul>
          <p class="mt-5 text-xs text-ink-300">Example questions. ARIVU reads, but never changes, your organisation's data — in DeepTrack and every other CCorex app.</p>
        </div>
      </div>
    </section>

    <!-- Suite -->
    <section class="section">
      <div class="container-site">
        <div class="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <UiSectionHeader eyebrow="Part of the CCorex suite" title="Estimate in DeepCost. Deliver in DeepTrack. Staff with DeepHR." lead="DeepTrack is one app on the CCorex platform — one sign-in at dash.ccorex.com, one user base managed by your organisation admin, and roles per app." />
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
        <div class="mt-12"><UiAppGrid :exclude="['deeptrack']" /></div>
      </div>
    </section>

    <!-- Plans -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="DeepTrack plans" title="Start with one project. Scale to a portfolio." lead="Pricing that scales with your team and projects. Tell us how you run projects and we will put together a tailored quote." />
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
    <section class="section-tight">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="DeepTrack questions buyers ask" lead="Anything else? Email admin@newhamtech.com or book a demo." />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand
      title="Bring every project under one system."
      lead="Control budgets and procurement, match every invoice, bill claims cleanly and see real project margin after month-end. See it on your own projects in a live demo."
      secondary-label="See all plans"
      secondary-to="/pricing"
    />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const pageUrl = config.public.siteUrl + '/products/deeptrack'
const description = 'DeepTrack is project cost control for contractors: budgets, client claims, timesheets, PR-to-PO procurement, invoice matching and month-end cost allocation.'

useSeoMeta({
  title: 'DeepTrack — construction project & cost control software',
  description,
  ogTitle: 'DeepTrack — project delivery & cost control for contractors',
  ogDescription: description
})
useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'DeepTrack',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Construction project management and cost control',
      operatingSystem: 'Web',
      url: pageUrl,
      description,
      isPartOf: { '@type': 'SoftwareApplication', name: 'CCorex', url: config.public.siteUrl },
      publisher: { '@type': 'Organization', name: 'Newham Technological Solutions' }
    })
  }]
})

const heroPoints = ['Budgets & client claims', 'PR → PO → delivery → invoice', 'Invoice matching & payments', 'Month-end cost allocation']

const problems = [
  { icon: 'fa-solid fa-eye-slash', title: 'Margin you can’t see', text: 'Contract value against actual spend lives in spreadsheets — real project margin surfaces too late.' },
  { icon: 'fa-solid fa-inbox', title: 'Approvals stuck in inboxes', text: 'Purchase requests, budgets and payments get signed off over email, with no thresholds and no trail.' },
  { icon: 'fa-solid fa-file-invoice', title: 'Invoices paid on trust', text: 'Vendor invoices are paid without checking them against the PO and what was actually delivered.' },
  { icon: 'fa-solid fa-user-clock', title: 'Invisible labour and overhead', text: 'Timesheets, worker pools and HQ overhead never land back on the project’s true cost.' }
]

const steps = [
  { title: 'Project', text: 'Client, contract value, retention, GST and team.' },
  { title: 'Budget', text: 'From a template, approved by GM (and MD above threshold).' },
  { title: 'Purchase request', text: 'Against an approved budget; PM, then GM, then MD above threshold.' },
  { title: 'PO & delivery', text: 'Buyer issues the PO; the site endorses goods received.' },
  { title: 'Invoice & payment', text: 'AP matches the invoice; PM, PD and Director approve payment.' },
  { title: 'Client claims', text: 'Progress claims with retention, GST and a PDF certificate.' },
  { title: 'Month-end', text: 'Labour and overhead allocated; the period is locked.' }
]
const stepNotes = [
  { icon: 'fa-solid fa-scale-balanced', title: 'Budget against actual', text: 'Utilisation and over-budget alerts, with a version history for every budget.' },
  { icon: 'fa-solid fa-stamp', title: 'Configured approvals', text: 'Every purchase request is routed through the approvals and thresholds your tenant sets.' },
  { icon: 'fa-solid fa-clipboard-list', title: 'Finance audit log', text: 'Finance actions and period unlocks are written to an audit log.' }
]

const p2p = [
  { title: 'Purchase request', text: 'Engineer or PM raises it against an approved budget.', icon: 'fa-solid fa-file-circle-plus' },
  { title: 'Approval', text: 'PM, then GM; MD above your threshold.', icon: 'fa-solid fa-stamp' },
  { title: 'Purchase order', text: 'Buyer issues it to the vendor; each issue is versioned.', icon: 'fa-solid fa-file-contract' },
  { title: 'Delivery order', text: 'Project team endorses goods received or returned.', icon: 'fa-solid fa-truck-ramp-box' },
  { title: 'Invoice matched', text: 'AP matches it to PO, endorsement and request.', icon: 'fa-solid fa-file-invoice' },
  { title: 'Payment approval', text: 'PM, then PD, then Director — each a different person.', icon: 'fa-solid fa-user-check' },
  { title: 'Paid', text: 'Payment Officer records it; AP reconciles; Buyer closes the PO.', icon: 'fa-solid fa-circle-check' }
]
const p2pRules = [
  { icon: 'fa-solid fa-clone', title: 'Duplicates blocked', text: 'A vendor invoice number already captured cannot be entered again.' },
  { icon: 'fa-solid fa-triangle-exclamation', title: 'Discrepancies flagged', text: 'A rate mismatch, or billed quantity above endorsed quantity, marks the invoice as a discrepancy.' },
  { icon: 'fa-solid fa-boxes-stacked', title: 'Endorsement limits', text: 'Endorsements cannot exceed the ordered quantity; amendments cannot cut below what is endorsed or invoiced.' },
  { icon: 'fa-solid fa-people-arrows', title: 'Maker-checker', text: 'The requester cannot approve. Changing the amount or payee restarts approval; rejecting needs a comment.' },
  { icon: 'fa-solid fa-scale-unbalanced', title: 'Payment ceiling', text: 'A payment request cannot exceed gross less credit notes, advances and amounts already paid or reserved.' },
  { icon: 'fa-solid fa-file-circle-exclamation', title: 'Non-PO invoices', text: 'Above your tenant limit they are blocked or warned, as you configure. A PO without a request needs a justification.' }
]
const budgetPoints = [
  'Utilisation and over-budget alerts on each budget',
  'A version history for every budget',
  'Purchase requests raised only against an approved budget',
  'Matched invoices post net cost to the project cost ledger'
]
const budgetData = [
  { label: 'Materials', value: 420, value2: 365 },
  { label: 'Subcon', value: 310, value2: 334 },
  { label: 'Labour', value: 260, value2: 198 },
  { label: 'Equipment', value: 90, value2: 61 },
  { label: 'Prelims', value: 75, value2: 70 },
  { label: 'Overhead', value: 60, value2: 41 }
]
const monthEnd = [
  { title: 'Direct labour', text: 'At each person’s actual hourly rate: fully loaded monthly cost divided by available hours.' },
  { title: 'Worker pool', text: 'Spread over productive hours.' },
  { title: 'HQ overhead', text: 'Allocated by fixed percentages that total 100.', flow: ['HQ', 'Business units'] },
  { title: 'Business-unit overhead', text: 'Allocated by approved project value.', flow: ['Business units', 'Projects'] },
  { title: 'Project overhead', text: 'Spread to the project’s workheads.', flow: ['Projects', 'Workheads'] }
]
const monthEndRules = [
  { icon: 'fa-solid fa-rotate-right', title: 'Rerun safely', text: 'Rerunning a stage clears the stages after it, so they are computed again from the new figures.' },
  { icon: 'fa-solid fa-lock', title: 'Lock the period', text: 'Locking needs every stage computed. It downloads the journal CSV and freezes that month’s timesheets and costs.' },
  { icon: 'fa-solid fa-clipboard-list', title: 'Audited unlocks', text: 'Unlocking needs a reason, is written to the audit log and forces a recompute.' },
  { icon: 'fa-solid fa-eye-slash', title: 'Rates kept private', text: 'Individual cost rates are visible only to the Finance Controller, MD and Admin; PMs see labour totals.' }
]

const tour = [
  { title: 'Project dashboard', text: 'KPIs, project status, budget overview, monthly revenue and pending items.', src: '/images/product/deeptrack-dashboard.webp', url: 'deeptrack.app / dashboard', alt: 'DeepTrack welcome dashboard showing pending projects, completed projects, total revenue and total budget, with budget overview and monthly revenue charts' },
  { title: 'Budgets', text: 'Build a budget from a template against a project or client PO.', src: '/images/product/deeptrack-budget.webp', url: 'deeptrack.app / budget', alt: 'DeepTrack Add New Budget form with budget template, project and customer PO selectors, budget line items, attachments and total budget' },
  { title: 'Procurement', text: 'Purchase requests against a budget, approved by PM, GM and — above threshold — MD.', src: '/images/product/deeptrack-procurement.webp', url: 'deeptrack.app / procurement', alt: 'DeepTrack purchase request list filtered by project, customer PO and budget, showing PR code, budget ID, status, total amount and verification by project manager, general manager and managing director' },
  { title: 'Claims', text: 'Progress claims numbered in sequence per project, with amount and status.', src: '/images/product/deeptrack-claims.webp', url: 'deeptrack.app / claims', alt: 'DeepTrack claims list filtered by project and customer PO, showing claim date, project, customer PO, claim number, amount and status' },
  { title: 'Timesheets', text: 'Hours coded to project, workhead, WBS activity and business unit — individually or in bulk.', src: '/images/product/deeptrack-timesheet.webp', url: 'deeptrack.app / manpower', alt: 'DeepTrack Add New Time Sheet form with project, customer PO, budget and employee selectors, monthly entry, duration worked, amount and work description, plus CSV upload' },
  { title: 'Reports', text: 'Project, budget, procurement, claims, finance and user activity reports, exportable.', src: '/images/product/deeptrack-reports.webp', url: 'deeptrack.app / reports', alt: 'DeepTrack project summary report with tabs for project, budget, procurement, claims, finance and user activity, listing contract value, total budget, approved claims and purchase requests per project, with CSV and PDF export' }
]

const differentiators = [
  {
    icon: 'fa-solid fa-scale-balanced', title: 'Cost control on every project',
    bullets: [
      { title: 'Projects with the commercial terms', text: 'Contract type and value, retention %, payment terms, defects liability period, GST and business unit. Client POs tracked as Active, Expired or Fully Claimed.' },
      { title: 'Budget against actual', text: 'Budgets built from template categories, with utilisation, over-budget alerts and a version history. Approved by the GM, plus the MD above your threshold.' },
      { title: 'Spend against approved budgets', text: 'Purchase requests are raised against an approved budget, and payable invoices post their net cost to the project cost ledger.' }
    ],
    outcome: 'Spot margin pressure during the project, not only at close.'
  },
  {
    icon: 'fa-solid fa-cart-shopping', title: 'Purchase request to payment, with checks at each step',
    bullets: [
      { title: 'Configured approvals', text: 'Every purchase request is routed through the configured approvals: PM, then GM, then MD above the tenant’s threshold. A PO without a request needs a recorded justification.' },
      { title: 'Invoice matching', text: 'AP matches each vendor invoice against PO, delivery endorsement and request. Duplicate invoice numbers are blocked; rate or quantity mismatches are flagged as discrepancies.' },
      { title: 'Maker-checker payments', text: 'PM, then PD, then Director approve each payment request — each step a different person. Changing the amount or payee restarts approval.' }
    ],
    outcome: 'Requests, approvals, matches and payments recorded in one trail.'
  },
  {
    icon: 'fa-solid fa-file-signature', title: 'Client claims, cleanly billed',
    bullets: [
      { title: 'Progress claims in sequence', text: 'Numbered per project, with retention and 9% GST calculated.' },
      { title: 'Progress Claim Certificate', text: 'A PDF certificate for each claim, ready to send.' },
      { title: 'Payment tracking', text: 'Track what the client has paid, with a retention tracker and cash-flow forecast in reports.' }
    ],
    outcome: 'A clean record of what you billed, what you hold in retention and what was paid.'
  },
  {
    icon: 'fa-solid fa-helmet-safety', title: 'Labour and overhead that land back in the project',
    bullets: [
      { title: 'Timesheets, coded properly', text: 'Individual or bulk timesheets coded to project, BCA workhead, WBS activity and business unit; each hour productive, idle, training or tender. PMs approve.' },
      { title: 'Month-end allocation', text: 'Direct labour at actual hourly rates, worker pool, HQ overhead, business-unit overhead and project overhead — five stages in order.' },
      { title: 'Period lock', text: 'Locking downloads the journal CSV and freezes the month. Unlocking needs a reason, is audited and forces a recompute.' }
    ],
    outcome: 'See project cost with labour and overhead included, not just invoices.'
  },
  {
    icon: 'fa-solid fa-sliders', title: 'Configured to your business',
    bullets: [
      { title: 'Per-tenant settings', text: 'Dropdown lists, approval thresholds, budget templates, client list, non-PO invoice limit and Zoho Books link.' },
      { title: 'Screen-by-role matrix', text: 'Choose which roles see which screens. Individual cost rates are visible only to Finance Controller, MD and Admin.' },
      { title: 'Reports & schedules', text: 'Custom report builder and scheduled reports, plus email at each approval step.' }
    ],
    outcome: 'Your thresholds, your approvers, your chart of workheads.'
  }
]

const modules = [
  { group: 'Projects', icon: 'fa-solid fa-folder-tree', items: ['Projects & client POs', 'Budgets & versions', 'Client claims', 'Dashboard'] },
  { group: 'Procurement & AP', icon: 'fa-solid fa-coins', items: ['Purchase requests & POs', 'Delivery endorsements', 'Invoice matching & credit notes', 'Payment requests & queue'] },
  { group: 'People', icon: 'fa-solid fa-people-group', items: ['Workers & designations', 'Individual & bulk timesheets', 'Employee cost register', 'Hour types'] },
  { group: 'Finance & control', icon: 'fa-solid fa-sliders', items: ['Month-end cost allocation', 'Workheads, WBS & cost centres', 'Profitability & reports', 'Audit log'] }
]

const roles = [
  { icon: 'fa-solid fa-user-tie', title: 'Managing director & GM', text: 'GM approves purchase requests and budgets; MD approves above thresholds and can reopen completed projects.' },
  { icon: 'fa-solid fa-diagram-project', title: 'Project manager & PD', text: 'PM runs projects, raises requests, approves timesheets and is first payment approver; PD is second.' },
  { icon: 'fa-solid fa-helmet-safety', title: 'Engineer', text: 'Raises purchase requests, logs hours and endorses deliveries. Sees only their own projects.' },
  { icon: 'fa-solid fa-cart-flatbed', title: 'Buyer', text: 'Creates, issues and closes purchase orders; each issue is saved as a version.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'Finance controller & payment officer', text: 'AP captures invoices, runs matching and month-end; the payment officer records payments.' },
  { icon: 'fa-solid fa-user-gear', title: 'Admin', text: 'Configures the tenant — thresholds, templates, lists and the screen-by-role matrix.' }
]

const aiPoints = [
  { icon: 'fa-regular fa-comments', title: 'Ask in plain language', text: 'Ask about projects, budgets, purchase requests, claims, timesheets and delivery orders.' },
  { icon: 'fa-solid fa-chart-column', title: 'Charts & exports', text: 'Turn an answer into a chart, or export it to PDF or Excel.' },
  { icon: 'fa-solid fa-eye', title: 'Read-only', text: 'ARIVU reports what it finds; approvals stay with your team in DeepTrack.' }
]
const arivuPrompts = [
  'Which purchase requests are waiting for approval?',
  'How is committed cost tracking against budget on Block B?',
  'Which client claims are still unpaid this quarter?'
]

const suiteToday = ['One sign-in at dash.ccorex.com', 'Users and roles managed by your organisation admin', 'Users provisioned into each app automatically', 'ARIVU in every app, read-only']
const suiteNext = ['Won DeepCost tender → DeepTrack project without re-entry', 'Customers and contacts shared across apps']

const plans = [
  { name: 'Starter', for: 'Small teams & single projects', features: ['Projects & client POs', 'Budgets & budget against actual', 'Client claims', 'Configured approvals', 'Core project reports'] },
  { name: 'Growth', for: 'Scaling project businesses', popular: true, features: ['Everything in Starter', 'Procurement (PR → PO → delivery)', 'Invoice matching & payments', 'Manpower & timesheets', 'Scheduled reports'] },
  { name: 'Enterprise', for: 'Multi-entity contractors', features: ['Everything in Growth', 'Month-end cost allocation', 'Zoho Books link', 'Screen-by-role matrix & budget templates', 'Audit log & priority support'] }
]

const faqs = [
  { q: 'What does DeepTrack cover?', a: 'A contractor’s projects from contract to profit: projects and client POs, budgets, client claims, manpower and timesheets, procurement, accounts payable with invoice matching, and month-end cost allocation — with reports and scheduled exports.' },
  { q: 'How do purchase requests get approved?', a: 'Every purchase request is raised against an approved budget and routed through the configured approvals: project manager, then general manager, and the managing director above your tenant’s threshold. A request code is assigned at final approval.' },
  { q: 'How does invoice matching work?', a: 'Accounts payable captures the vendor invoice and DeepTrack matches it against the PO, the delivery endorsement and the purchase request. Duplicate invoice numbers are blocked, and a rate mismatch or quantity above what was endorsed marks the invoice as a discrepancy.' },
  { q: 'Does DeepTrack track labour and overhead cost?', a: 'Yes. Timesheets are coded to project, workhead, WBS activity and business unit. The month-end run allocates direct labour at actual hourly rates, the worker pool, HQ and business-unit overhead, and project overhead, then locks the period.' },
  { q: 'Is it set up for Singapore?', a: 'Yes. DeepTrack works in SGD with 9% GST, and codes cost to BCA workheads. Progress claims carry retention and GST and produce a PDF Progress Claim Certificate.' },
  { q: 'Does it connect to our accounting system?', a: 'Each tenant can link Zoho Books for vendors and purchase orders. Month-end also produces a journal CSV for your ledger, and general-ledger costs can be imported from CSV.' },
  { q: 'How is DeepTrack priced?', a: 'Plans scale with your team and projects — Starter, Growth and Enterprise. Contact us for a tailored quote.' }
]
</script>
