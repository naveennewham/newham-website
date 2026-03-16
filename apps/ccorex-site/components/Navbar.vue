<template>
  <header class="fixed top-0 inset-x-0 z-50">
    <nav class="mx-4 my-4 px-4 py-3 glass flex items-center justify-between rounded-xl">
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="/ccorex-logo.png" alt="CCorex" class="h-7 w-auto brightness-0 invert" />
        <span class="sr-only">CCorex Suite</span>
      </NuxtLink>
      <ul class="hidden md:flex items-center gap-6 text-gray-300">
        <li><NuxtLink to="/" class="hover:text-white">Home</NuxtLink></li>
        <li><NuxtLink to="/platform" class="hover:text-white">Platform</NuxtLink></li>
        <li><NuxtLink to="/products" class="hover:text-white">Products</NuxtLink></li>
        <li><NuxtLink to="/solutions" class="hover:text-white">Solutions</NuxtLink></li>
        <li><NuxtLink to="/industries" class="hover:text-white">Industries</NuxtLink></li>
        <li><NuxtLink to="/resources" class="hover:text-white">Resources</NuxtLink></li>
        <li><NuxtLink to="/pricing" class="hover:text-white">Pricing</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:text-white">About</NuxtLink></li>
      </ul>
      <div class="hidden md:flex items-center gap-3">
        <a href="/login" class="text-gray-300 hover:text-white">Login</a>
        <a href="/contact" class="px-4 py-2 rounded-lg bg-primary-500 text-slate-900 font-semibold hover:bg-primary-400 transition-all">Get Demo</a>
      </div>
      <button class="md:hidden" @click="open = !open" aria-label="toggle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6"><path fill="currentColor" d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </nav>
    <div v-if="open" class="glass mx-4 px-4 py-3 md:hidden rounded-xl">
      <ul class="flex flex-col gap-3 text-gray-300">
        <li><NuxtLink to="/" @click="open=false">Home</NuxtLink></li>
        <li><NuxtLink to="/platform" @click="open=false">Platform</NuxtLink></li>
        <li><NuxtLink to="/products" @click="open=false">Products</NuxtLink></li>
        <li><NuxtLink to="/solutions" @click="open=false">Solutions</NuxtLink></li>
        <li><NuxtLink to="/industries" @click="open=false">Industries</NuxtLink></li>
        <li><NuxtLink to="/resources" @click="open=false">Resources</NuxtLink></li>
        <li><NuxtLink to="/pricing" @click="open=false">Pricing</NuxtLink></li>
        <li><NuxtLink to="/about" @click="open=false">About</NuxtLink></li>
        <li><a href="/login" @click="open=false" class="text-gray-300">Login</a></li>
        <li><a href="/contact" @click="open=false" class="px-4 py-2 rounded-lg bg-primary-500 text-slate-900 font-semibold inline-block">Get Demo</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.glass { background: rgba(15,23,42,0.6); backdrop-filter: blur(10px); border: 1px solid rgba(34,211,238,0.15); }
</style>
