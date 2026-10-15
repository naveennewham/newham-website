<template>
  <figure class="relative mx-auto aspect-square w-full max-w-[520px]">
    <svg viewBox="0 0 520 520" class="absolute inset-0 h-full w-full" role="img" aria-labelledby="pd-title">
      <title id="pd-title">CCorex platform: shared login, users and roles connect DeepCost, DeepTrack, DeepHR, DeepPlan AI, Deep Drive and PDF Editor, with ARIVU AI across all apps</title>
      <circle cx="260" cy="260" r="200" fill="none" stroke="currentColor" class="text-white/10" stroke-dasharray="4 8" />
      <circle cx="260" cy="260" r="130" fill="none" stroke="currentColor" class="text-white/10" />
      <g class="text-cyan-500/40" stroke="currentColor" stroke-width="1.5">
        <line v-for="n in nodes" :key="n.name" x1="260" y1="260" :x2="n.x" :y2="n.y" />
      </g>
    </svg>
    <div class="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-brand-800 text-center ring-8 ring-brand-900/60">
      <img src="/ccorex-logo.png" alt="" class="h-6 w-auto brightness-0 invert" />
      <span class="mt-2 text-[11px] leading-tight text-ink-200">One login · users<br>roles · data</span>
    </div>
    <NuxtLink
      v-for="n in nodes"
      :key="n.name"
      :to="`/products/${n.slug}`"
      class="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
      :style="{ left: `${(n.x / 520) * 100}%`, top: `${(n.y / 520) * 100}%` }"
    >
      <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-lg shadow-lift" :class="n.tone"><i :class="n.icon" aria-hidden="true"></i></span>
      <span class="whitespace-nowrap text-xs font-semibold text-white">{{ n.name }}</span>
    </NuxtLink>
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
      <span class="inline-flex items-center gap-2 rounded-full bg-ai-gradient px-4 py-1.5 text-xs font-semibold text-white shadow-lift"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>ARIVU AI across every app</span>
    </div>
  </figure>
</template>

<script setup lang="ts">
const r = 200
const items = [
  { name: 'DeepCost', slug: 'deepcost', icon: 'fa-solid fa-calculator', tone: 'text-sky-700' },
  { name: 'DeepTrack', slug: 'deeptrack', icon: 'fa-solid fa-diagram-project', tone: 'text-amber-700' },
  { name: 'DeepHR', slug: 'deephr', icon: 'fa-solid fa-user-group', tone: 'text-emerald-700' },
  { name: 'PDF Editor', slug: 'pdf-editor', icon: 'fa-solid fa-file-pen', tone: 'text-rose-700' },
  { name: 'Deep Drive', slug: 'deep-drive', icon: 'fa-solid fa-folder-open', tone: 'text-indigo-700' },
  { name: 'DeepPlan AI', slug: 'deepplan-ai', icon: 'fa-solid fa-compass-drafting', tone: 'text-violet-700' }
]
const nodes = items.map((it, i) => {
  const a = (-90 + i * (360 / items.length)) * (Math.PI / 180)
  return { ...it, x: Math.round(260 + r * Math.cos(a)), y: Math.round(260 + r * Math.sin(a)) }
})
</script>
