<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 text-center pt-32 pb-20">
        <div class="mb-6">
          <span class="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold">
            The CCorex Platform
          </span>
        </div>
        <h1 class="text-5xl md:text-7xl font-bold mb-6 text-white">
          One Unified Platform for
          <br/>
          <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Complete Construction Control
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10">
          CCorex brings together estimation, project management, workforce operations, and AI-powered takeoffs into a single, integrated platform.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">Request Demo</a>
          <NuxtLink to="/products" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500/10 transition-all">Explore Products</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Platform Architecture -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Built on a Unified Architecture
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlike disconnected point solutions, CCorex is built from the ground up as an integrated platform where data flows seamlessly between all applications.
          </p>
        </div>

        <!-- Architecture Diagram Placeholder -->
        <div class="mb-16 p-12 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-900/50">
          <div class="text-center text-gray-400">
            <i class="mdi mdi-view-dashboard text-7xl text-primary-400"></i>
            <p class="text-lg font-semibold">[DIAGRAM PLACEHOLDER – Platform Architecture]</p>
            <p class="text-sm mt-2">Showing unified database, API layer, and application modules</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="layer in architectureLayers" :key="layer.title" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="text-3xl mb-4"><i :class="layer.icon"></i></div>
            <h3 class="text-xl font-bold text-white mb-3">{{ layer.title }}</h3>
            <p class="text-gray-400 mb-4">{{ layer.description }}</p>
            <ul class="space-y-2">
              <li v-for="feature in layer.features" :key="feature" class="flex items-start gap-2 text-sm text-gray-400">
                <span class="text-primary-400 mt-1">•</span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Data Flow -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Seamless Data Flow
            </span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how data moves effortlessly through your construction workflow.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 class="text-3xl font-bold text-white mb-6">From Takeoff to Budget in Seconds</h3>
            <div class="space-y-6">
              <div v-for="(step, index) in dataFlowSteps" :key="step.title" class="flex gap-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 text-slate-900 font-bold flex items-center justify-center">
                  {{ index + 1 }}
                </div>
                <div>
                  <h4 class="text-lg font-bold text-white mb-1">{{ step.title }}</h4>
                  <p class="text-gray-400">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <!-- Data Flow Animation Placeholder -->
            <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50">
              <div class="aspect-square flex items-center justify-center text-gray-400">
                <div class="text-center">
                  <i class="fa-solid fa-bolt text-7xl text-primary-400"></i>
                  <p class="text-lg font-semibold">[ANIMATION PLACEHOLDER]</p>
                  <p class="text-sm mt-2">Data flow visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Capabilities -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Enterprise-Grade Capabilities
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Built for scale, security, and performance.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="capability in platformCapabilities" :key="capability.title" class="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary-500/50 transition-all">
            <div class="text-3xl mb-4"><i :class="capability.icon"></i></div>
            <h3 class="text-xl font-bold text-white mb-3">{{ capability.title }}</h3>
            <p class="text-gray-400">{{ capability.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- API & Integrations -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-6">
              Developer Friendly
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
              Open API & Extensibility
            </h2>
            <p class="text-xl text-gray-300 mb-6">
              Build custom integrations, automate workflows, and extend CCorex to fit your unique requirements.
            </p>
            <ul class="space-y-4 mb-8">
              <li v-for="feature in apiFeatures" :key="feature" class="flex items-start gap-3 text-gray-300">
                <i class="fa-solid fa-check text-primary-400 text-lg mt-1"></i>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <NuxtLink to="/integrations" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-500 text-primary-400 font-semibold hover:bg-primary-500 hover:text-slate-900 transition-all">
              View Integrations
              <i class="fa-solid fa-arrow-right"></i>
            </NuxtLink>
          </div>
          <div>
            <!-- API Code Example Placeholder -->
            <div class="p-6 rounded-xl bg-slate-900 border border-white/10">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm text-gray-400">API Example</span>
                <span class="text-xs text-primary-400">REST API</span>
              </div>
              <pre class="text-sm text-gray-300 overflow-x-auto"><code>// Create a new project
POST /api/v1/projects
{
  "name": "Downtown Tower",
  "type": "commercial",
  "budget": 5000000,
  "start_date": "2024-01-01"
}

// Response
{
  "id": "proj_abc123",
  "status": "active",
  "created_at": "2024-01-01T00:00:00Z"
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security & Compliance -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Security & Compliance
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Your data is protected with enterprise-grade security measures.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div v-for="cert in certifications" :key="cert.title" class="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
            <div class="text-4xl mb-3"><i :class="cert.icon"></i></div>
            <h3 class="text-lg font-bold text-white mb-2">{{ cert.title }}</h3>
            <p class="text-sm text-gray-400">{{ cert.description }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="security in securityFeatures" :key="security.title" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 class="text-xl font-bold text-white mb-3">{{ security.title }}</h3>
            <ul class="space-y-2">
              <li v-for="feature in security.features" :key="feature" class="flex items-start gap-2 text-gray-400">
                <span class="text-primary-400 mt-1">•</span>
                <span class="text-sm">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Experience the Power of an Integrated Platform
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          See how CCorex can transform your construction operations.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
            Schedule a Demo
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
const architectureLayers = [
  {
    icon: 'fa-solid fa-database',
    title: 'Unified Database',
    description: 'Single source of truth for all construction data.',
    features: [
      'Real-time synchronization',
      'Version control',
      'Audit trails',
      'Data integrity checks'
    ]
  },
  {
    icon: 'fa-solid fa-gear',
    title: 'Business Logic Layer',
    description: 'Core construction workflows and automation.',
    features: [
      'Workflow automation',
      'Business rules engine',
      'AI/ML processing',
      'Event-driven architecture'
    ]
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Application Layer',
    description: 'Four specialized apps built on shared foundation.',
    features: [
      'Responsive web apps',
      'Native mobile apps',
      'Desktop applications',
      'API access'
    ]
  }
]

const dataFlowSteps = [
  {
    title: 'Upload Drawing',
    description: 'Import your construction drawings into DeepPlan AI'
  },
  {
    title: 'AI Extraction',
    description: 'AI automatically measures and extracts quantities'
  },
  {
    title: 'Cost Mapping',
    description: 'Quantities flow to DeepCost and map to cost libraries'
  },
  {
    title: 'Budget Creation',
    description: 'Approved estimates become project budgets in DeepTrack'
  },
  {
    title: 'Resource Planning',
    description: 'Budget data informs workforce planning in DeepHR'
  }
]

const platformCapabilities = [
  {
    icon: 'fa-solid fa-cloud',
    title: 'Cloud-Native',
    description: 'Built for the cloud with automatic scaling, 99.9% uptime, and global availability.'
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Mobile-First',
    description: 'Native iOS and Android apps with offline capabilities for field teams.'
  },
  {
    icon: 'fa-solid fa-arrows-rotate',
    title: 'Real-Time Sync',
    description: 'Changes sync instantly across all devices and users. No refresh needed.'
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Role-Based Access',
    description: 'Granular permissions control who can view, edit, and approve data.'
  },
  {
    icon: 'fa-solid fa-chart-bar',
    title: 'Advanced Analytics',
    description: 'Built-in dashboards and reports with custom visualization options.'
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Audit Logging',
    description: 'Complete audit trail of all changes with user, timestamp, and reason.'
  }
]

const apiFeatures = [
  'RESTful API with comprehensive documentation',
  'Webhooks for real-time event notifications',
  'OAuth 2.0 authentication',
  'Rate limiting and usage analytics',
  'SDKs for popular programming languages',
  'Sandbox environment for testing'
]

const certifications = [
  {
    icon: 'fa-solid fa-lock',
    title: 'SOC 2 Type II',
    description: 'Certified for security and availability'
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'GDPR Compliant',
    description: 'Full compliance with data protection regulations'
  },
  {
    icon: 'fa-solid fa-building',
    title: 'ISO 27001',
    description: 'Information security management certified'
  },
  {
    icon: 'fa-solid fa-circle-check',
    title: '99.9% Uptime',
    description: 'SLA-backed availability guarantee'
  }
]

const securityFeatures = [
  {
    title: 'Data Protection',
    features: [
      'AES-256 encryption at rest',
      'TLS 1.3 encryption in transit',
      'Encrypted backups',
      'Data residency options',
      'Right to be forgotten'
    ]
  },
  {
    title: 'Access Control',
    features: [
      'Multi-factor authentication',
      'Single sign-on (SSO)',
      'IP whitelisting',
      'Session management',
      'Password policies'
    ]
  },
  {
    title: 'Monitoring',
    features: [
      '24/7 security monitoring',
      'Intrusion detection',
      'Vulnerability scanning',
      'Penetration testing',
      'Incident response team'
    ]
  }
]
</script>
