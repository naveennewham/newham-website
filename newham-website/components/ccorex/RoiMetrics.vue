<template>
  <section class="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-40 right-0 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-40 left-0 w-96 h-96 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>

      <!-- Grid Pattern -->
      <svg class="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="metric-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#metric-grid)" />
      </svg>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 md:mb-20">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            ROI & Success Metrics
          </span>
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Real results from construction teams using CCorex
        </p>
      </div>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Metric Card 1 -->
        <div
          v-for="(metric, index) in metrics"
          :key="index"
          class="group relative p-10 md:p-12 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 glass-panel cursor-default hover:shadow-lg hover:shadow-cyan-500/20"
          style="animation: fade-in-up 0.8s ease-out forwards; animation-delay: ${index * 0.15}s; opacity: 0;"
        >
          <!-- Corner Accent -->
          <div
            class="absolute top-0 right-0 w-32 h-32 rounded-bl-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
            :style="`background: ${metric.color};`"
          ></div>

          <!-- Icon -->
          <div
            class="w-20 h-20 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
            :style="`background: ${metric.color}; opacity: 0.15;`"
          >
            <i :class="metric.icon" class="text-3xl" :style="`color: ${metric.color};`"></i>
          </div>

          <!-- Value -->
          <div class="mb-2">
            <span class="text-5xl md:text-6xl font-bold" :style="`color: ${metric.color};`">
              <AnimatedCounter
                v-if="isVisible"
                :end-value="metric.value"
                :duration="2000"
                :suffix="metric.suffix"
              />
              <span v-else>{{ metric.value }}{{ metric.suffix }}</span>
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {{ metric.title }}
          </h3>

          <!-- Description -->
          <p class="text-gray-400 text-sm leading-relaxed">
            {{ metric.description }}
          </p>
        </div>
      </div>

      <!-- Key Achievements Section -->
      <div class="mt-20 pt-20 border-t border-cyan-500/30">
        <h3 class="text-3xl md:text-4xl font-bold text-center mb-12">
          <span class="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Trusted by Leading Construction Firms
          </span>
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Achievement 1 -->
          <div class="text-center p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
            <div class="text-5xl font-bold text-cyan-400 mb-3">2K+</div>
            <p class="text-gray-300 font-semibold mb-2">Active Projects</p>
            <p class="text-sm text-gray-400">Managed across regions</p>
          </div>

          <!-- Achievement 2 -->
          <div class="text-center p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
            <div class="text-5xl font-bold text-cyan-400 mb-3">$5B+</div>
            <p class="text-gray-300 font-semibold mb-2">Estimated Value</p>
            <p class="text-sm text-gray-400">Managed through CCorex</p>
          </div>

          <!-- Achievement 3 -->
          <div class="text-center p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
            <div class="text-5xl font-bold text-cyan-400 mb-3">98%</div>
            <p class="text-gray-300 font-semibold mb-2">Satisfaction</p>
            <p class="text-sm text-gray-400">From active users</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AnimatedCounter from './AnimatedCounter.vue'

const isVisible = ref(false)

const metrics = ref([
  {
    icon: 'fa-solid fa-rocket',
    value: 40,
    suffix: '%',
    title: 'Faster Takeoffs',
    description: 'DeepPlanAI reduces estimation time significantly compared to manual methods',
    color: '#06B6D4'
  },
  {
    icon: 'fa-solid fa-bullseye',
    value: 95,
    suffix: '%',
    title: 'Accuracy Rate',
    description: 'Industry-leading accuracy in cost estimation with DeepCost AI',
    color: '#14B8A6'
  },
  {
    icon: 'fa-solid fa-coins',
    value: 35,
    suffix: '%',
    title: 'Cost Savings',
    description: 'Average reduction in project overhead through unified management',
    color: '#06B6D4'
  },
  {
    icon: 'fa-solid fa-clock',
    value: 30,
    suffix: '+hrs',
    title: 'Time Saved Monthly',
    description: 'Per team member by eliminating redundant data entry tasks',
    color: '#14B8A6'
  }
])

onMounted(() => {
  // Trigger animation when component is mounted
  // In production, use Intersection Observer for scroll trigger
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})
</script>

<style scoped>
.glass-panel {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
