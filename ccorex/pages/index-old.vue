<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 text-center pt-20">
        <div class="mb-6">
          <span class="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold">
            The Complete Construction Management Suite
          </span>
        </div>
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">One Platform.</span>
          <br/>
          <span class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">Four Powerful Apps.</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10">
          Manage your entire construction lifecycle with AI-powered takeoffs, cost estimation, budget control, and workforce management—all in one unified platform.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#apps" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">Explore Apps</a>
          <NuxtLink to="/pricing" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500 hover:text-slate-900 transition-all">View Pricing</NuxtLink>
        </div>

        <!-- KPI Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div v-for="kpi in kpis" :key="kpi.label" class="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur">
            <div class="text-4xl font-bold text-primary-400 mb-2">{{ kpi.value }}</div>
            <div class="text-sm text-gray-400">{{ kpi.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Apps Overview Section -->
    <section id="apps" class="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Four Apps. One Ecosystem.
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Each app is powerful on its own. Together, they transform your construction operations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="app in apps" :key="app.name" class="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary-500/50 hover:bg-white/10 transition-all">
            <div class="flex items-start gap-4 mb-4">
              <div class="text-5xl"><i :class="app.icon"></i></div>
              <div>
                <h3 class="text-2xl font-bold text-white mb-1">{{ app.name }}</h3>
                <p class="text-primary-400 font-semibold">{{ app.subtitle }}</p>
              </div>
            </div>
            <p class="text-gray-300 mb-6">{{ app.description }}</p>
            <ul class="space-y-2 mb-6">
              <li v-for="feature in app.features" :key="feature" class="flex items-center gap-2 text-gray-400">
                <i class="fa-solid fa-circle-check text-primary-400"></i>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <NuxtLink :to="app.link" class="inline-flex items-center gap-2 text-primary-400 font-semibold group-hover:gap-3 transition-all">
              Learn more
              <i class="fa-solid fa-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose CCorex?
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Built for construction teams who demand accuracy, efficiency, and seamless collaboration.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="benefit in benefits" :key="benefit.title" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="text-4xl mb-4"><i :class="benefit.icon"></i></div>
            <h3 class="text-xl font-bold text-white mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-400">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Section -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Seamless Integrations
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with your existing tools and workflows. CCorex integrates with leading construction software.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="integration in integrations" :key="integration" class="p-6 rounded-xl border border-white/10 bg-white/5 text-center hover:border-primary-500/50 transition-all">
            <div class="text-2xl font-bold text-gray-300">{{ integration }}</div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/integrations" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-500 text-primary-400 font-semibold hover:bg-primary-500 hover:text-slate-900 transition-all">
            View All Integrations
            <i class="fa-solid fa-arrow-right"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <TestimonialsStrip />

    <!-- CTA Section -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Transform Your Construction Operations?
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          Join hundreds of construction firms already using CCorex to streamline their projects.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
            Schedule a Demo
          </a>
          <NuxtLink to="/pricing" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500 hover:text-slate-900 transition-all">
            See Pricing
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const kpis = [
  { value: '95%+', label: 'Estimate accuracy' },
  { value: '40%', label: 'Faster takeoffs' },
  { value: '100%', label: 'Data sync' },
  { value: '2–3 wks', label: 'Implementation' }
]

const apps = [
  {
    name: 'DeepPlanAI',
    subtitle: 'AI-Powered Digital Takeoffs',
    icon: 'mdi mdi-ruler',
    description: 'Transform your takeoff process with AI-powered measurement and quantity extraction. Reduce manual work by 40% while increasing accuracy.',
    features: [
      'Automated area & perimeter measurement',
      'AI-powered quantity extraction',
      'Real-time collaboration on drawings',
      'Direct integration with DeepCost'
    ],
    link: '/apps'
  },
  {
    name: 'DeepCost',
    subtitle: 'AI Cost Estimation',
    icon: 'fa-solid fa-coins',
    description: 'Achieve 95%+ accuracy in MEP cost estimation with AI-driven libraries and intelligent mapping. Generate professional BOQs in minutes.',
    features: [
      'Comprehensive MEP libraries',
      'AI quantity-to-cost mapping',
      'Automated BOQ generation',
      'Multi-system support (ACMV, Fire, ELV, A&A)'
    ],
    link: '/apps'
  },
  {
    name: 'DeepTrack',
    subtitle: 'Budget & PO Management',
    icon: 'fa-solid fa-chart-bar',
    description: 'Maintain complete control over project budgets and purchase orders. Track variance, manage approvals, and ensure spend visibility.',
    features: [
      'Real-time budget vs actuals',
      'Multi-level PO approval workflow',
      'Variance analysis & alerts',
      'Supplier & subcontractor management'
    ],
    link: '/apps'
  },
  {
    name: 'DeepHR',
    subtitle: 'Workforce Management',
    icon: 'fa-solid fa-users',
    description: 'Unify your workforce operations from planning to payroll. Mobile-enabled time tracking, compliance management, and resource optimization.',
    features: [
      'Workforce planning & rostering',
      'Mobile time tracking with geolocation',
      'Leave & attendance management',
      'Compliance & certification tracking'
    ],
    link: '/apps'
  }
]

const benefits = [
  {
    icon: 'fa-solid fa-link',
    title: 'Unified Data Flow',
    description: 'Data flows seamlessly between apps. Takeoffs from DeepPlanAI automatically populate DeepCost. Estimates feed into DeepTrack budgets. No manual re-entry.'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Lightning Fast',
    description: 'AI-powered automation reduces manual work by up to 40%. Complete takeoffs in hours, not days. Generate estimates in minutes, not weeks.'
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Exceptional Accuracy',
    description: 'Achieve 95%+ accuracy in cost estimation with AI-driven libraries. Reduce errors, minimize rework, and win more profitable projects.'
  },
  {
    icon: 'fa-solid fa-lock',
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SOC 2 Type II certified, GDPR compliant. Your data is protected with the highest security standards.'
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Mobile Ready',
    description: 'Access your projects anywhere, anytime. Native mobile apps for iOS and Android keep your team connected on the go.'
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Expert Support',
    description: '24/7 customer support, dedicated account managers, and comprehensive training. We ensure your success every step of the way.'
  }
]

const integrations = [
  'Procore',
  'Autodesk BIM 360',
  'PlanGrid',
  'QuickBooks',
  'Xero',
  'SAP',
  'Microsoft Project',
  'Primavera P6'
]
</script>
