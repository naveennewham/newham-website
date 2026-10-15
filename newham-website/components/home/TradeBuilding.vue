<template>
  <figure ref="root" class="relative overflow-hidden rounded-3xl border border-white/10 bg-[#04161b] p-5 shadow-frame sm:p-6">
    <div class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden="true"></div>
    <div class="relative grid items-center gap-4 sm:grid-cols-[1.6fr_1fr]">
      <!-- building cutaway -->
      <svg viewBox="8 4 244 210" class="w-full min-h-[260px]" aria-hidden="true">
        <!-- structure -->
        <g stroke="rgba(255,255,255,.35)" stroke-width="1.5" fill="none">
          <rect x="30" y="30" width="200" height="180" rx="3" />
          <line v-for="y in [75, 120, 165]" :key="y" x1="30" :y1="y" x2="230" :y2="y" />
          <line x1="130" y1="30" x2="130" y2="210" stroke-dasharray="3 4" />
          <path d="M20 30 L130 8 L240 30" />
        </g>
        <line x1="10" y1="210" x2="250" y2="210" stroke="rgba(255,255,255,.5)" stroke-width="2" />
        <!-- trades -->
        <g v-for="(t, i) in trades" :key="t.name" class="trade" :class="active === i ? 'on' : ''" :style="{ '--c': t.color }">
          <path v-for="(d, k) in t.paths" :key="k" :d="d" fill="none" :stroke="t.color" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="pipe" />
          <circle v-for="(c, k) in t.dots" :key="`d${k}`" :cx="c[0]" :cy="c[1]" r="3.6" :fill="t.color" />
        </g>
      </svg>

      <!-- legend -->
      <ul class="space-y-1.5">
        <li v-for="(t, i) in trades" :key="t.name">
          <button type="button" class="flex w-full items-center gap-3 rounded-xl border px-3 py-2 text-left transition-colors duration-300" :class="active === i ? 'border-white/25 bg-white/10' : 'border-transparent hover:bg-white/5'" @click="pick(i)">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm" :style="{ backgroundColor: `${t.color}26`, color: t.color }"><i :class="t.icon" aria-hidden="true"></i></span>
            <span class="min-w-0">
              <span class="block text-sm font-semibold text-white">{{ t.name }}</span>
              <span class="hidden text-xs leading-snug text-ink-300 xl:block">{{ t.text }}</span>
            </span>
          </button>
        </li>
      </ul>
    </div>
    <figcaption class="relative mt-4 text-center text-xs text-ink-300">The M&amp;E packages we estimate, design and staff — across every sector below</figcaption>
  </figure>
</template>

<script setup lang="ts">
// Building cutaway; each M&E trade's services light up in turn (or on click).
const trades = [
  { name: 'Fire protection', icon: 'fa-solid fa-fire-extinguisher', color: '#f87171', text: 'Sprinklers, hose reels, risers, fire alarm',
    paths: ['M40 70 H220', 'M40 115 H220', 'M40 160 H220', 'M215 205 V40'], dots: [[60, 70], [100, 70], [160, 70], [200, 70], [60, 115], [100, 115], [160, 115], [200, 115], [60, 160], [100, 160], [160, 160], [200, 160]] },
  { name: 'ACMV', icon: 'fa-solid fa-wind', color: '#60a5fa', text: 'Air-conditioning and ventilation ductwork',
    paths: ['M45 40 H215 V50 H45 Z', 'M45 85 H120', 'M140 85 H215', 'M45 130 H120', 'M140 130 H215'], dots: [[80, 85], [180, 85], [80, 130], [180, 130]] },
  { name: 'Electrical', icon: 'fa-solid fa-bolt', color: '#facc15', text: 'Power, lighting, cabling and containment',
    paths: ['M38 205 V40', 'M38 60 H120', 'M38 105 H120', 'M38 150 H120', 'M38 195 H120'], dots: [[70, 60], [110, 60], [70, 105], [110, 105], [70, 150], [110, 150], [70, 195], [110, 195]] },
  { name: 'ELV', icon: 'fa-solid fa-network-wired', color: '#a78bfa', text: 'CCTV, access control, data',
    paths: ['M222 205 V36', 'M140 95 H222', 'M140 140 H222', 'M140 185 H222'], dots: [[160, 95], [190, 95], [160, 140], [190, 140], [160, 185], [190, 185]] },
  { name: 'Plumbing & sanitary', icon: 'fa-solid fa-faucet-drip', color: '#2dd4bf', text: 'Water, sanitary and drainage pipework',
    paths: ['M125 208 V36', 'M125 100 H95 V110', 'M125 145 H95 V155', 'M125 190 H95 V200', 'M125 100 H155', 'M125 145 H155'], dots: [[95, 110], [95, 155], [95, 200], [155, 100], [155, 145]] }
]
const root = ref<HTMLElement | null>(null)
const active = ref(0)
let picked = false
let t: ReturnType<typeof setInterval> | undefined
let io: IntersectionObserver | undefined
function pick(i: number) { picked = true; clearInterval(t); active.value = i }
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  io = new IntersectionObserver(([e]) => {
    clearInterval(t)
    if (e?.isIntersecting && !picked) t = setInterval(() => { active.value = (active.value + 1) % trades.length }, 2200)
  }, { threshold: 0.3 })
  if (root.value) io.observe(root.value)
})
onBeforeUnmount(() => { clearInterval(t); io?.disconnect() })
</script>

<style scoped>
.trade { opacity: .28; transition: opacity .5s ease; }
.trade.on { opacity: 1; filter: drop-shadow(0 0 6px var(--c)); }
.trade.on .pipe { stroke-dasharray: 400; stroke-dashoffset: 400; animation: draw 1.4s ease-out forwards; }
@keyframes draw { to { stroke-dashoffset: 0; } }
@media (prefers-reduced-motion: reduce) { .trade { opacity: .9; } .trade.on .pipe { animation: none; stroke-dasharray: none; } }
</style>
