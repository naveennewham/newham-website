<template>
  <div>
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 pt-32 pb-16 text-center">
      <div class="mb-6">
        <span class="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold">
          Integrations & Ecosystem
        </span>
      </div>
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
          Connect Your Entire Stack
        </span>
      </h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        CCorex integrates seamlessly with the tools you already use. Connect your project management, accounting, and collaboration platforms for a unified workflow.
      </p>
    </section>

    <!-- Integration Categories -->
    <section class="max-w-7xl mx-auto px-4 pb-20">
      <div v-for="category in categories" :key="category.name" class="mb-16">
        <div class="mb-8">
          <div class="flex items-center gap-3 mb-3">
            <div class="text-4xl"><i :class="category.icon"></i></div>
            <h2 class="text-3xl font-bold text-white">{{ category.name }}</h2>
          </div>
          <p class="text-gray-400 text-lg">{{ category.description }}</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="integration in category.integrations" :key="integration.name" class="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary-500/50 hover:bg-white/10 transition-all">
            <div class="text-center">
              <div class="text-3xl mb-3"><i :class="integration.icon"></i></div>
              <h3 class="text-lg font-bold text-white mb-2">{{ integration.name }}</h3>
              <p class="text-sm text-gray-400 mb-3">{{ integration.description }}</p>
              <span class="inline-block px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-semibold">
                {{ integration.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- API Section -->
    <section class="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="text-5xl mb-4"><i class="fa-solid fa-plug"></i></div>
            <h2 class="text-4xl font-bold text-white mb-4">
              Powerful REST API
            </h2>
            <p class="text-xl text-gray-300 mb-6">
              Build custom integrations with our comprehensive REST API. Access all CCorex functionality programmatically.
            </p>
            <ul class="space-y-3 mb-8">
              <li v-for="feature in apiFeatures" :key="feature" class="flex items-center gap-3">
                <i class="fa-solid fa-check text-primary-400"></i>
                <span class="text-gray-300">{{ feature }}</span>
              </li>
            </ul>
            <div class="flex gap-4">
              <a href="/contact" class="px-6 py-3 rounded-lg bg-primary-500 text-slate-900 font-semibold hover:bg-primary-400 transition-all">
                Request API Access
              </a>
              <a href="#" class="px-6 py-3 rounded-lg border border-primary-500 text-primary-400 font-semibold hover:bg-primary-500 hover:text-slate-900 transition-all">
                View Documentation
              </a>
            </div>
          </div>

          <div class="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <div class="bg-slate-900 rounded-lg p-6 font-mono text-sm">
              <div class="text-gray-500 mb-2">// Example API Request</div>
              <div class="text-primary-400">POST</div>
              <div class="text-gray-300 mb-4">/api/v1/projects/create</div>
              <div class="text-gray-500 mb-2">// Response</div>
              <div class="text-gray-300">{</div>
              <div class="text-gray-300 ml-4">"project_id": "PRJ-12345",</div>
              <div class="text-gray-300 ml-4">"status": "success",</div>
              <div class="text-gray-300 ml-4">"message": "Project created"</div>
              <div class="text-gray-300">}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Webhooks Section -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <div class="text-5xl mb-4"><i class="fa-solid fa-bolt"></i></div>
          <h2 class="text-4xl font-bold text-white mb-4">
            Real-Time Webhooks
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Get instant notifications when events occur in CCorex. Build automated workflows with webhooks.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="webhook in webhooks" :key="webhook.event" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 class="text-lg font-bold text-white mb-2">{{ webhook.event }}</h3>
            <p class="text-sm text-gray-400">{{ webhook.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Need a Custom Integration?
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          Our team can help you build custom integrations tailored to your specific workflow requirements.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
            Contact Integration Team
          </a>
          <NuxtLink to="/pricing" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500 hover:text-slate-900 transition-all">
            View Enterprise Plans
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const categories = [
  {
    name: 'Project Management',
    icon: 'fa-solid fa-clipboard-list',
    description: 'Sync projects, tasks, and schedules with leading construction management platforms.',
    integrations: [
      { name: 'Procore', icon: 'fa-solid fa-helmet-safety', description: 'Bi-directional sync', status: 'Available' },
      { name: 'Autodesk BIM 360', icon: 'fa-solid fa-building', description: 'Model integration', status: 'Available' },
      { name: 'PlanGrid', icon: 'fa-solid fa-drafting-compass', description: 'Drawing sync', status: 'Available' },
      { name: 'Primavera P6', icon: 'fa-solid fa-chart-bar', description: 'Schedule sync', status: 'Available' }
    ]
  },
  {
    name: 'Accounting & Finance',
    icon: 'fa-solid fa-briefcase',
    description: 'Connect with your accounting systems for seamless financial management.',
    integrations: [
      { name: 'QuickBooks', icon: 'fa-solid fa-book', description: 'Invoice & expense sync', status: 'Available' },
      { name: 'Xero', icon: 'fa-solid fa-book', description: 'Accounting integration', status: 'Available' },
      { name: 'SAP', icon: 'fa-solid fa-building-columns', description: 'ERP integration', status: 'Available' },
      { name: 'NetSuite', icon: 'fa-solid fa-coins', description: 'Financial sync', status: 'Coming Soon' }
    ]
  },
  {
    name: 'Collaboration',
    icon: 'fa-solid fa-comments',
    description: 'Stay connected with your team through integrated communication tools.',
    integrations: [
      { name: 'Slack', icon: 'fa-solid fa-comments', description: 'Notifications & alerts', status: 'Available' },
      { name: 'Microsoft Teams', icon: 'fa-solid fa-users', description: 'Team collaboration', status: 'Available' },
      { name: 'Google Workspace', icon: 'fa-solid fa-envelope', description: 'Email & calendar', status: 'Available' },
      { name: 'Zoom', icon: 'fa-solid fa-video', description: 'Video meetings', status: 'Available' }
    ]
  },
  {
    name: 'Storage & Documents',
    icon: 'fa-solid fa-folder',
    description: 'Access and manage your documents from cloud storage platforms.',
    integrations: [
      { name: 'Dropbox', icon: 'fa-solid fa-box', description: 'File storage', status: 'Available' },
      { name: 'Google Drive', icon: 'fa-solid fa-cloud', description: 'Cloud storage', status: 'Available' },
      { name: 'OneDrive', icon: 'fa-solid fa-folder-open', description: 'Microsoft storage', status: 'Available' },
      { name: 'Box', icon: 'fa-solid fa-upload', description: 'Enterprise storage', status: 'Available' }
    ]
  }
]

const apiFeatures = [
  'RESTful API with comprehensive documentation',
  'OAuth 2.0 authentication and authorization',
  'Rate limiting and usage monitoring',
  'Sandbox environment for testing',
  'SDKs for popular programming languages',
  'Dedicated support for enterprise customers'
]

const webhooks = [
  { event: 'project.created', description: 'Triggered when a new project is created' },
  { event: 'estimate.completed', description: 'Triggered when an estimate is finalized' },
  { event: 'budget.exceeded', description: 'Triggered when budget threshold is exceeded' },
  { event: 'po.approved', description: 'Triggered when a purchase order is approved' },
  { event: 'timesheet.submitted', description: 'Triggered when timesheet is submitted' },
  { event: 'document.uploaded', description: 'Triggered when a document is uploaded' }
]
</script>
