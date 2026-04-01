<template>
  <div>
    <!-- Hero Section -->
    <section class="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 text-center pt-32 pb-20">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-white">Simple, Transparent</span>
          <br/>
          <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Pricing
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
          Choose the plan that fits your team. All plans include 24/7 support and free updates.
        </p>
        
        <!-- Billing Toggle -->
        <div class="flex items-center justify-center gap-4 mb-4">
          <span :class="billingCycle === 'monthly' ? 'text-white font-semibold' : 'text-gray-400'">Monthly</span>
          <button 
            @click="billingCycle = billingCycle === 'monthly' ? 'annual' : 'monthly'"
            class="relative w-14 h-7 rounded-full bg-slate-700 transition-colors"
            :class="billingCycle === 'annual' ? 'bg-primary-500' : ''"
          >
            <span class="absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform"
              :class="billingCycle === 'annual' ? 'translate-x-7' : ''"
            ></span>
          </button>
          <span :class="billingCycle === 'annual' ? 'text-white font-semibold' : 'text-gray-400'">
            Annual
            <span class="ml-2 px-2 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold">Save 20%</span>
          </span>
        </div>
      </div>
    </section>

    <!-- Pricing Tiers -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="plan in pricingPlans" :key="plan.name" 
            class="relative p-8 rounded-2xl border transition-all"
            :class="plan.popular ? 'border-primary-500 bg-primary-500/5 shadow-xl shadow-primary-500/10 scale-105' : 'border-white/10 bg-white/5'"
          >
            <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-500 text-slate-900 text-sm font-bold">
              Most Popular
            </div>

            <h3 class="text-2xl font-bold text-white mb-2">{{ plan.name }}</h3>
            <p class="text-gray-400 mb-6">{{ plan.description }}</p>

            <div class="mb-6">
              <div class="flex items-baseline gap-2">
                <span class="text-5xl font-bold text-white">
                  {{ billingCycle === 'monthly' ? plan.priceMonthly : plan.priceAnnual }}
                </span>
                <span class="text-gray-400">/month</span>
              </div>
              <p class="text-sm text-gray-500 mt-2">{{ plan.billing }}</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3 text-gray-300">
                <span class="text-primary-400 text-xl mt-0.5">✓</span>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <a :href="plan.cta.link" 
              class="block text-center px-6 py-4 rounded-lg font-bold transition-all"
              :class="plan.popular 
                ? 'bg-primary-500 text-slate-900 hover:bg-primary-400' 
                : 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-slate-900'"
            >
              {{ plan.cta.text }}
            </a>
          </div>
        </div>

        <p class="text-center text-gray-400 mt-12">
          All plans include free onboarding, training, and 24/7 support. No setup fees.
        </p>
      </div>
    </section>

    <!-- Feature Comparison -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Compare Plans
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            See what's included in each plan.
          </p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full min-w-[800px]">
            <thead>
              <tr class="border-b border-white/10">
                <th class="text-left py-4 px-6 text-white font-semibold">Feature</th>
                <th v-for="plan in pricingPlans" :key="plan.name" class="text-center py-4 px-6">
                  <div class="text-white font-semibold">{{ plan.name }}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(category, catIndex) in featureComparison" :key="catIndex">
                <tr>
                  <td colspan="4" class="py-4 px-6 bg-white/5">
                    <h3 class="text-lg font-bold text-white">{{ category.category }}</h3>
                  </td>
                </tr>
                <tr v-for="feature in category.features" :key="feature.name" class="border-b border-white/10 hover:bg-white/5">
                  <td class="py-4 px-6 text-gray-300">{{ feature.name }}</td>
                  <td v-for="plan in pricingPlans" :key="plan.name" class="text-center py-4 px-6">
                    <span v-if="feature.availability[plan.key] === true" class="text-primary-400 text-2xl">✓</span>
                    <span v-else-if="feature.availability[plan.key]" class="text-gray-400 text-sm">{{ feature.availability[plan.key] }}</span>
                    <span v-else class="text-gray-600 text-2xl">—</span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Add-ons -->
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Optional Add-ons
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Enhance your plan with additional features and services.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="addon in addons" :key="addon.name" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <div class="text-3xl mb-4">{{ addon.icon }}</div>
            <h3 class="text-xl font-bold text-white mb-2">{{ addon.name }}</h3>
            <p class="text-gray-400 mb-4">{{ addon.description }}</p>
            <div class="text-2xl font-bold text-primary-400 mb-4">{{ addon.price }}</div>
            <a href="/contact" class="inline-flex items-center gap-2 text-primary-400 font-semibold hover:gap-3 transition-all">
              Add to Plan
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 bg-slate-800">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pricing FAQs
          </h2>
        </div>

        <div class="space-y-4">
          <details v-for="faq in pricingFaqs" :key="faq.question" class="p-6 rounded-xl border border-white/10 bg-white/5">
            <summary class="text-lg font-semibold text-white cursor-pointer">{{ faq.question }}</summary>
            <p class="mt-4 text-gray-400">{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-gray-300 mb-10">
          Start your 14-day free trial. No credit card required.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 rounded-lg bg-primary-500 text-slate-900 font-bold hover:bg-primary-400 transition-all">
            Start Free Trial
          </a>
          <a href="/contact" class="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-400 font-bold hover:bg-primary-500 hover:text-slate-900 transition-all">
            Schedule Demo
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const billingCycle = ref<'monthly' | 'annual'>('monthly')

const pricingPlans = [
  {
    name: 'Starter',
    key: 'starter',
    description: 'Perfect for small teams getting started',
    priceMonthly: '$299',
    priceAnnual: '$239',
    billing: 'per month, billed monthly',
    features: [
      '5 users included',
      '10 active projects',
      'DeepCost + DeepTrack',
      'Email support',
      '10GB storage',
      'Mobile apps',
      'Basic reporting'
    ],
    cta: {
      text: 'Start Free Trial',
      link: '/contact'
    }
  },
  {
    name: 'Professional',
    key: 'professional',
    description: 'For growing teams that need more power',
    priceMonthly: '$799',
    priceAnnual: '$639',
    billing: 'per month, billed monthly',
    popular: true,
    features: [
      '25 users included',
      'Unlimited projects',
      'All 4 apps included',
      'Priority support',
      '100GB storage',
      'API access',
      'Advanced analytics',
      'Custom integrations',
      'SSO (Single Sign-On)'
    ],
    cta: {
      text: 'Start Free Trial',
      link: '/contact'
    }
  },
  {
    name: 'Enterprise',
    key: 'enterprise',
    description: 'For large organizations with custom needs',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    billing: 'Contact sales for pricing',
    features: [
      'Unlimited users',
      'Unlimited projects',
      'All 4 apps included',
      'Dedicated account manager',
      'Unlimited storage',
      'Custom integrations',
      'SLA guarantee',
      'On-premise option',
      'Advanced security',
      'Custom training'
    ],
    cta: {
      text: 'Contact Sales',
      link: '/contact'
    }
  }
]

const featureComparison = [
  {
    category: 'Apps Included',
    features: [
      { name: 'DeepPlan AI (Takeoffs)', availability: { starter: false, professional: true, enterprise: true } },
      { name: 'DeepCost (Estimation)', availability: { starter: true, professional: true, enterprise: true } },
      { name: 'DeepTrack (Project Management)', availability: { starter: true, professional: true, enterprise: true } },
      { name: 'DeepHR (Workforce)', availability: { starter: false, professional: true, enterprise: true } }
    ]
  },
  {
    category: 'Users & Projects',
    features: [
      { name: 'Number of Users', availability: { starter: '5 users', professional: '25 users', enterprise: 'Unlimited' } },
      { name: 'Active Projects', availability: { starter: '10 projects', professional: 'Unlimited', enterprise: 'Unlimited' } },
      { name: 'Storage', availability: { starter: '10GB', professional: '100GB', enterprise: 'Unlimited' } }
    ]
  },
  {
    category: 'Features',
    features: [
      { name: 'Mobile Apps', availability: { starter: true, professional: true, enterprise: true } },
      { name: 'Real-time Sync', availability: { starter: true, professional: true, enterprise: true } },
      { name: 'API Access', availability: { starter: false, professional: true, enterprise: true } },
      { name: 'Custom Integrations', availability: { starter: false, professional: true, enterprise: true } },
      { name: 'Advanced Analytics', availability: { starter: false, professional: true, enterprise: true } },
      { name: 'White Labeling', availability: { starter: false, professional: false, enterprise: true } }
    ]
  },
  {
    category: 'Security & Compliance',
    features: [
      { name: 'SSO (Single Sign-On)', availability: { starter: false, professional: true, enterprise: true } },
      { name: 'Role-based Access', availability: { starter: true, professional: true, enterprise: true } },
      { name: 'Audit Logs', availability: { starter: false, professional: true, enterprise: true } },
      { name: 'SLA Guarantee', availability: { starter: false, professional: false, enterprise: true } },
      { name: 'On-premise Deployment', availability: { starter: false, professional: false, enterprise: true } }
    ]
  },
  {
    category: 'Support',
    features: [
      { name: 'Email Support', availability: { starter: true, professional: true, enterprise: true } },
      { name: 'Priority Support', availability: { starter: false, professional: true, enterprise: true } },
      { name: 'Dedicated Account Manager', availability: { starter: false, professional: false, enterprise: true } },
      { name: 'Custom Training', availability: { starter: false, professional: false, enterprise: true } },
      { name: 'Implementation Support', availability: { starter: 'Basic', professional: 'Standard', enterprise: 'Premium' } }
    ]
  }
]

const addons = [
  {
    name: 'Additional Storage',
    icon: '💾',
    description: 'Extra storage for drawings and documents',
    price: '$50/100GB'
  },
  {
    name: 'Advanced Analytics',
    icon: '📊',
    description: 'Custom dashboards and BI tools',
    price: '$199/month'
  },
  {
    name: 'Custom Training',
    icon: '🎓',
    description: 'Personalized training sessions',
    price: '$500/session'
  },
  {
    name: 'Implementation',
    icon: '🚀',
    description: 'Dedicated implementation support',
    price: 'Custom'
  }
]

const pricingFaqs = [
  {
    question: 'Can I change plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and ACH transfers for annual plans.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.'
  },
  {
    question: 'What happens after the trial ends?',
    answer: 'After your trial, you can choose a paid plan to continue using CCorex. Your data is preserved for 30 days if you don\'t upgrade.'
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes! Annual billing saves you 20% compared to monthly billing. We also offer volume discounts for large teams.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees or long-term contracts.'
  },
  {
    question: 'What\'s included in support?',
    answer: 'All plans include email and chat support. Professional and Enterprise plans get priority support with faster response times.'
  },
  {
    question: 'Do you offer custom enterprise pricing?',
    answer: 'Yes! For teams with 50+ users or custom requirements, contact our sales team for tailored pricing and features.'
  }
]
</script>
