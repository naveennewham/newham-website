<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative pb-20 pt-16 lg:pt-24">
        <div class="max-w-3xl">
          <p class="eyebrow-dark">FAQ</p>
          <h1 class="h-display mt-5 text-white">Questions buyers ask about CCorex.</h1>
          <p class="lead-dark mt-6">Straight answers about the platform, the apps, ARIVU AI, security and how pricing and onboarding work.</p>
        </div>
        <nav aria-label="FAQ topics" class="mt-10">
          <ul class="flex flex-wrap gap-2">
            <li v-for="g in groups" :key="g.id">
              <a :href="`#${g.id}`" class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-ink-100 hover:bg-white/10"><i :class="g.icon" class="text-cyan-400" aria-hidden="true"></i>{{ g.title }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <section class="section">
      <div class="container-site space-y-16">
        <div v-for="g in groups" :id="g.id" :key="g.id" class="grid scroll-mt-24 gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <span class="icon-tile" :class="g.ai ? 'bg-ai-50 text-ai-700' : ''"><i :class="g.icon" aria-hidden="true"></i></span>
            <h2 class="mt-4 text-2xl font-bold">{{ g.title }}</h2>
            <p class="mt-2 text-sm text-ink-600">{{ g.text }}</p>
            <NuxtLink v-if="g.link" :to="g.link.to" class="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-900">{{ g.link.label }} <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></NuxtLink>
          </div>
          <UiFaqList :items="g.items" :schema="false" />
        </div>
      </div>
    </section>

    <section class="section-tight bg-ink-50">
      <div class="container-site"><div class="grid gap-6 rounded-3xl border border-ink-100 bg-white p-8 shadow-card lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 class="text-2xl font-bold">Still have a question?</h2>
          <p class="mt-2 text-ink-600">Email <a href="mailto:admin@newhamtech.com" class="font-semibold text-brand-700 hover:text-brand-900">admin@newhamtech.com</a> or ask us during a live demo.</p>
        </div>
        <div class="flex flex-wrap gap-3 lg:justify-end">
          <NuxtLink to="/contact" class="btn-primary">Book a demo</NuxtLink>
          <NuxtLink to="/resources" class="btn-secondary">Resources</NuxtLink>
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
  title: 'FAQ: platform, apps, AI, security & pricing',
  description: 'Answers about CCorex: one sign-in across apps, DeepCost, DeepTrack and DeepHR, ARIVU AI, data security, Singapore and India payroll, pricing and onboarding.',
  ogTitle: 'CCorex FAQ',
  ogDescription: 'Straight answers about the CCorex platform, apps, ARIVU AI, security, pricing and onboarding.'
})
useHead({ link: [{ rel: 'canonical', href: config.public.siteUrl + '/faq' }] })

const groups = [
  {
    id: 'platform', title: 'Platform', icon: 'fa-solid fa-layer-group', text: 'How the apps fit together.', link: { label: 'How the platform works', to: '/platform' },
    items: [
      { q: 'What is CCorex?', a: 'CCorex is a multi-tenant business suite for engineering and construction contractors, mainly MEP and fire-protection firms in Singapore and India. One portal signs users in to DeepCost (tender estimating), DeepTrack (project and financial control), DeepHR (HR and payroll), DeepPlan (drawing take-off), Deep Drive (documents), PDF Editor (mark-up and signing) and the ARIVU AI assistant.' },
      { q: 'Do all the apps share one sign-in?', a: 'Yes. Users sign in once at dash.ccorex.com, see a tile for each app they are entitled to, and open any app without signing in again. Your organisation admin adds users once — or bulk-uploads them from Excel — and they are created in each assigned app.' },
      { q: 'How do we get started?', a: 'Self sign-up creates your organisation and its first admin user. The admin then manages the organisation profile, users, roles per app and app settings, including connectors such as Zoho Books.' },
      { q: 'Can we manage more than one company?', a: 'Each organisation is its own tenant with its own users and settings. A group with entities in Singapore and India, for example, uses one organisation per entity. Multi-organisation management is part of the Enterprise plan.' },
      { q: 'Is data shared between apps today?', a: 'The apps share sign-in and users today, and ARIVU can answer questions across all of them. Passing records from one app to the next — such as a won tender becoming a DeepTrack project without re-entry — is on the roadmap.' },
      { q: 'Is CCorex cloud-based?', a: 'Yes. CCorex runs in the cloud, so there are no servers to install and no hardware to buy.' }
    ]
  },
  {
    id: 'apps', title: 'Apps', icon: 'fa-solid fa-grip', text: 'What each app does.', link: { label: 'Explore all apps', to: '/products' },
    items: [
      { q: 'What does DeepCost do?', a: 'DeepCost takes an MEP or building-services contractor from a tender received to a priced tender submission: customer and opportunity, tender documents with an AI tender summary, area schedule, an order per trade, material take-off per area, and the priced Form of Tender (FOT) — line by line or with FOT AI on the client’s BOQ PDF. Seeded trades are Fire Protection, ACMV, A&A and ELV, priced in SGD.' },
      { q: 'What is a Form of Tender (FOT)?', a: 'The priced schedule submitted with a tender. In DeepCost, the FOT goes through the same submit, approve and complete steps as the area schedule and MTO, and its export serves as the quotation.' },
      { q: 'What does DeepTrack do?', a: 'DeepTrack runs a contractor’s projects from contract to profit: budgets, client progress claims, manpower and timesheets, procurement from purchase request to purchase order, delivery and invoice, accounts payable with invoice matching, and month-end cost allocation. It works in SGD with 9% GST and can link to Zoho Books.' },
      { q: 'What does DeepHR do?', a: 'DeepHR is the HR system of record: people and organisation structure, an approvals engine, leave, face and GPS attendance, claims, payroll with Singapore or India statutory rules, payslips filed to Documents, reports with schedules, policies, a helpdesk and an optional tasks module. Employees can install it on a phone as an app.' },
      { q: 'Does face-recognition attendance need special devices?', a: 'No. Employees check in and out on their own phone: the face must match, the phone’s GPS must be inside the site radius, and the record is marked on time or late. There is no kiosk mode. Offline punches are queued and re-verified when the phone reconnects.' },
      { q: 'Which payroll rules does DeepHR support?', a: 'Singapore: CPF (including graduated rates for new PRs), SDL, self-help group funds (CDAC, SINDA, MBMF, ECF), MOM proration and overtime rules. India: EPF, ESI, Professional Tax, TDS and statutory filings such as EPF ECR, ESIC, PT return, 24Q and Form 16 Part B. A Singapore bank payment file is not available yet.' },
      { q: 'What are Deep Drive and PDF Editor?', a: 'Deep Drive is your organisation’s document store (folders, uploads, inline viewing, storage tracking), and PDF Editor marks up and signs PDFs (text, signatures, images, overlays, split and merge). Both are included with every active subscription.' }
    ]
  },
  {
    id: 'ai', title: 'AI', icon: 'fa-solid fa-wand-magic-sparkles', ai: true, text: 'ARIVU AI, DeepCost AI and DeepPlan AI.', link: { label: 'Meet ARIVU AI', to: '/products/arivu-ai' },
    items: [
      { q: 'What is ARIVU?', a: 'ARIVU — Tamil for “intelligence” — is the AI assistant in every CCorex app. It answers questions from your own organisation’s data across DeepCost, DeepTrack, DeepHR, DeepPlan and Deep Drive, produces charts and PDF or Excel exports, searches and summarises documents, and reads attachments such as drawings and scanned PDFs.' },
      { q: 'Can ARIVU change our data?', a: 'No. ARIVU is read-only. It looks things up, summarises and exports; it never creates, edits or approves records. Every lookup is limited to your own organisation, and chat messages are encrypted at rest.' },
      { q: 'What AI is in DeepCost?', a: 'An AI tender summary that reads the uploaded tender documents and fills a predefined set of fields, and FOT AI, which finds the quantity and amount columns on the client’s BOQ PDF and overlays editable figures. Both outputs can be edited and exported.' },
      { q: 'Is DeepPlan’s AI take-off live?', a: 'Not in production yet. DeepPlan’s drawing upload, scale calibration, room and measurement editor, rate library and BOQ generation are live. AI room take-off and symbol detection (23 electrical and fire symbol classes) are in early access while they are rebuilt.' },
      { q: 'Which AI models does CCorex use?', a: 'ARIVU runs on enterprise-grade large language models, set up so it answers only from your own organisation’s CCorex data and never changes your records. DeepPlan’s take-off uses its own room-segmentation, OCR and symbol-detection models.' },
      { q: 'Is ARIVU included in our plan?', a: 'Yes. ARIVU is included in every suite plan, with usage budgets per organisation. On Business and Enterprise it answers across all your apps.' }
    ]
  },
  {
    id: 'security', title: 'Security & data', icon: 'fa-solid fa-shield-halved', text: 'How your data is protected.', link: { label: 'Security on the platform page', to: '/platform' },
    items: [
      { q: 'How is our data protected?', a: 'Personal and configuration fields — names, emails, phone numbers, bank and identity details, connector credentials and chat messages — are encrypted in the database, and passwords are hashed. DeepTrack finance actions, DeepHR changes and period unlocks are written to audit logs.' },
      { q: 'Is our data separated from other customers?', a: 'Yes. Every record belongs to one organisation, and users only ever see their own organisation’s data. DeepCost also enforces this in the database itself.' },
      { q: 'Can we control what each person sees?', a: 'Yes. The portal decides which apps a user may open, and each app decides what they may do inside it through its own roles and permissions — for example, DeepTrack’s screen-by-role matrix, or DeepCost’s permissions per screen, stage and AI feature.' },
      { q: 'What happens when someone leaves?', a: 'Disable them once in the portal and they are disabled in the apps too.' },
      { q: 'How do you handle personal data?', a: 'We use personal data only for the purpose it was given and handle it in line with Singapore’s Personal Data Protection Act (PDPA). Email admin@newhamtech.com with any data request.' }
    ]
  },
  {
    id: 'pricing', title: 'Pricing & onboarding', icon: 'fa-solid fa-tags', text: 'Plans, quotes and getting started.', link: { label: 'See plans', to: '/pricing' },
    items: [
      { q: 'How is CCorex priced?', a: 'Per-user pricing (per employee for DeepHR). Choose Essentials, Business or Enterprise, or a single app tier, and we send a tailored quote.' },
      { q: 'Do we have to buy the whole suite?', a: 'No. Essentials starts with one flagship app — DeepCost, DeepTrack or DeepHR — and you can add apps as you grow.' },
      { q: 'How do we get pricing?', a: 'Pricing is shared on request. Email admin@newhamtech.com or book a demo and we will prepare a quote for your team.' },
      { q: 'What does onboarding involve?', a: 'Discovery of how you work today, configuration of your organisation, roles and approvals, import of data such as your price library, users and employees from Excel templates, role-based training, and ongoing support.' },
      { q: 'Who provides support?', a: 'CCorex is built and supported by Newham Technological Solutions in Singapore. Every app has a support contact form. Enterprise plans include priority support and onboarding.' }
    ]
  }
]

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: groups.flatMap((g) => g.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })))
    })
  }]
})
</script>
