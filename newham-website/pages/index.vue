<template>
  <div>
    <HomeHero />

    <!-- Who we work with -->
    <section class="border-b border-ink-100 bg-white" aria-label="Who we work with">
      <div class="container-site flex flex-col gap-4 py-8 lg:flex-row lg:items-center lg:justify-between">
        <p class="text-sm font-semibold text-ink-900">We work with</p>
        <ul class="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-600">
          <li v-for="s in segments" :key="s.label" class="flex items-center gap-2"><i :class="s.icon" class="text-brand-600" aria-hidden="true"></i>{{ s.label }}</li>
        </ul>
      </div>
    </section>

    <!-- Three pillars -->
    <section id="what-we-do" class="section scroll-mt-16">
      <div class="container-site">
        <UiSectionHeader center eyebrow="What we do" title="Three ways to get construction work done" lead="Use our software, add dedicated engineers to your team, or hand us a scoped piece of engineering work. Most clients combine two or three." />
        <div class="mt-12"><HomePillars /></div>
      </div>
    </section>

    <!-- Software + specialists -->
    <HomeWorkModes />

    <!-- CCorex suite -->
    <UiAppParallax
      eyebrow="CCorex software"
      title="One suite from tender to payroll"
      lead="CCorex is our own product, built for construction. Every app shares the same sign-in, users and roles — and our engineers work in it every day."
      :bullets="['One portal at dash.ccorex.com', 'Users and roles managed once', 'ARIVU AI inside every app']"
      :cta="{ label: 'Visit ccorex.com', to: CCOREX_URL }"
      :link-for="ccorexLink"
    />

    <!-- AI -->
    <section id="ai" class="section relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>
      <div class="container-site relative">
        <UiSectionHeader dark center eyebrow="AI in CCorex" lead="CCorex uses AI where estimators and managers lose the most time: reading tender documents, pricing the client's BOQ and finding answers across the business. Let ARIVU show you.">
          <template #title>AI for the paperwork <span class="text-ai-gradient">behind every tender</span></template>
        </UiSectionHeader>
        <div class="mt-12"><HomeArivuMovie /></div>
        <div class="mt-10 flex flex-wrap justify-center gap-3">
          <a :href="ccorexAppUrl('deepcost')" target="_blank" rel="noopener" class="btn-accent">DeepCost on ccorex.com <i class="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i></a>
          <a :href="ccorexAppUrl('arivu-ai')" target="_blank" rel="noopener" class="btn-ghost-dark">ARIVU AI on ccorex.com</a>
        </div>
      </div>
    </section>

    <!-- Talent roles -->
    <section class="section">
      <div class="container-site">
        <div class="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <UiSectionHeader eyebrow="Engineering talent outsourcing" title="The roles M&E contractors struggle to hire" lead="Dedicated professionals trained in Singapore M&E standards. They work only on your projects, learn your templates and report to your team." />
            <ul class="mt-8 space-y-3">
              <li v-for="e in engagements" :key="e.title" class="flex gap-3">
                <i class="fa-solid fa-circle-check mt-1 text-brand-600" aria-hidden="true"></i>
                <p class="text-sm text-ink-700"><span class="font-semibold text-ink-900">{{ e.title }}.</span> {{ e.text }}</p>
              </li>
            </ul>
            <NuxtLink to="/talent-outsourcing" class="btn-primary mt-8">Talent outsourcing <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <UiFeatureCard v-for="r in roles" :key="r.title" :icon="r.icon" :title="r.title" :text="r.text" />
          </div>
        </div>
      </div>
    </section>

    <!-- Engineering services -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Construction engineering services" title="Fire protection design and commercial support, as a service" lead="Scoped deliverables from a domain-trained team. Engage one stream or both, and scale up for project peaks." />
        <div class="mt-12 grid gap-6 lg:grid-cols-2">
          <div v-for="s in streams" :key="s.title" class="card p-7">
            <div class="flex items-center gap-3">
              <span class="icon-tile" :class="s.tone"><i :class="s.icon" aria-hidden="true"></i></span>
              <h3 class="text-xl font-bold">{{ s.title }}</h3>
            </div>
            <p class="mt-3 text-sm leading-relaxed text-ink-600">{{ s.text }}</p>
            <ul class="mt-5 grid gap-x-6 gap-y-2.5 text-sm sm:grid-cols-2">
              <li v-for="i in s.items" :key="i" class="flex gap-2.5 text-ink-700"><i class="fa-solid fa-check mt-1 text-brand-600" aria-hidden="true"></i>{{ i }}</li>
            </ul>
          </div>
        </div>
        <p class="mt-8 text-center"><NuxtLink to="/engineering-services" class="font-semibold text-brand-700 hover:text-brand-900">Explore engineering services <i class="fa-solid fa-arrow-right ml-1 text-xs" aria-hidden="true"></i></NuxtLink></p>
      </div>
    </section>

    <!-- How we work -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How we work" title="From first call to steady delivery" lead="The same process whether you need one drafter, a fire protection package or the CCorex suite." />
        <div class="mt-12"><UiStepFlow :steps="steps" /></div>
      </div>
    </section>

    <!-- Singapore standards -->
    <section class="border-y border-ink-100 bg-ink-50" aria-labelledby="standards-title">
      <div class="container-site grid gap-8 py-12 lg:grid-cols-[1fr_2.4fr] lg:items-center">
        <div>
          <p class="eyebrow">Singapore focus</p>
          <h2 id="standards-title" class="mt-2 text-2xl font-bold">Working to local codes and rules</h2>
        </div>
        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="s in standards" :key="s.title" class="rounded-xl border border-ink-100 bg-white p-4">
            <p class="font-display text-base font-bold text-brand-800">{{ s.title }}</p>
            <p class="mt-1 text-xs leading-relaxed text-ink-600">{{ s.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Industries -->
    <section class="section">
      <div class="container-site">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <UiSectionHeader eyebrow="Industries" title="Sectors we support" lead="Our engineers and software are built around the M&amp;E packages of building and infrastructure projects." />
          <NuxtLink to="/industries" class="btn-secondary shrink-0">All industries</NuxtLink>
        </div>
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="ind in industries" :key="ind.title">
            <NuxtLink :to="ind.to" class="card-hover group flex h-full items-start gap-4">
              <span class="icon-tile shrink-0"><i :class="ind.icon" aria-hidden="true"></i></span>
              <span>
                <span class="block font-semibold text-ink-900 group-hover:text-brand-700">{{ ind.title }}</span>
                <span class="mt-1 block text-sm leading-relaxed text-ink-600">{{ ind.text }}</span>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Latest guides -->
    <HomeLatestGuides />

    <!-- FAQ -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 py-6 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="Questions we are often asked" lead="Anything else? Ask us on a discovery call." />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand />
  </div>
</template>

<script setup lang="ts">
import { ccorexAppUrl, CCOREX_URL } from '~/data/ccorex'

// Apps with a page on this site link here; the rest go to ccorex.com.
const localApps = ['deepcost', 'deeptrack', 'deephr', 'deepplan-ai']
const ccorexLink = (app: string) => (localApps.includes(app) ? `/ccorex/${app}` : `${CCOREX_URL}/products/${app}`)

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl as string

useSeoMeta({
  title: 'Construction software & M&E engineers in Singapore',
  description: 'Newham builds CCorex construction software and provides Singapore-code-trained M&E engineers: BIM, estimation, QS and fire protection design for contractors.',
  ogTitle: 'Newham — software and specialist engineers for Singapore construction',
  ogDescription: 'CCorex construction software, dedicated M&E engineers and fire protection & commercial engineering services for Singapore contractors.',
  ogUrl: siteUrl + '/'
})
useHead({
  link: [{ rel: 'canonical', href: siteUrl + '/' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [{
      '@type': 'WebSite',
      '@id': siteUrl + '/#website',
      name: 'Newham Tech',
      alternateName: ['Newham Technological Solutions', 'newhamtech.com'],
      url: siteUrl + '/',
      publisher: { '@id': siteUrl + '/#organization' }
    }, {
      '@type': 'Organization',
      '@id': siteUrl + '/#organization',
      name: 'Newham Technological Solutions',
      alternateName: 'Newham',
      url: siteUrl,
      logo: siteUrl + '/newham-logo.png',
      email: 'admin@newhamtech.com',
      description: 'Construction software (CCorex), engineering talent outsourcing and construction engineering services for the Singapore construction industry.',
      areaServed: [{ '@type': 'Country', name: 'Singapore' }, { '@type': 'Country', name: 'India' }],
      address: { '@type': 'PostalAddress', streetAddress: '160 Robinson Road, #14-04 SBF Center', addressLocality: 'Singapore', addressCountry: 'SG' },
      brand: { '@type': 'Brand', name: 'CCorex', url: CCOREX_URL },
      knowsAbout: ['MEP estimation', 'BIM modelling', 'Quantity surveying', 'Fire protection design', 'SS CP 52', 'Construction software']
    }]
    })
  }]
})

const segments = [
  { icon: 'fa-solid fa-bolt', label: 'M&E contractors' },
  { icon: 'fa-solid fa-helmet-safety', label: 'Main contractors' },
  { icon: 'fa-solid fa-compass-drafting', label: 'Engineering consultants' },
  { icon: 'fa-solid fa-ruler-combined', label: 'QS & estimating teams' },
  { icon: 'fa-solid fa-industry', label: 'EPC companies' }
]




const roles = [
  { icon: 'fa-solid fa-cubes', title: 'BIM modellers & drafters', text: 'Revit MEP, AutoCAD and Navisworks. Shop drawings, coordination models and as-built documentation to Singapore submission standards.' },
  { icon: 'fa-solid fa-calculator', title: 'Estimators & quantity surveyors', text: 'Material take-offs, BOQ preparation, cost estimates and variation pricing for M&E trades.' },
  { icon: 'fa-solid fa-file-signature', title: 'Tender & commercial coordinators', text: 'Tender compilation, compliance checklists, subcontractor comparisons and commercial correspondence.' },
  { icon: 'fa-solid fa-fire-extinguisher', title: 'Fire protection engineers', text: 'Sprinkler and fire alarm layouts, gas suppression specifications and SCDF submission documents.' }
]

const engagements = [
  { title: 'Single specialist', text: 'One dedicated professional for a specific function.' },
  { title: 'Project team', text: 'A blended team, such as an estimator and two drafters, for a defined scope.' },
  { title: 'Managed capacity', text: 'Flexible capacity, adjusted month to month as projects start and close.' }
]

const streams = [
  {
    title: 'Fire protection design & calculations', icon: 'fa-solid fa-fire-flame-curved', tone: 'bg-rose-50 text-rose-700',
    text: 'Designs and calculations to Singapore codes, formatted for authority submission.',
    items: ['Sprinkler system design', 'Hydraulic calculations', 'Fire pump design & selection', 'Fire alarm system design', 'Gas suppression design', 'Wet & dry riser design', 'Hose reel system design', 'Submission drawing packages']
  },
  {
    title: 'Commercial & tender support', icon: 'fa-solid fa-file-invoice-dollar', tone: 'bg-brand-50 text-brand-700',
    text: 'Commercial functions for M&E contractors, from first tender to final account.',
    items: ['Estimation & BOQ preparation', 'Tender queries & addenda', 'Document control & submissions', 'Project QS & variations', 'Progress claims & valuations', 'Cost tracking, budget vs actual']
  }
]

const steps = [
  { title: 'Discovery call', text: 'A 30-minute call about your pipeline, systems and team.' },
  { title: 'Scope & proposal', text: 'Deliverables, team, timelines and pricing confirmed in writing.' },
  { title: 'Onboarding', text: 'We learn your standards, templates, naming and tools.' },
  { title: 'Delivery', text: 'Dedicated people working your hours, with review cycles built in.' },
  { title: 'Review & scale', text: 'Regular reviews to adjust capacity up or down.' }
]

const standards = [
  { title: 'SS CP 52', text: 'Sprinkler design and hydraulic calculations under the SCDF Fire Code, with NFPA 13 where the project specification calls for it.' },
  { title: 'SCDF', text: 'Fire safety submission drawings and documentation.' },
  { title: 'BCA', text: 'Engineers familiar with local building and submission requirements.' },
  { title: 'CPF & MOM', text: 'DeepHR payroll covers CPF, SDL and self-help group funds, with MOM proration rules.' }
]

const industries = [
  { title: 'Commercial buildings', text: 'Offices, retail and mixed-use M&E packages.', icon: 'fa-solid fa-building', to: '/industries/commercial-construction' },
  { title: 'Residential', text: 'Condominium and housing developments.', icon: 'fa-solid fa-house', to: '/industries/residential-development' },
  { title: 'Industrial facilities', text: 'Factories, warehouses and process plants.', icon: 'fa-solid fa-industry', to: '/industries/industrial-facilities' },
  { title: 'Healthcare', text: 'Hospitals and clinics with demanding services.', icon: 'fa-solid fa-hospital', to: '/industries/healthcare-facilities' },
  { title: 'Infrastructure', text: 'Transport and public works with M&E scope.', icon: 'fa-solid fa-road', to: '/industries/infrastructure' },
  { title: 'Data centres', text: 'Fire protection, ACMV and electrical-heavy builds.', icon: 'fa-solid fa-server', to: '/industries/data-centres' }
]

const faqs = [
  { q: 'Is Newham a staffing agency?', a: 'No. Newham is a specialist engineering partner for construction. Our professionals are trained in Singapore M&E codes and workflows before they work on your projects, and we manage them for quality while you direct the work.' },
  { q: 'How is CCorex related to Newham?', a: 'CCorex is Newham’s own construction software suite — DeepCost, DeepTrack, DeepHR, DeepPlan and the ARIVU AI assistant. Product details and demos are on ccorex.com, and existing users sign in at dash.ccorex.com.' },
  { q: 'Can we use your engineers without buying CCorex?', a: 'Yes. Our engineers work in the tools you already use, such as Revit MEP, AutoCAD and Navisworks. CCorex is available if you want it, but it is not required.' },
  { q: 'Which standards do your fire protection designs follow?', a: 'Sprinkler design and hydraulic calculations are prepared to SS CP 52 as the SCDF Fire Code requires, with NFPA 13 only where the project specification calls for it, and drawings are formatted for SCDF submission. Where a submission needs Professional Engineer endorsement, we discuss how that will be handled when we scope the work.' },
  { q: 'How do engagements start?', a: 'With a 30-minute discovery call. We then confirm scope, team and pricing in writing, onboard to your standards and start delivery.' }
]
</script>
