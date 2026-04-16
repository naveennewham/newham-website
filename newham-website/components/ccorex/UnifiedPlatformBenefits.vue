<template>
  <section class="relative w-full py-12 md:py-20 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
    <div class="absolute inset-0 opacity-20">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="1" fill="#06B6D4" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          <span class="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Why Choose CCorex?
          </span>
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          More than the sum of its parts. Experience seamless integration and unified workflows.
        </p>
      </div>

      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="group relative p-5 rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 glass-panel hover:shadow-lg hover:shadow-cyan-500/20"
          style="animation: fade-in 0.8s ease-out forwards; animation-delay: ${index * 0.1}s; opacity: 0;"
        >
          <!-- Icon & Title Row -->
          <div class="flex items-start gap-3 mb-2">
            <div
              class="flex-shrink-0 text-2xl"
            >
              <i :class="benefit.icon" class="text-cyan-400"></i>
            </div>
            <h3 class="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
              {{ benefit.title }}
            </h3>
          </div>

          <!-- Description -->
          <p class="text-gray-400 text-xs leading-relaxed ml-8">
            {{ benefit.description }}
          </p>
        </div>
      </div>

      <!-- Bottom Section: Integration Highlight -->
      <div class="mt-8 pt-8 border-t border-cyan-500/30">
        <div
          class="glass-panel rounded-xl border border-cyan-500/30 p-6 md:p-10 text-center max-w-3xl mx-auto"
        >
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
            All Data
            <span class="text-cyan-400">Flows Together</span>
          </h3>
          <p class="text-gray-300 text-sm md:text-base mb-6">
            No more manual data entry. No more data silos. Seamless synchronization ensures every team member has
            real-time access to the latest project information across all tools.
          </p>

          <!-- Data Flow Visualization -->
          <div class="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <div class="flex-1 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30">
              <p class="font-semibold text-cyan-400">DeepPlanAI</p>
              <p class="text-sm text-gray-400">Takeoffs</p>
            </div>

            <i class="fa-solid fa-chevron-right text-cyan-400 rotate-90 md:rotate-0"></i>

            <div class="flex-1 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30">
              <p class="font-semibold text-cyan-400">DeepCost</p>
              <p class="text-sm text-gray-400">Estimation</p>
            </div>

            <i class="fa-solid fa-chevron-right text-cyan-400 rotate-90 md:rotate-0"></i>

            <div class="flex-1 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30">
              <p class="font-semibold text-cyan-400">DeepTrack</p>
              <p class="text-sm text-gray-400">Budgeting</p>
            </div>

            <i class="fa-solid fa-chevron-right text-cyan-400 rotate-90 md:rotate-0"></i>

            <div class="flex-1 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30">
              <p class="font-semibold text-cyan-400">DeepHR</p>
              <p class="text-sm text-gray-400">Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const benefits = ref([
  {
    icon: 'fa-solid fa-link',
    title: 'Seamless Integration',
    description: 'All tools are built to work together. Data flows automatically without manual entry or complex integrations.',
    color: '#06B6D4'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Real-Time Sync',
    description: 'Changes in one app instantly reflect across all others. Your entire team stays in sync in real-time.',
    color: '#14B8A6'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Unified Reporting',
    description: 'Single dashboard for all metrics. Track costs, schedules, resources, and performance in one place.',
    color: '#06B6D4'
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Single Sign-On',
    description: 'One login, access to all tools. Simplified authentication with enterprise-grade security.',
    color: '#14B8A6'
  },
  {
    icon: 'fa-solid fa-clock',
    title: 'Save Hours',
    description: 'Eliminate redundant data entry. Automate workflows. Boost team productivity by up to 40%.',
    color: '#06B6D4'
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'Scale Easily',
    description: 'Add new teams and projects instantly. CCorex grows with your business without complexity.',
    color: '#14B8A6'
  }
])
</script>

<style scoped>
.glass-panel {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
