<template>
  <div class="relative mx-auto w-[260px] rounded-[2.5rem] border-[10px] border-[#121926] bg-[#121926] shadow-frame">
    <div class="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#121926]" aria-hidden="true"></div>
    <div class="relative aspect-[9/19] overflow-hidden rounded-[1.8rem] bg-white">
      <slot>
        <img v-if="src" :src="src" :alt="alt ?? ''" class="h-full w-full object-cover object-top" loading="lazy" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ src?: string; alt?: string }>()
</script>
