<template>
  <section class="relative isolate overflow-hidden bg-[#f6fbfb]">
    <!-- Gradient mesh -->
    <div class="pointer-events-none absolute inset-0 -z-10 dark:opacity-30" aria-hidden="true">
      <span class="nh-mesh absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-cyan-300/50 blur-3xl"></span>
      <span class="nh-mesh absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full bg-emerald-200/60 blur-3xl [animation-delay:-6s]"></span>
      <span class="nh-mesh absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-200/60 blur-3xl [animation-delay:-11s]"></span>
      <div class="absolute inset-0 [background-image:radial-gradient(rgba(6,42,51,.12)_1px,transparent_1.3px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]"></div>
    </div>

    <div class="container-site pb-16 pt-14 sm:pt-20">
      <!-- Kicker -->
      <div class="flex justify-center">
        <span class="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 py-1 pl-1 pr-4 text-xs font-medium text-ink-700 shadow-card backdrop-blur">
          <span class="rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Singapore</span>
          M&amp;E · fire protection · construction
        </span>
      </div>

      <!-- Headline -->
      <h1 class="mx-auto mt-8 max-w-5xl text-center font-display text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-6xl lg:text-[4.6rem]">
        <span class="rise mr-[0.25em]" style="animation-delay: .05s">Software</span>
        <span class="rise mr-[0.25em]" style="animation-delay: .15s">and specialist</span>
        <span class="rise mr-[0.25em]" style="animation-delay: .25s">engineers</span>
        <span class="rise mr-[0.25em]" style="animation-delay: .35s">for</span>
        <FxRotatingWord :words="['Singapore construction.', 'M&E contractors.', 'engineering consultants.']" word-class="bg-gradient-to-r from-brand-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent" />
      </h1>

      <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-ink-600">Newham builds CCorex — AI-powered software for estimating, projects and payroll — and supplies the Singapore-code-trained M&amp;E engineers who model, estimate and design alongside your team.</p>

      <!-- Minimal offer line: software + engineers -> delivered -->
      <div class="rise-in mx-auto mt-7 flex w-fit max-w-full items-center gap-2 rounded-full border border-ink-100 bg-white/70 px-3 py-2 shadow-card backdrop-blur sm:gap-3 sm:px-4" style="animation-delay: .55s" aria-label="CCorex software plus Newham engineers, delivering your project">
        <span class="flex items-center gap-1.5">
          <span class="flex -space-x-1.5"><UiAppIcon v-for="a in ['deepcost', 'deeptrack', 'deephr']" :key="a" :app="a" size="xs" class="ring-2 ring-white" /></span>
          <span class="text-xs font-semibold text-ink-800 sm:text-sm">Software</span>
        </span>
        <span class="text-ink-400" aria-hidden="true"><i class="fa-solid fa-plus text-[10px]"></i></span>
        <span class="flex items-center gap-1.5">
          <span class="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-50 text-[11px] text-emerald-700"><i class="fa-solid fa-helmet-safety" aria-hidden="true"></i></span>
          <span class="text-xs font-semibold text-ink-800 sm:text-sm">Engineers</span>
        </span>
        <span class="wire relative block h-0.5 w-6 rounded bg-ink-200 sm:w-10" aria-hidden="true"><span class="pulse"></span></span>
        <span class="flex items-center gap-1.5">
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-brand-700 text-[10px] text-white"><i class="fa-solid fa-check" aria-hidden="true"></i></span>
          <span class="text-xs font-semibold text-ink-800 sm:text-sm">Delivered</span>
        </span>
      </div>

      <div class="mt-7 flex flex-wrap justify-center gap-3">
        <NuxtLink to="/appointment" class="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5">
          Book a discovery call
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-ink-900 transition-transform group-hover:translate-x-0.5"><i class="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i></span>
        </NuxtLink>
        <a href="#what-we-do" class="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-ink-900 backdrop-blur hover:border-ink-300">See what we do</a>
      </div>

      <!-- Expanding pillar panels: only the open panel plays its clip -->
      <div class="mt-14 flex flex-col gap-3 md:h-[440px] md:flex-row" role="list" aria-label="What Newham does">
        <a
          v-for="(p, i) in pillars"
          :key="p.title"
          :href="p.href"
          role="listitem"
          class="group relative isolate flex min-h-[260px] overflow-hidden rounded-[1.75rem] bg-ink-900 text-white shadow-lift outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] focus-visible:ring-4 focus-visible:ring-cyan-400 motion-reduce:transition-none md:min-h-0"
          :class="active === i ? 'md:flex-[3.2]' : 'md:flex-[1]'"
          @mouseenter="select(i)"
          @focus="select(i)"
        >
          <video v-if="motion && videoOk && p.video && active === i" :src="p.video" :poster="p.poster" class="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" autoplay muted loop playsinline aria-hidden="true"></video>
          <img v-else :src="p.poster" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div class="absolute inset-0 -z-10 bg-[#04161b]/80 md:bg-transparent md:bg-gradient-to-t md:from-[#04161b]/90 md:via-[#04161b]/35 md:to-[#04161b]/5" aria-hidden="true"></div>

          <!-- collapsed label (desktop) -->
          <span class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rotate-180 whitespace-nowrap text-lg font-semibold transition-opacity duration-300 [writing-mode:vertical-rl] md:block" :class="active === i ? 'opacity-0' : 'opacity-100'" aria-hidden="true">{{ p.title }}</span>

          <div class="mt-auto w-full p-6 transition-opacity duration-500 sm:p-8" :class="active === i ? 'opacity-100' : 'md:opacity-0'">
            <span class="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur"><i :class="p.icon" class="text-cyan-300" aria-hidden="true"></i>{{ p.kicker }}</span>
            <h2 class="mt-3 max-w-xl text-2xl font-bold text-white sm:text-3xl">{{ p.title }}</h2>
            <p class="mt-2 max-w-lg text-sm leading-relaxed text-ink-200">{{ p.text }}</p>
            <ul class="mt-4 flex flex-wrap gap-2">
              <li v-for="t in p.tags" :key="t" class="rounded-full border border-white/20 px-3 py-1 text-xs text-ink-100">{{ t }}</li>
            </ul>
            <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">{{ p.cta }} <i class="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" aria-hidden="true"></i></span>
          </div>
        </a>
      </div>

      <!-- Standards strip -->
      <div class="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-ink-500 sm:flex-row sm:gap-6">
        <span class="font-medium text-ink-700">Working to Singapore standards</span>
        <ul class="flex flex-wrap justify-center gap-2">
          <li v-for="s in standards" :key="s" class="rounded-full border border-ink-200 bg-white/70 px-3 py-1 text-xs font-semibold text-ink-700 backdrop-blur">{{ s }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pillars = [
  {
    title: 'CCorex software', kicker: 'Software', icon: 'fa-solid fa-laptop-code', href: '/ccorex', cta: 'Explore CCorex',
    text: 'Estimating, project delivery and HR & payroll on one sign-in — with AI tender summaries, FOT AI and the ARIVU assistant in every app.',
    tags: ['DeepCost', 'DeepTrack', 'DeepHR', 'ARIVU AI'],
    video: '/videos/ccorex-platform.mp4', poster: '/videos/ccorex-platform-poster.webp'
  },
  {
    title: 'Engineering talent', kicker: 'Talent outsourcing', icon: 'fa-solid fa-user-gear', href: '/talent-outsourcing', cta: 'See the roles',
    text: 'Dedicated BIM modellers, estimators, quantity surveyors and coordinators trained on Singapore codes — working on your projects, in your templates.',
    tags: ['BIM / Revit MEP', 'Estimators & QS', 'Tender coordinators'],
    video: '/videos/stock-team-meeting.mp4', poster: '/videos/stock-team-meeting-poster.webp'
  },
  {
    title: 'Engineering services', kicker: 'Scoped delivery', icon: 'fa-solid fa-fire-extinguisher', href: '/engineering-services', cta: 'See the services',
    text: 'Fire protection design and hydraulic calculations, BOQ preparation, tender and QS support — delivered as scoped packages.',
    tags: ['Sprinkler design', 'Hydraulic calcs', 'BOQ & tender support'],
    video: '/videos/blueprint-review.mp4', poster: '/videos/blueprint-review-poster.webp'
  }
]
const standards = ['SS CP 52', 'NFPA 13', 'SCDF', 'BCA', 'CPF / MOM']

const active = ref(0)
const motion = ref(false)
// Clips start only after the page has loaded, so video never competes with the first paint.
const videoOk = ref(false)
let userPicked = false
let t: ReturnType<typeof setInterval> | undefined
function select(i: number) { userPicked = true; active.value = i }
onMounted(() => {
  motion.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!motion.value) return
  const go = () => setTimeout(() => { videoOk.value = true }, 800)
  if (document.readyState === 'complete') go()
  else window.addEventListener('load', go, { once: true })
  t = setInterval(() => { if (!userPicked) active.value = (active.value + 1) % pillars.length }, 5500)
})
onBeforeUnmount(() => clearInterval(t))
</script>

<style scoped>
.nh-mesh { animation: nh-mesh 20s ease-in-out infinite alternate; }
@keyframes nh-mesh { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(8%, 10%) scale(1.15); } }
.rise { display: inline-block; animation: rise .7s cubic-bezier(.2, .8, .2, 1) both; }
@keyframes rise { from { opacity: 0; transform: translateY(14px); } }
.rise-in { animation: rise .7s cubic-bezier(.2, .8, .2, 1) both; }
.pulse { position: absolute; top: -3px; left: 0; height: 8px; width: 8px; border-radius: 9999px; background: #0e9fb5; box-shadow: 0 0 8px rgba(14, 159, 181, .7); animation: pulse 1.8s ease-in-out 1.2s infinite both; }
@keyframes pulse { 0% { left: -2px; opacity: 0; } 25%, 75% { opacity: 1; } 100% { left: calc(100% - 6px); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .nh-mesh, .rise, .rise-in, .pulse { animation: none; } .pulse { display: none; } }
</style>
