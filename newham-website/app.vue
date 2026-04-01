<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Newham - Construction Technology & Software Solutions` : 'Newham - Construction Technology & Software Solutions';
  }
})
</script>
