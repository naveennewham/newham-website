<template>
  <div ref="root" :class="explain ? 'grid gap-8 lg:grid-cols-[1fr_300px] lg:items-center' : ''">
    <figure class="relative">
      <div class="light-surface overflow-hidden rounded-2xl border border-ink-200 bg-[#f3f5f7] text-[#14232a] shadow-frame" aria-hidden="true">
        <!-- Portal top bar -->
        <div class="flex items-center justify-between bg-[#255e6b] px-4 py-2.5">
          <img src="/ccorex-logo-sm.png" alt="" width="112" height="28" class="h-5 w-auto brightness-0 invert" />
          <span class="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/80">dash.ccorex.com</span>
        </div>

        <div class="flex">
          <!-- Sidebar -->
          <aside class="hidden w-40 shrink-0 space-y-1 border-r border-[#e3e8ec] bg-white p-2.5 sm:block">
            <p v-for="(n, i) in nav" :key="n.label" class="flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium" :class="i === 0 ? 'bg-[#255e6b] text-white' : 'text-[#3b4a52]'">
              <i :class="n.icon" class="w-3 text-center text-[10px]"></i>{{ n.label }}
            </p>
          </aside>

          <!-- Main -->
          <div class="relative min-w-0 flex-1 space-y-3 p-3 sm:p-4">
            <!-- Welcome card + status tiles -->
            <div class="flex flex-col gap-3 rounded-xl border border-[#e3e8ec] bg-white p-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p class="text-sm font-bold sm:text-base">Welcome back, Alex</p>
                <span class="mt-1 inline-block rounded bg-[#e3f1f3] px-1.5 py-0.5 text-[10px] font-medium text-[#255e6b]">Meridian BuildTech (demo)</span>
              </div>
              <div class="grid grid-cols-4 gap-1.5">
                <!-- 2: attendance status, filled by the phone check-in -->
                <div class="relative rounded-lg px-2 py-1.5 transition-colors duration-500" :class="[checkedIn ? 'bg-emerald-600 text-white' : 'bg-[#255e6b] text-white', hl(1)]">
                  <p class="flex items-center gap-1 text-[8px] font-bold uppercase tracking-wide">
                    <span class="h-1.5 w-1.5 rounded-full" :class="checkedIn ? 'bg-white' : 'bg-amber-300'"></span>{{ checkedIn ? 'Checked in' : 'Not checked in' }}
                  </p>
                  <p class="mt-1 flex gap-2 text-[8px] text-white/80"><span>IN <b class="text-white">{{ checkedIn ? '08:02' : '—' }}</b></span><span>OUT <b class="text-white">—</b></span></p>
                  <span v-if="step === 1" class="marker">2</span>
                </div>
                <div class="rounded-lg bg-[#f3f5f7] px-2 py-1.5 text-center"><p class="text-sm font-bold text-[#255e6b]">6</p><p class="text-[7px] font-semibold uppercase tracking-wide text-[#6b7a82]">Apps</p></div>
                <!-- 3: role -->
                <div class="relative rounded-lg bg-[#f3f5f7] px-2 py-1.5 text-center transition-all duration-500" :class="hl(2)">
                  <p class="text-sm font-bold text-[#dd8a2c]">Admin</p><p class="text-[7px] font-semibold uppercase tracking-wide text-[#6b7a82]">Role</p>
                  <span v-if="step === 2" class="marker">3</span>
                </div>
                <div class="rounded-lg bg-[#f3f5f7] px-2 py-1.5 text-center"><p class="text-sm font-bold text-emerald-600">Active</p><p class="text-[7px] font-semibold uppercase tracking-wide text-[#6b7a82]">Status</p></div>
              </div>
            </div>

            <!-- 1: apps -->
            <div class="relative">
              <p class="text-[11px] font-semibold">Your applications</p>
              <div class="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                <div
                  v-for="(a, i) in portalApps"
                  :key="a.app"
                  class="tile relative rounded-xl border border-[#e3e8ec] bg-white p-2.5 transition-all duration-300"
                  :class="[step === 0 ? 'tile-in' : '', step === 3 && i === 0 ? 'press ring-2 ring-[#3a8fa8]' : '', step === 0 ? 'ring-2 ring-cyan-300/70' : '']"
                  :style="{ animationDelay: `${i * 0.15}s` }"
                >
                  <UiAppIcon :app="a.app" size="sm" />
                  <p class="mt-2 text-[11px] font-bold">{{ a.name }}</p>
                  <p class="text-[9px] leading-snug text-[#6b7a82]">{{ a.text }}</p>
                  <span v-if="step === 3 && i === 0" class="marker">4</span>
                </div>
              </div>
              <span v-if="step === 0" class="marker !-top-1 !right-0">1</span>
            </div>

            <!-- 4: opening an app -->
            <Transition name="toast">
              <div v-if="step === 3" class="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#14232a] px-3 py-1.5 text-[10px] font-medium text-white shadow-lift">
                <i class="fa-solid fa-arrow-up-right-from-square text-[9px] text-cyan-300"></i>Opening DeepCost — already signed in
              </div>
            </Transition>

            <!-- 5: ARIVU -->
            <div class="absolute bottom-2 right-2 z-20 flex flex-col items-end gap-2">
              <Transition name="chat">
                <div v-if="step === 4" class="w-56 rounded-2xl border border-ai-100 bg-white p-2.5 text-[10px] shadow-lift">
                  <p class="ml-auto w-fit rounded-xl rounded-br-sm bg-[#255e6b] px-2 py-1 text-white">What is waiting for my approval?</p>
                  <div class="mt-2 rounded-xl rounded-bl-sm bg-[#f3f5f7] p-2">
                    <p class="font-semibold">3 items are waiting:</p>
                    <p v-for="w in waiting" :key="w.text" class="mt-1 flex items-center gap-1.5"><UiAppIcon :app="w.app" size="xs" />{{ w.text }}</p>
                  </div>
                </div>
              </Transition>
              <span class="relative">
                <span class="absolute inset-0 rounded-full" :class="step === 4 ? 'arivu-halo' : ''"></span>
                <UiArivuAvatar :size="step === 4 ? 52 : 44" :float="step === 4" />
                <span v-if="step === 4" class="marker !-left-1 !-top-1">5</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <figcaption class="sr-only">Illustration of the CCorex portal for a demo organisation: one sign-in shows the apps the user can open, today’s attendance status, the user’s role, an app opening already signed in, and ARIVU answering what is waiting for approval.</figcaption>
    </figure>

    <ol v-if="explain" class="space-y-2">
      <li v-for="(s, i) in steps" :key="s.title" class="flex gap-3 rounded-2xl border p-3 transition-colors duration-500" :class="step === i ? 'border-brand-200 bg-brand-50' : 'border-ink-100 bg-white'">
        <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-500" :class="step === i ? 'bg-brand-700 text-white' : 'bg-ink-100 text-ink-500'">{{ i + 1 }}</span>
        <span>
          <span class="block text-sm font-semibold text-ink-900">{{ s.title }}</span>
          <span class="block text-xs leading-snug text-ink-600">{{ s.text }}</span>
        </span>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
// Coded illustration of the CCorex portal (dash.ccorex.com) with demo data.
// It walks through five things the portal does; SSR and reduced motion show the final ARIVU state.
withDefaults(defineProps<{ explain?: boolean }>(), { explain: true })

const nav = [
  { label: 'Dashboard', icon: 'fa-solid fa-display' }, { label: 'Organizations', icon: 'fa-regular fa-building' },
  { label: 'Users', icon: 'fa-regular fa-user' }, { label: 'Attendance', icon: 'fa-regular fa-clock' },
  { label: 'Helpdesk', icon: 'fa-solid fa-headset' }, { label: 'App Settings', icon: 'fa-solid fa-gear' }
]
const portalApps = [
  { app: 'deepcost', name: 'DeepCost', text: 'Cost estimation and management' },
  { app: 'deeptrack', name: 'DeepTrack', text: 'Project management and tracking' },
  { app: 'deephr', name: 'DeepHR', text: 'Human resources management' },
  { app: 'deep-drive', name: 'Deep Drive', text: 'Document storage and management' },
  { app: 'pdf-editor', name: 'PDF Editor', text: 'PDF annotation and markup' },
  { app: 'arivu-ai', name: 'ARIVU AI', text: 'AI assistant across your apps' }
]
const waiting = [
  { app: 'deeptrack', text: 'Budget for Block B fit-out' },
  { app: 'deephr', text: 'Annual leave request, 3 days' },
  { app: 'deepcost', text: 'ACMV estimate ready for review' }
]
const steps = [
  { title: 'One sign-in, only your apps', text: 'Each person sees a tile for every app they are entitled to.' },
  { title: 'Today’s attendance', text: 'The face + GPS check-in from the DeepHR phone app shows here.' },
  { title: 'Roles set once', text: 'Users and roles are managed in the portal, per app.' },
  { title: 'Open an app, already signed in', text: 'Click a tile and the app opens in a new tab — no second login.' },
  { title: 'Ask ARIVU', text: 'The AI assistant answers from your own data across the apps — read-only.' }
]
const durations = [2600, 2600, 2200, 2400, 4200]

const root = ref<HTMLElement | null>(null)
const step = ref(4)
const checkedIn = computed(() => step.value >= 1)
const hl = (i: number) => (step.value === i ? 'ring-2 ring-cyan-300 scale-[1.04]' : '')

let timer: ReturnType<typeof setTimeout> | undefined
let io: IntersectionObserver | undefined
let visible = false
function schedule() {
  clearTimeout(timer)
  if (!visible) return
  timer = setTimeout(() => { step.value = (step.value + 1) % durations.length; schedule() }, durations[step.value])
}
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  step.value = 0
  io = new IntersectionObserver((e) => { visible = e.some((x) => x.isIntersecting); if (visible) schedule(); else clearTimeout(timer) }, { threshold: 0.2 })
  if (root.value) io.observe(root.value)
})
onBeforeUnmount(() => { clearTimeout(timer); io?.disconnect() })
</script>

<style scoped>
.marker {
  position: absolute; top: -8px; right: -8px; z-index: 30;
  display: flex; height: 20px; width: 20px; align-items: center; justify-content: center;
  border-radius: 9999px; background: #6938ef; color: #fff; font-size: 10px; font-weight: 700;
  box-shadow: 0 0 0 3px rgba(105, 56, 239, .25); animation: marker .4s cubic-bezier(.2, 1.4, .4, 1) both;
}
@keyframes marker { from { transform: scale(0); } to { transform: scale(1); } }
.tile-in { animation: tile-in .5s cubic-bezier(.2, .8, .2, 1) both; }
@keyframes tile-in { from { opacity: 0; transform: translateY(8px) scale(.96); } to { opacity: 1; transform: none; } }
.press { animation: press .6s ease .5s both; }
@keyframes press { 45% { transform: scale(.95); } 100% { transform: scale(1); } }
.arivu-halo { box-shadow: 0 0 0 0 rgba(105, 56, 239, .5); animation: halo 1.6s ease-out infinite; }
@keyframes halo { to { box-shadow: 0 0 0 18px rgba(105, 56, 239, 0); } }
.toast-enter-active, .toast-leave-active, .chat-enter-active, .chat-leave-active { transition: opacity .35s ease, transform .35s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translate(-50%, 8px); }
.chat-enter-from, .chat-leave-to { opacity: 0; transform: translateY(8px) scale(.96); transform-origin: bottom right; }
@media (prefers-reduced-motion: reduce) {
  .marker, .tile-in, .press, .arivu-halo { animation: none; }
}
</style>
