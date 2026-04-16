<template>
  <div class="contact-page">
    <section class="contact-hero-section relative overflow-hidden py-20">
      <!-- Background Elements -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-dark-900"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,93,108,0.15),transparent_50%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(1,172,200,0.1),transparent_30%)]"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-white">Get in </span>
            <span class="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p class="text-gray-300 max-w-2xl mx-auto">
            Have questions about our services or want to discuss your project? We're here to help.
            Reach out to us using any of the methods below.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="glass-panel p-8 rounded-xl">
            <h2 class="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label for="name" class="block text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="formData.name"
                    class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your full name"
                    required
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
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject" class="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="formData.subject"
                  class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="message" class="block text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  v-model="formData.message"
                  rows="5"
                  class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Please provide details about your inquiry"
                  required
                ></textarea>
              </div>
              
              <div class="form-group">
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    v-model="formData.consent"
                    class="rounded bg-dark-700 border-dark-600 text-primary-500 focus:ring-primary-500"
                    required
                  />
                  <span class="ml-2 text-gray-400 text-sm">
                    I consent to Newham processing my data to respond to my inquiry
                  </span>
                </label>
              </div>
              
              <button 
                type="submit" 
                class="w-full py-3 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 flex items-center justify-center"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="mr-2">
                  <i class="fa-solid fa-spinner fa-spin"></i>
                </span>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
              
              <div v-if="formSubmitted" class="text-center p-4 rounded-lg bg-primary-900/50 border border-primary-700 text-white">
                Thank you! Your message has been sent. We'll respond to you shortly.
              </div>

              <div v-if="submitError" class="text-center p-4 rounded-lg bg-red-900/50 border border-red-700 text-red-100">
                {{ submitError }}
              </div>
            </form>
          </div>
          
          <!-- Contact Information -->
          <div>
            <div class="glass-panel p-8 rounded-xl mb-8">
              <h2 class="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="mr-4 p-2 rounded-lg bg-gradient-to-br from-primary-800 to-secondary-800 text-white">
                    <i class="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-1">Singapore Office</h3>
                    <p class="text-gray-400">
                      160 Robinson Rd, #14-04 SBF Center<br>
                      Singapore 0689
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="mr-4 p-2 rounded-lg bg-gradient-to-br from-primary-800 to-secondary-800 text-white">
                    <i class="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-1">Chennai Office</h3>
                    <p class="text-gray-400">
                      3rd Floor, Plot no. 21, Electrical, Electronics & Instruments Industries<br>
                      Perungudi, Sholinganallur, Seevaram, OMR<br>
                      Chennai, Tamil Nadu 600096
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="mr-4 p-2 rounded-lg bg-gradient-to-br from-primary-800 to-secondary-800 text-white">
                    <i class="fa-solid fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-1">Phone</h3>
                    <p class="text-gray-400">
                      Main: +91 9894-378-375<br>
                      Support: +91 9894-378-375
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="mr-4 p-2 rounded-lg bg-gradient-to-br from-primary-800 to-secondary-800 text-white">
                    <i class="fa-solid fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-1">Email</h3>
                    <p class="text-gray-400">
                      General: info@newham.com<br>
                      Support: support@newham.com<br>
                      Sales: sales@newham.com
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="mr-4 p-2 rounded-lg bg-gradient-to-br from-primary-800 to-secondary-800 text-white">
                    <i class="fa-solid fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-1">Business Hours</h3>
                    <p class="text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM<br>
                      Saturday: 10:00 AM - 2:00 PM<br>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Social Media Links -->
            <div class="glass-panel p-8 rounded-xl">
              <h2 class="text-2xl font-bold text-white mb-6">Connect With Us</h2>
              
              <div class="flex space-x-4">
                <a 
                  v-for="(social, index) in socialLinks" 
                  :key="index"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-3 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors duration-300"
                >
                  <i :class="social.icon" class="text-xl text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map Section -->
    <section class="py-16 relative overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Find Us</h2>
        
        <div class="glass-panel p-2 rounded-xl overflow-hidden">
          <!-- Placeholder for Google Maps -->
          <div class="w-full h-96 bg-dark-700 rounded-lg flex items-center justify-center">
            <div class="text-center">
              <i class="fa-solid fa-map-location-dot text-5xl text-gray-500 mx-auto mb-4"></i>
              <p class="text-gray-400">Interactive map will be embedded here</p>
              <p class="text-gray-500 text-sm mt-2">Google Maps API integration required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

useHead({
  title: 'Contact Us'
})

// Social media links
const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'fa-brands fa-facebook-f' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'fa-brands fa-x-twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'fa-brands fa-linkedin-in' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'fa-brands fa-instagram' }
];

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  consent: false
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);
const submitError = ref('');

// Form submission
const submitForm = async () => {
  isSubmitting.value = true;
  submitError.value = '';
  
  try {
    const response = await fetch('https://firefabx.com/webhook/newham-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      formSubmitted.value = true;
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: '',
        consent: false
      };
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        formSubmitted.value = false;
      }, 5000);
    } else {
      submitError.value = 'Failed to send message. Please try again.';
    }
  } catch (error) {
    submitError.value = 'An error occurred. Please try again later.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
