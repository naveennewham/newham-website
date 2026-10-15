<template>
  <div ref="root">
    <!-- Stage: ARIVU and the story on the left, the scene on the right -->
    <figure class="relative mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#04161b] shadow-frame lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)]">
      <!-- story progress -->
      <div class="absolute inset-x-5 top-4 z-30 flex gap-1.5" aria-hidden="true">
        <span v-for="(sc, i) in scenes" :key="sc.key" class="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
          <span class="block h-full rounded-full bg-gradient-to-r from-cyan-400 to-ai-400" :style="{ width: `${i < scene ? 100 : i === scene ? progress * 100 : 0}%` }"></span>
        </span>
      </div>

      <!-- Narrator panel -->
      <div class="relative order-2 flex flex-col gap-5 border-t border-white/10 p-6 pt-6 sm:p-8 lg:order-1 lg:border-r lg:border-t-0 lg:pt-12">
        <div class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden="true"></div>
        <div class="relative flex items-center gap-4">
          <span class="relative shrink-0">
            <span class="talk absolute inset-1 rounded-full" :class="typing ? 'talking' : ''" aria-hidden="true"></span>
            <UiArivuAvatar :size="56" :float="false" :talking="typing" class="relative" />
          </span>
          <div>
            <p class="font-display text-xl font-bold text-white">ARIVU</p>
            <p class="flex items-center gap-1.5 text-xs text-cyan-300"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400" :class="typing ? 'animate-pulse' : ''"></span>{{ typing ? 'Explaining…' : 'AI assistant in CCorex' }}</p>
          </div>
        </div>
        <div class="relative rounded-2xl rounded-tl-sm border border-white/10 bg-white/[.06] p-4" aria-live="polite">
          <p class="text-[11px] font-semibold uppercase tracking-wider text-cyan-300">{{ scene + 1 }} / {{ scenes.length }} · {{ scenes[scene]!.title }}</p>
          <p class="mt-2 min-h-[5.5em] text-base leading-relaxed text-white">{{ shown }}<span v-if="typing" class="caret">▍</span></p>
        </div>
        <ol class="relative mt-auto space-y-1.5" aria-label="Scenes">
          <li v-for="(sc, i) in scenes" :key="sc.key">
            <button type="button" class="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors" :class="scene === i ? 'bg-white/10 text-white' : 'text-ink-300 hover:bg-white/5 hover:text-white'" :aria-pressed="scene === i" @click="goTo(i)">
              <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs text-white" :class="scene === i ? 'bg-ai-gradient' : 'bg-white/10'"><i :class="sc.icon" aria-hidden="true"></i></span>
              <span class="font-medium">{{ sc.title }}</span>
              <span v-if="sc.soon" class="ml-auto rounded-full border border-white/20 px-1.5 text-[9px] text-ink-200">Early access</span>
            </button>
          </li>
        </ol>
      </div>

      <!-- Scene panel -->
      <div class="relative order-1 flex min-h-[340px] items-center justify-center overflow-hidden p-6 pt-12 sm:min-h-[420px] sm:p-10 sm:pt-14 lg:order-2" aria-hidden="true">
        <div class="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,.12)_1px,transparent_1.3px)] [background-size:24px_24px]"></div>
        <div class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-ai-500/25 blur-3xl"></div>
        <div class="scene relative w-full">
          <Transition name="cut" mode="out-in">
            <!-- 1 Tender summary -->
            <div v-if="scene === 0" key="s0" class="relative mx-auto flex w-full max-w-xl items-center justify-end sm:min-h-[300px]">
              <div class="absolute left-0 top-1/4 hidden sm:block">
                <span v-for="i in 3" :key="i" class="doc absolute block h-36 w-28 rounded-md border border-white/20 bg-white/90 p-2" :style="{ animationDelay: `${(i - 1) * 0.25}s`, left: `${(i - 1) * 14}px`, top: `${(i - 1) * 10}px` }">
                  <span v-for="l in 6" :key="l" class="mt-1.5 block h-1 rounded bg-ink-300" :style="{ width: `${50 + ((l * 17 + i * 7) % 45)}%` }"></span>
                </span>
                <span class="beam absolute -left-2 top-0 h-44 w-36 rounded-lg"></span>
              </div>
              <div class="panel relative w-full max-w-sm">
                <p class="flex items-center gap-2 text-xs font-semibold text-ai-200"><i class="fa-solid fa-wand-magic-sparkles"></i>AI tender summary</p>
                <dl class="mt-3 space-y-2 text-sm">
                  <div v-for="(f, i) in summary" :key="f.k" class="field flex justify-between gap-3 rounded-lg bg-white/5 px-2.5 py-1.5" :style="{ animationDelay: `${1.1 + i * 0.45}s` }">
                    <dt class="text-ink-300">{{ f.k }}</dt><dd class="text-right font-medium text-white">{{ f.v }}</dd>
                  </div>
                </dl>
                <p class="field mt-3 flex gap-2 text-xs" style="animation-delay: 3.6s"><span class="rounded-full bg-cyan-400/15 px-2 py-0.5 text-cyan-200">Review</span><span class="rounded-full bg-cyan-400/15 px-2 py-0.5 text-cyan-200">Export to Excel / PDF</span></p>
              </div>
            </div>

            <!-- 2 FOT AI -->
            <div v-else-if="scene === 1" key="s1" class="panel mx-auto w-full max-w-2xl">
              <p class="flex items-center justify-between text-xs font-semibold text-ai-200"><span><i class="fa-solid fa-file-pdf mr-1.5"></i>Client’s BOQ (PDF)</span><span class="text-xs font-normal text-ink-300">FOT AI</span></p>
              <div class="relative mt-3 overflow-hidden rounded-lg border border-white/10 text-[10px] sm:text-xs">
                <div class="grid grid-cols-[1.6fr_.6fr_.5fr_.7fr_.8fr] bg-white/10 px-2 py-1.5 font-semibold text-ink-100"><span>Description</span><span>Qty</span><span>Unit</span><span>Rate</span><span>Amount</span></div>
                <div v-for="(r, i) in boq" :key="r.d" class="grid grid-cols-[1.6fr_.6fr_.5fr_.7fr_.8fr] border-t border-white/5 px-2 py-1.5 text-ink-200" :class="i >= 3 ? 'hidden sm:grid' : ''">
                  <span>{{ r.d }}</span><span>{{ r.q }}</span><span>{{ r.u }}</span>
                  <span class="price font-semibold text-cyan-300" :style="{ animationDelay: `${2.6 + i * 0.5}s` }">{{ r.r }}</span>
                  <span class="price font-semibold text-cyan-300" :style="{ animationDelay: `${2.8 + i * 0.5}s` }">{{ r.a }}</span>
                </div>
                <div class="price hidden grid-cols-[1.6fr_.6fr_.5fr_.7fr_.8fr] border-t border-cyan-400/30 sm:grid bg-cyan-400/5 px-2 py-2 font-semibold text-white" style="animation-delay: 5.6s"><span class="col-span-4 text-right pr-3">Form of Tender total (SGD)</span><span class="text-cyan-300">33,254.00</span></div>
                <span class="col-hl" style="left: 37.6%; width: 14.6%; animation-delay: .9s"><em>Quantity found</em></span>
                <span class="col-hl" style="left: 80.6%; width: 18.8%; animation-delay: 1.5s"><em>Amount found</em></span>
              </div>
            </div>

            <!-- 3 Ask ARIVU -->
            <div v-else-if="scene === 2" key="s2" class="panel mx-auto w-full max-w-lg">
              <p class="flex items-center gap-2 text-xs font-semibold text-ai-200"><i class="fa-regular fa-comment-dots"></i>ARIVU · inside every app</p>
              <p class="bubble-q ml-auto mt-3 w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-[#255e6b] px-3 py-1.5 text-xs text-white">What is waiting for my approval?</p>
              <div class="bubble-a mt-2 rounded-2xl rounded-bl-sm bg-white/10 p-3 text-sm text-ink-100">
                <p class="font-semibold text-white">3 items are waiting:</p>
                <p v-for="w in waiting" :key="w.t" class="mt-1 flex items-center gap-1.5"><UiAppIcon :app="w.app" size="xs" />{{ w.t }}</p>
                <div class="mt-3 flex h-20 items-end gap-1.5">
                  <span v-for="(h, i) in [40, 70, 55, 90, 65]" :key="i" class="bar w-full rounded-t bg-gradient-to-t from-cyan-500 to-ai-400" :style="{ height: `${h}%`, animationDelay: `${2.4 + i * 0.12}s` }"></span>
                </div>
                <p class="mt-2 flex gap-1.5 text-xs"><span class="rounded-full bg-white/10 px-2 py-0.5">Export to Excel</span><span class="rounded-full bg-white/10 px-2 py-0.5">PDF</span><span class="ml-auto text-ink-400">read-only</span></p>
              </div>
            </div>

            <!-- 4 DeepPlan take-off -->
            <div v-else key="s3" class="panel mx-auto w-full max-w-xl">
              <p class="flex items-center justify-between text-xs font-semibold text-ai-200"><span><i class="fa-solid fa-compass-drafting mr-1.5"></i>DeepPlan · floor plan</span><span class="rounded-full bg-amber-400/15 px-2 py-0.5 text-xs text-amber-200">AI take-off · early access</span></p>
              <svg viewBox="0 0 240 130" class="mt-3 w-full rounded-lg border border-white/10 bg-white/[.03]">
                <rect x="8" y="8" width="224" height="114" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1.5" />
                <line x1="100" y1="8" x2="100" y2="122" stroke="rgba(255,255,255,.35)" stroke-width="1.5" />
                <line x1="100" y1="64" x2="232" y2="64" stroke="rgba(255,255,255,.35)" stroke-width="1.5" />
                <g v-for="(r, i) in rooms" :key="i" class="room" :style="{ animationDelay: `${0.8 + i * 0.9}s` }">
                  <rect :x="r.x" :y="r.y" :width="r.w" :height="r.h" fill="rgba(122,90,248,.22)" stroke="#9b8afb" stroke-width="1.5" />
                  <text :x="r.x + r.w / 2" :y="r.y + r.h / 2 + 3" text-anchor="middle" font-size="8" fill="#e9e5ff" font-weight="600">{{ r.label }}</text>
                </g>
              </svg>
              <p class="price mt-3 flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-sm text-ink-100" style="animation-delay: 3.6s"><span>Rooms → quantities → priced BOQ</span><i class="fa-solid fa-arrow-right text-cyan-300"></i></p>
            </div>
          </Transition>
        </div>
        <!-- ARIVU, the character: glides between waypoints and changes pose -->
        <span class="actor pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2" :class="actor.pose === 'happy' ? 'hop' : ''" :style="{ left: `${actor.x}%`, top: `${actor.y}%` }">
          <UiArivuAvatar :size="actorSize" :pose="actor.pose" :look="actor.look" :talking="typing && actor.pose !== 'happy'" :float="actor.pose !== 'happy'" />
          <span v-if="actor.say" :key="actor.say" class="quip absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#fff] px-2.5 py-1 text-[11px] font-bold text-[#04161b] shadow-lift">{{ actor.say }}</span>
        </span>
        <p class="absolute bottom-3 right-4 text-[9px] font-semibold uppercase tracking-wider text-white/70">Illustration · demo data</p>
      </div>

      <button type="button" class="absolute right-4 top-7 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" :aria-label="paused ? 'Play' : 'Pause'" @click="toggle">
        <i :class="paused ? 'fa-solid fa-play' : 'fa-solid fa-pause'" class="text-[10px]" aria-hidden="true"></i>
      </button>
    </figure>

  </div>
</template>

<script setup lang="ts">
// A short "movie": ARIVU narrates four scenes of AI in CCorex. Captions type out, scenes cut on a timer
// while the section is visible; chapters below jump to a scene. Reduced motion: static scenes, full captions.
const scenes = [
  { key: 'summary', title: 'AI tender summary', icon: 'fa-solid fa-file-lines', text: 'DeepCost reads the uploaded tender documents and fills a set of key fields for your team to review and export.',
    say: 'A new tender just came in. I read the documents and filled in the key fields — your estimators review them and export.' },
  { key: 'fot', title: 'FOT AI', icon: 'fa-solid fa-file-invoice-dollar', text: 'Upload the client’s BOQ PDF; DeepCost finds the quantity and amount columns so you can price the Form of Tender on top of it.',
    say: 'Upload the client’s BOQ PDF. I find the quantity and amount columns, so you price the Form of Tender right on top of it.' },
  { key: 'ask', title: 'ARIVU assistant', icon: 'fa-solid fa-wand-magic-sparkles', text: 'Ask in plain language for answers, summaries, charts and exports across your CCorex data. It reads; it never changes records.',
    say: 'Ask me anything in plain language — answers, charts and exports from your own CCorex data. I only read; I never change records.' },
  { key: 'plan', title: 'DeepPlan take-off', icon: 'fa-solid fa-compass-drafting', soon: true, text: 'Rooms, areas and quantities from floor plans into a priced BOQ. Its AI take-off is in early access.',
    say: 'In DeepPlan, rooms and quantities come off the floor plan into a priced BOQ. The AI take-off is in early access.' }
]
const summary = [
  { k: 'Project', v: 'Sample School, Block A' }, { k: 'Tender type', v: 'BOQ' },
  { k: 'Trades in scope', v: 'Fire protection · ELV' }, { k: 'Key requirement', v: 'Sprinklers to SS CP 52' }
]
const boq = [
  { d: 'Sprinkler head, pendent', q: '120', u: 'nos', r: '38.00', a: '4,560.00' },
  { d: 'Pipe, 25 mm, galvanised', q: '340', u: 'm', r: '22.50', a: '7,650.00' },
  { d: 'Alarm check valve', q: '2', u: 'set', r: '1,850.00', a: '3,700.00' },
  { d: 'Smoke detector, addressable', q: '86', u: 'nos', r: '64.00', a: '5,504.00' },
  { d: 'Hose reel, 30 m', q: '12', u: 'nos', r: '420.00', a: '5,040.00' },
  { d: 'Fire alarm panel, 4-loop', q: '1', u: 'set', r: '6,800.00', a: '6,800.00' }
]
const waiting = [
  { app: 'deeptrack', t: 'Budget for Block B fit-out' },
  { app: 'deephr', t: 'Annual leave request, 3 days' },
  { app: 'deepcost', t: 'ACMV estimate ready for review' }
]
const rooms = [
  { x: 10, y: 10, w: 88, h: 110, label: 'Room 1' }, { x: 102, y: 10, w: 128, h: 52, label: 'Room 2' }, { x: 102, y: 66, w: 128, h: 54, label: 'Room 3' }
]

// ARIVU's route per scene: [ms into the scene, x %, y %, pose, look, quip]
type Pose = 'idle' | 'wave' | 'point-left' | 'point-right' | 'happy'
type Way = [number, number, number, Pose, [number, number], string?]
const routes: Way[][] = [
  [[0, 10, 78, 'wave', [0, 0], 'Hi!'], [1100, 12, 30, 'point-right', [4, 0], 'Reading…'], [2600, 42, 20, 'point-right', [4, 1]], [5600, 46, 80, 'happy', [0, 0], 'Done!']],
  [[0, 8, 80, 'idle', [3, -2]], [900, 30, 14, 'point-right', [4, 2], 'Quantity'], [1700, 66, 14, 'point-right', [4, 2], 'Amount'], [3200, 92, 50, 'point-left', [-4, 1], 'Priced'], [5600, 90, 84, 'happy', [0, 0], '✓']],
  [[0, 88, 80, 'wave', [-3, 0], 'Ask me'], [1500, 10, 50, 'point-right', [4, 0]], [4200, 10, 80, 'happy', [0, 0], 'Read-only']],
  [[0, 6, 14, 'idle', [3, 2]], [800, 22, 40, 'point-right', [4, 0], 'Room 1'], [1700, 52, 26, 'point-right', [4, 0], 'Room 2'], [2600, 52, 64, 'point-right', [4, 0], 'Room 3'], [3900, 90, 84, 'happy', [0, 0], 'BOQ!']]
]
const sceneT = ref(99999)
const actorSize = ref(76)
const actor = computed(() => {
  const r = routes[scene.value]!
  let w = r[0]!
  for (const x of r) if (sceneT.value >= x[0]) w = x
  return { x: w[1], y: w[2], pose: w[3], look: w[4], say: w[5] }
})

const SCENE_MS = 8000
const root = ref<HTMLElement | null>(null)
const scene = ref(0)
const progress = ref(0)
const shown = ref(scenes[0]!.say)
const typing = ref(false)
const paused = ref(false)
let visible = false
let reduce = false
let raf = 0
let started = 0
let elapsed = 0

function startScene(i: number) {
  scene.value = i
  sceneT.value = reduce ? 99999 : 0
  elapsed = 0
  started = performance.now()
  progress.value = 0
  shown.value = reduce ? scenes[i]!.say : ''
}
function loop(now: number) {
  if (visible && !paused.value) {
    const t = elapsed + (now - started)
    sceneT.value = t
    progress.value = Math.min(1, t / SCENE_MS)
    const full = scenes[scene.value]!.say
    const chars = Math.min(full.length, Math.floor(t / 32))
    shown.value = full.slice(0, chars)
    typing.value = chars < full.length
    if (t >= SCENE_MS) startScene((scene.value + 1) % scenes.length)
  } else {
    started = now // hold the clock while paused / off-screen
  }
  raf = requestAnimationFrame(loop)
}
function goTo(i: number) { startScene(i); paused.value = false }
function toggle() {
  if (paused.value) started = performance.now()
  else elapsed += performance.now() - started
  paused.value = !paused.value
}

let io: IntersectionObserver | undefined
onMounted(() => {
  reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  actorSize.value = window.innerWidth < 640 ? 52 : 76
  if (reduce) { paused.value = true; return }
  startScene(0)
  io = new IntersectionObserver(([e]) => {
    const was = visible
    visible = !!e?.isIntersecting
    if (visible && !was) started = performance.now()
    if (!visible && was) elapsed += performance.now() - started
  }, { threshold: 0.35 })
  if (root.value) io.observe(root.value)
  raf = requestAnimationFrame(loop)
})
onBeforeUnmount(() => { cancelAnimationFrame(raf); io?.disconnect() })
</script>

<style scoped>
.panel { border-radius: 1.25rem; border: 1px solid rgba(255, 255, 255, .12); background: rgba(11, 42, 49, .92); padding: 1.25rem; box-shadow: 0 24px 60px -20px rgba(0, 0, 0, .6); animation: rise .6s cubic-bezier(.2, .8, .2, 1) both; }
.cut-enter-active, .cut-leave-active { transition: opacity .45s ease, transform .45s ease; }
.cut-enter-from { opacity: 0; transform: translateX(24px) scale(.98); }
.cut-leave-to { opacity: 0; transform: translateX(-24px) scale(.98); }
@keyframes rise { from { opacity: 0; transform: translateY(16px); } }
.doc { animation: doc .7s cubic-bezier(.2, .8, .2, 1) both; }
@keyframes doc { from { opacity: 0; transform: translate(-40px, 20px) rotate(-8deg); } }
.beam { background: linear-gradient(90deg, transparent, rgba(51, 207, 231, .55), transparent); animation: beam 1.6s ease-in-out .6s 2 both; }
@keyframes beam { from { transform: translateX(-20px); opacity: 0; } 30% { opacity: 1; } to { transform: translateX(90px); opacity: 0; } }
.field, .price { animation: pop .45s ease both; }
@keyframes pop { from { opacity: 0; transform: translateY(6px); } }
.col-hl { position: absolute; top: 0; bottom: 0; border: 2px dashed #33cfe7; border-radius: 6px; background: rgba(51, 207, 231, .08); animation: pop .5s ease both; }
.col-hl em { position: absolute; top: -1px; left: 50%; transform: translate(-50%, -100%); white-space: nowrap; border-radius: 9999px; background: #33cfe7; padding: 1px 6px; font-size: 10px; font-style: normal; font-weight: 700; color: #04161b; }
.bubble-q { animation: pop .4s ease .3s both; }
.bubble-a { animation: pop .5s ease 1.3s both; }
.bar { animation: grow .5s ease both; transform-origin: bottom; }
@keyframes grow { from { transform: scaleY(0); } }
.room { animation: pop .5s ease both; }
.talk { background: rgba(51, 207, 231, .35); }
.talking { animation: talk .5s ease-in-out infinite alternate; }
@keyframes talk { from { box-shadow: 0 0 0 0 rgba(51, 207, 231, .45); } to { box-shadow: 0 0 0 12px rgba(51, 207, 231, 0); } }
.actor { transition: left .9s cubic-bezier(.45, 0, .2, 1), top .9s cubic-bezier(.45, 0, .2, 1); filter: drop-shadow(0 10px 18px rgba(0, 0, 0, .45)); }
.hop { animation: hop .7s ease-in-out infinite; }
@keyframes hop { 0%, 100% { margin-top: 0; } 40% { margin-top: -14px; } }
.quip { animation: quip .35s cubic-bezier(.3, 1.5, .5, 1) both; }
@keyframes quip { from { opacity: 0; transform: translate(-50%, 6px) scale(.7); } }
.caret { margin-left: 1px; color: #33cfe7; animation: blink .8s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .actor, .hop, .quip, .panel, .doc, .beam, .field, .price, .col-hl, .bubble-q, .bubble-a, .bar, .room, .talking, .caret { animation: none; }
  .cut-enter-active, .cut-leave-active { transition: none; }
}
</style>
