<template>
  <figure ref="root" class="light-surface overflow-hidden rounded-2xl border border-ink-100 bg-white text-ink-900 shadow-frame">
    <div class="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-2.5">
      <span class="chip-ai"><i class="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>AI tender summary</span>
      <span class="ml-auto rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-600">Illustration</span>
      <button v-if="animated" type="button" class="flex h-7 w-7 items-center justify-center rounded-md text-ink-500 hover:bg-ink-100 hover:text-ink-800" :aria-label="paused ? 'Play animation' : 'Pause animation'" @click="toggle">
        <i :class="paused ? 'fa-solid fa-play' : 'fa-solid fa-pause'" class="text-[11px]" aria-hidden="true"></i>
      </button>
    </div>

    <div class="grid sm:grid-cols-[0.85fr_1.15fr]">
      <!-- Tender document -->
      <div class="relative border-b border-ink-100 bg-ink-50/60 p-5 sm:border-b-0 sm:border-r">
        <div class="relative mx-auto max-w-[220px] overflow-hidden rounded-lg border border-ink-200 bg-white p-4 shadow-card">
          <div class="flex items-center gap-2">
            <span class="rounded bg-rose-600 px-1.5 py-0.5 text-[9px] font-bold text-white">PDF</span>
            <span class="truncate text-[11px] font-semibold text-ink-800">Tender_documents.pdf</span>
          </div>
          <div class="mt-3 space-y-1.5" aria-hidden="true">
            <span v-for="(w, i) in lines" :key="i" class="block h-1.5 rounded-full" :class="i === 0 || i === 6 ? 'bg-ink-300' : 'bg-ink-100'" :style="{ width: w + '%' }"></span>
          </div>
          <span v-if="reading" class="scan pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-ai-500/20 to-transparent motion-reduce:hidden" aria-hidden="true"></span>
        </div>
        <ul class="mt-4 flex flex-wrap justify-center gap-1.5 text-[10px] font-medium text-ink-600">
          <li v-for="f in files" :key="f" class="rounded-full border border-ink-200 bg-white px-2 py-0.5"><i class="fa-regular fa-file mr-1 text-ink-400" aria-hidden="true"></i>{{ f }}</li>
        </ul>
        <p class="mt-3 text-center text-[11px] font-medium" :class="reading ? 'text-ai-700' : 'text-brand-700'">
          <i :class="reading ? 'fa-solid fa-spinner fa-spin-pulse' : 'fa-solid fa-circle-check'" class="mr-1" aria-hidden="true"></i>{{ reading ? 'Reading the tender documents…' : 'Summary ready for review' }}
        </p>
      </div>

      <!-- Summary fields -->
      <div class="p-5">
        <dl class="divide-y divide-ink-100">
          <div v-for="(f, i) in fields" :key="f.label" class="grid grid-cols-[7.5rem_1fr] gap-3 py-2.5 text-xs">
            <dt class="font-medium text-ink-500">{{ f.label }}</dt>
            <dd class="min-h-[1rem]">
              <span v-if="i < shown" class="fade-in block font-semibold text-ink-900">{{ f.value }}</span>
              <span v-else-if="i === shown && animated" class="inline-flex items-center gap-1.5 text-ai-600"><span class="h-1.5 w-1.5 animate-pulse rounded-full bg-ai-500"></span>Filling…</span>
              <span v-else class="mt-1 block h-2 w-2/3 rounded-full bg-ink-100" aria-hidden="true"></span>
            </dd>
          </div>
        </dl>
        <ul class="mt-4 flex flex-wrap gap-2 transition-opacity duration-500" :class="done ? 'opacity-100' : 'opacity-30'" aria-label="Actions on the summary">
          <li v-for="a in actions" :key="a.label" class="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-ink-700">
            <i :class="a.icon" class="text-brand-600" aria-hidden="true"></i>{{ a.label }}
          </li>
        </ul>
      </div>
    </div>
    <figcaption class="border-t border-ink-100 px-4 py-2 text-[11px] text-ink-500">Illustration with sample values — not a customer tender. The summary fills a predefined set of fields you can edit.</figcaption>
  </figure>
</template>

<script setup lang="ts">
// Animated illustration of DeepCost's AI tender summary (FDD §6.2): the tender
// documents are read and a predefined set of fields fills in, then the user can
// edit, refine prompts and export. SSR and reduced-motion show the final state.
const fields = [
  { label: 'Project', value: 'Sample School Block A' },
  { label: 'Tender type', value: 'BOQ' },
  { label: 'Trades in scope', value: 'Fire Protection · ELV' },
  { label: 'Submission date', value: 'Sample: 4 weeks after issue, 12:00 noon' },
  { label: 'Key requirements', value: 'Addressable fire alarm; sprinkler system to SS CP 52; site visit before pricing' }
]
const actions = [
  { label: 'Edit answers', icon: 'fa-solid fa-pen' },
  { label: 'Refine prompt', icon: 'fa-solid fa-sliders' },
  { label: 'Export Excel / PDF', icon: 'fa-solid fa-file-export' }
]
const files = ['Specification', 'Drawings', 'BOQ']
const lines = [70, 95, 88, 92, 60, 85, 55, 90, 80, 94, 72, 40]

const FINAL = fields.length
const HOLD = 5
const root = ref<HTMLElement | null>(null)
const step = ref(FINAL)
const animated = ref(false)
const paused = ref(false)
const shown = computed(() => Math.min(step.value, FINAL))
const done = computed(() => shown.value >= FINAL)
const reading = computed(() => animated.value && !done.value)

let timer: ReturnType<typeof setInterval> | undefined
let io: IntersectionObserver | undefined
const tick = () => { step.value = step.value >= FINAL + HOLD ? 0 : step.value + 1 }
const start = () => { if (!timer && !paused.value) timer = setInterval(tick, 1100) }
const stop = () => { clearInterval(timer); timer = undefined }
const toggle = () => { paused.value = !paused.value; paused.value ? stop() : start() }

onMounted(() => {
  if (!root.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  animated.value = true
  const r = root.value.getBoundingClientRect()
  if (r.top > window.innerHeight || r.bottom < 0) step.value = 0
  io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.3 })
  io.observe(root.value)
})
onBeforeUnmount(() => { stop(); io?.disconnect() })
</script>

<style scoped>
.scan { animation: scan 2.2s ease-in-out infinite; }
@keyframes scan { 0% { top: -2.5rem; } 100% { top: 100%; } }
.fade-in { animation: fade 0.5s ease-out; }
@keyframes fade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
</style>
