<template>
  <section id="services-list" class="services-list-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-800"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_30%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Three pillars</span>
          <span class="block text-white mt-2">built for Singapore construction teams</span>
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto">
          Choose software, dedicated domain-trained resources, or engineering back-office delivery — engage one pillar or combine all three.
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="glass-panel h-full rounded-2xl overflow-hidden">
          <div class="p-8">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-xl font-semibold text-white">CCorex Suite</h3>
                <p class="text-gray-400 mt-2">Construction software platform for planning, estimation, budget tracking, and workforce management.</p>
              </div>
              <div class="w-11 h-11 rounded-xl bg-primary-900/40 border border-primary-500/20 text-primary-200 flex items-center justify-center">
                <i class="fa-solid fa-code"></i>
              </div>
            </div>

            <ul class="mt-6 space-y-3">
              <li v-for="(item, idx) in pillars.ccorex.points" :key="idx" class="flex items-start gap-2">
                <i class="fa-solid fa-check text-primary-400 mt-0.5"></i>
                <span class="text-gray-300 text-sm">{{ item }}</span>
              </li>
            </ul>

            <div class="mt-8">
              <NuxtLink to="/ccorex" class="btn-primary w-full text-center">Explore CCorex</NuxtLink>
            </div>
          </div>
        </div>

        <div id="talent-outsourcing" class="glass-panel h-full rounded-2xl overflow-hidden">
          <div class="p-8">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-xl font-semibold text-white">Engineering Talent Outsourcing</h3>
                <p class="text-gray-400 mt-2">Dedicated, domain-trained engineering professionals for Singapore M&E contractors — not generic offshore staff.</p>
              </div>
              <div class="w-11 h-11 rounded-xl bg-secondary-900/40 border border-secondary-500/20 text-secondary-200 flex items-center justify-center">
                <i class="fa-solid fa-users"></i>
              </div>
            </div>

            <ul class="mt-6 space-y-3">
              <li v-for="(item, idx) in pillars.talent.points" :key="idx" class="flex items-start gap-2">
                <i class="fa-solid fa-check text-secondary-400 mt-0.5"></i>
                <span class="text-gray-300 text-sm">{{ item }}</span>
              </li>
            </ul>

            <div class="mt-8">
              <NuxtLink to="/talent-outsourcing" class="btn-outline w-full text-center">View Talent Outsourcing</NuxtLink>
            </div>
          </div>
        </div>

        <div id="engineering-services" class="glass-panel h-full rounded-2xl overflow-hidden">
          <div class="p-8">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-xl font-semibold text-white">Construction Engineering Services</h3>
                <p class="text-gray-400 mt-2">Fire protection design capability and commercial project support — Singapore-code compliant, delivered fast.</p>
              </div>
              <div class="w-11 h-11 rounded-xl bg-primary-900/40 border border-primary-500/20 text-primary-200 flex items-center justify-center">
                <i class="fa-solid fa-helmet-safety"></i>
              </div>
            </div>

            <ul class="mt-6 space-y-3">
              <li v-for="(item, idx) in pillars.engineering.points" :key="idx" class="flex items-start gap-2">
                <i class="fa-solid fa-check text-primary-400 mt-0.5"></i>
                <span class="text-gray-300 text-sm">{{ item }}</span>
              </li>
            </ul>

            <div class="mt-8">
              <NuxtLink to="/engineering-services" class="btn-outline w-full text-center">View Engineering Services</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Custom Solutions -->
      <div class="mt-20">
        <div class="glass-panel p-8 md:p-12 rounded-xl bg-gradient-to-br from-primary-900/30 to-secondary-900/30">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
              <p class="text-gray-300 mb-6">
                We understand that every construction business has unique challenges. Our team of experts can develop tailored solutions to address your specific needs.
              </p>
              <ul class="space-y-3 mb-8">
                <li v-for="(point, index) in customSolutionPoints" :key="index" class="flex items-start">
                  <i class="fa-solid fa-check text-primary-400 mr-2 mt-0.5"></i>
                  <span class="text-gray-300">{{ point }}</span>
                </li>
              </ul>
              <NuxtLink to="/contact" class="btn-primary inline-flex items-center">
                Discuss Your Project
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </NuxtLink>
            </div>
            <div class="relative">
              <div class="glass-panel p-2 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Custom Solutions" 
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>
              <!-- Decorative Elements -->
              <div class="absolute -top-6 -right-6 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
              <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Icon classes used directly in template

const pillars = {
  ccorex: {
    points: [
      'Plan, take off, estimate, and generate BOQs faster',
      'Track budgets, commitments, and variances in one place',
      'Workforce visibility and execution reporting'
    ]
  },
  talent: {
    points: [
      'Domain-first resources trained on Singapore M&E standards',
      'Dedicated teams (not freelancers) trained on your templates and tools',
      'Roles: BIM drafters, estimators/QS, tender coordinators, FP engineers'
    ]
  },
  engineering: {
    points: [
      'Fire protection design & hydraulic calculations (SS CP 52 / NFPA)',
      'Commercial & tender support: BOQs, addendums, document control',
      'QS/cost tracking, variations, and progress claims'
    ]
  }
}

const customSolutionPoints = [
  'Tailored to your specific business processes',
  'Seamless integration with existing systems',
  'Scalable to grow with your business',
  'Ongoing support and maintenance',
  'Regular updates and enhancements'
];
</script>
