<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 text-center pt-32 pb-20">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-white">Construction</span>
          <br/>
          <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Knowledge Hub
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
          Guides, case studies, documentation, and insights to help you get the most out of CCorex.
        </p>
      </div>
    </section>

    <!-- Resource Categories -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink 
            v-for="category in resourceCategories" 
            :key="category.name"
            :to="category.link"
            class="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary-500/50 hover:bg-white/10 transition-all text-center"
          >
            <div class="text-5xl mb-4">{{ category.icon }}</div>
            <h2 class="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{{ category.name }}</h2>
            <p class="text-gray-400 mb-4">{{ category.description }}</p>
            <span class="inline-flex items-center gap-2 text-primary-400 font-semibold group-hover:gap-3 transition-all">
              Explore
              <span>→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Content -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Resources
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Popular guides and articles to help you succeed.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="resource in featuredResources" :key="resource.title" class="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary-500/50 transition-all">
            <div class="flex items-center gap-2 mb-4">
              <span class="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-semibold">{{ resource.type }}</span>
              <span class="text-xs text-gray-500">{{ resource.readTime }}</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{{ resource.title }}</h3>
            <p class="text-gray-400 mb-4">{{ resource.description }}</p>
            <a :href="resource.link" class="inline-flex items-center gap-2 text-primary-400 font-semibold group-hover:gap-3 transition-all">
              Read More
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Guides & Whitepapers -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Comprehensive Guides
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            In-depth resources to master construction technology.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="guide in guides" :key="guide.title" class="p-8 rounded-2xl border border-white/10 bg-white/5">
            <div class="flex items-start gap-6">
              <div class="flex-shrink-0 w-24 h-32 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/30 flex items-center justify-center">
                <span class="text-4xl">{{ guide.icon }}</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-white mb-3">{{ guide.title }}</h3>
                <p class="text-gray-400 mb-4">{{ guide.description }}</p>
                <ul class="space-y-2 mb-6">
                  <li v-for="topic in guide.topics" :key="topic" class="flex items-start gap-2 text-sm text-gray-400">
                    <span class="text-primary-400 mt-1">•</span>
                    <span>{{ topic }}</span>
                  </li>
                </ul>
                <a href="#" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500/10 border border-primary-500 text-primary-400 font-semibold hover:bg-primary-500 hover:text-slate-900 transition-all">
                  Download Guide
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Tutorials -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Video Tutorials
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn CCorex with step-by-step video guides.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="video in videoTutorials" :key="video.title" class="group rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-primary-500/50 transition-all">
            <!-- Video Thumbnail Placeholder -->
            <div class="aspect-video bg-slate-900 flex items-center justify-center border-b border-white/10">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto mb-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-xs text-gray-500">{{ video.duration }}</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{{ video.title }}</h3>
              <p class="text-sm text-gray-400 mb-4">{{ video.description }}</p>
              <button class="inline-flex items-center gap-2 text-primary-400 font-semibold group-hover:gap-3 transition-all">
                Watch Now
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Documentation -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Product Documentation
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete technical documentation for all CCorex apps.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="doc in documentation" :key="doc.app" class="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary-500/50 transition-all">
            <div class="text-4xl mb-4">{{ doc.icon }}</div>
            <h3 class="text-xl font-bold text-white mb-3">{{ doc.app }}</h3>
            <ul class="space-y-2 mb-6">
              <li v-for="section in doc.sections" :key="section" class="text-sm text-gray-400">
                <a href="#" class="hover:text-primary-400 transition-colors">{{ section }}</a>
              </li>
            </ul>
            <a href="#" class="inline-flex items-center gap-2 text-primary-400 font-semibold hover:gap-3 transition-all">
              View Docs
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Support & Community -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Need Help?
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Get support from our team and community.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="support in supportOptions" :key="support.title" class="p-8 rounded-xl border border-white/10 bg-white/5 text-center">
            <div class="text-4xl mb-4">{{ support.icon }}</div>
            <h3 class="text-xl font-bold text-white mb-3">{{ support.title }}</h3>
            <p class="text-gray-400 mb-6">{{ support.description }}</p>
            <a :href="support.link" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-500 text-primary-400 font-semibold hover:bg-primary-500 hover:text-slate-900 transition-all">
              {{ support.cta }}
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const resourceCategories = [
  {
    name: 'Blog',
    icon: '📝',
    description: 'Latest insights, trends, and best practices in construction technology.',
    link: '/resources/blog'
  },
  {
    name: 'Guides',
    icon: '📚',
    description: 'Comprehensive guides and whitepapers for construction professionals.',
    link: '/resources/guides'
  },
  {
    name: 'Case Studies',
    icon: '📊',
    description: 'Real success stories from construction firms using CCorex.',
    link: '/resources/case-studies'
  },
  {
    name: 'Documentation',
    icon: '📖',
    description: 'Complete technical documentation and API references.',
    link: '/resources/documentation'
  }
]

const featuredResources = [
  {
    type: 'Guide',
    title: 'Complete Guide to Construction Estimation',
    description: 'Learn best practices for accurate construction cost estimation.',
    readTime: '15 min read',
    link: '#'
  },
  {
    type: 'Case Study',
    title: 'How Metro Construction Reduced Costs by 15%',
    description: 'See how one GC transformed their operations with CCorex.',
    readTime: '8 min read',
    link: '#'
  },
  {
    type: 'Blog',
    title: 'AI in Construction: A Practical Guide',
    description: 'Understanding how AI is transforming construction workflows.',
    readTime: '12 min read',
    link: '#'
  }
]

const guides = [
  {
    title: 'Digital Transformation Roadmap',
    icon: '🚀',
    description: 'Step-by-step guide to digitizing your construction operations.',
    topics: [
      'Assessment and planning',
      'Technology selection',
      'Implementation strategy',
      'Change management',
      'Measuring success'
    ]
  },
  {
    title: 'Cost Control Best Practices',
    icon: '💰',
    description: 'Proven strategies for maintaining budget control on construction projects.',
    topics: [
      'Budget planning',
      'Variance tracking',
      'Change order management',
      'Forecasting techniques',
      'Reporting frameworks'
    ]
  },
  {
    title: 'AI Takeoff Implementation',
    icon: '🤖',
    description: 'How to successfully implement AI-powered takeoff in your workflow.',
    topics: [
      'Getting started with AI',
      'Training and accuracy',
      'Integration with estimation',
      'Team adoption',
      'ROI measurement'
    ]
  },
  {
    title: 'Workforce Optimization',
    icon: '👥',
    description: 'Maximize productivity with effective workforce management.',
    topics: [
      'Resource planning',
      'Time tracking',
      'Compliance management',
      'Performance metrics',
      'Mobile enablement'
    ]
  }
]

const videoTutorials = [
  {
    title: 'Getting Started with CCorex',
    description: 'Quick overview of the platform and key features.',
    duration: '5:30'
  },
  {
    title: 'Creating Your First Estimate',
    description: 'Step-by-step guide to building an estimate in DeepCost.',
    duration: '12:45'
  },
  {
    title: 'AI Takeoff Walkthrough',
    description: 'Learn how to use DeepPlan AI for automated takeoffs.',
    duration: '8:20'
  },
  {
    title: 'Budget Management Basics',
    description: 'Managing project budgets and tracking variance in DeepTrack.',
    duration: '10:15'
  },
  {
    title: 'Mobile Time Tracking',
    description: 'Using DeepHR mobile app for field time tracking.',
    duration: '6:40'
  },
  {
    title: 'Advanced Reporting',
    description: 'Creating custom reports and dashboards.',
    duration: '14:30'
  }
]

const documentation = [
  {
    app: 'DeepPlan AI',
    icon: '📏',
    sections: [
      'Getting Started',
      'Drawing Upload',
      'Measurement Tools',
      'Collaboration',
      'Export Options',
      'API Reference'
    ]
  },
  {
    app: 'DeepCost',
    icon: '💰',
    sections: [
      'User Guide',
      'Cost Libraries',
      'BOQ Generation',
      'Tender Management',
      'Reports',
      'Integrations'
    ]
  },
  {
    app: 'DeepTrack',
    icon: '📊',
    sections: [
      'Project Setup',
      'Budget Management',
      'PO Workflows',
      'Variance Tracking',
      'Dashboards',
      'Mobile App'
    ]
  },
  {
    app: 'DeepHR',
    icon: '👥',
    sections: [
      'Workforce Planning',
      'Time Tracking',
      'Attendance',
      'Compliance',
      'Payroll Integration',
      'Mobile Features'
    ]
  }
]

const supportOptions = [
  {
    icon: '💬',
    title: 'Live Chat',
    description: 'Get instant help from our support team.',
    cta: 'Start Chat',
    link: '#'
  },
  {
    icon: '📧',
    title: 'Email Support',
    description: 'Send us your questions and get detailed responses.',
    cta: 'Contact Us',
    link: '/contact'
  },
  {
    icon: '🎓',
    title: 'Training',
    description: 'Schedule personalized training sessions for your team.',
    cta: 'Book Training',
    link: '/contact'
  }
]
</script>
