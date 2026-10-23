<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid gap-14 pb-24 pt-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:pt-24">
        <div>
          <p class="eyebrow-dark">About CCorex</p>
          <h1 class="h-display mt-5 text-white">Software built by people who know construction.</h1>
          <p class="lead-dark mt-6 max-w-xl">CCorex is built and delivered by Newham Solutions Pte. Ltd. in Singapore — a team that combines software engineering with specialist M&amp;E engineering experience. It serves engineering and construction contractors, mainly MEP and fire-protection firms in Singapore and India.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-accent">Talk to our team <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <a :href="config.public.newhamUrl" class="btn-ghost-dark">Visit Newham <i class="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i></a>
          </div>
        </div>
        <div class="lg:-mr-16">
          <img src="/images/photos/hero-ccorex-suite.webp" alt="Illustration of the CCorex suite with DeepCost, DeepTrack, DeepHR and DeepPlan AI connected around the CCorex platform" width="2000" height="1116" class="aspect-[16/9] w-full rounded-2xl border border-white/10 object-cover shadow-frame" loading="eager" />
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <UiSectionHeader eyebrow="Our mission" title="Give construction businesses one platform that fits the way they work." lead="Construction firms run on estimates, budgets, purchase orders, claims, timesheets and payroll — usually spread across spreadsheets and generic tools. We build software that brings that work together on one sign-in, with the controls and approvals the industry needs." />
        <div class="grid gap-4">
          <div v-for="m in mission" :key="m.title" class="card flex gap-4">
            <span class="icon-tile shrink-0"><i :class="m.icon" aria-hidden="true"></i></span>
            <div><h3 class="text-base font-semibold">{{ m.title }}</h3><p class="mt-1 text-sm leading-relaxed text-ink-600">{{ m.text }}</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newham -->
    <section class="section bg-ink-50">
      <div class="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
        <img src="/images/photos/bim-team-review.webp" alt="Engineers reviewing an MEP model together on large monitors" width="2000" height="1086" class="aspect-[16/10] w-full rounded-2xl object-cover shadow-frame" loading="lazy" />
        <div>
          <UiSectionHeader eyebrow="Delivered by Newham" title="Software plus specialists" lead="Newham Solutions Pte. Ltd. builds CCorex and also provides specialist M&E engineering services. That combination shapes the product." />
          <ul class="mt-8 space-y-5">
            <li v-for="n in newham" :key="n.title" class="flex gap-4">
              <i :class="n.icon" class="mt-1 w-5 text-brand-600" aria-hidden="true"></i>
              <div><p class="font-semibold text-ink-900">{{ n.title }}</p><p class="text-sm text-ink-600">{{ n.text }}</p></div>
            </li>
          </ul>
          <a :href="config.public.newhamUrl" class="mt-8 inline-flex font-semibold text-brand-700 hover:text-brand-900">About Newham Solutions Pte. Ltd. <i class="fa-solid fa-arrow-up-right-from-square ml-2 mt-1 text-xs" aria-hidden="true"></i></a>
        </div>
      </div>
    </section>

    <!-- Why construction -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Why construction" title="Generic software misses the work that matters" lead="Off-the-shelf suites weren’t built for construction. The gaps between tools are where time is lost and margin leaks out." />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <UiFeatureCard v-for="w in why" :key="w.title" :icon="w.icon" :title="w.title" :text="w.text" />
        </div>
      </div>
    </section>

    <!-- How we work -->
    <section class="section relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>
      <div class="container-site relative">
        <UiSectionHeader dark eyebrow="How we work with customers" title="From first call to go-live, with the same team" lead="We set CCorex up around your organisation, your data and your approval rules — then stay with you after go-live." />
        <div class="mt-12"><UiStepFlow :steps="process" dark /></div>
      </div>
    </section>

    <!-- Principles -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="What we stand for" title="How we build and sell CCorex" />
        <ol class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="(p, i) in principles" :key="p.title" class="card">
            <p class="font-display text-sm font-bold text-brand-600">{{ String(i + 1).padStart(2, '0') }}</p>
            <h3 class="mt-3 text-lg font-semibold">{{ p.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ p.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <UiCtaBand title="Meet the team behind CCorex" lead="Book a demo with the people who build and support the platform. Or email admin@newhamtech.com." />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'About CCorex & Newham Solutions Pte. Ltd.',
  description: 'CCorex is built by Newham Solutions Pte. Ltd. in Singapore for MEP and fire-protection contractors in Singapore and India, backed by M&E engineering experience.',
  ogTitle: 'About CCorex — construction software delivered by Newham',
  ogDescription: 'Built in Singapore by a team that combines software engineering with specialist M&E engineering experience.'
})
useHead({ link: [{ rel: 'canonical', href: config.public.siteUrl + '/about' }] })

const mission = [
  { icon: 'fa-solid fa-helmet-safety', title: 'Built for construction', text: 'Area schedules, MTOs, Forms of Tender, progress claims, retention and site attendance are core features, not add-ons.' },
  { icon: 'fa-solid fa-key', title: 'One platform, one login', text: 'Estimating, project delivery and HR share one sign-in and one user base, with roles per app.' },
  { icon: 'fa-solid fa-wand-magic-sparkles', title: 'AI where it helps', text: 'An AI tender summary and FOT AI in DeepCost, and ARIVU answering questions from your own data in every app. AI take-off in DeepPlan is in early access.' }
]
const newham = [
  { icon: 'fa-solid fa-code', title: 'A software team', text: 'Designs, builds and supports the CCorex platform and every app in the suite.' },
  { icon: 'fa-solid fa-gears', title: 'A specialist M&E engineering team', text: 'Brings day-to-day knowledge of MEP estimating, take-off and project work into the product.' },
  { icon: 'fa-solid fa-location-dot', title: 'Based in Singapore', text: 'Built for local requirements: CPF, SDL, SHG and MOM rules in DeepHR, and SGD with 9% GST in DeepTrack.' }
]
const why = [
  { icon: 'fa-solid fa-table-cells', title: 'Spreadsheet estimating', text: 'Take-offs and rates drift between files and estimators.' },
  { icon: 'fa-solid fa-envelope-open-text', title: 'Approvals in inboxes', text: 'Budgets and purchases signed off over email, with no trail.' },
  { icon: 'fa-solid fa-link-slash', title: 'Re-keyed data', text: 'Priced figures typed again into the client’s BOQ; invoices keyed again into accounts.' },
  { icon: 'fa-solid fa-person-digging', title: 'Office and site', text: 'Field crews need attendance and requests that work on a phone.' }
]
const process = [
  { title: 'Discovery', text: 'We learn how you estimate, run projects and pay people today.' },
  { title: 'Configuration', text: 'Organisation, users, roles, approval thresholds and apps set up for you.' },
  { title: 'Data import', text: 'Your price library, customers, users and employees brought in from Excel templates.' },
  { title: 'Training', text: 'Role-based sessions for estimators, managers, HR and site teams.' },
  { title: 'Support', text: 'Ongoing help from the team that builds the product.' }
]
const principles = [
  { title: 'Describe, don’t exaggerate', text: 'We show you the product working on your own workflow, not a slide of promises.' },
  { title: 'Label the roadmap', text: 'What is available today and what is planned are always kept separate.' },
  { title: 'Start small', text: 'Begin with one app and one workflow, then add apps as the value is proven.' },
  { title: 'Your data stays yours', text: 'Each organisation’s data is kept separate, personal fields are encrypted, and ARIVU only reads your own organisation’s data.' }
]
</script>
