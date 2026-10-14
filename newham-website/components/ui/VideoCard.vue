<template>
  <div>
  <button type="button" class="group relative block w-full overflow-hidden rounded-2xl bg-ink-900 text-left shadow-lift ring-1 ring-ink-900/10" :aria-label="`Play video: ${title}`" @click="open = true">
    <img :src="poster" alt="" class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
    <span class="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" aria-hidden="true"></span>
    <span class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-800 shadow-lift transition-transform group-hover:scale-110" :class="large ? 'h-20 w-20 text-2xl' : 'h-14 w-14 text-lg'" aria-hidden="true">
      <span class="absolute inset-0 animate-ping rounded-full bg-white/40 motion-reduce:hidden"></span>
      <i class="fa-solid fa-play relative ml-1"></i>
    </span>
    <span class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
      <span>
        <span v-if="eyebrow" class="block text-[11px] font-semibold uppercase tracking-wider text-cyan-400">{{ eyebrow }}</span>
        <span class="block font-semibold text-white" :class="large ? 'text-xl sm:text-2xl' : 'text-base'">{{ title }}</span>
      </span>
      <span v-if="duration" class="shrink-0 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white">{{ duration }}</span>
    </span>
  </button>
  <UiVideoLightbox v-model:open="open" :src="src" :poster="poster" :title="title" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ src: string; poster: string; title: string; eyebrow?: string; duration?: string; large?: boolean }>(), {})
const open = ref(false)
</script>
