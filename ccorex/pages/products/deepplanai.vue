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
              <div class="text-6xl"><i class="mdi mdi-ruler"></i></div>
              <div>
                <h1 class="text-5xl md:text-6xl font-bold text-white">DeepPlan AI</h1>
                <p class="text-xl text-primary-400 font-semibold">AI-Powered Drawing Takeoff & Quantity Extraction</p>
              </div>
            </div>
            <p class="text-2xl text-gray-300 mb-8">
              Transform your takeoff process with AI-powered measurement and quantity extraction. Reduce manual work by 40% while increasing accuracy to 95%+.
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
                  <p class="text-lg font-semibold">[SCREENSHOT – DeepPlan AI Interface]</p>
                  <p class="text-sm mt-2">AI-powered takeoff with automatic detection</p>
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
            The Future of Takeoffs is Here
          </h2>
          <p class="text-xl text-gray-300">
            DeepPlan AI uses computer vision and machine learning to automatically detect and measure elements in your construction drawings. What used to take days now takes hours.
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

    <!-- AI Capabilities -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-6">
            Powered by AI
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            What AI Can Do For You
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI has been trained on millions of construction drawings to recognize and measure elements automatically.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="capability in aiCapabilities" :key="capability.title" class="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary-500/50 transition-all">
            <div class="text-4xl mb-4"><i :class="capability.icon"></i></div>
            <h3 class="text-xl font-bold text-white mb-3">{{ capability.title }}</h3>
            <p class="text-gray-400 mb-4">{{ capability.description }}</p>
            <div class="text-sm text-primary-400 font-semibold">{{ capability.accuracy }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Powerful Takeoff Features
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

    <!-- How It Works -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            How DeepPlan AI Works
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            From upload to export in four simple steps.
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

    <!-- Measurement Tools -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Comprehensive Measurement Tools
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Manual and automated tools for every type of measurement.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="tool in measurementTools" :key="tool.name" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="text-3xl mb-3"><i :class="tool.icon"></i></div>
            <h3 class="text-lg font-bold text-white mb-2">{{ tool.name }}</h3>
            <p class="text-sm text-gray-400 mb-3">{{ tool.description }}</p>
            <div class="text-xs text-primary-400 font-semibold">{{ tool.type }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Collaboration -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
              Real-Time Collaboration
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Work together on takeoffs with your team. See changes in real-time, leave comments, and track revisions.
            </p>
            <ul class="space-y-4 mb-8">
              <li v-for="feature in collaborationFeatures" :key="feature" class="flex items-start gap-3 text-gray-300">
                <i class="fa-solid fa-check text-primary-400 text-lg mt-1"></i>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
          <div>
            <!-- Collaboration Screenshot Placeholder -->
            <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-800/50">
              <div class="aspect-video flex items-center justify-center text-gray-400">
                <div class="text-center">
                  <i class="fa-regular fa-image text-7xl text-primary-400"></i>
                  <p class="text-lg font-semibold">[SCREENSHOT – Team Collaboration]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- File Support -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Works with All Drawing Formats
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Upload any drawing format and start measuring immediately.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div v-for="format in fileFormats" :key="format.name" class="p-6 rounded-xl border border-white/10 bg-white/5 text-center hover:border-primary-500/50 transition-all">
            <div class="text-3xl mb-2"><i :class="format.icon"></i></div>
            <div class="text-sm font-semibold text-white">{{ format.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <!-- Integration Diagram Placeholder -->
            <div class="p-8 rounded-2xl border-2 border-dashed border-primary-500/30 bg-slate-900/50">
              <div class="aspect-square flex items-center justify-center text-gray-400">
                <div class="text-center">
                  <i class="fa-regular fa-image text-7xl text-primary-400"></i>
                  <p class="text-lg font-semibold">[DIAGRAM – Integration Flow]</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
              Direct Integration with DeepCost
            </h2>
            <p class="text-xl text-gray-300 mb-8">
              Quantities flow automatically from DeepPlan AI to DeepCost for instant cost estimation. No manual re-entry, no errors.
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
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="py-20 bg-slate-900">
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

    <!-- CTA -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Experience AI-Powered Takeoffs
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          See how DeepPlan AI can reduce your takeoff time by 40% while improving accuracy.
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
  { value: '40%', label: 'Faster' },
  { value: '95%+', label: 'Accuracy' },
  { value: 'AI', label: 'Powered' }
]

const overviewBenefits = [
  {
    icon: 'fa-solid fa-robot',
    title: 'AI Automation',
    description: 'Let AI handle tedious measurements while you focus on reviewing and adjusting.'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: '40% Faster',
    description: 'Complete takeoffs in hours instead of days with automated detection and measurement.'
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: '95%+ Accurate',
    description: 'AI-powered measurements are more consistent and accurate than manual takeoffs.'
  }
]

const aiCapabilities = [
  {
    icon: 'fa-solid fa-house',
    title: 'Wall Detection',
    description: 'Automatically identify and measure walls, including thickness and height',
    accuracy: '96% accuracy'
  },
  {
    icon: 'fa-solid fa-door-open',
    title: 'Door & Window Detection',
    description: 'Recognize and count doors, windows, and openings across all floors',
    accuracy: '94% accuracy'
  },
  {
    icon: 'fa-solid fa-drafting-compass',
    title: 'Area Calculation',
    description: 'Calculate floor areas, room sizes, and surface areas automatically',
    accuracy: '98% accuracy'
  },
  {
    icon: 'mdi mdi-ruler',
    title: 'Perimeter Measurement',
    description: 'Measure perimeters, lengths, and linear elements with precision',
    accuracy: '97% accuracy'
  },
  {
    icon: 'fa-solid fa-hashtag',
    title: 'Count Detection',
    description: 'Automatically count fixtures, outlets, equipment, and repeated elements',
    accuracy: '93% accuracy'
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'Layer Analysis',
    description: 'Process multi-layer drawings and separate elements by discipline',
    accuracy: '95% accuracy'
  }
]

const keyFeatures = [
  {
    category: 'AI Detection',
    title: 'Automatic Element Recognition',
    description: 'AI identifies walls, doors, windows, and other elements automatically. Review and adjust as needed.',
    points: [
      'Computer vision detection',
      'Multi-element recognition',
      'Confidence scoring',
      'Learning from corrections',
      'Batch processing',
      'Custom training'
    ]
  },
  {
    category: 'Measurement',
    title: 'Precision Measurement Tools',
    description: 'Manual and automated tools for every type of measurement. Scale drawings automatically or set custom scales.',
    points: [
      'Auto-scaling',
      'Linear measurement',
      'Area calculation',
      'Count tools',
      'Angle measurement',
      'Volume calculation'
    ]
  },
  {
    category: 'Collaboration',
    title: 'Real-Time Team Collaboration',
    description: 'Multiple team members can work on the same drawing simultaneously. See changes in real-time.',
    points: [
      'Live collaboration',
      'Comments & annotations',
      'Version control',
      'Change tracking',
      'User permissions',
      'Activity logs'
    ]
  },
  {
    category: 'Export',
    title: 'Flexible Export Options',
    description: 'Export quantities to DeepCost, Excel, or other formats. Maintain full traceability.',
    points: [
      'DeepCost integration',
      'Excel export',
      'PDF reports',
      'Custom templates',
      'Bulk export',
      'API access'
    ]
  }
]

const workflow = [
  {
    icon: 'fa-solid fa-upload',
    title: 'Upload Drawing',
    description: 'Upload PDF, DWG, or image files'
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'AI Processing',
    description: 'AI detects and measures elements'
  },
  {
    icon: 'fa-solid fa-pen',
    title: 'Review & Adjust',
    description: 'Review AI results and make corrections'
  },
  {
    icon: 'fa-solid fa-chart-bar',
    title: 'Export',
    description: 'Export to DeepCost or other formats'
  }
]

const measurementTools = [
  {
    icon: 'mdi mdi-ruler',
    name: 'Linear',
    description: 'Measure lengths and distances',
    type: 'Manual & AI'
  },
  {
    icon: 'fa-solid fa-drafting-compass',
    name: 'Area',
    description: 'Calculate areas and surfaces',
    type: 'Manual & AI'
  },
  {
    icon: 'fa-solid fa-hashtag',
    name: 'Count',
    description: 'Count elements and fixtures',
    type: 'Manual & AI'
  },
  {
    icon: 'fa-solid fa-chart-bar',
    name: 'Volume',
    description: 'Calculate volumes',
    type: 'Manual'
  },
  {
    icon: 'fa-solid fa-ruler-combined',
    name: 'Angle',
    description: 'Measure angles',
    type: 'Manual'
  },
  {
    icon: 'fa-regular fa-circle',
    name: 'Perimeter',
    description: 'Measure perimeters',
    type: 'Manual & AI'
  },
  {
    icon: 'fa-solid fa-location-dot',
    name: 'Point',
    description: 'Mark specific points',
    type: 'Manual'
  },
  {
    icon: 'fa-solid fa-pen',
    name: 'Annotation',
    description: 'Add notes and labels',
    type: 'Manual'
  }
]

const collaborationFeatures = [
  'Multiple users on same drawing',
  'Real-time cursor tracking',
  'Comments and annotations',
  'Version history and rollback',
  'Change notifications',
  'Role-based permissions'
]

const fileFormats = [
  { name: 'PDF', icon: 'fa-regular fa-file-lines' },
  { name: 'DWG', icon: 'fa-solid fa-drafting-compass' },
  { name: 'DXF', icon: 'fa-solid fa-clipboard-list' },
  { name: 'PNG', icon: 'fa-regular fa-image' },
  { name: 'JPG', icon: 'fa-solid fa-camera' },
  { name: 'TIFF', icon: 'fa-solid fa-layer-group' }
]

const integrations = [
  {
    icon: 'fa-solid fa-coins',
    name: 'DeepCost',
    description: 'Quantities flow directly to cost estimation'
  },
  {
    icon: 'fa-solid fa-chart-bar',
    name: 'Excel Export',
    description: 'Export to spreadsheets for further analysis'
  },
  {
    icon: 'fa-regular fa-file-lines',
    name: 'PDF Reports',
    description: 'Generate professional takeoff reports'
  },
  {
    icon: 'fa-solid fa-plug',
    name: 'API Access',
    description: 'Integrate with custom workflows'
  }
]

const useCases = [
  {
    role: 'Estimators',
    icon: 'fa-solid fa-briefcase',
    description: 'Fast, accurate takeoffs for competitive bidding.',
    benefits: [
      'Reduce takeoff time by 40%',
      'Improve accuracy to 95%+',
      'Handle more bids',
      'Win more projects'
    ]
  },
  {
    role: 'Quantity Surveyors',
    icon: 'fa-solid fa-chart-bar',
    description: 'Professional quantity surveying services.',
    benefits: [
      'Detailed measurements',
      'Professional reports',
      'Client collaboration',
      'Audit trails'
    ]
  },
  {
    role: 'Project Managers',
    icon: 'fa-solid fa-helmet-safety',
    description: 'Verify contractor quantities and track changes.',
    benefits: [
      'Validate estimates',
      'Track revisions',
      'Change order quantities',
      'Progress measurement'
    ]
  }
]
</script>
