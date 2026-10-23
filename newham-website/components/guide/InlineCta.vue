<template>
  <aside class="my-10 max-w-[72ch] overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-card" aria-label="Talk to an engineer">
    <p class="eyebrow flex items-center gap-2"><i class="fa-solid fa-helmet-safety text-brand-600" aria-hidden="true"></i>Newham engineering</p>
    <p class="mt-2 text-lg font-bold text-ink-900">Working on this for a live project?</p>
    <p class="mt-1 text-sm text-ink-600">Tell us about the project in a 30-minute call. We'll come back with how we would help, the scope and a quote.</p>
    <div class="mt-4 flex flex-wrap items-center gap-3">
      <NuxtLink to="/appointment" class="btn-primary" @click="track('call')">Book a 30-minute call</NuxtLink>
      <NuxtLink v-if="related" :to="related.to" class="text-sm font-semibold text-brand-700 hover:text-brand-900" @click="track('service')">{{ related.label }} <i class="fa-solid fa-arrow-right ml-1 text-xs" aria-hidden="true"></i></NuxtLink>
    </div>
  </aside>
</template>

<script setup lang="ts">
// Call to action placed inside a guide, so mobile readers meet it before the end of the article.
const props = defineProps<{ guide: string; related?: { to: string; label: string } }>()
const { $track } = useNuxtApp()
const track = (target: string) => $track.event('cta_click', { location: 'guide_inline', guide: props.guide, target })
</script>
