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
                  <component :is="LoadingIcon" class="w-5 h-5 animate-spin" />
                </span>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
              
              <div v-if="formSubmitted" class="text-center p-4 rounded-lg bg-primary-900/50 border border-primary-700 text-white">
                Thank you! Your message has been sent. We'll respond to you shortly.
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
                    <component :is="LocationIcon" class="w-6 h-6" />
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-1">Office Address</h3>
                    <p class="text-gray-400">
                      123 Tech Plaza, Suite 500<br>
                      Silicon Valley, CA 94103<br>
                      United States
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="mr-4 p-2 rounded-lg bg-gradient-to-br from-primary-800 to-secondary-800 text-white">
                    <component :is="PhoneIcon" class="w-6 h-6" />
                  </div>
                  <div>
                    <h3 class="text-white font-semibold mb-1">Phone</h3>
                    <p class="text-gray-400">
                      Main: +1 (555) 123-4567<br>
                      Support: +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="mr-4 p-2 rounded-lg bg-gradient-to-br from-primary-800 to-secondary-800 text-white">
                    <component :is="EmailIcon" class="w-6 h-6" />
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
                    <component :is="ClockIcon" class="w-6 h-6" />
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
                  <component :is="social.icon" class="w-6 h-6 text-white" />
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
              <component :is="MapIcon" class="w-16 h-16 text-gray-500 mx-auto mb-4" />
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
import { h, ref } from 'vue';

// SVG Icons as render functions
const LoadingIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>'
});

const LocationIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>'
});

const PhoneIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>'
});

const EmailIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>'
});

const ClockIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
});

const MapIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>'
});

// Social media icons
const FacebookIcon = (props) => h('svg', {
  ...props,
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>'
});

const TwitterIcon = (props) => h('svg', {
  ...props,
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path d="M23.32,6.44a.5.5,0,0,0-.2-.87l-.79-.19A.49.49,0,0,1,22,4.89L21.74,4a.5.5,0,0,0-.58-.35l-1.54.62a.5.5,0,0,1-.52-.07A4.73,4.73,0,0,0,16.05,3a4.67,4.67,0,0,0-4.68,4.67v.44a.5.5,0,0,1-.45.5C6.63,9.29,4.07,6.92,4.07,6.92a.5.5,0,0,0-.85.36A8,8,0,0,0,8.89,14.5a.51.51,0,0,1,.19.47l-.25,1a.5.5,0,0,0,.72.53l1.41-.74a.5.5,0,0,1,.5,0A7.34,7.34,0,0,0,15.33,17,7.39,7.39,0,0,0,22.7,8.44Z"/>'
});

const LinkedInIcon = (props) => h('svg', {
  ...props,
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/>'
});

const InstagramIcon = (props) => h('svg', {
  ...props,
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.59-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12S0,15.67.07,17c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>'
});

// Social media links
const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: FacebookIcon },
  { name: 'Twitter', url: 'https://twitter.com', icon: TwitterIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedInIcon },
  { name: 'Instagram', url: 'https://instagram.com', icon: InstagramIcon }
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

// Form submission
const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    formSubmitted.value = true;
    
    // Reset form
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
  }, 1500);
};
</script>
