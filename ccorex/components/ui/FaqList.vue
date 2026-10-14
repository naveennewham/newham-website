<template>
  <div class="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
    <details v-for="f in items" :key="f.q" class="group p-5 sm:p-6">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-ink-900">
        {{ f.q }}
        <i class="fa-solid fa-plus text-sm text-brand-600 transition-transform group-open:rotate-45" aria-hidden="true"></i>
      </summary>
      <p class="mt-3 text-sm leading-relaxed text-ink-600">{{ f.a }}</p>
    </details>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ items: { q: string; a: string }[]; schema?: boolean }>(), { schema: true })
// FAQPage structured data for search and AI answers. Pages with several lists
// should set :schema="false" on all but one, or emit their own combined JSON-LD.
if (props.schema) useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: props.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
    })
  }]
})
</script>
