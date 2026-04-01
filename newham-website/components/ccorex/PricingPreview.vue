<template>
  <section class="relative w-full py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-3 text-white">Simple plans for every contractor</h2>
        <p class="text-gray-300 text-lg">Start with one app or get the full CCorex suite.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="p in plans" :key="p.name" class="rounded-2xl p-6 bg-slate-900/60 ring-1 ring-white/10 border border-cyan-500/10">
          <h3 class="text-xl font-semibold text-white mb-1">{{ p.name }}</h3>
          <p class="text-gray-400 mb-4">{{ p.tagline }}</p>
          <div class="text-3xl font-bold text-cyan-400 mb-2">{{ p.price }}</div>
          <div class="text-xs text-gray-500 mb-4">{{ p.billing }}</div>
          <ul class="space-y-2 mb-6">
            <li v-for="f in p.features" :key="f" class="flex items-start gap-2">
              <span class="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span>
              <span class="text-gray-300">{{ f }}</span>
            </li>
          </ul>
          <NuxtLink :to="p.link" class="block text-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all">Select plan</NuxtLink>
        </div>
      </div>
      <div class="text-center mt-6 text-sm text-gray-400">Custom enterprise and on‑prem options available. <NuxtLink to="/contact" class="text-cyan-400 hover:underline">Talk to sales</NuxtLink>.</div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    name: 'Start with DeepCost',
    tagline: 'AI-powered MEP estimating',
    price: '$149 / user',
    billing: 'billed monthly',
    features: [
      'MEP cost libraries & assemblies',
      'AI quantity mapping from takeoffs',
      'Export BOQ & proposals'
    ],
    link: '/pricing#deepcost'
  },
  {
    name: 'Project Control',
    tagline: 'DeepCost + DeepTrack',
    price: '$249 / user',
    billing: 'billed monthly',
    features: [
      'Budget vs actuals, POs & approvals',
      'Cost code tracking',
      'Real-time variance analysis'
    ],
    link: '/pricing#project-control'
  },
  {
    name: 'CCorex Suite',
    tagline: 'All four apps together',
    price: 'Custom',
    billing: 'volume pricing',
    features: [
      'DeepPlanAI, DeepCost, DeepTrack, DeepHR',
      'SSO, admin controls, priority support',
      'API & integrations'
    ],
    link: '/pricing#suite'
  }
]
</script>
