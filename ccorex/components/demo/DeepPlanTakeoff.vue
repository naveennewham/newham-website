<template>
  <figure ref="root" class="overflow-hidden rounded-xl border border-white/10 bg-[#0b111c]/80 text-white shadow-frame">
    <div class="flex items-center gap-3 border-b border-white/10 bg-brand-900 px-4 py-2.5">
      <span class="flex gap-1.5" aria-hidden="true">
        <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
      </span>
      <span class="mx-auto truncate rounded-md bg-white/10 px-3 py-0.5 text-[11px] font-medium text-ink-200">Illustration · AI features in early access</span>
      <button v-if="animated" type="button" class="flex h-7 w-7 items-center justify-center rounded-md text-ink-300 hover:bg-white/10 hover:text-white" :aria-label="paused ? 'Play animation' : 'Pause animation'" @click="toggle">
        <i :class="paused ? 'fa-solid fa-play' : 'fa-solid fa-pause'" class="text-[11px]" aria-hidden="true"></i>
      </button>
    </div>

    <div class="grid sm:grid-cols-[1.55fr_1fr]">
      <!-- Generic floor plan -->
      <div class="bg-white p-3">
        <svg viewBox="0 0 360 252" class="h-auto w-full" role="img" aria-labelledby="dpt-title">
          <title id="dpt-title">Illustration of a generic floor plan: four rooms are outlined with area and perimeter, then light fittings, smoke detectors and socket outlets are boxed and counted</title>
          <defs>
            <pattern id="dpt-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#eef2f4" stroke-width="1" /></pattern>
          </defs>
          <rect width="360" height="252" fill="url(#dpt-grid)" />

          <!-- calibrated dimension (production feature) -->
          <g font-family="Inter, sans-serif" font-size="8" fill="#006f7f">
            <path d="M20 9V15M200 9V15M20 12H200" stroke="#006f7f" stroke-width="1" fill="none" />
            <rect x="86" y="5" width="48" height="12" rx="3" fill="#fff" />
            <text x="110" y="14" text-anchor="middle" font-weight="600">9.00 m</text>
          </g>

          <!-- room fills (AI room take-off) -->
          <g v-for="(r, i) in rooms" :key="r.name">
            <rect :x="r.x + 3" :y="r.y + 3" :width="r.w - 6" :height="r.h - 6" rx="2" fill="#7a5af8" fill-opacity="0.08" stroke="#7a5af8" stroke-width="2" stroke-dasharray="5 3"
              class="transition-opacity duration-500" :class="s >= i + 1 ? 'opacity-100' : 'opacity-0'" />
          </g>

          <!-- walls -->
          <g fill="none" stroke="#1f2a30" stroke-width="4" stroke-linecap="square">
            <path d="M20 20H340V240H20Z" />
            <path d="M200 20V90M200 115V130M20 130H60M90 130H250M280 130H340M140 130V190M140 215V240" />
          </g>
          <!-- drawing labels (room 3 is unlabelled on the drawing) -->
          <g font-family="Inter, sans-serif" font-size="8" fill="#64748b" letter-spacing="0.5">
            <text x="28" y="34">OFFICE 1</text><text x="208" y="34">OFFICE 2</text><text x="148" y="144">MEETING</text>
          </g>

          <!-- plan symbols -->
          <g stroke="#475569" stroke-width="1.2" fill="#fff">
            <g v-for="p in lights" :key="`l${p[0]}-${p[1]}`"><rect :x="p[0] - 6" :y="p[1] - 6" width="12" height="12" /><path :d="`M${p[0] - 6} ${p[1] - 6}l12 12M${p[0] + 6} ${p[1] - 6}l-12 12`" /></g>
            <g v-for="p in smokes" :key="`s${p[0]}-${p[1]}`"><circle :cx="p[0]" :cy="p[1]" r="5" /><circle :cx="p[0]" :cy="p[1]" r="1.5" fill="#475569" /></g>
            <path v-for="p in sockets" :key="`o${p[0]}-${p[1]}`" :d="`M${p[0] - 5} ${p[1]}a5 5 0 0 1 10 0Z`" />
          </g>

          <!-- detection boxes (AI symbol detection) -->
          <g fill="none" stroke-width="1.6">
            <rect v-for="p in lights" :key="`bl${p[0]}-${p[1]}`" :x="p[0] - 9" :y="p[1] - 9" width="18" height="18" rx="2" stroke="#01acc8" class="box" :class="s >= 5 ? 'on' : ''" />
            <rect v-for="p in smokes" :key="`bs${p[0]}-${p[1]}`" :x="p[0] - 8" :y="p[1] - 8" width="16" height="16" rx="2" stroke="#e11d48" class="box" :class="s >= 6 ? 'on' : ''" />
            <rect v-for="p in sockets" :key="`bo${p[0]}-${p[1]}`" :x="p[0] - 8" :y="p[1] - 7" width="16" height="10" rx="2" stroke="#d97706" class="box" :class="s >= 7 ? 'on' : ''" />
          </g>

          <!-- room result chips -->
          <g v-for="(r, i) in rooms" :key="`c${r.name}`" font-family="Inter, sans-serif" class="transition-opacity duration-500" :class="s >= i + 1 ? 'opacity-100' : 'opacity-0'">
            <rect :x="r.cx" :y="r.cy" width="82" height="24" rx="4" fill="#5925dc" />
            <text :x="r.cx + 5" :y="r.cy + 10" font-size="8" font-weight="700" fill="#fff">{{ r.name }}</text>
            <text :x="r.cx + 5" :y="r.cy + 19" font-size="7" fill="#e9e5ff">{{ area(r).toFixed(1) }} m² · P {{ perim(r).toFixed(1) }} m</text>
          </g>
        </svg>
      </div>

      <!-- Progress panel -->
      <div class="border-t border-white/10 p-4 sm:border-l sm:border-t-0">
        <ol class="space-y-2.5">
          <li v-for="st in stages" :key="st.label" class="rounded-lg bg-white/5 px-3 py-2">
            <p class="flex items-center gap-2 text-xs font-semibold" :class="st.state === 'todo' ? 'text-ink-300' : 'text-white'">
              <i :class="st.state === 'done' ? 'fa-solid fa-circle-check text-emerald-300' : st.state === 'active' ? 'fa-solid fa-circle-notch fa-spin text-cyan-300' : 'fa-regular fa-circle text-ink-400'" aria-hidden="true"></i>
              <span class="mr-auto">{{ st.label }}</span>
              <span class="shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider" :class="st.live ? 'bg-emerald-400/15 text-emerald-200' : 'bg-amber-400/15 text-amber-200'">{{ st.live ? 'In production' : 'Early access' }}</span>
            </p>
            <p class="mt-1 text-[11px] text-ink-300">{{ st.detail }}</p>
          </li>
        </ol>
        <ul class="mt-3 grid grid-cols-3 gap-2 text-center">
          <li v-for="c in counts" :key="c.label" class="rounded-lg bg-white/5 px-1 py-2">
            <p class="font-display text-lg font-bold tabular-nums" :class="c.color">{{ c.shown }}</p>
            <p class="text-[10px] leading-tight text-ink-300">{{ c.label }}</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- BOQ -->
    <div class="border-t border-white/10 px-4 py-3">
      <p class="flex items-center gap-2 text-xs font-semibold text-white">
        <i class="fa-solid fa-table-list text-cyan-300" aria-hidden="true"></i>BOQ
        <span class="font-normal text-ink-300">· rates from the client's rate library (sample SGD)</span>
      </p>
      <div class="mt-2 overflow-x-auto">
        <table class="w-full min-w-[300px] text-left text-[11px]">
          <thead class="text-[10px] uppercase tracking-wider text-ink-300">
            <tr><th class="py-1 pr-2 font-semibold">Item</th><th class="py-1 pr-2 text-right font-semibold">Qty</th><th class="py-1 pr-2 text-right font-semibold">Rate</th><th class="py-1 text-right font-semibold">Amount</th></tr>
          </thead>
          <tbody>
            <tr v-for="(b, i) in boq" :key="b.item" class="border-t border-white/10 transition-opacity duration-500" :class="s >= 8 + i ? 'opacity-100' : 'opacity-0'">
              <td class="py-1 pr-2 text-ink-100">{{ b.item }}</td>
              <td class="py-1 pr-2 text-right tabular-nums text-ink-100">{{ b.qty }} {{ b.unit }}</td>
              <td class="py-1 pr-2 text-right tabular-nums text-ink-300">{{ money(b.rate) }}</td>
              <td class="py-1 text-right tabular-nums font-semibold text-white">{{ money(b.qty * b.rate) }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="border-t border-white/20 transition-opacity duration-500" :class="s >= FINAL ? 'opacity-100' : 'opacity-0'">
              <td colspan="3" class="py-1.5 pr-2 text-right font-semibold text-ink-200">Total (editable before export)</td>
              <td class="py-1.5 text-right font-bold tabular-nums text-cyan-300">{{ money(total) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <figcaption class="border-t border-white/10 px-4 py-2 text-[11px] text-ink-300">Illustrative concept with sample quantities and rates, not a product screenshot. Room take-off and symbol detection are in early access, not in production.</figcaption>
  </figure>
</template>

<script setup lang="ts">
// Animated illustration of the DeepPlan take-off (FDD §8.1): rooms outlined
// with area and perimeter, symbols boxed and counted, then a BOQ built from a
// rate library. Room take-off and symbol detection are early access.
// SSR and reduced-motion users see the final state.
interface Room { name: string; x: number; y: number; w: number; h: number; cx: number; cy: number }
const M_PER_UNIT = 0.05 // drawing scale: 20 units = 1 m
const rooms: Room[] = [
  { name: 'Office 1', x: 20, y: 20, w: 180, h: 110, cx: 28, cy: 40 },
  { name: 'Office 2', x: 200, y: 20, w: 140, h: 110, cx: 208, cy: 40 },
  { name: 'Room 3', x: 20, y: 130, w: 120, h: 110, cx: 28, cy: 140 },
  { name: 'Meeting', x: 140, y: 130, w: 200, h: 110, cx: 148, cy: 150 }
]
const area = (r: Room) => r.w * M_PER_UNIT * r.h * M_PER_UNIT
const perim = (r: Room) => 2 * (r.w + r.h) * M_PER_UNIT
const lights: [number, number][] = [[70, 85], [150, 85], [240, 85], [300, 85], [80, 195], [200, 195], [290, 195]]
const smokes: [number, number][] = [[110, 112], [270, 112], [60, 222], [245, 222]]
const sockets: [number, number][] = [[28, 75], [192, 60], [332, 105], [28, 180], [332, 200], [170, 232]]

const FINAL = 11 // 0 plan · 1–4 rooms · 5 lights · 6 smoke · 7 sockets · 8–10 BOQ rows · 11 total
const HOLD = 4
const root = ref<HTMLElement | null>(null)
const step = ref(FINAL)
const animated = ref(false)
const paused = ref(false)
const s = computed(() => Math.min(step.value, FINAL))

const state = (from: number, to: number) => (s.value > to ? 'done' : s.value >= from ? 'active' : 'todo')
const stages = computed(() => [
  { label: 'Room take-off', live: false, state: state(1, 4), detail: `Walls found, rooms outlined, labels read · ${Math.min(s.value, 4)} of 4 rooms` },
  { label: 'Symbol detection', live: false, state: state(5, 7), detail: 'Trained model, or box one symbol to count its matches' },
  { label: 'BOQ generation', live: true, state: state(8, 10), detail: 'Lines from rooms and counts, rates from the library' }
])
const counts = computed(() => [
  { label: 'Light fittings', shown: s.value >= 5 ? lights.length : 0, color: 'text-cyan-300' },
  { label: 'Smoke detectors', shown: s.value >= 6 ? smokes.length : 0, color: 'text-rose-300' },
  { label: 'Socket outlets', shown: s.value >= 7 ? sockets.length : 0, color: 'text-amber-300' }
])
const boq = [
  { item: 'Light fitting', qty: lights.length, unit: 'nr', rate: 85 },
  { item: 'Smoke detector', qty: smokes.length, unit: 'nr', rate: 95 },
  { item: 'Socket outlet', qty: sockets.length, unit: 'nr', rate: 60 }
]
const total = boq.reduce((n, b) => n + b.qty * b.rate, 0)
const money = (n: number) => n.toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

let timer: ReturnType<typeof setInterval> | undefined
let io: IntersectionObserver | undefined
const tick = () => { step.value = step.value >= FINAL + HOLD ? 0 : step.value + 1 }
const start = () => { if (!timer && !paused.value) timer = setInterval(tick, 950) }
const stop = () => { clearInterval(timer); timer = undefined }
const toggle = () => { paused.value = !paused.value; paused.value ? stop() : start() }

onMounted(() => {
  if (!root.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  animated.value = true
  const r = root.value.getBoundingClientRect()
  if (r.top > window.innerHeight || r.bottom < 0) step.value = 0
  io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.25 })
  io.observe(root.value)
})
onBeforeUnmount(() => { stop(); io?.disconnect() })
</script>

<style scoped>
.box { opacity: 0; transform-box: fill-box; transform-origin: center; transform: scale(1.6); transition: opacity 0.4s ease-out, transform 0.4s ease-out; }
.box.on { opacity: 1; transform: scale(1); }
@media (prefers-reduced-motion: reduce) { .box { transition: none; } }
</style>
