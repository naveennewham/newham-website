<template>
  <div class="min-h-screen gradient-bg text-white">
    <Navbar />
    <main class="pt-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
if (process.client) document.documentElement.classList.add('dark')
</script>

<style scoped>
.gradient-bg {
  background: radial-gradient(1200px 600px at 50% 0%, rgba(34,211,238,0.06), transparent),
              radial-gradient(1200px 600px at 80% 40%, rgba(45,212,191,0.06), transparent),
              linear-gradient(to bottom, #0f172a, #0b1220 40%, #0f172a);
}
</style>
