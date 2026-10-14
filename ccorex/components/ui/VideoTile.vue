<template>
  <div ref="el" class="group relative isolate overflow-hidden rounded-3xl bg-ink-900">
    <img v-if="image" :src="image" :alt="imageAlt ?? ''" class="vt-zoom absolute inset-0 -z-10 h-full w-full object-cover" :class="imagePos" loading="lazy" />
    <img v-else :src="poster" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" loading="lazy" />
    <video
      v-if="play && src"
      ref="vid"
      class="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      :src="src" :poster="poster" muted loop playsinline preload="none" aria-hidden="true"
    ></video>
    <div class="absolute inset-0 -z-10 bg-gradient-to-t" :class="image ? 'from-ink-950/95 via-ink-950/50 to-transparent' : 'from-ink-950/90 via-ink-950/40 to-ink-950/10'" aria-hidden="true"></div>
    <div class="flex h-full flex-col justify-end p-6 text-white">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Product video or real screenshot (slow zoom) tile; video only plays while on screen.
const props = withDefaults(defineProps<{ src?: string; poster?: string; image?: string; imageAlt?: string; imagePos?: string }>(), { imagePos: 'object-left-top' })
const el = ref<HTMLElement | null>(null)
const vid = ref<HTMLVideoElement | null>(null)
const play = ref(false)
let io: IntersectionObserver | undefined
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!props.src) return
  io = new IntersectionObserver(async ([e]) => {
    if (e?.isIntersecting) {
      play.value = true
      await nextTick()
      vid.value?.play().catch(() => {})
    } else {
      vid.value?.pause()
    }
  }, { threshold: 0.25 })
  if (el.value) io.observe(el.value)
})
onBeforeUnmount(() => io?.disconnect())
</script>

<style scoped>
.vt-zoom { animation: vt-zoom 18s ease-in-out infinite alternate; transform-origin: 20% 20%; }
@keyframes vt-zoom { from { transform: scale(1); } to { transform: scale(1.12); } }
@media (prefers-reduced-motion: reduce) { .vt-zoom { animation: none; } }
</style>
