<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative pb-28 pt-16 text-center lg:pt-24">
        <p class="eyebrow-dark">Plans &amp; packages</p>
        <h1 class="h-display mx-auto mt-5 max-w-4xl text-white">Subscribe to the suite. Scale as you grow.</h1>
        <p class="lead-dark mx-auto mt-6 max-w-2xl">Flexible per-user pricing — bundle the apps that fit your business and get a tailored quote. Start with one workflow and add apps when you are ready.</p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <NuxtLink to="/contact" class="btn-accent">Get a tailored quote <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
          <a href="#compare" class="btn-ghost-dark">Compare plans</a>
        </div>
      </div>
    </section>

    <!-- Plans -->
    <section class="relative -mt-16 pb-20">
      <div class="container-site">
        <div class="grid gap-5 lg:grid-cols-3">
          <div v-for="p in plans" :key="p.name" class="card relative flex flex-col p-7" :class="p.popular ? 'border-brand-600 ring-1 ring-brand-600 shadow-lift' : 'shadow-lift'">
            <span v-if="p.popular" class="absolute -top-3 left-7 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
            <span class="icon-tile"><i :class="p.icon" aria-hidden="true"></i></span>
            <h2 class="mt-5 text-2xl font-bold">{{ p.name }}</h2>
            <p class="mt-1 text-sm text-ink-600">{{ p.for }}</p>
            <p class="mt-5 border-y border-ink-100 py-4 text-sm font-semibold text-ink-900">Per-user pricing · <span class="font-normal text-ink-600">tailored quote</span></p>
            <ul class="mt-5 flex-1 space-y-3 text-sm">
              <li v-for="f in p.features" :key="f" class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-brand-600" aria-hidden="true"></i>{{ f }}</li>
            </ul>
            <NuxtLink to="/contact" class="mt-8" :class="p.popular ? 'btn-primary' : 'btn-secondary'">Get a tailored quote</NuxtLink>
          </div>
        </div>
        <p class="mt-8 text-center text-sm text-ink-600">Pricing is shared on request — email <a href="mailto:admin@newhamtech.com" class="font-semibold text-brand-700 hover:text-brand-900">admin@newhamtech.com</a> or <NuxtLink to="/contact" class="font-semibold text-brand-700 hover:text-brand-900">book a demo</NuxtLink>.</p>
      </div>
    </section>

    <!-- Included in every plan -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="In every plan" title="What every CCorex plan includes" lead="Whichever plan you choose, your apps run on the same secure platform." />
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="f in included" :key="f.title" class="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-card">
            <span class="icon-tile h-10 w-10 shrink-0" :class="f.ai ? 'bg-ai-50 text-ai-700' : ''"><i :class="f.icon" aria-hidden="true"></i></span>
            <div><p class="font-semibold text-ink-900">{{ f.title }}</p><p class="mt-1 text-sm text-ink-600">{{ f.text }}</p></div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Comparison -->
    <section id="compare" class="section scroll-mt-20">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Compare" title="Suite plans side by side" />
        <div class="mt-12 overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-card">
          <table class="w-full min-w-[720px] text-sm">
            <caption class="sr-only">Comparison of Essentials, Business and Enterprise plans</caption>
            <thead>
              <tr class="border-b border-ink-100 bg-ink-50">
                <th scope="col" class="w-[40%] px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-ink-500">Feature</th>
                <th v-for="p in plans" :key="p.name" scope="col" class="px-4 py-4 text-center font-display text-base font-bold text-ink-900">{{ p.name }}</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="g in comparison" :key="g.group">
                <tr class="bg-white"><th colspan="4" scope="colgroup" class="px-5 pb-2 pt-6 text-left text-xs font-semibold uppercase tracking-wider text-brand-700">{{ g.group }}</th></tr>
                <tr v-for="r in g.rows" :key="r.label" class="border-t border-ink-100">
                  <th scope="row" class="px-5 py-3.5 text-left font-medium text-ink-800">{{ r.label }}</th>
                  <td v-for="(v, i) in r.values" :key="i" class="px-4 py-3.5 text-center">
                    <template v-if="v === true"><i class="fa-solid fa-circle-check text-brand-600" aria-hidden="true"></i><span class="sr-only">Included</span></template>
                    <template v-else-if="v === false"><span class="text-ink-300" aria-hidden="true">–</span><span class="sr-only">Not included</span></template>
                    <span v-else class="text-ink-700">{{ v }}</span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <p class="mt-4 text-center text-xs text-ink-500">Exact user limits and modules are confirmed in your quote.</p>
      </div>
    </section>

    <!-- Per-app tiers -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Buying a single app?" title="Per-app tiers" lead="Each flagship app is also available in Starter, Growth and Enterprise tiers, priced per user (per employee for DeepHR)." />
        <div class="mt-12 grid gap-5 lg:grid-cols-3">
          <div v-for="a in appTiers" :key="a.name" class="card flex flex-col">
            <div class="flex items-center gap-3">
              <span class="icon-tile" :class="a.color"><i :class="a.icon" aria-hidden="true"></i></span>
              <div>
                <h3 class="text-lg font-bold">{{ a.name }}</h3>
                <p class="text-xs text-ink-500">{{ a.tagline }}</p>
              </div>
            </div>
            <div class="mt-5 flex-1 space-y-4">
              <div v-for="t in a.tiers" :key="t.name" class="rounded-xl border border-ink-100 p-4" :class="t.popular ? 'border-brand-200 bg-brand-50/50' : ''">
                <p class="flex items-center justify-between gap-2 text-sm font-semibold text-ink-900">{{ t.name }}<span class="text-xs font-normal text-ink-500">{{ t.for }}</span></p>
                <ul class="mt-2 space-y-1 text-sm text-ink-600">
                  <li v-for="f in t.features" :key="f" class="flex gap-2"><i class="fa-solid fa-check mt-1 text-[10px] text-brand-600" aria-hidden="true"></i>{{ f }}</li>
                </ul>
              </div>
            </div>
            <NuxtLink :to="`/products/${a.slug}`" class="mt-6 text-sm font-semibold text-brand-700 hover:text-brand-900">Explore {{ a.name }} <i class="fa-solid fa-arrow-right ml-1 text-xs" aria-hidden="true"></i></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- How quoting works -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="How quoting works" title="A quote that matches how you work" />
        <div class="mt-10"><UiStepFlow :steps="quoteSteps" /></div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="Pricing FAQ" title="Questions about plans" lead="Anything else? Email admin@newhamtech.com." />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand title="Get a quote for your team" lead="Tell us which apps you need and roughly how many users. We will come back with a plan and a tailored per-user quote." primary-label="Get a tailored quote" secondary-label="See the platform" secondary-to="/platform" />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Pricing & plans',
  description: 'CCorex plans: Essentials, Business and Enterprise. Per-user pricing for estimating, project delivery and HR & payroll apps — get a tailored quote.',
  ogTitle: 'CCorex pricing — Essentials, Business and Enterprise plans',
  ogDescription: 'Flexible per-user pricing for DeepCost, DeepTrack and DeepHR. Bundle the apps that fit your business and get a tailored quote.'
})
useHead({ link: [{ rel: 'canonical', href: config.public.siteUrl + '/pricing' }] })

const plans = [
  { name: 'Essentials', icon: 'fa-solid fa-seedling', for: 'Start with one workflow', features: ['Choose 1 flagship app', 'Core modules & dashboard', 'ARIVU AI assistant', 'SSO & user management', 'Deep Drive & PDF Editor (coming soon)'] },
  { name: 'Business', icon: 'fa-solid fa-building', for: 'Run the business end to end', popular: true, features: ['DeepCost + DeepTrack + DeepHR', 'Shared user base & roles', 'ARIVU across all apps', 'Singapore & India payroll', 'Higher user limits'] },
  { name: 'Enterprise', icon: 'fa-solid fa-city', for: 'Multiple organisations & scale', features: ['Full suite incl. DeepPlan AI', 'Multi-organisation management', 'Advanced roles & audit', 'Priority CRM-integration access', 'Priority support & onboarding'] }
]
const included = [
  { icon: 'fa-solid fa-key', title: 'Single sign-on', text: 'One CCorex login across every app you subscribe to.' },
  { icon: 'fa-solid fa-users-gear', title: 'User & role management', text: 'One shared user base with centrally managed roles.' },
  { icon: 'fa-solid fa-wand-magic-sparkles', title: 'ARIVU AI assistant', text: 'Answers, charts and exports from your own data, in every app you subscribe to.', ai: true },
  { icon: 'fa-solid fa-bolt', title: 'Automatic provisioning', text: 'Subscribe and your apps are activated automatically.' },
  { icon: 'fa-solid fa-user-shield', title: 'Encryption & access control', text: 'Personal and configuration fields encrypted, roles per app, and audit logs for finance, HR changes and period unlocks.' },
  { icon: 'fa-solid fa-folder-open', title: 'Deep Drive & PDF Editor', text: 'Included with every active subscription when they launch. Coming soon.' },
  { icon: 'fa-solid fa-cloud', title: 'Cloud-based', text: 'No servers to run and no hardware to buy.' }
]
const comparison = [
  {
    group: 'Apps',
    rows: [
      { label: 'Flagship apps', values: ['1 of DeepCost, DeepTrack or DeepHR', 'DeepCost + DeepTrack + DeepHR', 'Full suite'] },
      { label: 'DeepPlan AI', values: [false, false, true] },
      { label: 'Deep Drive & PDF Editor (coming soon)', values: [true, true, true] },
      { label: 'Core modules & dashboard', values: [true, true, true] }
    ]
  },
  {
    group: 'Platform',
    rows: [
      { label: 'SSO & user management', values: [true, true, true] },
      { label: 'Shared user base & roles across apps', values: ['Single app', true, true] },
      { label: 'Multi-organisation management', values: [false, false, true] },
      { label: 'Advanced roles & audit', values: [false, false, true] },
      { label: 'User limits', values: ['Standard', 'Higher', 'Tailored'] }
    ]
  },
  {
    group: 'AI & HR',
    rows: [
      { label: 'ARIVU AI assistant', values: ['In your app', 'Across all apps', 'Across all apps'] },
      { label: 'Face-recognition attendance', values: ['With DeepHR', true, true] },
      { label: 'Singapore & India payroll', values: ['With DeepHR', true, true] }
    ]
  },
  {
    group: 'Support',
    rows: [
      { label: 'Onboarding & support', values: ['Standard', 'Standard', 'Priority'] },
      { label: 'Priority CRM-integration access (roadmap)', values: [false, false, true] },
      { label: 'Priority support', values: [false, false, true] }
    ]
  }
]
const appTiers = [
  {
    name: 'DeepCost', slug: 'deepcost', tagline: 'MEP estimation', icon: 'fa-solid fa-calculator', color: 'bg-sky-50 text-sky-700',
    tiers: [
      { name: 'Starter', for: 'Small estimating teams', features: ['Opportunities, area schedules & MTO', 'Price library & area, component and FOT reviews'] },
      { name: 'Growth', for: 'Growing contractors', popular: true, features: ['Checklist approvals at every stage', 'Order revisions, validation & price history'] },
      { name: 'Enterprise', for: 'Multi-team estimating', features: ['Custom roles, per-trade assignment & master-data upload', 'Email notifications & priority support'] }
    ]
  },
  {
    name: 'DeepTrack', slug: 'deeptrack', tagline: 'Project delivery & cost control', icon: 'fa-solid fa-diagram-project', color: 'bg-amber-50 text-amber-700',
    tiers: [
      { name: 'Starter', for: 'Single projects', features: ['Projects, customer POs & contract value', 'Budgets, variance & standard approvals'] },
      { name: 'Growth', for: 'Scaling project businesses', popular: true, features: ['Procurement (PR → PO → invoice), client claims', 'Manpower, timesheets & scheduled reports'] },
      { name: 'Enterprise', for: 'Multi-entity contractors', features: ['Month-end cost allocation & Zoho Books link', 'Screen-by-role matrix, budget templates & audit log'] }
    ]
  },
  {
    name: 'DeepHR', slug: 'deephr', tagline: 'HR & payroll (Singapore, India)', icon: 'fa-solid fa-user-group', color: 'bg-emerald-50 text-emerald-700',
    tiers: [
      { name: 'Starter', for: 'Small teams', features: ['Self-service, leave & holidays', 'Face + GPS attendance, documents'] },
      { name: 'Growth', for: 'Scaling companies', popular: true, features: ['Claims, timesheets & payroll', 'Multi-level approvals & analytics'] },
      { name: 'Enterprise', for: 'Multi-site organisations', features: ['Statutory filings, scheduled reports & tasks', 'Custom approval chains & priority support'] }
    ]
  }
]
const quoteSteps = [
  { title: 'Tell us your scope', text: 'Which apps, how many users or employees, and how many organisations.' },
  { title: 'See it live', text: 'A 30-minute demo on your own estimating, project or payroll workflow.' },
  { title: 'Get your quote', text: 'A plan and per-user quote that fits your team — bundle apps as needed.' },
  { title: 'Onboard', text: 'We configure your organisation, import your data and train your team.' }
]
const faqs = [
  { q: 'Why don’t you publish prices?', a: 'CCorex is priced per user (per employee for DeepHR) and depends on the apps and plan you choose. We give every customer a tailored quote rather than a one-size price list.' },
  { q: 'Can we start with one app and add more later?', a: 'Yes. Essentials starts with one flagship app — DeepCost, DeepTrack or DeepHR. You can move to Business or Enterprise as you add apps, and every app shares the same sign-in and users.' },
  { q: 'Is ARIVU AI an extra cost?', a: 'No. The ARIVU AI assistant is included in every suite plan, with usage budgets per organisation. On Business and Enterprise it answers across all your apps.' },
  { q: 'Are Deep Drive and PDF Editor included?', a: 'Yes. Deep Drive (document storage) and PDF Editor (mark-up and signing) are included with every active subscription. Both are in development and coming soon.' },
  { q: 'What is the difference between Business and Enterprise?', a: 'Business bundles DeepCost, DeepTrack and DeepHR with a shared user base. Enterprise adds DeepPlan AI, multi-organisation management, advanced roles and audit, priority access to CRM integrations as they arrive, and priority support and onboarding.' },
  { q: 'How do we get pricing?', a: 'Pricing is shared on request. Email admin@newhamtech.com with the apps and number of users you need, or book a demo and we will prepare a quote.' },
  { q: 'Do we need to buy hardware for attendance?', a: 'No. Face-recognition attendance runs on each employee\'s own phone, with a face match and a GPS check against the site radius. There is no kiosk or shared device to buy.' }
]
</script>
