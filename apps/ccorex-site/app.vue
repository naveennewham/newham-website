<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (chunk?: string) => (chunk ? `${chunk} | CCorex` : 'CCorex')
})
</script>
