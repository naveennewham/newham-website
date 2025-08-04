<template>
  <section class="features-section section-padding relative overflow-hidden">
    <!-- Geometric Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      
      <!-- Diagonal Stripes -->
      <div class="absolute inset-0 opacity-5">
        <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#005D6C,#005D6C_1px,transparent_1px,transparent_10px)]">
        </div>
      </div>
      
      <!-- Geometric Shapes -->
      <div class="absolute top-20 right-20 w-40 h-40 border-2 border-primary-500/10 transform rotate-45"></div>
      <div class="absolute bottom-40 left-20 w-64 h-64 border-2 border-secondary-500/10 transform -rotate-12"></div>
      
      <!-- Diagonal Lines -->
      <div class="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-800/5 to-transparent skew-y-12"></div>
      <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary-800/5 to-transparent -skew-y-12"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header with Geometric Design -->
      <div class="text-center mb-16 relative">
        <!-- Geometric accent elements -->
        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500 skew-x-12"></div>
        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 translate-x-12 w-10 h-1 bg-secondary-500 -skew-x-12"></div>
        
        <h2 class="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          <span class="gradient-text">Innovative Solutions</span>
          <span class="block text-white mt-2">For Modern Construction</span>
          <!-- Underline with geometric design -->
          <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-500 transform skew-x-12"></span>
          <span class="absolute -bottom-2 right-0 w-1/3 h-1 bg-secondary-500 transform -skew-x-12"></span>
        </h2>
        
        <p class="text-gray-400 max-w-3xl mx-auto mt-6">
          Our comprehensive suite of software solutions and services designed specifically for the construction industry and beyond.
        </p>
      </div>
      
      <!-- Features Grid with Geometric Design -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(feature, index) in features" :key="index" 
             class="relative bg-dark-800/50 backdrop-blur-sm p-6 transition-all duration-300 overflow-hidden"
             :class="{'ai-glow-primary': index % 2 === 0, 'ai-glow-secondary': index % 2 !== 0}"
             :style="{'clip-path': 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'}">
          
          <!-- AI Glow Effect -->
          <div class="absolute inset-0 z-0" :class="index % 2 === 0 ? 'ai-glow-radial-primary' : 'ai-glow-radial-secondary'"></div>
          
          <!-- Geometric Accents -->
          <div class="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 z-10" 
               :class="index % 2 === 0 ? 'border-primary-500/30' : 'border-secondary-500/30'"></div>
          <div class="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 z-10" 
               :class="index % 2 === 0 ? 'border-primary-500/30' : 'border-secondary-500/30'"></div>
          
          <!-- Icon with geometric background -->
          <div class="w-14 h-14 mb-6 flex items-center justify-center transform rotate-45 relative">
            <div class="absolute inset-0" :class="feature.bgClass"></div>
            <div class="transform -rotate-45 relative z-10">
              <component :is="feature.icon" class="w-7 h-7" />
            </div>
          </div>
          
          <h3 class="text-xl font-semibold text-white mb-3">{{ feature.title }}</h3>
          <p class="text-gray-400 mb-4">{{ feature.description }}</p>
          
          <!-- Geometric button -->
          <router-link :to="feature.link" 
                      class="inline-block relative px-4 py-2 overflow-hidden group"
                      :class="index % 2 === 0 ? 'text-primary-400' : 'text-secondary-400'">
            <span class="absolute top-0 left-0 w-full h-full border"
                  :class="index % 2 === 0 ? 'border-primary-500/30' : 'border-secondary-500/30'"></span>
            <span class="absolute top-0 left-0 w-0 h-full transition-all duration-300 group-hover:w-full"
                  :class="index % 2 === 0 ? 'bg-primary-500/10' : 'bg-secondary-500/10'"></span>
            <span class="relative flex items-center">
              Learn more
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </router-link>
        </div>
      </div>
      
      <!-- Additional Feature List with Geometric Design -->
      <div class="mt-16 relative bg-dark-800/50 backdrop-blur-sm p-8 border-t-4 border-r-4 border-primary-500/20 ai-glow-primary overflow-hidden">
        <!-- AI Glow Effect -->
        <div class="absolute inset-0 z-0 ai-glow-radial-primary opacity-50"></div>
        <!-- Geometric corner accent -->
        <div class="absolute -top-3 -right-3 w-12 h-12 bg-primary-500/20 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
        
        <h3 class="text-2xl font-semibold text-white mb-6 relative inline-block">
          Why Choose Our Solutions
          <span class="absolute -bottom-2 left-0 w-1/3 h-1 bg-secondary-500 transform skew-x-12"></span>
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, index) in additionalFeatures" :key="index" 
               class="flex items-start group hover:bg-dark-700/30 p-3 transition-colors duration-300 relative overflow-hidden"
               :class="index % 3 === 0 ? 'ai-glow-primary-subtle' : index % 3 === 1 ? 'ai-glow-secondary-subtle' : 'ai-glow-primary-subtle'"
               :style="{'clip-path': index % 2 === 0 ? 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' : 'polygon(5% 0, 95% 0, 100% 100%, 0% 100%)'}">
            
            <!-- Geometric icon container -->
            <div class="flex-shrink-0 w-10 h-10 transform rotate-45 bg-dark-900 flex items-center justify-center mr-4 relative overflow-hidden"
                 :class="index % 3 === 0 ? 'border-t-2 border-l-2 border-primary-500/40' : 
                         index % 3 === 1 ? 'border-t-2 border-r-2 border-secondary-500/40' : 
                                          'border-b-2 border-l-2 border-primary-500/40'">
              <div class="transform -rotate-45">
                <svg class="w-5 h-5" :class="index % 3 === 0 ? 'text-primary-400' : 
                                             index % 3 === 1 ? 'text-secondary-400' : 
                                                              'text-primary-400'" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            
            <div>
              <h4 class="text-lg font-medium text-white mb-1 relative inline-block">
                {{ item.title }}
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </h4>
              <p class="text-gray-400">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

// SVG Icons as render functions
const ProjectManagementIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>'
});

const SoftwareIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>'
});

const MobileIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>'
});

const CloudIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>'
});

const features = [
  {
    title: 'Construction Tech Tools',
    description: 'Project management, field applications, and compliance solutions tailored for construction companies.',
    icon: ProjectManagementIcon,
    bgClass: 'bg-primary-900/50 text-primary-400',
    link: '/services'
  },
  {
    title: 'Custom Software Development',
    description: 'Bespoke software solutions designed to address your specific business challenges.',
    icon: SoftwareIcon,
    bgClass: 'bg-secondary-900/50 text-secondary-400',
    link: '/services'
  },
  {
    title: 'Mobile & Web Apps',
    description: 'Cross-platform applications that work seamlessly across all devices and browsers.',
    icon: MobileIcon,
    bgClass: 'bg-primary-900/50 text-primary-400',
    link: '/services'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and continuous integration/deployment pipelines.',
    icon: CloudIcon,
    bgClass: 'bg-secondary-900/50 text-secondary-400',
    link: '/services'
  }
];

const additionalFeatures = [
  {
    title: 'Real-time Collaboration',
    description: 'Enable teams to work together seamlessly from anywhere.'
  },
  {
    title: 'Data-Driven Insights',
    description: 'Make informed decisions with powerful analytics and reporting.'
  },
  {
    title: 'Regulatory Compliance',
    description: 'Stay compliant with industry standards and regulations.'
  },
  {
    title: 'Scalable Architecture',
    description: 'Solutions that grow with your business needs.'
  },
  {
    title: 'Mobile-First Design',
    description: 'Access critical information from any device, anywhere.'
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support team available around the clock.'
  }
];
</script>
