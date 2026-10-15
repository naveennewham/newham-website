<template>
  <span class="relative inline-grid align-bottom">
    <!-- Screen readers and crawlers get one stable phrase. -->
    <span class="sr-only">{{ words[0] }}</span>
    <span aria-hidden="true" class="invisible col-start-1 row-start-1 sm:whitespace-nowrap">{{ longest }}</span>
    <Transition name="fx-word" mode="out-in">
      <span :key="i" aria-hidden="true" class="col-start-1 row-start-1 inline-block sm:whitespace-nowrap" :class="wordClass">{{ words[i] }}</span>
    </Transition>
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ words: string[]; interval?: number; wordClass?: string }>(), { interval: 2600, wordClass: '' })
const i = ref(0)
const longest = computed(() => props.words.reduce((a, b) => (b.length > a.length ? b : a), ''))
let t: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  t = setInterval(() => { i.value = (i.value + 1) % props.words.length }, props.interval)
})
onBeforeUnmount(() => clearInterval(t))
</script>

<style scoped>
.fx-word-enter-active, .fx-word-leave-active { transition: transform .45s cubic-bezier(.2,.8,.2,1), opacity .45s; }
.fx-word-enter-from { transform: translateY(60%); opacity: 0; }
.fx-word-leave-to { transform: translateY(-60%); opacity: 0; }
/* Safari drops gradient (background-clip: text) words without these. */
[aria-hidden] { -webkit-box-decoration-break: clone; box-decoration-break: clone; }
</style>
