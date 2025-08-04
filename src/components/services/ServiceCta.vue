<template>
  <section class="service-cta-section relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-800"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.15),transparent_50%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
      <div class="glass-panel-dark rounded-2xl overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- CTA Content -->
          <div class="p-8 md:p-12 lg:p-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              <span class="gradient-text">Ready to Transform</span>
              <span class="block text-white mt-2">Your Construction Business?</span>
            </h2>
            
            <p class="text-gray-300 mb-8 text-lg">
              Let's discuss how our technology solutions can help you overcome challenges, improve efficiency, and drive growth in your construction business.
            </p>
            
            <div class="space-y-6 mb-10">
              <div v-for="(benefit, index) in benefits" :key="index" class="flex items-start">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center mr-4">
                  <component :is="benefit.icon" class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-1">{{ benefit.title }}</h4>
                  <p class="text-gray-400">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/contact" class="btn-primary">
                Get Started
              </router-link>
              <a href="#" class="btn-outline flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Schedule a Demo
              </a>
            </div>
          </div>
          
          <!-- CTA Form -->
          <div class="bg-gradient-to-br from-primary-900/50 to-secondary-900/50 p-8 md:p-12 lg:p-16">
            <h3 class="text-2xl font-bold text-white mb-6">Request a Consultation</h3>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    class="w-full px-4 py-2 bg-dark-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label for="company" class="block text-sm font-medium text-gray-300 mb-1">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    v-model="form.company" 
                    class="w-full px-4 py-2 bg-dark-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                    placeholder="Your Company"
                    required
                  />
                </div>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    class="w-full px-4 py-2 bg-dark-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone" 
                    class="w-full px-4 py-2 bg-dark-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              
              <div>
                <label for="service" class="block text-sm font-medium text-gray-300 mb-1">Service Interest</label>
                <select 
                  id="service" 
                  v-model="form.service" 
                  class="w-full px-4 py-2 bg-dark-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                  required
                >
                  <option value="" disabled selected>Select a service</option>
                  <option v-for="(service, index) in services" :key="index" :value="service">
                    {{ service }}
                  </option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Project Details</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="4" 
                  class="w-full px-4 py-2 bg-dark-800/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                  placeholder="Tell us about your project or requirements..."
                  required
                ></textarea>
              </div>
              
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input 
                    id="privacy" 
                    type="checkbox" 
                    v-model="form.privacy" 
                    class="w-4 h-4 bg-dark-800 border-gray-700 rounded focus:ring-primary-500 focus:ring-2"
                    required
                  />
                </div>
                <label for="privacy" class="ml-2 text-sm text-gray-400">
                  I agree to the <a href="#" class="text-primary-400 hover:text-primary-300">Privacy Policy</a> and consent to being contacted about my inquiry.
                </label>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  class="w-full py-3 px-6 text-white font-medium rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900 transition-all duration-300 flex items-center justify-center"
                  :disabled="isSubmitting"
                >
                  <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isSubmitting ? 'Submitting...' : 'Submit Request' }}
                </button>
              </div>
              
              <div v-if="formSubmitted" class="p-4 rounded-lg bg-green-900/50 border border-green-700">
                <p class="text-green-400 text-center">
                  Thank you for your interest! We'll be in touch with you shortly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue';

// SVG Icons as render functions
const EfficiencyIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>'
});

const InsightIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>'
});

const CollaborationIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>'
});

const benefits = [
  {
    title: 'Increased Efficiency',
    description: 'Streamline operations and reduce manual work with automated workflows and digital tools.',
    icon: EfficiencyIcon
  },
  {
    title: 'Data-Driven Insights',
    description: 'Make informed decisions with real-time analytics and comprehensive reporting.',
    icon: InsightIcon
  },
  {
    title: 'Enhanced Collaboration',
    description: 'Improve communication and coordination across teams, sites, and stakeholders.',
    icon: CollaborationIcon
  }
];

const services = [
  'Custom Software Development',
  'Mobile App Development',
  'BIM Integration Solutions',
  'Project Management Systems',
  'Field Data Collection Tools',
  'IoT & Sensor Integration',
  'Data Analytics & Reporting',
  'System Integration Services',
  'Cloud Migration & Hosting',
  'Other/Not Sure Yet'
];

const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  privacy: false
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false;
    formSubmitted.value = true;
    
    // Reset form after submission
    form.value = {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      privacy: false
    };
    
    // Hide success message after a few seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  }, 1500);
};
</script>
