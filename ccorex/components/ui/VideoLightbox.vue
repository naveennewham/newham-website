<template>
  <Teleport to="body">
    <Transition name="lb">
      <div v-if="open" class="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b111c]/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" :aria-label="title" @click.self="close" @keydown.esc="close">
        <div class="relative w-full max-w-5xl">
          <button ref="closeBtn" type="button" class="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close video" @click="close">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
          <video class="aspect-video w-full rounded-2xl bg-black shadow-frame" :src="src" :poster="poster" controls autoplay playsinline></video>
          <p class="mt-3 text-center text-sm text-ink-300">{{ title }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ open: boolean; src: string; poster?: string; title: string }>()
const emit = defineEmits<{ 'update:open': [boolean] }>()
const closeBtn = ref<HTMLButtonElement | null>(null)
let returnFocus: Element | null = null
function close() { emit('update:open', false) }
function onKey(e: KeyboardEvent) { if (e.key === 'Escape') close() }
watch(() => props.open, async (v) => {
  if (v) {
    returnFocus = document.activeElement
    document.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    await nextTick(); closeBtn.value?.focus()
  } else {
    document.removeEventListener('keydown', onKey)
    document.documentElement.style.overflow = ''
    ;(returnFocus as HTMLElement | null)?.focus?.()
  }
})
onBeforeUnmount(() => { document.removeEventListener('keydown', onKey); document.documentElement.style.overflow = '' })
</script>

<style scoped>
.lb-enter-active, .lb-leave-active { transition: opacity .25s ease; }
.lb-enter-from, .lb-leave-to { opacity: 0; }
</style>
