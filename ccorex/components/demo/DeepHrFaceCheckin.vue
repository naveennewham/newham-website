<template>
  <div ref="root" :class="phoneOnly ? '' : 'grid items-center gap-10 md:grid-cols-[auto_1fr]'">
    <figure class="mx-auto">
      <UiPhoneFrame>
        <div class="light-surface relative flex h-full flex-col bg-[#f4f6f8] text-ink-900" aria-hidden="true">
          <!-- App bar, as in the DeepHR mobile app -->
          <div class="flex shrink-0 items-center gap-2.5 bg-[#255e6b] px-3 pb-3 pt-7 text-white">
            <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15"><i class="fa-solid fa-arrow-left text-[10px]"></i></span>
            <span class="min-w-0 flex-1">
              <span class="block text-[13px] font-bold leading-tight">Attendance</span>
              <span class="block truncate text-[9px] text-white/75">Meridian BuildTech (demo)</span>
            </span>
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-[9px] font-bold">JT</span>
          </div>

          <!-- Steps; the stack slides so the active step stays in view -->
          <div class="relative flex-1 overflow-hidden">
            <div class="space-y-2 p-2.5 transition-transform duration-700 ease-out" :style="{ transform: `translateY(${-offset}px)` }">
              <!-- 1 Face registration -->
              <div :ref="(el) => (cards[0] = el as HTMLElement)" class="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5 transition-shadow duration-500" :class="stage === 0 ? 'ring-2 ring-emerald-400' : ''">
                <div class="flex items-center gap-2">
                  <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white"><i class="fa-solid fa-check text-[9px]"></i></span>
                  <span class="text-[11px] font-bold">Face Registration</span>
                  <span class="flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-1.5 py-px text-[8px] font-semibold text-amber-800"><i class="fa-solid fa-lock text-[7px]"></i>Locked</span>
                </div>
                <p class="ml-8 mt-0.5 text-[9px] leading-snug text-ink-500">Registered once — HR unlocks re-registration</p>
              </div>

              <!-- 2 Scan face -->
              <div :ref="(el) => (cards[1] = el as HTMLElement)" class="rounded-xl border bg-white p-2.5 transition-all duration-500" :class="stage === 1 ? 'border-[#255e6b] ring-2 ring-[#255e6b]/30' : 'border-ink-100'">
                <div class="flex items-center gap-2">
                  <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-colors duration-500" :class="faceDone ? 'bg-emerald-600 text-white' : 'border-2 border-[#255e6b] text-[#255e6b]'">
                    <i v-if="faceDone" class="fa-solid fa-check text-[9px]"></i><template v-else>2</template>
                  </span>
                  <span class="text-[11px] font-bold">Scan Face</span>
                </div>
                <p class="ml-8 mt-0.5 text-[9px] text-ink-500">{{ faceDone ? 'Identity verified' : 'Verify your identity to check in' }}</p>
                <template v-if="!faceDone">
                  <span class="ml-8 mt-1.5 inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-px text-[8px] font-semibold text-emerald-700"><i class="fa-regular fa-user text-[7px]"></i>AI ready</span>
                  <div class="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-[#255e6b] py-2 text-[10px] font-semibold text-white transition-transform duration-200" :class="phase === 1 ? 'tap' : ''"><i class="fa-solid fa-expand text-[9px]"></i>Scan Face</div>
                </template>
              </div>

              <!-- 3 Select office -->
              <div :ref="(el) => (cards[2] = el as HTMLElement)" class="rounded-xl border bg-white p-2.5 transition-all duration-500" :class="[stage === 2 ? 'border-[#255e6b] ring-2 ring-[#255e6b]/30' : 'border-ink-100', stage < 2 ? 'opacity-50' : '']">
                <div class="flex items-center gap-2">
                  <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-colors duration-500" :class="officePicked ? 'bg-emerald-600 text-white' : 'border-2 border-ink-300 text-ink-400'">
                    <i v-if="officePicked" class="fa-solid fa-check text-[9px]"></i><template v-else>3</template>
                  </span>
                  <span class="text-[11px] font-bold">Select Office</span>
                </div>
                <p class="ml-8 mt-0.5 text-[9px] text-ink-500">Choose your work location for today</p>
                <div class="mt-2 space-y-1.5">
                  <div v-for="(o, i) in offices" :key="o.name" class="flex items-center gap-2 rounded-lg border px-2 py-1.5 transition-colors duration-300" :class="officePicked && i === 1 ? 'border-[#255e6b] bg-[#255e6b]/5' : 'border-ink-100'">
                    <i class="fa-solid fa-house text-[10px] text-ink-400"></i>
                    <span class="min-w-0 flex-1">
                      <span class="block text-[10px] font-medium">{{ o.name }}</span>
                      <span class="block text-[8px] text-ink-400">{{ o.hours }}</span>
                    </span>
                    <span class="flex h-3.5 w-3.5 items-center justify-center rounded-full border-2" :class="officePicked && i === 1 ? 'border-[#255e6b]' : 'border-ink-200'">
                      <span v-if="officePicked && i === 1" class="h-1.5 w-1.5 rounded-full bg-[#255e6b]"></span>
                    </span>
                  </div>
                </div>
              </div>

              <!-- 4 Check in -->
              <div :ref="(el) => (cards[3] = el as HTMLElement)" class="rounded-xl border bg-white p-2.5 transition-all duration-500" :class="[stage === 3 ? 'border-[#255e6b] ring-2 ring-[#255e6b]/30' : 'border-ink-100', stage < 3 ? 'opacity-50' : '']">
                <div class="flex items-center gap-2">
                  <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-[10px] font-bold" :class="stage === 3 ? 'border-[#255e6b] text-[#255e6b]' : 'border-ink-300 text-ink-400'">4</span>
                  <span class="text-[11px] font-bold">Check In</span>
                </div>
                <p class="ml-8 mt-0.5 text-[9px] text-ink-500">Confirm to record your attendance</p>
                <span class="ml-8 mt-1.5 inline-flex items-center gap-1 rounded-full border px-1.5 py-px text-[8px] font-semibold transition-colors duration-500" :class="phase >= 4 ? 'border-emerald-300 bg-emerald-50 text-emerald-700' : 'border-emerald-100 text-emerald-600/60'">
                  <i class="fa-solid fa-location-dot text-[7px]" :class="phase === 4 ? 'gps' : ''"></i>{{ phase >= 4 ? 'GPS ready · inside site radius' : 'GPS ready' }}
                </span>
                <div class="mt-2 flex items-center justify-center gap-1.5 rounded-lg py-2 text-[10px] font-semibold transition-colors duration-500" :class="[phase >= 4 ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-white', phase === 4 ? 'tap tap-late' : '']"><i class="fa-solid fa-expand text-[9px]"></i>Confirm Check In</div>
              </div>
            </div>
          </div>

          <p class="shrink-0 bg-[#f4f6f8] py-1.5 text-center text-[8px] font-semibold uppercase tracking-wider text-ink-400">Illustration · demo data</p>

          <!-- Camera overlay while the face is scanned -->
          <Transition name="fade">
            <div v-if="phase === 2" class="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0b1d22] text-white">
              <div class="relative h-40 w-32">
                <span class="absolute inset-0 rounded-[50%] border-2 border-dashed border-cyan-300/70"></span>
                <span class="corner left-0 top-0 border-l-2 border-t-2"></span><span class="corner right-0 top-0 border-r-2 border-t-2"></span>
                <span class="corner bottom-0 left-0 border-b-2 border-l-2"></span><span class="corner bottom-0 right-0 border-b-2 border-r-2"></span>
                <i class="fa-solid fa-user absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white/25"></i>
                <span class="scanline absolute inset-x-3 h-0.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]"></span>
              </div>
              <p class="mt-5 text-[11px] font-semibold">Hold still…</p>
              <p class="mt-1 text-[9px] text-white/60">Matching with your registered face</p>
            </div>
          </Transition>

          <!-- Result -->
          <Transition name="fade">
            <div v-if="phase === 5" class="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white px-4 text-center">
              <span class="pop flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100"><i class="fa-solid fa-check text-2xl text-emerald-600"></i></span>
              <p class="mt-3 text-sm font-bold">Checked in</p>
              <span class="mt-1 rounded-full bg-emerald-100 px-2 py-px text-[9px] font-semibold text-emerald-700">On time</span>
              <div class="mt-4 w-full space-y-1.5 rounded-xl border border-ink-100 p-2.5 text-left text-[9px]">
                <p class="flex justify-between"><span class="text-ink-500">Location</span><span class="font-semibold">{{ offices[1].name }}</span></p>
                <p class="flex justify-between"><span class="text-ink-500">Time</span><span class="font-semibold">07:54 SGT</span></p>
                <p class="flex justify-between"><span class="text-ink-500">Shift</span><span class="font-semibold">{{ offices[1].hours }}</span></p>
              </div>
              <p class="mt-3 text-[9px] text-ink-500">Sent to HR for approval</p>
            </div>
          </Transition>
          
        </div>
      </UiPhoneFrame>
      <figcaption class="sr-only">Illustration of a DeepHR check-in on an employee’s phone: the face is already registered and locked, the employee scans their face, selects Tuas site from their allowed locations, and confirms the check-in with GPS inside the site radius. The result reads “Checked in, on time” and the session goes to HR for approval.</figcaption>
    </figure>

    <div v-if="!phoneOnly">
      <ol class="space-y-3">
        <li v-for="(s, i) in stages" :key="s.title" class="flex gap-4 rounded-2xl border p-4 transition-colors duration-500" :class="stage === i ? 'border-brand-200 bg-brand-50' : 'border-ink-100 bg-white'">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm transition-colors duration-500" :class="stage >= i ? 'bg-brand-700 text-white' : 'bg-ink-100 text-ink-500'"><i :class="s.icon" aria-hidden="true"></i></span>
          <span>
            <span class="block text-sm font-semibold text-ink-900">{{ i + 1 }}. {{ s.title }}</span>
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
// Coded illustration of the DeepHR mobile check-in, following the app's own four steps:
// face registered (locked) → scan face → select office → confirm check-in with GPS.
// SSR and reduced-motion users see the final "Checked in · On time" state; otherwise it loops while visible.
withDefaults(defineProps<{ phoneOnly?: boolean }>(), { phoneOnly: false })

const offices = [
  { name: 'Head office', hours: '08:30 – 17:30' },
  { name: 'Tuas site', hours: '08:00 – 17:00' },
  { name: 'Home office', hours: '09:00 – 18:00' }
]
const stages = [
  { icon: 'fa-solid fa-id-badge', title: 'Face registered once', text: 'Three samples at enrolment, then locked — only HR can allow a new scan.' },
  { icon: 'fa-solid fa-face-smile', title: 'Scan face', text: 'The live face is matched against the registered samples before check-in.' },
  { icon: 'fa-solid fa-building', title: 'Select today’s location', text: 'Only the employee’s allowed offices and sites appear, each with its working hours.' },
  { icon: 'fa-solid fa-location-crosshairs', title: 'Confirm with GPS', text: 'The phone must be inside the site’s radius. The session then goes to HR for approval and on to payroll.' }
]
// phase: 0 registered · 1 tap scan · 2 camera · 3 office picked · 4 GPS + confirm · 5 result
const durations = [1800, 1100, 2400, 2000, 1800, 3400]
const phaseStage = [0, 1, 1, 2, 3, 3]

const root = ref<HTMLElement | null>(null)
const cards: HTMLElement[] = []
const phase = ref(5)
const animated = ref(false)
const paused = ref(false)
const offset = ref(0)
const stage = computed(() => phaseStage[phase.value]!)
const faceDone = computed(() => phase.value >= 3)
const officePicked = computed(() => phase.value >= 3)

let timer: ReturnType<typeof setTimeout> | undefined
let io: IntersectionObserver | undefined
let visible = false

// Keep the active step in view inside the phone screen.
watch(phase, async () => {
  await nextTick()
  const el = cards[stage.value]
  const stack = el?.parentElement
  const view = stack?.parentElement
  if (!el || !stack || !view || stage.value < 2) { offset.value = 0; return }
  // Scroll to the active card, but never past the end of the stack.
  offset.value = Math.max(0, Math.min(el.offsetTop - 10, stack.scrollHeight - view.clientHeight))
})

function schedule() {
  clearTimeout(timer)
  if (paused.value || !visible) return
  timer = setTimeout(() => { phase.value = (phase.value + 1) % durations.length; schedule() }, durations[phase.value])
}
function toggle() { paused.value = !paused.value; schedule() }

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  animated.value = true
  phase.value = 0
  io = new IntersectionObserver((e) => { visible = e.some((x) => x.isIntersecting); if (visible) schedule(); else clearTimeout(timer) }, { threshold: 0.25 })
  if (root.value) io.observe(root.value)
})
onBeforeUnmount(() => { clearTimeout(timer); io?.disconnect() })
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .35s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.tap { animation: tap .5s ease .45s both; }
.tap-late { animation-delay: 1.1s; }
@keyframes tap { 0%, 100% { transform: scale(1); } 45% { transform: scale(.94); filter: brightness(1.15); } }
.corner { position: absolute; width: 18px; height: 18px; border-color: rgb(103 232 249); border-radius: 4px; }
.scanline { animation: scan 1.1s ease-in-out infinite alternate; top: 12%; }
@keyframes scan { from { top: 12%; } to { top: 86%; } }
.gps { animation: gps .8s ease-in-out infinite alternate; }
@keyframes gps { to { transform: translateY(-2px); } }
.pop { animation: pop .45s cubic-bezier(.2, 1.4, .4, 1) both; }
@keyframes pop { from { transform: scale(.6); opacity: 0; } to { transform: scale(1); opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
  .tap, .scanline, .gps, .pop { animation: none; }
  .fade-enter-active, .fade-leave-active { transition: none; }
}
</style>
