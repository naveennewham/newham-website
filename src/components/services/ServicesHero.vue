<template>
  <section class="services-hero-section relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,120,255,0.15),transparent_40%)]"></div>
      
      <!-- Decorative Grid -->
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Page Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span class="gradient-text">Our Services</span>
          <span class="block text-white mt-2">Technology Solutions for Construction</span>
        </h1>
        
        <p class="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          We provide innovative technology solutions tailored to the unique challenges of the construction industry, helping companies streamline operations and drive growth.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services-list" class="btn-primary">
            Explore Our Services
          </a>
          <router-link to="/contact" class="btn-outline">
            Request a Consultation
          </router-link>
        </div>
        
        <!-- Service Categories Preview -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div v-for="(category, index) in serviceCategories" :key="index" 
               class="glass-panel-light p-4 rounded-xl text-center transform transition-all duration-300 hover:-translate-y-1">
            <div class="w-12 h-12 mx-auto mb-3 text-primary-400">
              <component :is="category.icon" class="w-full h-full" />
            </div>
            <h3 class="text-white font-medium">{{ category.name }}</h3>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Decorative Bottom Wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full h-auto fill-dark-800">
        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

// SVG Icons as render functions
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

const ConsultingIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>'
});

const serviceCategories = [
  {
    name: 'Software Solutions',
    icon: SoftwareIcon
  },
  {
    name: 'Mobile Applications',
    icon: MobileIcon
  },
  {
    name: 'Cloud Services',
    icon: CloudIcon
  },
  {
    name: 'Tech Consulting',
    icon: ConsultingIcon
  }
];
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
