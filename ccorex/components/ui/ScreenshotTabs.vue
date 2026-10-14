<template>
  <div class="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
    <div role="tablist" :aria-label="label" class="flex gap-2 overflow-x-auto lg:flex-col">
      <button
        v-for="(t, i) in tabs"
        :id="`${uid}-tab-${i}`"
        :key="t.title"
        type="button"
        role="tab"
        :aria-selected="active === i"
        :aria-controls="`${uid}-panel`"
        class="min-w-[220px] rounded-xl border p-4 text-left transition-colors lg:min-w-0"
        :class="active === i ? 'border-brand-200 bg-brand-50' : 'border-transparent hover:bg-ink-50'"
        @click="active = i"
      >
        <span class="block text-sm font-semibold" :class="active === i ? 'text-brand-800' : 'text-ink-900'">{{ t.title }}</span>
        <span class="mt-1 block text-sm leading-snug text-ink-600">{{ t.text }}</span>
      </button>
    </div>
    <div :id="`${uid}-panel`" role="tabpanel" :aria-labelledby="`${uid}-tab-${active}`">
      <UiBrowserFrame :src="tabs[active]!.src" :alt="tabs[active]!.alt" :url="tabs[active]!.url" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ tabs: { title: string; text: string; src: string; alt: string; url?: string }[]; label: string }>()
const active = ref(0)
const uid = useId()
</script>
