<template>
  <section ref="root" class="relative isolate overflow-hidden bg-[#03191f] text-white">
    <FxAurora palette="ai" />
    <div class="bg-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]" aria-hidden="true"></div>

    <div class="container-site relative pb-16 pt-12 lg:pb-24 lg:pt-16">
      <!-- Editorial top row: headline left, copy and actions right -->
      <div class="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-14">
        <div class="hero-in">
          <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1 pl-1 pr-3 text-xs font-medium text-ink-100">
            <span class="flex h-5 items-center rounded-full bg-ai-gradient px-2 text-[10px] font-bold uppercase tracking-wider">New</span>
            <span class="relative flex h-2 w-2"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60 motion-reduce:animate-none"></span><span class="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span></span>
            ARIVU AI now in every app
          </span>
          <h1 class="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
            Run your entire construction business on one
            <FxRotatingWord :words="['AI-powered platform.', 'connected platform.', 'intelligent platform.']" word-class="text-ai-gradient" />
          </h1>
        </div>

        <div class="hero-in [animation-delay:.12s] lg:pb-2">
          <p class="lead-dark">Tender estimating, project delivery and HR &amp; payroll on one sign-in — built for MEP and fire-protection contractors in Singapore and India, with an AI assistant in every app.</p>
          <div class="mt-7 flex flex-wrap items-center gap-3">
            <NuxtLink to="/contact" class="group relative overflow-hidden rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-brand-950 shadow-[0_10px_40px_-10px_rgba(1,172,200,.8)] transition-transform hover:-translate-y-0.5">
              <span class="relative z-10 flex items-center gap-2">Book a live demo <i class="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" aria-hidden="true"></i></span>
              <span class="fx-shine absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent" aria-hidden="true"></span>
            </NuxtLink>
            <NuxtLink to="/products/arivu-ai" class="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              <UiArivuAvatar :size="24" :float="false" /> Meet ARIVU AI
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Product stage -->
      <div ref="stageWrap" class="relative mt-12 [perspective:1800px] lg:mt-16">
        <div class="pointer-events-none absolute inset-x-[8%] -bottom-10 top-16 rounded-full bg-gradient-to-r from-cyan-500/40 via-brand-500/30 to-ai-500/40 blur-3xl" aria-hidden="true"></div>

        <div ref="stage" class="stage relative mx-auto max-w-6xl" style="--p: .35">
          <!-- Animated gradient border -->
          <div class="relative overflow-hidden rounded-[24px] p-px">
            <div class="beam pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[160%]" aria-hidden="true"></div>
            <div class="relative overflow-hidden rounded-[23px] bg-[#061a20]">
              <!-- Window bar with app tabs -->
              <div class="flex items-center gap-3 border-b border-white/10 px-3 py-2.5 sm:px-4">
                <span class="hidden gap-1.5 sm:flex" aria-hidden="true"><span class="h-2.5 w-2.5 rounded-full bg-white/20"></span><span class="h-2.5 w-2.5 rounded-full bg-white/20"></span><span class="h-2.5 w-2.5 rounded-full bg-white/20"></span></span>
                <div class="no-scrollbar -my-1 flex min-w-0 flex-1 gap-1 overflow-x-auto py-1" role="group" aria-label="Choose an app to preview">
                  <button v-for="(t, k) in tours" :key="t.key" type="button" class="relative flex shrink-0 items-center gap-2 overflow-hidden rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors" :class="k === active ? 'bg-white/10 text-white' : 'text-ink-300 hover:bg-white/5 hover:text-white'" :aria-pressed="k === active" @click="select(k)">
                    <i :class="[t.icon, k === active ? t.tone : '']" aria-hidden="true"></i>{{ t.name }}
                    <span class="absolute inset-x-0 bottom-0 h-0.5 bg-white/5" aria-hidden="true">
                      <span :ref="(el) => (bars[k] = el as HTMLElement)" class="block h-full origin-left bg-gradient-to-r from-cyan-400 to-ai-400" style="transform: scaleX(0)"></span>
                    </span>
                  </button>
                </div>
                <button type="button" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-200 transition-colors hover:bg-white/10 hover:text-white" :aria-label="paused ? 'Play preview' : 'Pause preview'" @click="togglePause">
                  <i :class="paused ? 'fa-solid fa-play' : 'fa-solid fa-pause'" class="text-xs" aria-hidden="true"></i>
                </button>
              </div>

              <!-- Videos (crossfade) -->
              <div class="relative aspect-video bg-[#03191f]">
                <video v-for="(t, k) in tours" :key="t.key" :ref="(el) => (vids[k] = el as HTMLVideoElement)" class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out" :class="k === active ? 'opacity-100' : 'opacity-0'" :src="`/videos/tour-${t.key}.mp4`" :poster="`/videos/tour-${t.key}-start.webp`" preload="none" muted playsinline :aria-hidden="k !== active" :aria-label="`${t.name} product tour, no sound`" @ended="next"></video>
              </div>
            </div>
          </div>

        </div>

        <!-- Caption bar -->
        <div class="relative mx-auto mt-5 flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-3 rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3 sm:px-5">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10"><i :class="[tours[active].icon, tours[active].tone]" aria-hidden="true"></i></span>
          <Transition name="msg" mode="out-in">
            <p :key="active" class="min-w-[12rem] flex-1 text-sm text-ink-200"><span class="font-semibold text-white">{{ tours[active].name }}</span> — {{ tours[active].line }}</p>
          </Transition>
          <span class="hidden text-[11px] text-ink-400 md:inline">Motion-graphic tour · sample data</span>
          <div class="flex items-center gap-2">
            <button type="button" class="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold transition-colors hover:bg-white/20" @click="lightbox = true"><i class="fa-solid fa-expand text-[10px]" aria-hidden="true"></i>Full screen</button>
            <NuxtLink :to="tours[active].to" class="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-cyan-300 transition-colors hover:bg-white/5 hover:text-white">Explore {{ tours[active].name }} <i class="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i></NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <UiVideoLightbox v-model:open="lightbox" :src="`/videos/tour-${tours[active].key}.mp4`" :poster="`/videos/tour-${tours[active].key}-poster.webp`" :title="`${tours[active].name} — product tour`" />
  </section>
</template>

<script setup lang="ts">
const tours = [
  { key: 'overview', name: 'Platform', icon: 'fa-solid fa-layer-group', tone: 'text-cyan-300', to: '/platform', line: 'Every app on one sign-in, with ARIVU in each.' },
  { key: 'deepcost', name: 'DeepCost', icon: 'fa-solid fa-calculator', tone: 'text-sky-300', to: '/products/deepcost', line: 'From tender documents to a priced Form of Tender.' },
  { key: 'deeptrack', name: 'DeepTrack', icon: 'fa-solid fa-diagram-project', tone: 'text-amber-300', to: '/products/deeptrack', line: 'Budgets, purchasing and claims with approvals built in.' },
  { key: 'deephr', name: 'DeepHR', icon: 'fa-solid fa-user-group', tone: 'text-emerald-300', to: '/products/deephr', line: 'Face and GPS check-in through to payslips.' },
  { key: 'deepplan', name: 'DeepPlan AI', icon: 'fa-solid fa-compass-drafting', tone: 'text-violet-300', to: '/products/deepplan-ai', line: 'Drawings to quantities — AI take-off in early access.' },
  { key: 'arivu', name: 'ARIVU AI', icon: 'fa-solid fa-wand-magic-sparkles', tone: 'text-violet-300', to: '/products/arivu-ai', line: 'Answers, charts and exports from your own data.' }
]

const root = ref<HTMLElement | null>(null)
const stageWrap = ref<HTMLElement | null>(null)
const vids: HTMLVideoElement[] = []
const bars: HTMLElement[] = []
const active = ref(0)
const paused = ref(false)
const lightbox = ref(false)
const stage = ref<HTMLElement | null>(null)

let reduced = false
let visible = true
let raf = 0
let p = 0.35 // scroll progress: 0 = tilted, 1 = flat
let pTarget = 0.35
let io: IntersectionObserver | undefined

// Tours start only after the page has loaded, so video never competes with the first paint.
let ready = false
function whenIdle(fn: () => void) {
  const go = () => setTimeout(() => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 2000 }) : fn()), 300)
  if (document.readyState === 'complete') go()
  else window.addEventListener('load', go, { once: true })
}
function playActive() {
  const v = vids[active.value]
  if (!v || !ready || paused.value || !visible || lightbox.value) return
  v.play().catch(() => {})
}
// Tours play a little faster than recorded.
const RATE = 1.35
let pending = -1

function prime(v: HTMLVideoElement | undefined) {
  if (!v) return
  v.defaultPlaybackRate = RATE
  v.playbackRate = RATE
}
// Start loading the tour after the current one so the switch has no gap.
function preloadNext() {
  const v = vids[(active.value + 1) % tours.length]
  if (v && v.preload !== 'auto') { v.preload = 'auto'; v.load(); prime(v) }
}
// Switch only once the next tour is actually playing, so the crossfade never shows a loading frame.
function select(k: number) {
  if (k === active.value) return
  const next = vids[k]
  bars.forEach((b, i) => { if (b) b.style.transform = `scaleX(${i < k ? 1 : 0})` })
  if (!next) { active.value = k; return }
  pending = k
  if (next.preload !== 'auto') { next.preload = 'auto'; next.load() }
  prime(next)
  next.currentTime = 0
  const show = () => {
    if (pending !== k) return
    vids[active.value]?.pause()
    active.value = k
    pending = -1
    preloadNext()
  }
  if (paused.value || !visible || lightbox.value) { show(); return }
  next.addEventListener('playing', show, { once: true })
  next.play().catch(show)
}
function next() { select((active.value + 1) % tours.length) }
function togglePause() {
  paused.value = !paused.value
  if (paused.value) vids[active.value]?.pause()
  else playActive()
}

function measure() {
  const el = stageWrap.value
  if (!el) return
  const vh = window.innerHeight
  const top = el.getBoundingClientRect().top
  pTarget = Math.min(1, Math.max(0, 1 - (top - vh * 0.12) / (vh * 0.55)))
}
// One loop eases the scroll tilt and moves the active tab's progress bar.
function frame() {
  // Write the CSS variable directly so Vue does not re-render each frame.
  if (Math.abs(pTarget - p) > 0.0005) {
    p += (pTarget - p) * 0.1
    stage.value?.style.setProperty('--p', p.toFixed(4))
  }
  const v = vids[active.value]
  const b = bars[active.value]
  if (v && b && v.duration) b.style.transform = `scaleX(${v.currentTime / v.duration})`
  raf = visible ? requestAnimationFrame(frame) : 0
}

watch(lightbox, (open) => { if (open) vids[active.value]?.pause(); else playActive() })

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  vids.forEach(prime)
  vids[0]?.addEventListener('playing', preloadNext, { once: true })
  whenIdle(() => { ready = true; const v = vids[0]; if (v) { v.preload = 'auto'; v.load(); prime(v) } playActive() })
  if (reduced) { paused.value = true; p = pTarget = 1; stage.value?.style.setProperty('--p', '1') }
  else {
    measure()
    window.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure, { passive: true })
  }
  io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting
    if (visible) { playActive(); if (!raf) raf = requestAnimationFrame(frame) }
    else vids[active.value]?.pause()
  }, { threshold: 0.05 })
  if (root.value) io.observe(root.value)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', measure)
  window.removeEventListener('resize', measure)
  cancelAnimationFrame(raf)
  io?.disconnect()
})
</script>

<style scoped>
.stage {
  transform-origin: 50% 0;
  transform: rotateX(calc((1 - var(--p, 1)) * 16deg)) scale(calc(.93 + var(--p, 1) * .07));
  will-change: transform;
}
.beam {
  background: conic-gradient(from 0deg, transparent 0 55%, rgba(51, 207, 231, .9) 70%, rgba(155, 138, 251, .9) 80%, transparent 92%);
  transform: translate(-50%, -50%);
  animation: beam 9s linear infinite;
  will-change: transform;
}
@keyframes beam { to { transform: translate(-50%, -50%) rotate(360deg); } }
.hero-in { animation: hero-in .8s cubic-bezier(.2, .8, .2, 1) both; }
@keyframes hero-in { from { opacity: 0; transform: translate3d(0, 18px, 0); } }
.fx-shine { animation: fx-shine 3.2s ease-in-out infinite; }
@keyframes fx-shine { 0%, 60% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
.msg-enter-active, .msg-leave-active { transition: opacity .35s ease, transform .35s ease; }
.msg-enter-from { opacity: 0; transform: translate3d(0, 6px, 0); }
.msg-leave-to { opacity: 0; transform: translate3d(0, -6px, 0); }
.no-scrollbar { scrollbar-width: none; }
.no-scrollbar::-webkit-scrollbar { display: none; }
@media (prefers-reduced-motion: reduce) {
  .stage { transform: none; }
  .beam, .hero-in, .fx-shine { animation: none; }
}
</style>
