<template>
  <aside class="my-10 max-w-[72ch] overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-card" aria-label="Book a demo">
    <p class="eyebrow flex items-center gap-2"><i class="fa-solid fa-circle-play text-brand-600" aria-hidden="true"></i>{{ app ? app.name : 'CCorex' }}</p>
    <p class="mt-2 text-lg font-bold text-ink-900">{{ app ? `See ${app.name} on your own work` : 'See CCorex on your own workflow' }}</p>
    <p class="mt-1 text-sm text-ink-600">{{ app ? app.tagline : 'Estimating, project delivery and HR & payroll on one sign-in.' }} A 30-minute demo with examples close to your projects.</p>
    <div class="mt-4 flex flex-wrap items-center gap-3">
      <NuxtLink :to="demoTo" class="btn-primary" @click="track('demo')">Book a 30-minute demo</NuxtLink>
      <NuxtLink v-if="app" :to="`/products/${app.slug}`" class="text-sm font-semibold text-brand-700 hover:text-brand-900" @click="track('product')">How {{ app.name }} works <i class="fa-solid fa-arrow-right ml-1 text-xs" aria-hidden="true"></i></NuxtLink>
    </div>
  </aside>
</template>

<script setup lang="ts">
// Call to action placed inside a guide, so mobile readers meet it before the end of the article.
const props = defineProps<{ guide: string; app?: { slug: string; name: string; tagline: string } }>()
const demoTo = computed(() => (props.app ? `/contact?app=${props.app.slug}` : '/contact'))
const { $track } = useNuxtApp()
const track = (target: string) => $track.event('cta_click', { location: 'guide_inline', guide: props.guide, target })
</script>
