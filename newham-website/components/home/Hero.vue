<template>
  <section class="relative isolate overflow-hidden bg-[#f6fbfb]">
    <!-- Gradient mesh -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
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

      <!-- Headline with inline media -->
      <h1 class="mx-auto mt-8 max-w-5xl text-center font-display text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-6xl lg:text-[4.6rem]">
        Software
        <span class="relative mx-1 inline-block h-[0.82em] w-[1.7em] -translate-y-[0.06em] overflow-hidden rounded-full align-middle shadow-lift ring-4 ring-white" aria-hidden="true">
          <img src="/images/product/ccorex-portal.webp" alt="" class="h-full w-full object-cover object-left-top" />
        </span>
        and specialist engineers
        <span class="relative mx-1 inline-block h-[0.82em] w-[1.7em] -translate-y-[0.06em] overflow-hidden rounded-full align-middle shadow-lift ring-4 ring-white" aria-hidden="true">
          <video v-if="motion" src="/videos/stock-office-estimator.mp4" class="h-full w-full object-cover" autoplay muted loop playsinline></video>
          <img v-else src="/videos/stock-office-estimator-poster.webp" alt="" class="h-full w-full object-cover" />
        </span>
        for
        <FxRotatingWord :words="['Singapore construction.', 'M&E contractors.', 'engineering consultants.']" word-class="bg-gradient-to-r from-brand-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent" />
      </h1>

      <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-ink-600">Newham builds CCorex — AI-powered software for estimating, projects and payroll — and supplies the Singapore-code-trained M&amp;E engineers who model, estimate and design alongside your team.</p>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <NuxtLink to="/appointment" class="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5">
          Book a discovery call
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-ink-900 transition-transform group-hover:translate-x-0.5"><i class="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i></span>
        </NuxtLink>
        <a href="#what-we-do" class="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-ink-900 backdrop-blur hover:border-ink-300">See what we do</a>
      </div>

      <!-- Expanding pillar panels -->
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
          <video v-if="motion && p.video" :src="p.video" :poster="p.poster" class="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" autoplay muted loop playsinline aria-hidden="true"></video>
          <img v-else :src="p.poster" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/90 via-ink-950/35 to-ink-950/5" aria-hidden="true"></div>

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
    video: '/videos/stock-circuit-tech.mp4', poster: '/videos/stock-circuit-tech-poster.webp'
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
let userPicked = false
let t: ReturnType<typeof setInterval> | undefined
function select(i: number) { userPicked = true; active.value = i }
onMounted(() => {
  motion.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!motion.value) return
  t = setInterval(() => { if (!userPicked) active.value = (active.value + 1) % pillars.length }, 5500)
})
onBeforeUnmount(() => clearInterval(t))
</script>

<style scoped>
.nh-mesh { animation: nh-mesh 20s ease-in-out infinite alternate; }
@keyframes nh-mesh { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(8%, 10%) scale(1.15); } }
@media (prefers-reduced-motion: reduce) { .nh-mesh { animation: none; } }
</style>
