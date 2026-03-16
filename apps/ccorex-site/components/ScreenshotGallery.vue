<template>
  <section class="my-10">
    <h3 v-if="title" class="text-2xl font-semibold text-white mb-4">{{ title }}</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="(img, i) in images" :key="i" class="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 aspect-video">
        <img v-if="img" :src="img" :alt="`screenshot-${i+1}`" class="w-full h-full object-cover" />
        <div v-else class="w-full h-full flex items-center justify-center text-gray-400">Screenshot {{ i + 1 }}</div>
      </div>
    </div>
    <p v-if="note" class="text-sm text-gray-500 mt-2">{{ note }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title?: string; images: (string|null)[]; note?: string }>()
</script>
