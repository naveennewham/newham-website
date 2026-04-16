<template>
  <div class="min-h-screen bg-slate-900">
    <Head>
      <Title>DeepPlanAI - AI-Powered Takeoff & Planning Tool | CCorex</Title>
      <Meta
        name="description"
        content="DeepPlanAI: AI-enabled digital takeoff and planning tool. Fast measurements, automated quantity extraction, and schedule takeoff for accurate project planning."
      />
    </Head>

    <!-- Hero Section -->
    <section class="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-8 flex justify-center">
          <img src="~/assets/DeepPlanAI_Logo.svg" alt="DeepPlanAI" class="w-32 h-32 drop-shadow-lg" />
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            DeepPlanAI
          </span>
        </h1>

        <p class="text-2xl text-gray-300 mb-4 font-semibold">AI-Powered Takeoff & Planning</p>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Lightning-fast digital takeoffs powered by AI. Capture measurements, extract quantities, and plan projects in minutes instead of days.
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
            <div class="text-3xl font-bold text-cyan-400 mb-2">40%</div>
            <p class="text-sm text-gray-400">Faster Takeoffs</p>
          </div>
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">99%</div>
            <p class="text-sm text-gray-400">Accuracy</p>
          </div>
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">AI</div>
            <p class="text-sm text-gray-400">Powered</p>
          </div>
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">3x</div>
            <p class="text-sm text-gray-400">Faster Quotes</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features Section -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            Powerful Takeoff Capabilities
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="feature in features" :key="feature.title" class="p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all glass-panel">
            <div class="text-4xl mb-4"><i :class="feature.icon"></i></div>
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
            Why Choose DeepPlanAI?
          </span>
        </h2>

        <div class="space-y-6">
          <div v-for="(benefit, index) in benefits" :key="index" class="flex gap-6 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all glass-panel">
            <div class="text-4xl flex-shrink-0"><i :class="benefit.icon"></i></div>
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
            <div class="text-5xl mb-4"><i class="mdi mdi-ruler-square"></i></div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">To DeepCost</h3>
            <p class="text-gray-400">Automatic cost estimation from your takeoff data</p>
          </div>
          <div class="p-8 rounded-xl border border-cyan-500/30 text-center glass-panel">
            <div class="text-5xl mb-4"><i class="fa-solid fa-chart-bar"></i></div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">To DeepTrack</h3>
            <p class="text-gray-400">Budget planning and PO management integration</p>
          </div>
          <div class="p-8 rounded-xl border border-cyan-500/30 text-center glass-panel">
            <div class="text-5xl mb-4"><i class="fa-solid fa-users"></i></div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">To DeepHR</h3>
            <p class="text-gray-400">Workforce planning based on project schedule</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Ready to Accelerate Your Takeoffs?
        </h2>
        <p class="text-xl text-gray-300 mb-8">
          Experience the power of AI-driven digital takeoffs with DeepPlanAI
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
            to="/ccorex/deephr"
            class="px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all"
          >
            DeepHR
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
  title: 'DeepPlanAI - AI-Powered Takeoff Tool | CCorex'
})

const features = ref([
  {
    icon: 'mdi mdi-ruler',
    title: 'Fast Area & Perimeter Measurement',
    description: 'Measure areas and perimeters instantly with AI-powered precision. No more manual calculations.'
  },
  {
    icon: 'fa-solid fa-chart-bar',
    title: 'Automated Quantity Takeoff',
    description: 'Automatically extract quantities for materials, labor, and equipment based on your drawings.'
  },
  {
    icon: 'fa-solid fa-calendar',
    title: 'Schedule Extraction',
    description: 'Extract critical path information and create project schedules from construction drawings.'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Lightning-Fast Processing',
    description: 'Process drawings in minutes instead of hours. Handle complex multi-page PDFs effortlessly.'
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: '99% Accuracy',
    description: 'Industry-leading accuracy with AI validation and quality checks.'
  },
  {
    icon: 'fa-solid fa-arrows-rotate',
    title: 'DeepCost Integration',
    description: 'Send takeoffs directly to DeepCost for instant cost estimation.'
  }
])

const benefits = ref([
  {
    icon: 'fa-solid fa-clock',
    title: '40% Faster Takeoffs',
    description: 'Reduce estimation time from days to hours. Generate accurate quotes in minutes.'
  },
  {
    icon: 'fa-solid fa-coins',
    title: 'Higher Profit Margins',
    description: 'Accurate takeoffs mean more competitive bids and better project profitability.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Competitive Advantage',
    description: 'Win more bids by providing faster quotes without sacrificing accuracy.'
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'AI Learning',
    description: 'Our AI improves with every takeoff, learning your specific requirements and preferences.'
  },
  {
    icon: 'fa-solid fa-lock',
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security with compliance certifications and data privacy protection.'
  },
  {
    icon: 'fa-solid fa-globe',
    title: 'Global Support',
    description: 'Support for multiple regions, currencies, and building standards.'
  }
])
</script>

<style scoped>
.glass-panel {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
}
</style>
