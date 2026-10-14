<template>
  <div class="relative overflow-x-auto pb-2">
    <ol class="relative flex min-w-max items-stretch gap-0">
      <li v-for="(s, i) in steps" :key="s.title" class="relative flex items-center">
        <div
          class="relative z-10 w-40 rounded-2xl border p-4 transition-colors duration-500 sm:w-44"
          :class="[
            active === i ? (dark ? 'border-cyan-400 bg-cyan-400/10' : 'border-brand-500 bg-brand-50') : (dark ? 'border-white/10 bg-white/5' : 'border-ink-100 bg-white shadow-card')
          ]"
        >
          <span class="flex h-9 w-9 items-center justify-center rounded-xl" :class="s.ai ? 'bg-ai-gradient text-white' : (dark ? 'bg-white/10 text-cyan-400' : 'bg-brand-50 text-brand-700')">
            <i :class="s.icon" aria-hidden="true"></i>
          </span>
          <p class="mt-3 text-sm font-semibold" :class="dark ? 'text-white' : 'text-ink-900'">{{ s.title }}</p>
          <p v-if="s.text" class="mt-1 text-xs leading-snug" :class="dark ? 'text-ink-300' : 'text-ink-500'">{{ s.text }}</p>
          <span v-if="s.ai" class="mt-2 inline-block rounded-full bg-ai-50 px-2 py-0.5 text-[10px] font-semibold text-ai-700">AI</span>
        </div>
        <div v-if="i < steps.length - 1" class="relative h-0.5 w-8 sm:w-10" :class="dark ? 'bg-white/15' : 'bg-ink-200'" aria-hidden="true">
          <span v-if="moving && active === i" class="flow-dot absolute -top-[3px] h-2 w-2 rounded-full" :class="dark ? 'bg-cyan-400' : 'bg-brand-600'"></span>
        </div>
      </li>
    </ol>
  </div>
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
.flow-dot { animation: flow 1.8s ease-in-out infinite; }
@keyframes flow { 0% { left: 0; opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { left: calc(100% - 8px); opacity: 0; } }
</style>
