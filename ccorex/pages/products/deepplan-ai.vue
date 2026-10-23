<template>
  <div>
    <UiProductHero slug="deepplan-ai" :points="heroPoints" tour="deepplan" tour-duration="0:23">
      <template #title>From drawings to a priced BOQ. <span class="text-ai-gradient">AI take-off in early access.</span></template>
      <template #lead>DeepPlan turns floor plans into measured quantities and a priced bill of quantities. Projects, drawing upload, scale calibration, the rooms and measurements editor, the rate library and BOQ generation run in production today. AI room take-off and symbol detection are in early access while we rebuild them — they are not live in production.</template>
      <template #visual>
        <DemoDeepPlanTakeoff />
      </template>
    </UiProductHero>

    <!-- Problem -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="Why DeepPlan AI" title="Manual take-off is where tender time goes" lead="Scaling drawings, measuring rooms, counting symbols and copying quantities into spreadsheets is slow, repetitive work — and every re-keyed number is a chance for error. DeepPlan puts the drawing, the measurements and the BOQ in one place." />
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" title="Drawings in. Reviewed quantities out." lead="Steps marked AI use features that are in early access while they are rebuilt — they are not live in production. Every other step runs today, and a person checks every quantity before it reaches the BOQ." />
        <div class="mt-12"><UiFlowPipeline :steps="flow" :interval="1900" /></div>

        <div class="mt-14 grid gap-4 lg:grid-cols-2">
          <UiReveal class="card">
            <p class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800"><span class="h-2 w-2 rounded-full bg-emerald-500"></span>In production</span>
              <span class="text-xs text-ink-500">at deepplan.ccorex.com</span>
            </p>
            <h3 class="mt-4 text-lg font-semibold">What runs today</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="f in live" :key="f.title" class="flex gap-3">
                <i :class="f.icon" class="mt-1 w-4 text-center text-brand-600" aria-hidden="true"></i>
                <div><p class="font-semibold text-ink-900">{{ f.title }}</p><p class="text-sm text-ink-600">{{ f.text }}</p></div>
              </li>
            </ul>
          </UiReveal>
          <UiReveal class="card border-ai-100" :delay="120">
            <p class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800"><span class="h-2 w-2 rounded-full bg-amber-500"></span>Early access — not live</span>
              <span class="chip-ai"><i class="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>AI</span>
            </p>
            <h3 class="mt-4 text-lg font-semibold">What is being rebuilt</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="f in early" :key="f.title" class="flex gap-3">
                <i :class="f.icon" class="mt-1 w-4 text-center text-ai-600" aria-hidden="true"></i>
                <div><p class="font-semibold text-ink-900">{{ f.title }}</p><p class="text-sm text-ink-600">{{ f.text }}</p></div>
              </li>
            </ul>
            <p class="mt-5 rounded-xl bg-ai-50 px-4 py-3 text-xs text-ai-700">These AI features are switched off in production and being rebuilt. Ask us about joining early access.</p>
          </UiReveal>
        </div>
      </div>
    </section>

    <!-- Real screens -->
    <section class="section border-t border-ink-100">
      <div class="container-site">
        <UiSectionHeader eyebrow="Inside DeepPlan" title="Real DeepPlan screens" lead="Projects, drawings and symbol models on the dashboard, and the drawing editor with rooms, detections and measurements side by side. Shown from the development environment, where AI symbol detection is in early access." />
        <div class="mt-10">
          <UiScreenshotTabs label="DeepPlan screens" :tabs="realScreens" />
        </div>
      </div>
    </section>

    <!-- Human review -->
    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
        <figure>
          <img src="/images/photos/bim-engineer-workstation.webp" alt="Engineer reviewing an MEP building model across two monitors and a laptop" width="2000" height="1055" class="w-full rounded-2xl object-cover shadow-card" loading="lazy" decoding="async" />
          <figcaption class="mt-2 text-xs text-ink-500">Illustrative photo.</figcaption>
        </figure>
        <div>
          <UiSectionHeader eyebrow="Human in the loop" title="AI proposes. Your estimator decides." lead="DeepPlan is built to assist estimators, not replace them. Rooms and symbols are shown in a drawing editor with layers and undo/redo, where your estimator checks and corrects them before they are assigned and priced." />
          <ul class="mt-8 space-y-3">
            <li v-for="b in reviewPoints" :key="b" class="flex gap-3 text-ink-700"><i class="fa-solid fa-circle-check mt-1 text-brand-600" aria-hidden="true"></i>{{ b }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Into DeepCost -->
    <section class="section bg-ink-50">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="Part of the tender flow" title="Measured in DeepPlan. Priced and submitted from DeepCost." lead="In the CCorex tender flow, drawings are measured in DeepPlan and the priced bid goes out from DeepCost. DeepPlan keeps its own per-project BOQ and per-client rate library; ARIVU can answer questions across DeepPlan projects, drawings and BOQs." />
          <ul class="mt-8 grid gap-4 sm:grid-cols-2">
            <li v-for="c in costLinks" :key="c.title" class="flex gap-3">
              <span class="icon-tile h-9 w-9 shrink-0 text-sm"><i :class="c.icon" aria-hidden="true"></i></span>
              <div><p class="font-semibold text-ink-900">{{ c.title }}</p><p class="text-sm text-ink-600">{{ c.text }}</p></div>
            </li>
          </ul>
          <NuxtLink to="/products/deepcost" class="mt-8 inline-flex font-semibold text-brand-700 hover:text-brand-900">Explore DeepCost <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></NuxtLink>
        </div>
        <UiBrowserFrame src="/images/product/deepcost-mto.webp" alt="DeepCost material take-off organised by building, floor and room with item groups and prices" url="deepcost.app / mto" caption="DeepCost material take-off, where the tender is priced and approved." />
      </div>
    </section>

    <!-- Who it's for -->
    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="Who it is for" title="Built for the people who price the work" />
          <ul class="mt-8 space-y-5">
            <li v-for="w in who" :key="w.title" class="flex gap-4">
              <span class="icon-tile shrink-0"><i :class="w.icon" aria-hidden="true"></i></span>
              <div><h3 class="font-semibold">{{ w.title }}</h3><p class="mt-1 text-sm leading-relaxed text-ink-600">{{ w.text }}</p></div>
            </li>
          </ul>
        </div>
        <figure>
          <img src="/images/photos/mep-model-laptop.webp" alt="Laptop showing a 3D MEP services model with an engineer pointing at the screen" width="2000" height="1055" class="w-full rounded-2xl object-cover shadow-card" loading="lazy" decoding="async" />
          <figcaption class="mt-2 text-xs text-ink-500">Illustrative photo.</figcaption>
        </figure>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="Questions about DeepPlan AI" lead="Bring a sample drawing to your demo and we will measure it with you." />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand title="See DeepPlan on your drawings" lead="Book a live demo: upload a drawing, calibrate the scale, measure rooms and generate a BOQ — and ask about early access to AI take-off." secondary-label="See all apps" secondary-to="/products" />
  </div>
</template>

<script setup lang="ts">
const realScreens = [
  { title: 'Dashboard', text: 'Active projects, recent drawings, the processing queue and trained symbol models at a glance.', src: '/images/product/deepplan-dashboard.webp', url: 'deepplan.ccorex.com / dashboard', alt: 'DeepPlan dashboard with counts of active projects, recent drawings, processing queue and trained models, a recent projects list and symbol models for data, fire alarm, lighting control and low-voltage switchgear' },
  { title: 'Drawing editor with AI detections', text: 'Detected luminaire symbols labelled on an electrical lighting plan, with Rooms, Detections and Measure panels and a page rail. Early access.', src: '/images/product/deepplan-detections.webp', url: 'deepplan.ccorex.com / drawing', alt: 'DeepPlan drawing editor showing an electrical lighting installation plan with AI-detected luminaire symbols labelled by type, editing tools on the left, Rooms, Detections and Measure tabs on the right and page thumbnails 1 to 4 at the bottom' }
]
const config = useRuntimeConfig()
const path = '/products/deepplan-ai'
useSeoMeta({
  title: 'DeepPlan AI — AI quantity take-off & BOQ software',
  description: 'DeepPlan turns drawings into measured quantities and a priced BOQ: upload, calibrate, measure rooms, apply rates. AI take-off is in early access.',
  ogTitle: 'DeepPlan AI — from drawings to a priced BOQ',
  ogDescription: 'Drawing upload, scale calibration, room measurement, rate library and BOQ generation today. AI room take-off and symbol detection in early access.'
})
useHead({
  link: [{ rel: 'canonical', href: config.public.siteUrl + path }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'DeepPlan AI',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: config.public.siteUrl + path,
      description: 'Drawing take-off and BOQ generation for MEP and fire-protection estimators, part of the CCorex suite. AI take-off is in early access.',
      isPartOf: { '@type': 'SoftwareApplication', name: 'CCorex' },
      publisher: { '@type': 'Organization', name: 'Newham Solutions Pte. Ltd.' },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' }
    })
  }]
})

const heroPoints = ['Scale calibration & room measurement', 'Per-client rate library & BOQ', 'AI take-off in early access']
const problems = [
  { icon: 'fa-solid fa-hand-pointer', title: 'Counting by hand', text: 'Fittings, detectors, call points and boards counted symbol by symbol, sheet by sheet.' },
  { icon: 'fa-solid fa-ruler', title: 'Scaling and measuring', text: 'Room areas, perimeters and wall lengths scaled and measured manually for every floor.' },
  { icon: 'fa-solid fa-table-cells', title: 'Re-keying into spreadsheets', text: 'Quantities copied from mark-ups into spreadsheets, then again into the BOQ.' }
]
const flow = [
  { title: 'Project', text: 'Each project has its own BOQ.', icon: 'fa-solid fa-folder-plus' },
  { title: 'Upload drawings', text: 'PDF pages become 300-dpi images.', icon: 'fa-solid fa-file-arrow-up' },
  { title: 'Calibrate scale', text: 'Set once; your scale always wins.', icon: 'fa-solid fa-ruler-combined' },
  { title: 'Room take-off', text: 'Early access — walls, outlines, OCR labels.', icon: 'fa-solid fa-vector-square', ai: true },
  { title: 'Count symbols', text: 'Early access — 23 classes, or count by example.', icon: 'fa-solid fa-crosshairs', ai: true },
  { title: 'Assign rooms', text: 'Floors and area categories.', icon: 'fa-solid fa-layer-group' },
  { title: 'Price', text: 'Per-client rate library.', icon: 'fa-solid fa-tags' },
  { title: 'Generate BOQ', text: 'Editable lines, then export.', icon: 'fa-solid fa-file-export' }
]
const live = [
  { icon: 'fa-solid fa-folder-open', title: 'Projects & drawing upload', text: 'PDFs are turned into one 300-dpi image per page, with a page rail showing each page and its processing status.' },
  { icon: 'fa-solid fa-ruler-combined', title: 'Scale calibration', text: 'Set one scale (pixels per metre). Changing it recalculates room areas and perimeters.' },
  { icon: 'fa-solid fa-wand-magic', title: 'Rooms & measurements editor', text: 'Layers, rooms and measurements with undo/redo, a one-click magic wand to outline a room, manual measurements and CSV export.' },
  { icon: 'fa-solid fa-layer-group', title: 'Area schedule', text: 'Rooms assigned to floors and area categories.' },
  { icon: 'fa-solid fa-book', title: 'Per-client rate library', text: 'Unit rates per client fill the BOQ lines.' },
  { icon: 'fa-solid fa-file-export', title: 'BOQ generation & export', text: 'Line items from assigned rooms and counts, rates from the library, edited manually and exported.' }
]
const early = [
  { icon: 'fa-solid fa-vector-square', title: 'Automatic room take-off', text: 'Finds walls, outlines each enclosed space and reads its label with OCR; unlabelled rooms become "Room N". Area, perimeter and wall length per room.' },
  { icon: 'fa-solid fa-crosshairs', title: 'Symbol detection', text: 'A trained model for 23 electrical and fire symbol classes — light fittings, sockets, smoke and heat detectors, call points, distribution boards.' },
  { icon: 'fa-solid fa-clone', title: 'Auto-count by example', text: 'Box one symbol and every matching copy on the page is found, one symbol type at a time.' },
  { icon: 'fa-solid fa-flask', title: 'Symbol model studio', text: 'Each client uploads blueprints, annotates symbols, trains its own model and switches the active model. No client-trained model exists yet.' }
]
const reviewPoints = [
  'Your scale always overrides one derived from the drawing',
  'Rooms, measurements and detections are edited in one drawing editor, with undo/redo',
  'BOQ lines can be edited manually before export',
  'User corrections to symbol detections feed back into training (early access)'
]
const costLinks = [
  { icon: 'fa-solid fa-layer-group', title: 'Area schedule', text: 'Rooms assigned to floors and area categories, like the DeepCost area schedule.' },
  { icon: 'fa-solid fa-book', title: 'Rate library', text: 'A per-client library of unit rates fills BOQ lines.' },
  { icon: 'fa-solid fa-file-export', title: 'Editable BOQ', text: 'Line items built from assigned rooms and symbol counts, editable and exportable.' },
  { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Ask ARIVU', text: 'ARIVU reads DeepPlan projects, drawings and BOQs to answer questions.' }
]
const who = [
  { icon: 'fa-solid fa-calculator', title: 'Estimators and QS teams', text: 'Spend less time scaling and measuring, and more time on pricing and risk.' },
  { icon: 'fa-solid fa-fire-extinguisher', title: 'MEP and fire-protection contractors', text: 'Electrical and fire symbols — light fittings, sockets, smoke and heat detectors, call points, distribution boards — are the first AI focus.' },
  { icon: 'fa-solid fa-file-signature', title: 'Tender-based businesses', text: 'Respond to more tenders with a consistent, reviewable take-off process.' }
]
const faqs = [
  { q: 'Is the AI take-off live?', a: 'Not in production yet. Projects, drawing upload, scale calibration, the rooms and measurements editor, the rate library and BOQ generation are live today. AI room take-off and symbol detection are in early access while they are rebuilt; ask us about joining.' },
  { q: 'Does DeepPlan AI replace our estimators?', a: 'No. AI is built to do the repetitive first pass. Your estimators check and correct rooms, measurements and counts in the drawing editor before they are priced into a BOQ.' },
  { q: 'Which symbols will the AI detect?', a: 'The detection model covers 23 electrical and fire symbol classes, such as light fittings, sockets, smoke and heat detectors, call points and distribution boards. Auto-count by example lets you box one symbol and find matching copies on the page, one symbol type at a time.' },
  { q: 'Can the model learn our own drawing symbols?', a: 'That is the plan for the symbol model studio: each client uploads blueprints, annotates symbols, trains its own model and switches the active model. It is part of early access; no client-trained model is in use yet.' },
  { q: 'How does DeepPlan work with DeepCost?', a: 'In the CCorex tender flow, drawings are measured in DeepPlan and the priced bid goes out from DeepCost. Both apps share one sign-in, and ARIVU can answer questions across both.' },
  { q: 'Which plan includes DeepPlan AI?', a: 'DeepPlan AI is included in the Enterprise plan, which covers the full CCorex suite. Ask us for a tailored quote.' }
]
</script>
