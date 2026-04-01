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
                <component :is="SoftwareIcon" class="w-6 h-6" />
              </div>
            </div>

            <ul class="mt-6 space-y-3">
              <li v-for="(item, idx) in pillars.ccorex.points" :key="idx" class="flex items-start gap-2">
                <svg class="w-5 h-5 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
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
                <component :is="MobileIcon" class="w-6 h-6" />
              </div>
            </div>

            <ul class="mt-6 space-y-3">
              <li v-for="(item, idx) in pillars.talent.points" :key="idx" class="flex items-start gap-2">
                <svg class="w-5 h-5 text-secondary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
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
                <component :is="CloudIcon" class="w-6 h-6" />
              </div>
            </div>

            <ul class="mt-6 space-y-3">
              <li v-for="(item, idx) in pillars.engineering.points" :key="idx" class="flex items-start gap-2">
                <svg class="w-5 h-5 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
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
                  <svg class="w-5 h-5 text-primary-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">{{ point }}</span>
                </li>
              </ul>
              <NuxtLink to="/contact" class="btn-primary inline-flex items-center">
                Discuss Your Project
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
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
import { h } from 'vue';

// SVG Icons as render functions
const ProjectManagementIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>'
});

const FieldAppIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>'
});

const ComplianceIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>'
});

const BimIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>'
});

const CloudIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>'
});

const AnalyticsIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>'
});

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
