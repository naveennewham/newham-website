<template>
  <figure class="rounded-3xl border border-ink-100 bg-white p-5 shadow-card sm:p-8">
    <div class="grid items-center gap-4 lg:grid-cols-[1fr_auto_1.25fr]">
      <!-- Portal -->
      <div class="rounded-2xl border p-5 transition-colors duration-500" :class="phase <= 1 || phase === 4 || all ? 'border-brand-500 bg-brand-50' : 'border-ink-100 bg-ink-50/60'">
        <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700 text-white"><i class="fa-solid fa-key" aria-hidden="true"></i></span>
          <div>
            <p class="font-semibold text-ink-900">CCorex portal</p>
            <p class="text-xs text-ink-500">dash.ccorex.com</p>
          </div>
        </div>
        <div class="mt-4 rounded-xl border border-ink-100 bg-white p-3 text-xs text-ink-700">
          <p class="flex items-center gap-2"><i class="fa-solid fa-circle-user text-ink-400" aria-hidden="true"></i><span class="font-semibold">Demo user</span> · signs in once</p>
          <p class="mt-1 text-ink-500">Organisation: Meridian BuildTech (demo)</p>
        </div>
        <div class="mt-3 rounded-xl border border-dashed p-3 text-xs transition-all duration-500" :class="phase >= 1 || all ? 'border-brand-400 bg-white text-ink-700 opacity-100' : 'border-ink-200 text-ink-400 opacity-60'">
          <p class="flex items-center gap-1.5 font-semibold text-brand-800"><i class="fa-solid fa-signature" aria-hidden="true"></i>Signed token · valid 8 hours</p>
          <p class="mt-1 leading-relaxed">User · organisation · apps they may open · role in each app · permissions</p>
        </div>
        <p v-if="phase === 4 || all" class="mt-3 flex items-center gap-1.5 rounded-lg bg-amber-50 px-2.5 py-1.5 text-xs font-medium text-amber-800"><i class="fa-solid fa-user-pen" aria-hidden="true"></i>Admin changes a user</p>
      </div>

      <!-- Lane -->
      <div class="flex items-center justify-center" aria-hidden="true">
        <span class="relative block h-10 w-0.5 bg-ink-200 lg:h-0.5 lg:w-16">
          <span v-if="moving && (phase === 1 || phase === 4)" class="sso-dot absolute left-1/2 top-0 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full text-[9px] text-white lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0" :class="phase === 4 ? 'bg-amber-500' : 'bg-brand-600'">
            <i :class="phase === 4 ? 'fa-solid fa-rotate' : 'fa-solid fa-key'"></i>
          </span>
        </span>
      </div>

      <!-- Apps -->
      <ul class="grid gap-2.5">
        <li v-for="a in apps" :key="a.name" class="flex items-center gap-3 rounded-xl border px-3.5 py-2.5 transition-colors duration-500" :class="phase >= 2 || all ? 'border-ink-200 bg-white' : 'border-ink-100 bg-ink-50/60'">
          <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm" :class="a.color"><i :class="a.icon" aria-hidden="true"></i></span>
          <span class="min-w-0 flex-1">
            <span class="block text-sm font-semibold text-ink-900">{{ a.name }}</span>
            <span class="block truncate text-[11px] text-ink-500">Role: {{ a.role }}</span>
          </span>
          <span class="flex shrink-0 flex-col items-end gap-1 text-[10px] font-semibold">
            <span v-if="phase >= 2 || all" class="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700"><i class="fa-solid fa-check mr-1" aria-hidden="true"></i>Signature verified</span>
            <span v-if="phase >= 3 || all" class="rounded-full bg-brand-50 px-2 py-0.5 text-brand-800">Same user &amp; org ID</span>
            <span v-if="phase === 4 || all" class="rounded-full bg-amber-50 px-2 py-0.5 text-amber-800"><i class="fa-solid fa-rotate mr-1" aria-hidden="true"></i>Change synced</span>
          </span>
        </li>
      </ul>
    </div>

    <ol class="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
      <li v-for="(s, i) in steps" :key="s" class="rounded-xl border px-3 py-2.5 text-xs leading-snug transition-colors duration-500" :class="phase === i && !all ? 'border-brand-500 bg-brand-50 text-ink-900' : 'border-ink-100 text-ink-600'">
        <span class="mr-1 font-display font-bold text-brand-700">{{ i + 1 }}</span>{{ s }}
      </li>
    </ol>
    <figcaption class="mt-4 text-center text-xs text-ink-500">Illustration: how one sign-in reaches every app, and how user changes follow. Names are from a demo organisation.</figcaption>
  </figure>
</template>

<script setup lang="ts">
// Animated single sign-on and provisioning explainer. Shows the full end state
// before hydration and for users who prefer reduced motion.
const apps = [
  { name: 'DeepCost', icon: 'fa-solid fa-calculator', color: 'bg-sky-50 text-sky-700', role: 'Estimator' },
  { name: 'DeepTrack', icon: 'fa-solid fa-diagram-project', color: 'bg-amber-50 text-amber-700', role: 'Engineer' },
  { name: 'DeepHR', icon: 'fa-solid fa-user-group', color: 'bg-emerald-50 text-emerald-700', role: 'Engineer' }
]
const steps = [
  'Sign in once at the portal',
  'Portal issues a signed token',
  'Each app verifies the signature',
  'App finds the same user and organisation IDs',
  'User changes are copied to each assigned app'
]
const all = ref(true)
const phase = ref(4)
const moving = ref(false)
let t: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  all.value = false
  moving.value = true
  phase.value = 0
  t = setInterval(() => { phase.value = (phase.value + 1) % steps.length }, 2200)
})
onBeforeUnmount(() => clearInterval(t))
</script>

<style scoped>
.sso-dot { animation: sso-y 2.2s ease-in-out infinite; }
@keyframes sso-y { 0% { top: -10px; opacity: 0; } 20%, 80% { opacity: 1; } 100% { top: calc(100% - 10px); opacity: 0; } }
@media (min-width: 1024px) {
  .sso-dot { animation-name: sso-x; }
  @keyframes sso-x { 0% { left: -10px; opacity: 0; } 20%, 80% { opacity: 1; } 100% { left: calc(100% - 10px); opacity: 0; } }
}
@media (prefers-reduced-motion: reduce) { .sso-dot { animation: none; } }
</style>
