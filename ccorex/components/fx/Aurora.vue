<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <span v-for="(b, i) in blobs" :key="i" class="fx-blob absolute rounded-full blur-3xl" :class="b.cls" :style="b.style"></span>
  </div>
</template>

<script setup lang="ts">
// Slowly drifting colour fields behind a hero.
const props = withDefaults(defineProps<{ palette?: 'ai' | 'teal' }>(), { palette: 'ai' })
const blobs = computed(() => props.palette === 'ai'
  ? [
      { cls: 'bg-cyan-500/30', style: { width: '46rem', height: '46rem', left: '-12rem', top: '-18rem', animationDuration: '22s' } },
      { cls: 'bg-ai-500/30', style: { width: '40rem', height: '40rem', right: '-10rem', top: '-6rem', animationDuration: '27s', animationDelay: '-8s' } },
      { cls: 'bg-brand-500/30', style: { width: '36rem', height: '36rem', left: '30%', bottom: '-22rem', animationDuration: '31s', animationDelay: '-14s' } }
    ]
  : [
      { cls: 'bg-brand-400/30', style: { width: '44rem', height: '44rem', left: '-14rem', top: '-16rem', animationDuration: '24s' } },
      { cls: 'bg-cyan-500/25', style: { width: '38rem', height: '38rem', right: '-12rem', top: '4rem', animationDuration: '29s', animationDelay: '-9s' } },
      { cls: 'bg-emerald-400/15', style: { width: '30rem', height: '30rem', left: '40%', bottom: '-18rem', animationDuration: '33s', animationDelay: '-17s' } }
    ])
</script>

<style scoped>
.fx-blob { animation: fx-drift ease-in-out infinite alternate; will-change: transform; }
@keyframes fx-drift {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(6%, 8%) scale(1.12); }
  100% { transform: translate(-6%, 3%) scale(0.95); }
}
/* Phones: large blurred layers that move cost more than they show. */
@media (prefers-reduced-motion: reduce), (max-width: 767px) { .fx-blob { animation: none; } }
</style>
