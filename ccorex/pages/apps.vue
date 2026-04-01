<template>
  <div>
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 pt-32 pb-16 text-center">
      <div class="mb-6">
        <span class="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold">
          The CCorex Suite
        </span>
      </div>
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
          Four Powerful Apps
        </span>
      </h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        Start with one app or use the full suite. Each app is designed to work independently or as part of an integrated ecosystem.
      </p>
    </section>

    <!-- Apps Grid -->
    <section class="max-w-7xl mx-auto px-4 pb-20">
      <div class="space-y-20">
        <div v-for="(app, index) in apps" :key="app.name" class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'">
            <div class="flex items-center gap-3 mb-4">
              <div class="text-5xl">{{ app.icon }}</div>
              <div>
                <h2 class="text-3xl font-bold text-white">{{ app.name }}</h2>
                <p class="text-primary-400 font-semibold">{{ app.subtitle }}</p>
              </div>
            </div>
            <p class="text-xl text-gray-300 mb-6">{{ app.description }}</p>
            
            <div class="mb-8">
              <h3 class="text-lg font-bold text-white mb-4">Key Features</h3>
              <ul class="space-y-3">
                <li v-for="feature in app.features" :key="feature" class="flex items-start gap-3">
                  <span class="text-primary-400 mt-1">✓</span>
                  <span class="text-gray-300">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <div class="mb-8">
              <h3 class="text-lg font-bold text-white mb-4">Use Cases</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="useCase in app.useCases" :key="useCase" class="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm">
                  {{ useCase }}
                </span>
              </div>
            </div>

            <div class="flex gap-4">
              <a href="/contact" class="px-6 py-3 rounded-lg bg-primary-500 text-slate-900 font-semibold hover:bg-primary-400 transition-all">
                Request Demo
              </a>
              <NuxtLink to="/pricing" class="px-6 py-3 rounded-lg border border-primary-500 text-primary-400 font-semibold hover:bg-primary-500 hover:text-slate-900 transition-all">
                See Pricing
              </NuxtLink>
            </div>
          </div>

          <div :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'">
            <div class="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div class="aspect-video rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                <div class="text-center">
                  <div class="text-6xl mb-4">{{ app.icon }}</div>
                  <p class="text-gray-400">App Screenshot</p>
                </div>
              </div>
              <div class="mt-6 grid grid-cols-3 gap-4">
                <div v-for="stat in app.stats" :key="stat.label" class="text-center">
                  <div class="text-2xl font-bold text-primary-400">{{ stat.value }}</div>
                  <div class="text-xs text-gray-400">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Flow -->
    <section class="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            Better Together
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            See how data flows seamlessly between apps to create a unified construction management platform.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div v-for="(step, index) in integrationFlow" :key="step.app" class="relative">
            <div class="p-6 rounded-xl border border-primary-500/30 bg-white/5 text-center">
              <div class="text-4xl mb-3">{{ step.icon }}</div>
              <h3 class="text-lg font-bold text-white mb-2">{{ step.app }}</h3>
              <p class="text-sm text-gray-400">{{ step.action }}</p>
            </div>
            <div v-if="index < integrationFlow.length - 1" class="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary-400 text-2xl">
              →
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          Choose the apps that fit your needs or get the complete suite for maximum value.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
            Schedule a Demo
          </a>
          <NuxtLink to="/pricing" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500 hover:text-slate-900 transition-all">
            Compare Plans
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const apps = [
  {
    name: 'DeepPlanAI',
    subtitle: 'AI-Powered Digital Takeoffs',
    icon: '📏',
    description: 'Transform your takeoff process with AI-powered measurement and quantity extraction. Reduce manual work by 40% while increasing accuracy and speed.',
    features: [
      'Automated area, perimeter, and volume measurement from drawings',
      'AI-powered quantity extraction with intelligent recognition',
      'Real-time collaboration with team members on drawings',
      'Direct integration with DeepCost for seamless estimation',
      'Support for PDF, CAD, and BIM file formats',
      'Mobile app for on-site takeoffs and verification'
    ],
    useCases: ['Takeoffs', 'Quantity Surveying', 'Pre-construction', 'Bid Preparation'],
    stats: [
      { value: '40%', label: 'Faster' },
      { value: '95%+', label: 'Accuracy' },
      { value: '100+', label: 'Projects' }
    ]
  },
  {
    name: 'DeepCost',
    subtitle: 'AI Cost Estimation',
    icon: '💰',
    description: 'Achieve 95%+ accuracy in MEP cost estimation with AI-driven libraries and intelligent mapping. Generate professional BOQs and proposals in minutes.',
    features: [
      'Comprehensive MEP libraries for ACMV, Fire Fighting, ELV, and A&A',
      'AI-powered quantity-to-cost mapping with smart suggestions',
      'Automated BOQ generation with customizable templates',
      'Multi-currency and regional pricing support',
      'Historical cost data analysis and trending',
      'Export to Excel, PDF, and accounting systems'
    ],
    useCases: ['Cost Estimation', 'BOQ Generation', 'Bid Management', 'Value Engineering'],
    stats: [
      { value: '95%+', label: 'Accuracy' },
      { value: '10x', label: 'Faster' },
      { value: '$500M+', label: 'Estimated' }
    ]
  },
  {
    name: 'DeepTrack',
    subtitle: 'Budget & PO Management',
    icon: '📊',
    description: 'Maintain complete control over project budgets and purchase orders. Track variance, manage approvals, and ensure spend visibility across all projects.',
    features: [
      'Real-time budget vs actuals tracking with variance analysis',
      'Multi-level PO approval workflow with email notifications',
      'Supplier and subcontractor management with performance tracking',
      'Automated alerts for budget overruns and PO approvals',
      'Integration with accounting systems (QuickBooks, Xero, SAP)',
      'Comprehensive reporting and analytics dashboard'
    ],
    useCases: ['Budget Control', 'PO Management', 'Cost Tracking', 'Financial Reporting'],
    stats: [
      { value: '100%', label: 'Visibility' },
      { value: '30%', label: 'Cost Savings' },
      { value: '1000+', label: 'POs/month' }
    ]
  },
  {
    name: 'DeepHR',
    subtitle: 'Workforce Management',
    icon: '👥',
    description: 'Unify your workforce operations from planning to payroll. Mobile-enabled time tracking, compliance management, and resource optimization.',
    features: [
      'Workforce planning and rostering with skill-based allocation',
      'Mobile time tracking with geolocation and biometric verification',
      'Leave and attendance management with approval workflows',
      'Compliance and certification tracking with expiry alerts',
      'Payroll integration with timesheet export',
      'Performance management and appraisal system'
    ],
    useCases: ['Workforce Planning', 'Time Tracking', 'Compliance', 'Payroll Integration'],
    stats: [
      { value: '5000+', label: 'Workers' },
      { value: '99%', label: 'Attendance' },
      { value: '24/7', label: 'Access' }
    ]
  }
]

const integrationFlow = [
  { app: 'DeepPlanAI', icon: '📏', action: 'Create takeoffs' },
  { app: 'DeepCost', icon: '💰', action: 'Generate estimates' },
  { app: 'DeepTrack', icon: '📊', action: 'Track budgets' },
  { app: 'DeepHR', icon: '👥', action: 'Manage workforce' }
]
</script>
