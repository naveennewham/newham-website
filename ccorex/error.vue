<template>
  <NuxtLayout>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative grid items-center gap-10 py-24 lg:grid-cols-[1.2fr_1fr] lg:py-32">
        <div>
        <p class="eyebrow-dark">{{ is404 ? 'Error 404' : 'Something went wrong' }}</p>
        <h1 class="h-display mt-4 max-w-3xl text-white">{{ is404 ? 'We could not find that page' : 'This page could not be loaded' }}</h1>
        <p class="lead-dark mt-6 max-w-xl">{{ is404 ? 'It may have moved when we updated the site.' : 'Please try again in a moment.' }}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <button type="button" class="btn-accent" @click="clearError({ redirect: '/' })">Go to the homepage</button>
          <NuxtLink to="/contact" class="btn-ghost-dark" @click="clearError()">Book a demo</NuxtLink>
        </div>
        </div>
        <UiLottie v-if="is404" src="/lottie/not-found.json" class="mx-auto hidden h-72 w-72 rounded-3xl bg-[#fff] p-6 lg:block" />
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode?: number } }>()
const is404 = computed(() => props.error?.statusCode === 404)
// noindex only for real 404s. Any other error can be a file that failed to load in a crawler's
// renderer; marking it noindex would tell Google to drop a page that is fine.
// error.vue renders in place of app.vue, so app.vue's titleTemplate does not apply here: brand the
// title and give a description, so a failed render is not a bare 'Error' with no description.
useHead({ titleTemplate: '%s | CCorex' })
useSeoMeta({
  title: is404.value ? 'Page not found' : 'This page could not be loaded',
  description: is404.value
    ? 'We could not find that page on ccorex.com. It may have moved when we updated the site. Go to the homepage or book a demo of CCorex.'
    : 'This ccorex.com page could not be loaded. Please try again in a moment, go to the homepage or book a demo of CCorex.',
  robots: is404.value ? 'noindex' : undefined
})
</script>
