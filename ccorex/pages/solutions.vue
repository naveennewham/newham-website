<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 text-center pt-32 pb-20">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-white">Solutions for Every</span>
          <br/>
          <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Construction Role
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
          Whether you're a general contractor, subcontractor, developer, or consultant—CCorex adapts to your unique workflow.
        </p>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="space-y-20">
          <div v-for="(solution, index) in solutions" :key="solution.role" class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'">
              <div class="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-6">
                {{ solution.category }}
              </div>
              <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
                For {{ solution.role }}
              </h2>
              <p class="text-xl text-gray-300 mb-8">{{ solution.description }}</p>
              
              <div class="mb-8">
                <h3 class="text-lg font-semibold text-white mb-4">Key Challenges We Solve:</h3>
                <ul class="space-y-3">
                  <li v-for="challenge in solution.challenges" :key="challenge" class="flex items-start gap-3 text-gray-300">
                    <i class="fa-solid fa-xmark text-secondary-400 text-lg mt-1"></i>
                    <span>{{ challenge }}</span>
                  </li>
                </ul>
              </div>

              <div class="mb-8">
                <h3 class="text-lg font-semibold text-white mb-4">How CCorex Helps:</h3>
                <ul class="space-y-3">
                  <li v-for="benefit in solution.benefits" :key="benefit" class="flex items-start gap-3 text-gray-300">
                    <i class="fa-solid fa-check text-primary-400 text-lg mt-1"></i>
                    <span>{{ benefit }}</span>
                  </li>
                </ul>
              </div>

              <div class="flex gap-4">
                <a href="/contact" class="px-6 py-3 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
                  Schedule Demo
                </a>
                <NuxtLink to="/products" class="px-6 py-3 rounded-lg border border-primary-500 text-primary-400 font-semibold hover:bg-primary-500/10 transition-all">
                  View Products
                </NuxtLink>
              </div>
            </div>

            <div :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'">
              <div class="p-8 rounded-2xl border border-white/10 bg-white/5">
                <h3 class="text-xl font-bold text-white mb-6">Recommended Apps</h3>
                <div class="space-y-4">
                  <div v-for="app in solution.apps" :key="app.name" class="p-4 rounded-lg bg-slate-900/50 border border-white/10 hover:border-primary-500/50 transition-all">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-3xl"><i :class="app.icon"></i></span>
                      <div>
                        <h4 class="font-semibold text-white">{{ app.name }}</h4>
                        <p class="text-sm text-gray-400">{{ app.purpose }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Real-World Use Cases
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            See how construction professionals use CCorex to solve everyday challenges.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="useCase in useCases" :key="useCase.title" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="text-3xl mb-4"><i :class="useCase.icon"></i></div>
            <h3 class="text-xl font-bold text-white mb-3">{{ useCase.title }}</h3>
            <p class="text-gray-400 mb-4">{{ useCase.scenario }}</p>
            <div class="p-4 rounded-lg bg-primary-500/10 border border-primary-500/30">
              <p class="text-sm text-primary-400 font-semibold mb-2">Solution:</p>
              <p class="text-sm text-gray-300">{{ useCase.solution }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow Comparison -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Before & After CCorex
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            See the difference an integrated platform makes.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="p-8 rounded-2xl border border-red-500/30 bg-red-500/5">
            <div class="flex items-center gap-3 mb-6">
              <i class="fa-solid fa-circle-xmark text-3xl text-red-400"></i>
              <h3 class="text-2xl font-bold text-white">Without CCorex</h3>
            </div>
            <ul class="space-y-4">
              <li v-for="problem in beforeProblems" :key="problem" class="flex items-start gap-3 text-gray-300">
                <span class="text-red-400 mt-1">•</span>
                <span>{{ problem }}</span>
              </li>
            </ul>
          </div>

          <div class="p-8 rounded-2xl border border-primary-500/30 bg-primary-500/5">
            <div class="flex items-center gap-3 mb-6">
              <i class="fa-solid fa-circle-check text-3xl text-primary-400"></i>
              <h3 class="text-2xl font-bold text-white">With CCorex</h3>
            </div>
            <ul class="space-y-4">
              <li v-for="benefit in afterBenefits" :key="benefit" class="flex items-start gap-3 text-gray-300">
                <span class="text-primary-400 mt-1">•</span>
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Find Your Perfect Solution
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          Let's discuss how CCorex can be tailored to your specific needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
            Talk to Sales
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
const solutions = [
  {
    role: 'General Contractors',
    category: 'Main Contractors',
    description: 'Manage multiple trades, coordinate subcontractors, and maintain complete project control from tender to handover.',
    challenges: [
      'Coordinating multiple subcontractors and trades',
      'Maintaining budget control across complex projects',
      'Managing change orders and variations',
      'Ensuring on-time project delivery'
    ],
    benefits: [
      'Unified dashboard for all projects and trades',
      'Real-time budget vs actual tracking',
      'Automated change order management',
      'Integrated scheduling and resource planning'
    ],
    apps: [
      { name: 'DeepCost', icon: 'fa-solid fa-coins', purpose: 'Accurate tender estimation' },
      { name: 'DeepTrack', icon: 'fa-solid fa-chart-bar', purpose: 'Project & budget control' },
      { name: 'DeepHR', icon: 'fa-solid fa-users', purpose: 'Workforce management' }
    ]
  },
  {
    role: 'Subcontractors',
    category: 'Trade Contractors',
    description: 'Win more profitable work with accurate bids, manage resources efficiently, and get paid faster.',
    challenges: [
      'Preparing accurate bids quickly',
      'Managing multiple projects simultaneously',
      'Tracking labor and material costs',
      'Getting paid on time'
    ],
    benefits: [
      'Trade-specific cost libraries for fast, accurate bids',
      'Mobile time tracking for field teams',
      'Progress billing and payment tracking',
      'Resource allocation across projects'
    ],
    apps: [
      { name: 'DeepCost', icon: 'fa-solid fa-coins', purpose: 'Trade-specific estimation' },
      { name: 'DeepPlan AI', icon: 'mdi mdi-ruler', purpose: 'Quick takeoffs' },
      { name: 'DeepHR', icon: 'fa-solid fa-users', purpose: 'Labor tracking' }
    ]
  },
  {
    role: 'Developers',
    category: 'Property Developers',
    description: 'Maintain executive oversight across your entire portfolio with real-time financial visibility and risk management.',
    challenges: [
      'Managing multiple projects across locations',
      'Maintaining financial control and visibility',
      'Coordinating with multiple stakeholders',
      'Long project timelines and budget drift'
    ],
    benefits: [
      'Portfolio-wide analytics and reporting',
      'Real-time financial dashboards',
      'Stakeholder portals for transparency',
      'Early warning system for budget overruns'
    ],
    apps: [
      { name: 'DeepTrack', icon: 'fa-solid fa-chart-bar', purpose: 'Portfolio management' },
      { name: 'DeepCost', icon: 'fa-solid fa-coins', purpose: 'Budget planning' },
      { name: 'DeepPlan AI', icon: 'mdi mdi-ruler', purpose: 'Design validation' }
    ]
  },
  {
    role: 'Consultants',
    category: 'Construction Consultants',
    description: 'Deliver professional estimation, cost planning, and project advisory services with industry-leading tools.',
    challenges: [
      'Managing multiple client projects',
      'Maintaining cost databases and benchmarks',
      'Producing professional deliverables',
      'Knowledge management across team'
    ],
    benefits: [
      'Client-specific workspaces and branding',
      'Comprehensive cost databases',
      'Professional report generation',
      'Centralized knowledge repository'
    ],
    apps: [
      { name: 'DeepCost', icon: 'fa-solid fa-coins', purpose: 'Cost consulting' },
      { name: 'DeepPlan AI', icon: 'mdi mdi-ruler', purpose: 'Quantity surveying' },
      { name: 'DeepTrack', icon: 'fa-solid fa-chart-bar', purpose: 'Project monitoring' }
    ]
  }
]

const useCases = [
  {
    icon: 'fa-solid fa-helmet-safety',
    title: 'Multi-Trade Coordination',
    scenario: 'GC managing 15 subcontractors on a commercial tower project.',
    solution: 'DeepTrack provides unified dashboard showing all trade progress, budgets, and schedules in real-time.'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Fast Bid Turnaround',
    scenario: 'MEP contractor needs to submit tender in 48 hours.',
    solution: 'DeepPlan AI extracts quantities in hours, DeepCost maps to libraries for instant estimate.'
  },
  {
    icon: 'fa-solid fa-briefcase',
    title: 'Portfolio Oversight',
    scenario: 'Developer tracking 8 projects across 3 cities.',
    solution: 'Executive dashboard shows financial health, risks, and milestones for entire portfolio.'
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Field Labor Tracking',
    scenario: 'Contractor with 200+ workers across multiple sites.',
    solution: 'DeepHR mobile app with geofencing ensures accurate time tracking and attendance.'
  },
  {
    icon: 'fa-solid fa-chart-bar',
    title: 'Budget Control',
    scenario: 'Project 15% over budget with no early warning.',
    solution: 'DeepTrack variance alerts catch overruns early, allowing corrective action.'
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Client Reporting',
    scenario: 'Consultant needs monthly cost reports for 5 clients.',
    solution: 'Automated report generation with client-specific branding and data.'
  }
]

const beforeProblems = [
  'Multiple disconnected software tools',
  'Manual data entry and re-entry',
  'Spreadsheet chaos and version conflicts',
  'No real-time visibility into projects',
  'Delayed reporting and decision making',
  'Errors from manual calculations',
  'Difficult collaboration across teams',
  'No mobile access for field teams'
]

const afterBenefits = [
  'Single integrated platform for everything',
  'Automatic data sync across all apps',
  'Single source of truth for all data',
  'Real-time dashboards and alerts',
  'Instant reports and analytics',
  'AI-powered accuracy and automation',
  'Seamless team collaboration',
  'Full mobile access from anywhere'
]
</script>
