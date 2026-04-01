<template>
  <section class="pillars-section section-padding relative overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,135,150,0.14),transparent_45%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(1,172,200,0.10),transparent_50%)]"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto text-center mb-14">
        <div class="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-gray-300">
          <span class="h-2 w-2 rounded-full bg-secondary-500"></span>
          Three pillars. One delivery partner.
        </div>

        <h2 class="mt-6 text-3xl md:text-4xl font-bold">
          <span class="gradient-text">Built for construction teams</span>
          <span class="block text-white mt-2">software, talent, and engineering support</span>
        </h2>

        <p class="text-gray-400 max-w-3xl mx-auto mt-6">
          From CCorex for project execution, to domain-trained teams and engineering back-office delivery — Newham supports the full construction lifecycle.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="glass-panel p-7 rounded-2xl relative overflow-hidden">
          <div class="absolute inset-0 z-0 ai-glow-radial-primary opacity-25"></div>
          <div class="relative z-10 flex flex-col h-full">
            <div class="flex items-center justify-between gap-4">
              <div class="text-white font-semibold">CCorex Suite</div>
              <span class="text-xs font-semibold rounded-full bg-primary-900/40 border border-primary-500/20 text-primary-200 px-3 py-1">Software</span>
            </div>
            <p class="mt-3 text-sm text-gray-400">
              One platform to plan, estimate, track budgets, and manage workforce — end to end.
            </p>
            <ul class="mt-5 space-y-2 flex-1">
              <li class="flex items-start gap-2 text-sm text-gray-300">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400"></span>
                Digital takeoffs and quantity workflows
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-300">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400"></span>
                Estimation, BOQs, and rate build-up
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-300">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400"></span>
                Budget control, tracking, and reporting
              </li>
            </ul>
            <div class="mt-6 mt-auto">
              <NuxtLink to="/ccorex" class="btn-primary w-full inline-flex items-center justify-center text-center leading-tight whitespace-normal">
                Explore CCorex
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="glass-panel p-7 rounded-2xl relative overflow-hidden">
          <div class="absolute inset-0 z-0 ai-glow-radial-secondary opacity-25"></div>
          <div class="relative z-10 flex flex-col h-full">
            <div class="flex items-center justify-between gap-4">
              <div class="text-white font-semibold">Engineering Talent Outsourcing</div>
              <span class="text-xs font-semibold rounded-full bg-secondary-900/40 border border-secondary-500/20 text-secondary-200 px-3 py-1">Talent</span>
            </div>
            <p class="mt-3 text-sm text-gray-400">
              Dedicated, domain-trained engineers for Singapore M&E contractors — not generic offshore staff.
            </p>
            <ul class="mt-5 space-y-2 flex-1">
              <li class="flex items-start gap-2 text-sm text-gray-300">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-secondary-400"></span>
                BIM modelers & drafters (Revit MEP, AutoCAD)
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-300">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-secondary-400"></span>
                Estimators & QS for BOQs, takeoffs, and variations
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-300">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-secondary-400"></span>
                Tender & commercial coordinators
              </li>
            </ul>
            <div class="mt-6 mt-auto">
              <NuxtLink to="/talent-outsourcing" class="btn-primary w-full inline-flex items-center justify-center text-center leading-tight whitespace-normal">
                View Talent Outsourcing
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="glass-panel p-7 rounded-2xl relative overflow-hidden">
          <div class="absolute inset-0 z-0 ai-glow-radial-primary opacity-18"></div>
          <div class="relative z-10 flex flex-col h-full">
            <div class="flex items-center justify-between gap-4">
              <div class="text-white font-semibold">Construction Engineering Services</div>
              <span class="text-xs font-semibold rounded-full bg-primary-900/40 border border-primary-500/20 text-primary-200 px-3 py-1">Engineering</span>
            </div>
            <p class="mt-3 text-sm text-gray-400">
              Fire protection design + commercial project support — Singapore-code compliant, delivered fast.
            </p>
            <ul class="mt-5 space-y-2 flex-1">
              <li class="flex items-start gap-2 text-sm text-gray-300">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400"></span>
                FP design & hydraulic calculations (SS CP 52 / NFPA)
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-300">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400"></span>
                Estimation, BOQ preparation, tender support
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-300">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400"></span>
                QS, document control, submissions
              </li>
            </ul>
            <div class="mt-6 mt-auto">
              <NuxtLink to="/engineering-services" class="btn-primary w-full inline-flex items-center justify-center text-center leading-tight whitespace-normal">
                View Engineering Services
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto mt-14 text-center">
        <p class="text-gray-300">
          Want the right mix for your pipeline?
          <NuxtLink to="/contact" class="text-secondary-300 hover:text-secondary-200 transition-colors">Book a discovery call</NuxtLink>
          and we’ll recommend the best service combination.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
