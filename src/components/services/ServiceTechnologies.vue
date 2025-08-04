<template>
  <section class="service-technologies-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-800"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(168,85,247,0.1),transparent_30%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Technologies</span>
          <span class="block text-white mt-2">Powering Our Solutions</span>
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto">
          We leverage cutting-edge technologies to deliver robust, scalable, and future-proof solutions for the construction industry.
        </p>
      </div>
      
      <!-- Technology Categories -->
      <div class="mb-16">
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="(category, index) in techCategories" 
            :key="index"
            @click="activeCategory = category.id"
            class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
            :class="activeCategory === category.id ? 
              'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg' : 
              'bg-dark-700 text-gray-300 hover:bg-dark-600'"
          >
            {{ category.name }}
          </button>
        </div>
        
        <!-- Technology Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div 
            v-for="(tech, index) in filteredTechnologies" 
            :key="index"
            class="tech-item glass-panel p-4 rounded-lg flex flex-col items-center justify-center group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg"
          >
            <div class="w-16 h-16 mb-4 flex items-center justify-center">
              <img :src="tech.logo" :alt="tech.name" class="max-w-full max-h-full object-contain" />
            </div>
            <h4 class="text-white text-center font-medium">{{ tech.name }}</h4>
          </div>
        </div>
      </div>
      
      <!-- Technology Approach -->
      <div class="glass-panel p-8 md:p-12 rounded-xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-6">Our Technology Approach</h3>
            <p class="text-gray-300 mb-6">
              We believe in using the right technology for each specific challenge. Our solutions are built on a foundation of proven technologies while incorporating innovative approaches when they add real value.
            </p>
            
            <div class="space-y-6">
              <div v-for="(approach, index) in techApproaches" :key="index" class="flex">
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center mr-4">
                  <component :is="approach.icon" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-2">{{ approach.title }}</h4>
                  <p class="text-gray-400">{{ approach.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Technology Illustration -->
          <div class="relative">
            <div class="glass-panel p-2 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-39b9d080a747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Technology Approach" 
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <!-- Decorative Elements -->
            <div class="absolute -top-6 -right-6 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
            <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, h } from 'vue';

// SVG Icons as render functions
const ScalableIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>'
});

const SecureIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>'
});

const IntegrateIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>'
});

const CloudIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>'
});

const activeCategory = ref('all');

const techCategories = [
  { id: 'all', name: 'All Technologies' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'cloud', name: 'Cloud & DevOps' },
  { id: 'data', name: 'Data & Analytics' }
];

const technologies = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'frontend' },
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'frontend' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', category: 'frontend' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'backend' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'backend' },
  { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', category: 'backend' },
  { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg', category: 'backend' },
  { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'mobile' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'mobile' },
  { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', category: 'mobile' },
  { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', category: 'mobile' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', category: 'cloud' },
  { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud' },
  { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', category: 'cloud' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'cloud' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'cloud' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'data' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'data' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'data' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', category: 'data' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', category: 'data' }
];

const filteredTechnologies = computed(() => {
  if (activeCategory.value === 'all') {
    return technologies;
  }
  return technologies.filter(tech => tech.category === activeCategory.value);
});

const techApproaches = [
  {
    title: 'Scalable Architecture',
    description: 'We design solutions that can grow with your business, handling increased loads and expanding functionality without requiring a complete rebuild.',
    icon: ScalableIcon
  },
  {
    title: 'Security-First Development',
    description: 'Security is built into our development process from the ground up, not added as an afterthought, ensuring your data and systems are protected.',
    icon: SecureIcon
  },
  {
    title: 'Seamless Integration',
    description: 'Our solutions are designed to work with your existing systems and workflows, minimizing disruption and maximizing value.',
    icon: IntegrateIcon
  },
  {
    title: 'Cloud-Native Solutions',
    description: 'We leverage cloud technologies to provide flexible, resilient, and cost-effective solutions that can be accessed from anywhere.',
    icon: CloudIcon
  }
];
</script>
