<template>
  <div>
    <!-- SECTION 1: HERO -->
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
          <span class="text-white">The Operating System for</span>
          <br/>
          <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Modern Construction</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10">
          Manage estimating, projects, workforce, and drawing takeoffs in one unified platform built for contractors.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">Request Demo</a>
          <button class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500/10 transition-all">
            Watch Overview
          </button>
        </div>

        <!-- VIDEO -->
        <div class="max-w-5xl mx-auto mb-12">
          <div class="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
            <div class="relative aspect-video">
              <video
                class="w-full h-full object-cover"
                autoplay
                loop
                muted
                playsinline
                preload="metadata"
                poster="/ccorex-logo.png"
              >
                <source src="/CCorex_main.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>

              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none"></div>
            </div>

            <!-- Decorative Glows -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl"></div>
          </div>
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

    <!-- SECTION 2: PLATFORM OVERVIEW -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            One Platform. Complete Construction Control.
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            CCorex connects every phase of your construction workflow—from initial takeoff to final closeout.
          </p>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            No more juggling disconnected tools, spreadsheets, or manual data entry.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div v-for="point in platformPoints" :key="point.title" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="text-3xl mb-3"><i :class="point.icon"></i></div>
            <h3 class="text-xl font-bold text-white mb-2">{{ point.title }}</h3>
            <p class="text-gray-400">{{ point.description }}</p>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION 3: PRODUCT ECOSYSTEM -->
    <section id="products" class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
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

        <div class="space-y-12">
          <div v-for="(app, index) in products" :key="app.name" class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'">
              <div class="flex items-center gap-3 mb-4">
                <div class="text-5xl"><i :class="app.icon"></i></div>
                <div>
                  <h3 class="text-3xl font-bold text-white">{{ app.name }}</h3>
                  <p class="text-primary-400 font-semibold text-lg">{{ app.subtitle }}</p>
                </div>
              </div>
              <p class="text-xl text-gray-300 mb-6">{{ app.description }}</p>
              <ul class="space-y-3 mb-6">
                <li v-for="feature in app.features" :key="feature" class="flex items-start gap-3 text-gray-300">
                  <i class="fa-solid fa-check text-primary-400 text-lg mt-1"></i>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              <NuxtLink :to="app.link" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500/10 border border-primary-500 text-primary-400 font-semibold hover:bg-primary-500 hover:text-slate-900 transition-all">
                Learn More
                <i class="fa-solid fa-arrow-right"></i>
              </NuxtLink>
            </div>
            <div :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'">
              <!-- SCREENSHOT PLACEHOLDER -->
              <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50">
                <div class="aspect-video flex items-center justify-center text-gray-400">
                  <div class="text-center">
                    <i class="fa-regular fa-image text-7xl text-primary-400"></i>
                    <p class="font-semibold">[SCREENSHOT – {{ app.name }} interface]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: HOW CCOREX WORKS -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            Your Complete Construction Workflow
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            From tender to closeout, CCorex manages every step of your construction process.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div v-for="(step, index) in workflowSteps" :key="step.title" class="relative p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary-500 text-slate-900 font-bold flex items-center justify-center text-xl">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-bold text-white mb-3 mt-2">{{ step.title }}</h3>
            <p class="text-gray-400">{{ step.description }}</p>
          </div>
        </div>

        <!-- WORKFLOW DIAGRAM PLACEHOLDER -->
        <div class="p-12 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50">
          <div class="text-center text-gray-400">
            <i class="fa-regular fa-image text-7xl text-primary-400"></i>
            <p class="text-lg font-semibold">[IMAGE PLACEHOLDER – Workflow diagram with icons and arrows]</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: KEY FEATURES -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            Built for Construction Teams
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to manage construction projects from start to finish.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="feature in keyFeatures" :key="feature.title" class="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary-500/50 transition-all">
            <div class="text-3xl mb-3"><i :class="feature.icon"></i></div>
            <h3 class="text-lg font-bold text-white mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: INDUSTRIES -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Trusted Across Construction Sectors
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            From general contractors to specialized trades, CCorex serves the entire construction industry.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="industry in industries" :key="industry.name" class="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary-500/50 hover:bg-white/10 transition-all group">
            <div class="text-4xl mb-4"><i :class="industry.icon"></i></div>
            <h3 class="text-xl font-bold text-white mb-2">{{ industry.name }}</h3>
            <p class="text-gray-400 mb-4">{{ industry.description }}</p>
            <NuxtLink to="/industries" class="inline-flex items-center gap-2 text-primary-400 font-semibold group-hover:gap-3 transition-all">
              Learn more
              <i class="fa-solid fa-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7: CUSTOMER VALUE -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            Transform Your Construction Operations
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from construction teams using CCorex.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div v-for="benefit in customerBenefits" :key="benefit.title" class="text-center p-8 rounded-xl border border-white/10 bg-white/5">
            <div class="text-5xl font-bold text-primary-400 mb-3">{{ benefit.stat }}</div>
            <h3 class="text-xl font-bold text-white mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-400">{{ benefit.description }}</p>
          </div>
        </div>

        <!-- DASHBOARD PLACEHOLDER -->
        <div class="p-12 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50">
          <div class="text-center text-gray-400">
            <i class="fa-regular fa-image text-7xl text-primary-400"></i>
            <p class="text-lg font-semibold">[IMAGE PLACEHOLDER – Construction site digital dashboard on tablet]</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 8: AI IN CONSTRUCTION -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-6">
              Powered by AI
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
              DeepPlan AI: The Future of Takeoffs
            </h2>
            <p class="text-xl text-gray-300 mb-6">
              Traditional takeoffs are slow, manual, and error-prone. DeepPlan AI uses computer vision and machine learning to automatically detect and measure elements in your drawings.
            </p>
            
            <div class="space-y-4 mb-8">
              <div v-for="capability in aiCapabilities" :key="capability.title" class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <i class="fa-solid fa-check text-primary-400 text-sm"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">{{ capability.title }}</h4>
                  <p class="text-gray-400 text-sm">{{ capability.description }}</p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                <div class="text-3xl font-bold text-primary-400 mb-1">40%</div>
                <div class="text-sm text-gray-400">Faster than manual</div>
              </div>
              <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                <div class="text-3xl font-bold text-primary-400 mb-1">95%+</div>
                <div class="text-sm text-gray-400">Accuracy rate</div>
              </div>
            </div>
          </div>

          <div>
            <!-- AI DEMO VIDEO PLACEHOLDER -->
            <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-900/50">
              <div class="aspect-video flex items-center justify-center text-gray-400">
                <div class="text-center">
                  <i class="fa-solid fa-play text-7xl text-primary-400"></i>
                  <p class="text-lg font-semibold">[VIDEO PLACEHOLDER – AI takeoff demo]</p>
                  <p class="text-sm mt-2">Showing automatic detection and measurement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 9: INTEGRATIONS -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Connect Your Construction Stack
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            CCorex integrates with the tools you already use. Sync data with accounting software, ERP systems, document management, and BIM platforms.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div v-for="category in integrationCategories" :key="category.name" class="space-y-4">
            <h3 class="text-lg font-bold text-white mb-4">{{ category.name }}</h3>
            <div v-for="integration in category.tools" :key="integration" class="p-4 rounded-lg border border-white/10 bg-white/5 text-center hover:border-primary-500/50 transition-all">
              <div class="font-semibold text-gray-300">{{ integration }}</div>
            </div>
          </div>
        </div>

        <!-- INTEGRATION DIAGRAM PLACEHOLDER -->
        <div class="p-12 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50 mb-8">
          <div class="text-center text-gray-400">
            <i class="fa-regular fa-image text-7xl text-primary-400"></i>
            <p class="text-lg font-semibold">[IMAGE PLACEHOLDER – Integration ecosystem diagram]</p>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/integrations" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-500 text-primary-400 font-semibold hover:bg-primary-500 hover:text-slate-900 transition-all">
            View All Integrations
            <i class="fa-solid fa-arrow-right"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- SECTION 10: TESTIMONIALS -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
            Trusted by Leading Construction Firms
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            See what construction professionals are saying about CCorex.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="p-8 rounded-xl border border-white/10 bg-white/5">
            <div class="flex items-center gap-1 mb-4">
              <i v-for="i in 5" :key="i" class="fa-solid fa-star text-yellow-400 text-xl"></i>
            </div>
            <p class="text-gray-300 mb-6 italic">"{{ testimonial.quote }}"</p>
            <div class="flex items-center gap-4">
              <!-- PHOTO PLACEHOLDER -->
              <div class="w-12 h-12 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center">
                <span class="text-primary-400 font-bold">{{ testimonial.initials }}</span>
              </div>
              <div>
                <div class="font-semibold text-white">{{ testimonial.name }}</div>
                <div class="text-sm text-gray-400">{{ testimonial.role }}</div>
                <div class="text-sm text-gray-500">{{ testimonial.company }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- CLIENT LOGOS PLACEHOLDER -->
        <div class="mt-16 p-8 rounded-xl border border-white/10 bg-white/5">
          <p class="text-center text-gray-400 mb-6">Trusted by leading construction companies</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="i in 8" :key="i" class="aspect-video rounded-lg border border-dashed border-primary-500/30 bg-slate-800/50 flex items-center justify-center">
              <span class="text-xs text-gray-500">[Client Logo]</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 11: FINAL CTA -->
    <section class="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-6xl font-bold mb-6 text-white">
          Run Your Entire Construction Business on One Platform
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          Join hundreds of construction firms already using CCorex to streamline estimating, project management, and workforce operations.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all text-lg">
            Request Demo
          </a>
          <a href="/pricing" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500 hover:text-slate-900 transition-all text-lg">
            Start Free Trial
          </a>
          <NuxtLink to="/pricing" class="px-8 py-4 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all text-lg">
            View Pricing
          </NuxtLink>
        </div>

        <!-- Trust Indicators -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div v-for="trust in trustIndicators" :key="trust.label" class="p-4 rounded-lg bg-white/5 border border-white/10">
            <div class="text-2xl mb-2"><i :class="trust.icon"></i></div>
            <div class="text-sm font-semibold text-white">{{ trust.label }}</div>
          </div>
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

const platformPoints = [
  {
    icon: 'fa-solid fa-link',
    title: 'Unified Data Across All Apps',
    description: 'Data flows seamlessly between DeepPlanAI, DeepCost, DeepTrack, and DeepHR. No manual re-entry.'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Real-Time Synchronization',
    description: 'Changes in one app instantly reflect across the platform. Everyone works with the latest data.'
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Single Source of Truth',
    description: 'One centralized database eliminates version conflicts and ensures data accuracy.'
  },
  {
    icon: 'fa-solid fa-cloud',
    title: 'Cloud-Based Accessibility',
    description: 'Access your projects from anywhere, on any device. Desktop, tablet, or mobile.'
  }
]

const products = [
  {
    name: 'DeepCost',
    subtitle: 'Construction Estimation & Tender Management',
    icon: 'fa-solid fa-coins',
    description: 'Achieve 95%+ accuracy in MEP cost estimation with AI-driven libraries. Generate professional BOQs and tender documents in minutes, not days.',
    features: [
      'Comprehensive MEP libraries (ACMV, Fire, ELV, A&A)',
      'AI quantity-to-cost mapping',
      'Automated BOQ generation',
      'Multi-currency & tax support',
      'Tender comparison & analysis'
    ],
    link: '/products/deepcost'
  },
  {
    name: 'DeepTrack',
    subtitle: 'Project Execution & Site Management',
    icon: 'fa-solid fa-chart-bar',
    description: 'Maintain complete control over project budgets, purchase orders, and site activities. Track variance, manage approvals, and ensure spend visibility.',
    features: [
      'Real-time budget vs actuals',
      'Multi-level PO approval workflow',
      'Variance analysis & alerts',
      'Supplier & subcontractor management',
      'Site progress tracking'
    ],
    link: '/products/deeptrack'
  },
  {
    name: 'DeepHR',
    subtitle: 'Workforce & Labour Management',
    icon: 'fa-solid fa-users',
    description: 'Unify your workforce operations from planning to payroll. Mobile-enabled time tracking, compliance management, and resource optimization.',
    features: [
      'Workforce planning & rostering',
      'Mobile time tracking with geolocation',
      'Leave & attendance management',
      'Compliance & certification tracking',
      'Payroll integration'
    ],
    link: '/products/deephr'
  },
  {
    name: 'DeepPlan AI',
    subtitle: 'AI-Powered Drawing Takeoff & Quantity Extraction',
    icon: 'mdi mdi-ruler',
    description: 'Transform your takeoff process with AI-powered measurement and quantity extraction. Reduce manual work by 40% while increasing accuracy.',
    features: [
      'Automated area & perimeter measurement',
      'AI-powered quantity extraction',
      'Real-time collaboration on drawings',
      'Direct integration with DeepCost',
      'Support for all drawing formats'
    ],
    link: '/products/deepplanai'
  }
]

const workflowSteps = [
  {
    title: 'Tender Estimation',
    description: 'Upload drawings → AI extracts quantities → Generate accurate estimates'
  },
  {
    title: 'Drawing Takeoff',
    description: 'Measure & annotate → Collaborate in real-time → Export to estimation'
  },
  {
    title: 'Project Planning',
    description: 'Convert estimate to budget → Set milestones → Assign resources'
  },
  {
    title: 'Site Execution',
    description: 'Track progress → Manage POs → Monitor spend vs budget'
  },
  {
    title: 'Workforce Management',
    description: 'Plan shifts → Track time → Manage compliance'
  },
  {
    title: 'Cost Tracking',
    description: 'Real-time variance → Automated alerts → Financial reporting'
  }
]

const keyFeatures = [
  {
    icon: 'fa-solid fa-book',
    title: 'Centralized Cost Database',
    description: 'Pre-loaded libraries for MEP systems. Customize rates and maintain your own cost database.'
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'AI Quantity Takeoff',
    description: 'Let AI handle tedious measurement work. Review, adjust, and export quantities in minutes.'
  },
  {
    icon: 'fa-solid fa-calendar-days',
    title: 'Construction Scheduling',
    description: 'Gantt charts, critical path analysis, and resource leveling built for construction.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Productivity Tracking',
    description: 'Monitor labor hours, productivity rates, and resource utilization across all sites.'
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    title: 'Procurement Integration',
    description: 'Connect with suppliers, manage RFQs, compare quotes, and track deliveries.'
  },
  {
    icon: 'fa-solid fa-folder',
    title: 'Document Management',
    description: 'Centralized repository for drawings, contracts, submittals, and RFIs.'
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Site Reporting',
    description: 'Daily progress reports, safety logs, and quality inspections from mobile devices.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Budget vs Actual',
    description: 'Real-time variance analysis with automated alerts when costs exceed thresholds.'
  }
]

const industries = [
  {
    name: 'General Contractors',
    icon: 'fa-solid fa-helmet-safety',
    description: 'End-to-end project management for commercial and residential construction.'
  },
  {
    name: 'Infrastructure Projects',
    icon: 'fa-solid fa-bridge',
    description: 'Manage large-scale civil works, roads, bridges, and utilities.'
  },
  {
    name: 'Commercial Buildings',
    icon: 'fa-solid fa-building',
    description: 'Office towers, retail centers, and mixed-use developments.'
  },
  {
    name: 'Industrial Plants',
    icon: 'fa-solid fa-industry',
    description: 'Manufacturing facilities, warehouses, and processing plants.'
  },
  {
    name: 'MEP Contractors',
    icon: 'fa-solid fa-bolt',
    description: 'Specialized estimation and project management for mechanical, electrical, and plumbing.'
  },
  {
    name: 'Developers',
    icon: 'fa-solid fa-house-chimney',
    description: 'Portfolio management, cost control, and financial tracking across multiple projects.'
  }
]

const customerBenefits = [
  {
    stat: '70%',
    title: 'Reduce Estimation Time',
    description: 'AI-powered takeoffs and automated BOQ generation eliminate manual calculations.'
  },
  {
    stat: '100%',
    title: 'Improve Project Visibility',
    description: 'Real-time dashboards show exactly where every project stands—budget, schedule, resources.'
  },
  {
    stat: '15%',
    title: 'Control Project Costs',
    description: 'Catch budget overruns before they happen with automated variance alerts.'
  },
  {
    stat: '0',
    title: 'Eliminate Spreadsheet Chaos',
    description: 'Replace error-prone spreadsheets with a unified platform everyone can access.'
  },
  {
    stat: '40%',
    title: 'Improve Workforce Productivity',
    description: 'Mobile time tracking and resource optimization ensure your team works efficiently.'
  },
  {
    stat: '95%+',
    title: 'Exceptional Accuracy',
    description: 'AI-driven libraries and intelligent mapping deliver industry-leading estimation accuracy.'
  }
]

const aiCapabilities = [
  {
    title: 'Automatic Detection',
    description: 'AI identifies walls, doors, windows, and other elements automatically'
  },
  {
    title: 'Area & Perimeter Calculation',
    description: 'Instant measurements with pixel-perfect accuracy'
  },
  {
    title: 'Count Detection',
    description: 'Automatically count fixtures, outlets, and equipment'
  },
  {
    title: 'Multi-Layer Analysis',
    description: 'Process complex drawings with multiple layers and annotations'
  },
  {
    title: 'Learning from Corrections',
    description: 'AI improves over time based on your feedback and adjustments'
  }
]

const integrationCategories = [
  {
    name: 'Accounting & Finance',
    tools: ['QuickBooks', 'Xero', 'SAP', 'NetSuite']
  },
  {
    name: 'Project Management',
    tools: ['Procore', 'BIM 360', 'PlanGrid', 'Primavera P6']
  },
  {
    name: 'Document Management',
    tools: ['Dropbox', 'Google Drive', 'OneDrive', 'Box']
  },
  {
    name: 'Communication',
    tools: ['Slack', 'MS Teams', 'Email', 'SMS']
  }
]

const testimonials = [
  {
    quote: 'CCorex reduced our estimation time from 3 days to 6 hours. The AI takeoff is incredibly accurate.',
    name: 'John Smith',
    role: 'Chief Estimator',
    company: 'ABC Construction',
    initials: 'JS'
  },
  {
    quote: 'We\'ve improved our project margins by 15% thanks to better cost control and real-time tracking.',
    name: 'Sarah Johnson',
    role: 'Project Director',
    company: 'XYZ Contractors',
    initials: 'SJ'
  },
  {
    quote: 'The unified platform eliminated our spreadsheet chaos. Everyone has access to the same data.',
    name: 'Mike Chen',
    role: 'Operations Manager',
    company: 'BuildCo',
    initials: 'MC'
  }
]

const trustIndicators = [
  { icon: 'fa-solid fa-lock', label: 'SOC 2 Type II Certified' },
  { icon: 'fa-solid fa-shield-halved', label: 'GDPR Compliant' },
  { icon: 'fa-solid fa-bolt', label: '99.9% Uptime SLA' },
  { icon: 'fa-solid fa-handshake', label: '24/7 Support' }
]
</script>
