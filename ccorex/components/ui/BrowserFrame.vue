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
    <!-- aspect: give side-by-side frames the same shape; focus: which part of the screen to keep -->
    <div v-if="aspect" class="overflow-hidden" :style="{ aspectRatio: aspect }">
      <img :src="src" :alt="alt" class="block h-full w-full object-cover" :style="{ objectPosition: focus ?? 'left top' }" :loading="eager ? 'eager' : 'lazy'" decoding="async" />
    </div>
    <img v-else :src="src" :alt="alt" class="block w-full" :loading="eager ? 'eager' : 'lazy'" decoding="async" />
    <figcaption v-if="caption" class="border-t border-ink-100 px-4 py-2.5 text-xs text-ink-500">{{ caption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps<{ src: string; alt: string; url?: string; caption?: string; dark?: boolean; eager?: boolean; aspect?: string; focus?: string }>()
</script>
