<template>
  <figure class="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
    <div class="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1.2fr_auto_1.1fr]">
      <!-- 1. Ask -->
      <div class="rounded-2xl border p-5 transition-colors duration-500" :class="on(0) ? 'border-cyan-400/60 bg-cyan-400/10' : 'border-white/10 bg-white/5'">
        <p class="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">1 · Ask</p>
        <p class="mt-3 rounded-2xl rounded-br-md bg-cyan-500 px-3.5 py-2.5 text-sm font-medium text-brand-950">Show purchase requests by project this month.</p>
        <p class="mt-3 text-xs leading-relaxed text-ink-300">Typed in the ARIVU widget, inside whichever CCorex app you are working in. Attach a drawing or tender PDF if it helps.</p>
      </div>

      <div class="flex items-center justify-center" aria-hidden="true">
        <span class="relative block h-8 w-0.5 bg-white/15 lg:h-0.5 lg:w-10">
          <span v-if="moving && phase === 0" class="arivu-dot absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0"></span>
        </span>
      </div>

      <!-- 2. Reads your apps -->
      <div class="rounded-2xl border p-5 transition-colors duration-500" :class="on(1) ? 'border-ai-400/70 bg-ai-500/10' : 'border-white/10 bg-white/5'">
        <p class="text-[11px] font-semibold uppercase tracking-wider text-ai-400">2 · Reads your apps</p>
        <ul class="mt-3 grid grid-cols-2 gap-2 text-xs">
          <li v-for="(a, i) in apps" :key="a.name" class="flex items-center gap-2 rounded-lg border px-2.5 py-2 transition-all duration-500" :class="lit(i) ? 'border-white/25 bg-white/10 text-white' : 'border-white/5 bg-transparent text-ink-300'">
            <i :class="a.icon" class="w-3.5 text-center" aria-hidden="true"></i>{{ a.name }}
            <i v-if="lit(i)" class="fa-solid fa-check ml-auto text-[10px] text-emerald-400" aria-hidden="true"></i>
          </li>
        </ul>
        <p class="mt-3 flex flex-wrap gap-1.5 text-[11px]">
          <span class="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-ink-100"><i class="fa-solid fa-eye text-[9px]" aria-hidden="true"></i>Read-only</span>
          <span class="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-ink-100"><i class="fa-solid fa-building-shield text-[9px]" aria-hidden="true"></i>Your organisation only</span>
        </p>
      </div>

      <div class="flex items-center justify-center" aria-hidden="true">
        <span class="relative block h-8 w-0.5 bg-white/15 lg:h-0.5 lg:w-10">
          <span v-if="moving && phase === 1" class="arivu-dot absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-ai-400 lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0"></span>
        </span>
      </div>

      <!-- 3. Answers -->
      <div class="rounded-2xl border p-5 transition-colors duration-500" :class="on(2) ? 'border-emerald-400/60 bg-emerald-400/10' : 'border-white/10 bg-white/5'">
        <p class="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">3 · Answers</p>
        <div class="mt-3 rounded-xl bg-white/5 p-3">
          <p class="flex items-center justify-between text-[11px]"><span class="font-semibold text-white">PRs by project</span><span class="rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-ink-200">Sample data</span></p>
          <div class="mt-2.5 flex h-20 items-end gap-2" role="img" aria-label="Sample chart: purchase requests by project — Block B 9, Tuas 6, School 4, Clinic 2">
            <span v-for="(b, i) in bars" :key="b.l" class="flex flex-1 flex-col items-center gap-1" aria-hidden="true">
              <span class="w-full rounded-t bg-ai-gradient transition-[height] duration-700 ease-out motion-reduce:transition-none" :style="{ height: on(2) ? `${b.v * 7}px` : '4px', transitionDelay: `${i * 90}ms` }"></span>
              <span class="text-[9px] text-ink-300">{{ b.l }}</span>
            </span>
          </div>
        </div>
        <p class="mt-3 flex flex-wrap gap-1.5">
          <span class="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-ink-100"><i class="fa-regular fa-file-excel" aria-hidden="true"></i>Excel</span>
          <span class="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-ink-100"><i class="fa-regular fa-file-pdf" aria-hidden="true"></i>PDF</span>
        </p>
      </div>
    </div>
    <figcaption class="mt-5 text-center text-xs text-ink-300">Illustration with sample data: one question, answered from the apps your organisation uses, as text, a chart or an export.</figcaption>
  </figure>
</template>

<script setup lang="ts">
// Animated "ask → reads your apps → answers" explainer for ARIVU.
// Static (all steps lit) for reduced-motion users and before hydration.
const apps = [
  { name: 'DeepCost', icon: 'fa-solid fa-calculator' },
  { name: 'DeepTrack', icon: 'fa-solid fa-diagram-project' },
  { name: 'DeepHR', icon: 'fa-solid fa-user-group' },
  { name: 'DeepPlan', icon: 'fa-solid fa-compass-drafting' },
  { name: 'Deep Drive', icon: 'fa-solid fa-folder-open' },
  { name: 'Your docs', icon: 'fa-solid fa-file-lines' }
]
const bars = [{ l: 'Blk B', v: 9 }, { l: 'Tuas', v: 6 }, { l: 'School', v: 4 }, { l: 'Clinic', v: 2 }]
const phase = ref(3) // 3 = everything shown
const tick = ref(apps.length)
const moving = ref(false)
const on = (p: number) => phase.value === 3 || phase.value === p
const lit = (i: number) => phase.value >= 2 || (phase.value === 1 && i < tick.value)
let t: ReturnType<typeof setInterval> | undefined
let step = 0

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  moving.value = true
  phase.value = 0
  tick.value = 0
  // 0: ask (6 ticks) · 1: reads apps one by one (7 ticks) · 2: answer (8 ticks)
  t = setInterval(() => {
    step++
    if (step < 6) phase.value = 0
    else if (step < 13) { phase.value = 1; tick.value = step - 6 }
    else if (step < 21) phase.value = 2
    else { step = 0; phase.value = 0; tick.value = 0 }
  }, 400)
})
onBeforeUnmount(() => clearInterval(t))
</script>

<style scoped>
.arivu-dot { animation: arivu-travel 1.6s ease-in-out infinite; }
@keyframes arivu-travel { 0% { top: 0; opacity: 0; } 20%, 80% { opacity: 1; } 100% { top: calc(100% - 8px); opacity: 0; } }
@media (min-width: 1024px) {
  .arivu-dot { animation-name: arivu-travel-x; }
  @keyframes arivu-travel-x { 0% { left: 0; opacity: 0; } 20%, 80% { opacity: 1; } 100% { left: calc(100% - 8px); opacity: 0; } }
}
@media (prefers-reduced-motion: reduce) { .arivu-dot { animation: none; } }
</style>
