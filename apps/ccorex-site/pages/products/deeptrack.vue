<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="text-6xl">📊</div>
              <div>
                <h1 class="text-5xl md:text-6xl font-bold text-white">DeepTrack</h1>
                <p class="text-xl text-primary-400 font-semibold">Project Execution & Budget Control</p>
              </div>
            </div>
            <p class="text-2xl text-gray-300 mb-8">
              Maintain complete control over project budgets, purchase orders, and site activities. Track variance, manage approvals, and ensure spend visibility in real-time.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
                Request Demo
              </a>
              <a href="/pricing" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500 hover:text-slate-900 transition-all">
                View Pricing
              </a>
            </div>
            <div class="flex items-center gap-8">
              <div v-for="stat in heroStats" :key="stat.label">
                <div class="text-3xl font-bold text-primary-400">{{ stat.value }}</div>
                <div class="text-sm text-gray-400">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          <div>
            <!-- Screenshot Placeholder -->
            <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50">
              <div class="aspect-video flex items-center justify-center text-gray-400">
                <div class="text-center">
                  <svg class="w-20 h-20 mx-auto mb-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                  <p class="text-lg font-semibold">[SCREENSHOT – DeepTrack Dashboard]</p>
                  <p class="text-sm mt-2">Budget vs actual with variance tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Complete Project Control
          </h2>
          <p class="text-xl text-gray-300">
            DeepTrack gives you real-time visibility into every aspect of your construction projects. From budget management to purchase order workflows, everything you need to keep projects on track and profitable.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="benefit in overviewBenefits" :key="benefit.title" class="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
            <div class="text-4xl mb-4">{{ benefit.icon }}</div>
            <h3 class="text-xl font-bold text-white mb-3">{{ benefit.title }}</h3>
            <p class="text-gray-400">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Everything You Need to Manage Projects
          </h2>
        </div>

        <div class="space-y-16">
          <div v-for="(feature, index) in keyFeatures" :key="feature.title" class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'">
              <div class="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-4">
                {{ feature.category }}
              </div>
              <h3 class="text-3xl font-bold text-white mb-4">{{ feature.title }}</h3>
              <p class="text-xl text-gray-300 mb-6">{{ feature.description }}</p>
              <ul class="space-y-3">
                <li v-for="point in feature.points" :key="point" class="flex items-start gap-3 text-gray-300">
                  <span class="text-primary-400 text-xl mt-1">✓</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
            <div :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'">
              <!-- Feature Screenshot Placeholder -->
              <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50">
                <div class="aspect-video flex items-center justify-center text-gray-400">
                  <div class="text-center">
                    <svg class="w-16 h-16 mx-auto mb-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                    <p class="font-semibold">[SCREENSHOT – {{ feature.title }}]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Features -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Real-Time Project Dashboards
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Get instant visibility into project health with customizable dashboards.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="widget in dashboardWidgets" :key="widget.name" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="text-3xl mb-3">{{ widget.icon }}</div>
            <h3 class="text-lg font-bold text-white mb-2">{{ widget.name }}</h3>
            <p class="text-sm text-gray-400">{{ widget.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Streamlined Project Workflow
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            From budget setup to project closeout, DeepTrack guides you through every step.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div v-for="(step, index) in workflow" :key="step.title" class="relative p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary-500 text-slate-900 font-bold flex items-center justify-center text-xl">
              {{ index + 1 }}
            </div>
            <div class="text-3xl mb-4 mt-2">{{ step.icon }}</div>
            <h3 class="text-lg font-bold text-white mb-2">{{ step.title }}</h3>
            <p class="text-sm text-gray-400">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Approval Workflows -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
              Multi-Level Approval Workflows
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Configure custom approval hierarchies for purchase orders, change orders, and budget modifications. Ensure proper authorization at every level.
            </p>
            <div class="space-y-4">
              <div v-for="level in approvalLevels" :key="level.name" class="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div class="text-3xl">{{ level.icon }}</div>
                <div>
                  <h4 class="font-semibold text-white mb-1">{{ level.name }}</h4>
                  <p class="text-sm text-gray-400">{{ level.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <!-- Workflow Diagram Placeholder -->
            <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50">
              <div class="aspect-square flex items-center justify-center text-gray-400">
                <div class="text-center">
                  <svg class="w-20 h-20 mx-auto mb-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <p class="text-lg font-semibold">[DIAGRAM – Approval Flow]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Built For Your Role
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="useCase in useCases" :key="useCase.role" class="p-8 rounded-2xl border border-white/10 bg-white/5">
            <div class="text-4xl mb-4">{{ useCase.icon }}</div>
            <h3 class="text-2xl font-bold text-white mb-3">{{ useCase.role }}</h3>
            <p class="text-gray-400 mb-6">{{ useCase.description }}</p>
            <div class="space-y-2">
              <div v-for="benefit in useCase.benefits" :key="benefit" class="flex items-start gap-2 text-sm text-gray-300">
                <span class="text-primary-400 mt-1">•</span>
                <span>{{ benefit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile App -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <!-- Mobile App Screenshot Placeholder -->
            <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-900/50">
              <div class="aspect-[9/16] max-w-sm mx-auto flex items-center justify-center text-gray-400">
                <div class="text-center">
                  <svg class="w-16 h-16 mx-auto mb-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  <p class="font-semibold">[SCREENSHOT – Mobile App]</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-6">
              Mobile First
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
              Manage Projects from Anywhere
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Full-featured mobile apps for iOS and Android. Access project data, approve POs, and track progress from the field.
            </p>
            <ul class="space-y-4 mb-8">
              <li v-for="feature in mobileFeatures" :key="feature" class="flex items-start gap-3 text-gray-300">
                <span class="text-primary-400 text-xl mt-1">✓</span>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <div class="flex gap-4">
              <a href="#" class="px-6 py-3 rounded-lg bg-slate-900 border border-white/10 text-white font-semibold hover:border-primary-500/50 transition-all">
                📱 App Store
              </a>
              <a href="#" class="px-6 py-3 rounded-lg bg-slate-900 border border-white/10 text-white font-semibold hover:border-primary-500/50 transition-all">
                🤖 Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Seamless Integration
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            DeepTrack connects with your existing tools and workflows.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="integration in integrations" :key="integration.name" class="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary-500/50 transition-all">
            <div class="text-3xl mb-3">{{ integration.icon }}</div>
            <h3 class="text-lg font-bold text-white mb-2">{{ integration.name }}</h3>
            <p class="text-sm text-gray-400">{{ integration.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Take Control of Your Projects
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          See how DeepTrack can help you deliver projects on time and on budget.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
            Request Demo
          </a>
          <a href="/pricing" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500 hover:text-slate-900 transition-all">
            View Pricing
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const heroStats = [
  { value: '100%', label: 'Visibility' },
  { value: 'Real-time', label: 'Updates' },
  { value: '15%', label: 'Cost Savings' }
]

const overviewBenefits = [
  {
    icon: '💰',
    title: 'Budget Control',
    description: 'Track every dollar with real-time budget vs actual reporting and variance alerts.'
  },
  {
    icon: '📋',
    title: 'PO Management',
    description: 'Streamline purchase order workflows with multi-level approvals and tracking.'
  },
  {
    icon: '📊',
    title: 'Live Dashboards',
    description: 'Monitor project health with customizable dashboards and automated reporting.'
  }
]

const keyFeatures = [
  {
    category: 'Budget Management',
    title: 'Real-Time Budget vs Actual',
    description: 'See exactly where your project stands financially at any moment. Track committed costs, actual spend, and forecast completion costs.',
    points: [
      'Live budget tracking',
      'Committed vs actual reporting',
      'Cost forecasting',
      'Variance analysis',
      'Budget allocation by trade',
      'Historical trend analysis'
    ]
  },
  {
    category: 'Purchase Orders',
    title: 'Complete PO Workflow',
    description: 'Create, approve, and track purchase orders with full audit trails. Manage supplier relationships and ensure proper authorization.',
    points: [
      'Multi-level approval routing',
      'Supplier management',
      'PO templates',
      'Delivery tracking',
      'Invoice matching',
      'Payment scheduling'
    ]
  },
  {
    category: 'Variance Tracking',
    title: 'Automated Variance Alerts',
    description: 'Get notified immediately when costs exceed thresholds. Catch budget overruns before they become problems.',
    points: [
      'Customizable alert thresholds',
      'Email and mobile notifications',
      'Variance reporting',
      'Root cause analysis',
      'Corrective action tracking',
      'Trend identification'
    ]
  },
  {
    category: 'Reporting',
    title: 'Comprehensive Reporting',
    description: 'Generate detailed reports for stakeholders, executives, and clients. Export to Excel, PDF, or integrate with BI tools.',
    points: [
      'Custom report builder',
      'Scheduled reports',
      'Executive dashboards',
      'Client portals',
      'Export options',
      'Data visualization'
    ]
  }
]

const dashboardWidgets = [
  {
    icon: '💰',
    name: 'Budget Overview',
    description: 'Total budget, spent, committed, and remaining'
  },
  {
    icon: '📈',
    name: 'Variance Trends',
    description: 'Track variance over time by category'
  },
  {
    icon: '📋',
    name: 'PO Status',
    description: 'Pending, approved, and completed POs'
  },
  {
    icon: '⏱️',
    name: 'Schedule Health',
    description: 'On-time vs delayed milestones'
  },
  {
    icon: '👥',
    name: 'Resource Utilization',
    description: 'Labor and equipment allocation'
  },
  {
    icon: '⚠️',
    name: 'Risk Indicators',
    description: 'Budget risks and alerts'
  },
  {
    icon: '📊',
    name: 'Cash Flow',
    description: 'Projected vs actual cash flow'
  },
  {
    icon: '✅',
    name: 'Completion %',
    description: 'Overall project progress'
  }
]

const workflow = [
  {
    icon: '📋',
    title: 'Setup Budget',
    description: 'Import from DeepCost or create manually'
  },
  {
    icon: '🛒',
    title: 'Create POs',
    description: 'Generate purchase orders against budget'
  },
  {
    icon: '✅',
    title: 'Approvals',
    description: 'Route through approval hierarchy'
  },
  {
    icon: '📊',
    title: 'Track Spend',
    description: 'Monitor actual vs budget in real-time'
  },
  {
    icon: '📈',
    title: 'Report',
    description: 'Generate reports for stakeholders'
  }
]

const approvalLevels = [
  {
    icon: '👤',
    name: 'Project Manager',
    description: 'First level approval for POs under $10K'
  },
  {
    icon: '👔',
    name: 'Director',
    description: 'Second level approval for POs $10K-$50K'
  },
  {
    icon: '🏢',
    name: 'Executive',
    description: 'Final approval for POs over $50K'
  }
]

const useCases = [
  {
    role: 'Project Managers',
    icon: '👷',
    description: 'Complete visibility and control over project execution.',
    benefits: [
      'Real-time budget tracking',
      'PO approval management',
      'Progress monitoring',
      'Stakeholder reporting'
    ]
  },
  {
    role: 'Finance Teams',
    icon: '💼',
    description: 'Accurate financial tracking and forecasting.',
    benefits: [
      'Cash flow management',
      'Cost forecasting',
      'Invoice processing',
      'Financial reporting'
    ]
  },
  {
    role: 'Executives',
    icon: '📊',
    description: 'High-level portfolio visibility and decision support.',
    benefits: [
      'Portfolio dashboards',
      'Risk identification',
      'Performance metrics',
      'Strategic planning'
    ]
  }
]

const mobileFeatures = [
  'View project dashboards and budgets',
  'Approve or reject purchase orders',
  'Track site progress and activities',
  'Upload photos and documents',
  'Offline mode for field work',
  'Push notifications for approvals'
]

const integrations = [
  {
    icon: '💰',
    name: 'DeepCost',
    description: 'Import budgets from estimates'
  },
  {
    icon: '👥',
    name: 'DeepHR',
    description: 'Sync labor costs automatically'
  },
  {
    icon: '💳',
    name: 'Accounting',
    description: 'QuickBooks, Xero, SAP integration'
  },
  {
    icon: '📁',
    name: 'Document Mgmt',
    description: 'Connect with Dropbox, Drive, OneDrive'
  }
]
</script>
