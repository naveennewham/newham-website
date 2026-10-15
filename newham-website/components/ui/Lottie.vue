<template>
  <div ref="box" :class="['relative', failed ? 'hidden' : '']" role="img" :aria-label="label" :aria-hidden="label ? undefined : 'true'">
    <slot v-if="!ready" name="fallback" />
  </div>
</template>

<script setup lang="ts">
// Plays a Lottie JSON from /public (e.g. src="/lottie/site-checkin.json").
// The player is loaded only when the animation scrolls into view; it pauses off-screen,
// shows a still frame for reduced motion, and hides itself if the file is missing.
const props = withDefaults(defineProps<{ src: string; label?: string; loop?: boolean; speed?: number }>(), { loop: true, speed: 1 })

const box = ref<HTMLElement | null>(null)
const ready = ref(false)
const failed = ref(false)
let anim: { play: () => void; pause: () => void; destroy: () => void; goToAndStop: (f: number, isFrame?: boolean) => void; setSpeed: (s: number) => void; totalFrames: number } | undefined
let io: IntersectionObserver | undefined
let reduce = false

async function load() {
  if (anim || !box.value) return
  try {
    const res = await fetch(props.src)
    if (!res.ok) throw new Error(String(res.status))
    const data = await res.json()
    const lottie = (await import('lottie-web/build/player/lottie_light')).default
    reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    anim = lottie.loadAnimation({ container: box.value, renderer: 'svg', loop: props.loop, autoplay: !reduce, animationData: data }) as unknown as typeof anim
    anim!.setSpeed(props.speed)
    if (reduce) anim!.goToAndStop(Math.floor(anim!.totalFrames / 2), true)
    ready.value = true
  } catch {
    failed.value = true
  }
}

onMounted(() => {
  io = new IntersectionObserver(([e]) => {
    if (e?.isIntersecting) { if (!anim) load(); else if (!reduce) anim.play() }
    else anim?.pause()
  }, { rootMargin: '200px' })
  if (box.value) io.observe(box.value)
})
onBeforeUnmount(() => { io?.disconnect(); anim?.destroy() })
</script>
