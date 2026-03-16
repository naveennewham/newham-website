<template>
  <section class="products-section section-padding relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Unified Platform</span>
          <span class="block text-white mt-2">for Construction Management</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
          CCorex: One integrated platform with four powerful tools to manage your entire project lifecycle—from planning and estimation to budgeting and resource management.
        </p>
      </div>

      <!-- CCorex Hero Card -->
      <div class="max-w-5xl mx-auto mb-16">
        <NuxtLink to="/ccorex" class="group block">
          <div class="relative overflow-hidden rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 p-10 md:p-12 glass-panel hover:shadow-lg hover:shadow-cyan-500/20">
            <!-- Background -->
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 group-hover:from-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>

            <!-- Content -->
            <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div class="md:w-1/3 text-center md:text-left">
                <img src="~/assets/ccorex/Corex_logo.png" alt="CCorex" class="h-10 md:h-14 w-auto mx-auto md:mx-0 mb-4 brightness-0 invert" />
                <p class="text-gray-300 mb-4">
                  The complete construction management solution. Four integrated apps, one unified platform.
                </p>
                <div class="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                  Explore CCorex →
                </div>
              </div>

              <div class="md:w-2/3 grid grid-cols-2 gap-4">
                <div class="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  <div class="text-3xl mb-2">📐</div>
                  <p class="font-semibold text-white text-sm mb-1">DeepPlanAI</p>
                  <p class="text-xs text-gray-400">Digital Takeoffs</p>
                </div>
                <div class="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  <div class="text-3xl mb-2">💰</div>
                  <p class="font-semibold text-white text-sm mb-1">DeepCost</p>
                  <p class="text-xs text-gray-400">Cost Estimation</p>
                </div>
                <div class="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  <div class="text-3xl mb-2">📊</div>
                  <p class="font-semibold text-white text-sm mb-1">DeepTrack</p>
                  <p class="text-xs text-gray-400">Budget Control</p>
                </div>
                <div class="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  <div class="text-3xl mb-2">👥</div>
                  <p class="font-semibold text-white text-sm mb-1">DeepHR</p>
                  <p class="text-xs text-gray-400">Workforce Mgmt</p>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Key Benefits -->
      <div class="max-w-5xl mx-auto">
        <h3 class="text-2xl font-bold text-center mb-8 text-white">Why CCorex?</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-lg border border-cyan-500/20 glass-panel hover:border-cyan-500/40 transition-all">
            <div class="text-4xl mb-4">🔗</div>
            <h4 class="font-bold text-white mb-2">Seamlessly Integrated</h4>
            <p class="text-sm text-gray-400">All tools work together. No data silos or manual entry.</p>
          </div>
          <div class="p-6 rounded-lg border border-cyan-500/20 glass-panel hover:border-cyan-500/40 transition-all">
            <div class="text-4xl mb-4">⚡</div>
            <h4 class="font-bold text-white mb-2">Real-Time Sync</h4>
            <p class="text-sm text-gray-400">Changes sync instantly across all tools and teams.</p>
          </div>
          <div class="p-6 rounded-lg border border-cyan-500/20 glass-panel hover:border-cyan-500/40 transition-all">
            <div class="text-4xl mb-4">📈</div>
            <h4 class="font-bold text-white mb-2">Complete Visibility</h4>
            <p class="text-sm text-gray-400">One dashboard for all project metrics and insights.</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="max-w-3xl mx-auto mt-16 text-center">
        <p class="text-gray-300 mb-6">Ready to transform your project management?</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/ccorex"
            class="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            Explore CCorex
          </NuxtLink>
          <a
            href="/contact"
            class="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all"
          >
            Schedule Demo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Section component - no script needed for this version
</script>

<style scoped>
.section-padding {
  @apply py-20 md:py-32;
}

.container {
  @apply max-w-7xl;
}

.glass-panel {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
}

.gradient-text {
  @apply bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent;
}
</style>
