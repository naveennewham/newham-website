<template>
  <footer class="bg-brand-950 text-ink-300">
    <div class="container-site grid gap-10 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
      <div class="max-w-xs">
        <img src="/ccorex-logo-sm.png" alt="CCorex" class="h-7 w-auto brightness-0 invert" width="112" height="28" loading="lazy" />
        <p class="mt-4 text-sm leading-relaxed">The AI-powered platform for construction businesses — estimating, project delivery and HR &amp; payroll on one login.</p>
        <p class="mt-4 text-sm">Delivered by <a :href="config.public.newhamUrl" class="font-semibold text-white hover:text-cyan-400">Newham Technological Solutions</a>, Singapore.</p>
        <p class="mt-2 text-xs text-ink-400">Newham Solutions Pte. Ltd. · UEN 202346654E<br />101 Kitchener Road, #03-14, Jalan Besar Plaza, Singapore 208511</p>
      </div>
      <div>
        <h2 class="text-sm font-semibold text-white">Products</h2>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li v-for="a in apps" :key="a.slug"><NuxtLink :to="`/products/${a.slug}`" class="hover:text-white">{{ a.name }}</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h2 class="text-sm font-semibold text-white">Platform</h2>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><NuxtLink to="/platform" class="hover:text-white">How it works</NuxtLink></li>
          <li><NuxtLink to="/integrations" class="hover:text-white">Integrations</NuxtLink></li>
          <li><NuxtLink to="/solutions" class="hover:text-white">Solutions by role</NuxtLink></li>
          <li><NuxtLink to="/industries" class="hover:text-white">Industries</NuxtLink></li>
          <li><NuxtLink to="/pricing" class="hover:text-white">Pricing</NuxtLink></li>
          <li><NuxtLink to="/estimating/fire-protection" class="hover:text-white">Fire protection estimating</NuxtLink></li>
          <li><NuxtLink to="/estimating/acmv" class="hover:text-white">ACMV estimating</NuxtLink></li>
          <li><NuxtLink to="/estimating/elv" class="hover:text-white">ELV estimating</NuxtLink></li>
          <li><NuxtLink to="/solutions/construction-cost-control-software" class="hover:text-white">Construction cost control software</NuxtLink></li>
          <li><NuxtLink to="/solutions/progress-claim-software" class="hover:text-white">Progress claim software</NuxtLink></li>
          <li><NuxtLink to="/solutions/construction-hr-software" class="hover:text-white">HR software for construction</NuxtLink></li>
          <li><NuxtLink to="/solutions/construction-payroll-software" class="hover:text-white">Construction payroll software</NuxtLink></li>
          <li><NuxtLink to="/solutions/foreign-worker-attendance-app" class="hover:text-white">Foreign worker attendance app</NuxtLink></li>
          <li><NuxtLink to="/compare/costx-cubicost-alternative" class="hover:text-white">CostX &amp; Cubicost alternative</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h2 class="text-sm font-semibold text-white">Company</h2>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><NuxtLink to="/about" class="hover:text-white">About</NuxtLink></li>
          <li><NuxtLink to="/resources" class="hover:text-white">Resources</NuxtLink></li>
          <li><NuxtLink to="/faq" class="hover:text-white">FAQ</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-white">Contact &amp; demo</NuxtLink></li>
          <li><a href="mailto:admin@newhamtech.com" class="hover:text-white">admin@newhamtech.com</a></li>
          <li><a href="tel:+6598804197" class="hover:text-white">+65 9880 4197</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="container-site flex flex-col gap-2 py-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Newham Technological Solutions. CCorex is a product of Newham.</p>
        <p class="flex flex-wrap items-center gap-x-4 gap-y-1">
          <NuxtLink to="/privacy" class="hover:text-white">Privacy</NuxtLink>
          <button type="button" class="hover:text-white" @click="openSettings">Cookie settings</button>
          <span>Built for construction firms in Singapore and India.</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { apps } from '~/data/apps'
const config = useRuntimeConfig()
const year = new Date().getFullYear()
const { openSettings } = useConsent()
</script>
