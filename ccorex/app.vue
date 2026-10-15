<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  meta: [{ property: 'og:site_name', content: 'CCorex' }],
  titleTemplate: (chunk?: string) => (chunk ? `${chunk} | CCorex` : 'CCorex')
})
</script>
