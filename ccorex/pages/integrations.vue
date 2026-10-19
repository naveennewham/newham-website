<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-14 pb-24 pt-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:pt-24">
        <div>
          <p class="eyebrow-dark">Integrations</p>
          <h1 class="h-display mt-5 text-white">Connected where it counts today. More on the way.</h1>
          <p class="lead-dark mt-6 max-w-xl">Every CCorex app already shares one sign-in and one user base, and ARIVU answers across them. DeepTrack links to Zoho Books for vendors and purchase orders, and every app imports and exports Excel. Passing records between apps is on the roadmap — and labelled that way.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-accent">Ask about your systems <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <a href="#roadmap" class="btn-ghost-dark">See the roadmap</a>
          </div>
        </div>
        <div class="rounded-3xl border border-white/10 bg-brand-950/60 px-6 py-12">
          <UiPlatformDiagram />
        </div>
      </div>
    </section>

    <!-- Available today -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="Available today" title="What connects now" lead="These connections are part of the product today." />
        <div class="mt-12 grid gap-5 lg:grid-cols-2">
          <div v-for="t in today" :key="t.title" class="card flex flex-col">
            <div class="flex items-start justify-between gap-4">
              <span class="icon-tile"><i :class="t.icon" aria-hidden="true"></i></span>
              <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700"><i class="fa-solid fa-circle-check" aria-hidden="true"></i>Available</span>
            </div>
            <h3 class="mt-5 text-xl font-bold">{{ t.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ t.text }}</p>
            <ul class="mt-5 space-y-2 text-sm text-ink-700">
              <li v-for="b in t.points" :key="b" class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-brand-600" aria-hidden="true"></i>{{ b }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Zoho flow -->
    <section class="section bg-ink-50">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="DeepTrack → Zoho Books" title="From purchase request to your books" lead="Each tenant can link Zoho Books in DeepTrack for vendors and purchase orders. Connector credentials are stored encrypted and can be tested from the settings screen. Month-end produces a journal CSV for your ledger." />
          <div class="mt-8"><UiStepFlow :steps="zohoFlow" /></div>
        </div>
        <UiBrowserFrame src="/images/product/deeptrack-reports.webp" alt="DeepTrack reports across projects, budgets, procurement and claims" url="deeptrack.app / reports" />
      </div>
    </section>

    <!-- Plan-level connectivity -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="Built in" title="Data in and out of each app" lead="Imports, exports and files each app produces today. Lists and reports export to Excel and PDF throughout. We confirm the exact scope for your systems during scoping." />
        <div class="relative mt-10 overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-card">
          <table class="w-full min-w-[620px] text-sm">
            <caption class="sr-only">Imports and exports by app</caption>
            <thead class="bg-ink-50 text-xs uppercase tracking-wider text-ink-500">
              <tr><th scope="col" class="px-5 py-3 text-left font-semibold">App</th><th scope="col" class="px-5 py-3 text-left font-semibold">Imports, exports and connectors</th></tr>
            </thead>
            <tbody class="divide-y divide-ink-100">
              <tr v-for="r in enterprise" :key="r.app">
                <th scope="row" class="whitespace-nowrap px-5 py-4 text-left font-semibold text-ink-900"><i :class="r.icon" class="mr-2 text-brand-600" aria-hidden="true"></i>{{ r.app }}</th>
                <td class="px-5 py-4"><ul class="flex flex-wrap gap-2"><li v-for="x in r.items" :key="x" class="chip">{{ x }}</li></ul></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Roadmap -->
    <section id="roadmap" class="section scroll-mt-20 bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="On the roadmap" title="Unified today, connected tomorrow" lead="These are planned and not yet available. We will tell you what is in the current release when you book a demo." />
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="r in roadmap" :key="r.title" class="flex h-full flex-col rounded-2xl border border-dashed border-ink-300 bg-white p-6">
            <div class="flex items-center justify-between">
              <span class="icon-tile" :class="r.ai ? 'bg-ai-50 text-ai-700' : 'bg-ink-100 text-ink-600'"><i :class="r.icon" aria-hidden="true"></i></span>
              <span class="rounded-full bg-ink-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-600">Roadmap</span>
            </div>
            <h3 class="mt-5 text-base font-semibold">{{ r.title }}</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-ink-600">{{ r.text }}</p>
          </li>
        </ul>
        <p class="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-600">Enterprise customers get priority access to new integrations as they arrive. <NuxtLink to="/pricing" class="font-semibold text-brand-700 hover:text-brand-900">Compare plans</NuxtLink></p>
      </div>
    </section>

    <UiCtaBand title="Tell us what you need to connect" lead="Share your accounting, CRM and other systems with us. We will tell you honestly what works today and what is planned." primary-label="Talk to our team" secondary-label="See the platform" secondary-to="/platform" />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Integrations: SSO, Zoho Books, Excel & roadmap',
  description: 'CCorex apps share one sign-in and user base today, DeepTrack links to Zoho Books, and every app imports and exports Excel. Cross-app data flow is on the roadmap.',
  ogTitle: 'CCorex integrations — available today and on the roadmap',
  ogDescription: 'Shared sign-in and users across every app, a DeepTrack link to Zoho Books, Excel imports and exports, and a clearly labelled roadmap.'
})
useHead({ link: [{ rel: 'canonical', href: config.public.siteUrl + '/integrations' }] })

const today = [
  {
    icon: 'fa-solid fa-layer-group', title: 'The CCorex platform, across every app',
    text: 'DeepCost, DeepTrack, DeepHR, DeepPlan and ARIVU, Deep Drive and PDF Editor run on the same platform today.',
    points: ['One sign-in at dash.ccorex.com, with a signed token every app checks', 'Users created in the portal are provisioned into each assigned app', 'Roles per organisation and per app', 'ARIVU reads across the apps, read-only']
  },
  {
    icon: 'fa-solid fa-book', title: 'Zoho Books link from DeepTrack',
    text: 'Each tenant can link Zoho Books for DeepTrack vendors and purchase orders, configured in the portal’s app settings.',
    points: ['Connector credentials stored encrypted', 'Test the connection from the settings screen', 'Journal CSV from month-end and CSV import of general-ledger costs']
  }
]
const zohoFlow = [
  { title: 'Purchase request', text: 'Raised against an approved budget.' },
  { title: 'Purchase order', text: 'Issued to a vendor from your Zoho Books-linked list.' },
  { title: 'Month-end', text: 'Journal CSV for your ledger.' }
]
const enterprise = [
  { app: 'DeepCost', icon: 'fa-solid fa-calculator', items: ['Excel master-data upload', 'Area schedule Excel import', 'Area, component & FOT reports (Excel, PDF)', 'Email at each stage'] },
  { app: 'DeepTrack', icon: 'fa-solid fa-diagram-project', items: ['Zoho Books link', 'GL cost CSV import', 'Journal CSV', 'Bulk timesheets', 'Scheduled reports'] },
  { app: 'DeepHR', icon: 'fa-solid fa-user-group', items: ['Excel bulk upload (with dry run)', 'Record-mode payroll upload', 'Reports to Excel or CSV'] },
  { app: 'ARIVU AI', icon: 'fa-solid fa-wand-magic-sparkles', items: ['Charts', 'PDF & Excel exports', 'Attachments incl. scanned PDFs'] }
]
const roadmap = [
  { icon: 'fa-solid fa-address-book', title: 'Shared customers & contacts', text: 'Customers and contacts shared across apps.' },
  { icon: 'fa-solid fa-right-left', title: 'Cross-app data flow', text: 'Won tender → project → payroll, without re-entry.' },
  { icon: 'fa-solid fa-plug', title: 'Deeper integrations', text: 'Extend to your accounting, CRM and other systems.' },
  { icon: 'fa-solid fa-building-columns', title: 'Singapore bank payment file', text: 'A bank payment file for Singapore payroll.' }
]
</script>
