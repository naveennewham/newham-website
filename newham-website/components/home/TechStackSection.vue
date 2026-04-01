<template>
  <section class="tech-stack-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-800"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(0,135,150,0.18),transparent_35%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(1,172,200,0.12),transparent_40%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">How CCorex works</span>
          <span class="block text-white mt-2">from drawing to delivery</span>
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto">
          A Zoho-One-style suite for construction: each app is focused, but everything stays connected.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="glass-panel p-8 rounded-2xl relative overflow-hidden">
          <div class="absolute inset-0 z-0 ai-glow-radial-primary opacity-25"></div>
          <div class="relative z-10">
            <h3 class="text-2xl font-semibold text-white">A simple 4-step flow</h3>
            <p class="text-gray-400 mt-2">CCorex connects your core construction processes—without forcing your teams into complex workflows.</p>

            <div class="mt-8 space-y-4">
              <div v-for="(step, index) in steps" :key="index" class="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                     :class="index % 2 === 0 ? 'bg-primary-900/50 text-primary-200 border border-primary-500/20' : 'bg-secondary-900/50 text-secondary-200 border border-secondary-500/20'">
                  {{ index + 1 }}
                </div>
                <div>
                  <div class="text-white font-semibold">{{ step.title }}</div>
                  <div class="text-gray-400 text-sm mt-1">{{ step.description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="glass-panel p-8 rounded-2xl relative overflow-hidden">
          <div class="absolute inset-0 z-0 ai-glow-radial-secondary opacity-25"></div>
          <div class="relative z-10">
            <h3 class="text-2xl font-semibold text-white">Designed to fit your process</h3>
            <p class="text-gray-400 mt-2">Export, share, and report with formats your teams already use—while maintaining control.</p>

            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="(capability, index) in capabilities" :key="index" class="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center"
                       :class="index % 2 === 0 ? 'bg-primary-900/50 text-primary-200' : 'bg-secondary-900/50 text-secondary-200'">
                    <component :is="capability.icon" class="w-5 h-5" />
                  </div>
                  <div>
                    <div class="text-white font-semibold">{{ capability.title }}</div>
                    <div class="text-gray-400 text-sm mt-1">{{ capability.description }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/ccorex" class="btn-primary text-center">Explore the suite</NuxtLink>
              <NuxtLink to="/pricing" class="btn-outline text-center">View pricing</NuxtLink>
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
const FrontendIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>'
});

const BackendIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>'
});

const CloudIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>'
});

const steps = [
  {
    title: 'Extract quantities',
    description: 'Turn drawings into measurable quantities with DeepPlanAI.'
  },
  {
    title: 'Estimate accurately',
    description: 'Build BOQs and estimates with DeepCost using consistent templates.'
  },
  {
    title: 'Control budgets',
    description: 'Track commitments, costs, and variances using DeepTrack.'
  },
  {
    title: 'Manage workforce',
    description: 'Monitor attendance and labor costs across sites with DeepHR.'
  }
]

const capabilities = [
  {
    title: 'Reports & exports',
    description: 'Generate clear outputs for stakeholders and approvals.',
    icon: BackendIcon
  },
  {
    title: 'Role-based access',
    description: 'Keep commercial data secure with controlled permissions.',
    icon: FrontendIcon
  },
  {
    title: 'Cloud-ready',
    description: 'Modern infrastructure for scale and reliability.',
    icon: CloudIcon
  },
  {
    title: 'Implementation support',
    description: 'Onboarding, templates, and process standardization.',
    icon: BackendIcon
  }
]
</script>
