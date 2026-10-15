<template>
  <button
    type="button"
    class="relative flex h-9 w-16 items-center rounded-full border border-ink-200 bg-ink-50 p-1 transition-colors"
    role="switch"
    :aria-checked="dark"
    :aria-label="dark ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggle"
  >
    <span class="absolute left-1 top-1 h-7 w-7 rounded-full bg-white shadow-card transition-transform duration-300 ease-out" :class="dark ? 'translate-x-7' : 'translate-x-0'" aria-hidden="true"></span>
    <i class="fa-solid fa-sun relative z-10 w-7 text-center text-xs" :class="dark ? 'text-ink-400' : 'text-amber-500'" aria-hidden="true"></i>
    <i class="fa-solid fa-moon relative z-10 w-7 text-center text-xs" :class="dark ? 'text-cyan-400' : 'text-ink-400'" aria-hidden="true"></i>
  </button>
</template>

<script setup lang="ts">
// Dark is the default (like the original site); the choice is remembered.
const dark = ref(true)
onMounted(() => { dark.value = document.documentElement.classList.contains('dark') })
function toggle() {
  const root = document.documentElement
  root.classList.add('theme-anim')
  dark.value = !dark.value
  root.classList.toggle('dark', dark.value)
  try { localStorage.setItem('theme', dark.value ? 'dark' : 'light') } catch { /* private mode */ }
  window.setTimeout(() => root.classList.remove('theme-anim'), 400)
}
</script>
