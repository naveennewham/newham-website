<template>
  <div>
    <HomeHero />

    <!-- Who it's for -->
    <section class="border-b border-ink-100 bg-white" aria-label="Who CCorex is for">
      <div class="container-site flex flex-col gap-4 py-8 lg:flex-row lg:items-center lg:justify-between">
        <p class="text-sm font-semibold text-ink-900">Purpose-built for</p>
        <ul class="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-600">
          <li v-for="s in segments" :key="s.label" class="flex items-center gap-2"><i :class="s.icon" class="text-brand-600" aria-hidden="true"></i>{{ s.label }}</li>
        </ul>
      </div>
    </section>

    <!-- Capability marquee -->
    <section class="border-b border-ink-100 bg-ink-50 py-6" aria-label="What CCorex covers">
      <UiMarquee :items="capabilities" label="CCorex capabilities" />
    </section>

    <!-- Problem -->
    <section class="section render-later">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="The problem" title="Construction runs on scattered tools." lead="Estimates in spreadsheets, budgets in another file, procurement over email, attendance on paper. Off-the-shelf suites weren't built for construction — so the margin leaks out in the gaps." />
          <p class="mt-6 inline-flex items-center gap-3 rounded-xl bg-rose-50 px-4 py-3 font-display text-lg font-bold text-rose-700">5 tools · 5 logins · 0 connection</p>
        </div>
        <UiReveal class="grid gap-4 sm:grid-cols-2">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </UiReveal>
      </div>
    </section>

    <UiAppParallax class="render-later" />

    <HomeAppSuite class="render-later" />


    <HomeBento class="render-later" />

    <!-- Win, deliver, staff -->
    <section class="section render-later">
      <div class="container-site">
        <UiSectionHeader eyebrow="How it fits together" title="Win it in DeepCost. Deliver it in DeepTrack. Staff it with DeepHR." lead="A tender arrives in DeepCost, drawings are measured in DeepPlan and the priced bid goes out from DeepCost. A won job runs in DeepTrack, and the people on it are managed and paid in DeepHR." />
        <UiReveal class="mt-10 rounded-3xl border border-ink-100 bg-ink-50 p-5 sm:p-8">
          <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="eyebrow">Business flow across apps</p>
              <h3 class="mt-2 text-xl font-bold">One job, from tender to month-end costing</h3>
            </div>
            <p class="max-w-md text-sm text-ink-600">Each app keeps its own records under one sign-in and one user base. Passing records automatically from one app to the next is on the roadmap.</p>
          </div>
          <div class="mt-6"><UiFlowPipeline :steps="businessFlow" :interval="2000" /></div>
          <p class="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-ai-100 bg-white px-4 py-3 text-sm text-ink-700">
            <span class="chip-ai"><i class="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>ARIVU</span>
            Across every step, ARIVU answers questions from your data in each app — read-only.
          </p>
        </UiReveal>
        <div class="mt-10 grid gap-5 lg:grid-cols-3">
          <UiReveal v-for="f in flow" :key="f.app" class="flex flex-col rounded-3xl border border-ink-100 bg-white p-6 shadow-card">
            <div class="flex items-center gap-3">
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" :class="f.tone"><i :class="f.icon" aria-hidden="true"></i></span>
              <p class="eyebrow">{{ f.step }}</p>
            </div>
            <h3 class="mt-4 text-xl font-bold">{{ f.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ f.text }}</p>
            <ul class="mt-5 space-y-2.5">
              <li v-for="b in f.bullets" :key="b" class="flex gap-2.5 text-sm text-ink-700"><i class="fa-solid fa-circle-check mt-0.5 text-brand-600" aria-hidden="true"></i>{{ b }}</li>
            </ul>
            <NuxtLink :to="`/products/${f.slug}`" class="mt-auto inline-flex pt-6 text-sm font-semibold text-brand-700 hover:text-brand-900">Explore {{ f.app }} <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></NuxtLink>
          </UiReveal>
        </div>
      </div>
    </section>

    <!-- AI -->
    <section class="render-later relative overflow-hidden bg-[#03191f] py-24 text-white">
      <FxAurora palette="ai" />
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>
      <div class="container-site relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <UiSectionHeader dark eyebrow="AI built in, not bolted on" lead="ARIVU — Tamil for “intelligence” — sits in every CCorex app. Your team asks in plain language and gets answers from your own organisation’s data across DeepCost, DeepTrack, DeepHR, DeepPlan and Deep Drive. It reads; it never changes your data.">
            <template #title>Meet <span class="text-ai-gradient">ARIVU</span>, your AI assistant in every app</template>
          </UiSectionHeader>
          <ul class="mt-8 grid gap-4 sm:grid-cols-2">
            <li v-for="a in aiPoints" :key="a.title" class="rounded-2xl border border-white/10 bg-white/5 p-5">
              <i :class="a.icon" class="text-cyan-400" aria-hidden="true"></i>
              <p class="mt-3 font-semibold text-white">{{ a.title }}</p>
              <p class="mt-1 text-sm leading-relaxed text-ink-300">{{ a.text }}</p>
            </li>
          </ul>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/products/arivu-ai" class="btn-accent">Explore ARIVU AI</NuxtLink>
            <NuxtLink to="/products/deepcost" class="btn-ghost-dark">AI in DeepCost</NuxtLink>
          </div>
        </div>
        <UiReveal><UiArivuChat /></UiReveal>
      </div>
    </section>

    <!-- Platform -->
    <section class="section render-later">
      <div class="container-site">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <UiSectionHeader eyebrow="The platform underneath" title="One portal, one sign-in, every app" lead="Your organisation admin manages users, roles and app settings once, in the portal at dash.ccorex.com. Add a user once and they are created in each assigned app; disable them once and they are disabled in the apps too." />
          <NuxtLink to="/platform" class="btn-secondary shrink-0">How the platform works <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
        </div>
        <UiReveal class="mt-12"><DemoPortalDashboard /></UiReveal>
        <ul class="mt-12 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="c in platform" :key="c.title" class="flex gap-3">
            <span class="icon-tile h-9 w-9 shrink-0 text-sm"><i :class="c.icon" aria-hidden="true"></i></span>
            <div><p class="font-semibold text-ink-900">{{ c.title }}</p><p class="text-sm text-ink-600">{{ c.text }}</p></div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Why -->
    <section class="section render-later bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Why CCorex" title="Six reasons construction teams switch" />
        <ol class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UiReveal v-for="(r, i) in reasons" :key="r.title" as="li" class="card" :delay="(i % 3) * 80">
            <p class="font-display text-sm font-bold text-brand-600">{{ String(i + 1).padStart(2, '0') }}</p>
            <h3 class="mt-3 text-lg font-semibold">{{ r.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ r.text }}</p>
          </UiReveal>
        </ol>
      </div>
    </section>

    <UiTrustStrip class="render-later" />

    <!-- Plans -->
    <section class="section render-later">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Plans" title="Start with one workflow. Scale to the whole business." lead="Per-user pricing — bundle the apps that fit your business." />
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

    <HomeGetStarted class="render-later" />

    <!-- Latest guides -->
    <HomeLatestGuides class="render-later" />

    <!-- FAQ -->
    <section class="section-tight render-later">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="Questions buyers ask us" lead="Can't find your answer? Email admin@newhamtech.com." />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand class="render-later" />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Construction & BOQ software for Singapore contractors',
  description: 'CCorex unifies MEP tender estimation (DeepCost), project cost control (DeepTrack) and HR & payroll (DeepHR) on one sign-in, with ARIVU AI in every app.',
  ogTitle: 'CCorex — run your construction business on one AI-powered platform',
  ogDescription: 'MEP estimation, project delivery and HR & payroll on one login, with ARIVU AI in every app.'
})
useHead({
  link: [{ rel: 'canonical', href: config.public.siteUrl + '/' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebSite', '@id': 'https://ccorex.com/#website', name: 'CCorex', alternateName: ['CCorex construction software', 'ccorex.com'], url: 'https://ccorex.com/', publisher: { '@id': 'https://ccorex.com/#organization' } },
        { '@type': 'Organization', '@id': 'https://ccorex.com/#organization', name: 'CCorex', url: 'https://ccorex.com', logo: 'https://ccorex.com/ccorex-logo.png', email: 'admin@newhamtech.com', telephone: '+65 9880 4197', address: { '@type': 'PostalAddress', streetAddress: '101 Kitchener Road, #03-14, Jalan Besar Plaza', addressLocality: 'Singapore', postalCode: '208511', addressCountry: 'SG' }, parentOrganization: { '@type': 'Organization', name: 'Newham Technological Solutions', url: 'https://newhamtech.com' } },
        { '@type': 'SoftwareApplication', name: 'CCorex', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', description: 'Construction management platform for MEP estimation, project delivery and HR & payroll, with an AI assistant in every app.', offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' } }
      ]
    })
  }]
})

const capabilities = [
  { icon: 'fa-solid fa-file-lines', text: 'AI tender summary' }, { icon: 'fa-solid fa-table', text: 'FOT AI on the client’s BOQ' },
  { icon: 'fa-solid fa-ruler-combined', text: 'Area schedules & MTO' }, { icon: 'fa-solid fa-tags', text: 'Price library & validation rules' },
  { icon: 'fa-solid fa-compass-drafting', text: 'Drawing take-off' }, { icon: 'fa-solid fa-wallet', text: 'Budgets & purchase approvals' },
  { icon: 'fa-solid fa-file-invoice-dollar', text: 'Invoice matching' }, { icon: 'fa-solid fa-hand-holding-dollar', text: 'Client claims' },
  { icon: 'fa-solid fa-face-smile', text: 'Face + GPS attendance' }, { icon: 'fa-solid fa-money-check', text: 'CPF, SDL & SHG payroll' },
{ icon: 'fa-solid fa-wand-magic-sparkles', text: 'ARIVU charts & exports' },
  { icon: 'fa-solid fa-key', text: 'One sign-in for every app' }, { icon: 'fa-solid fa-user-shield', text: 'Roles per app' }
]
const segments = [
  { icon: 'fa-solid fa-bolt', label: 'MEP contractors' },
  { icon: 'fa-solid fa-helmet-safety', label: 'Main contractors' },
  { icon: 'fa-solid fa-industry', label: 'EPC companies' },
  { icon: 'fa-solid fa-file-signature', label: 'Tender-based businesses' },
  { icon: 'fa-solid fa-ruler-combined', label: 'QS & estimating teams' }
]
const problems = [
  { icon: 'fa-solid fa-table-cells', title: 'Spreadsheet chaos', text: 'Take-offs and budgets live in files that drift between versions and people.' },
  { icon: 'fa-solid fa-key', title: 'A login for everything', text: 'Separate tools for estimating, projects and HR — each with its own users.' },
  { icon: 'fa-solid fa-link-slash', title: 'Data stuck in silos', text: 'Tender figures re-typed into the client’s BOQ, invoices paid without a match, attendance re-keyed into payroll.' },
  { icon: 'fa-solid fa-puzzle-piece', title: 'Generic, not construction', text: 'Off-the-shelf suites ignore MTOs, Forms of Tender, progress claims, retention and site attendance.' }
]
const flow = [
  {
    step: '01 · Estimate', app: 'DeepCost', slug: 'deepcost', icon: 'fa-solid fa-calculator', tone: 'bg-sky-50 text-sky-700',
    title: 'Price every tender with confidence',
    text: 'From tender received to a priced Form of Tender: an AI summary of the tender documents, area-based material take-off, one priced library, and FOT AI that overlays your figures on the client’s BOQ PDF.',
    bullets: ['AI tender summary you can edit and export', 'Take off by building, floor and room — priced as quantity × (material + installation)', 'Area schedule, MTO and FOT each submitted, checked and approved']
  },
  {
    step: '02 · Deliver', app: 'DeepTrack', slug: 'deeptrack', icon: 'fa-solid fa-diagram-project', tone: 'bg-amber-50 text-amber-700',
    title: 'Protect margin on every project',
    text: 'Budgets, client claims, manpower and timesheets, procurement, accounts payable with invoice matching, and month-end cost allocation — in SGD with 9% GST.',
    bullets: ['Every purchase request raised against an approved budget and routed through your configured approvals', 'PR → PO → delivery → invoice, matched before payment', 'Progress claims with retention, GST and a PDF certificate']
  },
  {
    step: '03 · Staff & pay', app: 'DeepHR', slug: 'deephr', icon: 'fa-solid fa-user-group', tone: 'bg-emerald-50 text-emerald-700',
    title: 'Run Singapore payroll',
    text: 'Face and GPS attendance on each employee’s phone, reviewed by HR, flows with approved leave into payroll — with CPF, SDL and SHG worked out.',
    bullets: ['Face-recognition attendance with no hardware to buy, even offline', 'Singapore: CPF, SDL and SHG funds', 'Leave, claims, timesheets and one approvals engine']
  }
]
const businessFlow = [
  { title: 'Tender arrives', text: 'Opportunity and tender documents in DeepCost.', icon: 'fa-solid fa-inbox' },
  { title: 'Drawings measured', text: 'Quantities taken off in DeepPlan.', icon: 'fa-solid fa-compass-drafting' },
  { title: 'Priced bid out', text: 'MTO and Form of Tender priced and approved in DeepCost.', icon: 'fa-solid fa-file-signature' },
  { title: 'Won job → project', text: 'Budgets, purchasing and client claims in DeepTrack.', icon: 'fa-solid fa-diagram-project' },
  { title: 'Budget tracked', text: 'Budget against actual by workhead, WBS and cost centre in DeepTrack.', icon: 'fa-solid fa-chart-column' },
  { title: 'People managed & paid', text: 'Attendance, leave and payroll in DeepHR.', icon: 'fa-solid fa-user-group' },
  { title: 'Month-end costing', text: 'Labour and overhead allocated to projects and cost centres.', icon: 'fa-solid fa-calendar-check' }
]
const aiPoints = [
  { icon: 'fa-regular fa-comments', title: 'Ask in plain language', text: '“Which purchase requests are pending?” — answered from your data across your apps.' },
  { icon: 'fa-solid fa-chart-column', title: 'Charts & exports', text: 'Turn answers into charts, PDF or Excel.' },
  { icon: 'fa-solid fa-file-lines', title: 'AI tender summary & FOT AI', text: 'DeepCost reads tender documents and overlays your prices on the client’s BOQ PDF.' },
  { icon: 'fa-solid fa-magnifying-glass', title: 'Document search', text: 'Search and summarise tender documents and attachments, including scanned PDFs.' }
]
const platform = [
  { icon: 'fa-solid fa-key', title: 'Single sign-on', text: 'One sign-in, a tile for each app.' },
  { icon: 'fa-solid fa-users-gear', title: 'Users & roles', text: 'Add once or bulk-upload; roles per app.' },
  { icon: 'fa-solid fa-bolt', title: 'Provisioning', text: 'Users created in each assigned app.' },
  { icon: 'fa-solid fa-sitemap', title: 'Tenancy', text: 'Each organisation sees only its own data.' },
  { icon: 'fa-solid fa-user-shield', title: 'Encryption', text: 'Personal and config fields encrypted.' },
  { icon: 'fa-solid fa-clipboard-list', title: 'Audit logs', text: 'Finance actions, HR changes, period unlocks.' }
]
const reasons = [
  { title: 'Built for construction', text: 'Area schedules, MTOs, Forms of Tender, progress claims, retention, BCA workheads and site attendance — not a generic suite with construction bolted on.' },
  { title: 'Tender estimating with AI', text: 'DeepCost reads the tender, prices the take-off from one library and overlays your figures on the client’s BOQ — seeded for Fire Protection, ACMV, A&A and ELV.' },
  { title: 'One sign-in, all apps', text: 'One user base managed by your organisation admin, with roles per app.' },
  { title: 'AI in every app', text: 'ARIVU answers questions from your own data, charts results and searches your documents — read-only.' },
  { title: 'Face attendance, zero hardware', text: 'Face and GPS attendance on each employee’s own phone, with offline punches re-verified later.' },
  { title: 'Singapore payroll', text: 'CPF, SDL and SHG funds, MOM proration and overtime rules.' }
]
const plans = [
  { name: 'Essentials', for: 'Start with one workflow', features: ['Choose 1 flagship app', 'Core modules & dashboard', 'ARIVU AI assistant', 'SSO & user management', 'Deep Drive & PDF Editor'] },
  { name: 'Business', for: 'Run the business end to end', popular: true, features: ['DeepCost + DeepTrack + DeepHR', 'Shared user base & roles', 'ARIVU across all apps', 'Singapore payroll', 'Higher user limits'] },
  { name: 'Enterprise', for: 'Multiple companies & scale', features: ['Full suite incl. DeepPlan AI', 'Multi-organisation management', 'Advanced roles & audit', 'Priority integration access', 'Priority support & onboarding'] }
]
const faqs = [
  { q: 'Do we have to buy the whole suite?', a: 'No. Start with one flagship app — DeepCost, DeepTrack or DeepHR — and add apps as you grow. Every app shares the same sign-in and users.' },
  { q: 'Who is CCorex built for?', a: 'Engineering and construction contractors — mainly MEP and fire-protection firms in Singapore and India. DeepTrack works in SGD with 9% GST, and DeepHR runs Singapore payroll. The platform is delivered and supported by Newham in Singapore.' },
  { q: 'What does ARIVU AI do?', a: 'ARIVU is a read-only AI assistant in every CCorex app. It answers questions from your own organisation’s data across DeepCost, DeepTrack, DeepHR, DeepPlan and Deep Drive, produces charts and PDF or Excel exports, and searches and summarises documents. It never changes your data.' },
  { q: 'Is DeepPlan’s AI take-off live?', a: 'DeepPlan’s drawing upload, scale calibration, room measurement, rate library and BOQ generation are live. AI room take-off and symbol detection are in early access while they are rebuilt.' },
  { q: 'Do we need to install servers or buy hardware?', a: 'No. CCorex is cloud-based. Face-recognition attendance runs on each employee’s own phone, so there are no biometric devices or kiosks to buy.' },
  { q: 'How long does onboarding take?', a: 'It depends on the apps and data you bring. We plan onboarding with you in the demo — including importing your price library, customers and employees from Excel.' }
]
</script>
