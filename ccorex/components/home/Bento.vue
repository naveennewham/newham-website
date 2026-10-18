<template>
  <section ref="root" class="section bg-ink-50" :class="{ 'is-live': live }">
    <div class="container-site">
      <UiSectionHeader center eyebrow="On site and in the office" title="One platform, wherever the work happens" lead="Four places your people work, one CCorex record behind them. What happens at the estimating desk or the site gate is what the project office and the directors see." />

      <div class="workmap relative mt-14 grid gap-5 lg:grid-cols-[1fr_280px_1fr] lg:grid-rows-2 lg:gap-x-0 lg:gap-y-6">
        <!-- Connectors: data flows from each place into the hub (desktop only) -->
        <svg class="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <g v-for="(d, i) in links" :key="i">
            <path :d="d" class="link-base" vector-effect="non-scaling-stroke" />
            <path :d="d" class="link-packet" pathLength="100" vector-effect="non-scaling-stroke" :style="{ animationDelay: `${i * 0.6}s` }" />
          </g>
        </svg>

        <!-- Hub -->
        <div class="relative z-10 flex items-center justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div class="hub relative flex h-60 w-60 flex-col items-center justify-center rounded-full bg-white text-center shadow-lift ring-1 ring-ink-100">
            <span class="hub-ring absolute -inset-3 rounded-full border-2 border-dashed border-brand-200" aria-hidden="true"></span>
            <span class="hub-glow absolute inset-0 rounded-full" aria-hidden="true"></span>
            <img src="/ccorex-logo.png" alt="CCorex" width="112" height="28" class="logo-auto relative h-7 w-auto brightness-0" />
            <ul class="relative mt-3 space-y-1 text-xs font-medium text-ink-600">
              <li>One sign-in</li>
              <li>One record per job</li>
              <li>Roles &amp; approvals</li>
              <li class="text-ai-600">ARIVU AI in every app</li>
            </ul>
            <span class="relative mt-3 flex gap-1" aria-label="Apps: DeepCost, DeepPlan AI, DeepTrack, DeepHR, ARIVU AI">
              <UiAppIcon v-for="a in hubApps" :key="a" :app="a" size="xs" />
            </span>
          </div>
        </div>

        <!-- Places -->
        <article v-for="p in places" :key="p.key" class="place relative z-10 flex flex-col rounded-3xl border border-ink-100 bg-white p-6 shadow-card" :class="p.grid">
          <div class="flex items-start gap-3">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" :class="p.tone"><i :class="p.icon" aria-hidden="true"></i></span>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">{{ p.where }}</p>
              <h3 class="text-lg font-semibold text-ink-900">{{ p.title }}</h3>
            </div>
          </div>

          <!-- Estimating desk: tender → AI summary → take-off → priced FOT -->
          <div v-if="p.key === 'desk'" class="viz mt-5" aria-hidden="true">
            <ol class="grid grid-cols-4 gap-1.5">
              <li v-for="(s, i) in deskSteps" :key="s.label" class="desk-step flex flex-col items-center gap-1.5 rounded-xl border border-ink-100 bg-ink-50 px-1 py-2.5 text-center" :style="{ animationDelay: `${i * 1.2}s` }">
                <i :class="s.icon" class="text-sm text-sky-600"></i>
                <span class="text-[11px] font-medium leading-tight text-ink-700">{{ s.label }}</span>
              </li>
            </ol>
            <div class="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-100"><div class="desk-bar h-full rounded-full bg-sky-500"></div></div>
          </div>

          <!-- Site: face + GPS check-in -->
          <div v-else-if="p.key === 'site'" class="viz mt-5 flex items-center gap-5" aria-hidden="true">
            <div class="relative flex h-24 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-ink-200 bg-ink-50">
              <span class="face-scan absolute inset-x-2 top-3 h-0.5 rounded bg-emerald-500"></span>
              <i class="fa-regular fa-face-smile text-xl text-emerald-600"></i>
            </div>
            <div class="relative flex h-20 w-20 shrink-0 items-center justify-center">
              <span class="gps-pulse absolute inset-0 rounded-full border-2 border-emerald-400"></span>
              <span class="gps-pulse absolute inset-0 rounded-full border-2 border-emerald-400" style="animation-delay: 1s"></span>
              <i class="fa-solid fa-location-dot text-2xl text-emerald-600"></i>
            </div>
            <p class="checked-in flex items-center gap-1.5 text-sm font-semibold text-emerald-700"><i class="fa-solid fa-circle-check"></i>Checked in, inside the site radius</p>
          </div>

          <!-- Project office: budget vs committed vs spent -->
          <div v-else-if="p.key === 'office'" class="viz mt-5 space-y-2.5" aria-hidden="true">
            <div v-for="b in bars" :key="b.label" class="grid grid-cols-[76px_1fr] items-center gap-3">
              <span class="text-xs font-medium text-ink-600">{{ b.label }}</span>
              <div class="h-2.5 overflow-hidden rounded-full bg-ink-100"><div class="bar h-full rounded-full" :class="b.tone" :style="{ '--w': b.w }"></div></div>
            </div>
            <p class="po-chip ml-[88px] inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700"><i class="fa-solid fa-file-invoice"></i>Purchase request checked against budget</p>
          </div>

          <!-- Boardroom: approval chain + ARIVU -->
          <div v-else class="viz mt-5" aria-hidden="true">
            <ol class="flex items-center gap-2">
              <template v-for="(a, i) in approvers" :key="a">
                <li class="approve flex items-center gap-1.5 rounded-full border border-ink-100 bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-700" :style="{ animationDelay: `${0.4 + i * 0.9}s` }">
                  <i class="fa-solid fa-check approve-tick text-[10px] text-emerald-600" :style="{ animationDelay: `${0.4 + i * 0.9}s` }"></i>{{ a }}
                </li>
                <li v-if="i < approvers.length - 1" class="h-px w-4 bg-ink-200"></li>
              </template>
            </ol>
            <div class="arivu mt-3 flex items-start gap-2 rounded-2xl bg-ai-50 p-3">
              <i class="fa-solid fa-wand-magic-sparkles mt-0.5 text-xs text-ai-600"></i>
              <p class="text-xs text-ink-700"><span class="font-semibold text-ai-700">Ask ARIVU:</span> “Which purchase requests are waiting for me?”</p>
            </div>
          </div>

          <p class="mt-5 text-sm leading-relaxed text-ink-600">{{ p.text }}</p>
          <div class="mt-auto flex flex-wrap gap-1.5 pt-4">
            <NuxtLink v-for="a in p.apps" :key="a.to" :to="a.to" class="flex items-center gap-1.5 rounded-full border border-ink-100 py-1 pl-1 pr-3 text-xs font-semibold text-ink-800 transition-colors hover:border-brand-600 hover:text-brand-700"><UiAppIcon :app="a.to.split('/').pop()!" size="xs" />{{ a.name }}</NuxtLink>
          </div>
        </article>
      </div>

      <p class="mt-8 text-center">
        <NuxtLink to="/platform" class="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900">How the platform works <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
// Illustrative infographic: each place shows a small loop of the work that happens there.
// Animations run only while the section is on screen and are skipped for reduced motion.
const places = [
  {
    key: 'desk', where: 'Estimating desk', title: 'AI reads the tender. You price it.', grid: 'lg:col-start-1 lg:row-start-1 lg:mr-10',
    icon: 'fa-solid fa-calculator', tone: 'bg-sky-50 text-sky-700',
    text: 'Tender documents are summarised by AI, drawings are measured, and the take-off is priced from your library into the Form of Tender.',
    apps: [{ name: 'DeepCost', to: '/products/deepcost' }, { name: 'DeepPlan AI', to: '/products/deepplan-ai' }]
  },
  {
    key: 'site', where: 'On site', title: 'Check in by face and GPS', grid: 'lg:col-start-1 lg:row-start-2 lg:mr-10',
    icon: 'fa-solid fa-helmet-safety', tone: 'bg-emerald-50 text-emerald-700',
    text: 'Workers check in on their own phone at the site. Approved attendance and leave flow into Singapore payroll — CPF, SDL and SHG.',
    apps: [{ name: 'DeepHR', to: '/products/deephr' }]
  },
  {
    key: 'office', where: 'Project office', title: 'Budgets, purchases and claims', grid: 'lg:col-start-3 lg:row-start-1 lg:ml-10',
    icon: 'fa-solid fa-diagram-project', tone: 'bg-amber-50 text-amber-700',
    text: 'The won tender becomes the project budget. Purchase requests are checked against it, and claims are tracked to payment.',
    apps: [{ name: 'DeepTrack', to: '/products/deeptrack' }]
  },
  {
    key: 'board', where: 'Directors', title: 'Approve with the evidence in front of you', grid: 'lg:col-start-3 lg:row-start-2 lg:ml-10',
    icon: 'fa-solid fa-user-tie', tone: 'bg-ai-50 text-ai-600',
    text: 'Purchases go from project manager to general manager to managing director. ARIVU answers questions from your own data — it reads, never changes it.',
    apps: [{ name: 'ARIVU AI', to: '/products/arivu-ai' }, { name: 'DeepTrack', to: '/products/deeptrack' }]
  }
]

const hubApps = ['deepcost', 'deepplan-ai', 'deeptrack', 'deephr', 'arivu-ai']

const deskSteps = [
  { label: 'Tender docs', icon: 'fa-solid fa-file-pdf' },
  { label: 'AI summary', icon: 'fa-solid fa-wand-magic-sparkles' },
  { label: 'Take-off', icon: 'fa-solid fa-ruler-combined' },
  { label: 'Priced FOT', icon: 'fa-solid fa-table-list' }
]
const bars = [
  { label: 'Budget', w: '100%', tone: 'bg-ink-300' },
  { label: 'Committed', w: '64%', tone: 'bg-amber-500' },
  { label: 'Spent', w: '41%', tone: 'bg-amber-700' }
]
const approvers = ['PM', 'GM', 'MD']

// From each place (left/right columns) to the hub centre, in a 0–100 box.
const links = [
  'M 30 25 C 42 25, 44 50, 50 50',
  'M 30 75 C 42 75, 44 50, 50 50',
  'M 70 25 C 58 25, 56 50, 50 50',
  'M 70 75 C 58 75, 56 50, 50 50'
]

const root = ref<HTMLElement | null>(null)
const live = ref(false)
let io: IntersectionObserver | undefined
onMounted(() => {
  if (!root.value || !('IntersectionObserver' in window)) { live.value = true; return }
  io = new IntersectionObserver(([e]) => { live.value = !!e?.isIntersecting }, { threshold: 0.2 })
  io.observe(root.value)
})
onBeforeUnmount(() => io?.disconnect())
</script>

<style scoped>
/* Everything is paused until the section is on screen. */
.workmap :is(.link-packet, .hub-ring, .hub-glow, .desk-step, .desk-bar, .face-scan, .gps-pulse, .checked-in, .bar, .po-chip, .approve, .approve-tick, .arivu) {
  animation-play-state: paused;
}
.is-live .workmap :is(.link-packet, .hub-ring, .hub-glow, .desk-step, .desk-bar, .face-scan, .gps-pulse, .checked-in, .bar, .po-chip, .approve, .approve-tick, .arivu) {
  animation-play-state: running;
}

/* Connectors */
.link-base { fill: none; stroke: rgb(var(--ink-200)); stroke-width: 2; stroke-dasharray: 4 6; }
.link-packet { fill: none; stroke: #0e9fb5; stroke-width: 3; stroke-linecap: round; stroke-dasharray: 8 92; stroke-dashoffset: 100; animation: flow 2.4s linear infinite; }
@keyframes flow { to { stroke-dashoffset: 0; } }

/* Hub */
.hub-ring { animation: spin 30s linear infinite; }
.hub-glow { box-shadow: 0 0 0 0 rgb(14 159 181 / .35); animation: glow 2.4s ease-out infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes glow { 0% { box-shadow: 0 0 0 0 rgb(14 159 181 / .35); } 100% { box-shadow: 0 0 0 22px rgb(14 159 181 / 0); } }

/* Estimating desk: steps light up in turn, the bar fills */
.desk-step { animation: step 4.8s ease-in-out infinite; }
@keyframes step {
  0%, 30% { border-color: rgb(14 165 233); background: rgb(14 165 233 / .12); transform: translateY(-2px); }
  31%, 100% { transform: none; }
}
.desk-bar { width: 0; animation: fill 4.8s ease-in-out infinite; }
@keyframes fill { 0% { width: 0; } 85%, 100% { width: 100%; } }

/* Site: face scan line, GPS pulses, then the check-in confirmation */
.face-scan { animation: scan 2.4s ease-in-out infinite; }
@keyframes scan { 0%, 100% { transform: translateY(0); opacity: .9; } 50% { transform: translateY(60px); opacity: .6; } }
.gps-pulse { opacity: 0; animation: pulse 2s ease-out infinite; }
@keyframes pulse { 0% { transform: scale(.4); opacity: .8; } 100% { transform: scale(1.1); opacity: 0; } }
.checked-in { opacity: 0; animation: appear 4.8s ease-out infinite; }
@keyframes appear { 0%, 45% { opacity: 0; transform: translateY(4px); } 55%, 92% { opacity: 1; transform: none; } 100% { opacity: 0; } }

/* Project office: bars grow to their values, then the PR chip appears */
.bar { width: 0; animation: grow 4.8s ease-out infinite; }
@keyframes grow { 0% { width: 0; } 40%, 100% { width: var(--w); } }
.po-chip { opacity: 0; animation: appear 4.8s ease-out infinite; }

/* Directors: approvals tick off in order, ARIVU answers */
.approve { animation: approve 4.8s ease-out infinite; }
@keyframes approve { 0% { border-color: rgb(var(--ink-100)); } 20%, 90% { border-color: rgb(16 185 129); } 100% { border-color: rgb(var(--ink-100)); } }
.approve-tick { opacity: 0; animation: tick 4.8s ease-out infinite; }
@keyframes tick { 0% { opacity: 0; transform: scale(.4); } 15%, 90% { opacity: 1; transform: none; } 100% { opacity: 0; } }
.arivu { animation: appear 4.8s ease-out infinite; animation-delay: 1.5s; opacity: 0; }

/* Reduced motion: show the finished state, no movement. */
@media (prefers-reduced-motion: reduce) {
  .workmap * { animation: none !important; }
  .desk-bar { width: 100%; }
  .bar { width: var(--w); }
  .checked-in, .po-chip, .approve-tick, .arivu, .link-packet { opacity: 1; }
  .link-packet { stroke-dasharray: none; opacity: .5; }
}
</style>
