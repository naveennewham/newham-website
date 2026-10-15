<template>
  <header class="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
    <nav class="container-site flex h-16 items-center justify-between gap-6" aria-label="Main">
      <NuxtLink to="/" class="flex shrink-0 items-center" aria-label="Newham Technological Solutions home">
        <img src="/newham-logo.png" alt="Newham" class="h-7 w-auto dark:hidden" width="110" height="28" />
        <img src="/newham-logo-white.png" alt="Newham" class="hidden h-7 w-auto dark:block" width="110" height="28" />
      </NuxtLink>

      <ul class="hidden items-center gap-1 lg:flex">
        <li ref="menuRef" class="relative" @mouseenter="menu = true" @mouseleave="menu = false">
          <button
            type="button"
            class="flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-900"
            :aria-expanded="menu"
            aria-controls="ccorex-menu"
            @click="menu = !menu"
          >
            CCorex software <i class="fa-solid fa-chevron-down text-[10px] transition-transform" :class="menu ? 'rotate-180' : ''" aria-hidden="true"></i>
          </button>
          <div v-show="menu" id="ccorex-menu" class="absolute -left-24 top-full w-[880px] pt-2">
            <div class="light-surface grid grid-cols-[300px_1fr] overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-lift">
              <!-- App list -->
              <div class="border-r border-ink-100 p-2.5" @mouseleave="rowHover = false">
                <p class="px-2.5 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-wider text-ink-500">CCorex apps</p>
                <ul>
                  <li v-for="(a, i) in ccorexApps" :key="a.slug">
                    <a
                      :href="ccorexAppUrl(a.slug)"
                      target="_blank"
                      rel="noopener"
                      class="flex items-center gap-3 rounded-xl px-2.5 py-2 transition-colors"
                      :class="hovered === i ? 'bg-ink-50' : ''"
                      @mouseenter="hovered = i; rowHover = true"
                      @focus="hovered = i; rowHover = true"
                      @click="menu = false"
                    >
                      <UiAppIcon :app="a.slug" size="sm" />
                      <span class="min-w-0 flex-1">
                        <span class="flex items-center gap-1.5 text-sm font-semibold text-ink-900">{{ a.name }}<span v-if="a.ai" class="rounded-full bg-ai-50 px-1.5 text-[9px] font-semibold text-ai-700">AI</span></span>
                        <span class="block truncate text-xs text-ink-500">{{ a.category }}</span>
                      </span>
                      <i class="fa-solid fa-chevron-right text-[10px] transition-opacity" :class="hovered === i ? 'text-ink-500 opacity-100' : 'opacity-0'" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Snapshot of the hovered app: a tile in the app's own colour -->
              <div class="flex flex-col p-4">
                <Transition name="snap" mode="out-in">
                  <div :key="current.slug" class="relative flex flex-1 flex-col overflow-hidden rounded-2xl p-6 text-white" :style="{ background: accent.bg }">
                    <!-- decoration -->
                    <i :class="current.icon" class="pointer-events-none absolute -bottom-8 -right-6 text-[11rem] text-white/10" aria-hidden="true"></i>
                    <span class="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" aria-hidden="true"></span>

                    <div class="relative flex items-start justify-between gap-4">
                      <div class="flex items-center gap-3">
                        <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-2xl shadow-lg ring-1 ring-white/30 backdrop-blur"><i :class="current.icon" aria-hidden="true"></i></span>
                        <div>
                          <p class="text-[11px] font-semibold uppercase tracking-wider text-white/75">{{ current.category }}</p>
                          <p class="font-display text-2xl font-extrabold leading-tight">{{ current.name }}</p>
                        </div>
                      </div>
                      <span v-if="current.ai || current.status" class="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ring-1 ring-white/30">{{ current.status ?? 'AI inside' }}</span>
                    </div>

                    <p class="relative mt-4 min-h-[2.75rem] max-w-md text-sm leading-snug text-white/90">{{ current.summary }}</p>

                    <!-- key points as a mini flow -->
                    <ol class="relative mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-1.5">
                      <template v-for="(pt, i) in current.points" :key="pt">
                        <li class="pt-card flex flex-col rounded-xl bg-white/15 p-3 ring-1 ring-white/20 backdrop-blur" :style="{ animationDelay: `${i * 0.08}s` }">
                          <span class="text-[10px] font-bold text-white/70">0{{ i + 1 }}</span>
                          <span class="mt-1 text-xs font-semibold leading-snug">{{ pt }}</span>
                        </li>
                        <li v-if="i < (current.points?.length ?? 0) - 1" class="flex items-center text-[10px] text-white/60" aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></li>
                      </template>
                    </ol>

                    <div class="relative mt-auto flex items-center justify-between pt-5">
                      <span class="flex items-center gap-2 text-[11px] text-white/75">
                        Works with
                        <span class="flex -space-x-1.5"><UiAppIcon v-for="o in others" :key="o" :app="o" size="xs" class="ring-2 ring-white/40" /></span>
                      </span>
                      <a :href="ccorexAppUrl(current.slug)" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-sm font-bold shadow-lg transition-transform hover:-translate-y-0.5" :style="{ color: accent.ink }" @click="menu = false">Explore {{ current.name }} <i class="fa-solid fa-arrow-up-right-from-square text-[10px]" aria-hidden="true"></i><span class="sr-only"> (opens in a new tab)</span></a>
                    </div>
                  </div>
                </Transition>
                <div class="mt-3 flex items-center justify-between px-1 text-sm">
                  <span class="text-xs text-ink-500">One sign-in for every app</span>
                  <span class="flex items-center gap-4">
                    <a :href="CCOREX_URL" target="_blank" rel="noopener" class="font-semibold text-brand-700 hover:text-brand-900" @click="menu = false">ccorex.com</a>
                    <a :href="CCOREX_SIGNIN_URL" class="text-ink-600 hover:text-ink-900" @click="menu = false">Sign in</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li v-for="l in links" :key="l.to">
          <NuxtLink :to="l.to" class="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-900" active-class="!text-brand-700">{{ l.label }}</NuxtLink>
        </li>
      </ul>

      <div class="hidden items-center gap-2 lg:flex">
        <UiThemeToggle class="mr-1" />
        <NuxtLink to="/contact" class="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-900">Contact</NuxtLink>
        <NuxtLink to="/appointment" class="btn-primary whitespace-nowrap py-2.5">Book a discovery call</NuxtLink>
      </div>

      <button type="button" class="rounded-lg p-2 text-ink-900 lg:hidden" :aria-expanded="open" aria-controls="mobile-menu" :aria-label="open ? 'Close menu' : 'Open menu'" @click="open = !open">
        <i :class="open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-xl" aria-hidden="true"></i>
      </button>
    </nav>

    <div v-show="open" id="mobile-menu" class="border-t border-ink-100 bg-white lg:hidden">
      <div class="container-site max-h-[80vh] overflow-y-auto py-4">
        <ul class="flex flex-col">
          <li v-for="l in links" :key="l.to"><NuxtLink :to="l.to" class="block rounded-lg px-2 py-2.5 text-sm font-medium text-ink-800 hover:bg-ink-50">{{ l.label }}</NuxtLink></li>
          <li><NuxtLink to="/contact" class="block rounded-lg px-2 py-2.5 text-sm font-medium text-ink-800 hover:bg-ink-50">Contact</NuxtLink></li>
        </ul>
        <p class="eyebrow mb-2 mt-4 border-t border-ink-100 pt-4">CCorex software</p>
        <ul class="grid grid-cols-2 gap-1">
          <li v-for="a in ccorexApps" :key="a.slug">
            <a :href="ccorexAppUrl(a.slug)" target="_blank" rel="noopener" class="block rounded-lg px-2 py-2 text-sm font-medium text-ink-800 hover:bg-ink-50">{{ a.name }}</a>
          </li>
          <li><a :href="CCOREX_URL" target="_blank" rel="noopener" class="block rounded-lg px-2 py-2 text-sm font-semibold text-brand-700 hover:bg-ink-50">ccorex.com <i class="fa-solid fa-arrow-up-right-from-square text-[10px]" aria-hidden="true"></i></a></li>
        </ul>
        <div class="mt-4 flex items-center justify-between border-t border-ink-100 pt-4"><span class="text-sm font-medium text-ink-700">Theme</span><UiThemeToggle /></div>
        <NuxtLink to="/appointment" class="btn-primary mt-4 w-full">Book a discovery call</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ccorexApps, ccorexAppUrl, CCOREX_URL, CCOREX_SIGNIN_URL } from '~/data/ccorex'

const open = ref(false)
const menu = ref(false)
const hovered = ref(0)
// While the menu is open, step through the apps every 2.2 s, unless the pointer is on a row.
const rowHover = ref(false)
let cycle: ReturnType<typeof setInterval> | undefined
watch(menu, (open) => {
  clearInterval(cycle)
  if (!open) { rowHover.value = false; return }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  cycle = setInterval(() => { if (!rowHover.value) hovered.value = (hovered.value + 1) % ccorexApps.length }, 2200)
})
const current = computed(() => ccorexApps[hovered.value]!)
// Tile colours follow the portal's app icons.
const accents: Record<string, { bg: string; ink: string }> = {
  'deepcost': { bg: 'linear-gradient(135deg, #3a8fa8, #1f5f72)', ink: '#1f5f72' },
  'deeptrack': { bg: 'linear-gradient(135deg, #e99a3a, #b8641a)', ink: '#9a5212' },
  'deephr': { bg: 'linear-gradient(135deg, #4fa95f, #2e7a3e)', ink: '#2e7a3e' },
  'deepplan-ai': { bg: 'linear-gradient(135deg, #5f7cf0, #3141a8)', ink: '#3141a8' },
  'arivu-ai': { bg: 'linear-gradient(135deg, #8b6cff, #4b2fc0)', ink: '#4b2fc0' },
  'deep-drive': { bg: 'linear-gradient(135deg, #b257cf, #6e2a8c)', ink: '#6e2a8c' },
  'pdf-editor': { bg: 'linear-gradient(135deg, #ec6a5e, #a8322b)', ink: '#a8322b' }
}
const accent = computed(() => accents[current.value.slug] ?? accents.deepcost!)
const others = computed(() => ccorexApps.map((a) => a.slug).filter((s) => s !== current.value.slug).slice(0, 4))
const menuRef = ref<HTMLElement | null>(null)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false; menu.value = false })

const links = [
  { to: '/talent-outsourcing', label: 'Talent outsourcing' },
  { to: '/engineering-services', label: 'Engineering services' },
  { to: '/industries', label: 'Industries' },
  { to: '/about', label: 'About' }
]

// Close the CCorex menu on Escape or outside click.
const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { menu.value = false; open.value = false } }
const onDocClick = (e: MouseEvent) => { if (menu.value && menuRef.value && !menuRef.value.contains(e.target as Node)) menu.value = false }
onMounted(() => { document.addEventListener('keydown', onKey); document.addEventListener('click', onDocClick) })
onBeforeUnmount(() => { clearInterval(cycle); document.removeEventListener('keydown', onKey); document.removeEventListener('click', onDocClick) })
</script>

<style scoped>
.snap-enter-active, .snap-leave-active { transition: opacity .18s ease, transform .18s ease; }
.snap-enter-from { opacity: 0; transform: translateY(4px); }
.snap-leave-to { opacity: 0; }
.pt-card { animation: pt .35s ease both; }
@keyframes pt { from { opacity: 0; transform: translateY(6px); } }
@media (prefers-reduced-motion: reduce) { .pt-card { animation: none; } }
</style>
