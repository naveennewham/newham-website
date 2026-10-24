<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid items-center gap-12 pb-20 pt-16 lg:grid-cols-[1.2fr_1fr] lg:pt-20">
        <div>
          <p class="eyebrow-dark flex items-center gap-2"><UiAppIcon :app="app" size="xs" />{{ eyebrow }}</p>
          <h1 class="h-display mt-4 text-white">{{ h1 }}</h1>
          <p class="lead-dark mt-6 max-w-xl">{{ lead }}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-accent">Book a live demo <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <NuxtLink :to="`/products/${app}`" class="btn-ghost-dark">See {{ appName }}</NuxtLink>
            <a v-if="earlyAccess?.length" href="#early-access" class="btn-ghost-dark">Singapore early access</a>
          </div>
        </div>
        <figure class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur" :aria-label="`What ${appName} covers`">
          <figcaption class="text-xs font-semibold uppercase tracking-wider text-cyan-300">In {{ appName }}</figcaption>
          <ul class="mt-4 space-y-2">
            <li v-for="p in heroPoints" :key="p" class="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white">
              <span>{{ p }}</span><i class="fa-solid fa-check text-xs text-cyan-400" aria-hidden="true"></i>
            </li>
          </ul>
        </figure>
      </div>
    </section>

    <!-- Problems -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="The problem today" :title="problemTitle" />
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <UiFeatureCard v-for="p in problems" :key="p.title" :icon="p.icon" :title="p.title" :text="p.text" tone="bg-rose-50 text-rose-600" />
        </div>
      </div>
    </section>

    <!-- Workflow -->
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" :title="flowTitle" />
        <div class="mt-12"><UiFlowPipeline :steps="flow" :interval="2000" /></div>
      </div>
    </section>

    <!-- Features -->
    <section class="section">
      <div class="container-site">
        <UiSectionHeader eyebrow="What you get" :title="featureTitle" />
        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UiFeatureCard v-for="f in features" :key="f.title" :icon="f.icon" :title="f.title" :text="f.text" />
        </div>
      </div>
    </section>

    <!-- Singapore checklist: what buyers look for, and where the app stands on each -->
    <section v-if="checklist?.length" class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader eyebrow="Singapore checklist" :title="checklistTitle" :lead="checklistLead" />
        <div class="relative mt-10 overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-card">
          <table class="w-full min-w-[560px] text-left text-sm">
            <caption class="sr-only">{{ checklistTitle }}</caption>
            <thead class="bg-ink-50 text-xs uppercase tracking-wider text-ink-500">
              <tr><th scope="col" class="w-1/3 px-5 py-3 font-semibold">What to look for</th><th scope="col" class="px-5 py-3 font-semibold">In {{ appName }}</th></tr>
            </thead>
            <tbody class="divide-y divide-ink-100">
              <tr v-for="c in checklist" :key="c.need" class="align-top">
                <th scope="row" class="px-5 py-4 font-semibold text-ink-900">{{ c.need }}</th>
                <td class="px-5 py-4 leading-relaxed text-ink-700">
                  <a v-if="c.early" href="#early-access" class="mr-2 inline-block rounded-full bg-cyan-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-700 ring-1 ring-cyan-200">Early access</a>{{ c.how }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- AI built in: what ARIVU answers on this page's topic (data/arivu.ts) -->
    <SolutionAiBlock v-if="ai" :app-name="appName" :title="ai.title" :lead="ai.lead" :questions="ai.questions" :note="ai.note" :early-access="ai.earlyAccess" />

    <SolutionEarlyAccess v-if="earlyAccess?.length" :items="earlyAccess" :title="earlyAccessTitle" />

    <!-- Bought on its own -->
    <section class="section-tight">
      <div class="container-site">
        <div class="flex flex-col gap-6 rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-2xl">
            <p class="eyebrow">Use {{ appName }} on its own</p>
            <p class="mt-3 text-ink-700">{{ standaloneText }}</p>
          </div>
          <div class="flex shrink-0 flex-wrap gap-3">
            <NuxtLink to="/pricing" class="btn-primary">See plans and pricing</NuxtLink>
            <NuxtLink :to="`/products/${app}`" class="btn-secondary">See {{ appName }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Other solutions + guides -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-8 lg:grid-cols-2">
        <div>
          <p class="eyebrow">{{ group === 'business' ? 'Also for Singapore businesses' : 'Also for Singapore contractors' }}</p>
          <ul class="mt-4 grid gap-3">
            <li v-for="s in otherSolutions" :key="s.to">
              <NuxtLink :to="s.to" class="card flex items-center gap-3 hover:border-brand-200"><i :class="s.icon" class="text-brand-600" aria-hidden="true"></i><span class="font-semibold">{{ s.name }}</span></NuxtLink>
            </li>
          </ul>
          <p class="mt-5 text-sm font-semibold text-ink-900">{{ group === 'business' ? 'Run a construction business?' : 'Not in construction?' }}</p>
          <ul class="mt-3 flex flex-wrap gap-2">
            <li v-for="s in crossSolutions" :key="s.to"><NuxtLink :to="s.to" class="chip hover:border-brand-300 hover:text-brand-800">{{ s.name }}</NuxtLink></li>
          </ul>
        </div>
        <div>
          <p class="eyebrow">Guides</p>
          <ul class="mt-4 space-y-3">
            <li v-for="g in guideLinks" :key="g.to">
              <NuxtLink :to="g.to" class="card flex items-center justify-between gap-3 hover:border-brand-200"><span class="font-semibold">{{ g.title }}</span><i class="fa-solid fa-arrow-right text-xs text-brand-600" aria-hidden="true"></i></NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-tight">
      <div class="container-site grid gap-10 py-6 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="FAQ" title="Questions we are asked" />
        <UiFaqList :items="faqs" :schema="false" />
      </div>
    </section>

    <UiCtaBand :title="ctaTitle" :lead="ctaLead" />
  </div>
</template>

<script setup lang="ts">
// Shared layout for search-led solution pages (/solutions/<slug>). Content and SEO come from the page.
interface Card { icon: string; title: string; text: string }
import { solutionPages, solutionPath } from '~/data/solutions'
import { arivuSolutions } from '~/data/arivu'

const props = defineProps<{
  slug: string; app: 'deeptrack' | 'deephr'; appName: string; eyebrow: string
  seoTitle: string; seoDescription: string; h1: string; lead: string; heroPoints: string[]
  problemTitle: string; problems: Card[]
  flowTitle: string; flow: { title: string; text: string; icon: string }[]
  featureTitle: string; features: Card[]
  guideLinks: { to: string; title: string }[]
  faqs: { q: string; a: string }[]
  ctaTitle: string; ctaLead: string
  earlyAccess?: string[]
  earlyAccessTitle?: string
  // Optional "what to look for" table; early items are shown with an early-access badge.
  checklistTitle?: string; checklistLead?: string
  checklist?: { need: string; how: string; early?: boolean }[]
  subCategory?: string
}>()

// 'construction' pages target contractor searches; 'business' pages target broad Singapore searches.
const all = solutionPages.map((s) => ({ ...s, to: solutionPath(s) }))
const group = all.find((s) => s.slug === props.slug)?.group ?? 'construction'
const otherSolutions = all.filter((s) => s.slug !== props.slug && s.group === group)
const crossSolutions = all.filter((s) => s.group !== group)
const ai = arivuSolutions[props.slug]
const standaloneText = props.app === 'deephr'
  ? 'DeepHR is sold on its own in Starter, Growth and Enterprise tiers, priced per employee, with a tailored quote. You do not need any other CCorex app; DeepTrack or DeepCost can be added later on the same sign-in.'
  : 'DeepTrack is sold on its own in Starter, Growth and Enterprise tiers, priced per user, with a tailored quote. You do not need any other CCorex app; DeepHR or DeepCost can be added later on the same sign-in.'

const config = useRuntimeConfig()
const pageUrl = `${config.public.siteUrl}/solutions/${props.slug}`
useSeoMeta({ title: props.seoTitle, description: props.seoDescription, ogTitle: `${props.seoTitle} | CCorex`, ogDescription: props.seoDescription })
useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: props.appName,
        applicationCategory: 'BusinessApplication', ...(props.subCategory ? { applicationSubCategory: props.subCategory } : {}), operatingSystem: 'Web', url: pageUrl, description: props.seoDescription,
        areaServed: { '@type': 'Country', name: 'Singapore' },
        isPartOf: { '@type': 'SoftwareApplication', name: 'CCorex', url: config.public.siteUrl },
        publisher: { '@type': 'Organization', name: 'Newham Solutions Pte. Ltd.' }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: props.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })
    }
  ]
})
</script>
