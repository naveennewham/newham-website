<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// The only titleTemplate that takes effect (a function in nuxt.config is not carried into the app).
// Every page should set its own title and description; the fallback is a full title so a page that
// forgets is not left with a bare 'CCorex' (before 15 Oct 2026 every page shared that title).
useHead({
  meta: [{ property: 'og:site_name', content: 'CCorex' }],
  titleTemplate: (chunk?: string) => (chunk ? `${chunk} | CCorex` : 'CCorex — AI-powered construction management platform')
})
</script>
