<template>
  <component :is="as" ref="el" class="transition-all duration-700 ease-out motion-reduce:transition-none" :class="shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'" :style="{ transitionDelay: `${delay}ms` }">
    <slot :shown="shown" />
  </component>
</template>

<script setup lang="ts">
// Fades content up when it scrolls into view. Content is visible without JS
// (SSR renders it shown) and for users who prefer reduced motion.
const props = withDefaults(defineProps<{ as?: string; delay?: number }>(), { as: 'div', delay: 0 })
const el = ref<HTMLElement | null>(null)
const shown = ref(true)
let io: IntersectionObserver | undefined

// The observer's first report says where the element starts (no forced layout while hydrating):
// on screen or already scrolled past, it stays shown; below the fold, it hides until scrolled to.
onMounted(() => {
  if (!el.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  let first = true
  io = new IntersectionObserver(([e]) => {
    if (!e) return
    const done = e.isIntersecting || (first && e.boundingClientRect.top < 0)
    first = false
    shown.value = done
    if (done) io?.disconnect()
  }, { rootMargin: '0px 0px -10% 0px' })
  io.observe(el.value)
})
onBeforeUnmount(() => io?.disconnect())
defineExpose({ shown })
void props
</script>
