<template>
  <header class="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
    <nav class="container-site flex h-16 items-center justify-between gap-6" aria-label="Main">
      <NuxtLink to="/" class="flex shrink-0 items-center" aria-label="CCorex home">
        <img src="/ccorex-logo.png" alt="CCorex" class="logo-auto h-7 w-auto brightness-0" width="112" height="28" />
      </NuxtLink>

      <ul class="hidden items-center gap-1 lg:flex">
        <li class="relative" @mouseenter="menu = 'products'" @mouseleave="menu = null">
          <button
            type="button"
            class="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-900"
            :aria-expanded="menu === 'products'"
            aria-controls="products-menu"
            @click="menu = menu === 'products' ? null : 'products'"
          >
            Products <i class="fa-solid fa-chevron-down text-[10px]" aria-hidden="true"></i>
          </button>
          <div v-show="menu === 'products'" id="products-menu" class="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-2">
            <div class="grid grid-cols-[1fr_240px] overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-lift">
              <ul class="grid grid-cols-2 gap-1 p-3">
                <li v-for="a in apps" :key="a.slug">
                  <NuxtLink :to="`/products/${a.slug}`" class="flex gap-3 rounded-xl p-3 hover:bg-ink-50" @click="menu = null">
                    <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" :class="a.color"><i :class="a.icon" aria-hidden="true"></i></span>
                    <span>
                      <span class="flex items-center gap-2 text-sm font-semibold text-ink-900">{{ a.name }}<span v-if="a.ai" class="chip-ai px-2 py-0 text-[10px]">AI</span><span v-if="a.status === 'preview'" class="rounded-full bg-amber-50 px-2 text-[10px] font-semibold text-amber-800">Soon</span></span>
                      <span class="block text-xs leading-snug text-ink-500">{{ a.category }}</span>
                    </span>
                  </NuxtLink>
                </li>
              </ul>
              <div class="flex flex-col justify-between bg-brand-950 p-5 text-white">
                <div>
                  <p class="eyebrow-dark">The platform</p>
                  <p class="mt-2 text-sm leading-relaxed text-ink-200">One login, one user base and one set of roles across every app.</p>
                </div>
                <NuxtLink to="/platform" class="mt-4 text-sm font-semibold text-cyan-400 hover:text-white" @click="menu = null">How the platform works →</NuxtLink>
              </div>
            </div>
          </div>
        </li>
        <li v-for="l in links" :key="l.to">
          <NuxtLink :to="l.to" class="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-900" active-class="text-brand-700">{{ l.label }}</NuxtLink>
        </li>
      </ul>

      <div class="hidden items-center gap-2 lg:flex">
        <UiThemeToggle class="mr-1" />
        <a :href="config.public.appLoginUrl" class="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:text-ink-900">Sign in</a>
        <NuxtLink to="/contact" class="btn-primary py-2.5">Book a demo</NuxtLink>
      </div>

      <button type="button" class="rounded-lg p-2 text-ink-900 lg:hidden" :aria-expanded="open" aria-controls="mobile-menu" aria-label="Open menu" @click="open = !open">
        <i :class="open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-xl" aria-hidden="true"></i>
      </button>
    </nav>

    <div v-show="open" id="mobile-menu" class="border-t border-ink-100 bg-white lg:hidden">
      <div class="container-site max-h-[80vh] overflow-y-auto py-4">
        <p class="eyebrow mb-2">Products</p>
        <ul class="mb-4 grid grid-cols-2 gap-2">
          <li v-for="a in apps" :key="a.slug">
            <NuxtLink :to="`/products/${a.slug}`" class="flex items-center gap-2.5 rounded-xl border border-ink-100 p-2 hover:bg-ink-50" @click="open = false">
              <UiAppIcon :app="a.slug" size="sm" />
              <span class="min-w-0">
                <span class="block truncate text-sm font-semibold text-ink-900">{{ a.name }}</span>
                <span class="block truncate text-[11px] text-ink-500">{{ a.category }}</span>
              </span>
            </NuxtLink>
          </li>
        </ul>
        <ul class="flex flex-col border-t border-ink-100 pt-3">
          <li v-for="l in links" :key="l.to"><NuxtLink :to="l.to" class="block rounded-lg px-2 py-2.5 text-sm font-medium text-ink-800 hover:bg-ink-50" @click="open = false">{{ l.label }}</NuxtLink></li>
        </ul>
        <div class="mt-4 flex items-center justify-between border-t border-ink-100 pt-4"><span class="text-sm font-medium text-ink-700">Theme</span><UiThemeToggle /></div>
        <div class="mt-4 grid grid-cols-2 gap-2">
          <a :href="config.public.appLoginUrl" class="btn-secondary">Sign in</a>
          <NuxtLink to="/contact" class="btn-primary" @click="open = false">Book a demo</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { apps } from '~/data/apps'

const config = useRuntimeConfig()
const open = ref(false)
const menu = ref<string | null>(null)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false; menu.value = null })

const links = [
  { to: '/platform', label: 'Platform' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'Company' }
]
</script>
