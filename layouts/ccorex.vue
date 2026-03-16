<template>
  <div class="app-wrapper gradient-bg min-h-screen">
    <CCorexSubnav />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/layout/Footer.vue'
import CCorexSubnav from '~/components/ccorex/CCorexSubnav.vue'

if (process.client) {
  document.documentElement.classList.add('dark')
}
</script>
