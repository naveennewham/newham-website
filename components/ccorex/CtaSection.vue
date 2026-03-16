<template>
  <section id="cta" class="relative w-full py-20 md:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Heading -->
      <div class="text-center mb-12">
        <div class="flex justify-center mb-6">
          <img src="~/assets/ccorex/Corex_logo.png" alt="CCorex" class="h-10 md:h-12 w-auto brightness-0 invert opacity-80" />
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Ready to Transform Your
          <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            Project Management?
          </span>
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Join construction leaders who are already using CCorex to streamline their workflows and boost profitability.
        </p>
      </div>

      <!-- CTA Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Demo Card -->
        <div
          class="group relative p-10 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 glass-panel hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
          @click="isDemoFormOpen = true"
        >
          <div class="flex items-start gap-4">
            <div class="text-4xl">📅</div>
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">Schedule a Demo</h3>
              <p class="text-gray-400 mb-4">See CCorex in action with our team</p>
              <p class="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                Request Demo →
              </p>
            </div>
          </div>
        </div>

        <!-- Pricing Card -->
        <NuxtLink
          to="/pricing"
          class="group relative p-10 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 glass-panel hover:shadow-lg hover:shadow-cyan-500/20"
        >
          <div class="flex items-start gap-4">
            <div class="text-4xl">💳</div>
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">View Pricing</h3>
              <p class="text-gray-400 mb-4">Transparent pricing for all team sizes</p>
              <p class="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                See Plans →
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Contact Form or Quick Contact -->
      <div
        v-if="isDemoFormOpen"
        class="mb-16 p-10 rounded-2xl border border-cyan-500/30 glass-panel"
      >
        <h3 class="text-2xl font-bold text-white mb-6">Schedule Your Demo</h3>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
              <input
                v-model="form.name"
                type="text"
                class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-cyan-500/20 focus:border-cyan-500 text-white placeholder-gray-500 transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-300 mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-cyan-500/20 focus:border-cyan-500 text-white placeholder-gray-500 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-300 mb-2">Company</label>
              <input
                v-model="form.company"
                type="text"
                class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-cyan-500/20 focus:border-cyan-500 text-white placeholder-gray-500 transition-colors"
                placeholder="Your company"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-300 mb-2">Industry</label>
              <select
                v-model="form.industry"
                class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-cyan-500/20 focus:border-cyan-500 text-white transition-colors"
              >
                <option value="">Select industry</option>
                <option value="mep">MEP Contracting</option>
                <option value="general">General Contracting</option>
                <option value="subcontractor">Subcontracting</option>
                <option value="developer">Developer</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-300 mb-2">Message (Optional)</label>
            <textarea
              v-model="form.message"
              rows="3"
              class="w-full px-4 py-3 rounded-lg bg-slate-900 border border-cyan-500/20 focus:border-cyan-500 text-white placeholder-gray-500 transition-colors"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <div class="flex gap-4">
            <button
              type="submit"
              class="flex-1 px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
            </button>
            <button
              type="button"
              @click="isDemoFormOpen = false"
              class="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
            >
              Cancel
            </button>
          </div>

          <p class="text-xs text-gray-500 text-center">
            We'll contact you within 24 hours to schedule your personalized demo
          </p>
        </form>
      </div>

      <!-- Trust Badges -->
      <div class="text-center pt-12 border-t border-cyan-500/20">
        <p class="text-gray-400 mb-6">Trusted by leading construction companies worldwide</p>
        <div class="flex flex-wrap justify-center gap-8 items-center">
          <div class="text-center">
            <div class="text-3xl font-bold text-cyan-400">2000+</div>
            <p class="text-sm text-gray-400">Active Projects</p>
          </div>
          <div class="w-px h-12 bg-cyan-500/20"></div>
          <div class="text-center">
            <div class="text-3xl font-bold text-cyan-400">$5B+</div>
            <p class="text-sm text-gray-400">Managed Budgets</p>
          </div>
          <div class="w-px h-12 bg-cyan-500/20"></div>
          <div class="text-center">
            <div class="text-3xl font-bold text-cyan-400">50+</div>
            <p class="text-sm text-gray-400">Countries</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isDemoFormOpen = ref(false)

const form = ref({
  name: '',
  email: '',
  company: '',
  industry: '',
  message: ''
})

const submitForm = async () => {
  // In production, this would send to a backend API
  console.log('Form submitted:', form.value)

  // Show success message
  alert('Thank you! We\'ll contact you soon to schedule your demo.')

  // Reset form and close
  form.value = {
    name: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  }
  isDemoFormOpen.value = false
}
</script>

<style scoped>
.glass-panel {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
}
</style>
