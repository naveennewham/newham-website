<template>
  <section class="products-section section-padding relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,135,150,0.18),transparent_40%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(1,172,200,0.14),transparent_45%)]"></div>
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
          <div class="relative overflow-hidden rounded-2xl border border-primary-500/25 hover:border-secondary-500/40 transition-all duration-300 p-10 md:p-12 glass-panel">
            <!-- Background -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-300"></div>

            <!-- Content -->
            <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div class="md:w-1/3 text-center md:text-left">
                <img src="~/assets/ccorex/Corex_logo.png" alt="CCorex" class="h-10 md:h-14 w-auto mx-auto md:mx-0 mb-4 brightness-0 invert" />
                <p class="text-gray-300 mb-4">
                  The complete construction management solution. Four integrated apps, one unified platform.
                </p>
                <div class="flex items-center text-secondary-300 font-semibold group-hover:translate-x-2 transition-transform">
                  Explore CCorex →
                </div>
              </div>

              <div class="md:w-2/3 relative">
                <div class="absolute inset-0 -m-4 rounded-2xl opacity-70 pointer-events-none">
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(0,135,150,0.18),transparent_45%)]"></div>
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(1,172,200,0.14),transparent_50%)]"></div>

                  <div class="absolute left-[18%] top-[22%] h-2.5 w-2.5 rounded-full bg-primary-300/90 shadow-[0_0_18px_rgba(0,135,150,0.45)] [animation:pulse_2.6s_ease-in-out_infinite]"></div>
                  <div class="absolute right-[18%] top-[22%] h-2.5 w-2.5 rounded-full bg-secondary-300/90 shadow-[0_0_18px_rgba(1,172,200,0.45)] [animation:pulse_2.2s_ease-in-out_infinite]"></div>
                  <div class="absolute left-[18%] bottom-[22%] h-2.5 w-2.5 rounded-full bg-secondary-300/90 shadow-[0_0_18px_rgba(1,172,200,0.45)] [animation:pulse_2.9s_ease-in-out_infinite]"></div>
                  <div class="absolute right-[18%] bottom-[22%] h-2.5 w-2.5 rounded-full bg-primary-300/90 shadow-[0_0_18px_rgba(0,135,150,0.45)] [animation:pulse_2.4s_ease-in-out_infinite]"></div>

                  <div class="absolute left-[22%] top-[25%] h-px w-[56%] bg-gradient-to-r from-white/0 via-white/15 to-white/0 animate-pulse"></div>
                  <div class="absolute left-[22%] bottom-[25%] h-px w-[56%] bg-gradient-to-r from-white/0 via-white/15 to-white/0 animate-pulse"></div>
                  <div class="absolute left-[20%] top-[28%] h-[44%] w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0 animate-pulse"></div>
                  <div class="absolute right-[20%] top-[28%] h-[44%] w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0 animate-pulse"></div>
                </div>

                <div class="grid grid-cols-2 gap-4 relative">
                  <div class="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all">
                    <div class="mb-3">
                      <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-white">DP</span>
                    </div>
                    <p class="font-semibold text-white text-sm mb-1">DeepPlanAI</p>
                    <p class="text-xs text-gray-400">Digital Takeoffs</p>
                  </div>
                  <div class="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-secondary-500/30 transition-all">
                    <div class="mb-3">
                      <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-white">DC</span>
                    </div>
                    <p class="font-semibold text-white text-sm mb-1">DeepCost</p>
                    <p class="text-xs text-gray-400">Cost Estimation</p>
                  </div>
                  <div class="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all">
                    <div class="mb-3">
                      <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-white">DT</span>
                    </div>
                    <p class="font-semibold text-white text-sm mb-1">DeepTrack</p>
                    <p class="text-xs text-gray-400">Budget Control</p>
                  </div>
                  <div class="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-secondary-500/30 transition-all">
                    <div class="mb-3">
                      <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-white">DH</span>
                    </div>
                    <p class="font-semibold text-white text-sm mb-1">DeepHR</p>
                    <p class="text-xs text-gray-400">Workforce Mgmt</p>
                  </div>
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
          <div class="p-6 rounded-lg border border-white/10 glass-panel hover:border-primary-500/30 transition-all">
            <div class="mb-4">
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <span class="h-2 w-2 rounded-full bg-primary-400"></span>
              </span>
            </div>
            <h4 class="font-bold text-white mb-2">Seamlessly Integrated</h4>
            <p class="text-sm text-gray-400">All tools work together. No data silos or manual entry.</p>
          </div>
          <div class="p-6 rounded-lg border border-white/10 glass-panel hover:border-secondary-500/30 transition-all">
            <div class="mb-4">
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <span class="h-2 w-2 rounded-full bg-secondary-400"></span>
              </span>
            </div>
            <h4 class="font-bold text-white mb-2">Real-Time Sync</h4>
            <p class="text-sm text-gray-400">Changes sync instantly across all tools and teams.</p>
          </div>
          <div class="p-6 rounded-lg border border-white/10 glass-panel hover:border-primary-500/30 transition-all">
            <div class="mb-4">
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <span class="h-2 w-2 rounded-full bg-primary-400"></span>
              </span>
            </div>
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
            class="btn-primary"
          >
            Explore CCorex
          </NuxtLink>
          <a
            href="/contact"
            class="btn-outline"
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
