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
              <div class="text-6xl"><i class="fa-solid fa-users"></i></div>
              <div>
                <h1 class="text-5xl md:text-6xl font-bold text-white">DeepHR</h1>
                <p class="text-xl text-primary-400 font-semibold">Workforce & Labour Management</p>
              </div>
            </div>
            <p class="text-2xl text-gray-300 mb-8">
              Unify your workforce operations from planning to payroll. Mobile-enabled time tracking, compliance management, and resource optimization for construction teams.
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
                  <p class="text-lg font-semibold">[SCREENSHOT – DeepHR Dashboard]</p>
                  <p class="text-sm mt-2">Workforce overview with attendance tracking</p>
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
            Complete Workforce Management
          </h2>
          <p class="text-xl text-gray-300">
            DeepHR brings together workforce planning, time tracking, compliance, and payroll in one integrated platform. Built specifically for construction teams working across multiple sites.
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
            Everything for Workforce Management
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

    <!-- Mobile Time Tracking -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <!-- Mobile App Screenshot Placeholder -->
            <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50">
              <div class="aspect-[9/16] max-w-sm mx-auto flex items-center justify-center text-gray-400">
                <div class="text-center">
                  <i class="fa-regular fa-image text-7xl text-primary-400"></i>
                  <p class="font-semibold">[SCREENSHOT – Mobile Time Clock]</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-6">
              Mobile First
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
              Mobile Time Tracking with Geofencing
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Workers clock in/out from their phones with GPS verification. Eliminate time theft and ensure accurate payroll with geofenced job sites.
            </p>
            <ul class="space-y-4 mb-8">
              <li v-for="feature in mobileFeatures" :key="feature" class="flex items-start gap-3 text-gray-300">
                <i class="fa-solid fa-check text-primary-400 text-lg mt-1"></i>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <div class="flex gap-4">
              <a href="#" class="px-6 py-3 rounded-lg bg-slate-900 border border-white/10 text-white font-semibold hover:border-primary-500/50 transition-all">
                <i class="fa-brands fa-apple"></i> App Store
              </a>
              <a href="#" class="px-6 py-3 rounded-lg bg-slate-900 border border-white/10 text-white font-semibold hover:border-primary-500/50 transition-all">
                <i class="fa-brands fa-google-play"></i> Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Stay Compliant Automatically
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Track certifications, licenses, and safety training. Get alerts before expirations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="compliance in complianceFeatures" :key="compliance.name" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="text-3xl mb-3"><i :class="compliance.icon"></i></div>
            <h3 class="text-lg font-bold text-white mb-2">{{ compliance.name }}</h3>
            <p class="text-sm text-gray-400">{{ compliance.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Complete Workforce Lifecycle
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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

    <!-- Scheduling -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
              Smart Workforce Scheduling
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Optimize labor allocation across multiple projects and sites. Drag-and-drop scheduling with skill matching and availability checking.
            </p>
            <div class="space-y-4">
              <div v-for="feature in schedulingFeatures" :key="feature.name" class="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div class="text-3xl"><i :class="feature.icon"></i></div>
                <div>
                  <h4 class="font-semibold text-white mb-1">{{ feature.name }}</h4>
                  <p class="text-sm text-gray-400">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <!-- Scheduling Screenshot Placeholder -->
            <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50">
              <div class="aspect-video flex items-center justify-center text-gray-400">
                <div class="text-center">
                  <i class="fa-regular fa-image text-7xl text-primary-400"></i>
                  <p class="text-lg font-semibold">[SCREENSHOT – Workforce Schedule]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="py-20 bg-slate-800">
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
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Payroll Integration
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Sync time data directly to your payroll system. Eliminate manual data entry and reduce errors.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="integration in integrations" :key="integration.name" class="p-6 rounded-xl border border-white/10 bg-white/5 text-center hover:border-primary-500/50 transition-all">
            <div class="text-3xl mb-3"><i :class="integration.icon"></i></div>
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
          Optimize Your Workforce Operations
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          See how DeepHR can improve productivity and reduce labor costs.
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
  { value: '40%', label: 'Productivity Gain' },
  { value: 'GPS', label: 'Verified' },
  { value: '100%', label: 'Compliant' }
]

const overviewBenefits = [
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Mobile Time Tracking',
    description: 'Workers clock in/out from their phones with GPS verification and geofencing.'
  },
  {
    icon: 'fa-solid fa-circle-check',
    title: 'Compliance Tracking',
    description: 'Manage certifications, licenses, and safety training with automated alerts.'
  },
  {
    icon: 'fa-solid fa-chart-bar',
    title: 'Resource Optimization',
    description: 'Optimize labor allocation across projects with intelligent scheduling.'
  }
]

const keyFeatures = [
  {
    category: 'Time Tracking',
    title: 'Mobile Time Clock with GPS',
    description: 'Accurate time tracking from the field with GPS verification. Geofence job sites to prevent early clock-ins and eliminate time theft.',
    points: [
      'GPS-verified clock in/out',
      'Geofenced job sites',
      'Photo verification',
      'Offline mode',
      'Break tracking',
      'Overtime calculations'
    ]
  },
  {
    category: 'Attendance',
    title: 'Leave & Attendance Management',
    description: 'Track vacation, sick leave, and other absences. Approve requests and maintain accurate attendance records.',
    points: [
      'Leave request workflows',
      'Approval routing',
      'Accrual tracking',
      'Calendar integration',
      'Absence reporting',
      'Holiday management'
    ]
  },
  {
    category: 'Compliance',
    title: 'Certification & License Tracking',
    description: 'Maintain compliance with automated tracking of worker certifications, licenses, and safety training.',
    points: [
      'Document storage',
      'Expiration alerts',
      'Renewal reminders',
      'Compliance reporting',
      'Audit trails',
      'Bulk uploads'
    ]
  },
  {
    category: 'Payroll',
    title: 'Payroll Integration',
    description: 'Export time data directly to your payroll system. Eliminate manual data entry and reduce payroll errors.',
    points: [
      'Direct payroll sync',
      'Multiple pay rates',
      'Overtime calculations',
      'Deduction tracking',
      'Tax compliance',
      'Pay stub generation'
    ]
  }
]

const mobileFeatures = [
  'One-tap clock in/out with GPS verification',
  'Geofencing prevents off-site clock-ins',
  'Photo capture for verification',
  'Works offline, syncs when connected',
  'View schedules and assignments',
  'Request time off and view balances'
]

const complianceFeatures = [
  {
    icon: 'fa-solid fa-scroll',
    name: 'Certifications',
    description: 'Track trade certifications and licenses'
  },
  {
    icon: 'fa-solid fa-shield-halved',
    name: 'Safety Training',
    description: 'Monitor OSHA and safety course completion'
  },
  {
    icon: 'fa-solid fa-car',
    name: 'Driver Licenses',
    description: 'Track commercial driver licenses'
  },
  {
    icon: 'fa-solid fa-triangle-exclamation',
    name: 'Expiration Alerts',
    description: 'Automated reminders before expiry'
  }
]

const workflow = [
  {
    icon: 'fa-solid fa-user',
    title: 'Onboarding',
    description: 'Add workers and upload documents'
  },
  {
    icon: 'fa-solid fa-calendar-days',
    title: 'Scheduling',
    description: 'Assign workers to projects and shifts'
  },
  {
    icon: 'fa-solid fa-stopwatch',
    title: 'Time Tracking',
    description: 'Workers clock in/out via mobile'
  },
  {
    icon: 'fa-solid fa-circle-check',
    title: 'Approval',
    description: 'Review and approve timesheets'
  },
  {
    icon: 'fa-solid fa-coins',
    title: 'Payroll',
    description: 'Export to payroll system'
  }
]

const schedulingFeatures = [
  {
    icon: 'fa-solid fa-bullseye',
    name: 'Skill Matching',
    description: 'Match workers to tasks based on skills and certifications'
  },
  {
    icon: 'fa-solid fa-chart-bar',
    name: 'Capacity Planning',
    description: 'Optimize resource allocation across projects'
  },
  {
    icon: 'fa-solid fa-arrows-rotate',
    name: 'Shift Swapping',
    description: 'Allow workers to swap shifts with approval'
  }
]

const useCases = [
  {
    role: 'General Contractors',
    icon: 'fa-solid fa-helmet-safety',
    description: 'Manage large workforces across multiple sites.',
    benefits: [
      'Multi-site scheduling',
      'GPS time tracking',
      'Compliance management',
      'Payroll integration'
    ]
  },
  {
    role: 'Subcontractors',
    icon: 'fa-solid fa-bolt',
    description: 'Track labor costs and productivity by project.',
    benefits: [
      'Project-based tracking',
      'Labor cost analysis',
      'Mobile time clock',
      'Simple payroll export'
    ]
  },
  {
    role: 'HR Managers',
    icon: 'fa-solid fa-briefcase',
    description: 'Centralize workforce data and compliance.',
    benefits: [
      'Employee database',
      'Document management',
      'Compliance tracking',
      'Reporting & analytics'
    ]
  }
]

const integrations = [
  {
    icon: 'fa-solid fa-coins',
    name: 'QuickBooks',
    description: 'Direct payroll sync'
  },
  {
    icon: 'fa-solid fa-chart-bar',
    name: 'ADP',
    description: 'Time & attendance export'
  },
  {
    icon: 'fa-solid fa-building',
    name: 'Paychex',
    description: 'Payroll integration'
  },
  {
    icon: 'fa-solid fa-folder',
    name: 'Custom Export',
    description: 'CSV/Excel formats'
  }
]
</script>
