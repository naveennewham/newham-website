<template>
  <div class="overflow-hidden rounded-2xl border border-white/10 bg-[#0b111c]/80 shadow-frame backdrop-blur">
    <div class="flex items-center gap-3 border-b border-white/10 px-5 py-3.5">
      <UiArivuAvatar :size="40" :talking="typing" :float="false" />
      <div>
        <p class="text-sm font-semibold text-white">ARIVU</p>
        <p class="text-[11px] text-ink-300">AI assistant · answers from your CCorex data</p>
      </div>
      <span class="ml-auto flex items-center gap-1.5 text-[11px] text-emerald-400"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Online</span>
    </div>
    <ul class="flex min-h-[340px] flex-col gap-3 p-5" aria-live="polite">
      <li v-for="(m, i) in shown" :key="i" class="flex" :class="m.from === 'user' ? 'justify-end' : 'justify-start'">
        <div class="rounded-2xl px-4 py-2.5 text-sm leading-relaxed" :class="[m.from === 'user' ? 'max-w-[85%] rounded-br-md bg-cyan-500 text-brand-950' : 'rounded-bl-md bg-white/10 text-ink-100', m.chart ? 'w-full max-w-[92%]' : 'max-w-[85%]']">
          <p>{{ m.text }}</p>
          <ul v-if="m.items" class="mt-2 space-y-1.5">
            <li v-for="it in m.items" :key="it.label" class="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs">
              <span class="rounded px-1.5 py-0.5 text-[10px] font-semibold" :class="it.tone">{{ it.app }}</span>{{ it.label }}
            </li>
          </ul>
          <figure v-if="m.chart" class="mt-2.5 rounded-xl bg-white/5 p-3">
            <figcaption class="flex items-center justify-between gap-2 text-[11px]">
              <span class="font-semibold text-white">{{ m.chart.title }}</span>
              <span class="rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-ink-200">Sample data</span>
            </figcaption>
            <ul class="mt-2.5 space-y-1.5" role="img" :aria-label="`${m.chart.title} (sample data): ` + m.chart.bars.map((b) => `${b.label} ${b.value}`).join(', ')">
              <li v-for="(b, bi) in m.chart.bars" :key="b.label" class="grid grid-cols-[6.5rem_1fr_1.25rem] items-center gap-2 text-[11px]" aria-hidden="true">
                <span class="truncate text-ink-200">{{ b.label }}</span>
                <span class="h-2.5 overflow-hidden rounded-full bg-white/5">
                  <span class="arivu-bar block h-full rounded-full bg-ai-gradient" :style="{ width: `${(b.value / chartMax(m.chart)) * 100}%`, animationDelay: `${bi * 120}ms` }"></span>
                </span>
                <span class="text-right font-semibold text-white">{{ b.value }}</span>
              </li>
            </ul>
          </figure>
          <p v-if="m.exports" class="mt-2.5 flex flex-wrap gap-1.5">
            <span v-for="e in m.exports" :key="e.label" class="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-ink-100">
              <i :class="e.icon" aria-hidden="true"></i>{{ e.label }}
            </span>
          </p>
        </div>
      </li>
      <li v-if="typing" class="flex"><span class="rounded-2xl rounded-bl-md bg-white/10 px-4 py-3"><span class="inline-flex gap-1" aria-label="ARIVU is typing"><span class="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-300 motion-reduce:animate-none"></span><span class="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-300 [animation-delay:.15s] motion-reduce:animate-none"></span><span class="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-300 [animation-delay:.3s] motion-reduce:animate-none"></span></span></span></li>
    </ul>
    <div class="border-t border-white/10 px-5 py-3.5">
      <div class="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2.5 text-sm text-ink-300">
        <i class="fa-regular fa-message text-xs" aria-hidden="true"></i> Ask ARIVU…
      </div>
      <p class="mt-2 text-[10px] text-ink-300">Illustrative conversation. ARIVU reads your data; it never changes it.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Chart { title: string; bars: { label: string; value: number }[] }
interface Msg {
  from: 'user' | 'arivu'; text: string
  items?: { app: string; label: string; tone: string }[]
  chart?: Chart
  exports?: { label: string; icon: string }[]
}
// Illustrative conversation with sample data. ARIVU is read-only: it reports,
// summarises, charts and exports — it never changes data.
const script: Msg[] = [
  { from: 'arivu', text: "Hi! I'm ARIVU. Ask me anything across your CCorex apps." },
  { from: 'user', text: 'Which claims and purchase requests are still pending?' },
  {
    from: 'arivu', text: '3 items are still pending in the apps:',
    items: [
      { app: 'DeepTrack', label: 'PR for Block B fit-out, waiting for Finance approval', tone: 'bg-amber-400/20 text-amber-300' },
      { app: 'DeepHR', label: 'Expense claim, site transport S$86', tone: 'bg-emerald-400/20 text-emerald-300' },
      { app: 'DeepHR', label: 'Expense claim, safety boots S$120', tone: 'bg-emerald-400/20 text-emerald-300' }
    ]
  },
  { from: 'user', text: 'Show purchase requests by project this month.' },
  {
    from: 'arivu', text: 'Here are this month’s purchase requests in DeepTrack, by project:',
    chart: {
      title: 'Purchase requests · this month',
      bars: [
        { label: 'Block B fit-out', value: 9 },
        { label: 'Tuas warehouse', value: 6 },
        { label: 'School extension', value: 4 },
        { label: 'Clinic A&A', value: 2 }
      ]
    },
    exports: [
      { label: 'Export to Excel', icon: 'fa-regular fa-file-excel' },
      { label: 'Export to PDF', icon: 'fa-regular fa-file-pdf' }
    ]
  }
]
const chartMax = (c: Chart) => Math.max(1, ...c.bars.map((b) => b.value))
const shown = ref<Msg[]>([script[0]!])
const typing = ref(false)
const timers: ReturnType<typeof setTimeout>[] = []

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = script
    return
  }
  let t = 600
  script.slice(1).forEach((m) => {
    if (m.from === 'arivu') {
      timers.push(setTimeout(() => (typing.value = true), t))
      t += 900
    }
    timers.push(setTimeout(() => { typing.value = false; shown.value.push(m) }, t))
    t += 1100
  })
})
onBeforeUnmount(() => timers.forEach(clearTimeout))
</script>

<style scoped>
.arivu-bar { transform-origin: left; animation: arivu-grow 0.9s ease-out both; }
@keyframes arivu-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@media (prefers-reduced-motion: reduce) { .arivu-bar { animation: none; } }
</style>
