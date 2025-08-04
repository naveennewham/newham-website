<template>
  <section id="services-list" class="services-list-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-800"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_30%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Comprehensive Solutions</span>
          <span class="block text-white mt-2">For Every Construction Challenge</span>
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto">
          Our suite of services is designed to address the unique technological needs of construction companies of all sizes.
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index" 
             class="service-card group">
          <!-- Service Card -->
          <div class="glass-panel h-full rounded-xl overflow-hidden transform transition-all duration-500 group-hover:shadow-glass-lg">
            <!-- Service Image -->
            <div class="relative h-48 overflow-hidden">
              <img 
                :src="service.image" 
                :alt="service.title" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-transparent opacity-60"></div>
              
              <!-- Icon -->
              <div class="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <component :is="service.icon" class="w-6 h-6 text-white" />
              </div>
            </div>
            
            <!-- Service Content -->
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">{{ service.title }}</h3>
              <p class="text-gray-400 mb-4">{{ service.description }}</p>
              
              <!-- Features List -->
              <ul class="space-y-2 mb-6">
                <li v-for="(feature, featureIndex) in service.features" :key="featureIndex" class="flex items-start">
                  <svg class="w-5 h-5 text-primary-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300 text-sm">{{ feature }}</span>
                </li>
              </ul>
              
              <!-- Learn More Link -->
              <a href="#" class="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors">
                Learn More
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Custom Solutions -->
      <div class="mt-20">
        <div class="glass-panel p-8 md:p-12 rounded-xl bg-gradient-to-br from-primary-900/30 to-secondary-900/30">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
              <p class="text-gray-300 mb-6">
                We understand that every construction business has unique challenges. Our team of experts can develop tailored solutions to address your specific needs.
              </p>
              <ul class="space-y-3 mb-8">
                <li v-for="(point, index) in customSolutionPoints" :key="index" class="flex items-start">
                  <svg class="w-5 h-5 text-primary-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">{{ point }}</span>
                </li>
              </ul>
              <router-link to="/contact" class="btn-primary inline-flex items-center">
                Discuss Your Project
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </router-link>
            </div>
            <div class="relative">
              <div class="glass-panel p-2 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Custom Solutions" 
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

const FieldAppIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>'
});

const ComplianceIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>'
});

const BimIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>'
});

const CloudIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>'
});

const AnalyticsIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>'
});

const services = [
  {
    title: 'Construction Project Management',
    description: 'Streamline your project workflows with our comprehensive management platform.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    icon: ProjectManagementIcon,
    features: [
      'Real-time project tracking and reporting',
      'Resource allocation and scheduling',
      'Document management and version control',
      'Budget tracking and financial forecasting'
    ]
  },
  {
    title: 'Field Applications',
    description: 'Empower your on-site teams with mobile solutions for real-time data collection.',
    image: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    icon: FieldAppIcon,
    features: [
      'Digital inspections and checklists',
      'Photo documentation with annotations',
      'Issue tracking and resolution',
      'Offline functionality for remote sites'
    ]
  },
  {
    title: 'Compliance & Safety Solutions',
    description: 'Ensure regulatory compliance and maintain safety standards across all projects.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    icon: ComplianceIcon,
    features: [
      'Automated compliance reporting',
      'Safety incident management',
      'Certification tracking',
      'Regulatory updates and notifications'
    ]
  },
  {
    title: 'BIM Integration Services',
    description: 'Seamlessly integrate Building Information Modeling into your workflows.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    icon: BimIcon,
    features: [
      '3D model visualization and collaboration',
      'Clash detection and resolution',
      'Quantity takeoffs and estimating',
      'As-built documentation'
    ]
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions tailored for construction data management needs.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    icon: CloudIcon,
    features: [
      'Secure data storage and backup',
      'Scalable computing resources',
      'Disaster recovery solutions',
      'Multi-site access and collaboration'
    ]
  },
  {
    title: 'Analytics & Reporting',
    description: 'Transform your data into actionable insights with advanced analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    icon: AnalyticsIcon,
    features: [
      'Custom dashboards and KPI tracking',
      'Predictive analytics for project outcomes',
      'Performance benchmarking',
      'Automated report generation'
    ]
  }
];

const customSolutionPoints = [
  'Tailored to your specific business processes',
  'Seamless integration with existing systems',
  'Scalable to grow with your business',
  'Ongoing support and maintenance',
  'Regular updates and enhancements'
];
</script>
