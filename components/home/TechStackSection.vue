<template>
  <section class="tech-stack-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-800"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.1),transparent_30%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Powered by</span>
          <span class="block text-white mt-2">Cutting-Edge Technology</span>
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto">
          We leverage the latest technologies to deliver robust, scalable, and future-proof solutions for our clients.
        </p>
      </div>
      
      <!-- Tech Categories -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div v-for="(category, index) in techCategories" :key="index" 
             class="glass-panel p-6 rounded-xl text-center relative overflow-hidden"
             :class="index % 2 === 0 ? 'ai-glow-primary' : 'ai-glow-secondary'">
          <!-- AI Glow Effect -->
          <div class="absolute inset-0 z-0" :class="index % 2 === 0 ? 'ai-glow-radial-primary' : 'ai-glow-radial-secondary'"></div>
          <div class="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
               :class="category.bgClass">
            <component :is="category.icon" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">{{ category.title }}</h3>
          <p class="text-gray-400 mb-4">{{ category.description }}</p>
        </div>
      </div>
      
      <!-- Tech Stack Grid -->
      <div class="glass-panel p-8 rounded-xl relative overflow-hidden">
        <!-- Static Glow Effect (No Animation) -->
        <div class="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-400-rgb),0.2),transparent_70%)] opacity-40"></div>
        <h3 class="text-2xl font-semibold text-white mb-8 text-center">Technologies We Work With</h3>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div v-for="(tech, index) in techStack" :key="index" 
               class="tech-item p-4 rounded-lg bg-dark-700/50 hover:bg-dark-600/50 transition-colors duration-300 flex flex-col items-center justify-center group relative overflow-hidden">
            <!-- Static Glow Effect (No Animation) -->
            <div class="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" 
                 :class="index % 3 === 0 ? 'bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-400-rgb),0.2),transparent_70%)]' : index % 3 === 1 ? 'bg-[radial-gradient(circle_at_center,rgba(var(--color-secondary-400-rgb),0.2),transparent_70%)]' : 'bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-400-rgb),0.2),transparent_70%)]'"></div>
            <div class="w-12 h-12 mb-3 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
              <img :src="tech.logo" :alt="tech.name" class="max-w-full max-h-full object-contain" />
            </div>
            <span class="text-sm text-gray-400 group-hover:text-white transition-colors">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

// SVG Icons as render functions
const FrontendIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>'
});

const BackendIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>'
});

const CloudIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>'
});

const techCategories = [
  {
    title: 'Frontend Development',
    description: 'Modern, responsive interfaces with the latest JavaScript frameworks and libraries.',
    icon: FrontendIcon,
    bgClass: 'bg-primary-900/50 text-primary-400'
  },
  {
    title: 'Backend Development',
    description: 'Robust, scalable server-side solutions with secure API architecture.',
    icon: BackendIcon,
    bgClass: 'bg-secondary-900/50 text-secondary-400'
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Scalable cloud solutions with automated deployment and monitoring.',
    icon: CloudIcon,
    bgClass: 'bg-primary-900/50 text-primary-400'
  }
];

// Placeholder tech stack - in a real app, you'd use actual logos
const techStack = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
];
</script>
