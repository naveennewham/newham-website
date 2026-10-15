<template>
  <figure ref="root" class="relative overflow-hidden rounded-3xl border border-white/10 bg-[#04161b] p-6 shadow-frame sm:p-8">
    <div class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden="true"></div>
    <div class="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-ai-500/20 blur-3xl" aria-hidden="true"></div>

    <div class="relative grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5">
      <!-- left: pillars -->
      <ul class="space-y-3">
        <li v-for="(p, i) in pillars" :key="p.title" class="rounded-2xl border p-3 transition-all duration-500 sm:p-4" :class="active === i ? 'border-cyan-400/60 bg-white/10 shadow-lift' : 'border-white/10 bg-white/[.04]'">
          <p class="flex items-center gap-2.5">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white transition-colors duration-500" :class="active === i ? 'bg-ai-gradient' : 'bg-white/10'"><i :class="p.icon" aria-hidden="true"></i></span>
            <span class="text-sm font-semibold text-white">{{ p.title }}</span>
          </p>
          <p class="mt-2 hidden text-xs leading-snug text-ink-300 sm:block">{{ p.text }}</p>
        </li>
      </ul>

      <!-- wires -->
      <div class="relative flex h-full w-6 flex-col justify-around sm:w-12" aria-hidden="true">
        <span v-for="(p, i) in pillars" :key="p.title" class="relative block h-0.5 w-full rounded bg-white/15">
          <span v-if="active === i && moving" class="packet"></span>
        </span>
      </div>

      <!-- right: your project -->
      <div class="rounded-2xl border border-white/10 bg-white/[.06] p-4 text-center sm:p-5">
        <span class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-cyan-300"><i class="fa-solid fa-building" aria-hidden="true"></i></span>
        <p class="mt-3 text-sm font-bold text-white">Your project</p>
        <p class="text-xs text-ink-300">Singapore &amp; India</p>
        <Transition name="swap" mode="out-in">
          <ul :key="active" class="mt-4 space-y-1.5 text-left">
            <li v-for="o in pillars[active]!.gives" :key="o" class="flex gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-ink-100"><i class="fa-solid fa-check mt-0.5 text-[10px] text-cyan-400" aria-hidden="true"></i>{{ o }}</li>
          </ul>
        </Transition>
      </div>
    </div>

    <figcaption class="relative mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-ink-300">
      <img src="/newham-logo-white.png" alt="" width="88" height="22" class="h-4 w-auto opacity-80" />
      <span>one partner — use one pillar or combine them</span>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
// Newham's three pillars feeding one client project; cycles while visible.
const pillars = [
  { title: 'CCorex software', icon: 'fa-solid fa-laptop-code', text: 'Estimating, projects, HR & payroll on one sign-in.', gives: ['Tenders priced in DeepCost', 'Budgets tracked in DeepTrack', 'Payroll run in DeepHR'] },
  { title: 'Engineering talent', icon: 'fa-solid fa-user-gear', text: 'Dedicated estimators, QS and BIM modellers.', gives: ['An estimator on your team', 'BIM / Revit MEP modelling', 'Works in your templates'] },
  { title: 'Engineering services', icon: 'fa-solid fa-fire-extinguisher', text: 'Scoped fire protection design and BOQs.', gives: ['Sprinkler design to SS CP 52', 'Hydraulic calculations', 'BOQ & tender support'] }
]
const root = ref<HTMLElement | null>(null)
const active = ref(0)
const moving = ref(false)
let t: ReturnType<typeof setInterval> | undefined
let io: IntersectionObserver | undefined
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  moving.value = true
  io = new IntersectionObserver(([e]) => {
    clearInterval(t)
    if (e?.isIntersecting) t = setInterval(() => { active.value = (active.value + 1) % pillars.length }, 2600)
  }, { threshold: 0.3 })
  if (root.value) io.observe(root.value)
})
onBeforeUnmount(() => { clearInterval(t); io?.disconnect() })
</script>

<style scoped>
.packet { position: absolute; top: -4px; left: 0; height: 10px; width: 10px; border-radius: 9999px; background: #33cfe7; box-shadow: 0 0 10px rgba(51, 207, 231, .8); animation: packet 1.3s ease-in-out infinite; }
@keyframes packet { from { left: -4px; opacity: 0; } 20%, 80% { opacity: 1; } to { left: calc(100% - 6px); opacity: 0; } }
.swap-enter-active, .swap-leave-active { transition: opacity .3s ease, transform .3s ease; }
.swap-enter-from { opacity: 0; transform: translateY(6px); }
.swap-leave-to { opacity: 0; transform: translateY(-6px); }
@media (prefers-reduced-motion: reduce) { .packet { display: none; } }
</style>
