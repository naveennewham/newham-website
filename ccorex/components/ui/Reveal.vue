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

onMounted(() => {
  if (!el.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const r = el.value.getBoundingClientRect()
  if (r.top < window.innerHeight * 0.9) return // already on screen
  shown.value = false
  io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) { shown.value = true; io?.disconnect() }
  }, { rootMargin: '0px 0px -10% 0px' })
  io.observe(el.value)
})
onBeforeUnmount(() => io?.disconnect())
defineExpose({ shown })
void props
</script>
