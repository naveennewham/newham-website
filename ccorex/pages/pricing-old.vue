<template>
  <section class="max-w-7xl mx-auto px-4 pt-24 pb-16">
    <h2 class="text-4xl md:text-5xl font-bold mb-10">Pricing</h2>

    <!-- Tier Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="p in plans"
        :key="p.name"
        :class="[
          'relative p-6 rounded-2xl border bg-white/5',
          p.popular ? 'border-primary-500 shadow-xl shadow-primary-500/10' : 'border-white/10'
        ]"
      >
        <div v-if="p.popular" class="absolute -top-3 right-4 px-3 py-1 rounded-full bg-primary-500 text-slate-900 text-xs font-semibold">
          Most popular
        </div>

        <h3 class="text-xl font-semibold text-white mb-1">{{ p.name }}</h3>
        <p class="text-gray-400 mb-3">{{ p.tagline }}</p>
        <div class="text-3xl font-bold text-primary-400 mb-1">{{ p.price }}</div>
        <div class="text-xs text-gray-500 mb-4">{{ p.billing }}</div>
        <ul class="space-y-1 text-sm text-gray-300 mb-6">
          <li v-for="f in p.features" :key="f">• {{ f }}</li>
        </ul>
        <a href="/contact" :class="['block text-center px-5 py-3 rounded-lg font-semibold', p.popular ? 'bg-primary-500 text-slate-900' : 'border border-primary-500 text-primary-400']">
          {{ p.cta || 'Select plan' }}
        </a>
      </div>
    </div>

    <!-- Feature Matrix -->
    <div class="mt-16 overflow-x-auto">
      <table class="w-full min-w-[720px] text-left border-separate border-spacing-0">
        <thead>
          <tr>
            <th class="py-3 px-4 text-gray-400 font-semibold sticky left-0 bg-slate-900/80 backdrop-blur border-b border-white/10">Features</th>
            <th v-for="p in plans" :key="'h-'+p.name" class="py-3 px-4 text-center text-primary-400 font-semibold border-b border-white/10">{{ p.name }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in matrix" :key="row.label" class="hover:bg-white/5">
            <td class="py-3 px-4 text-gray-300 border-b border-white/10 sticky left-0 bg-slate-900/60 backdrop-blur">{{ row.label }}</td>
            <td v-for="p in plans" :key="p.name + row.label" class="py-3 px-4 text-center border-b border-white/10">
              <i v-if="row.checks[p.key]" class="fa-solid fa-circle-check text-primary-400"></i>
              <span v-else class="text-gray-600">—</span>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="text-xs text-gray-500 mt-3">Contact sales for annual billing, volume discounts, and on‑prem options.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
type PlanKey = 'deepcost' | 'control' | 'suite'

const plans: Array<{ key: PlanKey; name: string; tagline: string; price: string; billing: string; features: string[]; popular?: boolean; cta?: string }> = [
  { key: 'deepcost', name: 'Start with DeepCost', tagline: 'AI-powered MEP estimating', price: '$149 / user', billing: 'billed monthly', features: ['MEP libraries & assemblies','AI quantity mapping','Export BOQ & proposals'], cta: 'Start with DeepCost' },
  { key: 'control', name: 'Project Control', tagline: 'DeepCost + DeepTrack', price: '$249 / user', billing: 'billed monthly', features: ['Budget vs actuals','PO workflow','Variance analysis'], popular: true, cta: 'Choose Project Control' },
  { key: 'suite', name: 'CCorex Suite', tagline: 'All four apps', price: 'Custom', billing: 'volume pricing', features: ['All apps','SSO & admin','API & integrations'], cta: 'Talk to sales' }
]

const matrix: Array<{ label: string; checks: Record<PlanKey, boolean> }> = [
  { label: 'DeepPlanAI (takeoffs)', checks: { deepcost: false, control: true, suite: true } },
  { label: 'DeepCost (estimating)', checks: { deepcost: true, control: true, suite: true } },
  { label: 'DeepTrack (budget & POs)', checks: { deepcost: false, control: true, suite: true } },
  { label: 'DeepHR (workforce)', checks: { deepcost: false, control: false, suite: true } },
  { label: 'Single sign-on (SSO)', checks: { deepcost: false, control: true, suite: true } },
  { label: 'Admin controls', checks: { deepcost: false, control: true, suite: true } },
  { label: 'API & integrations', checks: { deepcost: false, control: true, suite: true } },
]
</script>
