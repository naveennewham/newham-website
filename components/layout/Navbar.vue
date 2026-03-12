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
        <div class="relative group">
          <NuxtLink to="/ccorex" class="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-1">
            CCorex
            <svg class="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </NuxtLink>

          <!-- Dropdown Menu -->
          <div class="absolute left-0 mt-0 w-48 glass-panel rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <NuxtLink to="/ccorex" class="block px-4 py-3 text-gray-300 hover:text-cyan-400 border-b border-gray-700/50 font-semibold">
              CCorex Overview
            </NuxtLink>
            <NuxtLink to="/ccorex/deepcost" class="block px-4 py-3 text-gray-300 hover:text-cyan-400 border-b border-gray-700/50">
              ↳ DeepCost
            </NuxtLink>
            <NuxtLink to="/ccorex/deeptrack" class="block px-4 py-3 text-gray-300 hover:text-cyan-400 border-b border-gray-700/50">
              ↳ DeepTrack
            </NuxtLink>
            <NuxtLink to="/ccorex/deephr" class="block px-4 py-3 text-gray-300 hover:text-cyan-400 border-b border-gray-700/50">
              ↳ DeepHR
            </NuxtLink>
            <NuxtLink to="/ccorex/deepplan-ai" class="block px-4 py-3 text-gray-300 hover:text-cyan-400 rounded-b-lg">
              ↳ DeepPlanAI
            </NuxtLink>
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
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  // Temporarily hiding Industries and Case Studies from navigation
  // { name: 'Industries', path: '/industries' },
  // { name: 'Case Studies', path: '/case-studies' }
];
</script>
