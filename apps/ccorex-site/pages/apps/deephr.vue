<template>
  <section class="max-w-6xl mx-auto px-4 pt-24 pb-16">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">DeepHR</h1>
    <p class="text-lg text-gray-300 mb-8">Unified workforce management built for construction teams.</p>

    <ScreenshotGallery
      title="Product screenshots"
      :images="[null, null, null]"
      note="Replace placeholders with real screenshots (1200x675 recommended)"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="f in features" :key="f.title" class="p-6 rounded-xl border border-white/10 bg-white/5">
        <h3 class="text-xl font-semibold text-white">{{ f.title }}</h3>
        <p class="text-gray-300 mt-2">{{ f.desc }}</p>
      </div>
    </div>

    <div class="mt-10 flex gap-3">
      <NuxtLink to="/pricing" class="px-6 py-3 rounded-lg bg-primary-500 text-slate-900 font-semibold">View Pricing</NuxtLink>
      <a href="/contact" class="px-6 py-3 rounded-lg border border-primary-500 text-primary-400">Schedule Demo</a>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  { title: 'Workforce planning', desc: 'Plan crews by skill, site, and availability.' },
  { title: 'Attendance & timesheets', desc: 'Mobile time tracking and approvals.' },
  { title: 'Compliance & certifications', desc: 'Track safety and mandatory training.' },
  { title: 'Labor cost allocation', desc: 'Post to cost codes and budgets in suite.' }
]
</script>
