<template>
  <section id="industry-cards" class="py-20 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      <div class="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-800 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-dark-800 to-transparent"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(1,172,200,0.1),transparent_70%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16" v-scroll-animation="'fade-up'">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Industries We Serve
          </span>
        </h2>
        <p class="text-gray-300 max-w-3xl mx-auto">
          Our specialized software solutions are tailored to meet the unique challenges and requirements of these key industries.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(industry, index) in industries" 
          :key="index" 
          class="industry-card glass-panel rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary-900/20 group"
          :class="{'delay-100': index % 3 === 0, 'delay-200': index % 3 === 1, 'delay-300': index % 3 === 2}"
          v-scroll-animation="'fade-up'"
          :style="staggeredDelay(100, 150, index)"
        >
          <!-- Card Header with Image -->
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="industry.image" 
              :alt="industry.name" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
            <div class="absolute bottom-0 left-0 w-full p-4">
              <h3 class="text-xl font-bold text-white">{{ industry.name }}</h3>
            </div>
          </div>
          
          <!-- Card Content -->
          <div class="p-6">
            <p class="text-gray-300 mb-4">{{ industry.description }}</p>
            
            <!-- Key Features -->
            <ul class="mb-6 space-y-2">
              <li 
                v-for="(feature, fIndex) in industry.features" 
                :key="fIndex" 
                class="flex items-start text-sm"
              >
                <span class="text-secondary-500 mr-2 mt-1">
                  <component :is="CheckIcon" class="w-4 h-4" />
                </span>
                <span class="text-gray-400">{{ feature }}</span>
              </li>
            </ul>
            
            <!-- Card Footer -->
            <div class="pt-4 border-t border-dark-600">
              <a 
                href="#" 
                class="inline-flex items-center text-secondary-400 hover:text-secondary-300 transition-colors duration-300"
              >
                Learn More
                <component :is="ArrowRightIcon" class="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';
import { staggeredDelay } from '../../utils/transitions';

// SVG Icons as render functions
const CheckIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>'
});

const ArrowRightIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>'
});

// Industry data
const industries = [
  {
    name: 'Commercial Construction',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive software solutions for commercial construction projects, from planning to completion.',
    features: [
      'Project management and scheduling',
      'BIM integration and coordination',
      'Cost estimation and control',
      'Quality and safety management'
    ]
  },
  {
    name: 'Residential Development',
    image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Tailored solutions for residential builders and developers to streamline processes and enhance customer experience.',
    features: [
      'Customer relationship management',
      'Design customization tools',
      'Construction progress tracking',
      'Warranty and maintenance management'
    ]
  },
  {
    name: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Advanced software for infrastructure projects including roads, bridges, and public facilities.',
    features: [
      'Asset lifecycle management',
      'Regulatory compliance tools',
      'Environmental impact assessment',
      'Public stakeholder communication'
    ]
  },
  {
    name: 'Industrial Facilities',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Specialized solutions for industrial construction and facility management with focus on efficiency and safety.',
    features: [
      'Equipment integration and IoT',
      'Maintenance scheduling',
      'Safety protocol management',
      'Energy efficiency optimization'
    ]
  },
  {
    name: 'Healthcare Facilities',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Custom software for healthcare construction projects addressing unique regulatory and operational requirements.',
    features: [
      'Medical equipment planning',
      'Infection control measures',
      'Patient flow optimization',
      'Regulatory compliance tracking'
    ]
  },
  {
    name: 'Retail & Commercial',
    image: 'https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Retail-focused construction and management solutions that integrate with business operations.',
    features: [
      'Store layout optimization',
      'Customer experience design',
      'Visual merchandising tools',
      'Facility management integration'
    ]
  }
];
</script>

<style scoped>
.industry-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply animation with delay based on index */
.industry-card:nth-child(1) { animation-delay: 0.1s; }
.industry-card:nth-child(2) { animation-delay: 0.2s; }
.industry-card:nth-child(3) { animation-delay: 0.3s; }
.industry-card:nth-child(4) { animation-delay: 0.4s; }
.industry-card:nth-child(5) { animation-delay: 0.5s; }
.industry-card:nth-child(6) { animation-delay: 0.6s; }
</style>
