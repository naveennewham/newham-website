<template>
  <section class="cta-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-dark-900 to-secondary-900/90"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,120,255,0.2),transparent_40%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="glass-panel p-8 md:p-12 rounded-2xl shadow-glass-lg relative overflow-hidden">
        <!-- Static Background -->
        <div class="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-400-rgb),0.2),transparent_70%)] opacity-30"></div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- CTA Content -->
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              <span class="gradient-text">Ready to Transform</span>
              <span class="block text-white mt-2">Your Construction Business?</span>
            </h2>
            
            <p class="text-gray-300 text-lg mb-8">
              Let's discuss how our innovative technology solutions can address your specific challenges and drive your business forward.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/contact" class="btn-primary">
                Schedule a Consultation
              </router-link>
              <a href="#" class="btn-outline flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Watch Demo
              </a>
            </div>
            
            <!-- Benefits List -->
            <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="(benefit, index) in benefits" :key="index" class="flex items-center relative overflow-hidden p-1 rounded-md">
                <svg class="w-5 h-5 text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">{{ benefit }}</span>
              </div>
            </div>
          </div>
          
          <!-- CTA Form -->
          <div class="glass-panel-light p-6 rounded-xl relative overflow-hidden">
            <!-- Static Background -->
            <div class="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-secondary-400-rgb),0.2),transparent_70%)] opacity-30"></div>
            <h3 class="text-xl font-semibold text-white mb-6">Get a Free Consultation</h3>
            
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label for="name" class="block text-gray-300 text-sm mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  class="w-full px-4 py-2 rounded-lg bg-dark-700/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="John Smith"
                  required
                />
              </div>
              
              <div>
                <label for="email" class="block text-gray-300 text-sm mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  class="w-full px-4 py-2 rounded-lg bg-dark-700/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label for="company" class="block text-gray-300 text-sm mb-1">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  v-model="form.company" 
                  class="w-full px-4 py-2 rounded-lg bg-dark-700/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label for="interest" class="block text-gray-300 text-sm mb-1">I'm interested in</label>
                <select 
                  id="interest" 
                  v-model="form.interest" 
                  class="w-full px-4 py-2 rounded-lg bg-dark-700/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="(option, index) in interestOptions" :key="index" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>
              
              <button 
                type="submit" 
                class="w-full btn-primary flex items-center justify-center relative overflow-hidden"
                :disabled="isSubmitting"
              >
                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isSubmitting ? 'Submitting...' : 'Request Consultation' }}
              </button>
              
              <p class="text-xs text-gray-400 text-center mt-4">
                By submitting this form, you agree to our 
                <a href="#" class="text-primary-400 hover:underline">Privacy Policy</a> 
                and <a href="#" class="text-primary-400 hover:underline">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  company: '',
  interest: ''
});

const isSubmitting = ref(false);

const interestOptions = [
  'Construction Project Management',
  'Field Apps & Mobile Solutions',
  'Compliance & Reporting Tools',
  'Custom Software Development',
  'Legacy System Modernization',
  'Cloud Infrastructure & DevOps',
  'Other'
];

const benefits = [
  'Free initial consultation',
  'Tailored solutions',
  'Ongoing support',
  'Flexible pricing',
  'Rapid implementation',
  'Seamless integration'
];

const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    // In a real app, you would send the form data to your backend
    console.log('Form submitted:', form.value);
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      company: '',
      interest: ''
    };
    
    isSubmitting.value = false;
    
    // Show success message (in a real app)
    alert('Thank you for your interest! We will contact you shortly.');
  }, 1500);
};
</script>
