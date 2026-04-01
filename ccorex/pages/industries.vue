<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 text-center pt-32 pb-20">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Trusted Across
          </span>
          <br/>
          <span class="text-white">Construction Sectors</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
          From commercial buildings to infrastructure projects, CCorex serves the entire construction industry with specialized solutions.
        </p>
      </div>
    </section>

    <!-- Industries Grid -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="industry in industries" :key="industry.name" class="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary-500/50 hover:bg-white/10 transition-all">
            <div class="text-5xl mb-4">{{ industry.icon }}</div>
            <h2 class="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{{ industry.name }}</h2>
            <p class="text-gray-400 mb-6">{{ industry.description }}</p>
            
            <div class="mb-6">
              <h3 class="text-sm font-semibold text-gray-400 uppercase mb-3">Common Challenges</h3>
              <ul class="space-y-2">
                <li v-for="challenge in industry.challenges" :key="challenge" class="flex items-start gap-2 text-sm text-gray-400">
                  <span class="text-secondary-400 mt-1">•</span>
                  <span>{{ challenge }}</span>
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <h3 class="text-sm font-semibold text-gray-400 uppercase mb-3">How CCorex Helps</h3>
              <ul class="space-y-2">
                <li v-for="solution in industry.solutions" :key="solution" class="flex items-start gap-2 text-sm text-gray-300">
                  <span class="text-primary-400 mt-1">✓</span>
                  <span>{{ solution }}</span>
                </li>
              </ul>
            </div>

            <div class="flex flex-wrap gap-2">
              <span v-for="app in industry.recommendedApps" :key="app" class="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-semibold">
                {{ app }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Stats -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Industry Impact
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from construction firms across different sectors.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="stat in industryStats" :key="stat.label" class="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
            <div class="text-4xl font-bold text-primary-400 mb-2">{{ stat.value }}</div>
            <div class="text-sm text-gray-400 mb-2">{{ stat.label }}</div>
            <div class="text-xs text-gray-500">{{ stat.sector }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance & Standards -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Industry Compliance & Standards
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            CCorex helps you meet industry-specific regulatory requirements.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="compliance in complianceAreas" :key="compliance.title" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="text-3xl mb-4">{{ compliance.icon }}</div>
            <h3 class="text-xl font-bold text-white mb-3">{{ compliance.title }}</h3>
            <p class="text-gray-400 mb-4">{{ compliance.description }}</p>
            <ul class="space-y-2">
              <li v-for="standard in compliance.standards" :key="standard" class="flex items-start gap-2 text-sm text-gray-400">
                <span class="text-primary-400 mt-1">✓</span>
                <span>{{ standard }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Success Stories by Industry
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            See how companies in your sector are using CCorex.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="caseStudy in caseStudies" :key="caseStudy.company" class="p-8 rounded-2xl border border-white/10 bg-white/5">
            <div class="flex items-center gap-4 mb-6">
              <div class="text-4xl">{{ caseStudy.icon }}</div>
              <div>
                <h3 class="text-xl font-bold text-white">{{ caseStudy.company }}</h3>
                <p class="text-sm text-gray-400">{{ caseStudy.industry }}</p>
              </div>
            </div>
            <p class="text-gray-300 mb-6">{{ caseStudy.challenge }}</p>
            <div class="p-4 rounded-lg bg-primary-500/10 border border-primary-500/30 mb-6">
              <p class="text-sm text-primary-400 font-semibold mb-2">Results:</p>
              <ul class="space-y-1">
                <li v-for="result in caseStudy.results" :key="result" class="text-sm text-gray-300">
                  • {{ result }}
                </li>
              </ul>
            </div>
            <a href="/resources" class="inline-flex items-center gap-2 text-primary-400 font-semibold hover:gap-3 transition-all">
              Read Full Story
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Transform Your Sector?
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          Join leading construction firms in your industry already using CCorex.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
            Schedule Industry Demo
          </a>
          <NuxtLink to="/resources" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500 hover:text-slate-900 transition-all">
            View Case Studies
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const industries = [
  {
    name: 'General Contractors',
    icon: '🏗️',
    description: 'End-to-end project management for commercial and residential construction projects.',
    challenges: [
      'Managing multiple trades',
      'Budget control',
      'Schedule coordination',
      'Change order management'
    ],
    solutions: [
      'Unified project dashboard',
      'Real-time budget tracking',
      'Integrated scheduling',
      'Automated workflows'
    ],
    recommendedApps: ['DeepCost', 'DeepTrack', 'DeepHR']
  },
  {
    name: 'Infrastructure Projects',
    icon: '🌉',
    description: 'Large-scale civil works including roads, bridges, tunnels, and utilities.',
    challenges: [
      'Complex stakeholder management',
      'Long project timelines',
      'Regulatory compliance',
      'Resource allocation'
    ],
    solutions: [
      'Portfolio management',
      'Milestone tracking',
      'Compliance reporting',
      'Resource optimization'
    ],
    recommendedApps: ['DeepTrack', 'DeepHR', 'DeepCost']
  },
  {
    name: 'Commercial Buildings',
    icon: '🏢',
    description: 'Office towers, retail centers, hotels, and mixed-use developments.',
    challenges: [
      'Fast-track schedules',
      'MEP coordination',
      'Quality control',
      'Tenant fit-outs'
    ],
    solutions: [
      'Accelerated estimation',
      'Trade coordination',
      'Quality tracking',
      'Change management'
    ],
    recommendedApps: ['DeepPlan AI', 'DeepCost', 'DeepTrack']
  },
  {
    name: 'Industrial Plants',
    icon: '🏭',
    description: 'Manufacturing facilities, warehouses, processing plants, and distribution centers.',
    challenges: [
      'Specialized equipment',
      'Safety requirements',
      'Process integration',
      'Commissioning'
    ],
    solutions: [
      'Equipment tracking',
      'Safety compliance',
      'System integration',
      'Handover management'
    ],
    recommendedApps: ['DeepCost', 'DeepTrack', 'DeepHR']
  },
  {
    name: 'MEP Contractors',
    icon: '⚡',
    description: 'Specialized mechanical, electrical, and plumbing contractors.',
    challenges: [
      'Accurate bid preparation',
      'Material procurement',
      'Labor productivity',
      'Coordination with GC'
    ],
    solutions: [
      'MEP-specific libraries',
      'Procurement tracking',
      'Time tracking',
      'Integration with GC systems'
    ],
    recommendedApps: ['DeepCost', 'DeepPlan AI', 'DeepHR']
  },
  {
    name: 'Developers',
    icon: '🏘️',
    description: 'Real estate developers managing multiple projects and portfolios.',
    challenges: [
      'Portfolio oversight',
      'Financial control',
      'Stakeholder reporting',
      'Risk management'
    ],
    solutions: [
      'Executive dashboards',
      'Financial analytics',
      'Automated reporting',
      'Risk alerts'
    ],
    recommendedApps: ['DeepTrack', 'DeepCost', 'DeepPlan AI']
  }
]

const industryStats = [
  { value: '70%', label: 'Faster Estimation', sector: 'MEP Contractors' },
  { value: '15%', label: 'Cost Savings', sector: 'General Contractors' },
  { value: '40%', label: 'Time Reduction', sector: 'Infrastructure' },
  { value: '95%+', label: 'Accuracy Rate', sector: 'Commercial' },
  { value: '100%', label: 'Data Visibility', sector: 'Developers' },
  { value: '30%', label: 'Productivity Gain', sector: 'Industrial' },
  { value: '2-3 wks', label: 'Implementation', sector: 'All Sectors' },
  { value: '24/7', label: 'Support', sector: 'All Sectors' }
]

const complianceAreas = [
  {
    icon: '🔒',
    title: 'Safety & Compliance',
    description: 'Meet OSHA and local safety requirements with built-in compliance tracking.',
    standards: [
      'OSHA safety reporting',
      'Incident tracking',
      'Safety certifications',
      'Audit trails'
    ]
  },
  {
    icon: '📋',
    title: 'Quality Standards',
    description: 'Maintain ISO and industry quality standards throughout project lifecycle.',
    standards: [
      'ISO 9001 compliance',
      'Quality checklists',
      'Inspection records',
      'Non-conformance tracking'
    ]
  },
  {
    icon: '💼',
    title: 'Financial Regulations',
    description: 'Stay compliant with accounting standards and tax regulations.',
    standards: [
      'GAAP compliance',
      'Tax documentation',
      'Audit support',
      'Financial reporting'
    ]
  }
]

const caseStudies = [
  {
    company: 'Metro Construction',
    industry: 'General Contractor',
    icon: '🏗️',
    challenge: 'Managing 12 concurrent projects with limited visibility into costs and schedules.',
    results: [
      'Reduced estimation time by 65%',
      'Improved project margins by 12%',
      'Real-time visibility across all projects',
      'Eliminated spreadsheet errors'
    ]
  },
  {
    company: 'PowerTech MEP',
    industry: 'MEP Contractor',
    icon: '⚡',
    challenge: 'Needed faster bid turnaround while maintaining accuracy for competitive tenders.',
    results: [
      'Cut bid preparation from 3 days to 6 hours',
      'Achieved 95%+ estimation accuracy',
      'Won 25% more projects',
      'Reduced rework by 40%'
    ]
  },
  {
    company: 'Skyline Developers',
    industry: 'Property Developer',
    icon: '🏘️',
    challenge: 'Tracking 8 projects across 3 cities with no unified reporting system.',
    results: [
      'Complete portfolio visibility',
      'Reduced budget overruns by 80%',
      'Automated stakeholder reporting',
      'Improved decision-making speed'
    ]
  },
  {
    company: 'Bridge Works Inc',
    industry: 'Infrastructure',
    icon: '🌉',
    challenge: 'Complex multi-year project with hundreds of stakeholders and strict compliance.',
    results: [
      'Streamlined stakeholder communication',
      'Automated compliance reporting',
      'Reduced administrative time by 50%',
      'On-time, on-budget delivery'
    ]
  }
]
</script>
