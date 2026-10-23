<template>
  <Transition name="sticky-cta">
    <div v-if="show" class="fixed inset-x-3 bottom-3 z-40 flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/95 p-3 shadow-[0_12px_32px_-8px_rgba(16,24,40,.35)] backdrop-blur lg:hidden" role="complementary" aria-label="Book a demo">
      <p class="min-w-0 flex-1 text-sm font-semibold leading-snug text-ink-900">{{ text }}</p>
      <NuxtLink :to="to" class="btn-primary shrink-0 px-4 py-2.5 text-sm" @click="$track.event('cta_click', { location: 'sticky_mobile', guide, target: 'demo' })">{{ label }}</NuxtLink>
      <button type="button" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-400 hover:bg-ink-50 hover:text-ink-700" aria-label="Close" @click="dismiss"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
// A slim bar on phones once the reader is a third of the way through a guide; hidden near the
// end of the page (the full call to action is there) and for the rest of the visit once closed.
const props = defineProps<{ guide: string; to: string; label: string; text: string }>()
const { $track } = useNuxtApp()
const show = ref(false)
let closed = false
function onScroll() {
  const h = document.documentElement.scrollHeight - window.innerHeight
  const y = window.scrollY
  show.value = !closed && h > 0 && y / h > 0.3 && h - y > 900
}
function dismiss() {
  closed = true
  show.value = false
  try { sessionStorage.setItem('mk_sticky_closed', '1') } catch { /* storage blocked */ }
}
onMounted(() => {
  try { closed = sessionStorage.getItem('mk_sticky_closed') === '1' } catch { closed = false }
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
void props
</script>

<style scoped>
.sticky-cta-enter-active, .sticky-cta-leave-active { transition: transform .25s ease, opacity .25s ease; }
.sticky-cta-enter-from, .sticky-cta-leave-to { transform: translateY(120%); opacity: 0; }
</style>
