<template>
  <div>
    <UiProductHero slug="arivu-ai" :points="heroPoints" tour="arivu" tour-duration="0:31">
      <template #title>Your AI assistant in <span class="text-ai-gradient">every app.</span></template>
      <template #lead>ARIVU sits in every CCorex app and answers questions from your own organisation's data across DeepCost, DeepTrack, DeepHR, DeepPlan and Deep Drive. Ask in plain language, get a chart or an export, and find what is in your tender documents — without leaving your work. It reads; it never changes your data.</template>
      <template #visual><UiArivuChat /></template>
    </UiProductHero>

    <!-- What ARIVU is -->
    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="What ARIVU is" title="One assistant, working inside the apps your team already uses" lead="ARIVU means “intelligence” in Tamil. It is not a separate tool to log in to. It is a chat widget in each CCorex app, next to the estimate, budget or leave request you are working on, and uses the same sign-in as the rest of the suite." />
          <ul class="mt-8 space-y-3">
            <li v-for="b in whatBullets" :key="b" class="flex gap-3 text-ink-700"><i class="fa-solid fa-circle-check mt-1 text-ai-600" aria-hidden="true"></i>{{ b }}</li>
          </ul>
        </div>
        <div class="card relative overflow-hidden p-8 sm:p-10">
          <div class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-ai-50" aria-hidden="true"></div>
          <div class="relative">
            <div class="flex items-start justify-between gap-4"><p class="chip-ai"><i class="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>ARIVU</p><UiArivuAvatar :size="88" /></div>
            <p class="mt-2 font-display text-5xl font-bold text-ink-900" lang="ta">அறிவு</p>
            <p class="mt-2 text-sm font-semibold uppercase tracking-wider text-ink-500">a·ri·vu · Tamil</p>
            <p class="mt-4 text-lg text-ink-700">Knowledge, intelligence, understanding.</p>
            <div class="mt-8 grid grid-cols-3 gap-x-3 gap-y-5 border-t border-ink-100 pt-6 text-center text-sm">
              <div v-for="a in appChips" :key="a.name">
                <span class="mx-auto flex h-10 w-10 items-center justify-center rounded-xl" :class="a.color"><i :class="a.icon" aria-hidden="true"></i></span>
                <p class="mt-2 font-semibold text-ink-900">{{ a.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Capabilities" title="Everything ARIVU does today" lead="Eight capabilities, all working on your own organisation’s data. Less clicking through menus and reports; more time on the estimate, the project and the people." />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <UiReveal v-for="(c, i) in capabilities" :key="c.title" class="card flex flex-col" :delay="(i % 4) * 70">
            <span class="icon-tile bg-ai-50 text-ai-700"><i :class="c.icon" aria-hidden="true"></i></span>
            <h3 class="mt-5 text-base font-semibold">{{ c.title }}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{{ c.text }}</p>
            <p v-if="c.example" class="mt-4 rounded-xl bg-ink-50 px-3 py-2 text-xs italic text-ink-700">“{{ c.example }}”</p>
          </UiReveal>
        </div>
      </div>
    </section>

    <!-- In the product -->
    <section class="section">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="In the product" title="ARIVU opens from any CCorex app" lead="Here ARIVU is open inside DeepCost. Pick a suggested question or type your own, attach a drawing or tender document, and choose an organisation skill — answers can come back as text, charts, or PDF and Excel exports." />
          <ul class="mt-6 space-y-2.5 text-sm text-ink-700">
            <li class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-brand-600" aria-hidden="true"></i>“Summarise the status of my active projects”</li>
            <li class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-brand-600" aria-hidden="true"></i>“Show budget vs actuals for this quarter as a chart”</li>
            <li class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-brand-600" aria-hidden="true"></i>“How much annual leave does each person have left?”</li>
          </ul>
        </div>
        <UiBrowserFrame src="/images/product/arivu-deepcost.webp" url="deepcost.ccorex.com / order" alt="ARIVU assistant panel open over a DeepCost order screen, asking “How can I help you today?” with suggested questions about active projects, budget versus actuals as a chart and who is on leave, a message box with attachments and a Skills selector" />
      </div>
    </section>

    <!-- How it works -->
    <section class="section relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>
      <div class="container-site relative">
        <UiSectionHeader center dark eyebrow="How it works" lead="You ask in the app you are working in. ARIVU looks up the answer in the CCorex apps your organisation uses — reading, never writing — and replies in text, as a chart, or as a PDF or Excel export.">
          <template #title>Ask. ARIVU reads your apps. You get the <span class="text-ai-gradient">answer.</span></template>
        </UiSectionHeader>
        <UiReveal class="mt-12"><DemoArivuFlow /></UiReveal>
      </div>
    </section>

    <!-- In each app -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="Cross-app lookup" title="What ARIVU reads, and what you can ask, app by app" lead="ARIVU can look up the records below in each app. What it can answer depends on the apps in your organisation’s package and the data in them. Example prompts are illustrative." />
        <div class="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <UiReveal v-for="(a, i) in perApp" :key="a.name" class="card flex flex-col" :delay="(i % 3) * 80">
            <div class="flex items-center gap-3">
              <span class="icon-tile" :class="a.color"><i :class="a.icon" aria-hidden="true"></i></span>
              <div>
                <h3 class="flex flex-wrap items-center gap-2 text-lg font-semibold">{{ a.name }}<span v-if="a.badge" class="rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-600">{{ a.badge }}</span></h3>
                <p class="text-xs font-medium uppercase tracking-wider text-ink-500">{{ a.area }}</p>
              </div>
            </div>
            <p class="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-500">Reads</p>
            <ul class="mt-2 flex flex-wrap gap-1.5">
              <li v-for="d in a.reads" :key="d" class="chip">{{ d }}</li>
            </ul>
            <p class="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-500">Try asking</p>
            <ul class="mt-2 flex-1 space-y-2">
              <li v-for="q in a.questions" :key="q" class="flex gap-2.5 rounded-xl border border-ink-100 bg-ink-50/60 px-3.5 py-2.5 text-sm text-ink-800">
                <i class="fa-regular fa-comment mt-0.5 text-ai-600" aria-hidden="true"></i>{{ q }}
              </li>
            </ul>
            <NuxtLink v-if="a.slug" :to="`/products/${a.slug}`" class="mt-6 text-sm font-semibold text-brand-700 hover:text-brand-900">Explore {{ a.name }} <i class="fa-solid fa-arrow-right ml-1 text-xs" aria-hidden="true"></i></NuxtLink>
          </UiReveal>
        </div>
        <p class="mt-6 flex items-center gap-2 text-sm text-ink-600"><i class="fa-solid fa-building-shield text-ai-600" aria-hidden="true"></i>Every lookup is limited to the organisation of the person asking.</p>
      </div>
    </section>

    <!-- Roadmap -->
    <section class="section bg-ink-50">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
        <div>
          <p class="chip-ai"><i class="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>Today and next</p>
          <h2 class="h-section mt-4">ARIVU across your data</h2>
          <p class="lead mt-4">ARIVU already reads across every CCorex app your organisation uses. Next, as the apps pass more data to each other, the same questions get richer — from the won tender to the project to the people who deliver it.</p>
          <p class="mt-4 text-sm text-ink-500">Roadmap items are plans, not current features. Ask us in your demo for the latest status.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="card">
            <p class="text-xs font-semibold uppercase tracking-wider text-brand-600"><i class="fa-solid fa-circle-check mr-1" aria-hidden="true"></i>Available today</p>
            <ul class="mt-4 space-y-3 text-sm text-ink-700">
              <li v-for="t in today" :key="t" class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-brand-600" aria-hidden="true"></i>{{ t }}</li>
            </ul>
          </div>
          <div class="card border-dashed">
            <p class="text-xs font-semibold uppercase tracking-wider text-amber-700"><i class="fa-solid fa-road mr-1" aria-hidden="true"></i>On the roadmap</p>
            <ul class="mt-4 space-y-3 text-sm text-ink-700">
              <li v-for="t in roadmap" :key="t" class="flex gap-2.5"><i class="fa-regular fa-clock mt-1 text-amber-600" aria-hidden="true"></i>{{ t }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- AI features in early access -->
    <SolutionEarlyAccess eyebrow="Coming next · early access" title="New AI features for DeepHR and DeepTrack" lead="These AI features are in early access, not yet generally available. Request access and we will show you where they stand in your demo." :items="[...aiEarlyAccess.deephr, ...aiEarlyAccess.deeptrack]" show-app />

    <!-- Responsible AI -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Responsible AI" title="Your data stays in your organisation" lead="ARIVU runs on the same platform as the rest of CCorex — the same sign-in, the same organisation boundary and the same encryption. It assists; people decide." />
        <UiReveal class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <UiFeatureCard v-for="r in responsible" :key="r.title" :icon="r.icon" :title="r.title" :text="r.text" />
        </UiReveal>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="Questions about ARIVU AI" lead="Want to see it with your own workflow? We will show you in a live demo." />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <UiCtaBand title="Try ARIVU AI in a live demo" lead="See ARIVU answer questions, chart results and search tender documents across your CCorex apps — using data like yours." primary-label="Try ARIVU AI in a live demo" secondary-label="See all apps" secondary-to="/products" />
  </div>
</template>

<script setup lang="ts">
import { arivuApps, aiEarlyAccess } from '~/data/arivu'

const config = useRuntimeConfig()
const path = '/products/arivu-ai'
useSeoMeta({
  title: 'ARIVU AI — AI assistant for construction software',
  description: 'ARIVU AI is the assistant in every CCorex app. Ask about your own data across DeepCost, DeepTrack, DeepHR and DeepPlan, and get answers, charts and exports.',
  ogTitle: 'ARIVU AI — your AI assistant in every CCorex app',
  ogDescription: 'Ask in plain language and get answers, charts, exports and document search from your own CCorex data — read-only, inside every app.'
})
useHead({
  link: [{ rel: 'canonical', href: config.public.siteUrl + path }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ARIVU AI',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: config.public.siteUrl + path,
      description: 'Read-only AI assistant in every CCorex app that answers questions from an organisation\'s own data across DeepCost, DeepTrack, DeepHR, DeepPlan and Deep Drive.',
      isPartOf: { '@type': 'SoftwareApplication', name: 'CCorex' },
      publisher: { '@type': 'Organization', name: 'Newham Solutions Pte. Ltd.' },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' }
    })
  }]
})

const heroPoints = ['Answers from your own data', 'Charts, PDF & Excel exports', 'Read-only — never changes data']
const whatBullets = [
  'A pop-up widget at the bottom right of every CCorex app — no extra app or login',
  'Reads across DeepCost, DeepTrack, DeepHR, DeepPlan and Deep Drive, limited to your organisation',
  'Read-only: it answers, summarises and finds — approvals and changes stay with your team in the apps'
]
const appChips = [
  { name: 'DeepCost', icon: 'fa-solid fa-calculator', color: 'bg-sky-50 text-sky-700' },
  { name: 'DeepTrack', icon: 'fa-solid fa-diagram-project', color: 'bg-amber-50 text-amber-700' },
  { name: 'DeepHR', icon: 'fa-solid fa-user-group', color: 'bg-emerald-50 text-emerald-700' },
  { name: 'DeepPlan', icon: 'fa-solid fa-compass-drafting', color: 'bg-violet-50 text-violet-700' },
  { name: 'Deep Drive', icon: 'fa-solid fa-folder-open', color: 'bg-indigo-50 text-indigo-700' },
  { name: 'Tender docs', icon: 'fa-solid fa-file-lines', color: 'bg-rose-50 text-rose-700' }
]
const capabilities = [
  { icon: 'fa-regular fa-comments', title: 'Chat', text: 'Ask the way you would ask a colleague. Answers stream in as ARIVU works, in a widget at the bottom right of every app.', example: 'What is waiting for my approval today?' },
  { icon: 'fa-solid fa-layer-group', title: 'Cross-app lookup', text: 'Reads, but never changes, records in DeepCost, DeepTrack, DeepHR, DeepPlan and Deep Drive — limited to your organisation.', example: 'Which purchase requests on Block B are still pending?' },
  { icon: 'fa-solid fa-chart-column', title: 'Charts and exports', text: 'Turn an answer into a chart, or export it to PDF or Excel for a meeting or a report.', example: 'Chart purchase requests by project this month.' },
  { icon: 'fa-solid fa-paperclip', title: 'Attachments', text: 'Attach drawings and tender documents and ask about them. Scanned PDFs are analysed as images, so paper-based tenders work too.', example: 'What fire-rating does this scanned spec ask for?' },
  { icon: 'fa-solid fa-book-bookmark', title: 'Organisation skills', text: 'Define reusable instruction sets with reference documents — for example, how your company wants a tender scope summarised.', example: 'Use our tender-review skill on this document.' },
  { icon: 'fa-solid fa-magnifying-glass', title: 'Semantic document search', text: 'Finds documents by meaning, not just keywords, across Deep Drive files and DeepCost opportunity documents.', example: 'Find the addendum that changed the sprinkler spec.' },
  { icon: 'fa-solid fa-file-lines', title: 'Opportunity summaries', text: 'Summarises a DeepCost opportunity — the customer, the scope and the documents — in a few lines.', example: 'Summarise the school extension opportunity.' },
  { icon: 'fa-solid fa-gauge', title: 'Usage control', text: 'A usage ledger enforces budgets and rate limits for your organisation, so AI use stays predictable.' }
]
const perApp = [
  {
    name: 'DeepCost', slug: 'deepcost', area: 'Tender estimation', icon: 'fa-solid fa-calculator', color: 'bg-sky-50 text-sky-700',
    reads: ['Customers', 'Opportunities', 'Orders', 'BOQ', 'Opportunity documents'],
    questions: ['Which opportunities close for submission this week?', 'Summarise the opportunity for the school extension tender.', 'What does the spec say about sprinkler pipe material?']
  },
  {
    name: 'DeepTrack', slug: 'deeptrack', area: 'Projects & cost control', icon: 'fa-solid fa-diagram-project', color: 'bg-amber-50 text-amber-700',
    reads: arivuApps.deeptrack.reads,
    questions: arivuApps.deeptrack.questions.slice(0, 3)
  },
  {
    name: 'DeepHR', slug: 'deephr', area: 'HR & payroll', icon: 'fa-solid fa-user-group', color: 'bg-emerald-50 text-emerald-700',
    reads: arivuApps.deephr.reads,
    questions: arivuApps.deephr.questions.slice(0, 3)
  },
  {
    name: 'DeepPlan', slug: 'deepplan-ai', area: 'Drawing take-off', icon: 'fa-solid fa-compass-drafting', color: 'bg-violet-50 text-violet-700',
    reads: ['Projects', 'Drawings', 'BOQ', 'Detections'],
    questions: ['Which drawings are uploaded for the clinic project?', 'Export the Level 2 BOQ to Excel.', 'Total floor area measured on this project?']
  },
  {
    name: 'Deep Drive', slug: 'deep-drive', area: 'Documents', icon: 'fa-solid fa-folder-open', color: 'bg-indigo-50 text-indigo-700',
    reads: ['Files'],
    questions: ['Find the latest approved shop drawings for Block B.', 'Which documents mention the fire-alarm interface?']
  },
  {
    name: 'Your attachments', area: 'In the chat', icon: 'fa-solid fa-paperclip', color: 'bg-rose-50 text-rose-700',
    reads: ['Drawings', 'Tender documents', 'Scanned PDFs'],
    questions: ['List the M&E trades in this tender.', 'Summarise the preliminaries in this scanned PDF.']
  }
]
const today = [
  'Questions answered across DeepCost, DeepTrack, DeepHR, DeepPlan and Deep Drive',
  'Charts, PDF and Excel exports',
  'Attachments, including drawings and scanned PDFs',
  'Organisation skills: reusable instructions with reference documents',
  'Semantic document search and opportunity summaries',
  'Usage budgets and rate limits per organisation'
]
const roadmap = [
  'Deep Drive search grows as Deep Drive moves from development to production',
  'Cross-app data flow: won tender → project without re-entry',
  'Customers and contacts shared across apps',
  'AI receipt scan, attendance alerts, budget overrun forecast and invoice auto-capture (early access, below)'
]
const responsible = [
  { icon: 'fa-solid fa-eye', title: 'Read-only', text: 'ARIVU reads, but never changes, your data. Estimates, budgets, claims and leave are still submitted and approved by people in the apps.' },
  { icon: 'fa-solid fa-building-shield', title: 'Your organisation only', text: 'Every lookup is limited to your organisation\'s data. The organisation\'s package must include ARIVU, and each user must be assigned to it.' },
  { icon: 'fa-solid fa-lock', title: 'Encrypted messages', text: 'Chat messages are encrypted at rest in the database, like other personal and configuration fields in CCorex.' },
  { icon: 'fa-solid fa-gauge', title: 'Usage under control', text: 'A usage ledger enforces budgets and rate limits, so AI use stays predictable.' }
]
const faqs = [
  { q: 'What is ARIVU AI?', a: 'ARIVU is the AI assistant in every CCorex app. It answers questions from your own organisation\'s data across DeepCost, DeepTrack, DeepHR, DeepPlan and Deep Drive, produces charts and PDF or Excel exports, searches and summarises documents, and reads attachments such as drawings, tender documents and scanned PDFs.' },
  { q: 'What does the name mean?', a: 'ARIVU (அறிவு) is the Tamil word for intelligence or knowledge.' },
  { q: 'Can ARIVU change data or approve things?', a: 'No. ARIVU is read-only. It looks things up, summarises and exports — it never creates, edits or approves records. Approvals remain with the people your workflow assigns them to.' },
  { q: 'Whose data can ARIVU see?', a: 'Only your own organisation\'s. Every lookup is limited to the organisation of the person asking. Chat messages are encrypted at rest.' },
  { q: 'What are organisation skills?', a: 'Reusable instruction sets your organisation defines, with reference documents attached — for example, how your company wants tender scopes summarised. Anyone in the organisation can then use them in ARIVU.' },
  { q: 'Which AI model does ARIVU use?', a: 'ARIVU runs on enterprise-grade large language models, set up so it answers only from your own organisation’s CCorex data and never changes your records.' },
  { q: 'Is ARIVU included in our plan?', a: 'Yes. ARIVU is included in every CCorex plan, including a single app such as DeepHR or DeepTrack on its own, where it answers from that app. On Business and Enterprise it answers across all your apps. Each user must be assigned to it, and usage budgets keep AI use predictable.' }
]
</script>
