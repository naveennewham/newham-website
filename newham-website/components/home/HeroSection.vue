<template>
  <section class="hero-section relative overflow-hidden pt-28 md:pt-36 pb-20">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-800"></div>
      <div class="absolute inset-0 bg-white/5"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,135,150,0.22),transparent_40%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(1,172,200,0.16),transparent_45%)]"></div>
      <div class="absolute inset-0 opacity-10">
        <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#005D6C,#005D6C_1px,transparent_1px,transparent_12px)]"></div>
      </div>

      <div class="absolute inset-0 pointer-events-none" :style="vectorStyle">
        <div class="absolute inset-0 nh-canvas">
          <svg class="h-full w-full" viewBox="0 0 1440 520" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nh-line" x1="200" y1="90" x2="1240" y2="460" gradientUnits="userSpaceOnUse">
                <stop stop-color="var(--nh-accent-strong)" />
                <stop offset="1" stop-color="var(--nh-accent-soft)" />
              </linearGradient>
              <radialGradient id="nh-halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720 260) rotate(90) scale(280 720)">
                <stop stop-color="var(--nh-accent-soft)" stop-opacity="0.55" />
                <stop offset="1" stop-color="rgba(255,255,255,0)" />
              </radialGradient>
              <filter id="nh-glow" x="-25%" y="-25%" width="150%" height="150%">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <path id="nh-route-1" d="M36 396 C 176 220, 320 210, 458 300 S 760 468, 926 310 S 1184 128, 1404 232" />
              <path id="nh-route-2" d="M32 156 C 206 84, 338 130, 462 202 S 726 360, 932 214 S 1216 24, 1408 128" />
              <path id="nh-route-3" d="M88 438 C 224 346, 320 334, 430 374 S 658 466, 860 376 S 1120 198, 1342 314" />
            </defs>

            <rect x="0" y="0" width="1440" height="520" fill="url(#nh-halo)" opacity="0.35" />

            <g class="nh-layer nh-layer-a">
              <path class="nh-path" d="M36 396 C 176 220, 320 210, 458 300 S 760 468, 926 310 S 1184 128, 1404 232" stroke="url(#nh-line)" stroke-width="2" stroke-linecap="round" />
              <path class="nh-path nh-path-slow" d="M32 156 C 206 84, 338 130, 462 202 S 726 360, 932 214 S 1216 24, 1408 128" stroke="url(#nh-line)" stroke-width="2" stroke-linecap="round" />
              <path class="nh-path nh-path-fast" d="M120 284 C 262 246, 314 206, 438 262 S 682 410, 882 286 S 1168 110, 1320 196" stroke="var(--nh-neutral-line)" stroke-width="1.6" stroke-linecap="round" />
            </g>

            <g class="nh-layer nh-layer-b" opacity="0.9">
              <path class="nh-path nh-path-slow" d="M88 438 C 224 346, 320 334, 430 374 S 658 466, 860 376 S 1120 198, 1342 314" stroke="url(#nh-line)" stroke-width="1.8" stroke-linecap="round" />
              <path class="nh-path" d="M84 78 C 218 170, 316 176, 430 150 S 660 90, 872 178 S 1132 346, 1364 214" stroke="var(--nh-neutral-line)" stroke-width="1.4" stroke-linecap="round" />
            </g>

            <g>
              <circle class="nh-node nh-node-a" cx="140" cy="232" r="5" fill="var(--nh-neutral-node)" filter="url(#nh-glow)" />
              <circle class="nh-node nh-node-b" cx="312" cy="170" r="6" fill="var(--nh-accent-node)" filter="url(#nh-glow)" />
              <circle class="nh-node nh-node-c" cx="476" cy="294" r="5" fill="var(--nh-accent-node)" filter="url(#nh-glow)" />
              <circle class="nh-node nh-node-d" cx="640" cy="356" r="5" fill="var(--nh-neutral-node)" filter="url(#nh-glow)" />
              <circle class="nh-node nh-node-e" cx="832" cy="260" r="7" fill="var(--nh-accent-node)" filter="url(#nh-glow)" />
              <circle class="nh-node nh-node-f" cx="1012" cy="196" r="5" fill="var(--nh-neutral-node)" filter="url(#nh-glow)" />
              <circle class="nh-node nh-node-g" cx="1188" cy="250" r="6" fill="var(--nh-accent-node)" filter="url(#nh-glow)" />
              <circle class="nh-node nh-node-h" cx="1320" cy="190" r="5" fill="var(--nh-neutral-node)" filter="url(#nh-glow)" />
            </g>

            <g class="nh-particles">
              <circle r="2.3" fill="var(--nh-accent-node)" filter="url(#nh-glow)">
                <animateMotion dur="10.5s" repeatCount="indefinite" calcMode="linear" keyTimes="0;1" keyPoints="0;1" rotate="0">
                  <mpath href="#nh-route-1" />
                </animateMotion>
                <animate attributeName="opacity" dur="10.5s" repeatCount="indefinite" calcMode="linear" values="0;1;1;0" keyTimes="0;0.06;0.94;1" />
              </circle>

              <circle r="1.9" fill="rgba(255,255,255,0.5)" filter="url(#nh-glow)">
                <animateMotion dur="12.5s" repeatCount="indefinite" calcMode="linear" keyTimes="0;1" keyPoints="0;1" rotate="0" begin="-2.2s">
                  <mpath href="#nh-route-2" />
                </animateMotion>
                <animate attributeName="opacity" dur="12.5s" repeatCount="indefinite" calcMode="linear" values="0;1;1;0" keyTimes="0;0.06;0.94;1" begin="-2.2s" />
              </circle>

              <circle r="2.1" fill="var(--nh-accent-node)" filter="url(#nh-glow)">
                <animateMotion dur="13.2s" repeatCount="indefinite" calcMode="linear" keyTimes="0;1" keyPoints="0;1" rotate="0" begin="-4.6s">
                  <mpath href="#nh-route-3" />
                </animateMotion>
                <animate attributeName="opacity" dur="13.2s" repeatCount="indefinite" calcMode="linear" values="0;1;1;0" keyTimes="0;0.06;0.94;1" begin="-4.6s" />
              </circle>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
      <div class="w-full">
        <div class="flex items-start justify-between gap-6">
          <div class="min-w-0 flex-1">
            <Transition name="hero-fade" mode="out-in">
              <div :key="activeSlide" class="min-w-0">
                <div class="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-gray-300">
                  <span class="h-2 w-2 rounded-full" :class="slides[activeSlide].dotClass"></span>
                  {{ slides[activeSlide].badge }}
                </div>

                <div v-if="activeSlide !== 0" class="mt-3 text-sm text-gray-400">
                  Connecting business
                </div>

                <h1 class="mt-7 text-3xl md:text-5xl font-medium tracking-tight leading-[1.15] text-white">
                  <span v-if="slides[activeSlide].headlinePrefix">{{ slides[activeSlide].headlinePrefix }} </span>
                  <span class="gradient-text">{{ slides[activeSlide].headlineEmphasis }}</span>
                  <span v-if="slides[activeSlide].headlineSuffix"> {{ slides[activeSlide].headlineSuffix }}</span>
                </h1>

                <p class="mt-5 text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
                  {{ slides[activeSlide].description }}
                </p>

                <div v-if="activeSlide === 0" class="mt-6 flex flex-wrap gap-3">
                  <NuxtLink
                    to="/ccorex"
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors"
                  >
                    <span class="h-2 w-2 rounded-full bg-cyan-400"></span>
                    CCorex Suite
                  </NuxtLink>
                  <NuxtLink
                    to="/talent-outsourcing"
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors"
                  >
                    <span class="h-2 w-2 rounded-full bg-indigo-400"></span>
                    Talent Outsourcing
                  </NuxtLink>
                  <NuxtLink
                    to="/engineering-services"
                    class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors"
                  >
                    <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
                    Engineering Services
                  </NuxtLink>
                </div>

                <div v-else-if="slides[activeSlide].chips?.length" class="mt-6 flex flex-wrap gap-2">
                  <div v-for="chip in slides[activeSlide].chips" :key="chip.label" class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    <span class="h-2 w-2 rounded-full" :class="chip.dotClass"></span>
                    <span class="text-sm font-medium text-gray-200">{{ chip.label }}</span>
                  </div>
                </div>

                <div class="mt-8 flex flex-col sm:flex-row gap-4">
                  <NuxtLink :to="slides[activeSlide].primaryTo" class="btn-primary text-center">
                    {{ slides[activeSlide].primaryLabel }}
                  </NuxtLink>
                  <NuxtLink :to="slides[activeSlide].secondaryTo" class="btn-outline text-center">
                    {{ slides[activeSlide].secondaryLabel }}
                  </NuxtLink>
                </div>

                <div v-if="slides[activeSlide].footnote" class="mt-10 text-xs text-gray-500">
                  {{ slides[activeSlide].footnote }}
                </div>
              </div>
            </Transition>
          </div>

          <div class="hidden lg:flex flex-col items-end gap-3 pt-1">
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 transition-colors"
                @click="prev"
                aria-label="Previous"
              >
                <i class="fa-solid fa-chevron-left text-sm"></i>
              </button>
              <button
                type="button"
                class="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 transition-colors"
                @click="next"
                aria-label="Next"
              >
                <i class="fa-solid fa-chevron-right text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-7 z-10 hidden lg:flex justify-center">
      <div class="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
        <button
          v-for="(s, i) in slides"
          :key="s.key"
          type="button"
          class="h-2.5 w-2.5 rounded-full transition-all"
          :class="i === activeSlide ? s.indicatorActiveClass : 'bg-white/25 hover:bg-white/40'"
          @click="setSlide(i)"
          :aria-label="`Go to ${s.badge}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const slides = [
  {
    key: 'overview',
    badge: 'Three pillars. One delivery partner.',
    dotClass: 'bg-secondary-500',
    indicatorActiveClass: 'bg-secondary-500 w-7',
    vectorAccent: {
      strong: 'rgba(1,172,200,0.46)',
      soft: 'rgba(0,135,150,0.26)',
      node: 'rgba(1,172,200,0.72)'
    },
    headlinePrefix: 'Connecting business with',
    headlineEmphasis: 'software, talent, and engineering',
    headlineSuffix: '. ',
    description: 'Run projects end-to-end with CCorex, scale delivery with domain-trained teams, and accelerate submissions with engineering back-office services.',
    chips: [
      { label: 'CCorex Suite', dotClass: 'bg-cyan-400' },
      { label: 'Talent Outsourcing', dotClass: 'bg-indigo-400' },
      { label: 'Engineering Services', dotClass: 'bg-emerald-400' }
    ],
    primaryTo: '/services',
    primaryLabel: 'Explore Services',
    secondaryTo: '/contact',
    secondaryLabel: 'Book a discovery call',
    footnote: 'Choose one pillar or combine all three — Newham supports the full construction lifecycle.'
  },
  {
    key: 'ccorex',
    badge: 'CCorex Suite',
    dotClass: 'bg-cyan-400',
    indicatorActiveClass: 'bg-cyan-400 w-7',
    vectorAccent: {
      strong: 'rgba(51,207,231,0.46)',
      soft: 'rgba(0,135,150,0.24)',
      node: 'rgba(51,207,231,0.74)'
    },
    headlinePrefix: 'Plan, estimate, track, and manage workforce —',
    headlineEmphasis: 'end to end',
    headlineSuffix: '.',
    description: 'CCorex brings your project lifecycle into one connected system: digital takeoffs, cost estimation, budget control, and workforce management.',
    chips: [],
    primaryTo: '/ccorex',
    primaryLabel: 'Explore CCorex',
    secondaryTo: '/contact',
    secondaryLabel: 'Request a demo',
    footnote: 'DeepPlanAI, DeepCost, DeepTrack, DeepHR — one connected suite.'
  },
  {
    key: 'talent',
    badge: 'Engineering Talent Outsourcing',
    dotClass: 'bg-indigo-400',
    indicatorActiveClass: 'bg-indigo-400 w-7',
    vectorAccent: {
      strong: 'rgba(129,140,248,0.46)',
      soft: 'rgba(99,102,241,0.22)',
      node: 'rgba(129,140,248,0.74)'
    },
    headlinePrefix: 'Dedicated engineers who',
    headlineEmphasis: 'speak your project language',
    headlineSuffix: '.',
    description: 'Domain-trained resources for Singapore M&E contractors — BIM, estimation, tender coordination, and documentation support without the learning curve.',
    chips: [],
    primaryTo: '/talent-outsourcing',
    primaryLabel: 'View Talent Outsourcing',
    secondaryTo: '/contact',
    secondaryLabel: 'Talk to us',
    footnote: 'Scale up for tender season. Scale down when projects close out.'
  },
  {
    key: 'engineering',
    badge: 'Construction Engineering Services',
    dotClass: 'bg-emerald-400',
    indicatorActiveClass: 'bg-emerald-400 w-7',
    vectorAccent: {
      strong: 'rgba(52,211,153,0.46)',
      soft: 'rgba(16,185,129,0.22)',
      node: 'rgba(52,211,153,0.74)'
    },
    headlinePrefix: 'Fire protection + commercial support —',
    headlineEmphasis: 'delivered fast',
    headlineSuffix: '.',
    description: 'Singapore-code compliant engineering output: FP design and hydraulic calculations, BOQs, tender packs, QS, and document control delivered with offshore efficiency.',
    chips: [],
    primaryTo: '/engineering-services',
    primaryLabel: 'View Engineering Services',
    secondaryTo: '/contact',
    secondaryLabel: 'Book a call',
    footnote: 'Engage one stream or both — scale capacity to match your pipeline.'
  }
]

const activeSlide = ref(0)
let timer

const vectorStyle = computed(() => {
  const s = slides[activeSlide.value]
  const accent = s.vectorAccent || {
    strong: 'rgba(1,172,200,0.45)',
    soft: 'rgba(0,135,150,0.25)',
    node: 'rgba(1,172,200,0.70)'
  }

  return {
    '--nh-accent-strong': accent.strong,
    '--nh-accent-soft': accent.soft,
    '--nh-accent-node': accent.node,
    '--nh-neutral-line': 'rgba(255,255,255,0.18)',
    '--nh-neutral-node': 'rgba(255,255,255,0.55)'
  }
})

const setSlide = (idx) => {
  activeSlide.value = idx
}

const next = () => {
  activeSlide.value = (activeSlide.value + 1) % slides.length
}

const prev = () => {
  activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length
}

const start = () => {
  stop()
  timer = setInterval(() => next(), 6500)
}

const stop = () => {
  if (timer) clearInterval(timer)
  timer = undefined
}

onMounted(() => {
  start()
})

onBeforeUnmount(() => {
  stop()
})
</script>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 260ms ease, transform 260ms ease;
}
.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

.nh-canvas {
  opacity: 0.55;
}

.nh-path {
  stroke-dasharray: 9 10;
  animation: nhDash 7.5s linear infinite;
}
.nh-path-slow {
  animation-duration: 10.5s;
}
.nh-path-fast {
  animation-duration: 6s;
}

.nh-layer {
  transform-origin: 50% 50%;
}

.nh-layer-a {
  animation: nhDriftA 14s ease-in-out infinite;
}

.nh-layer-b {
  animation: nhDriftB 18s ease-in-out infinite;
}

.nh-node {
  animation: nhPulse 3.2s ease-in-out infinite;
}
.nh-node-b {
  animation-delay: 0.4s;
}
.nh-node-c {
  animation-delay: 0.9s;
}
.nh-node-d {
  animation-delay: 1.2s;
}
.nh-node-e {
  animation-delay: 1.6s;
}
.nh-node-f {
  animation-delay: 2.1s;
}

@keyframes nhDash {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -120;
  }
}

@keyframes nhPulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.75;
  }
  50% {
    transform: scale(1.18);
    opacity: 1;
  }
}

@keyframes nhDriftA {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  50% {
    transform: translate3d(10px, -6px, 0);
    opacity: 0.95;
  }
}

@keyframes nhDriftB {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 0.9;
  }
  50% {
    transform: translate3d(-14px, 8px, 0);
    opacity: 0.84;
  }
}
</style>
