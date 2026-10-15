<template>
  <div class="fx-float" :style="{ animationDuration: `${duration}s`, animationDelay: `-${delay}s` }">
    <div class="rounded-2xl border border-white/15 bg-white/10 p-3.5 text-white shadow-frame backdrop-blur-xl" :class="widthClass">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ duration?: number; delay?: number; widthClass?: string }>(), { duration: 7, delay: 0, widthClass: 'w-56' })
</script>

<style scoped>
.fx-float { animation: fx-bob ease-in-out infinite; }
@keyframes fx-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@media (prefers-reduced-motion: reduce) { .fx-float { animation: none; } }
</style>
