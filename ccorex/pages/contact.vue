<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 text-center pt-32 pb-20">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-white">Let's Transform Your</span>
          <br/>
          <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Construction Operations
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
          Schedule a personalized demo and see how CCorex can work for your team.
        </p>
      </div>
    </section>

    <!-- Contact Options -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div v-for="option in contactOptions" :key="option.title" class="p-8 rounded-xl border border-white/10 bg-white/5 text-center">
            <div class="text-4xl mb-4"><i :class="option.icon"></i></div>
            <h3 class="text-xl font-bold text-white mb-3">{{ option.title }}</h3>
            <p class="text-gray-400 mb-4">{{ option.description }}</p>
            <a :href="option.link" class="text-primary-400 font-semibold hover:text-primary-300 transition-colors">
              {{ option.cta }}
            </a>
          </div>
        </div>

        <!-- Demo Request Form -->
        <div class="max-w-4xl mx-auto">
          <div class="p-8 md:p-12 rounded-2xl border border-white/10 bg-white/5">
            <div class="text-center mb-8">
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                Request a Demo
              </h2>
              <p class="text-lg text-gray-300">
                Fill out the form below and our team will reach out within 24 hours.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-semibold text-white mb-2">First Name *</label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-semibold text-white mb-2">Last Name *</label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-sm font-semibold text-white mb-2">Work Email *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-semibold text-white mb-2">Phone Number</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="company" class="block text-sm font-semibold text-white mb-2">Company Name *</label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="ABC Construction"
                  />
                </div>
                <div>
                  <label for="role" class="block text-sm font-semibold text-white mb-2">Your Role *</label>
                  <select
                    id="role"
                    v-model="form.role"
                    required
                    class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="owner">Owner/CEO</option>
                    <option value="director">Director/VP</option>
                    <option value="manager">Project Manager</option>
                    <option value="estimator">Estimator</option>
                    <option value="engineer">Engineer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="companyType" class="block text-sm font-semibold text-white mb-2">Company Type *</label>
                  <select
                    id="companyType"
                    v-model="form.companyType"
                    required
                    class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select type</option>
                    <option value="gc">General Contractor</option>
                    <option value="subcontractor">Subcontractor</option>
                    <option value="developer">Developer</option>
                    <option value="consultant">Consultant</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label for="teamSize" class="block text-sm font-semibold text-white mb-2">Team Size *</label>
                  <select
                    id="teamSize"
                    v-model="form.teamSize"
                    required
                    class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="interestedApps" class="block text-sm font-semibold text-white mb-2">Interested Apps</label>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <label v-for="app in apps" :key="app.value" class="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      :value="app.value"
                      v-model="form.interestedApps"
                      class="w-4 h-4 rounded border-white/10 bg-slate-900 text-primary-500 focus:ring-primary-500"
                    />
                    <span class="text-sm text-gray-300">{{ app.label }}</span>
                  </label>
                </div>
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your needs and challenges..."
                ></textarea>
              </div>

              <div class="flex items-start gap-3">
                <input
                  id="consent"
                  v-model="form.consent"
                  type="checkbox"
                  required
                  class="w-4 h-4 mt-1 rounded border-white/10 bg-slate-900 text-primary-500 focus:ring-primary-500"
                />
                <label for="consent" class="text-sm text-gray-400">
                  I agree to receive communications from CCorex about products and services. I understand I can unsubscribe at any time. *
                </label>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Submitting...' : 'Request Demo' }}
              </button>

              <p class="text-center text-sm text-gray-500">
                By submitting this form, you agree to our <a href="#" class="text-primary-400 hover:underline">Privacy Policy</a> and <a href="#" class="text-primary-400 hover:underline">Terms of Service</a>.
              </p>
            </form>

            <div v-if="submitSuccess" class="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
              <p class="text-green-400 text-center"><i class="fa-solid fa-circle-check"></i> Thank you! We'll be in touch within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Common Questions
          </h2>
        </div>

        <div class="space-y-4">
          <details v-for="faq in faqs" :key="faq.question" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <summary class="text-lg font-semibold text-white cursor-pointer">{{ faq.question }}</summary>
            <p class="mt-4 text-gray-400">{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contactOptions = [
  {
    icon: 'fa-solid fa-comments',
    title: 'Live Chat',
    description: 'Chat with our team in real-time.',
    cta: 'Start Chat',
    link: '#'
  },
  {
    icon: 'fa-solid fa-envelope',
    title: 'Email Us',
    description: 'Send us your questions anytime.',
    cta: 'sales@ccorex.com',
    link: 'mailto:sales@ccorex.com'
  },
  {
    icon: 'fa-solid fa-phone',
    title: 'Call Us',
    description: 'Speak with a product specialist.',
    cta: '+1 (800) 123-4567',
    link: 'tel:+18001234567'
  }
]

const apps = [
  { label: 'DeepPlan AI', value: 'deepplanai' },
  { label: 'DeepCost', value: 'deepcost' },
  { label: 'DeepTrack', value: 'deeptrack' },
  { label: 'DeepHR', value: 'deephr' }
]

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  companyType: '',
  teamSize: '',
  interestedApps: [],
  message: '',
  consent: false
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  console.log('Form submitted:', form.value)
  
  isSubmitting.value = false
  submitSuccess.value = true
  
  // Reset form
  setTimeout(() => {
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      companyType: '',
      teamSize: '',
      interestedApps: [],
      message: '',
      consent: false
    }
    submitSuccess.value = false
  }, 3000)
}

const faqs = [
  {
    question: 'How long does the demo take?',
    answer: 'Our personalized demos typically last 30-45 minutes. We tailor the demo to your specific needs and use cases.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Most customers are up and running in 2-3 weeks. We provide dedicated onboarding support and training.'
  },
  {
    question: 'Can I integrate with my existing tools?',
    answer: 'Absolutely. CCorex integrates with popular accounting, project management, and BIM tools. We also offer a REST API for custom integrations.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 email and chat support, plus dedicated account managers for enterprise customers. Training and onboarding are included.'
  }
]
</script>
