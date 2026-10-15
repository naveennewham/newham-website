<template>
  <!-- Wraps on small screens (2 or 3 per row); one row on desktop, so no step is hidden. -->
  <ol class="pipeline grid grid-cols-2 gap-3 sm:grid-cols-3" :style="{ '--n': steps.length }">
    <li
      v-for="(s, i) in steps"
      :key="s.title"
      class="relative z-10 flex flex-col rounded-2xl border p-4 transition-colors duration-500"
      :class="active === i ? (dark ? 'border-cyan-400 bg-cyan-400/10' : 'border-brand-500 bg-brand-50') : (dark ? 'border-white/10 bg-white/5' : 'border-ink-100 bg-white shadow-card')"
    >
      <span class="flex items-center justify-between">
        <span class="flex h-9 w-9 items-center justify-center rounded-xl" :class="s.ai ? 'bg-ai-gradient text-white' : (dark ? 'bg-white/10 text-cyan-400' : 'bg-brand-50 text-brand-700')">
          <i :class="s.icon" aria-hidden="true"></i>
        </span>
        <span class="text-[11px] font-semibold tabular-nums" :class="dark ? 'text-ink-300' : 'text-ink-500'">{{ String(i + 1).padStart(2, '0') }}</span>
      </span>
      <p class="mt-3 text-sm font-semibold" :class="dark ? 'text-white' : 'text-ink-900'">{{ s.title }}</p>
      <p v-if="s.text" class="mt-1 text-xs leading-snug" :class="dark ? 'text-ink-300' : 'text-ink-500'">{{ s.text }}</p>
      <span v-if="s.ai" class="mt-2 inline-block w-fit rounded-full bg-ai-50 px-2 py-0.5 text-[10px] font-semibold text-ai-700">AI</span>
      <!-- connector to the next step (desktop row only) -->
      <span v-if="i < steps.length - 1" class="connector pointer-events-none absolute -right-3 top-1/2 hidden h-0.5 w-3 -translate-y-1/2 lg:block" :class="dark ? 'bg-white/15' : 'bg-ink-200'" aria-hidden="true">
        <span v-if="moving && active === i" class="flow-dot absolute -top-[3px] h-2 w-2 rounded-full" :class="dark ? 'bg-cyan-400' : 'bg-brand-600'"></span>
      </span>
    </li>
  </ol>
</template>

<script setup lang="ts">
// A step-by-step workflow where a highlight travels from step to step,
// showing how one record moves through the process.
const props = defineProps<{ steps: { title: string; text?: string; icon: string; ai?: boolean }[]; dark?: boolean; interval?: number }>()
const active = ref(0)
const moving = ref(false)
let t: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  moving.value = true
  t = setInterval(() => { active.value = (active.value + 1) % props.steps.length }, props.interval ?? 1800)
})
onBeforeUnmount(() => clearInterval(t))
</script>

<style scoped>
@media (min-width: 1024px) {
  .pipeline { grid-template-columns: repeat(var(--n), minmax(0, 1fr)); }
}
.flow-dot { animation: flow 1.8s ease-in-out infinite; }
@keyframes flow { 0% { left: 0; opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { left: calc(100% - 8px); opacity: 0; } }
</style>
