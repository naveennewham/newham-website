<template>
  <section class="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5"></div>
      <div class="absolute top-0 right-1/3 w-80 h-80 bg-cyan-500 opacity-20 rounded-full blur-2xl"></div>
      <div class="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-500 opacity-20 rounded-full blur-2xl"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span class="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Seamless Integration
          </span>
        </h2>
        <p class="text-xl text-gray-200 max-w-2xl mx-auto">
          See how CCorex apps work together to streamline your entire project lifecycle
        </p>
      </div>

      <!-- Workflow Visualization -->
      <div class="overflow-x-auto pb-8">
        <div class="relative mx-auto max-w-5xl rounded-3xl bg-slate-900/60 backdrop-blur-sm ring-1 ring-white/10 shadow-2xl px-6 py-10 md:px-10 md:py-12">
          <div class="flex gap-4 md:gap-6 min-w-max md:min-w-full justify-center">
          <!-- Step 1: DeepPlanAI -->
          <div class="flex flex-col items-center animate-fade-in" style="animation-delay: 0.1s">
            <div
              class="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center text-4xl md:text-5xl mb-4 transform hover:scale-110 transition-transform duration-300"
              style="background: linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%); opacity: 0.2; border: 2px solid #06B6D4;"
            >
              <i class="fa-solid fa-brain text-cyan-400"></i>
            </div>
            <h3 class="text-lg md:text-xl font-bold text-cyan-400 mb-2 text-center">DeepPlanAI</h3>
            <p class="text-sm text-gray-400 text-center max-w-xs">Digital Takeoffs<br/>& Planning</p>
          </div>

          <!-- Arrow 1 -->
          <div class="flex items-center animate-fade-in" style="animation-delay: 0.2s">
            <i class="fa-solid fa-chevron-right text-cyan-400 text-3xl md:text-4xl"></i>
          </div>

          <!-- Step 2: DeepCost -->
          <div class="flex flex-col items-center animate-fade-in" style="animation-delay: 0.3s">
            <div
              class="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center text-4xl md:text-5xl mb-4 transform hover:scale-110 transition-transform duration-300"
              style="background: linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%); opacity: 0.2; border: 2px solid #06B6D4;"
            >
              <i class="fa-solid fa-coins text-cyan-400"></i>
            </div>
            <h3 class="text-lg md:text-xl font-bold text-cyan-400 mb-2 text-center">DeepCost</h3>
            <p class="text-sm text-gray-400 text-center max-w-xs">AI-Powered<br/>Cost Estimation</p>
          </div>

          <!-- Arrow 2 -->
          <div class="flex items-center animate-fade-in" style="animation-delay: 0.4s">
            <i class="fa-solid fa-chevron-right text-cyan-400 text-3xl md:text-4xl"></i>
          </div>

          <!-- Step 3: DeepTrack -->
          <div class="flex flex-col items-center animate-fade-in" style="animation-delay: 0.5s">
            <div
              class="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center text-4xl md:text-5xl mb-4 transform hover:scale-110 transition-transform duration-300"
              style="background: linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%); opacity: 0.2; border: 2px solid #06B6D4;"
            >
              <i class="fa-solid fa-chart-line text-cyan-400"></i>
            </div>
            <h3 class="text-lg md:text-xl font-bold text-cyan-400 mb-2 text-center">DeepTrack</h3>
            <p class="text-sm text-gray-400 text-center max-w-xs">Budget & PO<br/>Management</p>
          </div>

          <!-- Arrow 3 -->
          <div class="flex items-center animate-fade-in" style="animation-delay: 0.6s">
            <i class="fa-solid fa-chevron-right text-cyan-400 text-3xl md:text-4xl"></i>
          </div>

          <!-- Step 4: DeepHR -->
          <div class="flex flex-col items-center animate-fade-in" style="animation-delay: 0.7s">
            <div
              class="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center text-4xl md:text-5xl mb-4 transform hover:scale-110 transition-transform duration-300"
              style="background: linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%); opacity: 0.2; border: 2px solid #06B6D4;"
            >
              <i class="fa-solid fa-users text-cyan-400"></i>
            </div>
            <h3 class="text-lg md:text-xl font-bold text-cyan-400 mb-2 text-center">DeepHR</h3>
            <p class="text-sm text-gray-400 text-center max-w-xs">Workforce<br/>Management</p>
          </div>
          </div>
        </div>
      </div>

      <!-- Detailed Steps -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10 glass-panel"
          style="animation: fade-in-up 0.8s ease-out forwards; animation-delay: ${index * 0.1}s; opacity: 0;"
        >
          <div class="flex items-center gap-3 mb-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-sm">
              {{ index + 1 }}
            </span>
            <h4 class="font-bold text-white">{{ step.title }}</h4>
          </div>
          <p class="text-sm text-gray-400">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const steps = ref([
  {
    title: 'Plan',
    description: 'Use DeepPlanAI to quickly capture digital takeoffs and project schedules with AI-powered accuracy'
  },
  {
    title: 'Estimate',
    description: 'DeepCost automatically generates accurate cost estimates based on your takeoff data'
  },
  {
    title: 'Track',
    description: 'DeepTrack monitors budgets and purchase orders in real-time as the project progresses'
  },
  {
    title: 'Manage',
    description: 'DeepHR handles workforce planning and ensures compliance throughout the project lifecycle'
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
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
</style>
