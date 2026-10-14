<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-14 pb-24 pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-24">
        <div>
          <p class="eyebrow-dark">Resources</p>
          <h1 class="h-display mt-5 text-white">Practical guides for construction teams.</h1>
          <p class="lead-dark mt-6 max-w-xl">We are writing plain-language guides on estimating, take-off, project cost control and Singapore and India payroll. While they are in progress, explore the products and our FAQ — or ask us directly.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#guides" class="btn-accent">Upcoming guides <i class="fa-solid fa-arrow-down text-xs" aria-hidden="true"></i></a>
            <NuxtLink to="/faq" class="btn-ghost-dark">Read the FAQ</NuxtLink>
          </div>
        </div>
        <img src="/images/photos/bim-engineer-workstation.webp" alt="Engineer working on drawings and a 3D services model at a workstation" width="2000" height="1055" class="aspect-[16/10] w-full rounded-2xl border border-white/10 object-cover shadow-frame" loading="eager" />
      </div>
    </section>

    <!-- Upcoming guides -->
    <section id="guides" class="section scroll-mt-20">
      <div class="container-site">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <UiSectionHeader eyebrow="Guides in progress" title="Coming soon" lead="These guides are being written now. None are published yet." />
          <a href="mailto:admin@newhamtech.com?subject=Notify%20me%20when%20CCorex%20guides%20are%20published" class="btn-secondary shrink-0"><i class="fa-regular fa-bell text-xs" aria-hidden="true"></i>Email me when they’re out</a>
        </div>
        <ul class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="g in guides" :key="g.title" class="card flex h-full flex-col">
            <div class="flex items-center justify-between">
              <span class="icon-tile" :class="g.tone"><i :class="g.icon" aria-hidden="true"></i></span>
              <span class="rounded-full bg-ink-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-600">Coming soon</span>
            </div>
            <p class="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-500">{{ g.topic }}</p>
            <h3 class="mt-1 text-lg font-semibold">{{ g.title }}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{{ g.text }}</p>
            <NuxtLink :to="g.related.to" class="mt-5 text-sm font-semibold text-brand-700 hover:text-brand-900">Related: {{ g.related.label }} <i class="fa-solid fa-arrow-right ml-1 text-xs" aria-hidden="true"></i></NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Product tours -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Explore the products" title="See how each app works" lead="Each product page shows the workflow with real screenshots." />
        <div class="mt-12"><UiAppGrid /></div>
      </div>
    </section>

    <!-- Quick links -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="Useful pages" title="Answers you can use today" />
        <ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="l in links" :key="l.to">
            <NuxtLink :to="l.to" class="card-hover group flex h-full flex-col">
              <i :class="l.icon" class="text-xl text-brand-600" aria-hidden="true"></i>
              <h3 class="mt-4 text-base font-semibold">{{ l.title }}</h3>
              <p class="mt-1.5 flex-1 text-sm leading-relaxed text-ink-600">{{ l.text }}</p>
              <span class="mt-4 text-sm font-semibold text-brand-700 group-hover:text-brand-900">Open <i class="fa-solid fa-arrow-right ml-1 text-xs" aria-hidden="true"></i></span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Ask -->
    <section class="section-tight bg-ink-50">
      <div class="container-site"><div class="grid gap-8 rounded-3xl border border-ink-100 bg-white p-8 shadow-card lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 class="text-2xl font-bold">Have a question a guide would answer?</h2>
          <p class="mt-2 text-ink-600">Tell us what you would like covered — BOQ preparation, take-off methods, claims, CPF — and we will prioritise it. Customers can also ask our team directly.</p>
        </div>
        <div class="flex flex-wrap gap-3 lg:justify-end">
          <a href="mailto:admin@newhamtech.com?subject=Guide%20suggestion" class="btn-primary"><i class="fa-solid fa-envelope text-xs" aria-hidden="true"></i>Suggest a topic</a>
          <NuxtLink to="/contact" class="btn-secondary">Book a demo</NuxtLink>
        </div>
      </div>
      </div>
    </section>

    <UiCtaBand />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Resources: estimating & payroll guides',
  description: 'Upcoming CCorex guides on ACMV BOQs, material take-off, Singapore construction payroll and choosing estimating software, plus product tours and FAQs.',
  ogTitle: 'CCorex resources — guides for construction teams',
  ogDescription: 'Guides on BOQs, take-off, Singapore payroll and estimating software are coming soon. Explore product tours and the FAQ today.'
})
useHead({ link: [{ rel: 'canonical', href: config.public.siteUrl + '/resources' }] })

const guides = [
  { topic: 'Estimating', icon: 'fa-solid fa-fan', tone: 'bg-blue-50 text-mep-mech', title: 'How to prepare an ACMV BOQ', text: 'Structuring an ACMV bill of quantities by area and item group so it is easy to price, check and approve.', related: { label: 'DeepCost', to: '/products/deepcost' } },
  { topic: 'Take-off', icon: 'fa-solid fa-ruler-combined', tone: 'bg-sky-50 text-sky-700', title: 'Material take-off methods compared', text: 'Manual counts, spreadsheet MTOs, area-based take-off and on-screen take-off from drawings — trade-offs of each.', related: { label: 'DeepPlan AI', to: '/products/deepplan-ai' } },
  { topic: 'HR & payroll', icon: 'fa-solid fa-landmark', tone: 'bg-emerald-50 text-emerald-700', title: 'Singapore payroll for construction: CPF, SDL & MOM', text: 'CPF and SDL contributions, MOM overtime rules and itemised payslips for an office and site workforce.', related: { label: 'DeepHR', to: '/products/deephr' } },
  { topic: 'Buying guide', icon: 'fa-solid fa-list-check', tone: 'bg-brand-50 text-brand-700', title: 'Choosing estimating software for MEP contractors', text: 'Questions to ask about catalogs, approvals, take-off and how estimates carry into orders and projects.', related: { label: 'Pricing & plans', to: '/pricing' } },
  { topic: 'Project delivery', icon: 'fa-solid fa-file-invoice-dollar', tone: 'bg-amber-50 text-amber-700', title: 'Controlling project cost from budget to month-end', text: 'Linking budgets, procurement, invoice matching, claims and month-end cost allocation so margin is visible while you can still act.', related: { label: 'DeepTrack', to: '/products/deeptrack' } },
  { topic: 'AI', icon: 'fa-solid fa-wand-magic-sparkles', tone: 'bg-ai-50 text-ai-700', title: 'Using an AI assistant in construction software', text: 'What a read-only assistant like ARIVU can help with day to day — answers from your own data, charts, exports and document search.', related: { label: 'ARIVU AI', to: '/products/arivu-ai' } }
]
const links = [
  { to: '/faq', icon: 'fa-regular fa-circle-question', title: 'FAQ', text: 'Platform, apps, AI, security and pricing questions.' },
  { to: '/platform', icon: 'fa-solid fa-layer-group', title: 'Platform', text: 'SSO, shared users and roles, security and the roadmap.' },
  { to: '/integrations', icon: 'fa-solid fa-plug', title: 'Integrations', text: 'What connects today, and what is on the roadmap.' },
  { to: '/pricing', icon: 'fa-solid fa-tags', title: 'Pricing', text: 'Essentials, Business and Enterprise plans compared.' }
]
</script>
