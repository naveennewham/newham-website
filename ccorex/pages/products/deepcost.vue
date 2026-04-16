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
              <div class="text-6xl"><i class="fa-solid fa-coins"></i></div>
              <div>
                <h1 class="text-5xl md:text-6xl font-bold text-white">DeepCost</h1>
                <p class="text-xl text-primary-400 font-semibold">Construction Estimation & Tendering</p>
              </div>
            </div>
            <p class="text-2xl text-gray-300 mb-8">
              Achieve 95%+ accuracy in MEP cost estimation with AI-driven libraries. Generate professional BOQs and tender documents in minutes, not days.
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
                  <i class="fa-regular fa-image text-7xl text-primary-400"></i>
                  <p class="text-lg font-semibold">[SCREENSHOT – DeepCost Dashboard]</p>
                  <p class="text-sm mt-2">Estimation interface with cost breakdown</p>
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
            The Complete Estimation Solution
          </h2>
          <p class="text-xl text-gray-300">
            DeepCost transforms the way construction teams prepare estimates and tenders. Built specifically for MEP contractors and general contractors, it combines comprehensive cost libraries with AI-powered automation.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="benefit in overviewBenefits" :key="benefit.title" class="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
            <div class="text-4xl mb-4"><i :class="benefit.icon"></i></div>
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
            Powerful Features for Accurate Estimates
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
                  <i class="fa-solid fa-check text-primary-400 text-lg mt-1"></i>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
            <div :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'">
              <!-- Feature Screenshot Placeholder -->
              <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50">
                <div class="aspect-video flex items-center justify-center text-gray-400">
                  <div class="text-center">
                    <i class="fa-regular fa-image text-7xl text-primary-400"></i>
                    <p class="font-semibold">[SCREENSHOT – {{ feature.title }}]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            How DeepCost Works
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            From takeoff to tender submission in a streamlined workflow.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(step, index) in workflow" :key="step.title" class="relative p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary-500 text-slate-900 font-bold flex items-center justify-center text-xl">
              {{ index + 1 }}
            </div>
            <div class="text-3xl mb-4 mt-2"><i :class="step.icon"></i></div>
            <h3 class="text-lg font-bold text-white mb-2">{{ step.title }}</h3>
            <p class="text-sm text-gray-400">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- MEP Libraries -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Comprehensive MEP Cost Libraries
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Pre-loaded with thousands of items across all MEP disciplines.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="library in mepLibraries" :key="library.name" class="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary-500/50 transition-all">
            <div class="text-4xl mb-4"><i :class="library.icon"></i></div>
            <h3 class="text-xl font-bold text-white mb-3">{{ library.name }}</h3>
            <p class="text-gray-400 mb-4">{{ library.description }}</p>
            <div class="text-sm text-primary-400 font-semibold">{{ library.items }} items</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Perfect For
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="useCase in useCases" :key="useCase.role" class="p-8 rounded-2xl border border-white/10 bg-white/5">
            <div class="text-4xl mb-4"><i :class="useCase.icon"></i></div>
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

    <!-- Integration -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
              Seamless Integration
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              DeepCost works perfectly with DeepPlan AI for automated takeoffs and DeepTrack for project budgeting. Export to Excel, PDF, or your accounting system.
            </p>
            <div class="space-y-4">
              <div v-for="integration in integrations" :key="integration.name" class="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div class="text-3xl"><i :class="integration.icon"></i></div>
                <div>
                  <h4 class="font-semibold text-white mb-1">{{ integration.name }}</h4>
                  <p class="text-sm text-gray-400">{{ integration.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <!-- Integration Diagram Placeholder -->
            <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50">
              <div class="aspect-square flex items-center justify-center text-gray-400">
                <div class="text-center">
                  <i class="fa-regular fa-image text-7xl text-primary-400"></i>
                  <p class="text-lg font-semibold">[DIAGRAM – Integration Flow]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Calculator -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Calculate Your ROI
          </h2>
          <p class="text-xl text-gray-300">
            See how much time and money DeepCost can save your team.
          </p>
        </div>

        <div class="p-8 rounded-2xl border border-white/10 bg-white/5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div v-for="metric in roiMetrics" :key="metric.label" class="text-center p-6 rounded-xl bg-slate-900/50">
              <div class="text-4xl font-bold text-primary-400 mb-2">{{ metric.value }}</div>
              <div class="text-sm text-gray-400 mb-3">{{ metric.label }}</div>
              <div class="text-xs text-gray-500">{{ metric.description }}</div>
            </div>
          </div>
          <div class="text-center">
            <a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
              Get Your Custom ROI Analysis
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Transform Your Estimation Process?
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          Join hundreds of contractors already using DeepCost for faster, more accurate estimates.
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
  { value: '95%+', label: 'Accuracy' },
  { value: '70%', label: 'Time Saved' },
  { value: '5,000+', label: 'Cost Items' }
]

const overviewBenefits = [
  {
    icon: 'fa-solid fa-bolt',
    title: 'Lightning Fast',
    description: 'Generate complete estimates in hours instead of days with AI-powered automation.'
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Highly Accurate',
    description: 'Achieve 95%+ accuracy with comprehensive MEP libraries and intelligent cost mapping.'
  },
  {
    icon: 'fa-solid fa-chart-bar',
    title: 'Professional Output',
    description: 'Create polished BOQs, tender documents, and proposals that win projects.'
  }
]

const keyFeatures = [
  {
    category: 'Cost Libraries',
    title: 'Comprehensive MEP Libraries',
    description: 'Access thousands of pre-loaded cost items across all MEP disciplines. Customize rates, add your own items, and maintain your competitive advantage.',
    points: [
      'ACMV (Air Conditioning & Mechanical Ventilation)',
      'Fire Protection Systems',
      'ELV (Extra Low Voltage) Systems',
      'Architecture & Additions',
      'Custom rate management',
      'Historical cost data'
    ]
  },
  {
    category: 'AI Automation',
    title: 'AI Quantity-to-Cost Mapping',
    description: 'Automatically map quantities from DeepPlan AI to cost items. The AI learns your preferences and improves accuracy over time.',
    points: [
      'Intelligent item matching',
      'Learning from corrections',
      'Bulk quantity import',
      'Custom mapping rules',
      'Confidence scoring',
      'Manual override options'
    ]
  },
  {
    category: 'BOQ Generation',
    title: 'Automated BOQ Creation',
    description: 'Generate professional Bills of Quantities with a single click. Include all necessary details, calculations, and formatting.',
    points: [
      'Multiple BOQ templates',
      'Custom formatting options',
      'Multi-currency support',
      'Tax calculations',
      'Markup and margins',
      'Export to Excel/PDF'
    ]
  },
  {
    category: 'Tender Management',
    title: 'Complete Tender Workflow',
    description: 'Manage the entire tender process from initial estimate to final submission. Compare multiple scenarios and track revisions.',
    points: [
      'Tender comparison matrix',
      'Revision tracking',
      'Scenario modeling',
      'Subcontractor quotes',
      'Approval workflows',
      'Submission packages'
    ]
  }
]

const workflow = [
  {
    icon: 'mdi mdi-ruler',
    title: 'Import Quantities',
    description: 'Import from DeepPlan AI or enter manually'
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'AI Mapping',
    description: 'AI maps quantities to cost library items'
  },
  {
    icon: 'fa-solid fa-pen',
    title: 'Review & Adjust',
    description: 'Review mappings and make adjustments'
  },
  {
    icon: 'fa-regular fa-file-lines',
    title: 'Generate BOQ',
    description: 'Create professional tender documents'
  }
]

const mepLibraries = [
  {
    name: 'ACMV',
    icon: 'fa-solid fa-snowflake',
    description: 'Air conditioning, ventilation, and mechanical systems',
    items: '2,500+'
  },
  {
    name: 'Fire Protection',
    icon: 'fa-solid fa-fire',
    description: 'Fire alarm, sprinkler, and suppression systems',
    items: '1,200+'
  },
  {
    name: 'ELV Systems',
    icon: 'fa-solid fa-satellite-dish',
    description: 'Security, access control, and communication systems',
    items: '1,800+'
  },
  {
    name: 'Architecture',
    icon: 'fa-solid fa-helmet-safety',
    description: 'Architectural finishes and additions',
    items: '1,500+'
  }
]

const useCases = [
  {
    role: 'MEP Contractors',
    icon: 'fa-solid fa-bolt',
    description: 'Specialized estimation for mechanical, electrical, and plumbing trades.',
    benefits: [
      'Trade-specific cost libraries',
      'Fast bid turnaround',
      'Competitive pricing',
      'Win more projects'
    ]
  },
  {
    role: 'General Contractors',
    icon: 'fa-solid fa-helmet-safety',
    description: 'Complete project estimation including all trades and disciplines.',
    benefits: [
      'Multi-trade coordination',
      'Subcontractor management',
      'Budget planning',
      'Accurate forecasting'
    ]
  },
  {
    role: 'Cost Consultants',
    icon: 'fa-solid fa-briefcase',
    description: 'Professional cost planning and estimation services for clients.',
    benefits: [
      'Client-specific databases',
      'Professional reports',
      'Benchmarking tools',
      'Multiple projects'
    ]
  }
]

const integrations = [
  {
    icon: 'mdi mdi-ruler',
    name: 'DeepPlan AI',
    description: 'Import quantities directly from AI-powered takeoffs'
  },
  {
    icon: 'fa-solid fa-chart-bar',
    name: 'DeepTrack',
    description: 'Convert estimates to project budgets with one click'
  },
  {
    icon: 'fa-solid fa-folder',
    name: 'Excel & PDF',
    description: 'Export to standard formats for sharing and archiving'
  },
  {
    icon: 'fa-solid fa-coins',
    name: 'Accounting Systems',
    description: 'Integrate with QuickBooks, Xero, and other platforms'
  }
]

const roiMetrics = [
  {
    value: '70%',
    label: 'Time Savings',
    description: 'Reduce estimation time from days to hours'
  },
  {
    value: '95%+',
    label: 'Accuracy Rate',
    description: 'Minimize costly estimation errors'
  },
  {
    value: '3-6 mo',
    label: 'Payback Period',
    description: 'Typical ROI timeframe for most teams'
  },
  {
    value: '25%',
    label: 'More Bids',
    description: 'Increase bid capacity with faster turnaround'
  }
]
</script>
