<template>
  <section class="py-20 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,93,108,0.2),transparent_70%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="glass-panel rounded-2xl overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- Left: CTA Content -->
          <div class="p-8 md:p-12 lg:p-16 relative overflow-hidden" v-scroll-animation="'fade-right'">
            <!-- Decorative Elements -->
            <div class="absolute top-0 left-0 w-40 h-40 bg-primary-800/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div class="absolute bottom-0 right-0 w-60 h-60 bg-secondary-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            
            <div class="relative z-10">
              <h2 class="text-3xl md:text-4xl font-bold mb-6" v-scroll-animation="'fade-up'">
                <span class="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  Ready to Transform Your Industry?
                </span>
              </h2>
              
              <p class="text-gray-300 mb-8 max-w-lg" v-scroll-animation="'fade-up'">
                Our industry-specific technology solutions are designed to address your unique challenges and help you stay ahead of the competition.
              </p>
              
              <div class="space-y-6 mb-8" v-scroll-animation="'fade-up'">
                <div v-for="(benefit, index) in benefits" :key="index" class="flex items-start" :style="staggeredDelay(200, 150, index)">
                  <div class="mr-4 p-2 rounded-lg bg-gradient-to-br from-primary-800 to-secondary-800 text-white">
                    <component :is="benefit.icon" class="w-6 h-6" />
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-1">{{ benefit.title }}</h3>
                    <p class="text-gray-400 text-sm">{{ benefit.description }}</p>
                  </div>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-4" v-scroll-animation="'fade-up'">
                <router-link to="/contact" class="btn-primary">
                  Schedule a Consultation
                </router-link>
                <a href="#" class="btn-outline">
                  Download Industry Guide
                </a>
              </div>
            </div>
          </div>
          
          <!-- Right: Industry Selection Form -->
          <div class="bg-dark-800/50 backdrop-blur-sm p-8 md:p-12 lg:p-16 border-l border-dark-700">
            <h3 class="text-2xl font-bold text-white mb-6">Find Your Industry Solution</h3>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="form-group">
                <label for="industry" class="block text-gray-300 mb-2">Select Your Industry</label>
                <select 
                  id="industry" 
                  v-model="formData.industry"
                  class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="" disabled>Select an industry</option>
                  <option v-for="(industry, index) in industries" :key="index" :value="industry">
                    {{ industry }}
                  </option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="name" class="block text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name"
                  class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div class="form-group">
                <label for="email" class="block text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email"
                  class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div class="form-group">
                <label for="company" class="block text-gray-300 mb-2">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  v-model="formData.company"
                  class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div class="form-group">
                <label for="message" class="block text-gray-300 mb-2">Specific Requirements</label>
                <textarea 
                  id="message" 
                  v-model="formData.message"
                  rows="3"
                  class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tell us about your specific needs"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="w-full py-3 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 flex items-center justify-center"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="mr-2">
                  <component :is="LoadingIcon" class="w-5 h-5 animate-spin" />
                </span>
                {{ isSubmitting ? 'Submitting...' : 'Get Industry Solution Guide' }}
              </button>
              
              <div v-if="formSubmitted" class="text-center p-4 rounded-lg bg-primary-900/50 border border-primary-700 text-white">
                Thank you! Your industry guide request has been submitted. We'll be in touch shortly.
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
import { staggeredDelay } from '../../utils/transitions';

// SVG Icons as render functions
const ChartIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>'
});

const ClockIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
});

const ShieldIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>'
});

const LoadingIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>'
});

// Benefits data
const benefits = [
  {
    title: 'Increased Productivity',
    description: 'Our solutions streamline workflows and automate routine tasks, boosting productivity by up to 35%.',
    icon: ChartIcon
  },
  {
    title: 'Faster Time to Market',
    description: 'Reduce project timelines by 20-30% with our integrated planning and execution tools.',
    icon: ClockIcon
  },
  {
    title: 'Enhanced Compliance',
    description: 'Built-in regulatory compliance features ensure your projects meet all industry standards.',
    icon: ShieldIcon
  }
];

// Industry options
const industries = [
  'Commercial Construction',
  'Residential Development',
  'Infrastructure',
  'Industrial Facilities',
  'Healthcare Construction',
  'Retail Development',
  'Education Facilities',
  'Hospitality Projects',
  'Other'
];

// Form data
const formData = ref({
  industry: '',
  name: '',
  email: '',
  company: '',
  message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

// Form submission
const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    formSubmitted.value = true;
    
    // Reset form
    formData.value = {
      industry: '',
      name: '',
      email: '',
      company: '',
      message: ''
    };
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  }, 1500);
};
</script>
