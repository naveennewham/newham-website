<template>
  <section class="py-20 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-800"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,93,108,0.15),transparent_70%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Industry-Specific Solutions
          </span>
        </h2>
        <p class="text-gray-300 max-w-3xl mx-auto">
          Our technology addresses the unique challenges of each industry with specialized features and capabilities.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Solution Tabs -->
        <div>
          <div class="flex flex-col space-y-4">
            <button 
              v-for="(solution, index) in solutions" 
              :key="index"
              @click="activeSolution = index"
              class="solution-tab glass-panel p-6 rounded-lg text-left transition-all duration-300"
              :class="activeSolution === index ? 'active-tab' : ''"
            >
              <div class="flex items-start">
                <div class="solution-icon mr-4 p-3 rounded-lg bg-gradient-to-br" 
                     :class="activeSolution === index ? 'from-primary-800 to-secondary-800' : 'from-dark-700 to-dark-600'">
                  <i :class="[solution.icon, activeSolution === index ? 'text-secondary-400' : 'text-gray-400']" style="font-size: 1.25rem;"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-2">{{ solution.title }}</h3>
                  <p class="text-gray-400 text-sm">{{ solution.shortDesc }}</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        
        <!-- Right: Active Solution Details -->
        <div class="solution-detail glass-panel p-8 rounded-xl">
          <transition name="fade" mode="out-in">
            <div :key="activeSolution">
              <h3 class="text-2xl font-bold text-white mb-4">{{ solutions[activeSolution].title }}</h3>
              <p class="text-gray-300 mb-6">{{ solutions[activeSolution].description }}</p>
              
              <div class="mb-8">
                <h4 class="text-lg font-semibold text-secondary-400 mb-3">Key Features</h4>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li 
                    v-for="(feature, fIndex) in solutions[activeSolution].features" 
                    :key="fIndex"
                    class="flex items-start"
                  >
                    <span class="text-primary-500 mr-2 mt-1">
                      <i class="fa-solid fa-circle-check"></i>
                    </span>
                    <span class="text-gray-400">{{ feature }}</span>
                  </li>
                </ul>
              </div>
              
              <div class="flex flex-wrap gap-4">
                <a href="#" class="btn-primary">Learn More</a>
                <NuxtLink to="/contact" class="btn-outline">Request Demo</NuxtLink>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Industry Solutions
const solutions = [
  {
    title: 'Project Management',
    icon: 'mdi mdi-clipboard-check-outline',
    shortDesc: 'Streamline construction projects from planning to completion',
    description: 'Our industry-specific project management solutions integrate all aspects of construction projects, providing real-time visibility and control over schedules, resources, and budgets.',
    features: [
      'Interactive Gantt charts',
      'Resource allocation',
      'Budget tracking',
      'Document management',
      'Team collaboration tools',
      'Mobile field reporting'
    ]
  },
  {
    title: 'BIM Integration',
    icon: 'mdi mdi-cube-outline',
    shortDesc: 'Seamless Building Information Modeling integration',
    description: 'Connect your BIM models with project management, estimation, and field operations for a truly integrated construction technology ecosystem.',
    features: [
      '3D model visualization',
      'Clash detection',
      'Quantity takeoffs',
      'Design collaboration',
      'As-built documentation',
      'Facility management handover'
    ]
  },
  {
    title: 'IoT & Sensors',
    icon: 'mdi mdi-access-point',
    shortDesc: 'Smart construction sites with IoT technology',
    description: 'Transform your construction sites with IoT sensors and connected devices that monitor conditions, equipment, and safety in real-time.',
    features: [
      'Equipment tracking',
      'Environmental monitoring',
      'Safety alerts',
      'Predictive maintenance',
      'Energy consumption tracking',
      'Remote site monitoring'
    ]
  },
  {
    title: 'Analytics & Insights',
    icon: 'fa-solid fa-chart-line',
    shortDesc: 'Data-driven decision making for construction',
    description: 'Leverage advanced analytics and AI to gain actionable insights from your construction data, improving productivity and profitability.',
    features: [
      'Performance dashboards',
      'Predictive analytics',
      'Risk assessment',
      'Cost analysis',
      'Productivity tracking',
      'Benchmarking tools'
    ]
  }
];

const activeSolution = ref(0);
</script>

<style scoped>
.solution-tab {
  position: relative;
  overflow: hidden;
}

.solution-tab::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: transparent;
  transition: all 0.3s ease;
}

.solution-tab.active-tab::before {
  background: linear-gradient(to bottom, #005D6C, #01ACC8);
}

.active-tab {
  border: 1px solid rgba(1, 172, 200, 0.3);
  box-shadow: 0 0 20px rgba(1, 172, 200, 0.1);
  transform: translateX(5px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
