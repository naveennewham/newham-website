<template>
  <div class="min-h-screen bg-slate-900">
    <!-- Meta Tags -->
    <Head>
      <Title>CCorex - Unified Construction Management Platform</Title>
      <Meta
        name="description"
        content="CCorex: Unified construction management platform integrating DeepCost, DeepTrack, DeepHR, and DeepPlanAI. Streamline costs, budgets, scheduling, and workforce management."
      />
    </Head>

    <!-- Hero Section -->
    <CCorexHero />

    <!-- Suite Strip: quick summary of apps -->
    <SuiteStrip />

    <section id="overview" class="relative w-full py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div class="md:col-span-2">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">One suite for your entire construction lifecycle</h2>
          <p class="text-gray-300 text-lg mb-6">CCorex unifies takeoffs, estimating, budgeting, and workforce into a connected system. Data flows seamlessly across <span class="text-cyan-400 font-semibold">DeepPlanAI</span>, <span class="text-cyan-400 font-semibold">DeepCost</span>, <span class="text-cyan-400 font-semibold">DeepTrack</span>, and <span class="text-cyan-400 font-semibold">DeepHR</span>.</p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/appointment" class="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all">Request a demo</NuxtLink>
            <NuxtLink to="/pricing" class="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-slate-900 transition-all">View pricing</NuxtLink>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="p-4 rounded-xl border border-cyan-500/20 bg-slate-900/50 text-center">
            <div class="text-3xl font-bold text-cyan-400 mb-1">95%+</div>
            <div class="text-gray-400 text-sm">Estimate accuracy</div>
          </div>
          <div class="p-4 rounded-xl border border-cyan-500/20 bg-slate-900/50 text-center">
            <div class="text-3xl font-bold text-cyan-400 mb-1">40%</div>
            <div class="text-gray-400 text-sm">Faster takeoffs</div>
          </div>
          <div class="p-4 rounded-xl border border-cyan-500/20 bg-slate-900/50 text-center">
            <div class="text-3xl font-bold text-cyan-400 mb-1">100%</div>
            <div class="text-gray-400 text-sm">Data sync</div>
          </div>
          <div class="p-4 rounded-xl border border-cyan-500/20 bg-slate-900/50 text-center">
            <div class="text-3xl font-bold text-cyan-400 mb-1">2-3 wks</div>
            <div class="text-gray-400 text-sm">Implementation</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Apps Showcase -->
    <div id="apps">
      <AppsShowcase />
    </div>

    <!-- Integration Flow -->
    <div id="integration">
      <IntegrationFlow />
    </div>

    <!-- Alternating Benefits matching suite narrative -->
    <BenefitsAlternating />

    <!-- Unified Platform Benefits -->
    <div id="benefits">
      <UnifiedPlatformBenefits />
    </div>

    <!-- ROI Metrics -->
    <RoiMetrics />

    <!-- CTA Section -->
    <CtaSection />

    <!-- Comparison Section -->
    <section class="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              CCorex vs Individual Tools
            </span>
          </h2>
        </div>

        <!-- Comparison Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-center">
            <thead>
              <tr class="border-b border-cyan-500/20">
                <th class="py-4 px-4 text-left text-gray-400 font-semibold">Feature</th>
                <th class="py-4 px-4 text-cyan-400 font-bold">Individual Tools</th>
                <th class="py-4 px-4 text-cyan-400 font-bold">CCorex Suite</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-cyan-500/10 hover:bg-cyan-500/5">
                <td class="py-4 px-4 text-left text-gray-300">Data Integration</td>
                <td class="py-4 px-4">Manual Integration</td>
                <td class="py-4 px-4 text-cyan-400 font-semibold"><i class="fa-solid fa-check"></i> Seamless</td>
              </tr>
              <tr class="border-b border-cyan-500/10 hover:bg-cyan-500/5">
                <td class="py-4 px-4 text-left text-gray-300">Real-Time Sync</td>
                <td class="py-4 px-4"><i class="fa-solid fa-xmark"></i> Not Available</td>
                <td class="py-4 px-4 text-cyan-400 font-semibold"><i class="fa-solid fa-check"></i> Full Sync</td>
              </tr>
              <tr class="border-b border-cyan-500/10 hover:bg-cyan-500/5">
                <td class="py-4 px-4 text-left text-gray-300">Single Dashboard</td>
                <td class="py-4 px-4"><i class="fa-solid fa-xmark"></i> Multiple Systems</td>
                <td class="py-4 px-4 text-cyan-400 font-semibold"><i class="fa-solid fa-check"></i> Unified</td>
              </tr>
              <tr class="border-b border-cyan-500/10 hover:bg-cyan-500/5">
                <td class="py-4 px-4 text-left text-gray-300">Authentication</td>
                <td class="py-4 px-4">Separate Logins</td>
                <td class="py-4 px-4 text-cyan-400 font-semibold"><i class="fa-solid fa-check"></i> Single Sign-On</td>
              </tr>
              <tr class="border-b border-cyan-500/10 hover:bg-cyan-500/5">
                <td class="py-4 px-4 text-left text-gray-300">Support & Training</td>
                <td class="py-4 px-4">Fragmented</td>
                <td class="py-4 px-4 text-cyan-400 font-semibold"><i class="fa-solid fa-check"></i> Unified Support</td>
              </tr>
              <tr class="hover:bg-cyan-500/5">
                <td class="py-4 px-4 text-left text-gray-300">Implementation Time</td>
                <td class="py-4 px-4">4-8 weeks per tool</td>
                <td class="py-4 px-4 text-cyan-400 font-semibold"><i class="fa-solid fa-check"></i> 2-3 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Pricing Preview -->
    <PricingPreview />

    <!-- FAQ Section -->
    <section id="faq" class="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span class="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all cursor-pointer glass-panel"
            @click="toggleFaq(index)"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-bold text-white">{{ faq.question }}</h3>
              <span
                class="text-cyan-400 text-2xl transform transition-transform"
                :style="{ transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }"
              >
                <i class="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <p v-if="activeFaq === index" class="mt-4 text-gray-400">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="relative w-full py-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Transform Your Construction Operations Today
        </h2>
        <p class="text-xl text-gray-300 mb-8">
          Join hundreds of construction firms already using CCorex
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cta"
            class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </a>
          <NuxtLink
            to="/contact"
            class="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
          >
            Contact Sales
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CCorexHero from '~/components/ccorex/CCorexHero.vue'
import AppsShowcase from '~/components/ccorex/AppsShowcase.vue'
import UnifiedPlatformBenefits from '~/components/ccorex/UnifiedPlatformBenefits.vue'
import RoiMetrics from '~/components/ccorex/RoiMetrics.vue'
import IntegrationFlow from '~/components/ccorex/IntegrationFlow.vue'
import CtaSection from '~/components/ccorex/CtaSection.vue'
import SuiteStrip from '~/components/ccorex/SuiteStrip.vue'
import BenefitsAlternating from '~/components/ccorex/BenefitsAlternating.vue'
import PricingPreview from '~/components/ccorex/PricingPreview.vue'

useHead({
  title: 'CCorex - Unified Construction Management Platform'
})

const activeFaq = ref(null)

const faqs = ref([
  {
    question: 'What is CCorex?',
    answer: 'CCorex is a unified construction management platform that combines four powerful tools: DeepCost (AI cost estimation), DeepTrack (budget & PO management), DeepHR (workforce management), and DeepPlanAI (digital takeoffs). These tools work together seamlessly to manage your entire project lifecycle.'
  },
  {
    question: 'Can I use individual apps from CCorex?',
    answer: 'Yes! Each app can be used independently, but you unlock the full potential of CCorex when you use them together. The integrated approach eliminates manual data entry and ensures your entire team has real-time access to accurate information.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'CCorex implementations typically take 2-3 weeks from start to full deployment. Our dedicated implementation team will work with you to ensure a smooth transition and provide comprehensive training for your entire team.'
  },
  {
    question: 'What integrations are available?',
    answer: 'CCorex integrates with leading construction software including project management tools, accounting software, and payment platforms. Our API allows for custom integrations to match your specific workflow requirements.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. CCorex uses enterprise-grade security with 256-bit encryption, regular security audits, and compliance with industry standards including ISO 27001, GDPR, and SOC 2 Type II certification.'
  },
  {
    question: 'What kind of support is available?',
    answer: 'We offer 24/7 customer support via phone, email, and chat. Premium plans include dedicated account managers, regular training sessions, and priority support for any issues.'
  }
])

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>

<style scoped>
.glass-panel {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
}
</style>
