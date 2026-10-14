<template>
  <NuxtLayout>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative py-24 lg:py-32">
        <p class="eyebrow-dark">{{ is404 ? 'Error 404' : 'Something went wrong' }}</p>
        <h1 class="h-display mt-4 max-w-3xl text-white">{{ is404 ? 'We could not find that page' : 'This page could not be loaded' }}</h1>
        <p class="lead-dark mt-6 max-w-xl">{{ is404 ? 'It may have moved when we updated the site.' : 'Please try again in a moment.' }}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <button type="button" class="btn-accent" @click="clearError({ redirect: '/' })">Go to the homepage</button>
          <NuxtLink to="/contact" class="btn-ghost-dark" @click="clearError()">Contact us</NuxtLink>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode?: number } }>()
const is404 = computed(() => props.error?.statusCode === 404)
useSeoMeta({ title: is404.value ? 'Page not found' : 'Error', robots: 'noindex' })
</script>
