<template>
  <figure ref="el" class="rounded-2xl border p-5" :class="dark ? 'border-white/10 bg-white/5' : 'border-ink-100 bg-white shadow-card'">
    <figcaption class="flex items-start justify-between gap-3">
      <span>
        <span class="block text-sm font-semibold" :class="dark ? 'text-white' : 'text-ink-900'">{{ title }}</span>
        <span v-if="subtitle" class="block text-xs" :class="dark ? 'text-ink-300' : 'text-ink-500'">{{ subtitle }}</span>
      </span>
      <span v-if="sample" class="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider" :class="dark ? 'bg-white/10 text-ink-200' : 'bg-ink-100 text-ink-600'">Sample data</span>
    </figcaption>

    <!-- Bars (optionally two series, e.g. budget vs actual) -->
    <svg v-if="type === 'bar'" :viewBox="`0 0 ${W} ${H}`" class="mt-4 w-full" role="img" :aria-label="ariaLabel">
      <line v-for="g in 4" :key="g" x1="0" :x2="W" :y1="H - 20 - (g * (H - 30)) / 4" :y2="H - 20 - (g * (H - 30)) / 4" :class="dark ? 'stroke-white/10' : 'stroke-ink-100'" />
      <g v-for="(d, i) in data" :key="d.label">
        <rect
          v-for="(v, s) in values(d)"
          :key="s"
          :x="barX(i, s)"
          :width="barW"
          :y="H - 20 - (seen ? h(v) : 0)"
          :height="seen ? h(v) : 0"
          rx="3"
          :class="s === 0 ? (dark ? 'fill-cyan-400' : 'fill-brand-600') : (dark ? 'fill-white/40' : 'fill-cyan-400')"
          class="transition-all duration-1000 ease-out motion-reduce:transition-none"
          :style="{ transitionDelay: `${i * 70}ms` }"
        />
        <text :x="barX(i, 0) + groupW / 2 - 2" :y="H - 4" text-anchor="middle" class="text-[10px]" :class="dark ? 'fill-ink-300' : 'fill-ink-500'">{{ d.label }}</text>
      </g>
    </svg>

    <!-- Line -->
    <svg v-else-if="type === 'line'" :viewBox="`0 0 ${W} ${H}`" class="mt-4 w-full" role="img" :aria-label="ariaLabel">
      <line v-for="g in 4" :key="g" x1="0" :x2="W" :y1="H - 20 - (g * (H - 30)) / 4" :y2="H - 20 - (g * (H - 30)) / 4" :class="dark ? 'stroke-white/10' : 'stroke-ink-100'" />
      <polyline :points="linePoints" fill="none" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" :class="dark ? 'stroke-cyan-400' : 'stroke-brand-600'" pathLength="1" stroke-dasharray="1" :stroke-dashoffset="seen ? 0 : 1" class="transition-[stroke-dashoffset] duration-[1600ms] ease-out motion-reduce:transition-none" />
      <text v-for="(d, i) in data" :key="d.label" :x="pointX(i)" :y="H - 4" text-anchor="middle" class="text-[10px]" :class="dark ? 'fill-ink-300' : 'fill-ink-500'">{{ d.label }}</text>
    </svg>

    <!-- Donut -->
    <div v-else class="mt-4 flex items-center gap-6">
      <svg viewBox="0 0 120 120" class="h-32 w-32 shrink-0 -rotate-90" role="img" :aria-label="ariaLabel">
        <circle cx="60" cy="60" r="48" fill="none" stroke-width="16" :class="dark ? 'stroke-white/10' : 'stroke-ink-100'" />
        <circle
          v-for="(seg, i) in donut"
          :key="seg.label"
          cx="60" cy="60" r="48" fill="none" stroke-width="16"
          pathLength="100"
          :stroke-dasharray="`${seen ? seg.pct : 0} 100`"
          :stroke-dashoffset="-seg.offset"
          :class="palette[i % palette.length]"
          class="transition-all duration-1000 ease-out motion-reduce:transition-none"
        />
      </svg>
      <ul class="space-y-1.5 text-xs">
        <li v-for="(seg, i) in donut" :key="seg.label" class="flex items-center gap-2" :class="dark ? 'text-ink-200' : 'text-ink-700'">
          <span class="h-2.5 w-2.5 rounded-sm" :class="palette[i % palette.length].replace('stroke-', 'bg-')"></span>{{ seg.label }} · {{ Math.round(seg.pct) }}%
        </li>
      </ul>
    </div>

    <p v-if="legend" class="mt-3 flex gap-4 text-xs" :class="dark ? 'text-ink-300' : 'text-ink-500'">
      <span v-for="(l, i) in legend" :key="l" class="flex items-center gap-1.5"><span class="h-2 w-2 rounded-sm" :class="i === 0 ? (dark ? 'bg-cyan-400' : 'bg-brand-600') : (dark ? 'bg-white/40' : 'bg-cyan-400')"></span>{{ l }}</span>
    </p>
  </figure>
</template>

<script setup lang="ts">
// Lightweight animated SVG chart. Illustrative charts must keep `sample` on so
// visitors never mistake them for customer results.
interface Datum { label: string; value: number; value2?: number }
const props = withDefaults(defineProps<{
  type?: 'bar' | 'line' | 'donut'; title: string; subtitle?: string; data: Datum[]
  legend?: string[]; sample?: boolean; dark?: boolean
}>(), { type: 'bar', sample: true })

const W = 320; const H = 160
const el = ref<HTMLElement | null>(null)
const seen = ref(false)
const palette = ['stroke-brand-600', 'stroke-cyan-400', 'stroke-amber-400', 'stroke-ai-500', 'stroke-ink-300']
const max = computed(() => Math.max(1, ...props.data.flatMap((d) => [d.value, d.value2 ?? 0])))
const values = (d: Datum) => (d.value2 != null ? [d.value, d.value2] : [d.value])
const h = (v: number) => (v / max.value) * (H - 30)
const groupW = computed(() => W / props.data.length)
const barW = computed(() => Math.min(22, (groupW.value - 10) / (props.data.some((d) => d.value2 != null) ? 2 : 1)))
const barX = (i: number, s: number) => {
  const series = props.data.some((d) => d.value2 != null) ? 2 : 1
  return i * groupW.value + (groupW.value - barW.value * series - (series - 1) * 3) / 2 + s * (barW.value + 3)
}
const pointX = (i: number) => (i + 0.5) * (W / props.data.length)
const linePoints = computed(() => props.data.map((d, i) => `${pointX(i)},${H - 20 - h(d.value)}`).join(' '))
const donut = computed(() => {
  const total = props.data.reduce((n, d) => n + d.value, 0) || 1
  let acc = 0
  return props.data.map((d) => { const pct = (d.value / total) * 100; const seg = { label: d.label, pct, offset: acc }; acc += pct; return seg })
})
const ariaLabel = computed(() => `${props.title}${props.sample ? ' (sample data)' : ''}: ` + props.data.map((d) => `${d.label} ${d.value}${d.value2 != null ? ` / ${d.value2}` : ''}`).join(', '))

let io: IntersectionObserver | undefined
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) { seen.value = true; return }
  io = new IntersectionObserver((e) => { if (e.some((x) => x.isIntersecting)) { seen.value = true; io?.disconnect() } }, { threshold: 0.3 })
  if (el.value) io.observe(el.value)
})
onBeforeUnmount(() => io?.disconnect())
</script>
