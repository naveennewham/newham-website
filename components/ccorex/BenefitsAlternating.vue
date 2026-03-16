<template>
  <section class="relative w-full py-20 md:py-28 bg-gradient-to-b from-slate-800 to-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      <div v-for="(b, i) in benefits" :key="b.title" :class="['grid grid-cols-1 md:grid-cols-2 gap-10 items-center', i % 2 === 1 ? 'md:flex-row-reverse' : '']">
        <div :class="i % 2 === 1 ? 'md:order-2' : ''">
          <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">{{ b.title }}</h3>
          <p class="text-gray-300 text-lg mb-6">{{ b.subtitle }}</p>
          <ul class="space-y-2">
            <li v-for="pt in b.points" :key="pt" class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span>
              <span class="text-gray-300">{{ pt }}</span>
            </li>
          </ul>
        </div>
        <div :class="['rounded-2xl border border-cyan-500/20 bg-slate-900/60 ring-1 ring-white/10 h-64 md:h-80']">
          <!-- Placeholder visual; can be replaced with illustration/screenshot -->
          <div class="w-full h-full flex items-center justify-center text-cyan-400/70">{{ b.visual }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: 'From Takeoff to Estimate — in Minutes',
    subtitle: 'DeepPlanAI feeds DeepCost to auto-build precise MEP estimates.',
    visual: 'AI Takeoff → Cost Estimation',
    points: [
      'Auto-measure areas, lengths, and counts from drawings',
      'Map quantities to items and assemblies',
      'Apply region/labor/material factors automatically'
    ]
  },
  {
    title: 'Budgets that Track Themselves',
    subtitle: 'DeepTrack syncs with awarded estimates and POs in real-time.',
    visual: 'Estimate → Budget → PO Tracking',
    points: [
      'Live variance analysis vs. estimate',
      'PO workflow with approvals',
      'Spend visibility across projects'
    ]
  },
  {
    title: 'Workforce Aligned to Budgets',
    subtitle: 'DeepHR plans crews and timekeeping, tied to cost codes.',
    visual: 'Workforce Planning ↔ Cost Codes',
    points: [
      'Roster planning by skill and availability',
      'Timesheets mapped to jobs and phases',
      'Compliance and certifications managed in one place'
    ]
  }
]
</script>
