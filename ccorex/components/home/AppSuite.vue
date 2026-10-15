<template>
  <section ref="root" class="relative overflow-hidden bg-ink-50 py-20 sm:py-24">
    <div class="container-site">
      <UiSectionHeader center eyebrow="Every team, one platform" title="Built for every desk in a construction business" lead="Seven apps on one sign-in. Here is what each one does and who uses it — ARIVU AI works inside all of them." />

      <!-- App index -->
      <ul class="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2" aria-label="CCorex apps">
        <li v-for="a in index" :key="a.app">
          <a :href="`#app-${a.app}`" class="flex items-center gap-2 rounded-full border border-ink-100 bg-white py-1 pl-1 pr-3 text-sm font-semibold text-ink-800 shadow-card transition-colors hover:border-brand-300">
            <UiAppIcon :app="a.app" size="xs" />{{ a.name }}
          </a>
        </li>
      </ul>

      <div class="mt-12 grid gap-5 lg:grid-cols-6">
        <!-- DeepCost -->
        <article id="app-deepcost" class="card-app lg:col-span-4">
          <AppHead app="deepcost" who="Estimators & QS" title="Price every tender from one linked record" />
          <p class="mt-3 text-sm leading-relaxed text-ink-600">From the tender received to the priced Form of Tender: AI reads the tender documents, estimators take off by area, and every stage is submitted, approved and completed.</p>
          <div class="mt-5 space-y-5">
            <ul class="space-y-2">
              <li v-for="p in points.deepcost" :key="p" class="pt"><i class="fa-solid fa-check" aria-hidden="true"></i>{{ p }}</li>
            </ul>
            <ol class="grid grid-cols-2 gap-2 sm:grid-cols-4" aria-hidden="true">
              <li v-for="(s, i) in costSteps" :key="s.label" class="flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all duration-500" :class="tick % 5 === i ? 'border-[#3a8fa8] bg-[#3a8fa8]/10 text-ink-900' : tick % 5 > i || tick % 5 === 4 ? 'border-ink-100 bg-white text-ink-700' : 'border-ink-100 bg-white text-ink-400'">
                <span class="flex h-6 w-6 items-center justify-center rounded-lg" :class="s.ai ? 'bg-ai-gradient text-white' : 'bg-[#3a8fa8]/15 text-[#2f7890]'"><i :class="s.icon" class="text-[10px]"></i></span>{{ s.label }}
              </li>
            </ol>
          </div>
          <AppLink to="/products/deepcost" name="DeepCost" />
        </article>

        <!-- DeepPlan AI -->
        <article id="app-deepplan-ai" class="card-app lg:col-span-2">
          <AppHead app="deepplan-ai" who="Estimators" title="From drawings to quantities" badge="AI take-off in early access" />
          <svg viewBox="0 0 220 120" class="mt-4 w-full rounded-xl border border-ink-100 bg-white" aria-hidden="true">
            <rect x="10" y="10" width="200" height="100" fill="none" stroke="rgb(var(--ink-300))" stroke-width="1.5" />
            <line x1="90" y1="10" x2="90" y2="110" stroke="rgb(var(--ink-300))" stroke-width="1.5" />
            <line x1="90" y1="60" x2="210" y2="60" stroke="rgb(var(--ink-300))" stroke-width="1.5" />
            <rect v-for="(r, i) in rooms" :key="i" :x="r.x" :y="r.y" :width="r.w" :height="r.h" class="transition-all duration-500" :fill="tick % 4 >= i ? 'rgba(60,79,196,.16)' : 'transparent'" :stroke="tick % 4 === i ? '#3c4fc4' : 'transparent'" stroke-width="2" />
            <circle v-for="(d, i) in symbols" :key="`s${i}`" :cx="d[0]" :cy="d[1]" r="3.2" class="transition-all duration-300" :fill="tick % 4 === 3 ? '#6938ef' : 'rgb(var(--ink-300))'" />
            <text v-for="(r, i) in rooms" :key="`t${i}`" :x="r.x + r.w / 2" :y="r.y + r.h / 2 + 3" text-anchor="middle" font-size="8" font-weight="600" :fill="tick % 4 >= i ? '#3c4fc4' : 'transparent'">{{ r.label }}</text>
          </svg>
          <ul class="mt-4 space-y-2">
            <li v-for="p in points.deepplan" :key="p" class="pt"><i class="fa-solid fa-check" aria-hidden="true"></i>{{ p }}</li>
          </ul>
          <AppLink to="/products/deepplan-ai" name="DeepPlan AI" />
        </article>

        <!-- DeepHR -->
        <article id="app-deephr" class="card-app lg:col-span-6">
          <div class="grid gap-8 md:grid-cols-[1fr_auto] md:items-center lg:grid-cols-[1fr_auto_1fr]">
            <div>
              <AppHead app="deephr" who="HR, site teams & every employee" title="Hire to retire, on every phone" />
              <p class="mt-3 text-sm leading-relaxed text-ink-600">Face and GPS check-in on the employee’s own phone, leave and claims through your approval chain, and payroll with Singapore or India statutory rules.</p>
              <ul class="mt-5 space-y-2">
                <li v-for="p in points.deephr" :key="p" class="pt"><i class="fa-solid fa-check" aria-hidden="true"></i>{{ p }}</li>
              </ul>
              <div class="mt-5 flex flex-wrap gap-1.5">
                <span v-for="b in statutory" :key="b" class="rounded-full border border-ink-100 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-ink-700">{{ b }}</span>
              </div>
              <AppLink to="/products/deephr" name="DeepHR" />
            </div>
            <DemoDeepHrFaceCheckin phone-only class="mx-auto" />
            <ol class="hidden space-y-3 lg:block" aria-label="How a check-in works">
              <li v-for="(s, i) in checkin" :key="s" class="flex gap-3 text-sm text-ink-700">
                <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#459f55]/15 text-xs font-bold text-[#2f7a3f]">{{ i + 1 }}</span><span class="pt-1">{{ s }}</span>
              </li>
            </ol>
          </div>
        </article>

        <!-- DeepTrack -->
        <article id="app-deeptrack" class="card-app lg:col-span-3">
          <AppHead app="deeptrack" who="Project managers, procurement & finance" title="Protect margin on every project" />
          <p class="mt-3 text-sm leading-relaxed text-ink-600">Budgets, purchasing, client claims and manpower in one place — every purchase routed through your approvals and every invoice matched before it is paid.</p>
          <ol class="mt-5 flex flex-wrap items-center gap-1.5" aria-hidden="true">
            <template v-for="(s, i) in p2p" :key="s">
              <li class="rounded-full border px-2.5 py-1 text-[11px] font-semibold transition-colors duration-500" :class="tick % 6 >= i ? 'border-[#dd8a2c] bg-[#dd8a2c]/10 text-ink-900' : 'border-ink-100 bg-white text-ink-400'">{{ s }}</li>
              <li v-if="i < p2p.length - 1" class="text-[10px] text-ink-300"><i class="fa-solid fa-chevron-right"></i></li>
            </template>
          </ol>
          <ul class="mt-5 space-y-2">
            <li v-for="p in points.deeptrack" :key="p" class="pt"><i class="fa-solid fa-check" aria-hidden="true"></i>{{ p }}</li>
          </ul>
          <AppLink to="/products/deeptrack" name="DeepTrack" />
        </article>

        <!-- ARIVU AI -->
        <article id="app-arivu-ai" class="card-app relative overflow-hidden lg:col-span-3">
          <div class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ai-100 blur-3xl" aria-hidden="true"></div>
          <AppHead app="arivu-ai" who="Everyone, inside every app" title="Ask your business anything" />
          <div class="relative mt-5 flex items-end gap-3" aria-hidden="true">
            <UiArivuAvatar :size="84" />
            <div class="min-w-0 flex-1 space-y-2">
              <p class="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-sm bg-[#255e6b] px-3 py-1.5 text-xs text-white">What is waiting for my approval?</p>
              <div class="w-fit max-w-full rounded-2xl rounded-bl-sm border border-ai-100 bg-white px-3 py-2 text-xs text-ink-700 shadow-card">
                <p v-if="tick % 3 === 0" class="flex gap-1"><span class="dot"></span><span class="dot [animation-delay:.15s]"></span><span class="dot [animation-delay:.3s]"></span></p>
                <template v-else>
                  <p class="font-semibold text-ink-900">3 items are waiting:</p>
                  <p v-for="w in waiting" :key="w.text" class="mt-1 flex items-center gap-1.5"><UiAppIcon :app="w.app" size="xs" />{{ w.text }}</p>
                </template>
              </div>
            </div>
          </div>
          <ul class="relative mt-5 space-y-2">
            <li v-for="p in points.arivu" :key="p" class="pt"><i class="fa-solid fa-check" aria-hidden="true"></i>{{ p }}</li>
          </ul>
          <AppLink to="/products/arivu-ai" name="ARIVU AI" />
        </article>

        <!-- Documents -->
        <article class="card-app lg:col-span-6">
          <div class="grid gap-6 md:grid-cols-2">
            <div v-for="d in docs" :id="`app-${d.app}`" :key="d.app" class="flex gap-4">
              <UiAppIcon :app="d.app" size="md" />
              <div>
                <p class="flex flex-wrap items-center gap-2 text-base font-bold text-ink-900">{{ d.name }}</p>
                <p class="mt-1 text-sm text-ink-600">{{ d.text }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'
import UiAppIcon from '~/components/ui/AppIcon.vue'

// Every app explained up front — no tabs to click. Small loops run only while the section is on screen.
const AppHead = defineComponent({
  props: { app: { type: String, required: true }, who: String, title: String, badge: String },
  setup(p) {
    const names: Record<string, string> = { 'deepcost': 'DeepCost', 'deepplan-ai': 'DeepPlan AI', 'deephr': 'DeepHR', 'deeptrack': 'DeepTrack', 'arivu-ai': 'ARIVU AI' }
    return () => h('div', [
      h('div', { class: 'flex items-center gap-3' }, [
        h(UiAppIcon, { app: p.app, size: 'md' }),
        h('div', [
          h('p', { class: 'flex flex-wrap items-center gap-2 text-lg font-bold text-ink-900' }, [names[p.app] ?? p.app, p.badge ? h('span', { class: 'rounded-full bg-ai-50 px-2 py-0.5 text-[10px] font-semibold text-ai-700' }, p.badge) : null]),
          h('p', { class: 'text-xs font-medium text-ink-500' }, `For ${p.who}`)
        ])
      ]),
      h('h3', { class: 'mt-4 text-xl font-bold text-ink-900' }, p.title)
    ])
  }
})
const AppLink = defineComponent({
  props: { to: { type: String, required: true }, name: String },
  setup(p) {
    return () => h(NuxtLink, { to: p.to, class: 'mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-700 hover:text-brand-900' }, () => [`Explore ${p.name}`, h('i', { class: 'fa-solid fa-arrow-right text-xs', 'aria-hidden': 'true' })])
  }
})

const index = [
  { app: 'deepcost', name: 'DeepCost' }, { app: 'deepplan-ai', name: 'DeepPlan AI' }, { app: 'deephr', name: 'DeepHR' },
  { app: 'deeptrack', name: 'DeepTrack' }, { app: 'arivu-ai', name: 'ARIVU AI' }, { app: 'deep-drive', name: 'Deep Drive' }, { app: 'pdf-editor', name: 'PDF Editor' }
]
const points = {
  deepcost: ['AI tender summary from the uploaded documents', 'Area schedule and material take-off by building, floor and room', 'FOT AI overlays your prices on the client’s BOQ PDF', 'Price library with validation rules per trade'],
  deepplan: ['Scale calibration, rooms and measurements', 'AI symbol detection and room take-off', 'BOQ from rooms, counts and your rates'],
  deephr: ['Face + GPS attendance — no kiosk or hardware', 'Leave, claims and timesheets through multi-level approvals', 'Payslips, reports and policies in one app'],
  deeptrack: ['Approved budgets gate purchase requests', 'Client claims, timesheets and month-end cost allocation', 'Zoho Books link for vendors and purchase orders'],
  arivu: ['Answers from your own data across the apps — read-only', 'Charts and PDF / Excel exports', 'Search and summarise tender documents']
}
const costSteps = [
  { label: 'Tender docs', icon: 'fa-solid fa-file-pdf' }, { label: 'AI summary', icon: 'fa-solid fa-wand-magic-sparkles', ai: true },
  { label: 'Area take-off', icon: 'fa-solid fa-ruler-combined' }, { label: 'Priced FOT', icon: 'fa-solid fa-table-list', ai: true }
]
const rooms = [
  { x: 12, y: 12, w: 76, h: 96, label: 'Room 1' }, { x: 92, y: 12, w: 116, h: 46, label: 'Room 2' }, { x: 92, y: 62, w: 116, h: 46, label: 'Room 3' }
]
const symbols = [[40, 40], [60, 80], [130, 30], [180, 30], [130, 85], [180, 85]]
const statutory = ['CPF', 'SDL', 'SHG', 'EPF', 'ESI', 'PT', 'TDS']
const checkin = ['Face registered once, locked by HR', 'Scan face to verify identity', 'Select today’s office or site', 'Confirm with GPS — sent to HR for approval']
const p2p = ['Budget', 'Purchase request', 'PO', 'Delivery', 'Invoice matched', 'Paid']
const waiting = [
  { app: 'deeptrack', text: 'Budget for Block B fit-out' },
  { app: 'deephr', text: 'Annual leave request, 3 days' },
  { app: 'deepcost', text: 'ACMV estimate ready for review' }
]
const docs = [
  { app: 'deep-drive', name: 'Deep Drive', text: 'Project documents per organisation: folders, uploads and inline viewing — searchable by ARIVU.' },
  { app: 'pdf-editor', name: 'PDF Editor', text: 'Mark up, sign, split and merge PDFs with the same sign-in and roles as every other app.' }
]

// One shared clock drives the small loops.
const root = ref<HTMLElement | null>(null)
const tick = ref(4)
let t: ReturnType<typeof setInterval> | undefined
let io: IntersectionObserver | undefined
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  tick.value = 0
  io = new IntersectionObserver(([e]) => {
    clearInterval(t)
    if (e?.isIntersecting) t = setInterval(() => { tick.value++ }, 1300)
  }, { threshold: 0.1 })
  if (root.value) io.observe(root.value)
})
onBeforeUnmount(() => { clearInterval(t); io?.disconnect() })
</script>

<style scoped>
.card-app { display: flex; flex-direction: column; border-radius: 1.5rem; border: 1px solid rgb(var(--ink-100)); background: rgb(var(--page)); padding: 1.5rem; box-shadow: 0 1px 2px rgba(16, 24, 40, .05); }
@media (min-width: 640px) { .card-app { padding: 2rem; } }
.pt { display: flex; gap: .6rem; font-size: .875rem; color: rgb(var(--ink-700)); }
.pt i { margin-top: .3rem; font-size: .7rem; color: #0e9fb5; }
.dot { height: 6px; width: 6px; border-radius: 9999px; background: rgb(var(--ink-400)); animation: dot 1s ease-in-out infinite; }
@keyframes dot { 50% { transform: translateY(-3px); opacity: .5; } }
@media (prefers-reduced-motion: reduce) { .dot { animation: none; } }
</style>
