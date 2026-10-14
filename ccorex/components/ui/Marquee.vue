<template>
  <div class="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]" :aria-label="label" role="region">
    <ul class="mq flex w-max gap-3 group-hover:[animation-play-state:paused]" :style="{ animationDuration: `${speed}s` }">
      <li v-for="(it, k) in [...items, ...items]" :key="k" :aria-hidden="k >= items.length" class="flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium" :class="dark ? 'border-white/10 bg-white/5 text-ink-100' : 'border-ink-100 bg-white text-ink-700 shadow-card'">
        <i :class="it.icon" class="text-brand-500" aria-hidden="true"></i>{{ it.text }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ items: { icon: string; text: string }[]; label: string; speed?: number; dark?: boolean }>(), { speed: 45 })
</script>

<style scoped>
.mq { animation: mq linear infinite; }
@keyframes mq { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .mq { animation: none; flex-wrap: wrap; width: auto; } }
</style>
