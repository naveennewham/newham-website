<template>
  <section id="apps" class="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 right-0 w-96 h-96 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-0 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 md:mb-20">
        <div class="flex justify-center mb-6">
          <img src="~/assets/ccorex/Corex_logo.png" alt="CCorex" class="h-10 md:h-14 w-auto brightness-0 invert opacity-80" />
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            Four Powerful Apps
          </span>
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Each tool is powerful standalone, but together they create a seamless construction management ecosystem
        </p>
      </div>

      <!-- Apps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <!-- DeepCost -->
        <div class="animate-fade-in-up" style="animation-delay: 0.1s">
          <SubAppCard
            name="DeepCost"
            subtitle="AI-Powered Cost Estimation"
            description="Revolutionize MEP cost estimation with AI-driven accuracy and speed"
            :logo="`require('~/assets/Deepcost_Logo.png')`"
            :features="[
              'MEP Cost Estimation',
              'AI-Powered Accuracy (95%+)',
              'Multi-discipline Support',
              'Regulatory Compliance'
            ]"
            link="/ccorex/deepcost"
          />
        </div>

        <!-- DeepTrack -->
        <div class="animate-fade-in-up" style="animation-delay: 0.2s">
          <SubAppCard
            name="DeepTrack"
            subtitle="Smart Budget Management"
            description="Real-time project budgeting and PO management for complete cost control"
            :logo="`require('~/assets/Deepcost_Logo.png')`"
            :features="[
              'Real-time Budget Tracking',
              'PO Management',
              'Spend Visibility',
              'Cost Control Dashboard'
            ]"
            link="/ccorex/deeptrack"
          />
        </div>

        <!-- DeepHR -->
        <div class="animate-fade-in-up" style="animation-delay: 0.3s">
          <SubAppCard
            name="DeepHR"
            subtitle="Unified Workforce Management"
            description="Comprehensive HR management solution designed for construction teams"
            :logo="`require('~/assets/DeepHR_Logo.svg')`"
            :features="[
              'Workforce Planning',
              'Attendance & Time Tracking',
              'Compliance Management',
              'Labor Cost Optimization'
            ]"
            link="/ccorex/deephr"
          />
        </div>

        <!-- DeepPlanAI -->
        <div class="animate-fade-in-up" style="animation-delay: 0.4s">
          <SubAppCard
            name="DeepPlanAI"
            subtitle="AI-Enabled Takeoff & Planning"
            description="Lightning-fast digital takeoffs powered by AI for accurate estimations"
            :logo="`require('~/assets/DeepPlanAI_Logo.svg')`"
            :features="[
              'Fast Area & Perimeter Measurement',
              'Automated Quantity Takeoff',
              'Schedule Extraction',
              'Integration with DeepCost'
            ]"
            link="/ccorex/deepplan-ai"
          />
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-20 pt-20 border-t border-cyan-500/20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="p-6">
            <div class="text-4xl font-bold text-cyan-400 mb-2">4</div>
            <p class="text-gray-300">Integrated Solutions</p>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-cyan-400 mb-2">100%</div>
            <p class="text-gray-300">Data Synchronization</p>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <p class="text-gray-300">Scalable Growth</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SubAppCard from './SubAppCard.vue'
</script>

<style scoped>
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

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}
</style>
