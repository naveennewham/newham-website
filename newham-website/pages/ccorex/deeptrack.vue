<template>
  <div class="min-h-screen bg-slate-900">
    <Head>
      <Title>DeepTrack - Smart Budget & PO Management | CCorex</Title>
      <Meta
        name="description"
        content="DeepTrack: Smart project budgeting and purchase order management. Real-time cost tracking, budget control, and spend visibility for construction projects."
      />
    </Head>

    <!-- Hero Section -->
    <section class="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 opacity-5 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-8 flex justify-center">
          <img src="~/assets/Deepcost_Logo.png" alt="DeepTrack" class="w-32 h-32 drop-shadow-lg" />
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            DeepTrack
          </span>
        </h1>

        <p class="text-2xl text-gray-300 mb-4 font-semibold">Smart Budget & PO Management</p>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Real-time project budgeting and purchase order management. Monitor costs, control spending, and maintain complete financial visibility across all projects.
        </p>

        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8">
          <img src="~/assets/ccorex/Corex_logo.png" alt="CCorex" class="h-5 w-auto brightness-0 invert" />
          <span class="text-cyan-400 font-semibold">Part of CCorex</span>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <NuxtLink
            to="/ccorex"
            class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Explore CCorex
          </NuxtLink>
          <a
            href="#cta"
            class="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">100%</div>
            <p class="text-sm text-gray-400">Cost Visibility</p>
          </div>
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">Real-Time</div>
            <p class="text-sm text-gray-400">Tracking</p>
          </div>
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">$5B+</div>
            <p class="text-sm text-gray-400">Managed Budgets</p>
          </div>
          <div class="p-6 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
            <div class="text-3xl font-bold text-cyan-400 mb-2">30%</div>
            <p class="text-sm text-gray-400">Cost Reduction</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Management Areas -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            Four Pillars of Budget Control
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="area in managementAreas" :key="area.title" class="p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all glass-panel hover:shadow-lg hover:shadow-cyan-500/10">
            <div class="text-5xl mb-4"><i :class="area.icon"></i></div>
            <h3 class="text-2xl font-bold text-white mb-3">{{ area.title }}</h3>
            <p class="text-gray-400 mb-4">{{ area.description }}</p>
            <ul class="space-y-2">
              <li v-for="point in area.points" :key="point" class="text-sm text-gray-300 flex items-start gap-2">
                <span class="text-cyan-400 font-bold mt-1">•</span>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Benefits -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Key Benefits
          </span>
        </h2>

        <div class="space-y-6">
          <div v-for="(benefit, index) in benefits" :key="index" class="flex gap-6 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all glass-panel">
            <div class="text-4xl flex-shrink-0"><i :class="benefit.icon"></i></div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">{{ benefit.title }}</h3>
              <p class="text-gray-400">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            Powerful Features
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="feature in features" :key="feature.title" class="p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all glass-panel">
            <div class="text-4xl mb-4"><i :class="feature.icon"></i></div>
            <h3 class="text-2xl font-bold text-white mb-3">{{ feature.title }}</h3>
            <p class="text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Section -->
    <section class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            Integrates with CCorex
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8 rounded-xl border border-cyan-500/30 text-center glass-panel">
            <div class="text-5xl mb-4"><i class="fa-solid fa-coins"></i></div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">From DeepCost</h3>
            <p class="text-gray-400">Auto-create budgets from cost estimates</p>
          </div>
          <div class="p-8 rounded-xl border border-cyan-500/30 text-center glass-panel">
            <div class="text-5xl mb-4"><i class="fa-solid fa-users"></i></div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">With DeepHR</h3>
            <p class="text-gray-400">Labor cost integration and tracking</p>
          </div>
          <div class="p-8 rounded-xl border border-cyan-500/30 text-center glass-panel">
            <div class="text-5xl mb-4"><i class="mdi mdi-ruler-square"></i></div>
            <h3 class="text-xl font-bold text-cyan-400 mb-2">From DeepPlanAI</h3>
            <p class="text-gray-400">Schedule-based budget allocation</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="relative w-full py-20 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Take Control of Your Project Budgets
        </h2>
        <p class="text-xl text-gray-300 mb-8">
          Real-time visibility and control over every dollar spent on your projects
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Schedule Demo
          </a>
          <NuxtLink
            to="/pricing"
            class="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all"
          >
            View Pricing
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Back to CCorex -->
    <section class="relative w-full py-12 bg-slate-900 border-t border-cyan-500/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-gray-400 mb-6">Explore Other CCorex Apps</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/ccorex/deepcost"
            class="px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all"
          >
            DeepCost
          </NuxtLink>
          <NuxtLink
            to="/ccorex/deephr"
            class="px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all"
          >
            DeepHR
          </NuxtLink>
          <NuxtLink
            to="/ccorex/deepplan-ai"
            class="px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all"
          >
            DeepPlanAI
          </NuxtLink>
          <NuxtLink
            to="/ccorex"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 transition-all"
          >
            <img src="~/assets/ccorex/Corex_logo.png" alt="CCorex" class="h-4 w-auto brightness-0 invert" />
            Back to CCorex
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'DeepTrack - Budget & PO Management | CCorex'
})

const managementAreas = ref([
  {
    icon: 'fa-solid fa-coins',
    title: 'Budget Control',
    description: 'Create and manage project budgets with real-time tracking',
    points: ['Set budget limits', 'Track actual vs. forecast', 'Alert on overruns', 'Multi-level approval']
  },
  {
    icon: 'fa-solid fa-clipboard-list',
    title: 'PO Management',
    description: 'Streamline purchase order creation and tracking',
    points: ['Create POs from estimates', 'Vendor management', 'Invoice matching', 'Payment tracking']
  },
  {
    icon: 'fa-solid fa-chart-bar',
    title: 'Spend Tracking',
    description: 'Monitor and analyze project spending in detail',
    points: ['Real-time dashboards', 'Cost reports', 'Variance analysis', 'Trend insights']
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Reporting',
    description: 'Comprehensive financial reporting and analytics',
    points: ['Cost summaries', 'Profitability analysis', 'Custom reports', 'Export capabilities']
  }
])

const benefits = ref([
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Total Cost Control',
    description: 'Know exactly where every dollar is being spent and forecast costs accurately'
  },
  {
    icon: 'fa-solid fa-stopwatch',
    title: 'Catch Problems Early',
    description: 'Real-time alerts notify you of budget overruns before they become big issues'
  },
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'Better Decision Making',
    description: 'Data-driven insights help you make smarter financial decisions'
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'Faster Approvals',
    description: 'Streamlined workflows speed up purchase order and invoice approvals'
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Mobile Access',
    description: 'Monitor budgets and approve transactions on-the-go from any device'
  },
  {
    icon: 'fa-solid fa-link',
    title: 'Seamless Integration',
    description: 'Works perfectly with DeepCost for automatic budget creation'
  }
])

const features = ref([
  {
    icon: 'fa-solid fa-chart-bar',
    title: 'Live Dashboards',
    description: 'Real-time visual dashboards showing budget status and spending trends'
  },
  {
    icon: 'fa-solid fa-triangle-exclamation',
    title: 'Smart Alerts',
    description: 'Automatic notifications for budget warnings and overruns'
  },
  {
    icon: 'fa-solid fa-file-invoice',
    title: 'Invoice Management',
    description: 'Match invoices to POs automatically with AI-powered validation'
  },
  {
    icon: 'fa-solid fa-credit-card',
    title: 'Payment Tracking',
    description: 'Track payment status and cash flow impact on your projects'
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Multi-User Approval',
    description: 'Configurable approval workflows with role-based permissions'
  },
  {
    icon: 'fa-solid fa-chart-pie',
    title: 'Custom Reports',
    description: 'Create tailored reports for stakeholders and project teams'
  }
])
</script>

<style scoped>
.glass-panel {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
}
</style>
