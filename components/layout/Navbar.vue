<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="glass-panel mx-4 my-4 md:mx-8 px-4 py-3 flex items-center justify-between">
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center">
          <img src="~/assets/Newham_Logo_white.png" alt="Newham Logo" class="h-10 w-auto mr-2" />
        </NuxtLink>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <!-- CCorex with Dropdown -->
        <div class="relative" ref="suiteRef">
          <button type="button" @click="dropdownOpen = !dropdownOpen" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-1">
            CCorex Suite
            <svg class="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>

          <!-- Dropdown Menu: unified CCorex Suite canvas -->
          <!-- Backdrop -->
          <div v-show="dropdownOpen" class="fixed inset-0 z-40" @click="dropdownOpen = false"></div>
          <div v-show="dropdownOpen" class="fixed top-16 left-1/2 -translate-x-1/2 w-[72rem] max-w-[95vw] rounded-2xl shadow-2xl z-50 p-6 bg-white text-slate-800 ring-1 ring-slate-200/60 transition-transform duration-150"
               style="width: min(95vw, 72rem);">
            <!-- Suite header -->
            <div class="flex items-center justify-between pb-4">
              <div class="flex items-center gap-3">
                <img src="~/assets/ccorex/Corex_logo.png" alt="CCorex" class="h-7 w-auto" />
                <div>
                  <div class="font-semibold text-slate-900">CCorex Suite</div>
                  <div class="text-sm text-slate-500">One integrated platform with four focused apps</div>
                </div>
              </div>
              <span class="inline-flex items-center rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1">Part of CCorex</span>
            </div>

            <div class="grid grid-cols-3 gap-6">
              <!-- Cols 1-2: Connected app grid (includes overview) -->
              <div class="col-span-2">
                <div class="rounded-xl ring-1 ring-slate-200/70 overflow-hidden bg-white">
                  <div class="grid grid-cols-2 divide-x divide-y divide-slate-200/80">
                    <!-- Overview tile -->
                    <NuxtLink to="/ccorex" class="flex items-start gap-3 p-5 hover:bg-slate-50">
                      <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 text-base">🏠</span>
                      <div>
                        <div class="font-semibold leading-tight">CCorex Overview</div>
                        <div class="text-sm text-slate-500">Unified platform for construction teams</div>
                      </div>
                    </NuxtLink>
                    <!-- Apps tiles -->
                    <template v-for="app in apps" :key="app.path">
                      <NuxtLink :to="app.path" class="flex items-start gap-3 p-5 hover:bg-slate-50">
                        <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 text-base">{{ app.icon }}</span>
                        <div>
                          <div class="font-semibold leading-tight">{{ app.title }}</div>
                          <div class="text-sm text-slate-500">{{ app.subtitle }}</div>
                        </div>
                      </NuxtLink>
                    </template>
                  </div>
                </div>
              </div>

              <!-- Col 3: CTA card integrated with suite styling -->
              <div class="flex">
                <div class="rounded-2xl ring-1 ring-slate-200/70 bg-slate-50 p-6 flex flex-col justify-between w-full">
                  <div>
                    <div class="font-semibold text-slate-900">Explore the full suite</div>
                    <p class="text-sm text-slate-600 mt-2">See demos, pricing and customer stories on our dedicated site.</p>
                  </div>
                  <button @click="openExternal()" class="mt-4 inline-flex items-center justify-center rounded-lg bg-cyan-500 text-white px-4 py-2 font-semibold hover:bg-cyan-600">
                    Open CCorex Site ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Navigation Items -->
        <NuxtLink v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="text-gray-300 hover:text-white transition-colors duration-300"
          :class="{ 'gradient-text font-medium': $route.path === item.path }">
          {{ item.name }}
        </NuxtLink>
        <NuxtLink to="/appointment" class="btn-primary text-sm">
          Schedule Appointment
        </NuxtLink>
      </div>
      
      <!-- Mobile Menu Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-300 focus:outline-none">
        <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>
    
    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-8 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-8 opacity-0"
    >
      <div v-if="mobileMenuOpen" class="glass-panel mx-4 px-4 py-5 md:hidden">
        <div class="flex flex-col space-y-4">
          <!-- CCorex Mobile Menu -->
          <div class="border-b border-gray-700/50 pb-4">
            <NuxtLink to="/ccorex" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-cyan-400 py-2 font-semibold block">
              CCorex Overview
            </NuxtLink>
            <button @click="openExternal(); mobileMenuOpen = false" class="text-left w-full text-gray-300 hover:text-cyan-400 py-2 font-semibold block">
              Open CCorex Site ↗
            </button>
            <div class="ml-4 space-y-2 mt-2">
              <NuxtLink to="/ccorex/deepcost" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-cyan-400 py-2 block text-sm">
                ↳ DeepCost
              </NuxtLink>
              <NuxtLink to="/ccorex/deeptrack" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-cyan-400 py-2 block text-sm">
                ↳ DeepTrack
              </NuxtLink>
              <NuxtLink to="/ccorex/deephr" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-cyan-400 py-2 block text-sm">
                ↳ DeepHR
              </NuxtLink>
              <NuxtLink to="/ccorex/deepplan-ai" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-cyan-400 py-2 block text-sm">
                ↳ DeepPlanAI
              </NuxtLink>
            </div>
          </div>

          <!-- Other Navigation Items -->
          <NuxtLink v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="text-gray-300 hover:text-white py-2 transition-colors duration-300"
            :class="{ 'gradient-text font-medium': $route.path === item.path }">
            {{ item.name }}
          </NuxtLink>
          <NuxtLink to="/appointment" @click="mobileMenuOpen = false" class="btn-primary text-center mt-2">
            Schedule Appointment
          </NuxtLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const config = useRuntimeConfig()

const mobileMenuOpen = ref(false);
const dropdownOpen = ref(false)
const suiteRef = ref(null)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  // Temporarily hiding Industries and Case Studies from navigation
  // { name: 'Industries', path: '/industries' },
  // { name: 'Case Studies', path: '/case-studies' }
];

const openExternal = () => {
  const base = config.public.ccorexBaseUrl || 'http://localhost:3000'
  window.open(base, '_blank', 'noopener')
}

// Apps data for submenu tiles
const apps = [
  {
    title: 'DeepPlanAI',
    subtitle: 'AI-powered digital takeoffs',
    description: 'Automate takeoffs and quantity extraction from drawings in minutes.',
    path: '/ccorex/deepplan-ai'
  },
  {
    title: 'DeepCost',
    subtitle: 'Accurate cost estimation',
    description: 'Build precise BOQs and estimates for ACMV, Fire Fighting, ELV and more.',
    path: '/ccorex/deepcost'
  },
  {
    title: 'DeepTrack',
    subtitle: 'Budget control & tracking',
    description: 'Track budgets, commitments and variances with real-time visibility.',
    path: '/ccorex/deeptrack'
  },
  {
    title: 'DeepHR',
    subtitle: 'Workforce management',
    description: 'Manage attendance, compliance and labor costs across your sites.',
    path: '/ccorex/deephr'
  }
]

// Split apps into two nearly-equal columns for the mega menu
const appCols = [apps.slice(0, Math.ceil(apps.length / 2)), apps.slice(Math.ceil(apps.length / 2))]

// Close dropdown on outside click or ESC
const onDocClick = (e) => {
  if (!dropdownOpen.value) return
  const el = suiteRef.value
  if (el && !el.contains(e.target)) dropdownOpen.value = false
}
const onKey = (e) => {
  if (e.key === 'Escape') dropdownOpen.value = false
}
onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})
</script>
