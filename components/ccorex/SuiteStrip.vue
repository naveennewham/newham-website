<template>
  <section class="relative w-full py-10 md:py-12 bg-slate-900/80 border-y border-cyan-500/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        <div v-for="app in apps" :key="app.name" class="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 ring-1 ring-white/10">
          <div class="shrink-0 h-10 w-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500 text-slate-900 font-bold">
            {{ app.initials }}
          </div>
          <div>
            <div class="font-semibold text-white">{{ app.name }}</div>
            <div class="text-xs text-gray-400">{{ app.tagline }}</div>
          </div>
          <NuxtLink :to="app.link" class="ml-auto text-cyan-400 text-sm hover:underline">Learn more →</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const apps = [
  { name: 'DeepPlanAI', initials: 'DP', tagline: 'AI takeoffs & planning', link: '/ccorex/deepplan-ai' },
  { name: 'DeepCost', initials: 'DC', tagline: 'AI cost estimation', link: '/ccorex/deepcost' },
  { name: 'DeepTrack', initials: 'DT', tagline: 'Budget & PO management', link: '/ccorex/deeptrack' },
  { name: 'DeepHR', initials: 'HR', tagline: 'Workforce management', link: '/ccorex/deephr' }
]
</script>
