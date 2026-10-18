<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-14 pb-24 pt-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:pt-24">
        <div>
          <p class="eyebrow-dark">Solutions by role</p>
          <h1 class="h-display mt-5 text-white">One platform. The right view for every role.</h1>
          <p class="lead-dark mt-6 max-w-xl">Directors, estimators, project managers, finance, HR and site teams all work in CCorex — each with the apps, screens and approvals their job needs, on one sign-in.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-accent">Book a live demo <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <a href="#roles" class="btn-ghost-dark">Find your role</a>
          </div>
        </div>
        <!-- Role → app map -->
        <div class="grid gap-3 sm:grid-cols-2" aria-label="Apps by role">
          <a v-for="r in roles" :key="r.id" :href="`#${r.id}`" class="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-cyan-400/50 hover:bg-white/10">
            <span class="flex items-center gap-2.5 text-sm font-semibold text-white">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-cyan-300"><i :class="r.icon" aria-hidden="true"></i></span>{{ r.role }}
            </span>
            <span class="mt-3 flex flex-wrap gap-1.5">
              <span v-for="a in r.apps" :key="a.slug" class="rounded-full px-2 py-0.5 text-[11px] font-medium" :class="a.ai ? 'bg-ai-500/20 text-ai-100' : 'bg-white/10 text-ink-100'">{{ a.name }}</span>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- Role index -->
    <section id="roles" class="scroll-mt-20 border-b border-ink-100 bg-white" aria-label="Roles">
      <div class="container-site py-8">
        <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <li v-for="r in roles" :key="r.id">
            <a :href="`#${r.id}`" class="flex h-full flex-col items-start gap-2 rounded-xl border border-ink-100 p-4 text-sm font-semibold text-ink-900 hover:border-brand-200 hover:bg-brand-50">
              <i :class="r.icon" class="text-brand-600" aria-hidden="true"></i>{{ r.role }}
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Role sections -->
    <section v-for="(r, i) in roles" :id="r.id" :key="r.id" class="section scroll-mt-20" :class="i % 2 ? 'bg-ink-50' : 'bg-white'">
      <div class="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
        <div :class="i % 2 ? 'lg:order-2' : ''">
          <p class="eyebrow"><i :class="r.icon" aria-hidden="true"></i>{{ r.role }}</p>
          <h2 class="h-section mt-3">{{ r.title }}</h2>
          <p class="lead mt-4">{{ r.lead }}</p>
          <div class="mt-6 flex flex-wrap items-center gap-2">
            <span class="text-sm font-semibold text-ink-900">Apps:</span>
            <NuxtLink v-for="a in r.apps" :key="a.slug" :to="`/products/${a.slug}`" class="chip hover:border-brand-300 hover:text-brand-800" :class="a.ai ? 'chip-ai' : ''">
              <i v-if="a.ai" class="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>{{ a.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- Before → after -->
        <UiReveal class="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div class="rounded-2xl border border-rose-100 bg-rose-50 p-5">
            <p class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-700"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>Today’s friction</p>
            <ul class="mt-4 space-y-3 text-sm text-ink-700">
              <li v-for="p in r.pains" :key="p" class="flex gap-2.5"><i class="fa-solid fa-xmark mt-1 text-xs text-rose-500" aria-hidden="true"></i>{{ p }}</li>
            </ul>
          </div>
          <div class="flex items-center justify-center" aria-hidden="true">
            <span class="flex h-10 w-10 rotate-90 items-center justify-center rounded-full bg-brand-700 text-white shadow-lift sm:rotate-0"><i class="fa-solid fa-arrow-right"></i></span>
          </div>
          <div class="rounded-2xl border border-brand-100 bg-white p-5 shadow-card">
            <p class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-700"><i class="fa-solid fa-circle-check" aria-hidden="true"></i>With CCorex</p>
            <ul class="mt-4 space-y-3 text-sm text-ink-700">
              <li v-for="o in r.outcomes" :key="o" class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-xs text-brand-600" aria-hidden="true"></i>{{ o }}</li>
            </ul>
          </div>
        </UiReveal>
      </div>
    </section>

    <!-- Matrix -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="At a glance" title="Which apps each team uses" lead="Every role signs in to the same platform. Each app's roles and permissions decide what each person can see, add, edit and approve." />
        <div class="relative mt-12 overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-card">
          <table class="w-full min-w-[760px] text-sm">
            <caption class="sr-only">CCorex apps typically used by each role</caption>
            <thead class="bg-ink-50 text-xs uppercase tracking-wider text-ink-500">
              <tr>
                <th scope="col" class="px-5 py-3 text-left font-semibold">Role</th>
                <th v-for="a in matrixApps" :key="a" scope="col" class="px-3 py-3 text-center font-semibold">{{ a }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-ink-100">
              <tr v-for="r in roles" :key="r.id">
                <th scope="row" class="px-5 py-3.5 text-left font-semibold text-ink-900">{{ r.role }}</th>
                <td v-for="a in matrixApps" :key="a" class="px-3 py-3.5 text-center">
                  <i v-if="r.apps.some((x) => x.name === a)" class="fa-solid fa-circle-check text-brand-600" aria-hidden="true"></i>
                  <span v-if="r.apps.some((x) => x.name === a)" class="sr-only">Yes</span>
                  <span v-else class="text-ink-300" aria-label="Not typical">–</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="mt-6 text-center text-sm text-ink-600">Working in a particular trade? See <NuxtLink to="/industries" class="font-semibold text-brand-700 hover:text-brand-900">CCorex by industry</NuxtLink>.</p>
      </div>
    </section>

    <!-- Singapore solutions -->
    <section class="section-tight bg-ink-50">
      <div class="container-site">
        <UiSectionHeader eyebrow="For Singapore contractors" title="Start with the job you need done" />
        <ul class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="s in sgSolutions" :key="s.to">
            <NuxtLink :to="s.to" class="card flex h-full items-center gap-3 hover:border-brand-200"><i :class="s.icon" class="text-brand-600" aria-hidden="true"></i><span class="font-semibold">{{ s.name }}</span></NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <UiTrustStrip />

    <UiCtaBand title="Show us how your team works today" lead="Bring your estimators, project managers and HR lead to a 30-minute demo. We will map each role to the apps and approvals it needs." />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const sgSolutions = [
  { name: 'Progress claim software', icon: 'fa-solid fa-file-invoice-dollar', to: '/solutions/progress-claim-software' },
  { name: 'Construction payroll software', icon: 'fa-solid fa-money-check-dollar', to: '/solutions/construction-payroll-software' },
  { name: 'Foreign worker attendance app', icon: 'fa-solid fa-user-check', to: '/solutions/foreign-worker-attendance-app' },
  { name: 'MEP estimating and BOQ software', icon: 'fa-solid fa-calculator', to: '/products/deepcost' }
]
useSeoMeta({
  title: 'Solutions by role for construction teams',
  description: 'How CCorex supports directors, estimators and QS, project managers, procurement and finance, HR and admin, and site supervisors on one construction platform.',
  ogTitle: 'CCorex solutions — the right view for every construction role',
  ogDescription: 'Estimating, project delivery and HR & payroll apps mapped to directors, estimators, project managers, finance, HR and site teams.'
})
useHead({ link: [{ rel: 'canonical', href: config.public.siteUrl + '/solutions' }] })

const DC = { name: 'DeepCost', slug: 'deepcost' }
const DT = { name: 'DeepTrack', slug: 'deeptrack' }
const HR = { name: 'DeepHR', slug: 'deephr' }
const DP = { name: 'DeepPlan AI', slug: 'deepplan-ai', ai: true }
const AR = { name: 'ARIVU AI', slug: 'arivu-ai', ai: true }
const DD = { name: 'Deep Drive', slug: 'deep-drive' }
const PE = { name: 'PDF Editor', slug: 'pdf-editor' }
const matrixApps = ['DeepCost', 'DeepTrack', 'DeepHR', 'DeepPlan AI', 'ARIVU AI', 'Deep Drive', 'PDF Editor']

const roles = [
  {
    id: 'owners', role: 'Owners & MDs', icon: 'fa-solid fa-briefcase',
    title: 'See the whole business — and approve what matters',
    lead: 'Tenders in the pipeline, project margin and the people cost behind it, on one sign-in, with final approval above the thresholds you set.',
    pains: ['Margin surfaces at project close, not while you can act', 'Approvals arrive by email with no thresholds or trail', 'Five tools and five logins to answer one question'],
    outcomes: ['Budget against actual and profitability per project in DeepTrack', 'Approval thresholds per tenant — the MD approves purchase requests and budgets above yours', 'Ask ARIVU about tenders, projects and people, with charts and exports', 'Audit logs for finance actions, HR changes and period unlocks'],
    apps: [DT, DC, HR, AR],
  },
  {
    id: 'estimation', role: 'Estimation & QS', icon: 'fa-solid fa-ruler-combined',
    title: 'Price every tender from one library',
    lead: 'From tender received to a priced Form of Tender: an AI tender summary, area-based material take-off, one priced library and FOT AI on the client’s BOQ.',
    pains: ['Tender documents read page by page, quantities counted by hand', 'Every estimator uses their own rates', 'Priced figures re-typed into the client’s BOQ before the deadline'],
    outcomes: ['AI tender summary fills a predefined set of fields from the tender documents', 'Take off by building, floor and room, priced from a dated library', 'Validation engine rejects components that break your rules', 'Drawings measured in DeepPlan (AI take-off in early access)'],
    apps: [DC, DP, PE, AR],
  },
  {
    id: 'project-managers', role: 'Project managers', icon: 'fa-solid fa-diagram-project',
    title: 'Run projects on an approved budget',
    lead: 'Own the project, its budget, purchase requests, timesheets and client claims in one place.',
    pains: ['Budgets in one file, POs in another, claims on paper', 'Labour cost never reaches the project', 'Payment approvals chased by email'],
    outcomes: ['Projects carry contract value, retention, payment terms and GST', 'Budget against actual, utilisation and over-budget alerts', 'Progress claims with retention, GST and a PDF certificate', 'Approve your team’s timesheets and first-approve payments'],
    apps: [DT, DD, PE, AR],
  },
  {
    id: 'procurement-finance', role: 'Procurement & finance', icon: 'fa-solid fa-file-invoice-dollar',
    title: 'Every dollar requested, approved and matched',
    lead: 'Purchase request → PO → delivery → vendor invoice → payment, with invoice matching and month-end cost allocation.',
    pains: ['Purchases committed before a budget is approved', 'Invoices paid without checking delivery', 'Month-end means chasing timesheets and spreadsheets'],
    outcomes: ['Every purchase request raised against an approved budget and routed through your configured approvals', 'Invoices matched against PO, delivery and request; duplicates blocked', 'Maker-checker payment approval: PM, PD, then Director', 'Five-stage month-end allocation, journal CSV and Zoho Books link'],
    apps: [DT, DD, AR],
  },
  {
    id: 'hr-admin', role: 'HR & admin', icon: 'fa-solid fa-id-card',
    title: 'Run Singapore payroll from attendance you trust',
    lead: 'Approved attendance and leave flow into payroll with CPF, SDL and SHG — with self-service for every employee.',
    pains: ['Leave balances and payroll in fragile spreadsheets', 'Card or paper attendance that is easy to game', 'Leave and claim approvals lost in chat'],
    outcomes: ['Singapore: CPF (incl. graduated rates for new PRs), SDL and SHG funds', 'One approvals engine for leave, claims, letters and timesheets', 'Payslips filed to each employee’s Documents; reports on a schedule'],
    apps: [HR, DD, AR],
  },
  {
    id: 'site', role: 'Site supervisors', icon: 'fa-solid fa-helmet-safety',
    title: 'Check in, log time and raise requests from site',
    lead: 'Face and GPS attendance on your own phone, checked against the site radius — plus timesheets, purchase requests and delivery endorsements.',
    pains: ['Punch cards and paper timesheets for field crews', 'Buddy-punching that cannot be verified', 'Requests sent by message and forgotten'],
    outcomes: ['Face check-in on the employee’s own phone — no hardware to buy', 'GPS check against the site radius; on time or late against site hours', 'Works offline; punches re-verified when back online', 'Raise purchase requests and endorse deliveries in DeepTrack'],
    apps: [HR, DT, PE],
  }
]
</script>
