<template>
  <section class="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      <!-- Geometric Shapes -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>

      <!-- Animated Grid Pattern -->
      <svg class="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <!-- Diagonal Lines Animation -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute w-96 h-96 border-l-2 border-t-2 border-cyan-400 transform rotate-45" style="top: 10%; left: 5%;"></div>
        <div class="absolute w-64 h-64 border-r-2 border-b-2 border-cyan-400 transform -rotate-45" style="bottom: 10%; right: 5%;"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- CCorex Logo -->
      <div class="mb-8 flex justify-center animate-fade-in">
        <img src="~/assets/ccorex/Corex_logo.png" alt="CCorex" class="h-14 md:h-20 w-auto brightness-0 invert drop-shadow-lg" />
      </div>

      <!-- Main Heading -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style="animation-delay: 0.2s">
        <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
          Unified Construction
        </span>
        <br />
        <span class="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Management Platform
        </span>
      </h1>

      <!-- Subheading -->
      <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in" style="animation-delay: 0.4s">
        Manage costs, schedules, resources, and takeoffs in one integrated suite.
        <span class="block text-cyan-400 font-semibold mt-2">Four powerful tools. One platform.</span>
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style="animation-delay: 0.6s">
        <button
          @click="openCCorexSite"
          class="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
        >
          Explore CCorex Site
          <span class="inline-block transform group-hover:translate-x-1 transition-transform">↗</span>
        </button>

        <a
          href="#cta"
          class="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
        >
          Get Started
        </a>
      </div>

      <!-- Statistics Pills -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in" style="animation-delay: 0.8s">
        <div class="glass-panel p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
          <div class="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">40%</div>
          <p class="text-sm text-gray-400">Faster Takeoffs</p>
        </div>
        <div class="glass-panel p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
          <div class="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">95%</div>
          <p class="text-sm text-gray-400">Accuracy</p>
        </div>
        <div class="glass-panel p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
          <div class="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">1</div>
          <p class="text-sm text-gray-400">Unified Platform</p>
        </div>
        <div class="glass-panel p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
          <div class="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">4</div>
          <p class="text-sm text-gray-400">Powerful Apps</p>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
      <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()

const openCCorexSite = () => {
  const baseUrl = config.public.ccorexBaseUrl || 'http://127.0.0.1:3100'
  window.open(baseUrl, '_blank', 'noopener')
}
</script>

<style scoped>
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

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
  opacity: 0;
}

.glass-panel {
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(10px);
}
</style>
