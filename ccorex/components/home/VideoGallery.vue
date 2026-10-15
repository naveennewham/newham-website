<template>
  <section class="section relative overflow-hidden bg-white">
    <div class="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-ai-100 blur-3xl" aria-hidden="true"></div>
    <div class="container-site relative">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <UiSectionHeader eyebrow="See it in action" title="Watch CCorex at work" lead="Short tours of the real product. Pick an app — each tour is under a minute." />
        <NuxtLink to="/contact" class="btn-secondary shrink-0">Book a live demo instead <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
      </div>

      <div class="mt-12 grid gap-5 lg:grid-cols-[1fr_320px]">
        <!-- One player -->
        <div class="relative overflow-hidden rounded-2xl bg-black shadow-lift ring-1 ring-ink-900/10">
          <video
            ref="player"
            :key="current.src"
            class="aspect-video w-full bg-black"
            :poster="current.poster"
            :aria-label="`Video: ${current.title}`"
            preload="none"
            playsinline
            controls
            @ended="next"
          >
            <source :src="current.src" type="video/mp4" />
          </video>
        </div>

        <!-- Chapters -->
        <ol class="flex flex-col gap-2" aria-label="Product tours">
          <li v-for="(t, i) in tours" :key="t.src">
            <button
              type="button"
              class="group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors"
              :class="i === active ? 'border-brand-600 bg-brand-50' : 'border-ink-100 bg-white hover:border-ink-200 hover:bg-ink-50'"
              :aria-pressed="i === active"
              @click="select(i)"
            >
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm" :class="i === active ? 'bg-brand-700 text-white' : t.tone">
                <i :class="i === active && playing ? 'fa-solid fa-volume-high' : t.icon" aria-hidden="true"></i>
              </span>
              <span class="min-w-0 flex-1">
                <span class="block text-[11px] font-semibold uppercase tracking-wider text-ink-500">{{ t.app }}</span>
                <span class="block text-sm font-semibold leading-snug text-ink-900">{{ t.title }}</span>
              </span>
              <span class="shrink-0 text-xs tabular-nums text-ink-500">{{ t.duration }}</span>
            </button>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const tours = [
  { app: 'Platform tour', title: 'CCorex in 40 seconds', duration: '0:39', src: '/videos/tour-overview.mp4', poster: '/videos/tour-overview-poster.webp', icon: 'fa-solid fa-layer-group', tone: 'bg-ink-100 text-ink-700' },
  { app: 'DeepCost', title: 'From tender to Form of Tender', duration: '0:36', src: '/videos/tour-deepcost.mp4', poster: '/videos/tour-deepcost-poster.webp', icon: 'fa-solid fa-calculator', tone: 'bg-sky-50 text-sky-700' },
  { app: 'DeepPlan AI', title: 'Drawings to quantities', duration: '0:23', src: '/videos/tour-deepplan.mp4', poster: '/videos/tour-deepplan-poster.webp', icon: 'fa-solid fa-compass-drafting', tone: 'bg-violet-50 text-violet-700' },
  { app: 'DeepTrack', title: 'Budgets, purchasing and claims', duration: '0:24', src: '/videos/tour-deeptrack.mp4', poster: '/videos/tour-deeptrack-poster.webp', icon: 'fa-solid fa-diagram-project', tone: 'bg-amber-50 text-amber-700' },
  { app: 'DeepHR', title: 'Attendance to payslips', duration: '0:29', src: '/videos/tour-deephr.mp4', poster: '/videos/tour-deephr-poster.webp', icon: 'fa-solid fa-user-group', tone: 'bg-emerald-50 text-emerald-700' },
  { app: 'ARIVU AI', title: 'Ask your business anything', duration: '0:31', src: '/videos/tour-arivu.mp4', poster: '/videos/tour-arivu-poster.webp', icon: 'fa-solid fa-wand-magic-sparkles', tone: 'bg-ai-50 text-ai-600' }
]

const active = ref(0)
const playing = ref(false)
const player = ref<HTMLVideoElement | null>(null)
const current = computed(() => tours[active.value]!)

function bind() {
  const v = player.value
  if (!v) return
  v.onplay = () => { playing.value = true }
  v.onpause = () => { playing.value = false }
}

// Picking a chapter swaps the source and plays it (the click is the user gesture).
async function select(i: number, autoplay = true) {
  active.value = i
  playing.value = false
  await nextTick()
  bind()
  if (autoplay) player.value?.play().catch(() => {})
}

// After a tour ends, move on to the next one.
function next() {
  if (active.value < tours.length - 1) select(active.value + 1)
  else playing.value = false
}

onMounted(bind)
</script>
