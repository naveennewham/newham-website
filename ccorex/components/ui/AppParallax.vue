<template>
  <section ref="root" class="relative overflow-hidden bg-[#03191f] py-20 text-white sm:py-24">
    <!-- backdrop -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div class="absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-ai-500/20 blur-3xl"></div>
    </div>

    <div class="container-site relative text-center">
      <p class="eyebrow-dark">{{ eyebrow }}</p>
      <h2 class="mx-auto mt-3 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">{{ title }}</h2>
      <p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">{{ lead }}</p>
      <ul class="mt-5 flex flex-wrap justify-center gap-2">
        <li v-for="b in bullets" :key="b" class="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-100"><i class="fa-solid fa-circle-check text-[10px] text-cyan-400" aria-hidden="true"></i>{{ b }}</li>
      </ul>
    </div>

    <!-- 3D carousel: the centre card is large; neighbours are smaller, tilted and spaced so nothing overlaps -->
    <div
      ref="stage"
      class="relative mx-auto mt-10 h-[470px] max-w-7xl [perspective:1600px]"
      role="region"
      aria-roledescription="carousel"
      aria-label="CCorex apps"
      @touchstart.passive="touchStart"
      @touchend.passive="touchEnd"
      @mouseleave="hover = false"
      @focusin="hover = true"
      @focusout="hover = false"
    >
      <article
        v-for="(c, i) in cards"
        :key="c.app"
        class="absolute left-1/2 top-1/2 w-[300px] sm:w-[340px]"
        :style="cardStyle(i)"
        :aria-hidden="i !== current"
        aria-roledescription="slide"
        :aria-label="`${i + 1} of ${cards.length}: ${c.name}`"
      >
        <div
          class="rounded-3xl border p-6 text-left transition-[border-color,box-shadow] duration-300"
          :class="[i === current ? '' : 'cursor-pointer']"
          @mouseenter="hover = true"
          @click="i !== current && go(i)"
          :style="i === current ? { borderColor: 'rgba(51,207,231,.7)', backgroundColor: '#0d2f37', boxShadow: '0 30px 80px -20px rgba(1,172,200,.55)' } : { borderColor: 'rgba(255,255,255,.1)', backgroundColor: '#0a242a' }"
        >
          <div class="flex items-start justify-between gap-3">
            <UiAppIcon :app="c.app" size="lg" />
            <span v-if="c.badge" class="rounded-full bg-ai-500/25 px-2 py-0.5 text-[10px] font-semibold text-ai-100">{{ c.badge }}</span>
          </div>
          <p class="mt-5 text-xs font-semibold uppercase tracking-wider text-cyan-300">{{ c.category }}</p>
          <h3 class="mt-1 text-2xl font-bold text-white">{{ c.name }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-200">{{ c.text }}</p>
          <ul class="mt-4 space-y-1.5">
            <li v-for="p in c.points" :key="p" class="flex gap-2 text-sm text-ink-100"><i class="fa-solid fa-check mt-1 text-[10px] text-cyan-400" aria-hidden="true"></i>{{ p }}</li>
          </ul>
          <NuxtLink :to="linkFor(c.app)" :tabindex="i === current ? undefined : -1" class="group mt-5 inline-flex items-center gap-1.5 rounded-lg bg-cyan-400/10 px-3 py-1.5 text-sm font-semibold text-cyan-300 transition-colors hover:bg-cyan-400/20 hover:text-white" @click.stop>Explore {{ c.name }} <i class="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-0.5" aria-hidden="true"></i></NuxtLink>
        </div>
      </article>
    </div>

    <!-- Controls -->
    <div class="container-site relative mt-6 flex flex-wrap items-center justify-center gap-2">
      <button type="button" class="ctl" aria-label="Previous app" @click="go(current - 1)"><i class="fa-solid fa-chevron-left text-xs" aria-hidden="true"></i></button>
      <button
        v-for="(c, i) in cards"
        :key="c.app"
        type="button"
        class="rounded-xl p-0.5 transition-all duration-300"
        :class="i === current ? 'scale-110 ring-2 ring-cyan-400' : 'opacity-60 hover:opacity-100'"
        :aria-label="`Show ${c.name}`"
        :aria-current="i === current"
        @click="go(i)"
      >
        <UiAppIcon :app="c.app" size="sm" />
      </button>
      <button type="button" class="ctl" aria-label="Next app" @click="go(current + 1)"><i class="fa-solid fa-chevron-right text-xs" aria-hidden="true"></i></button>
      <button type="button" class="ctl" :aria-label="paused ? 'Play carousel' : 'Pause carousel'" @click="paused = !paused"><i :class="paused ? 'fa-solid fa-play' : 'fa-solid fa-pause'" class="text-[10px]" aria-hidden="true"></i></button>
      <NuxtLink v-if="cta" :to="cta.to" class="ml-2 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-brand-950 transition-transform hover:-translate-y-0.5">{{ cta.label }} <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// Auto-playing 3D app carousel. DeepCost starts in the centre; it loops endlessly,
// pauses on hover, focus, off-screen or by the pause button, and never autoplays for reduced motion.
const props = withDefaults(defineProps<{
  eyebrow?: string; title?: string; lead?: string; bullets?: string[]
  cta?: { label: string; to: string }
  linkFor?: (app: string) => string
}>(), {
  eyebrow: 'The CCorex suite',
  title: 'Seven apps. One sign-in.',
  lead: 'Each app does one job well — and they share the same users, roles and AI assistant.',
  bullets: () => ['One portal at dash.ccorex.com', 'Users and roles managed once', 'ARIVU AI inside every app'],
  linkFor: (app: string) => `/products/${app}`
})

const cards = [
  { app: 'deepcost', name: 'DeepCost', category: 'MEP estimation', text: 'Tender to priced Form of Tender, from one linked record.', points: ['AI tender summary', 'Area-based material take-off', 'FOT AI on the client’s BOQ PDF'] },
  { app: 'deepplan-ai', name: 'DeepPlan AI', category: 'Drawing take-off', text: 'Measure rooms and count symbols on drawings, then build a priced BOQ.', points: ['Scale calibration and rooms', 'AI symbol detection', 'BOQ from your rates'], badge: 'AI early access' },
  { app: 'deeptrack', name: 'DeepTrack', category: 'Project cost control', text: 'Budgets, purchasing and claims, with approvals built in.', points: ['Budgets gate purchase requests', 'Invoices matched before payment', 'Client claims with retention'] },
  { app: 'deephr', name: 'DeepHR', category: 'HR & payroll', text: 'Face + GPS attendance on the phone, through to payslips.', points: ['No kiosk or hardware', 'Leave, claims and timesheets', 'Singapore payroll'] },
  { app: 'arivu-ai', name: 'ARIVU AI', category: 'AI assistant', text: 'Ask about your own data across the apps — read-only.', points: ['Answers in plain language', 'Charts and PDF / Excel exports', 'Searches tender documents'] },
  { app: 'deep-drive', name: 'Deep Drive', category: 'Documents', text: 'Your organisation’s project documents in one place.', points: ['Folders and uploads', 'Inline viewing', 'Searchable by ARIVU'] },
  { app: 'pdf-editor', name: 'PDF Editor', category: 'PDF mark-up', text: 'Mark up and sign PDFs on the same sign-in.', points: ['Text, signatures and images', 'Split and merge', 'Export annotated PDFs'] }
]
const n = cards.length
const linkFor = (app: string) => props.linkFor(app)

const root = ref<HTMLElement | null>(null)
const stage = ref<HTMLElement | null>(null)
const pos = ref(0) // continuous position; card 0 (DeepCost) starts in the centre
let target = 0
const current = computed(() => ((Math.round(pos.value) % n) + n) % n)
const paused = ref(false)
const hover = ref(false)
const width = ref(1200)
let visible = false
let reduce = false
let raf = 0
let timer: ReturnType<typeof setInterval> | undefined

// Shortest signed distance from the centre on the loop.
function dist(i: number) {
  let d = (i - pos.value) % n
  if (d > n / 2) d -= n
  if (d < -n / 2) d += n
  return d
}
function cardStyle(i: number) {
  const d = dist(i)
  const a = Math.abs(d)
  // full spacing keeps cards apart; on phones cards are narrower (300px) so 0.88 still clears them
  const k = width.value < 640 ? 0.88 : 1
  // spacing grows with scale so cards never overlap: centre 1.1, neighbours .8, then .66
  const x = Math.sign(d) * (a <= 1 ? a * 390 : 390 + (a - 1) * 300) * k
  const scale = a <= 1 ? 1.1 - a * 0.3 : Math.max(0.55, 0.8 - (a - 1) * 0.14)
  return {
    transform: `translate(-50%, -50%) translate3d(${x}px, 0, ${-a * 120}px) rotateY(${-Math.max(-2, Math.min(2, d)) * 14}deg) scale(${scale})`,
    opacity: String(Math.max(0, 1 - Math.max(0, a - 1.6) * 1.2)),
    zIndex: String(100 - Math.round(a * 10)),
    filter: a > 0.5 ? `brightness(${Math.max(0.6, 1 - a * 0.2)})` : 'none',
    pointerEvents: a > 1.5 ? 'none' : 'auto'
  } as Record<string, string>
}

function frame() {
  const diff = target - pos.value
  pos.value = Math.abs(diff) < 0.002 ? target : pos.value + diff * 0.2
  raf = Math.abs(target - pos.value) > 0 ? requestAnimationFrame(frame) : 0
}
function go(i: number) {
  // move the short way round the loop
  let d = (i - target) % n
  if (d > n / 2) d -= n
  if (d < -n / 2) d += n
  target += d
  if (!raf) raf = requestAnimationFrame(frame)
}
function tick() { if (visible && !paused.value && !hover.value) go(Math.round(target) + 1) }

let sx = 0
function touchStart(e: TouchEvent) { sx = e.touches[0]?.clientX ?? 0 }
function touchEnd(e: TouchEvent) {
  const dx = (e.changedTouches[0]?.clientX ?? 0) - sx
  if (Math.abs(dx) > 40) go(Math.round(target) + (dx < 0 ? 1 : -1))
}
function resize() { width.value = stage.value?.clientWidth ?? window.innerWidth }

let io: IntersectionObserver | undefined
onMounted(() => {
  reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) paused.value = true
  resize()
  window.addEventListener('resize', resize, { passive: true })
  io = new IntersectionObserver(([e]) => { visible = !!e?.isIntersecting }, { threshold: 0.3 })
  if (root.value) io.observe(root.value)
  timer = setInterval(tick, 2200)
})
onBeforeUnmount(() => { clearInterval(timer); cancelAnimationFrame(raf); io?.disconnect(); window.removeEventListener('resize', resize) })
</script>

<style scoped>
article { will-change: transform; }
.ctl { display: flex; height: 2.25rem; width: 2.25rem; align-items: center; justify-content: center; border-radius: .75rem; border: 1px solid rgba(255, 255, 255, .15); color: rgb(226 232 240); transition: background-color .2s; }
.ctl:hover { background: rgba(255, 255, 255, .1); }
</style>
