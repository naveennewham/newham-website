<template>
  <div class="min-h-screen bg-slate-900">
    <Head>
      <Title>DeepHR - Workforce Management for Construction | CCorex</Title>
      <Meta
        name="description"
        content="DeepHR: Comprehensive HR management solution for construction. Workforce planning, attendance tracking, compliance, and labor cost optimization."
      />
    </Head>

    <!-- Hero Section -->
    <section class="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-8 flex justify-center">
          <img src="~/assets/DeepHR_Logo.svg" alt="DeepHR" class="w-32 h-32 drop-shadow-lg" />
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            DeepHR
          </span>
        </h1>

        <p class="text-2xl text-gray-300 mb-4 font-semibold">Unified Workforce Management</p>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Comprehensive HR management solution designed specifically for construction teams. Manage workforce planning, attendance, compliance, and labor costs in one place.
        </p>

        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8">
          <img src="~/assets/CCorex_Logo.svg" alt="CCorex" class="h-5 w-auto" />
          <span class="text-cyan-400 font-semibold">Part of CCorex</span>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <NuxtLink
            to="/ccorex"
            class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Explore CCorex
          </NuxtLink>
          <a
            href="#cta"
            class="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">50%</div>
            <p class="text-sm text-gray-400">Less Admin Work</p>
          </div>
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">100%</div>
            <p class="text-sm text-gray-400">Compliance</p>
          </div>
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">Real-Time</div>
            <p class="text-sm text-gray-400">Visibility</p>
          </div>
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">Multi-Site</div>
            <p class="text-sm text-gray-400">Management</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features Section -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            Complete HR Management Solution
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="feature in features" :key="feature.title" class="p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all glass-panel">
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-2xl font-bold text-white mb-3">{{ feature.title }}</h3>
            <p class="text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Why Choose DeepHR?
          </span>
        </h2>

        <div class="space-y-6">
          <div v-for="(benefit, index) in benefits" :key="index" class="flex gap-6 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all glass-panel">
            <div class="text-4xl flex-shrink-0">{{ benefit.icon }}</div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">{{ benefit.title }}</h3>
              <p class="text-gray-400">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Section -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            Integrates Seamlessly with CCorex
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="p-8 rounded-xl border border-cyan-500/30 text-center glass-panel">
            <div class="text-5xl mb-4">💰</div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">With DeepCost</h3>
            <p class="text-gray-400">Labor cost allocation and budget tracking</p>
          </div>
          <div class="p-8 rounded-xl border border-cyan-500/30 text-center glass-panel">
            <div class="text-5xl mb-4">📊</div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">With DeepTrack</h3>
            <p class="text-gray-400">Project schedule and resource planning</p>
          </div>
          <div class="p-8 rounded-xl border border-cyan-500/30 text-center glass-panel">
            <div class="text-5xl mb-4">📐</div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">With DeepPlanAI</h3>
            <p class="text-gray-400">Workforce requirements based on takeoffs</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Built for Construction Teams
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="useCase in useCases" :key="useCase" class="p-8 rounded-xl border border-cyan-500/20 glass-panel">
            <p class="text-gray-300">{{ useCase }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Simplify Workforce Management
        </h2>
        <p class="text-xl text-gray-300 mb-8">
          Let DeepHR handle HR operations so you can focus on project execution
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Schedule Demo
          </a>
          <NuxtLink
            to="/pricing"
            class="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all"
          >
            View Pricing
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Back to CCorex -->
    <section class="relative w-full py-12 bg-slate-900 border-t border-cyan-500/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-gray-400 mb-6">Explore Other CCorex Apps</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/ccorex/deepcost"
            class="px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all"
          >
            DeepCost
          </NuxtLink>
          <NuxtLink
            to="/ccorex/deeptrack"
            class="px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all"
          >
            DeepTrack
          </NuxtLink>
          <NuxtLink
            to="/ccorex/deepplan-ai"
            class="px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all"
          >
            DeepPlanAI
          </NuxtLink>
          <NuxtLink
            to="/ccorex"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 transition-all"
          >
            <img src="~/assets/CCorex_Logo.svg" alt="CCorex" class="h-4 w-auto" />
            Back to CCorex
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'DeepHR - Workforce Management | CCorex'
})

const features = ref([
  {
    icon: '👥',
    title: 'Workforce Planning',
    description: 'Plan and allocate resources across multiple projects and sites with real-time visibility.'
  },
  {
    icon: '⏰',
    title: 'Attendance & Time Tracking',
    description: 'Mobile-enabled time tracking with biometric support and geolocation verification.'
  },
  {
    icon: '📋',
    title: 'Compliance Management',
    description: 'Ensure compliance with labor laws, certifications, and safety requirements.'
  },
  {
    icon: '💼',
    title: 'Payroll Integration',
    description: 'Seamless integration with payroll systems for accurate wage calculations.'
  },
  {
    icon: '📊',
    title: 'Performance Tracking',
    description: 'Track productivity metrics and performance across teams and projects.'
  },
  {
    icon: '🎓',
    title: 'Training & Certifications',
    description: 'Manage training records, certifications, and skill development programs.'
  }
])

const benefits = ref([
  {
    icon: '⏱️',
    title: '50% Less HR Admin Work',
    description: 'Automate routine HR tasks and free up time for strategic planning.'
  },
  {
    icon: '✅',
    title: 'Full Regulatory Compliance',
    description: 'Stay compliant with all local labor laws and safety regulations.'
  },
  {
    icon: '💡',
    title: 'Better Team Visibility',
    description: 'Real-time dashboards show workforce availability and allocation.'
  },
  {
    icon: '📈',
    title: 'Improved Productivity',
    description: 'Data-driven insights help optimize team performance and efficiency.'
  },
  {
    icon: '🛡️',
    title: 'Risk Mitigation',
    description: 'Reduce compliance risks and labor disputes with proper documentation.'
  },
  {
    icon: '💰',
    title: 'Cost Optimization',
    description: 'Better labor cost control and resource utilization across projects.'
  }
])

const useCases = ref([
  '✓ Multi-site workforce management across regions',
  '✓ Subcontractor and labor crew scheduling',
  '✓ Training and certification compliance tracking',
  '✓ Real-time labor cost tracking and forecasting',
  '✓ Equipment and crew allocation optimization',
  '✓ Safety compliance and incident reporting'
])
</script>

<style scoped>
.glass-panel {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
}
</style>
