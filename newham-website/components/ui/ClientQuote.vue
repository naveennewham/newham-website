<template>
  <figure class="card mx-auto max-w-3xl sm:p-10">
    <span class="block font-display text-5xl font-bold leading-none text-brand-600" aria-hidden="true">&ldquo;</span>
    <blockquote class="mt-4">
      <p class="text-lg leading-relaxed text-ink-800 sm:text-xl">{{ quote }}</p>
    </blockquote>
    <figcaption class="mt-8 flex flex-wrap items-center gap-4 border-t border-ink-100 pt-6">
      <component
        :is="href ? 'a' : 'span'"
        v-if="logo"
        v-bind="href ? { href, target: '_blank', rel: 'noopener' } : {}"
        class="light-surface inline-flex shrink-0 items-center rounded-xl border border-ink-100 bg-white px-3 py-2"
      >
        <img :src="logo" :alt="company" :width="logoWidth" :height="logoHeight" loading="lazy" decoding="async" class="h-7 w-auto" />
      </component>
      <span class="min-w-0">
        <span class="block font-semibold text-ink-900">{{ name }}</span>
        <span class="block text-sm text-ink-600">{{ role }}, {{ company }}</span>
      </span>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  quote: string
  name: string
  role: string
  company: string
  logo?: string
  logoWidth?: number
  logoHeight?: number
  href?: string
}>(), { logoWidth: 480, logoHeight: 147 })
</script>
