<template>
  <section id="ai" class="section scroll-mt-20">
    <div class="container-site grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
      <div>
        <p class="chip-ai"><i class="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>AI built in · ARIVU</p>
        <h2 class="h-section mt-4">{{ title }}</h2>
        <p class="lead mt-4">{{ lead }}</p>
        <ul class="mt-6 grid gap-3 sm:grid-cols-3">
          <li v-for="t in arivuTrust" :key="t.title" class="rounded-xl border border-ink-100 bg-ink-50/60 p-4">
            <i :class="t.icon" class="text-ai-600" aria-hidden="true"></i>
            <p class="mt-2 text-sm font-semibold text-ink-900">{{ t.title }}</p>
            <p class="mt-1 text-xs leading-relaxed text-ink-600">{{ t.text }}</p>
          </li>
        </ul>
        <p v-if="note" class="mt-4 flex gap-2 text-sm text-ink-700"><i class="fa-solid fa-circle-info mt-1 text-ai-600" aria-hidden="true"></i>{{ note }}</p>
        <p class="mt-4 text-xs text-ink-500">{{ arivuPlanNote }}</p>
        <NuxtLink to="/products/arivu-ai" class="mt-5 inline-block text-sm font-semibold text-brand-700 hover:text-brand-900">How ARIVU AI works <i class="fa-solid fa-arrow-right ml-1 text-xs" aria-hidden="true"></i></NuxtLink>
      </div>
      <div class="space-y-4">
        <div class="card">
          <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">Try asking ARIVU in {{ appName }}</p>
          <ul class="mt-3 space-y-2">
            <li v-for="q in questions" :key="q" class="flex gap-2.5 rounded-xl border border-ink-100 bg-ink-50/60 px-3.5 py-2.5 text-sm text-ink-800">
              <i class="fa-regular fa-comment mt-0.5 text-ai-600" aria-hidden="true"></i>{{ q }}
            </li>
          </ul>
          <p class="mt-3 text-xs text-ink-500">Example questions. Answers can come back as text, a chart, or an Excel or PDF export.</p>
        </div>
        <div v-if="coming.length" class="card border-dashed">
          <p class="text-xs font-semibold uppercase tracking-wider text-cyan-700"><i class="fa-solid fa-flask mr-1" aria-hidden="true"></i>Coming next · early access</p>
          <ul class="mt-3 space-y-3">
            <li v-for="f in coming" :key="f.slug" class="flex gap-3">
              <span class="icon-tile h-9 w-9 shrink-0 bg-ai-50 text-ai-700"><i :class="f.icon" aria-hidden="true"></i></span>
              <div>
                <p class="text-sm font-semibold text-ink-900">{{ f.title }}</p>
                <p class="mt-0.5 text-xs leading-relaxed text-ink-600">{{ f.text }}</p>
                <NuxtLink :to="{ path: '/contact', query: { interest: f.slug } }" class="mt-1 inline-block text-xs font-semibold text-brand-700 hover:text-brand-900">Request early access <i class="fa-solid fa-arrow-right ml-0.5 text-[10px]" aria-hidden="true"></i></NuxtLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Compact "AI built in" block for solution pages: what ARIVU answers on this topic, trust notes,
// and any AI features in early access. Copy comes from data/arivu.ts.
import { arivuTrust, arivuPlanNote } from '~/data/arivu'
import { earlyAccess } from '~/data/earlyAccess'

const props = defineProps<{ appName: string; title: string; lead: string; questions: string[]; note?: string; earlyAccess?: string[] }>()
const coming = computed(() => (props.earlyAccess ?? []).map((s) => earlyAccess.find((f) => f.slug === s)).filter((f) => !!f))
</script>
