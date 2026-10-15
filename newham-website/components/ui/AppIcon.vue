<template>
  <span
    class="app-icon inline-flex shrink-0 items-center justify-center text-white"
    :class="[sizes[size].box, styleFor.bg]"
    :title="label ? undefined : styleFor.name"
    :aria-hidden="label ? undefined : 'true'"
    :role="label ? 'img' : undefined"
    :aria-label="label ? styleFor.name : undefined"
  >
    <i :class="[styleFor.icon, sizes[size].icon]" aria-hidden="true"></i>
  </span>
</template>

<script setup lang="ts">
// App icons as they appear in the CCorex portal (dash.ccorex.com): one gradient tile per app.
const props = withDefaults(defineProps<{ app: string; size?: 'xs' | 'sm' | 'md' | 'lg'; label?: boolean }>(), { size: 'md' })

const styles: Record<string, { name: string; icon: string; bg: string }> = {
  'deepcost': { name: 'DeepCost', icon: 'fa-solid fa-gear', bg: 'bg-gradient-to-br from-[#6cc3dc] to-[#3a8fa8]' },
  'deeptrack': { name: 'DeepTrack', icon: 'fa-solid fa-briefcase', bg: 'bg-gradient-to-br from-[#f5b04f] to-[#dd8a2c]' },
  'deephr': { name: 'DeepHR', icon: 'fa-solid fa-user', bg: 'bg-gradient-to-br from-[#79c27a] to-[#459f55]' },
  'deep-drive': { name: 'Deep Drive', icon: 'fa-regular fa-folder-open', bg: 'bg-gradient-to-br from-[#b257cf] to-[#8433a6]' },
  'pdf-editor': { name: 'PDF Editor', icon: 'fa-regular fa-file-lines', bg: 'bg-gradient-to-br from-[#ec6a5e] to-[#c9413a]' },
  'arivu-ai': { name: 'ARIVU AI', icon: 'fa-regular fa-comment-dots', bg: 'bg-gradient-to-br from-[#8b6cff] to-[#5c3fd8]' },
  'deepplan-ai': { name: 'DeepPlan AI', icon: 'fa-solid fa-compass-drafting', bg: 'bg-gradient-to-br from-[#5f7cf0] to-[#3c4fc4]' }
}
const styleFor = computed(() => styles[props.app] ?? { name: props.app, icon: 'fa-solid fa-cube', bg: 'bg-ink-500' })

const sizes = {
  xs: { box: 'h-6 w-6 rounded-md shadow-sm', icon: 'text-[10px]' },
  sm: { box: 'h-8 w-8 rounded-lg shadow-sm', icon: 'text-xs' },
  md: { box: 'h-11 w-11 rounded-xl shadow-md', icon: 'text-base' },
  lg: { box: 'h-14 w-14 rounded-2xl shadow-lg', icon: 'text-xl' }
}
</script>
