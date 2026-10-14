<template>
  <div class="studio relative h-[720px] w-[1280px] overflow-hidden bg-[#03191f] text-white">
    <FxAurora palette="ai" />
    <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>
    <img src="/ccorex-logo.png" alt="" class="absolute right-10 top-8 z-20 h-6 brightness-0 invert opacity-80" />

    <Transition name="scene" mode="out-in">
      <!-- Title -->
      <div v-if="scene?.type === 'title'" :key="idx" class="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span class="anim-in flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl shadow-lift" :class="scene.tone"><i :class="scene.icon"></i></span>
        <p class="anim-in mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 [animation-delay:.15s]">{{ scene.eyebrow }}</p>
        <h1 class="anim-in mt-3 max-w-3xl font-display text-6xl font-extrabold leading-tight text-white [animation-delay:.3s]">{{ scene.title }}</h1>
        <p class="anim-in mt-4 max-w-2xl text-xl text-ink-200 [animation-delay:.45s]">{{ scene.text }}</p>
      </div>

      <!-- Demo -->
      <div v-else-if="scene?.type === 'demo'" :key="idx" class="absolute inset-0 grid grid-cols-[400px_1fr] items-center gap-10 px-14">
        <div>
          <p class="anim-in text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">{{ scene.eyebrow }}</p>
          <h2 class="anim-in mt-3 font-display text-4xl font-bold leading-tight text-white [animation-delay:.12s]">{{ scene.title }}</h2>
          <ul class="mt-6 space-y-3">
            <li v-for="(b, k) in scene.bullets" :key="b" class="anim-in flex gap-3 text-base text-ink-200" :style="{ animationDelay: `${0.3 + k * 0.15}s` }">
              <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300"><i class="fa-solid fa-check text-[10px]"></i></span>{{ b }}
            </li>
          </ul>
          <p v-if="scene.note" class="anim-in mt-6 text-xs text-ink-400 [animation-delay:.8s]">{{ scene.note }}</p>
        </div>
        <div class="anim-pop relative flex max-h-[620px] items-center justify-center" :style="{ zoom: scene.zoom ?? 1 }">
          <div class="pointer-events-none absolute -inset-8 rounded-[3rem] bg-cyan-500/10 blur-3xl"></div>
          <div class="relative w-full">
            <component :is="components[scene.component]" v-bind="scene.props ?? {}" />
          </div>
        </div>
      </div>

      <!-- Outro -->
      <div v-else-if="scene?.type === 'outro'" :key="idx" class="absolute inset-0 flex flex-col items-center justify-center text-center">
        <img src="/ccorex-logo.png" alt="" class="anim-in h-12 brightness-0 invert" />
        <h2 class="anim-in mt-8 font-display text-5xl font-extrabold text-white [animation-delay:.15s]">{{ scene.title }}</h2>
        <p class="anim-in mt-4 text-xl text-ink-200 [animation-delay:.3s]">{{ scene.text }}</p>
        <span class="anim-in mt-10 rounded-full bg-cyan-500 px-8 py-4 text-lg font-semibold text-brand-950 shadow-[0_10px_40px_-10px_rgba(1,172,200,.9)] [animation-delay:.45s]">Book a live demo · ccorex.com</span>
      </div>
    </Transition>

    <!-- ARIVU narrator -->
    <Transition name="scene">
      <div v-if="scene?.say" :key="`say-${idx}`" class="absolute bottom-8 left-12 z-30 flex items-end gap-3">
        <UiArivuAvatar :size="64" :talking="typing" />
        <div class="mb-3 max-w-[330px] rounded-2xl rounded-bl-sm border border-white/15 bg-white/10 px-4 py-3 text-[14px] leading-snug text-white shadow-frame backdrop-blur-xl">
          <span class="mb-0.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">ARIVU</span>{{ said }}<span v-if="typing" class="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 animate-pulse bg-cyan-300"></span>
        </div>
      </div>
    </Transition>

    <!-- progress -->
    <div class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-ai-500 transition-[width] duration-300" :style="{ width: `${progress}%` }"></div>
  </div>
</template>

<script setup lang="ts">
// Recording studio for product motion videos. Dev server only — 404 in production.
import DemoDeepCostTenderSummary from '~/components/demo/DeepCostTenderSummary.vue'
import DemoDeepCostFotAi from '~/components/demo/DeepCostFotAi.vue'
import DemoDeepCostLifecycle from '~/components/demo/DeepCostLifecycle.vue'
import DemoDeepPlanTakeoff from '~/components/demo/DeepPlanTakeoff.vue'
import DemoDeepHrFaceCheckin from '~/components/demo/DeepHrFaceCheckin.vue'
import DemoArivuFlow from '~/components/demo/ArivuFlow.vue'
import DemoPlatformSso from '~/components/demo/PlatformSso.vue'
import UiArivuChat from '~/components/ui/ArivuChat.vue'
import UiFlowPipeline from '~/components/ui/FlowPipeline.vue'
import UiChart from '~/components/ui/Chart.vue'

if (!import.meta.dev) throw createError({ statusCode: 404, statusMessage: 'Not found' })
definePageMeta({ layout: false })
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

const components: Record<string, unknown> = {
  DemoDeepCostTenderSummary, DemoDeepCostFotAi, DemoDeepCostLifecycle, DemoDeepPlanTakeoff, DemoDeepHrFaceCheckin,
  DemoArivuFlow, DemoPlatformSso, UiArivuChat, UiFlowPipeline, UiChart
}

interface Scene { type: 'title' | 'demo' | 'outro'; ms: number; say?: string; eyebrow?: string; title: string; text?: string; icon?: string; tone?: string; bullets?: string[]; note?: string; component?: string; props?: Record<string, unknown>; zoom?: number }

const prPipeline = [
  { title: 'Purchase request', text: 'Against an approved budget', icon: 'fa-solid fa-cart-shopping' },
  { title: 'Approvals', text: 'PM → GM → MD', icon: 'fa-solid fa-user-check' },
  { title: 'Purchase order', text: 'Issued to the vendor', icon: 'fa-solid fa-file-signature' },
  { title: 'Delivery', text: 'Endorsed on site', icon: 'fa-solid fa-truck' },
  { title: 'Invoice matched', text: 'PO, delivery and invoice', icon: 'fa-solid fa-file-invoice-dollar' },
  { title: 'Paid', text: 'Payment approved', icon: 'fa-solid fa-circle-check' }
]
const payroll = [
  { title: 'Attendance', text: 'Face + GPS check-ins', icon: 'fa-solid fa-face-smile' },
  { title: 'Leave & claims', text: 'Through approvals', icon: 'fa-solid fa-umbrella-beach' },
  { title: 'Pay run', text: 'Employees and pay items', icon: 'fa-solid fa-money-check' },
  { title: 'Statutory', text: 'CPF, SDL, SHG / EPF, ESI', icon: 'fa-solid fa-landmark' },
  { title: 'Payslips', text: 'Filed and emailed', icon: 'fa-solid fa-envelope-open-text' }
]
const budget = [{ label: 'Mech', value: 120, value2: 96 }, { label: 'Elec', value: 90, value2: 84 }, { label: 'FP', value: 70, value2: 51 }, { label: 'ELV', value: 40, value2: 33 }, { label: 'Prelims', value: 30, value2: 28 }]

const outro = (text: string): Scene => ({ type: 'outro', ms: 3500, title: 'See it on your own projects', text })
const VIDEOS: Record<string, Scene[]> = {
  deepcost: [
    { type: 'title', ms: 2800, eyebrow: 'DeepCost', title: 'Tender to priced Form of Tender', text: 'AI that reads the tender and prices the BOQ — with your estimators in control.', icon: 'fa-solid fa-calculator', tone: 'text-sky-700' },
    { type: 'demo', ms: 9500, eyebrow: 'AI tender summary', title: 'AI reads the tender documents', say: 'I read the tender documents and fill in the key details for you to check.', bullets: ['Fills the key fields from uploaded documents', 'Edit the answers, refine the prompts', 'Export to Excel or PDF'], component: 'DemoDeepCostTenderSummary', note: 'Illustration with sample values', zoom: 1.15 },
    { type: 'demo', ms: 11000, eyebrow: 'FOT AI', title: 'Your prices on the client’s BOQ', say: 'Upload the client’s BOQ. I find the quantity and amount columns, and your prices go in row by row.', bullets: ['Finds the quantity and amount columns', 'Overlays editable figures row by row', 'Page totals, saved revision, export'], component: 'DemoDeepCostFotAi', note: 'Illustration with sample values', zoom: 1.15 },
    { type: 'demo', ms: 9000, eyebrow: 'Control', title: 'Every stage submitted and approved', say: 'Every area schedule, take-off and Form of Tender is submitted, checked and approved.', bullets: ['Checklist approvals', 'Revoke with a reason, kept as history', 'Emails to the next stage'], component: 'DemoDeepCostLifecycle', zoom: 1.1 },
    outro('Book a live demo with your own tender.')
  ],
  deepplan: [
    { type: 'title', ms: 2800, eyebrow: 'DeepPlan AI', title: 'From drawings to a priced BOQ', text: 'Measure rooms and count symbols — then build the BOQ from your rates.', icon: 'fa-solid fa-compass-drafting', tone: 'text-violet-700' },
    { type: 'demo', ms: 16000, eyebrow: 'Take-off', title: 'Rooms, symbols and quantities', say: 'I outline rooms and count symbols on the drawing — your estimator reviews every one before it reaches the BOQ.', bullets: ['Rooms outlined with area and perimeter', 'Symbols boxed and counted', 'BOQ built from your rate library'], component: 'DemoDeepPlanTakeoff', note: 'Illustration · AI room take-off and symbol detection are in early access', zoom: 1.05 },
    outro('Book a demo and ask about AI early access.')
  ],
  deephr: [
    { type: 'title', ms: 2800, eyebrow: 'DeepHR', title: 'HR and payroll on every phone', text: 'Face and GPS attendance through to Singapore or India payroll.', icon: 'fa-solid fa-user-group', tone: 'text-emerald-700' },
    { type: 'demo', ms: 13000, eyebrow: 'Attendance', title: 'Check in by face and GPS', say: 'Your crew checks in on their own phone: face match, inside the site radius, on time.', bullets: ['On the employee’s own phone — no kiosk', 'Must be inside the site radius', 'Marked on time or late, in site time'], component: 'DemoDeepHrFaceCheckin', note: 'Illustration', zoom: 1.1 },
    { type: 'demo', ms: 9000, eyebrow: 'Payroll', title: 'From attendance to payslips', say: 'Approved attendance, leave and claims flow straight into the pay run.', bullets: ['Approved time flows into the pay run', 'Singapore or India statutory rules', 'Payslips filed and emailed'], component: 'UiFlowPipeline', props: { steps: payroll, dark: true, interval: 1500 }, zoom: 0.7 },
    outro('Book a live demo for your HR team.')
  ],
  deeptrack: [
    { type: 'title', ms: 2800, eyebrow: 'DeepTrack', title: 'Protect margin on every project', text: 'Budgets, purchasing, claims and month-end — with approvals built in.', icon: 'fa-solid fa-diagram-project', tone: 'text-amber-700' },
    { type: 'demo', ms: 10000, eyebrow: 'Purchasing', title: 'Request to payment, approved at each step', say: 'Every purchase is checked against the budget and routed through your approvals.', bullets: ['Spend checked against the budget', 'Your approval thresholds and chain', 'Invoices matched before payment'], component: 'UiFlowPipeline', props: { steps: prPipeline, dark: true, interval: 1400 }, zoom: 0.58 },
    { type: 'demo', ms: 7500, eyebrow: 'Budget vs actual', title: 'See margin before it erodes', say: 'Ask me for budget against actual by trade — any time, as a chart.', bullets: ['Budget against committed and actual cost', 'By trade and project', 'Reports on demand'], component: 'UiChart', props: { type: 'bar', title: 'Budget vs actual by trade', subtitle: 'SGD thousands', data: budget, legend: ['Budget', 'Actual'], dark: true }, zoom: 1.5 },
    outro('Book a live demo with your own project.')
  ],
  arivu: [
    { type: 'title', ms: 3600, eyebrow: 'ARIVU AI', title: 'Ask your business anything', say: 'Hi, I’m ARIVU — your AI assistant in every CCorex app.', text: 'An AI assistant in every CCorex app — answering from your own data.', icon: 'fa-solid fa-wand-magic-sparkles', tone: 'text-violet-700' },
    { type: 'demo', ms: 15000, eyebrow: 'In every app', title: 'Answers, charts and exports', say: 'Ask me anything about your projects, people or tenders. I answer from your own data.', bullets: ['What needs my approval?', 'Purchase requests by project, as a chart', 'Export to Excel or PDF'], component: 'UiArivuChat', note: 'Illustrative conversation · read-only', zoom: 0.78 },
    { type: 'demo', ms: 8000, eyebrow: 'How it works', title: 'Reads your apps. Never changes them.', say: 'I only read your organisation’s data — I never change your records.', bullets: ['DeepCost, DeepTrack, DeepHR, DeepPlan', 'Only your organisation’s data', 'Messages encrypted'], component: 'DemoArivuFlow', zoom: 0.9 },
    outro('Try ARIVU in a live demo.')
  ],
  overview: [
    { type: 'title', ms: 2800, eyebrow: 'CCorex', title: 'One AI-powered platform for construction', text: 'Estimating, projects and payroll on one sign-in.', icon: 'fa-solid fa-layer-group', tone: 'text-brand-700' },
    { type: 'demo', ms: 7500, eyebrow: 'One sign-in', title: 'Every app, already signed in', say: 'Sign in once and every CCorex app opens, already signed in.', bullets: ['One portal for every app', 'Users and roles managed once', 'Changes synced to each app'], component: 'DemoPlatformSso', zoom: 0.95 },
    { type: 'demo', ms: 8000, eyebrow: 'DeepCost · FOT AI', title: 'Price the client’s BOQ', say: 'In DeepCost, your prices go straight onto the client’s BOQ — you review every figure.', bullets: ['Columns detected', 'Your figures overlaid', 'Export and submit'], component: 'DemoDeepCostFotAi', note: 'Illustration', zoom: 1.15 },
    { type: 'demo', ms: 7500, eyebrow: 'DeepHR', title: 'Check in by face and GPS', say: 'Your crew checks in on their own phone: face match, inside the site radius, on time.', bullets: ['Own phone, no kiosk', 'Inside the site radius', 'Into payroll'], component: 'DemoDeepHrFaceCheckin', note: 'Illustration', zoom: 1.1 },
    { type: 'demo', ms: 9000, eyebrow: 'ARIVU AI', title: 'Ask your business anything', say: 'And I’m in every app — just ask.', bullets: ['Across all your apps', 'Charts and exports', 'Read-only'], component: 'UiArivuChat', note: 'Illustrative conversation', zoom: 0.78 },
    outro('Book a live demo and see your own workflow.')
  ]
}

const said = ref('')
const typing = ref(false)
let typeTimer: ReturnType<typeof setInterval> | undefined
function speak(text?: string) {
  clearInterval(typeTimer); said.value = ''; if (!text) { typing.value = false; return }
  typing.value = true; let i = 0
  setTimeout(() => {
    typeTimer = setInterval(() => { i += 1; said.value = text.slice(0, i); if (i >= text.length) { clearInterval(typeTimer); typing.value = false } }, 28)
  }, 500)
}
const route = useRoute()
const scenes = VIDEOS[String(route.query.v ?? 'overview')] ?? VIDEOS.overview!
const idx = ref(-1)
const scene = computed(() => scenes[idx.value])
const total = scenes.reduce((n, s) => n + s.ms, 0)
const elapsed = ref(0)
const progress = computed(() => Math.min(100, (elapsed.value / total) * 100))

onMounted(() => {
  document.documentElement.classList.remove('dark') // product UI shown in light theme
  const w = window as unknown as { __studio: { total: number; done: boolean; start: () => void } }
  w.__studio = {
    total, done: false,
    start() {
      let t = 0
      scenes.forEach((s, i) => { setTimeout(() => { idx.value = i; speak(s.say) }, t); t += s.ms })
      setTimeout(() => { w.__studio.done = true }, t)
      const t0 = performance.now()
      const tick = () => { elapsed.value = performance.now() - t0; if (!w.__studio.done) requestAnimationFrame(tick) }
      requestAnimationFrame(tick)
    }
  }
  if (route.query.autoplay === '1') w.__studio.start()
})
</script>

<style scoped>
.studio :deep([aria-label$="animation"]), .studio :deep(button:has(.fa-pause)), .studio :deep(button:has(.fa-play)) { display: none !important; }
.anim-in { animation: s-in .7s cubic-bezier(.2,.8,.2,1) both; }
@keyframes s-in { from { opacity: 0; transform: translateY(18px); filter: blur(6px); } to { opacity: 1; transform: none; filter: none; } }
.anim-pop { animation: s-pop .8s cubic-bezier(.2,.8,.2,1) .15s both; }
@keyframes s-pop { from { opacity: 0; transform: translateY(24px) scale(.96); } to { opacity: 1; transform: none; } }
.scene-enter-active, .scene-leave-active { transition: opacity .45s ease, transform .45s ease; }
.scene-enter-from { opacity: 0; transform: scale(1.02); }
.scene-leave-to { opacity: 0; transform: scale(.98); }
</style>

<style>
#nuxt-devtools-container, [id^="nuxt-devtools"], nuxt-devtools-frame { display: none !important; }
</style>
