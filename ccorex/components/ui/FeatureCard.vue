<template>
  <div class="card-hover h-full">
    <span class="icon-tile" :class="tone"><i :class="icon" aria-hidden="true"></i></span>
    <h3 class="mt-5 text-lg font-semibold">{{ title }}</h3>
    <p class="mt-2 text-sm leading-relaxed text-ink-600"><slot>{{ text }}</slot></p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ icon: string; title: string; text?: string; tone?: string }>(), { tone: '' })
</script>
