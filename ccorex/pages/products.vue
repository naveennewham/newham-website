<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 text-center pt-32 pb-20">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Four Powerful Apps
          </span>
          <br/>
          <span class="text-white">One Integrated Ecosystem</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10">
          From takeoff to closeout, CCorex provides specialized tools for every phase of construction—all working together seamlessly.
        </p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <NuxtLink 
            v-for="product in products" 
            :key="product.name"
            :to="product.link"
            class="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary-500/50 hover:bg-white/10 transition-all"
          >
            <div class="flex items-start gap-4 mb-6">
              <div class="text-6xl">{{ product.icon }}</div>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{{ product.name }}</h2>
                <p class="text-xl text-primary-400 font-semibold">{{ product.subtitle }}</p>
              </div>
            </div>
            
            <p class="text-lg text-gray-300 mb-6">{{ product.description }}</p>
            
            <div class="mb-6">
              <h3 class="text-sm font-semibold text-gray-400 uppercase mb-3">Key Features</h3>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li v-for="feature in product.features" :key="feature" class="flex items-start gap-2 text-gray-400">
                  <span class="text-primary-400 mt-1">✓</span>
                  <span class="text-sm">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <div class="flex items-center justify-between">
              <span class="inline-flex items-center gap-2 text-primary-400 font-semibold group-hover:gap-3 transition-all">
                Learn More
                <span>→</span>
              </span>
              <div class="flex gap-2">
                <span v-for="tag in product.tags" :key="tag" class="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-semibold">
                  {{ tag }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Integration Flow -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            How They Work Together
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Each app is powerful on its own, but the real magic happens when they work together.
          </p>
        </div>

        <!-- Integration Flow Diagram -->
        <div class="relative max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(flow, index) in integrationFlows" :key="flow.title" class="p-6 rounded-xl border border-white/10 bg-white/5">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-full bg-primary-500 text-slate-900 font-bold flex items-center justify-center">
                  {{ index + 1 }}
                </div>
                <h3 class="text-xl font-bold text-white">{{ flow.title }}</h3>
              </div>
              <p class="text-gray-400 mb-4">{{ flow.description }}</p>
              <div class="flex items-center gap-2 text-sm">
                <span class="px-2 py-1 rounded bg-primary-500/10 text-primary-400">{{ flow.from }}</span>
                <span class="text-gray-500">→</span>
                <span class="px-2 py-1 rounded bg-secondary-500/10 text-secondary-400">{{ flow.to }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Choose Your Apps
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Start with one app or get the complete suite. All apps integrate seamlessly.
          </p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-white/10">
                <th class="text-left p-4 text-white font-semibold">Feature</th>
                <th v-for="product in products" :key="product.name" class="p-4 text-center">
                  <div class="text-3xl mb-2">{{ product.icon }}</div>
                  <div class="text-sm font-semibold text-white">{{ product.name }}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="feature in comparisonFeatures" :key="feature.name" class="border-b border-white/10 hover:bg-white/5">
                <td class="p-4 text-gray-300">{{ feature.name }}</td>
                <td v-for="available in feature.availability" :key="available" class="p-4 text-center">
                  <span v-if="available" class="text-primary-400 text-2xl">✓</span>
                  <span v-else class="text-gray-600 text-2xl">—</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          Schedule a demo to see how CCorex apps can transform your construction operations.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
            Schedule Demo
          </a>
          <NuxtLink to="/pricing" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500 hover:text-slate-900 transition-all">
            View Pricing
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const products = [
  {
    name: 'DeepPlanAI',
    subtitle: 'AI-Powered Digital Takeoffs',
    icon: '📏',
    description: 'Transform your takeoff process with AI-powered measurement and quantity extraction. Reduce manual work by 40% while increasing accuracy to 95%+.',
    features: [
      'Automated measurements',
      'AI quantity extraction',
      'Real-time collaboration',
      'All drawing formats',
      'Direct DeepCost integration',
      'Version control'
    ],
    tags: ['AI-Powered', 'Time-Saver'],
    link: '/products/deepplanai'
  },
  {
    name: 'DeepCost',
    subtitle: 'Construction Estimation & Tendering',
    icon: '💰',
    description: 'Achieve 95%+ accuracy in MEP cost estimation with AI-driven libraries. Generate professional BOQs and tender documents in minutes.',
    features: [
      'MEP cost libraries',
      'AI cost mapping',
      'BOQ generation',
      'Multi-currency support',
      'Tender comparison',
      'Rate analysis'
    ],
    tags: ['Accurate', 'Fast'],
    link: '/products/deepcost'
  },
  {
    name: 'DeepTrack',
    subtitle: 'Project Execution & Budget Control',
    icon: '📊',
    description: 'Maintain complete control over project budgets, purchase orders, and site activities. Real-time variance tracking and approval workflows.',
    features: [
      'Budget vs actual',
      'PO management',
      'Variance alerts',
      'Approval workflows',
      'Supplier management',
      'Progress tracking'
    ],
    tags: ['Control', 'Visibility'],
    link: '/products/deeptrack'
  },
  {
    name: 'DeepHR',
    subtitle: 'Workforce & Labour Management',
    icon: '👥',
    description: 'Unify workforce operations from planning to payroll. Mobile time tracking, compliance management, and resource optimization.',
    features: [
      'Workforce planning',
      'Mobile time tracking',
      'Attendance management',
      'Compliance tracking',
      'Payroll integration',
      'Resource optimization'
    ],
    tags: ['Mobile', 'Compliant'],
    link: '/products/deephr'
  }
]

const integrationFlows = [
  {
    title: 'Takeoff to Estimate',
    description: 'Quantities from DeepPlan AI automatically populate DeepCost for instant cost estimation.',
    from: 'DeepPlan AI',
    to: 'DeepCost'
  },
  {
    title: 'Estimate to Budget',
    description: 'Approved estimates become project budgets in DeepTrack with one click.',
    from: 'DeepCost',
    to: 'DeepTrack'
  },
  {
    title: 'Budget to Resources',
    description: 'Project budgets inform workforce planning and resource allocation in DeepHR.',
    from: 'DeepTrack',
    to: 'DeepHR'
  },
  {
    title: 'Labor to Costs',
    description: 'Actual labor hours from DeepHR update project costs in DeepTrack automatically.',
    from: 'DeepHR',
    to: 'DeepTrack'
  }
]

const comparisonFeatures = [
  { name: 'Drawing Takeoff', availability: [true, false, false, false] },
  { name: 'Cost Estimation', availability: [false, true, false, false] },
  { name: 'BOQ Generation', availability: [false, true, false, false] },
  { name: 'Budget Management', availability: [false, false, true, false] },
  { name: 'PO Management', availability: [false, false, true, false] },
  { name: 'Time Tracking', availability: [false, false, false, true] },
  { name: 'Workforce Planning', availability: [false, false, false, true] },
  { name: 'Mobile App', availability: [true, true, true, true] },
  { name: 'Real-time Sync', availability: [true, true, true, true] },
  { name: 'API Access', availability: [true, true, true, true] }
]
</script>
