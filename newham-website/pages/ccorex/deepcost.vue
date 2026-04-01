<template>
  <div class="min-h-screen bg-slate-900">
    <Head>
      <Title>DeepCost - AI-Powered MEP Cost Estimation | CCorex</Title>
      <Meta
        name="description"
        content="DeepCost: AI-powered MEP cost estimation platform. 95% accuracy for ACMV, Fire Fighting, ELV, and A&A systems. Part of CCorex suite."
      />
    </Head>

    <!-- Hero Section -->
    <section class="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-8 flex justify-center">
          <img src="~/assets/Deepcost_Logo.png" alt="DeepCost" class="w-32 h-32 drop-shadow-lg" />
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            DeepCost
          </span>
        </h1>

        <p class="text-2xl text-gray-300 mb-4 font-semibold">AI-Powered MEP Cost Estimation</p>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Revolutionize your MEP cost estimation with AI-driven accuracy. 95%+ accuracy for ACMV, Fire Fighting, ELV, and A&A systems.
        </p>

        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8">
          <img src="~/assets/ccorex/Corex_logo.png" alt="CCorex" class="h-5 w-auto brightness-0 invert" />
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
            <div class="text-3xl font-bold text-cyan-400 mb-2">95%</div>
            <p class="text-sm text-gray-400">Accuracy Rate</p>
          </div>
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">40M+</div>
            <p class="text-sm text-gray-400">Items Estimated</p>
          </div>
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">$500M+</div>
            <p class="text-sm text-gray-400">Total Estimates</p>
          </div>
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">4</div>
            <p class="text-sm text-gray-400">Specializations</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            Specialized for MEP Systems
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="useCase in useCases" :key="useCase.title" class="p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all glass-panel hover:shadow-lg hover:shadow-cyan-500/10">
            <div class="text-5xl mb-4">{{ useCase.icon }}</div>
            <h3 class="text-xl font-bold text-white mb-3">{{ useCase.title }}</h3>
            <p class="text-gray-400 text-sm">{{ useCase.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features Section -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            Powerful Estimation Features
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

    <!-- Compliance Section -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Regulatory Compliance
          </span>
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="compliance in complianceBadges" :key="compliance" class="p-6 rounded-xl border border-cyan-500/20 text-center glass-panel">
            <div class="text-3xl mb-3">✓</div>
            <p class="text-cyan-400 font-semibold">{{ compliance }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Section -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            Integrates with CCorex
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8 rounded-xl border border-cyan-500/30 text-center glass-panel">
            <div class="text-5xl mb-4">📐</div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">From DeepPlanAI</h3>
            <p class="text-gray-400">Automatic cost estimation from takeoff data</p>
          </div>
          <div class="p-8 rounded-xl border border-cyan-500/30 text-center glass-panel">
            <div class="text-5xl mb-4">📊</div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">To DeepTrack</h3>
            <p class="text-gray-400">Budget creation and tracking integration</p>
          </div>
          <div class="p-8 rounded-xl border border-cyan-500/30 text-center glass-panel">
            <div class="text-5xl mb-4">👥</div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">With DeepHR</h3>
            <p class="text-gray-400">Labor cost allocation and planning</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Why Contractors Choose DeepCost
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

    <!-- CTA Section -->
    <section id="cta" class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Win More Bids with Accurate Estimates
        </h2>
        <p class="text-xl text-gray-300 mb-8">
          Experience the accuracy and speed of AI-powered MEP cost estimation
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
            to="/ccorex/deeptrack"
            class="px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all"
          >
            DeepTrack
          </NuxtLink>
          <NuxtLink
            to="/ccorex/deephr"
            class="px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all"
          >
            DeepHR
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
            <img src="~/assets/ccorex/Corex_logo.png" alt="CCorex" class="h-4 w-auto brightness-0 invert" />
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
  title: 'DeepCost - AI-Powered MEP Estimation | CCorex'
})

const useCases = ref([
  {
    icon: '❄️',
    title: 'ACMV',
    description: 'Air-Conditioning & Mechanical Ventilation systems'
  },
  {
    icon: '🔥',
    title: 'Fire Fighting',
    description: 'Fire suppression and safety systems'
  },
  {
    icon: '🔌',
    title: 'ELV',
    description: 'Extra Low Voltage and electrical solutions'
  },
  {
    icon: '🧱',
    title: 'A&A',
    description: 'Additions & Alterations projects'
  }
])

const features = ref([
  {
    icon: '🤖',
    title: 'AI-Powered Accuracy',
    description: '95%+ accuracy in cost estimation using machine learning and industry data'
  },
  {
    icon: '⚡',
    title: 'Lightning-Fast',
    description: 'Generate estimates in minutes instead of hours or days'
  },
  {
    icon: '📊',
    title: 'Comprehensive Database',
    description: '40M+ items in our construction cost database'
  },
  {
    icon: '🎯',
    title: 'Discipline-Specific',
    description: 'Specialized algorithms for ACMV, Fire, ELV, and A&A systems'
  },
  {
    icon: '🔄',
    title: 'Real-Time Updates',
    description: 'Cost database updated daily with market rates'
  },
  {
    icon: '📈',
    title: 'Collaboration Tools',
    description: 'Share estimates and collaborate with team members in real-time'
  }
])

const complianceBadges = ref(['BCA', 'IMDA', 'LTA', 'PUB', 'SCDF', 'ISO 27001'])

const benefits = ref([
  {
    icon: '💪',
    title: 'Win More Bids',
    description: 'Competitive and accurate quotes help you win more projects'
  },
  {
    icon: '⏰',
    title: 'Save Time',
    description: 'Reduce estimation time from days to hours'
  },
  {
    icon: '💰',
    title: 'Better Margins',
    description: 'Accurate estimates lead to better profit margins'
  },
  {
    icon: '🎓',
    title: 'Learn & Improve',
    description: 'AI insights help you understand cost drivers'
  },
  {
    icon: '🔐',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime'
  },
  {
    icon: '🌍',
    title: 'Global Coverage',
    description: 'Supports multiple regions and building standards'
  }
])
</script>

<style scoped>
.glass-panel {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
}
</style>
