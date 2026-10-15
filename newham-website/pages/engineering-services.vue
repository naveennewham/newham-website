<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-12 pb-20 pt-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-20">
        <div>
          <p class="eyebrow-dark">Pillar 3 · Construction engineering services</p>
          <h1 class="h-display mt-4 text-white">Fire protection design and commercial support, delivered</h1>
          <p class="lead-dark mt-6 max-w-xl">Two things M&amp;E contractors and consultants never have enough of: fire protection design capacity and commercial project support. Prepared to Singapore codes, scoped in writing.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/appointment" class="btn-accent">Book a discovery call <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <a href="#fire-protection" class="btn-ghost-dark">See the services</a>
          </div>
          <p class="mt-6 text-sm text-ink-300">Design · estimation · tender support · QS · document control</p>
        </div>
        <img src="/images/photos/mep-model-laptop.webp" alt="MEP model reviewed on a laptop with a stylus (stock photo)" width="2000" height="1055" fetchpriority="high" class="w-full rounded-2xl border border-white/10 shadow-frame" />
      </div>
    </section>

    <!-- Problem -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="The problem" title="Your team is stretched. Your pipeline won't wait." />
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section-tight bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Two specialist teams, one partner" title="Engage one stream or both" lead="Each stream is staffed by domain-trained professionals. Scale up for project peaks; scale down when the workload eases." />
        <div class="mt-10 grid gap-4 md:grid-cols-3">
          <UiFeatureCard v-for="b in benefits" :key="b.title" :icon="b.icon" :title="b.title" :text="b.text" />
        </div>
      </div>
    </section>

    <!-- Stream 1 -->
    <section id="fire-protection" class="section scroll-mt-16">
      <div class="container-site">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div><UiSectionHeader eyebrow="Stream 1" title="Fire protection design & calculations" lead="Design services for contractors and consultants. Deliverables are produced to Singapore codes and formatted for authority submission." />
          <NuxtLink to="/fire-protection-design" class="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-900">Fire protection design in detail <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></NuxtLink></div>
          <ul class="flex flex-wrap gap-2 lg:justify-end"><li v-for="c in ['SS CP 52', 'NFPA 13', 'SS 645', 'SCDF submission']" :key="c" class="chip">{{ c }}</li></ul>
        </div>
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <UiFeatureCard v-for="s in fireServices" :key="s.title" :icon="s.icon" :title="s.title" :text="s.text" tone="bg-rose-50 text-rose-700" />
        </div>
        <div class="mt-8 flex gap-4 rounded-2xl border border-brand-100 bg-brand-50 p-6">
          <i class="fa-solid fa-stamp mt-1 text-brand-700" aria-hidden="true"></i>
          <div>
            <h3 class="font-semibold text-brand-900">PE endorsement</h3>
            <p class="mt-1 text-sm leading-relaxed text-brand-900/80">Newham delivers the design. Where a statutory submission needs Professional Engineer endorsement, we coordinate review by a Singapore-registered PE, so you receive one submission-ready package. Endorsement fees are quoted separately.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stream 2 -->
    <section id="commercial" class="section scroll-mt-16 bg-ink-50">
      <div class="container-site">
        <UiSectionHeader eyebrow="Stream 2" title="Commercial & tender support" lead="Commercial and tender functions for M&E contractors, from first tender to final account, so your project teams can focus on delivery." />
        <NuxtLink to="/boq-estimation-services" class="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-900">BOQ preparation &amp; estimation services in detail <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></NuxtLink>
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UiFeatureCard v-for="s in commercialServices" :key="s.title" :icon="s.icon" :title="s.title" :text="s.text" />
          <div class="card flex flex-col justify-between bg-brand-950 text-white">
            <div>
              <p class="eyebrow-dark">Works with CCorex</p>
              <p class="mt-3 text-sm leading-relaxed text-ink-200">If you run DeepCost or DeepTrack, our estimators and QS can work directly in your CCorex data.</p>
            </div>
            <NuxtLink to="/ccorex" class="mt-4 text-sm font-semibold text-cyan-400 hover:text-white">About CCorex <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Built for -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Built for" title="Who uses engineering services" />
        <div class="mt-12 grid gap-4 md:grid-cols-2">
          <UiFeatureCard v-for="c in clients" :key="c.title" :icon="c.icon" :title="c.title" :text="c.text" />
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" title="Scoped in writing, delivered with review cycles" />
        <div class="mt-12"><UiStepFlow :steps="steps" /></div>
      </div>
    </section>

    <!-- Engagement -->
    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <UiSectionHeader eyebrow="Engagement models" title="Retainer, project or both" lead="Choose the model that fits your pipeline. Engaging both streams means one team, one relationship and one invoice." />
        <div>
          <div class="grid gap-4 sm:grid-cols-3">
            <div v-for="m in models" :key="m.title" class="card">
              <h3 class="text-lg font-bold">{{ m.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ m.text }}</p>
            </div>
          </div>
          <ul class="mt-6 grid gap-x-6 gap-y-2.5 text-sm sm:grid-cols-2">
            <li v-for="p in principles" :key="p" class="flex gap-2.5 text-ink-700"><i class="fa-solid fa-check mt-1 text-brand-600" aria-hidden="true"></i>{{ p }}</li>
          </ul>
          <NuxtLink to="/pricing" class="mt-6 inline-flex font-semibold text-brand-700 hover:text-brand-900">How we price <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 py-6 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="Engineering services questions" />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand title="Your engineering back office starts here" lead="Book a 30-minute discovery call. Bring a live project brief if you have one and we will talk through how we would scope it." />
  </div>
</template>

<script setup lang="ts">
const siteUrl = useRuntimeConfig().public.siteUrl as string
useSeoMeta({
  title: 'Fire protection design & BOQ services in Singapore',
  description: 'Sprinkler design and hydraulic calculations to SS CP 52 / NFPA 13, plus estimation, BOQ, tender support, QS and document control for M&E contractors.',
  ogTitle: 'Construction engineering services — Newham',
  ogDescription: 'Fire protection design and commercial project support for Singapore M&E contractors and consultants.',
  ogUrl: siteUrl + '/engineering-services'
})
useHead({
  link: [{ rel: 'canonical', href: siteUrl + '/engineering-services' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Fire protection design and M&E commercial support',
      serviceType: 'Engineering design services',
      description: 'Sprinkler design and hydraulic calculations to SS CP 52 / NFPA 13, fire alarm design to SS 645, submission drawings, estimation, BOQ, tender support and QS for M&E contractors in Singapore.',
      url: siteUrl + '/engineering-services',
      areaServed: { '@type': 'Country', name: 'Singapore' },
      provider: { '@type': 'Organization', name: 'Newham Technological Solutions', url: siteUrl },
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Fire protection design and M&E commercial support', itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sprinkler system design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hydraulic calculations' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fire pump design and selection' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fire alarm system design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Submission drawing packages' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Estimation and BOQ preparation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tender queries and addenda' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Project QS and variations' } }
      ] }
    })
  }]
})

const problems = [
  { icon: 'fa-solid fa-hourglass-half', title: 'Design bottlenecks', text: 'FP drawings and hydraulic calculations pile up while engineers juggle coordination meetings, site visits and submissions.' },
  { icon: 'fa-solid fa-file-circle-exclamation', title: 'Commercial work squeezes margin', text: 'BOQs are rushed, tender queries slip, variations go unclaimed and submissions miss deadlines.' },
  { icon: 'fa-solid fa-users-slash', title: 'Hiring for both is unrealistic', text: 'A dedicated FP designer, estimator, QS and document controller rarely makes sense year-round.' }
]

const benefits = [
  { icon: 'fa-solid fa-scale-balanced', title: 'Cost-effective output', text: 'Singapore-standard engineering output without recruitment costs, bench time or extra overhead.' },
  { icon: 'fa-solid fa-gauge-high', title: 'Fast turnaround', text: 'Layouts, calculations, BOQs and tender compilations turned around to your programme.' },
  { icon: 'fa-solid fa-layer-group', title: 'Capacity on tap', text: 'Add capacity for project peaks and release it when the workload drops.' }
]

const fireServices = [
  { icon: 'fa-solid fa-shower', title: 'Sprinkler system design', text: 'Layout, head placement, pipe routing, zoning and riser diagrams to SS CP 52 and NFPA 13, across hazard classifications.' },
  { icon: 'fa-solid fa-square-root-variable', title: 'Hydraulic calculations', text: 'Node-by-node analysis, demand versus supply and residual pressure, in submission-ready reports.' },
  { icon: 'fa-solid fa-gears', title: 'Fire pump design & selection', text: 'Pump sizing, duty and standby, pressure-flow curves and pump room layouts.' },
  { icon: 'fa-solid fa-bell', title: 'Fire alarm system design', text: 'Detection layout, zoning, loop design and cause-and-effect matrices to SS 645 / BS 5839.' },
  { icon: 'fa-solid fa-wind', title: 'Gas suppression design', text: 'Clean agent and inert gas systems: agent quantities, pipe sizing and nozzle placement.' },
  { icon: 'fa-solid fa-arrows-up-down', title: 'Wet & dry riser design', text: 'Riser sizing, landing valve placement and breeching inlet locations to SS CP 52.' },
  { icon: 'fa-solid fa-fire-extinguisher', title: 'Hose reel system design', text: 'Coverage planning, pipe sizing and flow and pressure analysis.' },
  { icon: 'fa-solid fa-folder-open', title: 'Submission drawing packages', text: 'Floor plans, riser diagrams, schematics, details and schedules in AutoCAD or Revit, in Singapore submission format.' }
]

const commercialServices = [
  { icon: 'fa-solid fa-calculator', title: 'Estimation & BOQ preparation', text: 'Material and labour take-offs, BOQ compilation, rate build-up and cost summaries across M&E trades.' },
  { icon: 'fa-solid fa-circle-question', title: 'Tender queries & addenda', text: 'RFI drafting, clarification tracking, addendum review and scope gap analysis.' },
  { icon: 'fa-solid fa-folder-tree', title: 'Document control & submissions', text: 'Drawing registers, transmittal logs, submission tracking and revision control.' },
  { icon: 'fa-solid fa-chart-line', title: 'Project QS & variations', text: 'Budget versus actual tracking, variation pricing, subcontractor claim checks and interim valuations.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'Progress claims', text: 'Monthly progress claims, valuation calculations, supporting documents and payment tracking.' }
]

const clients = [
  { icon: 'fa-solid fa-helmet-safety', title: 'M&E contractors without dedicated FP or commercial teams', text: 'You win projects but struggle to staff design and admin. We fill those gaps project by project or on retainer.' },
  { icon: 'fa-solid fa-compass-drafting', title: 'Engineering consultants with overflow', text: 'You have the capability but not the capacity in peak periods. We take on the overflow.' }
]

const steps = [
  { title: 'Discovery call', text: 'Share your workload, pain points and pipeline. We recommend the service mix.' },
  { title: 'Scope & proposal', text: 'Deliverables, timelines, team and pricing confirmed in writing.' },
  { title: 'Onboarding', text: 'We learn your standards, templates, naming conventions and tools.' },
  { title: 'Delivery', text: 'Consistent output with revision cycles built in and regular capacity reviews.' }
]

const models = [
  { title: 'Retainer', text: 'A dedicated team with monthly hours, for a steady pipeline.' },
  { title: 'Project-based', text: 'A fixed scope per deliverable — a design package, a BOQ or a claim.' },
  { title: 'Hybrid', text: 'A base retainer with project top-ups for peaks.' }
]

const principles = ['Billed monthly in SGD', 'No recruitment or setup fees', 'Scope confirmed in writing first', 'Revision cycles within agreed scope', 'Third-party and PE fees quoted separately']

const faqs = [
  { q: 'Which codes do you design to?', a: 'Sprinkler design and hydraulic calculations follow SS CP 52 and NFPA 13; fire alarm design follows SS 645 / BS 5839. Drawings are formatted for SCDF submission.' },
  { q: 'Can you handle PE endorsement?', a: 'Yes. We coordinate review and endorsement by a Singapore-registered Professional Engineer where the submission needs it, and quote those fees separately.' },
  { q: 'Can we use only one stream?', a: 'Yes. Engage fire protection design, commercial support, or both.' },
  { q: 'How quickly can you turn work around?', a: 'It depends on scope. We agree timelines in writing for each deliverable before work starts.' }
]
</script>
