<template>
  <figure class="overflow-hidden rounded-xl border bg-white shadow-frame" :class="dark ? 'border-white/10' : 'border-ink-200'">
    <div class="flex items-center gap-3 border-b px-4 py-2.5" :class="dark ? 'border-white/10 bg-brand-900' : 'border-ink-100 bg-ink-50'">
      <span class="flex gap-1.5" aria-hidden="true">
        <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
      </span>
      <span v-if="url" class="mx-auto truncate rounded-md px-3 py-0.5 font-mono text-[11px]" :class="dark ? 'bg-white/10 text-ink-200' : 'bg-white text-ink-500 ring-1 ring-ink-100'">{{ url }}</span>
    </div>
    <img :src="src" :alt="alt" :width="width" :height="height" class="block h-auto w-full" :loading="eager ? 'eager' : 'lazy'" :fetchpriority="eager ? 'high' : undefined" decoding="async" />
    <figcaption v-if="caption" class="border-t border-ink-100 px-4 py-2.5 text-xs text-ink-500">{{ caption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
// Screenshot in browser chrome. Pass width/height (intrinsic px) to avoid layout shift.
defineProps<{ src: string; alt: string; url?: string; caption?: string; dark?: boolean; eager?: boolean; width?: number; height?: number }>()
</script>
