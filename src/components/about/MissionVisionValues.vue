<template>
  <section class="mission-vision-values-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-800"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.1),transparent_30%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Our Foundation</span>
          <span class="block text-white mt-2">Mission, Vision & Values</span>
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto">
          The principles that guide our work and shape our company culture
        </p>
      </div>
      
      <!-- Mission, Vision, Values Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <!-- Mission Card -->
        <div class="glass-panel p-8 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-glass-lg">
          <div class="w-16 h-16 rounded-full bg-primary-900/50 flex items-center justify-center mb-6 mx-auto">
            <svg class="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          
          <h3 class="text-2xl font-semibold text-white mb-4 text-center">Our Mission</h3>
          
          <p class="text-gray-300 text-center">
            To empower construction companies with innovative technology solutions that streamline operations, enhance collaboration, and drive sustainable growth.
          </p>
        </div>
        
        <!-- Vision Card -->
        <div class="glass-panel p-8 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-glass-lg">
          <div class="w-16 h-16 rounded-full bg-secondary-900/50 flex items-center justify-center mb-6 mx-auto">
            <svg class="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
          
          <h3 class="text-2xl font-semibold text-white mb-4 text-center">Our Vision</h3>
          
          <p class="text-gray-300 text-center">
            To be the global leader in construction technology, recognized for transforming the industry through digital innovation and exceptional client outcomes.
          </p>
        </div>
        
        <!-- Values Card -->
        <div class="glass-panel p-8 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-glass-lg">
          <div class="w-16 h-16 rounded-full bg-primary-900/50 flex items-center justify-center mb-6 mx-auto">
            <svg class="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          
          <h3 class="text-2xl font-semibold text-white mb-4 text-center">Our Values</h3>
          
          <p class="text-gray-300 text-center">
            We are guided by integrity, innovation, excellence, collaboration, and a relentless focus on delivering value to our clients and partners.
          </p>
        </div>
      </div>
      
      <!-- Core Values -->
      <div>
        <h3 class="text-2xl font-semibold text-white mb-8 text-center">Core Values in Action</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(value, index) in coreValues" :key="index" 
               class="glass-panel-light p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mr-4">
                <component :is="value.icon" class="w-5 h-5 text-white" />
              </div>
              <h4 class="text-xl font-semibold text-white">{{ value.title }}</h4>
            </div>
            
            <p class="text-gray-300">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

// SVG Icons as render functions
const IntegrityIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
});

const InnovationIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>'
});

const ExcellenceIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>'
});

const CollaborationIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>'
});

const ClientFocusIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>'
});

const SustainabilityIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
});

const coreValues = [
  {
    title: 'Integrity',
    description: 'We operate with transparency and honesty in all our interactions, building trust with our clients, partners, and team members.',
    icon: IntegrityIcon
  },
  {
    title: 'Innovation',
    description: 'We continuously explore new technologies and approaches to solve complex challenges and create better solutions.',
    icon: InnovationIcon
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality in everything we do, exceeding expectations and setting new standards.',
    icon: ExcellenceIcon
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork, fostering an environment where diverse perspectives drive better outcomes.',
    icon: CollaborationIcon
  },
  {
    title: 'Client Focus',
    description: 'We put our clients at the center of our work, deeply understanding their needs and delivering solutions that create lasting value.',
    icon: ClientFocusIcon
  },
  {
    title: 'Sustainability',
    description: 'We develop solutions that promote environmental responsibility and contribute to a more sustainable construction industry.',
    icon: SustainabilityIcon
  }
];
</script>
