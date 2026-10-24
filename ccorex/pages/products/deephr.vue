<template>
  <div>
    <UiProductHero tour="deephr" tour-duration="0:29"
      slug="deephr"
      :points="heroPoints"
      screenshot="/images/product/deephr-dashboard.webp"
      screenshot-alt="DeepHR HR dashboard with total employees, pending leave, present and absent today, an attendance donut, a weekly attendance trend, pending leave requests and expiring work passes"
      url="deephr.app / dashboard"
    >
      <template #title>HR and payroll software for Singapore.</template>
      <template #lead>DeepHR is HR and payroll software you can use on its own or with the rest of CCorex. Face and GPS attendance on each employee’s own phone, leave, claims and timesheets — flowing into payroll with CPF, SDL and SHG worked out. Self-service for every employee, control for HR.</template>
    </UiProductHero>

    <!-- Section nav -->
    <nav aria-label="On this page" class="border-b border-ink-100 bg-white">
      <ul class="container-site flex gap-1 overflow-x-auto py-2 text-sm">
        <li v-for="l in pageNav" :key="l.id"><a :href="`#${l.id}`" class="block whitespace-nowrap rounded-full px-3 py-1.5 font-medium text-ink-600 hover:bg-ink-50 hover:text-ink-900">{{ l.label }}</a></li>
      </ul>
    </nav>

    <!-- Problem -->
    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="The problem" title="HR runs on too many disconnected tools" lead="Leave in one app, claims on paper, attendance on a punch card, payroll in spreadsheets, approvals lost in email. It’s slow, error-prone and impossible to see clearly." />
          <p class="mt-6 rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">The result: wasted hours, payroll mistakes, compliance risk and frustrated employees.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" title="The employee lifecycle, in one app" lead="From the employee record to the payslip: approved attendance and leave flow into payroll, and every request runs through one approvals engine." />
        <div class="mt-12"><UiStepFlow :steps="steps" /></div>
      </div>
    </section>

    <!-- Two experiences -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Two experiences, one system" title="Self-service for employees. Control for HR." />
        <div class="mt-12 grid gap-8 lg:grid-cols-2">
          <div v-for="v in views" :key="v.label">
            <p class="eyebrow">{{ v.label }}</p>
            <ul class="mt-4 space-y-3">
              <li v-for="b in v.bullets" :key="b" class="flex gap-3 text-ink-700"><i class="fa-solid fa-circle-check mt-1 text-brand-600" aria-hidden="true"></i>{{ b }}</li>
            </ul>
            <div class="mt-6"><UiBrowserFrame :src="v.src" :alt="v.alt" :url="v.url" aspect="16/10" /></div>
          </div>
        </div>
      </div>
    </section>

    <!-- FaceReg check-in -->
    <section id="attendance" class="section scroll-mt-20 bg-ink-50">
      <div class="container-site">
        <UiSectionHeader eyebrow="Face + GPS attendance" title="Check in on the employee’s own phone — no kiosk, no hardware" lead="FaceReg verifies every check-in and check-out by face and location, and holds the master record of times. DeepHR adds HR’s review and turns approved time into payable hours." />
        <UiReveal class="mt-12">
          <DemoDeepHrFaceCheckin />
        </UiReveal>
        <div class="mt-12 grid gap-4 lg:grid-cols-3">
          <div class="card">
            <span class="icon-tile"><i class="fa-solid fa-list-check" aria-hidden="true"></i></span>
            <h3 class="mt-5 text-lg font-semibold">The rules, in order</h3>
            <ol class="mt-4 list-decimal space-y-2 pl-5 text-sm text-ink-700">
              <li v-for="r in checkinRules" :key="r">{{ r }}</li>
            </ol>
          </div>
          <div class="card">
            <span class="icon-tile"><i class="fa-solid fa-signal" aria-hidden="true"></i></span>
            <h3 class="mt-5 text-lg font-semibold">No signal on site? It still works</h3>
            <p class="mt-4 text-sm leading-relaxed text-ink-700">The phone checks the face and site radius locally and queues the punch. When it reconnects, FaceReg re-verifies each punch in capture order and applies it once.</p>
            <p class="mt-3 text-sm leading-relaxed text-ink-700">Punches over 72 hours old are refused; over 24 hours are accepted but flagged for HR.</p>
          </div>
          <div class="card">
            <span class="icon-tile"><i class="fa-solid fa-user-check" aria-hidden="true"></i></span>
            <h3 class="mt-5 text-lg font-semibold">HR approves every session</h3>
            <p class="mt-4 text-sm leading-relaxed text-ink-700">Each completed session becomes a pending approval. HR approves, rejects, edits times or adds manual records, singly or in bulk — edits are written back to FaceReg so both agree.</p>
            <p class="mt-3 text-sm leading-relaxed text-ink-700">Only approved days reach payroll; rejected days count as absent. Open sessions auto check-out at the site’s cut-off.</p>
          </div>
        </div>
        <p class="mt-6 text-sm text-ink-500">Employees register their face once (three samples, then locked until HR unlocks it). Every punch comes from the employee’s own signed-in phone — there is no shared kiosk mode.</p>
      </div>
    </section>

    <!-- Product tour -->
    <section id="tour" class="section scroll-mt-20">
      <div class="container-site">
        <UiSectionHeader eyebrow="Product tour" title="See the screens HR and employees use every day" lead="Real DeepHR screens from a demo organisation, grouped by what you need to run: people and approvals, leave, attendance and payroll." />
        <div role="tablist" aria-label="Product tour area" class="mt-10 flex gap-2 overflow-x-auto pb-1">
          <button
            v-for="(g, i) in tourGroups"
            :id="`tour-group-${i}`"
            :key="g.label"
            type="button"
            role="tab"
            :aria-selected="tourGroup === i"
            aria-controls="tour-group-panel"
            class="inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
            :class="tourGroup === i ? 'border-brand-700 bg-brand-700 text-white' : 'border-ink-200 bg-white text-ink-700 hover:border-brand-300'"
            @click="tourGroup = i"
          >
            <i :class="g.icon" class="text-xs" aria-hidden="true"></i>{{ g.label }}
          </button>
        </div>
        <div id="tour-group-panel" role="tabpanel" :aria-labelledby="`tour-group-${tourGroup}`" class="mt-8">
          <UiScreenshotTabs :key="tourGroup" :tabs="tourGroups[tourGroup]!.tabs" :label="`DeepHR ${tourGroups[tourGroup]!.label} screens`" />
        </div>
        <p class="mt-6 text-xs text-ink-500">Screens from a demo organisation; personal data redacted.</p>
      </div>
    </section>

    <!-- Approvals engine -->
    <section id="approvals" class="section scroll-mt-20 bg-ink-50">
      <div class="container-site grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <UiSectionHeader eyebrow="Approvals engine" title="One engine for leave, claims, HR letters and timesheets" lead="HR defines the chain once. Every request then follows it, with a full trail for HR and a live status for the employee." />
          <ul class="mt-8 space-y-4">
            <li v-for="a in approvalPoints" :key="a.title" class="flex gap-3">
              <i class="fa-solid fa-circle-check mt-1 text-brand-600" aria-hidden="true"></i>
              <div><p class="font-semibold text-ink-900">{{ a.title }}</p><p class="text-sm leading-relaxed text-ink-600">{{ a.text }}</p></div>
            </li>
          </ul>
        </div>
        <UiReveal>
          <figure class="rounded-2xl border border-ink-100 bg-white p-6 shadow-lift">
            <figcaption class="flex items-center justify-between gap-3">
              <span class="text-sm font-semibold text-ink-900">Example chain · Claim approvals</span>
              <span class="rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-600">Illustration</span>
            </figcaption>
            <ol class="mt-5 space-y-3">
              <li v-for="(l, i) in exampleChain" :key="l.level" class="relative flex items-center gap-4 rounded-xl border p-3.5" :class="l.rule ? 'border-dashed border-amber-300 bg-amber-50' : 'border-ink-100 bg-ink-50'">
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-sm font-bold" :class="l.rule ? 'bg-amber-100 text-amber-800' : 'bg-brand-700 text-white'">L{{ i + 1 }}</span>
                <span class="min-w-0 flex-1">
                  <span class="block text-sm font-semibold text-ink-900">{{ l.approver }}</span>
                  <span class="block text-xs text-ink-500">{{ l.type }}</span>
                </span>
                <span v-if="l.rule" class="hidden shrink-0 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-amber-800 ring-1 ring-amber-200 sm:inline">{{ l.rule }}</span>
              </li>
            </ol>
            <p class="mt-3 text-xs text-amber-800 sm:hidden">Level 3 added only when the claim is above a set amount.</p>
            <div class="mt-6 border-t border-ink-100 pt-5">
              <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">Request status</p>
              <div class="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
                <template v-for="(s, i) in requestStates" :key="s">
                  <span class="rounded-full bg-ink-100 px-2.5 py-1 font-medium text-ink-700">{{ s }}</span>
                  <i v-if="i < requestStates.length - 1" class="fa-solid fa-chevron-right text-[9px] text-ink-300" aria-hidden="true"></i>
                </template>
                <i class="fa-solid fa-chevron-right text-[9px] text-ink-300" aria-hidden="true"></i>
                <span class="rounded-full bg-emerald-100 px-2.5 py-1 font-semibold text-emerald-700">Approved</span>
                <span class="text-ink-400">/</span>
                <span class="rounded-full bg-rose-100 px-2.5 py-1 font-semibold text-rose-700">Rejected</span>
                <span class="text-ink-400">/</span>
                <span class="rounded-full bg-ink-100 px-2.5 py-1 font-medium text-ink-600">Cancelled</span>
              </div>
              <p class="mt-3 text-xs text-ink-500">At any step an approver can approve, reject or send the request back for clarification.</p>
            </div>
          </figure>
        </UiReveal>
      </div>
    </section>

    <!-- Payroll flow -->
    <section id="payroll" class="section scroll-mt-20">
      <div class="container-site">
        <UiSectionHeader eyebrow="Payroll" title="From approved time to filed payslips" lead="HR admins and the General Manager run payroll in three steps — select employees, choose pay items, review and finalise. Runs move from draft to finalised to paid." />
        <UiReveal class="mt-12"><UiFlowPipeline :steps="payrollFlow" :interval="2000" /></UiReveal>
        <div class="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="p in payrollPoints" :key="p.title" class="card">
              <span class="icon-tile"><i :class="p.icon" aria-hidden="true"></i></span>
              <h3 class="mt-4 text-base font-semibold">{{ p.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ p.text }}</p>
            </div>
          </div>
          <div>
            <UiChart
              type="bar"
              title="Payable hours: normal vs OT"
              subtitle="One employee on a 5.5-day week, after rounding and meal break"
              :data="hoursData"
              :legend="['Normal hours', 'OT hours']"
            />
            <p class="mt-3 text-xs leading-relaxed text-ink-500">How it works: times round down to 15 minutes, a 60-minute meal break comes off sessions over 6 hours, and hours split into normal and OT against the schedule. On a 5.5-day week Saturday has 4 normal hours; rest days and public holidays are all OT.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Jurisdictions -->
    <section id="compliance" class="section scroll-mt-20 bg-ink-50">
      <div class="container-site">
        <UiSectionHeader eyebrow="Built for Singapore" title="Statutory payroll for Singapore" lead="CPF, SDL and self-help group funds are worked out on every pay run, with MOM overtime rules and Singapore leave presets built in." />
        <UiReveal class="mt-12">
          <div class="relative overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-card">
            <table class="w-full min-w-[480px] text-left text-sm">
              <caption class="sr-only">Singapore payroll</caption>
              <thead>
                <tr class="border-b border-ink-100 bg-ink-50">
                  <th scope="col" class="w-40 px-5 py-4 font-semibold text-ink-500"><span class="sr-only">Area</span></th>
                  <th scope="col" class="px-5 py-4 font-display text-base font-bold text-ink-900">Singapore</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="r in jurisdictionRows" :key="r.area" class="border-b border-ink-100 align-top last:border-0">
                  <th scope="row" class="px-5 py-4 font-semibold text-ink-900">{{ r.area }}</th>
                  <td class="px-5 py-4 leading-relaxed text-ink-700" :class="r.sgMuted ? 'text-ink-500' : ''">{{ r.sg }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </UiReveal>
        <div class="mt-8 grid gap-4 md:grid-cols-2">
          <div v-for="c in compliance" :key="c.title" class="card">
            <span class="icon-tile"><i :class="c.icon" aria-hidden="true"></i></span>
            <h3 class="mt-5 text-lg font-semibold">{{ c.title }}</h3>
            <ul class="mt-4 grid gap-2.5 text-sm text-ink-700 sm:grid-cols-2">
              <li v-for="m in c.items" :key="m" class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-xs text-brand-600" aria-hidden="true"></i>{{ m }}</li>
            </ul>
          </div>
        </div>
        <p class="mt-6 text-sm text-ink-500">Leave presets are a starting point; HR can adjust types, entitlements and balances. Please check statutory rates with your payroll adviser.</p>
      </div>
    </section>

    <!-- Reports & more -->
    <section id="reports" class="section scroll-mt-20">
      <div class="container-site">
        <UiSectionHeader eyebrow="Reports and everyday HR" title="Reports on a schedule, and the rest of HR in the same app" lead="Save any report as a preset and have it emailed on a schedule for a relative period — for example, last month. Export to Excel or CSV." />
        <div class="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div class="card">
            <h3 class="flex items-center gap-2 text-lg font-semibold"><i class="fa-solid fa-chart-column text-brand-600" aria-hidden="true"></i>Reports</h3>
            <dl class="mt-5 divide-y divide-ink-100 text-sm">
              <div v-for="r in reports" :key="r.area" class="grid grid-cols-[90px_1fr] gap-3 py-3">
                <dt class="font-semibold text-ink-900">{{ r.area }}</dt>
                <dd class="text-ink-600">{{ r.items }}</dd>
              </div>
            </dl>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="chip"><i class="fa-regular fa-envelope text-brand-600" aria-hidden="true"></i>Scheduled email</span>
              <span class="chip"><i class="fa-solid fa-file-excel text-brand-600" aria-hidden="true"></i>Excel</span>
              <span class="chip"><i class="fa-solid fa-file-csv text-brand-600" aria-hidden="true"></i>CSV</span>
            </div>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <UiFeatureCard v-for="m in moreModules" :key="m.title" :icon="m.icon" :title="m.title" :text="m.text" />
          </div>
        </div>
        <div class="mt-6 grid gap-6 rounded-2xl border border-ink-100 bg-ink-50 p-6 lg:grid-cols-2">
          <div>
            <h3 class="text-base font-semibold">Secure by design</h3>
            <ul class="mt-3 grid gap-2 text-sm text-ink-700 sm:grid-cols-2">
              <li v-for="s in security" :key="s.title" class="flex gap-2.5"><i :class="s.icon" class="mt-1 text-xs text-brand-600" aria-hidden="true"></i>{{ s.title }}</li>
            </ul>
          </div>
          <div>
            <h3 class="text-base font-semibold">Connects with your tools</h3>
            <ul class="mt-3 flex flex-wrap gap-2">
              <li v-for="c in connects" :key="c" class="chip">{{ c }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Roles -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Built for your whole team" title="One system, tailored to every role" lead="Admins, employees and external HR each see what they need — from the field to the front office. Built for companies with both office and site workforces." />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UiFeatureCard v-for="r in roles" :key="r.title" :icon="r.icon" :title="r.title" :text="r.text" />
        </div>
      </div>
    </section>

    <!-- AI -->
    <section class="section relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>
      <div class="container-site relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <UiSectionHeader dark eyebrow="AI in DeepHR" lead="ARIVU, the CCorex AI assistant, sits inside DeepHR. HR and managers ask in plain language and get answers from their own organisation’s data.">
            <template #title>Everyday HR, with <span class="text-ai-gradient">ARIVU AI</span> to help</template>
          </UiSectionHeader>
          <ul class="mt-8 grid gap-4 sm:grid-cols-3">
            <li v-for="a in aiPoints" :key="a.title" class="rounded-2xl border border-white/10 bg-white/5 p-5">
              <i :class="a.icon" class="text-cyan-400" aria-hidden="true"></i>
              <p class="mt-3 font-semibold text-white">{{ a.title }}</p>
              <p class="mt-1 text-sm leading-relaxed text-ink-300">{{ a.text }}</p>
            </li>
          </ul>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/products/arivu-ai" class="btn-accent">Explore ARIVU AI</NuxtLink>
          </div>
        </div>
        <div class="rounded-2xl border border-white/10 bg-[#0b111c]/80 p-6 shadow-frame">
          <p class="flex items-center gap-3 text-sm font-semibold text-white">
            <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-ai-gradient"><i class="fa-solid fa-wand-magic-sparkles text-sm" aria-hidden="true"></i></span>
            Things your team asks ARIVU
          </p>
          <ul class="mt-5 space-y-3">
            <li v-for="q in arivuPrompts" :key="q" class="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm text-ink-100">
              <i class="fa-regular fa-comment mt-0.5 text-cyan-400" aria-hidden="true"></i>{{ q }}
            </li>
          </ul>
          <p class="mt-5 text-xs text-ink-300">Example questions. ARIVU reads, but never changes, your organisation's data — in DeepHR and every other CCorex app.</p>
        </div>
      </div>
    </section>

    <!-- Suite -->
    <section class="section">
      <div class="container-site">
        <div class="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <UiSectionHeader eyebrow="Part of the CCorex suite" title="One employee directory for the whole business" lead="DeepHR is one app on the CCorex platform. Your organisation admin adds a user once in the portal and they are created in each assigned app; disabling them disables them in the apps too." />
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-brand-100 bg-brand-50 p-5">
              <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">Available today</p>
              <ul class="mt-3 space-y-2 text-sm text-ink-700">
                <li v-for="t in suiteToday" :key="t" class="flex gap-2"><i class="fa-solid fa-check mt-1 text-xs text-brand-600" aria-hidden="true"></i>{{ t }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12"><UiAppGrid :exclude="['deephr']" /></div>
      </div>
    </section>

    <!-- Plans -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="DeepHR plans" title="Start small. Scale to enterprise." lead="Per-employee pricing that scales with your headcount. Tell us about your workforce and we will put together a tailored quote." />
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

    <!-- FAQ -->
    <section class="section-tight">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="DeepHR questions buyers ask" lead="Anything else? Email admin@newhamtech.com or book a demo." />
        <UiFaqList :items="faqs" />
      </div>
    </section>

    <SolutionEarlyAccess :items="['ir8a-ais', 'foreign-worker-levy', 'work-pass-alerts']" />

    <!-- Singapore solutions -->
    <section class="section-tight">
      <div class="container-site">
        <p class="eyebrow">DeepHR in Singapore</p>
        <ul class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="t in solutionLinks" :key="t.to">
            <NuxtLink :to="t.to" class="card flex h-full items-center gap-3 hover:border-brand-200"><i :class="t.icon" class="text-brand-600" aria-hidden="true"></i><span class="font-semibold">{{ t.name }}</span></NuxtLink>
          </li>
        </ul>
      </div>
    </section>
    <UiCtaBand
      title="Bring your whole HR into one place."
      lead="Give every employee self-service, give HR control, and connect attendance to Singapore payroll — without new hardware. See it with your own policies in a live demo."
      secondary-label="See all plans"
      secondary-to="/pricing"
    />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const pageUrl = config.public.siteUrl + '/products/deephr'
const description = 'DeepHR is HR and payroll software for Singapore SMEs: face and GPS attendance on staff phones, leave, claims, approvals, and CPF, SDL and SHG payroll.'

useSeoMeta({
  title: 'HR & Payroll Software Singapore — DeepHR',
  description,
  ogTitle: 'DeepHR — HR, attendance & payroll software, Singapore (CPF, SDL, SHG)',
  ogDescription: description
})
useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'DeepHR',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'HR and payroll',
      operatingSystem: 'Web',
      url: pageUrl,
      description,
      areaServed: { '@type': 'Country', name: 'Singapore' },
      isPartOf: { '@type': 'SoftwareApplication', name: 'CCorex', url: config.public.siteUrl },
      publisher: { '@type': 'Organization', name: 'Newham Solutions Pte. Ltd.' }
    })
  }]
})

const heroPoints = ['Face + GPS attendance on the employee’s phone', 'Singapore payroll: CPF, SDL, SHG', 'One approvals engine', 'Self-service, installable on a phone']

const pageNav = [
  { id: 'attendance', label: 'Attendance' },
  { id: 'tour', label: 'Product tour' },
  { id: 'approvals', label: 'Approvals' },
  { id: 'payroll', label: 'Payroll' },
  { id: 'compliance', label: 'Singapore payroll' },
  { id: 'reports', label: 'Reports & more' }
]

const problems = [
  { icon: 'fa-solid fa-table-cells', title: 'Spreadsheet sprawl', text: 'Leave balances, timesheets and payroll live in fragile spreadsheets no one trusts.' },
  { icon: 'fa-solid fa-user-secret', title: 'Buddy-punching', text: 'Manual or card attendance is easy to game — and hard to verify for field and site staff.' },
  { icon: 'fa-solid fa-inbox', title: 'Approvals stuck in inboxes', text: 'Leave and expense approvals bounce around email and chat, with no trail and no accountability.' },
  { icon: 'fa-solid fa-circle-question', title: 'No single source of truth', text: 'HR can’t answer “who’s in, who’s owed, what’s pending” without chasing several systems.' }
]

const steps = [
  { title: 'People', text: 'Profiles, organisation structure and bulk upload with a dry run.' },
  { title: 'Attendance', text: 'Face + GPS check-in on the employee’s own phone; HR approves each session.' },
  { title: 'Leave, claims & timesheets', text: 'Requests run through one approvals engine.' },
  { title: 'Payroll', text: 'Approved attendance and leave pull into the pay run; CPF, SDL and SHG applied.' },
  { title: 'Payslips & filings', text: 'PDF payslips filed to each employee’s Documents.' },
  { title: 'Reports', text: 'Payroll, people, leave and claims reports — saved and emailed on a schedule.' }
]

const views = [
  {
    label: 'Employee view', src: '/images/product/deephr-my-dashboard.webp', url: 'deephr.app / my-dashboard',
    alt: 'DeepHR employee My Dashboard with a check-in button, working days chart, annual and sick leave balances, pending requests, documents, assigned tasks and recent leave requests',
    bullets: ['Dashboard, My Requests, leave, attendance, timesheets, claims and documents', 'Check in and out by face and GPS, even without signal', 'Policies to acknowledge, a helpdesk to HR, and tasks — installable on a phone as an app']
  },
  {
    label: 'HR admin view', src: '/images/product/deephr-admin-dashboard.webp', url: 'deephr.app / dashboard',
    alt: 'DeepHR admin dashboard for a demo organisation with cards for total employees, pending leave, present today and absent today, a today’s attendance donut, a weekly attendance trend chart, pending leave requests and expiring documents',
    bullets: ['A live roster of present, absent, late and early', 'People, payroll, reports, settings and attendance administration', 'Admins can switch to Employee View for their own self-service']
  }
]

const checkinRules = [
  'The employee must be active.',
  'One session per local day — a second check-in is refused.',
  'The face must match the enrolled samples.',
  'The site must be on the employee’s allowed-site list, where one is set.',
  'The phone’s GPS position must be inside the site’s radius.',
  'Marked on time or late against the site’s start time, in the site’s time zone.'
]

const img = (n: string) => `/images/product/deephr-${n}.webp`
const tourGroups = [
  {
    label: 'People & approvals', icon: 'fa-solid fa-sitemap',
    tabs: [
      { title: 'Approval configuration', text: 'Numbered levels per request type, plus conditional rules.', src: img('approval-config'), url: 'deephr.app / settings / approvals', alt: 'DeepHR Approval Configuration screen with tabs for leave, claim, HR letter and timesheet approvals; leave approval levels 1 to 3 assigned to the General Manager role, the HR Admin role and the direct supervisor by reporting line, and a conditional rule that applies when total days are greater than 2' },
      { title: 'Pending approvals', text: 'Everything waiting on you — leave, claims, HR letters and timesheets.', src: img('pending-approvals'), url: 'deephr.app / pending-approvals', alt: 'DeepHR My Pending Approvals screen with counters for all pending, leave requests, expense claims, HR letters and timesheets, filter tabs for each type, and an “All caught up” empty state' },
      { title: 'Policies', text: 'Published company policies that employees acknowledge.', src: img('policies'), url: 'deephr.app / policies', alt: 'DeepHR Company Policies screen listing a workplace health and safety policy and a leave policy, each at version 1.0 and marked acknowledged' }
    ]
  },
  {
    label: 'Leave', icon: 'fa-solid fa-umbrella-beach',
    tabs: [
      { title: 'Leave balances', text: 'Balances for every leave type and the employee’s leave history.', src: img('leave'), url: 'deephr.app / leave', alt: 'DeepHR Leave Management screen with annual, medical, hospitalisation, childcare, paternity, maternity and unpaid leave balances, and the employee’s leave history with approval status' },
      { title: 'Public holidays', text: 'Holidays per jurisdiction, excluded from leave days.', src: img('public-holidays'), url: 'deephr.app / leave / settings', alt: 'DeepHR Leave Settings with an import leave data button and the Public Holidays table for 2026 showing 18 Singapore holidays, including New Year’s Day, Chinese New Year and Good Friday, each with a type and an enabled toggle' },
      { title: 'Team calendar', text: 'Who is away, colour-coded by leave type.', src: img('leave-calendar'), url: 'deephr.app / leave / calendar', alt: 'DeepHR Team Leave Calendar month view for October 2026 with today highlighted and a legend for annual, sick, unpaid and compassionate leave' }
    ]
  },
  {
    label: 'Attendance', icon: 'fa-solid fa-location-dot',
    tabs: [
      { title: 'Attendance dashboard', text: 'Present, absent, late and early out, with weekly trends.', src: img('attendance-analytics'), url: 'deephr.app / attendance', alt: 'DeepHR Attendance dashboard with counters for enabled, present, absent, late, early out and average hours, a weekly attended-versus-absent bar chart, a behaviour trends chart of late and early-out counts with average hours, and the approved attendance records list' },
      { title: 'Check-out approvals', text: 'Review sessions before they count as present.', src: img('checkout-approvals'), url: 'deephr.app / attendance / approvals', alt: 'DeepHR Checkout Approvals tab with one pending record grouped by date, showing employee ID, site, check-in and an automatic check-out time, duration, normal and OT hours, status and approve, edit and reject actions' },
      { title: 'Site locations', text: 'GPS radius, working hours and time zone for each site.', src: img('attendance-sites'), url: 'deephr.app / attendance / sites', alt: 'DeepHR Site Locations table listing sites such as Site office A, Workshop and Head office with coordinates set on a map, a 100 m or 500 m radius, working hours, a time zone such as Asia/Singapore or Asia/Kolkata, active status and an assign button showing how many employees are assigned' },
      { title: 'Attendance reports', text: 'A per-day register with Excel and PDF export.', src: img('attendance-reports'), url: 'deephr.app / attendance / reports', alt: 'DeepHR Attendance Reports with filters for employee, status, month and year, Excel and PDF export buttons, counters for present, late, early out, no checkout, absent and rejected, an attendance percentage, a status breakdown chart and a daily attendance chart' }
    ]
  },
  {
    label: 'Payroll', icon: 'fa-solid fa-money-check-dollar',
    tabs: [
      { title: 'Process a pay run', text: 'Three steps: select employees, select pay items, view summary.', src: img('payroll-run'), url: 'deephr.app / payroll', alt: 'DeepHR Payroll Process Payrun step 1 of 3, Select Employees, with the pay run name Payroll – October 2026, pay period selectors, department and employment filters, and an employee table with rate of pay, payable days and OT hours' },
      { title: 'All pay runs', text: 'Every run with its period, pay date, total net and status.', src: img('payruns'), url: 'deephr.app / payroll / payruns', alt: 'DeepHR All Payruns table listing monthly pay runs from June to September 2026 with period, pay date, number of employees, total net and a paid or draft status, plus an import payroll data button' },
      { title: 'Month totals', text: 'Gross, CPF, SHG, net, employer CPF and SDL by month.', src: img('payroll-totals'), url: 'deephr.app / payroll / totals', alt: 'DeepHR Monthly Payroll Totals for 2026 with total gross, total net, total CPF and employer cost cards, and a monthly breakdown table with columns for gross pay, employee CPF, SHG, net pay, employer CPF, SDL and number of pay runs' },
      { title: 'Payslips', text: 'Release payslips and email them, a month at a time.', src: img('payslips'), url: 'deephr.app / payroll / payslips', alt: 'DeepHR Payslips list grouped by month with payslip number, employee, period, pay date, gross and net pay, a released status, view, email and download actions, and a Send All button for each month' }
    ]
  }
]
const tourGroup = ref(0)

const approvalPoints = [
  { title: 'Numbered levels', text: 'Each level’s approver is a named person, a role, a designation or the applicant’s manager.' },
  { title: 'Conditional rules', text: 'Add levels when a field matches — for example, a claim above a set amount.' },
  { title: 'Employee-specific chains', text: 'A chain set for one employee overrides the organisation’s chain.' },
  { title: 'Pending Approvals and My Requests', text: 'Approvers see what waits on them; employees track their own submissions.' }
]
const exampleChain = [
  { level: 1, approver: 'Applicant’s manager', type: 'Reporting line' },
  { level: 2, approver: 'HR Admin', type: 'Role' },
  { level: 3, approver: 'General Manager', type: 'Role · added by condition rule', rule: 'If amount > set limit' }
]
const requestStates = ['Draft', 'Submitted', 'In progress']

const payrollFlow = [
  { icon: 'fa-solid fa-user-check', title: 'Attendance & leave', text: 'Approved sessions, paid leave, holidays and timesheets' },
  { icon: 'fa-solid fa-play', title: 'Pay run', text: 'Select employees, choose pay items, review' },
  { icon: 'fa-solid fa-landmark', title: 'Statutory', text: 'CPF, SDL and SHG' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'Payslips', text: 'PDFs filed to each employee’s Documents' },
  { icon: 'fa-solid fa-chart-column', title: 'Reports', text: 'Salary register, reconciliation, statutory summary' }
]
const payrollPoints = [
  { icon: 'fa-solid fa-scale-balanced', title: 'MOM proration', text: 'Part months and unpaid leave are prorated using the Ministry of Manpower method.' },
  { icon: 'fa-solid fa-envelope-open-text', title: 'Payslip released email', text: 'PDF payslips go to Documents; the release email is a separate action you choose.' },
  { icon: 'fa-solid fa-file-import', title: 'Record mode', text: 'Payroll already paid elsewhere can be uploaded from Excel. Past payslips never change.' },
  { icon: 'fa-solid fa-arrow-trend-up', title: 'Salary revisions & arrears', text: 'A back-dated revision pays one arrears line in the next run.' }
]
const hoursData = [
  { label: 'Mon', value: 8, value2: 1 },
  { label: 'Tue', value: 8, value2: 0 },
  { label: 'Wed', value: 8, value2: 2 },
  { label: 'Thu', value: 8, value2: 0.5 },
  { label: 'Fri', value: 8, value2: 1.5 },
  { label: 'Sat', value: 4, value2: 0 }
]

const jurisdictionRows = [
  { area: 'Contributions', sg: 'CPF (full, graduated for new PRs, or exempt), SDL, self-help group funds (CDAC, SINDA, MBMF, ECF)' },
  { area: 'Outputs', sg: 'PDF payslips, salary register, reconciliation and statutory summary' },
  { area: 'Exit', sg: 'Through normal payroll' },
  { area: 'Year to date', sg: 'January – December' }
]
const compliance = [
  { title: 'Singapore overtime & hours', icon: 'fa-solid fa-clock', items: ['OT hourly rate = 12 × basic ÷ (52 × 44) × multiplier', 'OT up to a basic of $2,600 (non-workmen) or $4,500 (workmen)', 'Rest-day and public-holiday pay rules', 'Warnings above 72 OT hours a month or 12 a day'] },
  { title: 'Leave presets', icon: 'fa-solid fa-umbrella-beach', items: ['Singapore: Annual 14, Medical 14, Hospitalisation 60', 'Childcare 6, Maternity 16 weeks, Paternity'] }
]

const reports = [
  { area: 'Payroll', items: 'Salary register, reconciliation, statutory summary, cost to company, salary revisions' },
  { area: 'People', items: 'Employee master, headcount, joiners and leavers, attrition' },
  { area: 'Leave', items: 'Balances, leave taken' },
  { area: 'Claims', items: 'Claims register' },
  { area: 'Custom', items: 'Pick a source and columns' }
]
const moreModules = [
  { icon: 'fa-solid fa-receipt', title: 'Claims', text: 'Transport, meals, medical, training and more in SGD with a receipt — approved, then marked paid.' },
  { icon: 'fa-solid fa-list-check', title: 'Tasks (optional)', text: 'Projects, phases, templates and dependency-driven dates, with a role matrix for rights.' },
  { icon: 'fa-solid fa-folder-open', title: 'Documents', text: 'Payslips, tax forms, HR letters from templates and personal documents with expiry alerts.' },
  { icon: 'fa-solid fa-headset', title: 'Policies & helpdesk', text: 'Policies employees acknowledge, and tickets from employees to HR.' },
  { icon: 'fa-solid fa-bell', title: 'Notifications', text: 'In-app, plus emails each organisation can switch on or off — approvals, payslips, expiries.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'Installable on a phone', text: 'Employee self-service installs on a phone as an app — check-in, leave, claims and more.' }
]
const security = [
  { icon: 'fa-solid fa-lock', title: 'Personal, bank and ID fields encrypted' },
  { icon: 'fa-solid fa-user-shield', title: 'Role-based access' },
  { icon: 'fa-solid fa-clipboard-list', title: 'Audit log of HR changes' },
  { icon: 'fa-solid fa-key', title: 'One CCorex sign-in' }
]
const connects = ['CCorex SSO', 'Excel & CSV exports', 'Excel bulk upload with dry run']

const roles = [
  { icon: 'fa-solid fa-user-gear', title: 'HR admin', text: 'Sets organisation settings and approval chains; runs people, payroll and attendance administration.' },
  { icon: 'fa-solid fa-user-tie', title: 'General manager', text: 'Admin access including payroll and reports.' },
  { icon: 'fa-solid fa-people-group', title: 'Manager', text: 'Self-service plus pending approvals for the team.' },
  { icon: 'fa-solid fa-laptop-code', title: 'Engineer & site engineer', text: 'Self-service: leave, attendance, timesheets, claims, documents, policies and tasks.' },
  { icon: 'fa-solid fa-screwdriver-wrench', title: 'Technician', text: 'Simple self-service for check-in, leave, claims and tasks.' },
  { icon: 'fa-solid fa-building-user', title: 'External HR', text: 'People administration for a client organisation.' }
]

const aiPoints = [
  { icon: 'fa-regular fa-comments', title: 'Ask in plain language', text: 'Ask about employees, leave, attendance and claims in your organisation.' },
  { icon: 'fa-solid fa-chart-column', title: 'Charts & exports', text: 'Turn an answer into a chart, or export it to PDF or Excel.' },
  { icon: 'fa-solid fa-eye', title: 'Read-only', text: 'ARIVU reports what it finds; requests and approvals stay in DeepHR.' }
]
const arivuPrompts = [
  'Which leave requests are waiting for approval?',
  'Who was late at the Tuas site this week?',
  'How many claims are pending payment this month?'
]

const suiteToday = ['One sign-in at dash.ccorex.com', 'Users created once, provisioned into each app', 'Disabling a user disables them in the apps too', 'ARIVU in every app, read-only']

const plans = [
  { name: 'Starter', for: 'Small teams getting organised', features: ['Employee self-service', 'Leave & holidays', 'Face + GPS attendance', 'Documents, policies & helpdesk', 'Standard approvals'] },
  { name: 'Growth', for: 'Scaling companies', popular: true, features: ['Everything in Starter', 'Claims', 'Timesheets & payroll', 'Multi-level approval chains', 'Reports & schedules'] },
  { name: 'Enterprise', for: 'Complex, multi-site organisations', features: ['Everything in Growth', 'Tasks module', 'Custom roles & condition rules', 'Priority support'] }
]

const solutionLinks = [
  { to: '/solutions/hr-software-singapore', name: 'HR software for Singapore SMEs', icon: 'fa-solid fa-people-group' },
  { to: '/solutions/payroll-software-singapore', name: 'Payroll software (CPF, SDL, SHG)', icon: 'fa-solid fa-money-check-dollar' },
  { to: '/solutions/attendance-app-singapore', name: 'Attendance app with face and GPS', icon: 'fa-solid fa-location-crosshairs' },
  { to: '/solutions/leave-management-system-singapore', name: 'Leave management system', icon: 'fa-solid fa-calendar-days' },
  { to: '/solutions/construction-hr-software', name: 'HR software for construction', icon: 'fa-solid fa-people-group' },
  { to: '/solutions/construction-payroll-software', name: 'Construction payroll software', icon: 'fa-solid fa-money-check-dollar' },
  { to: '/solutions/foreign-worker-attendance-app', name: 'Foreign worker attendance app', icon: 'fa-solid fa-user-check' },
  { to: '/resources/foreign-worker-levy-construction-singapore', name: 'Guide: foreign worker levy', icon: 'fa-solid fa-coins' }
]
const faqs = [
  { q: 'Can we buy DeepHR on its own?', a: 'Yes. DeepHR is sold on its own in Starter, Growth and Enterprise tiers, priced per employee. You do not need any other CCorex app; DeepCost or DeepTrack can be added later on the same sign-in.' },
  { q: 'Is DeepHR only for construction companies?', a: 'No. DeepHR is HR and payroll software for any Singapore company. It was built for businesses with staff on site or on the move as well as in the office, which is why attendance runs on each employee’s own phone.' },
  { q: 'Do we need to buy attendance hardware?', a: 'No. Employees check in and out by face and GPS on their own phone. There is no kiosk or shared device. The face must match the enrolled samples and the phone must be inside the site radius; the record is marked on time or late against the site’s start time.' },
  { q: 'What if there is no signal on site?', a: 'The app works offline. The phone checks the face and site radius locally and queues the punch; when it is back online, each punch is re-verified. Punches over 72 hours old are refused, and over 24 hours are accepted but flagged.' },
  { q: 'Which payroll rules does DeepHR follow?', a: 'Singapore. DeepHR covers CPF (including graduated rates for new PRs), SDL and self-help group funds (CDAC, SINDA, MBMF, ECF).' },
  { q: 'Does DeepHR handle foreign workers in construction?', a: 'Yes. Workers check in with face and GPS on their own phone, and each worker’s pass type, number and expiry date are kept on their record.' },
  { q: 'How does attendance reach payroll?', a: 'Every completed session becomes a pending approval for HR. Approved time is turned into payable hours — split into normal and OT against the schedule — and the pay run pulls approved attendance, approved paid leave and holidays for the period.' },
  { q: 'Will our site workers be able to use it?', a: 'Yes. DeepHR has roles for site engineers and technicians with simple self-service for check-in, leave, claims and tasks, and it installs on a phone as an app.' },
  { q: 'How is DeepHR priced?', a: 'Per-employee pricing across three plans — Starter, Growth and Enterprise — that scales with your headcount. Contact us for a tailored quote.' }
]
</script>
