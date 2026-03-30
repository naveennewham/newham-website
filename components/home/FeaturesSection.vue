<template>
  <section class="features-section section-padding relative overflow-hidden">
    <!-- Geometric Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      
      <!-- Diagonal Stripes -->
      <div class="absolute inset-0 opacity-5">
        <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#005D6C,#005D6C_1px,transparent_1px,transparent_10px)]">
        </div>
      </div>
      
      <!-- Geometric Shapes -->
      <div class="absolute top-20 right-20 w-40 h-40 border-2 border-primary-500/10 transform rotate-45"></div>
      <div class="absolute bottom-40 left-20 w-64 h-64 border-2 border-secondary-500/10 transform -rotate-12"></div>
      
      <!-- Diagonal Lines -->
      <div class="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-800/5 to-transparent skew-y-12"></div>
      <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary-800/5 to-transparent -skew-y-12"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header with Geometric Design -->
      <div class="text-center mb-14 relative">
        <!-- Geometric accent elements -->
        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500 skew-x-12"></div>
        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 translate-x-12 w-10 h-1 bg-secondary-500 -skew-x-12"></div>
        
        <h2 class="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          <span class="gradient-text">Everything connected</span>
          <span class="block text-white mt-2">for your construction workflow</span>
          <!-- Underline with geometric design -->
          <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-500 transform skew-x-12"></span>
          <span class="absolute -bottom-2 right-0 w-1/3 h-1 bg-secondary-500 transform -skew-x-12"></span>
        </h2>
        
        <p class="text-gray-400 max-w-3xl mx-auto mt-6">
          Instead of disconnected tools, CCorex keeps takeoffs, estimation, budget control, and workforce data in one place—so every team works from the same numbers.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="(benefit, index) in suiteBenefits" :key="index" class="glass-panel p-6 rounded-2xl relative overflow-hidden">
              <div class="absolute inset-0 z-0" :class="index % 2 === 0 ? 'ai-glow-radial-primary opacity-30' : 'ai-glow-radial-secondary opacity-30'"></div>
              <div class="relative z-10">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center"
                       :class="index % 2 === 0 ? 'bg-primary-900/50 text-primary-300' : 'bg-secondary-900/50 text-secondary-300'">
                    <component :is="benefit.icon" class="w-5 h-5" />
                  </div>
                  <div>
                    <h3 class="text-white font-semibold">{{ benefit.title }}</h3>
                    <p class="text-gray-400 text-sm mt-1">{{ benefit.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="glass-panel p-6 rounded-2xl relative overflow-hidden">
          <div class="absolute inset-0 z-0 ai-glow-radial-primary opacity-25"></div>
          <div class="relative z-10">
            <h3 class="text-white text-xl font-semibold">Built for every role</h3>
            <p class="text-gray-400 text-sm mt-2">From office to site—each role gets the right view and the same source of truth.</p>

            <div class="mt-6 space-y-3">
              <div v-for="(role, index) in roles" :key="index" class="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-white">
                  {{ role.badge }}
                </span>
                <div>
                  <div class="text-white font-semibold text-sm">{{ role.title }}</div>
                  <div class="text-gray-400 text-xs mt-0.5">{{ role.description }}</div>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <NuxtLink to="/ccorex" class="btn-primary w-full text-center">
                See CCorex Suite
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

// SVG Icons as render functions
const ProjectManagementIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>'
});

const SoftwareIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>'
});

const MobileIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>'
});

const CloudIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>'
});

const suiteBenefits = [
  {
    title: 'One source of truth',
    description: 'Quantities, costs, budgets, and workforce data stay connected across the suite.',
    icon: ProjectManagementIcon
  },
  {
    title: 'Faster pre-construction',
    description: 'Reduce turnaround time from drawings to takeoffs and detailed BOQs.',
    icon: SoftwareIcon
  },
  {
    title: 'Site-to-office visibility',
    description: 'Track progress and costs with clear, role-based dashboards and reports.',
    icon: MobileIcon
  },
  {
    title: 'Scales with your projects',
    description: 'Standardize processes across teams, packages, and regions without losing control.',
    icon: CloudIcon
  }
]

const roles = [
  { badge: 'QS', title: 'QS & Estimation', description: 'Takeoffs, BOQs, rate build-up, and revisions.' },
  { badge: 'PM', title: 'Project & Site teams', description: 'Work packages, reporting, and coordination.' },
  { badge: 'CM', title: 'Commercial & Finance', description: 'Commitments, budget control, and variance tracking.' },
  { badge: 'HR', title: 'HR & Compliance', description: 'Workforce attendance and labor cost visibility.' }
]
</script>
