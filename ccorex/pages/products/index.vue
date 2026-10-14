<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-14 pb-20 pt-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:pt-20">
        <div>
          <p class="eyebrow-dark">Products</p>
          <h1 class="h-display mt-5 text-white">The CCorex suite</h1>
          <p class="lead-dark mt-6 max-w-xl">Tender estimating, project delivery, HR and payroll, drawing take-off and documents — separate apps on one platform at dash.ccorex.com, with one sign-in, one set of users, roles per app, and ARIVU AI in every app.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-accent">Book a live demo <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <a href="#compare" class="btn-ghost-dark">Which app do I need?</a>
          </div>
          <ul class="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6 text-sm">
            <li v-for="g in groups" :key="g.id"><p class="font-semibold text-white">{{ g.apps.length }} {{ g.short }}</p><p class="text-ink-300">{{ g.names }}</p></li>
          </ul>
        </div>
        <div class="pb-6"><UiPlatformDiagram /></div>
      </div>
    </section>

    <!-- App groups -->
    <section class="section">
      <div class="container-site space-y-16">
        <div v-for="g in groups" :key="g.id" :class="g.apps.length === 2 ? 'grid gap-6 lg:grid-cols-3 lg:gap-4' : ''">
          <div :class="g.apps.length === 2 ? 'lg:pr-8 lg:pt-2' : 'flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'">
            <div>
              <p :class="g.ai ? 'chip-ai' : 'eyebrow'"><i v-if="g.ai" class="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>{{ g.eyebrow }}</p>
              <h2 class="mt-3 text-2xl font-bold sm:text-3xl">{{ g.title }}</h2>
            </div>
            <p class="max-w-md text-sm text-ink-600" :class="g.apps.length === 2 ? 'mt-3 text-base' : ''">{{ g.text }}</p>
          </div>
          <div :class="g.apps.length === 2 ? 'lg:col-span-2' : 'mt-6'"><UiAppGrid :only="g.apps" :class="g.apps.length === 2 ? 'lg:!grid-cols-2' : ''" /></div>
        </div>
      </div>
    </section>

    <!-- Portal -->
    <section class="section bg-ink-50">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="The portal" title="Every app behind one front door" lead="Your team signs in once at dash.ccorex.com and sees a tile for each app they are entitled to. Click a tile and the app opens in a new tab, already signed in." />
          <ul class="mt-8 space-y-4">
            <li v-for="p in portalPoints" :key="p.title" class="flex gap-3">
              <span class="icon-tile h-9 w-9 shrink-0 text-sm"><i :class="p.icon" aria-hidden="true"></i></span>
              <div><p class="font-semibold text-ink-900">{{ p.title }}</p><p class="text-sm text-ink-600">{{ p.text }}</p></div>
            </li>
          </ul>
          <NuxtLink to="/platform" class="mt-8 inline-flex font-semibold text-brand-700 hover:text-brand-900">How the platform works <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></NuxtLink>
        </div>
        <UiReveal>
          <UiBrowserFrame src="/images/product/ccorex-portal.webp" alt="CCorex portal for a demo organisation with tiles for DeepCost, DeepTrack, DeepHR, Deep Drive, PDF Editor and DeepAssist, an attendance card and the helpdesk and AI bubble" url="dash.ccorex.com" caption="The CCorex portal, shown for a demo organisation." />
        </UiReveal>
      </div>
    </section>

    <!-- Comparison -->
    <section id="compare" class="section scroll-mt-20">
      <div class="container-site">
        <UiSectionHeader eyebrow="Compare" title="Which app solves what" lead="Start from the job you need done. Each app can be used on its own, and they all share the same login, users and roles." />
        <div class="mt-10 overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-card">
          <table class="w-full min-w-[640px] text-left text-sm">
            <caption class="sr-only">Jobs to be done and the CCorex app that handles each one</caption>
            <thead class="border-b border-ink-100 bg-ink-50/70 text-xs uppercase tracking-wider text-ink-500">
              <tr>
                <th scope="col" class="px-5 py-3.5 font-semibold">If you need to…</th>
                <th scope="col" class="px-5 py-3.5 font-semibold">Use</th>
                <th scope="col" class="hidden px-5 py-3.5 font-semibold md:table-cell">Who uses it</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-ink-100">
              <tr v-for="r in jobs" :key="r.job" class="align-top">
                <th scope="row" class="px-5 py-4 font-medium text-ink-900">{{ r.job }}</th>
                <td class="px-5 py-4">
                  <NuxtLink :to="`/products/${r.slug}`" class="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-900">
                    <span class="flex h-7 w-7 items-center justify-center rounded-lg text-xs" :class="appOf(r.slug).color"><i :class="appOf(r.slug).icon" aria-hidden="true"></i></span>{{ appOf(r.slug).name }}
                  </NuxtLink>
                </td>
                <td class="hidden px-5 py-4 text-ink-600 md:table-cell">{{ r.who }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Unified today, connected tomorrow -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Unified today, connected tomorrow" title="One user base now. Full integration next." lead="CCorex already unifies sign-in and users across every app, and ARIVU already answers across them. Passing records from one app to the next is on the roadmap." />
        <div class="mt-12 grid gap-4 lg:grid-cols-2">
          <div class="card">
            <p class="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800"><i class="fa-solid fa-circle-check" aria-hidden="true"></i>Available today</p>
            <ul class="mt-6 space-y-5">
              <li v-for="t in today" :key="t.title" class="flex gap-3">
                <span class="icon-tile h-9 w-9 shrink-0 text-sm"><i :class="t.icon" aria-hidden="true"></i></span>
                <div><p class="font-semibold text-ink-900">{{ t.title }}</p><p class="text-sm text-ink-600">{{ t.text }}</p></div>
              </li>
            </ul>
          </div>
          <div class="card border-dashed">
            <p class="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200"><i class="fa-solid fa-road" aria-hidden="true"></i>On the roadmap</p>
            <ul class="mt-6 space-y-5">
              <li v-for="t in roadmap" :key="t.title" class="flex gap-3">
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-sm text-amber-700"><i :class="t.icon" aria-hidden="true"></i></span>
                <div><p class="font-semibold text-ink-900">{{ t.title }}</p><p class="text-sm text-ink-600">{{ t.text }}</p></div>
              </li>
            </ul>
          </div>
        </div>
        <p class="mt-6 text-center text-sm text-ink-500">Roadmap items are plans, not current features. Ask us in your demo for the latest status.</p>
      </div>
    </section>

    <UiTrustStrip />

    <UiCtaBand title="Find the right mix of apps" lead="Book a 30-minute live demo. Tell us how you estimate, deliver and pay your people, and we will show you the CCorex apps that fit." />
  </div>
</template>

<script setup lang="ts">
import { apps, appBySlug } from '~/data/apps'

const config = useRuntimeConfig()
const path = '/products'
useSeoMeta({
  title: 'CCorex products — construction software suite',
  description: 'Explore the CCorex suite: DeepCost, DeepTrack and DeepHR, plus ARIVU AI and DeepPlan AI, with Deep Drive and PDF Editor coming soon — one sign-in.',
  ogTitle: 'The CCorex suite — construction apps on one platform',
  ogDescription: 'MEP tender estimation, project delivery, HR & payroll and drawing take-off — one sign-in, with ARIVU AI in every app.'
})
useHead({
  link: [{ rel: 'canonical', href: config.public.siteUrl + path }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'CCorex suite',
      itemListElement: apps.map((a, i) => ({ '@type': 'ListItem', position: i + 1, name: a.name, url: `${config.public.siteUrl}/products/${a.slug}` }))
    })
  }]
})

const appOf = (slug: string) => appBySlug(slug)!

const groups = [
  { id: 'flagship', eyebrow: 'Flagship apps', short: 'flagship', title: 'Estimate, deliver and pay your people', text: 'The three core apps that run a construction business, from tender to payroll.', apps: ['deepcost', 'deeptrack', 'deephr'], names: 'Cost · Track · HR' },
  { id: 'ai', eyebrow: 'AI', short: 'AI', ai: true, title: 'AI that works inside your workflow', text: 'A read-only assistant in every app that answers from your own data, and drawing take-off with AI room and symbol detection in early access — with people reviewing every number.', apps: ['arivu-ai', 'deepplan-ai'], names: 'ARIVU · DeepPlan' },
  { id: 'supporting', eyebrow: 'Supporting apps', short: 'supporting', title: 'Documents and drawings — coming soon', text: 'Store, mark up and sign project documents on the same platform. Both apps are in development and will be included with every active subscription.', apps: ['deep-drive', 'pdf-editor'], names: 'Drive · PDF Editor' }
]

const jobs = [
  { job: 'Price an MEP tender, from tender documents to a priced Form of Tender', slug: 'deepcost', who: 'Sales, estimators, estimation managers' },
  { job: 'Measure drawings and build a priced BOQ (AI take-off in early access)', slug: 'deepplan-ai', who: 'Estimators, QS teams' },
  { job: 'Control project budgets, procurement and margin', slug: 'deeptrack', who: 'Project managers, buyers, directors' },
  { job: 'Match vendor invoices, bill client claims and close the month', slug: 'deeptrack', who: 'Finance, commercial teams' },
  { job: 'Run attendance, leave and Singapore or India payroll', slug: 'deephr', who: 'HR, managers and every employee' },
  { job: 'Ask questions of your own data, with charts and exports', slug: 'arivu-ai', who: 'Every CCorex user' },
  { job: 'Store drawings, submittals and project documents (coming soon)', slug: 'deep-drive', who: 'All users' },
  { job: 'Mark up and sign PDFs (coming soon)', slug: 'pdf-editor', who: 'Office and project staff' }
]

const portalPoints = [
  { icon: 'fa-solid fa-key', title: 'Sign in once', text: 'Email and password at dash.ccorex.com; no separate login per app.' },
  { icon: 'fa-solid fa-table-cells-large', title: 'A tile per entitled app', text: 'A tile shows when the app is assigned to you and your organisation’s package switches it on.' },
  { icon: 'fa-solid fa-arrow-up-right-from-square', title: 'Opens already signed in', text: 'Each app opens in a new tab with your role in that app.' },
  { icon: 'fa-solid fa-headset', title: 'Helpdesk and attendance', text: 'A helpdesk bubble that emails CCorex support, and face check-in and check-out from the portal.' }
]
const today = [
  { icon: 'fa-solid fa-key', title: 'One sign-in', text: 'Sign in once at dash.ccorex.com and open any app from its tile, already signed in.' },
  { icon: 'fa-solid fa-users', title: 'One user base', text: 'Your organisation admin adds a user once — or bulk-uploads from Excel — and they are created in each assigned app.' },
  { icon: 'fa-solid fa-user-shield', title: 'Roles per app', text: 'Roles are defined per organisation and per app; each app decides what a user may do inside it.' },
  { icon: 'fa-solid fa-wand-magic-sparkles', title: 'ARIVU across the apps', text: 'One read-only assistant that answers from your data in every app.' }
]
const roadmap = [
  { icon: 'fa-solid fa-address-book', title: 'Connected CRM modules', text: 'Customers and contacts shared and synced across apps.' },
  { icon: 'fa-solid fa-arrow-right-arrow-left', title: 'Cross-app data flow', text: 'Won tender → project → payroll, without re-entry.' },
  { icon: 'fa-solid fa-folder-open', title: 'Deep Drive & PDF Editor', text: 'Document storage, mark-up and signing — in development, coming soon.' }
]
</script>
