<template>
  <section class="industries-hero-section relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,93,108,0.15),transparent_50%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(1,172,200,0.1),transparent_30%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" v-scroll-animation="'fade-up'">
            <span class="text-white">Industry-Specific</span>
            <span class="block mt-2 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Technology Solutions</span>
          </h1>
          
          <p class="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl" v-scroll-animation="'fade-up'">
            We deliver tailored software solutions that address the unique challenges of various industries, with deep expertise in construction and related sectors.
          </p>
          
          <div class="flex flex-wrap gap-4" v-scroll-animation="'fade-up'">
            <a href="#industry-cards" class="btn-primary">
              Explore Industries
            </a>
            <router-link to="/contact" class="btn-outline">
              Discuss Your Industry
            </router-link>
          </div>
          
          <!-- Industry Stats -->
          <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6" v-scroll-animation="'fade-up'">
            <div v-for="(stat, index) in industryStats" :key="index" class="glass-panel p-4 rounded-lg text-center">
              <div class="text-2xl md:text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
              <div class="text-sm text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        
        <!-- Hero Image -->
        <div class="relative" v-scroll-animation="'fade-left'">
          <div class="glass-panel p-2 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Industry Solutions" 
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <!-- Floating Industry Icons -->
          <div class="absolute -top-6 -left-6 w-16 h-16 glass-panel-light rounded-xl flex items-center justify-center transform rotate-12 animate-float-slow">
            <component :is="BuildingIcon" class="w-8 h-8 text-primary-400" />
          </div>
          
          <div class="absolute top-1/4 -right-4 w-14 h-14 glass-panel-light rounded-xl flex items-center justify-center transform -rotate-6 animate-float">
            <component :is="BridgeIcon" class="w-7 h-7 text-secondary-400" />
          </div>
          
          <div class="absolute bottom-1/4 -left-8 w-20 h-20 glass-panel-light rounded-xl flex items-center justify-center transform rotate-6 animate-float-slow">
            <component :is="InfrastructureIcon" class="w-10 h-10 text-primary-400" />
          </div>
          
          <div class="absolute -bottom-4 right-12 w-16 h-16 glass-panel-light rounded-xl flex items-center justify-center transform -rotate-12 animate-float">
            <component :is="HomeIcon" class="w-8 h-8 text-secondary-400" />
          </div>
          
          <!-- Decorative Elements -->
          <div class="absolute -top-8 -right-8 w-32 h-32 bg-primary-800/20 rounded-full blur-2xl"></div>
          <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

// SVG Icons as render functions
const BuildingIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>'
});

const BridgeIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9h18m-18 0a2 2 0 00-2 2v6a2 2 0 002 2h18a2 2 0 002-2v-6a2 2 0 00-2-2m-18 0v-3a2 2 0 012-2h14a2 2 0 012 2v3m-9-3v12"></path>'
});

const InfrastructureIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 3h1m-1 4h1m4-4h1m-1 4h1m4 0h1m-1 4h1m-1 4h1m-1 4h1m-7-1v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>'
});

const HomeIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>'
});

const industryStats = [
  { value: '10+', label: 'Industries Served' },
  { value: '200+', label: 'Projects Completed' },
  { value: '95%', label: 'Client Satisfaction' }
];
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(-6deg);
  }
  50% {
    transform: translateY(-10px) rotate(-3deg);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) rotate(6deg);
  }
  50% {
    transform: translateY(-15px) rotate(9deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}
</style>
