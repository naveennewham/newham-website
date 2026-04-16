<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 text-center pt-32 pb-20">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-white">Building the Future of</span>
          <br/>
          <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Construction Technology
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
          CCorex is on a mission to transform construction operations through integrated technology and AI-powered automation.
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="p-8 rounded-2xl border border-white/10 bg-white/5">
            <div class="text-4xl mb-4"><i class="fa-solid fa-bullseye"></i></div>
            <h2 class="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p class="text-lg text-gray-300">
              To empower construction professionals with integrated technology that eliminates inefficiency, reduces costs, and enables data-driven decision making across the entire project lifecycle.
            </p>
          </div>
          <div class="p-8 rounded-2xl border border-white/10 bg-white/5">
            <div class="text-4xl mb-4"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
            <h2 class="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p class="text-lg text-gray-300">
              A construction industry where every project is delivered on time, on budget, and with complete transparency—powered by intelligent, integrated software that works as hard as the teams using it.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Story
          </h2>
          <p class="text-xl text-gray-300">
            Born from real construction challenges, built for real construction teams.
          </p>
        </div>

        <div class="max-w-5xl mx-auto space-y-12">
          <div v-for="milestone in milestones" :key="milestone.year" class="flex gap-8">
            <div class="flex-shrink-0 w-32 text-right">
              <div class="text-3xl font-bold text-primary-400">{{ milestone.year }}</div>
            </div>
            <div class="flex-1 pb-12 border-l-2 border-primary-500/30 pl-8 relative">
              <div class="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-500 border-4 border-slate-900"></div>
              <h3 class="text-2xl font-bold text-white mb-3">{{ milestone.title }}</h3>
              <p class="text-gray-300">{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Values
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we do.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="value in values" :key="value.title" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="text-4xl mb-4"><i :class="value.icon"></i></div>
            <h3 class="text-xl font-bold text-white mb-3">{{ value.title }}</h3>
            <p class="text-gray-400">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Leadership Team
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Experienced professionals from construction and technology.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="member in team" :key="member.name" class="text-center">
            <!-- Photo Placeholder -->
            <div class="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border-2 border-primary-500/30 flex items-center justify-center">
              <span class="text-5xl">{{ member.initials }}</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-1">{{ member.name }}</h3>
            <p class="text-primary-400 font-semibold mb-2">{{ member.role }}</p>
            <p class="text-sm text-gray-400">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            CCorex by the Numbers
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="stat in stats" :key="stat.label" class="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
            <div class="text-4xl font-bold text-primary-400 mb-2">{{ stat.value }}</div>
            <div class="text-sm text-gray-400">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Careers -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="text-4xl mb-6"><i class="fa-solid fa-rocket"></i></div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Join Our Team
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          We're always looking for talented people who are passionate about transforming construction through technology.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
            View Open Positions
          </a>
          <a href="/contact" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500 hover:text-slate-900 transition-all">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const milestones = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Founded by construction professionals frustrated with disconnected tools and manual processes. Started building the first version of DeepCost.'
  },
  {
    year: '2021',
    title: 'First Product Launch',
    description: 'DeepCost launched with MEP estimation capabilities. First 50 customers onboarded, achieving 95%+ estimation accuracy.'
  },
  {
    year: '2022',
    title: 'AI Innovation',
    description: 'Introduced DeepPlan AI with computer vision for automated takeoffs. Reduced manual measurement time by 40%.'
  },
  {
    year: '2023',
    title: 'Platform Expansion',
    description: 'Launched DeepTrack and DeepHR, completing the integrated suite. Reached 500+ construction firms across 15 countries.'
  },
  {
    year: '2024',
    title: 'Enterprise Growth',
    description: 'Achieved SOC 2 Type II certification. Serving Fortune 500 contractors and managing $5B+ in construction projects.'
  },
  {
    year: 'Today',
    title: 'Leading the Industry',
    description: 'Trusted by 1,000+ construction firms worldwide. Continuously innovating with AI and automation to transform the industry.'
  }
]

const values = [
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Customer First',
    description: 'Every decision we make starts with understanding our customers\' needs and challenges.'
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'Innovation',
    description: 'We constantly push boundaries with AI and technology to solve real construction problems.'
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and doing what we say we\'ll do.'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Excellence',
    description: 'We set high standards and continuously improve to deliver exceptional quality.'
  },
  {
    icon: 'fa-solid fa-seedling',
    title: 'Growth',
    description: 'We invest in our team\'s development and embrace continuous learning.'
  },
  {
    icon: 'fa-solid fa-earth-americas',
    title: 'Impact',
    description: 'We measure success by the positive impact we create for our customers and industry.'
  }
]

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Co-Founder',
    initials: 'JS',
    bio: '20+ years in construction, former project director at major GC.'
  },
  {
    name: 'Sarah Chen',
    role: 'CTO & Co-Founder',
    initials: 'SC',
    bio: 'AI/ML expert, previously led engineering at construction tech startup.'
  },
  {
    name: 'Michael Brown',
    role: 'VP of Product',
    initials: 'MB',
    bio: 'Product leader with deep construction software experience.'
  },
  {
    name: 'Emily Davis',
    role: 'VP of Customer Success',
    initials: 'ED',
    bio: 'Dedicated to ensuring customer success and satisfaction.'
  }
]

const stats = [
  { value: '1,000+', label: 'Construction Firms' },
  { value: '$5B+', label: 'Projects Managed' },
  { value: '15', label: 'Countries' },
  { value: '99.9%', label: 'Uptime' },
  { value: '95%+', label: 'Accuracy Rate' },
  { value: '24/7', label: 'Support' },
  { value: '50+', label: 'Team Members' },
  { value: '4.9/5', label: 'Customer Rating' }
]
</script>
