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
                    <i :class="benefit.icon" style="font-size: 1.25rem;"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-1">{{ benefit.title }}</h3>
                    <p class="text-gray-400 text-sm">{{ benefit.description }}</p>
                  </div>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-4" v-scroll-animation="'fade-up'">
                <NuxtLink to="/contact" class="btn-primary">
                  Schedule a Consultation
                </NuxtLink>
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
                  <i class="fa-solid fa-arrows-rotate animate-spin"></i>
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
import { ref } from 'vue';
import { staggeredDelay } from '../../utils/transitions';

// Benefits data
const benefits = [
  {
    title: 'Increased Productivity',
    description: 'Our solutions streamline workflows and automate routine tasks, boosting productivity by up to 35%.',
    icon: 'fa-solid fa-chart-line'
  },
  {
    title: 'Faster Time to Market',
    description: 'Reduce project timelines by 20-30% with our integrated planning and execution tools.',
    icon: 'fa-solid fa-clock'
  },
  {
    title: 'Enhanced Compliance',
    description: 'Built-in regulatory compliance features ensure your projects meet all industry standards.',
    icon: 'fa-solid fa-shield-halved'
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
