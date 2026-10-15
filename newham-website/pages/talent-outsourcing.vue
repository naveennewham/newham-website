<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-12 pb-20 pt-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-20">
        <div>
          <p class="eyebrow-dark">Pillar 2 · Engineering talent outsourcing</p>
          <h1 class="h-display mt-4 text-white">M&amp;E engineers who already speak your language</h1>
          <p class="lead-dark mt-6 max-w-xl">Dedicated, domain-trained engineering professionals for Singapore M&amp;E contractors — not generic offshore staff. They learn your templates and work on your projects only.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/appointment" class="btn-accent">Book a discovery call <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <a href="#roles" class="btn-ghost-dark">See the roles</a>
          </div>
          <p class="mt-6 text-sm text-ink-300">Monthly dedicated resources. No recruitment fees.</p>
        </div>
        <img src="/images/photos/bim-engineer-workstation.webp" alt="Engineer working on an MEP coordination model across two monitors (stock photo)" width="2000" height="1055" fetchpriority="high" class="w-full rounded-2xl border border-white/10 shadow-frame" />
      </div>
    </section>

    <!-- Problem -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="The problem" title="Hiring is hard for M&E contractors" lead="Tenders pile up, submittals run late, and senior engineers end up drafting instead of engineering." />
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </div>
      </div>
    </section>

    <!-- Solution -->
    <section class="section bg-ink-50">
      <div class="container-site grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="Our approach" title="Engineers who already know your world" lead="Newham is not a staffing agency. We are a specialist engineering partner for construction, and our people are trained in the codes, systems and workflows your projects need before they start on your work." />
        </div>
        <ul class="space-y-4">
          <li v-for="v in values" :key="v.title" class="card flex gap-4">
            <span class="icon-tile shrink-0"><i :class="v.icon" aria-hidden="true"></i></span>
            <div>
              <h3 class="text-lg font-semibold">{{ v.title }}</h3>
              <p class="mt-1 text-sm leading-relaxed text-ink-600">{{ v.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Roles -->
    <section id="roles" class="section scroll-mt-16">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Roles" title="The roles you need" lead="Engage one specialist or a blended team. Every role is trained to Singapore submission standards." />
        <div class="mt-12 grid gap-4 md:grid-cols-2">
          <div v-for="r in roles" :key="r.title" class="card-hover">
            <div class="flex items-center gap-3">
              <span class="icon-tile"><i :class="r.icon" aria-hidden="true"></i></span>
              <h3 class="text-lg font-semibold">{{ r.title }}</h3>
            </div>
            <p class="mt-3 text-sm leading-relaxed text-ink-600">{{ r.text }}</p>
            <ul class="mt-4 flex flex-wrap gap-2">
              <li v-for="t in r.tags" :key="t" class="chip">{{ t }}</li>
            </ul>
            <NuxtLink v-if="r.more" :to="r.more.to" class="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-900">{{ r.more.label }} <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></NuxtLink>
          </div>
        </div>
        <div class="mt-10 rounded-2xl border border-ink-100 bg-ink-50 p-6">
          <p class="text-sm font-semibold text-ink-900">Disciplines covered</p>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li v-for="d in disciplines" :key="d" class="chip">{{ d }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" title="From discovery call to delivery" lead="A short, structured start so your team is productive quickly." />
        <div class="mt-12"><UiStepFlow :steps="steps" /></div>
      </div>
    </section>

    <!-- Engagement -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Engagement models" title="Simple, transparent engagement" lead="Monthly dedicated resources with no recruitment fees. Scale up for tender season and down when projects close out." />
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <div v-for="e in engagements" :key="e.title" class="card">
            <p class="font-display text-sm font-bold text-brand-600">{{ e.label }}</p>
            <h3 class="mt-2 text-xl font-bold">{{ e.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ e.text }}</p>
          </div>
        </div>
        <p class="mt-8 text-center text-sm text-ink-600">Pricing depends on roles, seniority and hours. We confirm it in writing after the discovery call. <NuxtLink to="/pricing" class="font-semibold text-brand-700 hover:text-brand-900">How we price</NuxtLink></p>
      </div>
    </section>

    <!-- Software + specialists -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p class="eyebrow">Software + specialists</p>
          <h2 class="mt-2 text-2xl font-bold sm:text-3xl">Your team, your tools — or CCorex</h2>
          <p class="lead mt-3">Our engineers work in Revit MEP, AutoCAD, Navisworks and your own templates. If you use CCorex, they can work in DeepCost and DeepTrack alongside your estimators and project managers.</p>
          <NuxtLink to="/ccorex" class="mt-6 inline-flex font-semibold text-brand-700 hover:text-brand-900">About CCorex <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></NuxtLink>
        </div>
        <UiBrowserFrame src="/images/product/deepcost-area-schedule.webp" alt="DeepCost area schedule listing buildings, floors and rooms" url="deepcost.app / area schedule" :width="1800" :height="1093" />
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-tight">
      <div class="container-site grid gap-10 py-6 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="Talent outsourcing questions" />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand title="Stop competing for talent. Extend your team." lead="Book a 30-minute discovery call. We will map your project pipeline to the right roles — no obligation." />
  </div>
</template>

<script setup lang="ts">
const siteUrl = useRuntimeConfig().public.siteUrl as string
useSeoMeta({
  title: 'M&E engineering talent outsourcing, Singapore',
  description: 'Dedicated M&E professionals for Singapore contractors: BIM modellers and drafters, estimators and QS, tender coordinators and fire protection engineers.',
  ogTitle: 'Engineering talent outsourcing — Newham',
  ogDescription: 'Dedicated, Singapore-code-trained M&E engineers who work on your projects, to your standards.',
  ogUrl: siteUrl + '/talent-outsourcing'
})
useHead({
  link: [{ rel: 'canonical', href: siteUrl + '/talent-outsourcing' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'M&E engineering talent outsourcing',
      serviceType: 'Engineering staff outsourcing',
      description: 'Dedicated M&E professionals for Singapore contractors: BIM modellers and drafters, estimators and QS, tender coordinators and fire protection engineers.',
      url: siteUrl + '/talent-outsourcing',
      areaServed: { '@type': 'Country', name: 'Singapore' },
      provider: { '@type': 'Organization', name: 'Newham Technological Solutions', url: siteUrl },
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'M&E engineering talent outsourcing', itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'BIM modellers and drafters' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Estimators and quantity surveyors' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tender and commercial coordinators' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fire protection engineers' } }
      ] }
    })
  }]
})

const problems = [
  { icon: 'fa-solid fa-user-clock', title: 'Talent is scarce', text: 'Experienced M&E professionals in Singapore are hard to find and expensive, and every contractor is hiring from the same pool.' },
  { icon: 'fa-solid fa-language', title: 'Generic outsourcing falls short', text: 'Offshore teams that do not know SS CP 52 or an ACMV schedule need more supervision than the work is worth.' },
  { icon: 'fa-solid fa-hourglass-half', title: 'Projects do not wait', text: 'Tenders pile up, submittals slip, and senior engineers spend their time drafting.' }
]

const values = [
  { icon: 'fa-solid fa-ruler-combined', title: 'Domain first, not generalist', text: 'Our professionals are trained in Singapore M&E requirements — SCDF, BCA and SS CP 52 — across fire protection, ACMV and ELV.' },
  { icon: 'fa-solid fa-people-group', title: 'Dedicated, not freelance', text: 'Your Newham team works only on your projects. They learn your templates, naming conventions and submission standards.' },
  { icon: 'fa-solid fa-sliders', title: 'You stay in control', text: 'Full visibility of output, timelines and quality. We manage the people; you direct the work.' }
]

const roles = [
  { icon: 'fa-solid fa-cubes', title: 'BIM modellers & drafters', text: 'Shop drawings, coordination models and as-built documentation, trained to Singapore submission standards.', tags: ['Revit MEP', 'AutoCAD', 'Navisworks', 'Shop drawings', 'As-builts'], more: { to: '/shop-drawing-services', label: 'Shop drawing services' } },
  { icon: 'fa-solid fa-calculator', title: 'Estimators & quantity surveyors', text: 'BOQ preparation, material take-offs, cost estimates and variation pricing, familiar with local tender formats.', tags: ['Take-offs', 'BOQ', 'Rate build-up', 'Variations'], more: { to: '/boq-estimation-services', label: 'BOQ & estimation services' } },
  { icon: 'fa-solid fa-file-signature', title: 'Tender & commercial coordinators', text: 'Tender compilation, compliance checklists, subcontractor comparisons and commercial correspondence.', tags: ['Tender compilation', 'Compliance checklists', 'Subcontractor comparison'] },
  { icon: 'fa-solid fa-fire-extinguisher', title: 'Fire protection engineers', text: 'Sprinkler design, fire alarm layouts, gas suppression specifications and SCDF submission documents.', tags: ['Sprinklers', 'Fire alarm', 'Gas suppression', 'SCDF submissions'], more: { to: '/fire-protection-design', label: 'Fire protection design' } }
]

const disciplines = ['Fire protection', 'ACMV', 'ELV', 'Plumbing & sanitary', 'Electrical']

const steps = [
  { title: 'Discovery call', text: 'We learn your project pipeline, systems and team structure in 30 minutes.' },
  { title: 'Team design', text: 'We recommend the mix of roles and seniority for your workload.' },
  { title: 'Onboarding', text: 'Your Newham team is trained on your standards, templates and tools.' },
  { title: 'Delivery', text: 'Dedicated professionals on your projects, working your hours, managed for quality.' }
]

const engagements = [
  { label: 'One role', title: 'Single specialist', text: 'One dedicated professional for a specific function, such as a BIM drafter or an estimator.' },
  { label: 'Defined scope', title: 'Project team', text: 'A blended team — for example, one estimator and two drafters — for a defined scope.' },
  { label: 'Flexible', title: 'Managed capacity', text: 'Ongoing capacity, adjusted month to month as projects start and close.' }
]

const faqs = [
  { q: 'Do the engineers work only on our projects?', a: 'Yes. A dedicated Newham professional works only on your projects, learns your standards and works your hours.' },
  { q: 'Who manages the engineers day to day?', a: 'You direct the work. Newham handles hiring, training, HR and quality management, and you get full visibility of output and timelines.' },
  { q: 'Can we scale the team up or down?', a: 'Yes. Engagements are monthly, so you can add capacity for tender season and release it when projects close out.' },
  { q: 'Do you charge recruitment fees?', a: 'No. You pay a monthly fee for dedicated resources, confirmed in writing before work begins.' },
  { q: 'Do we need to use CCorex?', a: 'No. Our engineers work in your existing tools. CCorex is available if you want it.' }
]
</script>
