<template>
  <figure ref="root" class="overflow-hidden rounded-2xl border border-ink-100 bg-white text-ink-900 shadow-frame">
    <div class="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-2.5">
      <span class="chip-ai"><i class="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>FOT AI</span>
      <span class="hidden truncate text-[11px] text-ink-500 sm:inline">Client_BOQ.pdf · page 3</span>
      <span class="ml-auto rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-600">Illustration</span>
      <button v-if="animated" type="button" class="flex h-7 w-7 items-center justify-center rounded-md text-ink-500 hover:bg-ink-100 hover:text-ink-800" :aria-label="paused ? 'Play animation' : 'Pause animation'" @click="toggle">
        <i :class="paused ? 'fa-solid fa-play' : 'fa-solid fa-pause'" class="text-[11px]" aria-hidden="true"></i>
      </button>
    </div>

    <div class="bg-ink-50/60 p-3 sm:p-5">
      <!-- The client's BOQ page -->
      <div class="overflow-x-auto rounded-lg border border-ink-200 bg-white shadow-card">
        <table class="w-full min-w-[440px] text-left text-[11px]">
          <caption class="sr-only">Sample client BOQ page with detected quantity and amount columns and overlaid figures</caption>
          <thead>
            <tr class="border-b border-ink-200 text-[10px] uppercase tracking-wider text-ink-500">
              <th class="px-2 py-2 font-semibold">Item</th>
              <th class="px-2 py-2 font-semibold">Description</th>
              <th class="px-2 py-2 font-semibold">Unit</th>
              <th class="px-2 py-2 text-right font-semibold transition-colors duration-500" :class="detected ? 'bg-ai-50 text-ai-700' : ''">Qty</th>
              <th class="px-2 py-2 text-right font-semibold">Rate</th>
              <th class="px-2 py-2 text-right font-semibold transition-colors duration-500" :class="detected ? 'bg-ai-50 text-ai-700' : ''">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in rows" :key="r.item" class="border-b border-ink-100 align-top">
              <td class="px-2 py-1.5 text-ink-500">{{ r.item }}</td>
              <td class="px-2 py-1.5" :class="r.heading ? 'font-semibold text-ink-900' : 'text-ink-700'">{{ r.desc }}</td>
              <td class="px-2 py-1.5 text-ink-500">{{ r.unit }}</td>
              <td class="px-2 py-1.5 text-right tabular-nums text-ink-700 transition-colors duration-500" :class="detected && !r.heading ? 'bg-ai-50/70' : ''">{{ r.qty ?? '' }}</td>
              <td class="px-1.5 py-1 text-right tabular-nums">
                <span v-if="filled(r)" class="fade-in inline-block rounded border border-dashed border-cyan-500 bg-cyan-400/10 px-1.5 py-0.5 font-semibold text-brand-800">{{ money(r.rate!) }}</span>
              </td>
              <td class="px-1.5 py-1 text-right tabular-nums transition-colors duration-500" :class="detected && !r.heading ? 'bg-ai-50/70' : ''">
                <span v-if="filled(r)" class="fade-in inline-block rounded border border-dashed border-cyan-500 bg-white px-1.5 py-0.5 font-semibold text-brand-800">{{ money(r.qty! * r.rate!) }}</span>
                <span v-else-if="detected && !r.heading" class="inline-block h-4 w-14 rounded border border-dashed border-ai-400/60" aria-hidden="true"></span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="text-xs">
              <td colspan="5" class="px-2 py-2 text-right font-semibold text-ink-700">Page total (SGD)</td>
              <td class="px-2 py-2 text-right font-bold tabular-nums text-brand-800">{{ money(pageTotal) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="mt-4 flex flex-wrap items-center gap-2">
        <p class="mr-auto text-[11px] font-medium" :class="done ? 'text-brand-700' : 'text-ai-700'">
          <i :class="done ? 'fa-solid fa-circle-check' : 'fa-solid fa-wand-magic-sparkles'" class="mr-1" aria-hidden="true"></i>{{ status }}
        </p>
        <ul class="flex flex-wrap gap-2 transition-opacity duration-500" :class="done ? 'opacity-100' : 'opacity-30'" aria-label="Actions">
          <li class="inline-flex items-center gap-1.5 rounded-lg bg-brand-700 px-2.5 py-1.5 text-[11px] font-semibold text-white"><i class="fa-solid fa-floppy-disk" aria-hidden="true"></i>Save revision</li>
          <li class="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-ink-700"><i class="fa-solid fa-file-export text-brand-600" aria-hidden="true"></i>Export Excel / PDF</li>
        </ul>
      </div>
    </div>
    <figcaption class="border-t border-ink-100 px-4 py-2 text-[11px] text-ink-500">Illustration with sample rows and SGD figures — not a customer BOQ. Overlaid figures stay editable.</figcaption>
  </figure>
</template>

<script setup lang="ts">
// Animated illustration of FOT AI (FDD §6.2): on the client's BOQ PDF the
// quantity and amount columns are found, editable figures are overlaid on the
// rows that need pricing, and the page total updates. Sample values only.
interface Row { item: string; desc: string; unit?: string; qty?: number; rate?: number; heading?: boolean; n?: number }
const rows: Row[] = [
  { item: 'B', desc: 'Fire protection — sprinkler system', heading: true },
  { item: 'B.1', desc: 'Sprinkler head, pendent, quick response', unit: 'nr', qty: 120, rate: 28.5, n: 1 },
  { item: 'B.2', desc: 'Black steel pipe, 25 mm, incl. fittings', unit: 'm', qty: 340, rate: 18.2, n: 2 },
  { item: 'B.3', desc: 'Black steel pipe, 50 mm, incl. fittings', unit: 'm', qty: 85, rate: 32.4, n: 3 },
  { item: 'C', desc: 'Fire alarm', heading: true },
  { item: 'C.1', desc: 'Addressable fire alarm panel, 2-loop', unit: 'nr', qty: 1, rate: 6850, n: 4 },
  { item: 'C.2', desc: 'Addressable smoke detector with base', unit: 'nr', qty: 64, rate: 95, n: 5 }
]
const priced = rows.filter((r) => !r.heading).length
const FINAL = priced + 2 // 0 = page, 1 = columns found, 2..priced+1 = rows, last = actions
const HOLD = 5

const root = ref<HTMLElement | null>(null)
const step = ref(FINAL)
const animated = ref(false)
const paused = ref(false)
const s = computed(() => Math.min(step.value, FINAL))
const detected = computed(() => s.value >= 1)
const filled = (r: Row) => !r.heading && s.value >= (r.n ?? 0) + 1
const done = computed(() => s.value >= FINAL)
const pageTotal = computed(() => rows.filter(filled).reduce((n, r) => n + r.qty! * r.rate!, 0))
const status = computed(() => (s.value === 0 ? 'Reading the BOQ page…' : done.value ? 'Page priced — ready to save as a revision' : 'Quantity and amount columns found — overlaying figures'))
const money = (n: number) => n.toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

let timer: ReturnType<typeof setInterval> | undefined
let io: IntersectionObserver | undefined
const tick = () => { step.value = step.value >= FINAL + HOLD ? 0 : step.value + 1 }
const start = () => { if (!timer && !paused.value) timer = setInterval(tick, 1000) }
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

<style scoped>
.fade-in { animation: fade 0.45s ease-out; }
@keyframes fade { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: none; } }
</style>
