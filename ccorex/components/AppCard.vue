<template>
  <NuxtLink :to="link" class="block p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
    <div class="flex items-start justify-between">
      <div>
        <h3 class="text-2xl font-semibold text-white">{{ name }}</h3>
        <p class="text-sm text-primary-400 font-semibold">{{ subtitle }}</p>
      </div>
      <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </div>
    <p class="text-gray-300 mt-4">{{ description }}</p>
    <ul class="mt-4 space-y-1 text-sm text-gray-400">
      <li v-for="f in features" :key="f">• {{ f }}</li>
    </ul>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ name: string; subtitle: string; link: string; description: string; features: string[] }>()
</script>
