<template>
  <header class="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
    <nav class="container-site flex h-16 items-center justify-between gap-6" aria-label="Main">
      <NuxtLink to="/" class="flex shrink-0 items-center" aria-label="Newham Technological Solutions home">
        <img src="/newham-logo.png" alt="Newham" class="h-7 w-auto" width="110" height="28" />
      </NuxtLink>

      <ul class="hidden items-center gap-1 lg:flex">
        <li ref="menuRef" class="relative" @mouseenter="menu = true" @mouseleave="menu = false">
          <button
            type="button"
            class="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-900"
            :aria-expanded="menu"
            aria-controls="ccorex-menu"
            @click="menu = !menu"
          >
            CCorex software <i class="fa-solid fa-chevron-down text-[10px] transition-transform" :class="menu ? 'rotate-180' : ''" aria-hidden="true"></i>
          </button>
          <div v-show="menu" id="ccorex-menu" class="absolute left-0 top-full w-[680px] pt-2">
            <div class="grid grid-cols-[1fr_230px] overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-lift">
              <ul class="grid grid-cols-2 gap-1 p-3">
                <li v-for="a in ccorexApps" :key="a.slug">
                  <a :href="ccorexAppUrl(a.slug)" target="_blank" rel="noopener" class="flex gap-3 rounded-xl p-3 hover:bg-ink-50" @click="menu = false">
                    <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" :class="a.color"><i :class="a.icon" aria-hidden="true"></i></span>
                    <span>
                      <span class="flex items-center gap-2 text-sm font-semibold text-ink-900">{{ a.name }}<span v-if="a.ai" class="chip-ai px-2 py-0 text-[10px]">AI</span><span v-else-if="a.status" class="chip px-2 py-0 text-[10px]">Early access</span></span>
                      <span class="block text-xs leading-snug text-ink-500">{{ a.category }}</span>
                    </span>
                  </a>
                </li>
              </ul>
              <div class="flex flex-col justify-between bg-brand-950 p-5 text-white">
                <div>
                  <p class="eyebrow-dark">CCorex</p>
                  <p class="mt-2 text-sm leading-relaxed text-ink-200">Our AI-powered construction software suite. Estimating, project delivery and HR &amp; payroll on one login.</p>
                </div>
                <div class="mt-4 space-y-2">
                  <a :href="CCOREX_URL" target="_blank" rel="noopener" class="block text-sm font-semibold text-cyan-400 hover:text-white" @click="menu = false">Visit ccorex.com <i class="fa-solid fa-arrow-up-right-from-square ml-1 text-[11px]" aria-hidden="true"></i><span class="sr-only"> (opens in a new tab)</span></a>
                  <a :href="CCOREX_SIGNIN_URL" class="block text-sm text-ink-200 hover:text-white" @click="menu = false">Sign in to CCorex</a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li v-for="l in links" :key="l.to">
          <NuxtLink :to="l.to" class="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-900" active-class="!text-brand-700">{{ l.label }}</NuxtLink>
        </li>
      </ul>

      <div class="hidden items-center gap-2 lg:flex">
        <UiThemeToggle class="mr-1" />
        <NuxtLink to="/contact" class="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-900">Contact</NuxtLink>
        <NuxtLink to="/appointment" class="btn-primary py-2.5">Book a discovery call</NuxtLink>
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
onBeforeUnmount(() => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onDocClick) })
</script>
