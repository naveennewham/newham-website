<template>
  <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
    <img :src="poster" alt="" class="absolute inset-0 h-full w-full object-cover" />
    <video
      v-if="play"
      class="absolute inset-0 h-full w-full object-cover"
      autoplay
      muted
      loop
      playsinline
      preload="none"
      :poster="poster"
    >
      <source v-if="webm" :src="webm" type="video/webm" />
      <source :src="mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0" :class="overlay"></div>
  </div>
</template>

<script setup lang="ts">
// Decorative background loop (licensed stock — see MEDIA_LICENSES.md). Shows
// only the poster for reduced-motion users, on save-data connections and small screens.
withDefaults(defineProps<{ mp4: string; webm?: string; poster: string; overlay?: string }>(), {
  overlay: 'bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-950/40'
})
const play = ref(false)
onMounted(() => {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } }
  play.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !nav.connection?.saveData && window.innerWidth >= 768
})
</script>
