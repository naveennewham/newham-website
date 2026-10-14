<template>
  <div ref="root" class="grid items-center gap-10 md:grid-cols-[auto_1fr]">
    <figure class="mx-auto">
      <UiPhoneFrame>
        <div class="flex h-full flex-col bg-ink-50 text-ink-900" aria-hidden="true">
          <!-- App bar -->
          <div class="flex items-center justify-between bg-brand-800 px-4 pb-3 pt-7 text-white">
            <span class="flex items-center gap-2 text-xs font-semibold"><i class="fa-solid fa-users text-[11px]"></i>DeepHR</span>
            <span class="text-[10px] text-brand-100">My Attendance</span>
          </div>
          <div class="px-4 pt-4">
            <p class="text-sm font-bold">Check in</p>
            <p class="text-[10px] text-ink-500">Select your site, then verify your face</p>
          </div>

          <div class="relative flex-1 px-4 pt-3">
            <Transition name="fc" mode="out-in">
              <!-- 1. Select site -->
              <div v-if="step === 0" key="site" class="space-y-2">
                <p class="text-[10px] font-semibold uppercase tracking-wider text-ink-500">Select your site</p>
                <div v-for="(s, i) in sites" :key="s.name" class="flex items-center justify-between rounded-xl border bg-white px-3 py-2.5" :class="i === 0 ? 'border-brand-500 ring-1 ring-brand-500' : 'border-ink-100'">
                  <span>
                    <span class="block text-xs font-semibold">{{ s.name }}</span>
                    <span class="block text-[10px] text-ink-500">{{ s.hours }}</span>
                  </span>
                  <i v-if="i === 0" class="fa-solid fa-circle-check text-sm text-brand-600"></i>
                </div>
                <div class="mt-4 flex items-center justify-center gap-2 rounded-xl bg-brand-700 py-2.5 text-xs font-semibold text-white"><i class="fa-solid fa-camera text-[11px]"></i>Open camera</div>
              </div>

              <!-- 2. Face scan -->
              <div v-else-if="step === 1" key="face" class="flex flex-col items-center pt-3">
                <div class="relative flex h-36 w-36 items-center justify-center">
                  <span class="fc-ring absolute inset-0 rounded-full"></span>
                  <span class="absolute inset-[6px] rounded-full bg-ink-900"></span>
                  <i class="fa-solid fa-user relative text-6xl text-ink-400"></i>
                  <span class="fc-scan absolute inset-x-6 h-0.5 rounded-full bg-cyan-400/80"></span>
                </div>
                <p class="mt-5 text-xs font-semibold">Matching face…</p>
                <p class="mt-1 text-center text-[10px] text-ink-500">Compared with your enrolled samples</p>
              </div>

              <!-- 3. GPS -->
              <div v-else-if="step === 2" key="gps" class="flex flex-col items-center pt-3">
                <div class="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#e6f3f5,#f6f8fa)]">
                  <span class="absolute inset-0 opacity-60 [background-image:linear-gradient(#d5e3e6_1px,transparent_1px),linear-gradient(90deg,#d5e3e6_1px,transparent_1px)] [background-size:18px_18px]"></span>
                  <span class="fc-radius absolute h-24 w-24 rounded-full border-2 border-brand-500 bg-brand-500/10"></span>
                  <i class="fa-solid fa-location-dot relative -mt-3 text-2xl text-brand-700"></i>
                </div>
                <p class="mt-5 flex items-center gap-1.5 text-xs font-semibold text-brand-700"><i class="fa-solid fa-circle-check"></i>Inside 100 m radius</p>
                <p class="mt-1 text-center text-[10px] text-ink-500">Face matched · Tuas site</p>
              </div>

              <!-- 4. Result -->
              <div v-else key="done" class="flex flex-col items-center pt-3 text-center">
                <span class="fc-pop flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                  <i class="fa-solid fa-check text-3xl text-emerald-600"></i>
                </span>
                <p class="mt-4 text-sm font-bold">Checked in</p>
                <span class="mt-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700">On time</span>
                <div class="mt-4 w-full space-y-1.5 rounded-xl border border-ink-100 bg-white p-3 text-left text-[10px]">
                  <p class="flex justify-between"><span class="text-ink-500">Site</span><span class="font-semibold">Tuas site</span></p>
                  <p class="flex justify-between"><span class="text-ink-500">Time</span><span class="font-semibold">07:54 SGT</span></p>
                  <p class="flex justify-between"><span class="text-ink-500">Site start</span><span class="font-semibold">08:00</span></p>
                </div>
                <p class="mt-3 text-[10px] text-ink-500">One session today · check out later</p>
              </div>
            </Transition>
          </div>
          <p class="pb-4 text-center text-[9px] font-semibold uppercase tracking-wider text-ink-400">Illustration</p>
        </div>
      </UiPhoneFrame>
      <figcaption class="sr-only">Illustration of a DeepHR check-in on an employee’s phone: the employee selects Tuas site, the face is matched against enrolled samples, the GPS position is confirmed inside the site’s 100 metre radius, and the result reads “Checked in, on time”.</figcaption>
    </figure>

    <div>
      <ol class="space-y-3">
        <li v-for="(s, i) in stages" :key="s.title" class="flex gap-4 rounded-2xl border p-4 transition-colors duration-500" :class="step === i ? 'border-brand-200 bg-brand-50' : 'border-ink-100 bg-white'">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm transition-colors duration-500" :class="step >= i ? 'bg-brand-700 text-white' : 'bg-ink-100 text-ink-500'"><i :class="s.icon" aria-hidden="true"></i></span>
          <span>
            <span class="block text-sm font-semibold text-ink-900">{{ s.title }}</span>
            <span class="mt-0.5 block text-sm leading-snug text-ink-600">{{ s.text }}</span>
          </span>
        </li>
      </ol>
      <button v-if="animated" type="button" class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900" @click="toggle">
        <i :class="paused ? 'fa-solid fa-play' : 'fa-solid fa-pause'" class="text-xs" aria-hidden="true"></i>{{ paused ? 'Play animation' : 'Pause animation' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Coded illustration of a FaceReg check-in (FDD §5.1). SSR and reduced-motion
// users see the final "Checked in · On time" state; otherwise it loops while visible.
const sites = [
  { name: 'Tuas site', hours: '08:00 – 17:00 · SGT' },
  { name: 'Head office', hours: '09:00 – 18:00 · SGT' }
]
const stages = [
  { icon: 'fa-solid fa-building', title: 'Pick an allowed site', text: 'Only sites on the employee’s allowed-site list are offered.' },
  { icon: 'fa-solid fa-face-smile', title: 'Match the face', text: 'The live face must match the enrolled samples within the threshold.' },
  { icon: 'fa-solid fa-location-crosshairs', title: 'Check the GPS radius', text: 'The phone must be inside the site’s radius, e.g. 100 m.' },
  { icon: 'fa-solid fa-clock', title: 'On time or late', text: 'Marked against the site’s start time, in the site’s own time zone.' }
]
const durations = [1800, 2600, 2000, 3800]
const root = ref<HTMLElement | null>(null)
const step = ref(3)
const animated = ref(false)
const paused = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined
let io: IntersectionObserver | undefined
let visible = false

function schedule() {
  clearTimeout(timer)
  if (paused.value || !visible) return
  timer = setTimeout(() => { step.value = (step.value + 1) % 4; schedule() }, durations[step.value])
}
function toggle() { paused.value = !paused.value; schedule() }

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  animated.value = true
  step.value = 0
  io = new IntersectionObserver((e) => { visible = e.some((x) => x.isIntersecting); if (visible) schedule(); else clearTimeout(timer) }, { threshold: 0.25 })
  if (root.value) io.observe(root.value)
})
onBeforeUnmount(() => { clearTimeout(timer); io?.disconnect() })
</script>

<style scoped>
.fc-enter-active, .fc-leave-active { transition: opacity .35s ease, transform .35s ease; }
.fc-enter-from { opacity: 0; transform: translateY(8px); }
.fc-leave-to { opacity: 0; transform: translateY(-8px); }
.fc-ring { background: conic-gradient(from 0deg, #01acc8, #005d6c, transparent 70%, #01acc8); animation: fc-spin 1.2s linear infinite; }
.fc-scan { animation: fc-scan 1.3s ease-in-out infinite alternate; top: 30%; }
.fc-radius { animation: fc-pulse 1.6s ease-out infinite; }
.fc-pop { animation: fc-pop .45s cubic-bezier(.2,1.4,.4,1) both; }
@keyframes fc-spin { to { transform: rotate(360deg); } }
@keyframes fc-scan { from { top: 25%; } to { top: 75%; } }
@keyframes fc-pulse { 0% { transform: scale(.85); opacity: 1; } 100% { transform: scale(1.1); opacity: .6; } }
@keyframes fc-pop { from { transform: scale(.6); opacity: 0; } to { transform: scale(1); opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
  .fc-ring, .fc-scan, .fc-radius, .fc-pop { animation: none; }
  .fc-enter-active, .fc-leave-active { transition: none; }
}
</style>
