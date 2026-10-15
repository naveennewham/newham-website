<template>
  <figure class="rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8">
    <figcaption v-if="title" class="eyebrow">{{ title }}</figcaption>
    <ol class="relative mt-5">
      <li v-for="(s, i) in steps" :key="s.title" class="relative flex gap-4 pb-5 last:pb-0">
        <!-- rail to the next step -->
        <span v-if="i < steps.length - 1" class="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-0.5 overflow-hidden bg-ink-100" aria-hidden="true">
          <span class="absolute inset-x-0 top-0 h-full origin-top bg-brand-500 transition-transform duration-700 ease-out" :style="{ transform: `scaleY(${active > i ? 1 : 0})` }"></span>
        </span>
        <span
          class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm transition-colors duration-500"
          :class="active === i ? 'bg-brand-700 text-white shadow-lift' : active > i ? 'bg-brand-50 text-brand-700' : 'bg-ink-50 text-ink-400'"
        >
          <i :class="s.icon" aria-hidden="true"></i>
        </span>
        <span class="min-w-0 pt-2">
          <span class="flex flex-wrap items-center gap-2">
            <span class="text-sm font-semibold transition-colors duration-500" :class="active >= i ? 'text-ink-900' : 'text-ink-500'">{{ s.title }}</span>
            <span v-if="s.app" class="rounded-full border border-ink-100 px-2 py-px text-[11px] font-medium text-ink-600">{{ s.app }}</span>
          </span>
          <span v-if="s.text" class="mt-0.5 block text-xs leading-snug text-ink-500">{{ s.text }}</span>
        </span>
      </li>
    </ol>
  </figure>
</template>

<script setup lang="ts">
// A vertical workflow; a highlight walks down the steps and the rail fills behind it.
// SSR and reduced motion show every step complete.
const props = defineProps<{ steps: { title: string; text?: string; icon: string; app?: string }[]; title?: string; interval?: number }>()
const active = ref(props.steps.length)
let t: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  active.value = 0
  // one extra tick at the end shows the finished flow before it restarts
  t = setInterval(() => { active.value = (active.value + 1) % (props.steps.length + 2) }, props.interval ?? 1400)
})
onBeforeUnmount(() => clearInterval(t))
</script>
