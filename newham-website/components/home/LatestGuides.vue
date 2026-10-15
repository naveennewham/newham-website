<template>
  <section v-if="latest.length" class="section">
    <div class="container-site">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <UiSectionHeader eyebrow="Guides" title="Guides from our engineers" />
        <NuxtLink to="/guides" class="btn-secondary shrink-0">All guides <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
      </div>
      <ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="g in latest" :key="g.slug">
          <NuxtLink :to="`/guides/${g.slug}`" class="card group flex h-full flex-col transition-colors hover:border-brand-200">
            <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">{{ g.minutes }} min read</p>
            <h3 class="mt-2 text-lg font-bold leading-snug text-ink-900 group-hover:text-brand-700">{{ g.title }}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{{ g.description }}</p>
            <span class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">Read the guide <i class="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-0.5" aria-hidden="true"></i></span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
// The newest guides, linked from the homepage so search engines find new pages on their next homepage crawl.
import { guides } from '~/utils/guides'
const latest = guides.slice(0, 6)
</script>
