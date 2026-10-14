<template>
  <ol class="grid gap-4" :class="cols">
    <li v-for="(s, i) in steps" :key="s.title" class="relative rounded-2xl border p-5" :class="dark ? 'border-white/10 bg-white/5' : 'border-ink-100 bg-white shadow-card'">
      <span class="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold" :class="dark ? 'bg-cyan-500 text-brand-950' : 'bg-brand-700 text-white'">{{ i + 1 }}</span>
      <h3 class="mt-4 text-base font-semibold" :class="dark ? 'text-white' : 'text-ink-900'">{{ s.title }}</h3>
      <p v-if="s.text" class="mt-1.5 text-sm leading-relaxed" :class="dark ? 'text-ink-300' : 'text-ink-600'">{{ s.text }}</p>
      <i v-if="i < steps.length - 1" class="fa-solid fa-chevron-right absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xs lg:block" :class="dark ? 'text-ink-400' : 'text-ink-300'" aria-hidden="true"></i>
    </li>
  </ol>
</template>

<script setup lang="ts">
const props = defineProps<{ steps: { title: string; text?: string }[]; dark?: boolean }>()
const cols = computed(() => ({
  3: 'sm:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4', 5: 'sm:grid-cols-3 lg:grid-cols-5', 6: 'sm:grid-cols-3 lg:grid-cols-6', 7: 'sm:grid-cols-4 lg:grid-cols-7'
} as Record<number, string>)[props.steps.length] ?? 'sm:grid-cols-3')
</script>
