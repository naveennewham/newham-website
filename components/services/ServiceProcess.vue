<template>
  <section class="service-process-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(120,120,255,0.1),transparent_30%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Our Process</span>
          <span class="block text-white mt-2">How We Deliver Excellence</span>
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto">
          We follow a proven methodology to ensure successful outcomes for every project, from initial consultation to ongoing support.
        </p>
      </div>
      
      <!-- Process Steps -->
      <div class="relative">
        <!-- Process Timeline Line -->
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 transform -translate-x-1/2"></div>
        
        <div class="space-y-16 md:space-y-0">
          <div v-for="(step, index) in processSteps" :key="index" 
               class="relative md:grid md:grid-cols-2 md:gap-8 items-center"
               :class="index % 2 === 0 ? '' : 'md:rtl'">
            
            <!-- Step Number (Mobile) -->
            <div class="md:hidden flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                {{ index + 1 }}
              </div>
              <div class="ml-4 text-xl font-semibold text-white">{{ step.title }}</div>
            </div>
            
            <!-- Step Content -->
            <div class="md:ltr">
              <div class="glass-panel p-6 md:p-8 rounded-xl transform transition-all duration-300 hover:shadow-glass-lg">
                <!-- Step Number (Desktop) -->
                <div class="hidden md:flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                    {{ index + 1 }}
                  </div>
                  <div class="ml-4 text-xl font-semibold text-white">{{ step.title }}</div>
                </div>
                
                <p class="text-gray-300 mb-6">{{ step.description }}</p>
                
                <!-- Step Features -->
                <ul class="space-y-3">
                  <li v-for="(feature, featureIndex) in step.features" :key="featureIndex" class="flex items-start">
                    <svg class="w-5 h-5 text-primary-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-400">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Timeline Dot (Desktop) -->
            <div class="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                {{ index + 1 }}
              </div>
            </div>
            
            <!-- Step Image -->
            <div class="mt-6 md:mt-0">
              <div class="relative">
                <div class="glass-panel p-2 rounded-xl overflow-hidden">
                  <img 
                    :src="step.image" 
                    :alt="step.title" 
                    class="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <!-- Decorative Elements -->
                <div class="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"></div>
                <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Process Benefits -->
      <div class="mt-24 text-center">
        <h3 class="text-2xl font-semibold text-white mb-10">Benefits of Our Approach</h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(benefit, index) in processBenefits" :key="index" 
               class="glass-panel-light p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center mx-auto mb-4">
              <component :is="benefit.icon" class="w-8 h-8 text-white" />
            </div>
            
            <h4 class="text-xl font-semibold text-white mb-2">{{ benefit.title }}</h4>
            <p class="text-gray-400">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

// SVG Icons as render functions
const SpeedIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
});

const QualityIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
});

const CollaborationIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>'
});

const SupportIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>'
});

const processSteps = [
  {
    title: 'Discovery & Consultation',
    description: 'We begin by understanding your unique challenges, goals, and requirements through in-depth consultations with key stakeholders.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: [
      'Needs assessment and gap analysis',
      'Stakeholder interviews and workshops',
      'Current system evaluation',
      'Preliminary scope definition'
    ]
  },
  {
    title: 'Solution Design',
    description: 'Our experts design a tailored solution that addresses your specific needs, leveraging our industry expertise and technical knowledge.',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: [
      'Architectural planning',
      'User experience design',
      'Technical specifications',
      'Integration strategy'
    ]
  },
  {
    title: 'Development & Implementation',
    description: 'We build your solution using agile methodologies, ensuring quality, transparency, and regular feedback throughout the process.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: [
      'Iterative development cycles',
      'Regular progress updates',
      'Quality assurance testing',
      'Performance optimization'
    ]
  },
  {
    title: 'Deployment & Training',
    description: 'We ensure a smooth transition to your new solution with comprehensive training and support for your team.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: [
      'Phased deployment strategy',
      'User training programs',
      'Documentation and resources',
      'Go-live support'
    ]
  },
  {
    title: 'Ongoing Support & Evolution',
    description: 'Our relationship continues after deployment with ongoing support, maintenance, and continuous improvement of your solution.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: [
      '24/7 technical support',
      'Regular maintenance and updates',
      'Performance monitoring',
      'Continuous improvement cycles'
    ]
  }
];

const processBenefits = [
  {
    title: 'Faster Delivery',
    description: 'Our agile approach ensures quicker time-to-market and faster realization of benefits.',
    icon: SpeedIcon
  },
  {
    title: 'Higher Quality',
    description: 'Rigorous testing and quality assurance at every stage ensures robust, reliable solutions.',
    icon: QualityIcon
  },
  {
    title: 'Collaborative Approach',
    description: 'We work as an extension of your team, ensuring alignment with your goals.',
    icon: CollaborationIcon
  },
  {
    title: 'Continuous Support',
    description: 'Our relationship extends beyond deployment with ongoing maintenance and improvements.',
    icon: SupportIcon
  }
];
</script>
