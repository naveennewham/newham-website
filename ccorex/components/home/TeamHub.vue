<template>
  <section class="relative overflow-hidden bg-ink-50 py-20 sm:py-24" @mouseenter="pause = true" @focusin="pause = true">
    <div class="container-site relative">
      <UiSectionHeader center eyebrow="Every team, one platform" title="Built for every desk in a construction business" lead="Estimators, project managers, finance, HR and site staff each get the app they need — on one sign-in, with ARIVU AI alongside." />

      <!-- Tabs -->
      <div class="relative mx-auto mt-10 w-fit max-w-full">
        <div ref="bar" role="tablist" aria-label="Teams" class="relative flex gap-1 overflow-x-auto rounded-2xl border border-ink-100 bg-ink-50 p-1.5 [scrollbar-width:none]">
          <span class="absolute bottom-1.5 top-1.5 rounded-xl bg-white shadow-card transition-all duration-500 ease-out motion-reduce:transition-none" :style="indicator" aria-hidden="true"></span>
          <button
            v-for="(t, i) in teams"
            :id="`hub-tab-${i}`"
            :key="t.id"
            :ref="(el) => (tabs[i] = el as HTMLElement)"
            type="button"
            role="tab"
            :aria-selected="active === i"
            aria-controls="hub-panel"
            class="relative z-10 flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors"
            :class="active === i ? 'text-ink-900' : 'text-ink-500 hover:text-ink-800'"
            @click="select(i)"
          >
            <i :class="[t.icon, active === i ? t.tone : '']" aria-hidden="true"></i>{{ t.label }}
          </button>
        </div>
        <div class="mx-auto mt-3 h-0.5 max-w-xs overflow-hidden rounded-full bg-ink-100" aria-hidden="true">
          <div :key="`${active}-${pause}`" class="h-full bg-brand-600" :class="pause ? 'w-0' : 'hub-progress'"></div>
        </div>
      </div>

      <!-- Panel -->
      <div id="hub-panel" role="tabpanel" :aria-labelledby="`hub-tab-${active}`" class="mt-12">
        <Transition name="hub" mode="out-in">
          <div :key="team.id">
            <div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
              <p class="eyebrow">{{ team.eyebrow }}</p>
              <h3 class="mt-3 text-2xl font-bold sm:text-3xl">{{ team.title }}</h3>
              <p class="lead mt-4">{{ team.text }}</p>
              </div>
              <div class="lg:pt-8">
              <ul class="space-y-3">
                <li v-for="p in team.points" :key="p" class="flex gap-3 text-ink-700">
                  <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700"><i class="fa-solid fa-check text-[10px]" aria-hidden="true"></i></span>{{ p }}
                </li>
              </ul>
              <div class="mt-7 flex flex-wrap items-center gap-2">
                <NuxtLink v-for="a in team.apps" :key="a.to" :to="a.to" class="chip hover:border-brand-300 hover:text-brand-800">
                  <i :class="a.icon" class="text-brand-600" aria-hidden="true"></i>{{ a.name }}
                  <span v-if="a.badge" class="rounded-full bg-amber-50 px-1.5 text-[10px] font-semibold text-amber-800">{{ a.badge }}</span>
                </NuxtLink>
              </div>
              </div>
            </div>

            <div class="relative mx-auto mt-10 max-w-5xl">
              <div class="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br opacity-70 blur-2xl" :class="team.glow" aria-hidden="true"></div>
              <UiBrowserFrame v-if="team.src" :src="team.src" :alt="team.alt!" :url="team.url" />
              <div v-else class="grid grid-cols-2 gap-4 rounded-3xl border border-ink-100 bg-white p-6 shadow-lift sm:grid-cols-4" aria-hidden="true">
                <div v-for="f in docFeatures" :key="f.label" class="flex flex-col items-center gap-2 rounded-2xl bg-ink-50 p-4 text-center">
                  <i :class="f.icon" class="text-xl text-brand-600"></i><span class="text-xs font-medium text-ink-700">{{ f.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Team {
  id: string; label: string; icon: string; tone: string; glow: string
  eyebrow: string; title: string; text: string; points: string[]
  apps: { name: string; to: string; icon: string; badge?: string }[]
  src?: string; alt?: string; url?: string
}
const teams: Team[] = [
  {
    id: 'estimating', label: 'Estimating & tenders', icon: 'fa-solid fa-calculator', tone: 'text-sky-600', glow: 'from-sky-200 to-cyan-100',
    eyebrow: 'DeepCost', title: 'Price every tender from one linked record',
    text: 'From the tender received to the priced Form of Tender: AI reads the tender documents, estimators take off by area, and every stage is submitted, approved and completed.',
    points: ['AI tender summary from the uploaded documents', 'Area schedule and material take-off by building, floor and room', 'FOT AI overlays your prices on the client’s BOQ PDF', 'Price library with validation rules per trade'],
    apps: [{ name: 'DeepCost', to: '/products/deepcost', icon: 'fa-solid fa-calculator' }, { name: 'DeepPlan AI', to: '/products/deepplan-ai', icon: 'fa-solid fa-compass-drafting' }],
    src: '/images/product/deepcost-mto.webp', url: 'deepcost.ccorex.com / mto', alt: 'DeepCost material take-off by building, floor and room with item groups and prices'
  },
  {
    id: 'drawings', label: 'Drawings & take-off', icon: 'fa-solid fa-compass-drafting', tone: 'text-violet-600', glow: 'from-violet-200 to-ai-100',
    eyebrow: 'DeepPlan AI', title: 'From drawings to quantities',
    text: 'Upload drawing sets, calibrate the scale, measure rooms and count symbols — then build a priced BOQ from your own rate library.',
    points: ['PDF drawings split into pages with a page rail', 'Scale calibration, rooms and measurements editor', 'AI symbol detection and room take-off — early access', 'BOQ generated from rooms, counts and your rates'],
    apps: [{ name: 'DeepPlan AI', to: '/products/deepplan-ai', icon: 'fa-solid fa-compass-drafting', badge: 'AI early access' }],
    src: '/images/product/deepplan-detections.webp', url: 'deepplan.ccorex.com / drawing', alt: 'DeepPlan drawing editor with AI-detected luminaire symbols labelled on an electrical lighting plan'
  },
  {
    id: 'projects', label: 'Projects & finance', icon: 'fa-solid fa-diagram-project', tone: 'text-amber-600', glow: 'from-amber-200 to-orange-100',
    eyebrow: 'DeepTrack', title: 'Protect margin on every project',
    text: 'Budgets, purchasing, client claims and manpower in one place — with every purchase routed through your approvals and every invoice matched before it is paid.',
    points: ['Approved budgets gate purchase requests', 'PR → PO → delivery → invoice matching → payment', 'Client claims, timesheets and month-end cost allocation', 'Zoho Books link for vendors and purchase orders'],
    apps: [{ name: 'DeepTrack', to: '/products/deeptrack', icon: 'fa-solid fa-diagram-project' }],
    src: '/images/product/deeptrack-procurement.webp', url: 'deeptrack.ccorex.com / procurement', alt: 'DeepTrack purchase requests with budget, status and approvals by project manager, general manager and director'
  },
  {
    id: 'people', label: 'People & payroll', icon: 'fa-solid fa-user-group', tone: 'text-emerald-600', glow: 'from-emerald-200 to-teal-100',
    eyebrow: 'DeepHR', title: 'Hire to retire, on every phone',
    text: 'Face and GPS check-in on the employee’s own phone, leave and claims through your approval chain, and payroll with Singapore or India statutory rules.',
    points: ['Face + GPS attendance — no kiosk or hardware', 'Configurable multi-level approvals', 'Singapore (CPF, SDL, SHG) and India payroll', 'Payslips, reports and policies in one app'],
    apps: [{ name: 'DeepHR', to: '/products/deephr', icon: 'fa-solid fa-user-group' }],
    src: '/images/product/deephr-admin-dashboard.webp', url: 'deephr.ccorex.com / dashboard', alt: 'DeepHR admin dashboard with employees, pending leave, attendance today and weekly attendance trend'
  },
  {
    id: 'ai', label: 'AI assistant', icon: 'fa-solid fa-wand-magic-sparkles', tone: 'text-ai-600', glow: 'from-ai-100 to-cyan-100',
    eyebrow: 'ARIVU AI', title: 'Ask your business anything',
    text: 'ARIVU opens inside every app and answers from your own organisation’s data — as text, charts or PDF and Excel exports. It reads; it never changes your records.',
    points: ['Questions across DeepCost, DeepTrack, DeepHR and DeepPlan', 'Charts and PDF / Excel exports', 'Search and summarise tender documents', 'Organisation skills with reference documents'],
    apps: [{ name: 'ARIVU AI', to: '/products/arivu-ai', icon: 'fa-solid fa-wand-magic-sparkles' }],
    src: '/images/product/arivu-deepcost.webp', url: 'deepcost.ccorex.com', alt: 'ARIVU assistant panel open inside DeepCost with suggested questions and a Skills selector'
  },
  {
    id: 'documents', label: 'Documents', icon: 'fa-solid fa-folder-open', tone: 'text-indigo-600', glow: 'from-indigo-100 to-sky-100',
    eyebrow: 'Deep Drive · PDF Editor', title: 'Files, mark-ups and signatures',
    text: 'Store project documents per organisation, then mark up, sign, split and merge PDFs — with the same sign-in and roles as every other app.',
    points: ['Folders, uploads and inline viewing', 'Text, signatures, images and overlays on PDFs', 'Split, merge and export annotated PDFs', 'Searchable by ARIVU'],
    apps: [{ name: 'Deep Drive', to: '/products/deep-drive', icon: 'fa-solid fa-folder-open' }, { name: 'PDF Editor', to: '/products/pdf-editor', icon: 'fa-solid fa-file-pen' }]
  }
]
const docFeatures = [
  { icon: 'fa-solid fa-folder-tree', label: 'Folders' }, { icon: 'fa-solid fa-cloud-arrow-up', label: 'Uploads' },
  { icon: 'fa-solid fa-eye', label: 'Inline view' }, { icon: 'fa-solid fa-magnifying-glass', label: 'ARIVU search' },
  { icon: 'fa-solid fa-signature', label: 'Signatures' }, { icon: 'fa-solid fa-font', label: 'Text mark-up' },
  { icon: 'fa-solid fa-object-ungroup', label: 'Split & merge' }, { icon: 'fa-solid fa-file-export', label: 'Export PDF' }
]

const active = ref(0)
const pause = ref(false)
const team = computed(() => teams[active.value]!)
const tabs = ref<HTMLElement[]>([])
const bar = ref<HTMLElement | null>(null)
const indicator = ref<Record<string, string>>({ left: '6px', width: '0px' })
function place() {
  const el = tabs.value[active.value]
  if (el) indicator.value = { left: `${el.offsetLeft}px`, width: `${el.offsetWidth}px` }
}
function select(i: number) {
  pause.value = true
  active.value = i
}
watch(active, () => nextTick(() => {
  place()
  const el = tabs.value[active.value]
  if (el && bar.value) bar.value.scrollTo({ left: el.offsetLeft - 24, behavior: 'smooth' })
}))
let t: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  place()
  window.addEventListener('resize', place)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { pause.value = true; return }
  t = setInterval(() => { if (!pause.value) active.value = (active.value + 1) % teams.length }, 7000)
})
onBeforeUnmount(() => { clearInterval(t); window.removeEventListener('resize', place) })
</script>

<style scoped>
.hub-enter-active, .hub-leave-active { transition: opacity .35s ease, transform .35s ease; }
.hub-enter-from { opacity: 0; transform: translateY(14px) scale(.99); }
.hub-leave-to { opacity: 0; transform: translateY(-8px); }
.hub-progress { animation: hub-progress 7s linear forwards; }
@keyframes hub-progress { from { width: 0; } to { width: 100%; } }
@media (prefers-reduced-motion: reduce) { .hub-enter-active, .hub-leave-active { transition: none; } }
</style>
