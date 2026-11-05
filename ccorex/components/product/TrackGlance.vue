<template>
  <figure ref="root" class="relative mx-auto w-full max-w-[1100px]">
    <svg viewBox="0 0 1600 900" class="tg-glance h-auto w-full" role="img" aria-labelledby="tg-title tg-desc">
      <title id="tg-title">DeepTrack at a glance: one project record from contract to margin</title>
      <desc id="tg-desc">An example project moves through eight steps. Each person adds their part and the project's budget, committed cost, cost to date and margin update for everyone.</desc>

      <!-- Current step -->
      <g>
        <rect class="tg-now" x="350" y="24" width="900" height="54" rx="14" />
        <text class="tg-tag" x="376" y="57">{{ tag }}</text>
        <text class="tg-cap" :x="376 + tag.length * 8.6 + 22" y="59">{{ STEPS[k].cap }}</text>
        <g v-for="c in chips" :key="`${k}-${c.label}`" class="tg-chip" :class="{ on: c.on, ok: c.ok }">
          <rect :x="c.x" y="37" :width="c.w" height="28" rx="14" />
          <text :x="c.x + c.w / 2" y="56" text-anchor="middle">{{ c.label }}</text>
        </g>
      </g>

      <!-- Ring and progress -->
      <circle class="tg-ring" :cx="CX" :cy="CY" :r="R" />
      <circle class="tg-ringp" :cx="CX" :cy="CY" :r="R" :stroke-dasharray="CIRC" :stroke-dashoffset="CIRC - CIRC * ringFrac" :transform="`rotate(-90 ${CX} ${CY})`" />

      <!-- Steps -->
      <g v-for="(st, i) in nodes" :key="st.t" class="tg-node" :class="{ on: i === k && dwelling, done: i < k }">
        <circle class="c" :cx="st.x" :cy="st.y" r="38" />
        <path class="ic" :transform="`translate(${st.x},${st.y})`" :d="IC[st.icon]" />
        <text class="tg-nl" :x="st.lx" :y="st.ly" :text-anchor="st.anchor">{{ i + 1 }} · {{ st.t }}</text>
        <text class="tg-ns" :x="st.lx" :y="st.ly + 22" :text-anchor="st.anchor">{{ st.s }}</text>
      </g>

      <!-- Project card -->
      <g :transform="`translate(${CX},${CY})`">
        <rect class="tg-card" x="-180" y="-128" width="360" height="256" rx="22" />
        <text class="tg-k" x="0" y="-98" text-anchor="middle">EXAMPLE PROJECT</text>
        <text class="tg-contract" x="0" y="-74" text-anchor="middle">Contract S$1,850,000</text>
        <rect class="tg-track" x="-150" y="-60" width="300" height="8" rx="4" />
        <rect class="tg-bar" x="-150" y="-60" :width="300 * claimed / 100" height="8" rx="4" />
        <text class="tg-ns" x="150" y="-38" text-anchor="end" style="font-size: 14px">{{ claimed }}% claimed</text>
        <g v-for="(tile, i) in TILES" :key="tile.label" class="tg-tile" :class="{ bump: bump === i }" :transform="`translate(${i % 2 ? 10 : -150},${i < 2 ? -24 : 50})`">
          <rect width="140" height="64" rx="12" />
          <text class="tg-k" x="12" y="21">{{ tile.label }}</text>
          <text class="tg-v" :class="{ good: i === 3 }" x="12" y="51">{{ values[i] }}</text>
        </g>
      </g>

      <circle v-if="!still" class="tg-tok" :cx="tok.x" :cy="tok.y" r="14" />

      <!-- Footer -->
      <g v-for="(f, i) in FOOT" :key="f[0]" :transform="`translate(${230 + i * 370},856)`">
        <circle class="tg-fc" r="26" />
        <path class="ic" :d="f[2]" />
        <text class="tg-fa" x="40" y="-2">{{ f[0] }}</text>
        <text class="tg-fb" x="40" y="20">{{ f[1] }}</text>
      </g>
    </svg>

    <figcaption class="mt-3 flex items-center justify-center gap-3 text-xs text-ink-500">
      <span>Illustrative figures. Approval routes and thresholds follow your own settings.</span>
      <button v-if="!reduced" type="button" class="font-semibold text-brand-700 hover:text-brand-900" :aria-pressed="!playing" @click="playing = !playing">
        <i :class="playing ? 'fa-solid fa-pause' : 'fa-solid fa-play'" class="mr-1" aria-hidden="true"></i>{{ playing ? 'Pause' : 'Play' }}
      </button>
    </figcaption>

    <ol class="sr-only">
      <li v-for="st in STEPS" :key="st.t">{{ st.t }} ({{ st.s }}): {{ st.cap }}</li>
    </ol>
  </figure>
</template>

<script setup lang="ts">
// The DeepTrack loop from the demo deck, rebuilt for the product page: one project record that
// each role adds to, with the project's numbers updating as it goes. Plays only while on screen,
// and shows the finished state without motion for prefers-reduced-motion. Keep the captions to
// what DeepTrack ships today (no VO register or SOP Act tracking: those are early access).
const CX = 800, CY = 480, R = 290
const CIRC = 2 * Math.PI * R
const IC: Record<string, string> = {
  contract: 'M-11 -14h18l6 6v22h-24z M-5 0h12 M-5 7h12',
  budget: 'M-14 10 L-6 -2 L2 6 L14 -10 M-14 14h28',
  pr: 'M-12 -10h24v20h-24z M-12 -2h24 M-6 -10v20',
  po: 'M-14 -8h22l4 10h-26z M-10 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M4 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0',
  match: 'M-14 2 L-5 11 L14 -10',
  hours: 'M0 -14a14 14 0 1 0 0.01 0 M0 -7v8l6 4',
  claim: 'M-10 -14h20v28h-20z M-5 -5h10 M-5 2h10 M-5 9h6',
  margin: 'M-14 12 L-14 -12 M-14 12 L14 12 M-8 4 L-2 -4 L4 2 L12 -8'
}
interface Step { t: string; s: string; cap: string; icon: string; chips?: string[]; tile?: [number, number]; pct?: number }
const STEPS: Step[] = [
  { t: 'Contract', s: 'QS', cap: 'Contract S$1.85m · client PO · 5% retention', icon: 'contract' },
  { t: 'Budget', s: 'PM', cap: 'Budget S$1,530,000 approved: the spending limit', icon: 'budget', chips: ['GM', 'MD'], tile: [0, 1530000] },
  { t: 'Request', s: 'Site', cap: 'Purchase request checked against the budget line', icon: 'pr', chips: ['PM', 'GM', 'MD'] },
  { t: 'Order', s: 'Buyer', cap: 'PO issued: counted as committed cost at once', icon: 'po', tile: [1, 412600] },
  { t: 'Match', s: 'Accounts', cap: 'Invoice matched to PO and delivery: cost to date', icon: 'match', chips: ['PM', 'PD', 'Director'], tile: [2, 618300] },
  { t: 'Hours', s: 'Site team', cap: '520 crew hours approved: labour cost on the job', icon: 'hours', chips: ['PM'] },
  { t: 'Claim', s: 'QS', cap: 'Claim 4: retention and 9% GST, certificate PDF', icon: 'claim', pct: 41.5 },
  { t: 'Margin', s: 'Finance', cap: 'Month locked · journal CSV out · margin known', icon: 'margin', tile: [3, 149450] }
]
const TILES = [{ label: 'BUDGET' }, { label: 'COMMITTED' }, { label: 'COST TO DATE' }, { label: 'MARGIN' }]
const FOOT: [string, string, string][] = [
  ['One login', 'roles decide screens', 'M-12 -2a12 12 0 1 1 24 0v12h-24z M0 4v5'],
  ['Rates protected', 'PMs see totals, not rates', 'M-9 -2v-5a9 9 0 0 1 18 0v5 M-12 -2h24v16h-24z'],
  ['Your accounts stay', 'GL costs in · journal out', 'M-14 0h10 M4 0h10 M-6 -7h12v14h-12z'],
  ['Email alerts', 'at each approval step', 'M-14 -9h28v18h-28z M-14 -9l14 11 14 -11']
]
const N = STEPS.length
const ang = (i: number) => -Math.PI / 2 + i * 2 * Math.PI / N
const nodes = STEPS.map((st, i) => {
  const a = ang(i), x = CX + R * Math.cos(a), y = CY + R * Math.sin(a)
  // Labels sit beside each circle, on the outer side: right half reads left-to-right from the
  // circle, left half ends at it. The top and bottom steps take the right.
  const left = Math.cos(a) < -0.01
  return { ...st, x, y, lx: left ? x - 54 : x + 54, ly: y - 4, anchor: left ? 'end' : 'start' }
})
const fmt = (n: number) => 'S$' + n.toLocaleString('en-SG')

const DWELL = 1900, MOVE = 700, HOP = DWELL + MOVE, TOTAL = HOP * N + 1500
const root = ref<HTMLElement | null>(null)
const reduced = ref(false)
const playing = ref(true)
const visible = ref(false)
// Server render and reduced motion show the finished loop: every value filled in.
const still = ref(true)
const k = ref(N - 1)
const ease = ref(0)
const bump = ref(-1)
const values = ref(STEPS.filter((s) => s.tile).map((s) => fmt(s.tile![1])))
const claimed = ref(41.5)
const chipOn = ref(99)

const dwelling = computed(() => ease.value === 0)
const tag = computed(() => `STEP ${k.value + 1} · ${STEPS[k.value].s.toUpperCase()}`)
const ringFrac = computed(() => (still.value ? 1 : (k.value + ease.value) / N))
const tok = computed(() => {
  const a0 = ang(k.value), a = a0 + (ang(k.value + 1) - a0) * ease.value
  return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) }
})
const chips = computed(() => {
  let x = 1240
  return (STEPS[k.value].chips ?? []).slice().reverse().map((label, i, arr) => {
    const w = label.length * 8.5 + 26
    x -= w + 8
    const n = arr.length - 1 - i
    return { label, x, w, on: still.value || chipOn.value >= n, ok: still.value || chipOn.value >= n + 1 }
  })
})

let t = 0, last: number | null = null, raf = 0, shown = -1, timers: ReturnType<typeof setTimeout>[] = []
function reset() {
  shown = -1
  values.value = TILES.map(() => '—')
  claimed.value = 0
}
function enter(i: number) {
  const st = STEPS[i]
  timers.forEach(clearTimeout)
  chipOn.value = -1
  timers = (st.chips ?? []).flatMap((_, n) => [setTimeout(() => (chipOn.value = Math.max(chipOn.value, n)), 150 + n * 300)])
  timers.push(setTimeout(() => (chipOn.value = 99), 150 + (st.chips?.length ?? 0) * 300 + 80))
  if (st.tile) {
    const [ti, v] = st.tile
    values.value[ti] = fmt(v)
    bump.value = ti
    timers.push(setTimeout(() => (bump.value = -1), 900))
  }
  if (st.pct) claimed.value = st.pct
}
function frame(ts: number) {
  if (last !== null && playing.value && visible.value) t += ts - last
  last = ts
  if (t > TOTAL) { t = 0; reset() }
  const p = Math.min(t / HOP, N - 0.001), i = Math.floor(p), f = p - i
  const e = f < DWELL / HOP ? 0 : (f - DWELL / HOP) / (MOVE / HOP)
  ease.value = e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e
  k.value = i
  if (i > shown) { shown = i; enter(i) }
  raf = requestAnimationFrame(frame)
}

let io: IntersectionObserver | null = null
onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced.value) return
  still.value = false
  k.value = 0
  reset()
  io = new IntersectionObserver(([en]) => (visible.value = en.isIntersecting), { threshold: 0.3 })
  if (root.value) io.observe(root.value)
  raf = requestAnimationFrame(frame)
})
onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  timers.forEach(clearTimeout)
  io?.disconnect()
})
</script>

<style scoped>
svg { font-family: Inter, system-ui, sans-serif; }
.tg-now { fill: #083f49; }
.tg-tag { font: 700 13px Inter, sans-serif; fill: #f5b544; letter-spacing: .12em; }
.tg-cap { font: 600 19px Inter, sans-serif; fill: #f5f7f9; }
.tg-chip { opacity: 0; transition: opacity .3s; }
.tg-chip.on { opacity: 1; }
.tg-chip rect { fill: #064c58; stroke: #2a6672; stroke-width: 1.5; }
.tg-chip text { font: 700 14px Inter, sans-serif; fill: #bfd9de; }
.tg-chip.ok rect { fill: #1b7f3b; stroke: #1b7f3b; }
.tg-chip.ok text { fill: #fff; }
.tg-ring { fill: none; stroke: rgb(var(--ink-200)); stroke-width: 3; }
.tg-ringp { fill: none; stroke: #0b8798; stroke-width: 4; stroke-linecap: round; }
.tg-node .c { fill: #fff; stroke: rgb(var(--ink-200)); stroke-width: 2; transition: all .35s; }
.tg-node.done .c { stroke: #005d6c; stroke-width: 3; }
.tg-node.on .c { fill: rgb(var(--brand-50)); stroke: #0b8798; stroke-width: 5; }
.ic { stroke: #005d6c; stroke-width: 2.6; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.tg-nl { font: 700 20px Inter, sans-serif; fill: rgb(var(--ink-900)); }
.tg-ns { font: 500 16px Inter, sans-serif; fill: rgb(var(--ink-500)); }
/* A halo in the section's background colour keeps labels clear of the ring line. */
.tg-node text { paint-order: stroke; stroke: rgb(var(--ink-50)); stroke-width: 8px; stroke-linejoin: round; }
.tg-card { fill: #fff; stroke: rgb(var(--ink-200)); stroke-width: 2; filter: drop-shadow(0 18px 40px rgba(0, 61, 72, .12)); }
.tg-contract { font: 700 16px Inter, sans-serif; fill: rgb(var(--ink-900)); }
.tg-track { fill: rgb(var(--ink-200)); }
.tg-bar { fill: #005d6c; transition: width .8s; }
.tg-k { font: 700 12px Inter, sans-serif; fill: rgb(var(--ink-500)); letter-spacing: .1em; }
.tg-v { font: 700 21px Inter, sans-serif; fill: #005d6c; font-variant-numeric: tabular-nums; }
.tg-v.good { fill: #1b7f3b; }
.tg-tile rect { fill: rgb(var(--ink-50)); stroke: rgb(var(--ink-200)); stroke-width: 1.5; transition: all .3s; }
.tg-tile.bump rect { fill: rgb(var(--brand-50)); stroke: #0b8798; }
.tg-tok { fill: #f5b544; stroke: #fff; stroke-width: 3; filter: drop-shadow(0 4px 10px rgba(0, 0, 0, .25)); }
.tg-fc { fill: #fff; stroke: rgb(var(--ink-200)); stroke-width: 2; }
.tg-fa { font: 700 17px Inter, sans-serif; fill: rgb(var(--ink-900)); }
.tg-fb { font: 500 14px Inter, sans-serif; fill: rgb(var(--ink-500)); }
/* Dark theme: the white surfaces become raised panels. */
:global(html.dark .tg-card), :global(html.dark .tg-node .c), :global(html.dark .tg-fc) { fill: rgb(var(--ink-100)); }
:global(html.dark .tg-glance .ic) { stroke: #62bfcb; }
:global(html.dark .tg-v) { fill: #62bfcb; }
:global(html.dark .tg-v.good) { fill: #4ade80; }
:global(html.dark .tg-bar) { fill: #2aa3b3; }
</style>
