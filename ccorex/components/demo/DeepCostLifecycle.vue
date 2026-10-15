<template>
  <div ref="root" class="card">
    <div class="flex items-center gap-3">
      <span class="icon-tile"><i class="fa-solid fa-list-check" aria-hidden="true"></i></span>
      <div class="mr-auto">
        <h3 class="text-lg font-semibold">Status lifecycle</h3>
        <p class="text-xs text-ink-500">Area schedule, MTO and FOT</p>
      </div>
      <button v-if="animated" type="button" class="flex h-8 w-8 items-center justify-center rounded-md text-ink-500 hover:bg-ink-100 hover:text-ink-800" :aria-label="paused ? 'Play animation' : 'Pause animation'" @click="toggle">
        <i :class="paused ? 'fa-solid fa-play' : 'fa-solid fa-pause'" class="text-xs" aria-hidden="true"></i>
      </button>
    </div>

    <ol class="mt-6 grid grid-cols-5" aria-label="Status lifecycle">
      <li v-for="(st, i) in stages" :key="st.name" class="relative flex flex-col items-center text-center" :aria-current="i === s ? 'step' : undefined">
        <span v-if="i > 0" class="absolute right-1/2 top-4 h-0.5 w-full -translate-y-1/2 transition-colors duration-500" :class="i <= s ? 'bg-brand-600' : 'bg-ink-200'" aria-hidden="true"></span>
        <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-500"
          :class="i < s ? 'border-brand-600 bg-brand-600 text-white' : i === s ? 'scale-110 border-brand-600 bg-white text-brand-700 ring-4 ring-brand-100' : 'border-ink-200 bg-white text-ink-500'">
          <i v-if="i < s" class="fa-solid fa-check text-[11px]" aria-hidden="true"></i><template v-else>{{ i + 1 }}</template>
        </span>
        <span class="mt-2 text-[11px] font-semibold leading-tight sm:text-xs" :class="i <= s ? 'text-ink-900' : 'text-ink-500'">{{ st.name }}</span>
        <span v-if="st.action" class="mt-0.5 hidden text-[10px] text-ink-500 sm:block">by {{ st.by }}</span>
      </li>
    </ol>

    <div class="mt-6 min-h-[7.5rem] rounded-xl border border-brand-100 bg-brand-50 p-4" aria-live="polite">
      <p class="text-sm font-semibold text-brand-900"><i :class="current.icon" class="mr-2 text-brand-600" aria-hidden="true"></i>{{ current.name }}<span v-if="current.action" class="font-normal text-brand-800"> — {{ current.action }}</span></p>
      <p class="mt-1 text-sm text-ink-700">{{ current.text }}</p>
      <ul v-if="current.checklist" class="mt-2 flex flex-wrap gap-2">
        <li v-for="c in checklist" :key="c" class="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-ink-700 ring-1 ring-brand-100"><i class="fa-solid fa-square-check text-brand-600" aria-hidden="true"></i>{{ c }}</li>
      </ul>
      <p v-if="current.email" class="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-brand-800"><i class="fa-regular fa-envelope" aria-hidden="true"></i>Email to the next stage's users</p>
    </div>

    <ul class="mt-4 grid gap-3 text-sm sm:grid-cols-2">
      <li class="flex gap-2.5 rounded-xl border border-amber-200 bg-amber-50 p-3 text-ink-700"><i class="fa-solid fa-rotate-left mt-0.5 text-amber-600" aria-hidden="true"></i><span><strong class="text-ink-900">Revoke with a reason.</strong> From Submitted, Approved or Completed. The reason is kept as history and earlier users are emailed.</span></li>
      <li class="flex gap-2.5 rounded-xl border border-ink-200 bg-white p-3 text-ink-700"><i class="fa-solid fa-code-branch mt-0.5 text-brand-600" aria-hidden="true"></i><span><strong class="text-ink-900">Revision.</strong> Area schedule and MTO also have a Revision status; the FOT does not.</span></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Status lifecycle from FDD §6.4, animated as a stepper. SSR and reduced-motion
// users see the final (Completed) state.
const stages = [
  { name: 'Not Started', icon: 'fa-regular fa-circle', text: 'No work recorded on this stage yet.' },
  { name: 'In Progress', icon: 'fa-solid fa-pen-ruler', text: 'The estimator builds it. Areas can be edited only up to In Progress.' },
  { name: 'Submitted', action: 'submit', by: 'Estimator', icon: 'fa-solid fa-paper-plane', text: 'Submitted from In Progress, ready for a manager to check. Submitting the MTO unlocks the FOT.', email: true },
  { name: 'Approved', action: 'approve', by: 'Manager', icon: 'fa-solid fa-user-check', text: 'Approved from Submitted — only once the checklist is ticked.', checklist: true, email: true },
  { name: 'Completed', action: 'complete', by: 'Admin', icon: 'fa-solid fa-flag-checkered', text: 'Completed from Approved by an admin.', email: true }
]
const checklist = ['Measurements or quantities checked', 'Material prices verified', 'Installation prices verified']

const FINAL = stages.length - 1
const HOLD = 3
const root = ref<HTMLElement | null>(null)
const step = ref(FINAL)
const animated = ref(false)
const paused = ref(false)
const s = computed(() => Math.min(step.value, FINAL))
const current = computed(() => stages[s.value])

let timer: ReturnType<typeof setInterval> | undefined
let io: IntersectionObserver | undefined
const tick = () => { step.value = step.value >= FINAL + HOLD ? 0 : step.value + 1 }
const start = () => { if (!timer && !paused.value) timer = setInterval(tick, 2200) }
const stop = () => { clearInterval(timer); timer = undefined }
const toggle = () => { paused.value = !paused.value; paused.value ? stop() : start() }

onMounted(() => {
  if (!root.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  animated.value = true
  const r = root.value.getBoundingClientRect()
  if (r.top > window.innerHeight || r.bottom < 0) step.value = 0
  io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.3 })
  io.observe(root.value)
})
onBeforeUnmount(() => { stop(); io?.disconnect() })
</script>
