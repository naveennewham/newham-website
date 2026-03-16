<template>
  <section class="py-16 border-t border-white/10">
    <div class="max-w-6xl mx-auto px-4">
      <p class="text-center text-gray-400 mb-8">Trusted by forward-thinking contractors and MEP firms</p>
      <div class="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
        <div v-for="(l, i) in logos" :key="i" class="h-14 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-gray-400">
          <span class="text-sm">{{ l }}</span>
        </div>
      </div>
      <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <blockquote v-for="t in testimonials" :key="t.author" class="p-6 rounded-xl bg-white/[0.06] border border-white/10">
          <p class="text-gray-200">“{{ t.quote }}”</p>
          <footer class="mt-3 text-sm text-gray-400">— {{ t.author }}, {{ t.role }}</footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = ['PrimeBuild','Metro MEP','Skyline','NorthPoint','Apex','Constructo']
const testimonials = [
  { quote: 'CCorex helped us cut estimation time dramatically and improve accuracy.', author: 'Rahul K.', role: 'Estimating Lead' },
  { quote: 'Our budgets finally stay in sync across teams and POs.', author: 'Melissa S.', role: 'Project Controls' },
  { quote: 'Workforce planning aligned with cost codes changed how we operate.', author: 'Eric D.', role: 'Ops Manager' }
]
</script>
