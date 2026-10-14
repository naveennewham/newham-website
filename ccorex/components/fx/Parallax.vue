<template>
  <div ref="root" class="relative" @pointermove="onMove" @pointerleave="reset">
    <slot :x="x" :y="y" />
  </div>
</template>

<script setup lang="ts">
// Exposes a smoothed pointer position (-1..1) to the slot so children can
// shift by different depths. Inactive for touch and reduced-motion users.
const root = ref<HTMLElement | null>(null)
const x = ref(0)
const y = ref(0)
let enabled = false
let raf = 0
let tx = 0
let ty = 0
onMounted(() => {
  enabled = window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
function tick() {
  x.value += (tx - x.value) * 0.08
  y.value += (ty - y.value) * 0.08
  if (Math.abs(tx - x.value) > 0.001 || Math.abs(ty - y.value) > 0.001) raf = requestAnimationFrame(tick)
  else raf = 0
}
function onMove(e: PointerEvent) {
  if (!enabled || !root.value) return
  const r = root.value.getBoundingClientRect()
  tx = ((e.clientX - r.left) / r.width) * 2 - 1
  ty = ((e.clientY - r.top) / r.height) * 2 - 1
  if (!raf) raf = requestAnimationFrame(tick)
}
function reset() { tx = 0; ty = 0; if (enabled && !raf) raf = requestAnimationFrame(tick) }
onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>
