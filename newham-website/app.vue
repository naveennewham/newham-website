<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  meta: [{ property: 'og:site_name', content: 'Newham Tech' }],
  titleTemplate: (chunk?: string) => (chunk ? `${chunk} | Newham` : 'Newham — Construction software and specialist M&E engineers, Singapore')
})
</script>
