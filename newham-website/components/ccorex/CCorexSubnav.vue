<template>
  <nav class="sticky top-16 z-30 w-full border-b border-cyan-500/10 bg-slate-900/70 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-3">
        <div class="flex items-center gap-2 text-cyan-400 font-semibold">
          <img src="~/assets/ccorex/Corex_logo.png" alt="CCorex" class="h-6 w-auto brightness-0 invert" />
          <span>CCorex Suite</span>
        </div>
        <ul class="hidden md:flex items-center gap-2">
          <li><a href="#overview" class="subnav-link">Overview</a></li>
          <li><a href="#apps" class="subnav-link">Apps</a></li>
          <li><a href="#integration" class="subnav-link">Integration</a></li>
          <li><a href="#benefits" class="subnav-link">Benefits</a></li>
          <li>
            <NuxtLink to="/pricing" class="subnav-link">Pricing</NuxtLink>
          </li>
          <li><a href="#faq" class="subnav-link">FAQ</a></li>
        </ul>
        <div class="flex items-center gap-2">
          <NuxtLink
            to="/appointment"
            class="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
          >
            Schedule demo
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// purely presentational
</script>

<style scoped>
.subnav-link {
  @apply px-3 py-2 rounded-lg text-gray-300 hover:text-slate-900 hover:bg-cyan-500/80 transition-colors;
}
</style>
