<template>
  <section ref="root" class="section bg-ink-50">
    <div class="container-site grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <div>
        <UiSectionHeader eyebrow="Software + specialists" title="Buy the software, or let our engineers run it for you." lead="Most software vendors hand over a login. Most outsourcing firms hand over people. Newham does both — so you choose how much of the work stays in-house." />
        <ol class="mt-8 space-y-3">
          <li v-for="(m, i) in modes" :key="m.title">
            <button
              type="button"
              class="flex w-full gap-4 rounded-2xl border p-5 text-left transition-all duration-500"
              :class="active === i ? 'border-brand-300 bg-white shadow-lift' : 'border-ink-100 bg-white opacity-75 hover:opacity-100'"
              :aria-pressed="active === i"
              @click="pick(i)"
            >
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-500" :class="active === i ? 'bg-brand-700 text-white' : 'bg-ink-100 text-ink-500'">{{ i + 1 }}</span>
              <span>
                <span class="block font-semibold text-ink-900">{{ m.title }}</span>
                <span class="mt-1 block text-sm leading-relaxed text-ink-600">{{ m.text }}</span>
              </span>
            </button>
          </li>
        </ol>
        <p class="mt-6 flex gap-3 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3 text-sm text-brand-900">
          <i class="fa-regular fa-comments mt-0.5 text-brand-700" aria-hidden="true"></i>
          <span>Have a live tender? Bring the drawings to a discovery call and we can talk through how a take-off would run on it.</span>
        </p>
      </div>

      <!-- Infographic -->
      <figure class="rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8">
        <!-- who does the work -->
        <figcaption class="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
          <span class="text-brand-700">Your team does more</span>
          <span class="text-ai-600">Newham does more</span>
        </figcaption>
        <div class="relative mt-3 h-2.5 rounded-full bg-gradient-to-r from-brand-500 via-cyan-400 to-ai-500" aria-hidden="true">
          <span class="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-ink-900 shadow-lift transition-[left] duration-700 ease-out" :style="{ left: `${[6, 50, 94][active]}%` }"></span>
        </div>

        <!-- flow: project → who works → what you get -->
        <div class="mt-10 grid grid-cols-1 items-center gap-2 sm:grid-cols-[1fr_auto_1.3fr_auto_1fr]" aria-hidden="true">
          <div class="node">
            <span class="node-icon bg-ink-100 text-ink-700"><i class="fa-solid fa-file-pdf"></i></span>
            <span class="node-title">Your project</span>
            <span class="node-sub">Drawings, tender, workload</span>
          </div>
          <span class="wire"><span :key="`a${active}`" class="packet"></span></span>
          <Transition name="swap" mode="out-in">
            <div :key="active" class="node border-brand-200 bg-brand-50/60">
              <span class="flex -space-x-2">
                <span v-for="w in modes[active]!.who" :key="w.label" class="node-icon ring-2 ring-white" :class="w.tone"><i :class="w.icon"></i></span>
              </span>
              <span class="node-title">{{ modes[active]!.worker }}</span>
              <span class="node-sub">{{ modes[active]!.where }}</span>
              <span v-if="modes[active]!.apps" class="mt-1.5 flex justify-center gap-1">
                <UiAppIcon v-for="a in modes[active]!.apps" :key="a" :app="a" size="xs" />
              </span>
            </div>
          </Transition>
          <span class="wire"><span :key="`b${active}`" class="packet packet-late"></span></span>
          <Transition name="swap" mode="out-in">
            <div :key="active" class="node">
              <span class="node-icon bg-emerald-50 text-emerald-700"><i class="fa-solid fa-circle-check"></i></span>
              <span class="node-title">You get</span>
              <span class="node-sub">{{ modes[active]!.output }}</span>
            </div>
          </Transition>
        </div>

        <!-- what stays with whom -->
        <div class="mt-8 grid gap-3 sm:grid-cols-2">
          <div class="rounded-2xl border border-ink-100 p-4">
            <p class="flex items-center gap-2 text-sm font-semibold text-ink-900"><i class="fa-solid fa-laptop-code text-brand-600" aria-hidden="true"></i>The software</p>
            <p class="mt-1.5 text-sm text-ink-600">One catalog, one approval flow, one record of every estimate and project.</p>
          </div>
          <div class="rounded-2xl border border-ink-100 p-4">
            <p class="flex items-center gap-2 text-sm font-semibold text-ink-900"><i class="fa-solid fa-helmet-safety text-brand-600" aria-hidden="true"></i>The specialists</p>
            <p class="mt-1.5 text-sm text-ink-600">Engineers who know the codes, the trades and the tools — including CCorex.</p>
          </div>
        </div>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
// Three ways to work with Newham, shown as a "who does the work" slider and a project → work → output flow.
// Cycles while on screen; picking a mode stops the cycle.
const you = { label: 'Your team', icon: 'fa-solid fa-users', tone: 'bg-brand-100 text-brand-800' }
const eng = { label: 'Newham engineer', icon: 'fa-solid fa-helmet-safety', tone: 'bg-ai-100 text-ai-700' }
const modes = [
  {
    title: 'Use CCorex yourself', text: 'Your team runs estimating, projects and payroll in CCorex. We set it up and support it.',
    who: [you], worker: 'Your team', where: 'in CCorex — set up and supported by us', apps: ['deepcost', 'deeptrack', 'deephr'],
    output: 'Estimates, projects and payroll, run in-house'
  },
  {
    title: 'Add dedicated Newham engineers', text: 'Our modellers, estimators and QS join your team and work in your tools — or in CCorex.',
    who: [you, eng], worker: 'Your team + Newham engineers', where: 'in your tools or CCorex', apps: null,
    output: 'More capacity, your templates and standards'
  },
  {
    title: 'Hand us the work', text: 'Send drawings or a tender package. We return take-offs, BOQs, FP designs or calculations, scoped in writing.',
    who: [eng, eng], worker: 'Newham team', where: 'scoped in writing', apps: null,
    output: 'Take-offs, BOQs, FP designs or calculations'
  }
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
    if (e?.isIntersecting && !picked) t = setInterval(() => { active.value = (active.value + 1) % modes.length }, 4500)
  }, { threshold: 0.3 })
  if (root.value) io.observe(root.value)
})
onBeforeUnmount(() => { clearInterval(t); io?.disconnect() })
</script>

<style scoped>
.node { display: flex; min-width: 0; min-height: 130px; flex-direction: column; align-items: center; justify-content: center; gap: .25rem; border-radius: 1rem; border: 1px solid rgb(var(--ink-100)); padding: .9rem .6rem; text-align: center; }
.node-icon { display: flex; height: 2.5rem; width: 2.5rem; align-items: center; justify-content: center; border-radius: .75rem; }
.node-title { margin-top: .4rem; font-size: .85rem; font-weight: 600; color: rgb(var(--ink-900)); }
.node-sub { font-size: .72rem; line-height: 1.3; color: rgb(var(--ink-500)); }
.wire { position: relative; display: block; margin: 0 auto; height: 18px; width: 2px; background: rgb(var(--ink-200)); }
.wire .packet { display: none; }
@media (min-width: 640px) { .wire { height: 2px; width: 28px; } .wire .packet { display: block; } }
.packet { position: absolute; top: -4px; left: 0; height: 10px; width: 10px; border-radius: 9999px; background: #0e9fb5; box-shadow: 0 0 10px rgba(14, 159, 181, .7); animation: packet 1.4s ease-in-out infinite; }
.packet-late { animation-delay: .7s; }
@keyframes packet { 0% { left: -4px; opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { left: 22px; opacity: 0; } }
.swap-enter-active, .swap-leave-active { transition: opacity .3s ease, transform .3s ease; }
.swap-enter-from { opacity: 0; transform: translateY(6px); }
.swap-leave-to { opacity: 0; transform: translateY(-6px); }
@media (prefers-reduced-motion: reduce) {
  .packet { animation: none; display: none; }
  .swap-enter-active, .swap-leave-active { transition: none; }
}
</style>
