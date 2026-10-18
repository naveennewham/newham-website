<template>
  <footer class="bg-brand-950 text-ink-300">
    <div class="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
      <div class="max-w-xs">
        <img src="~/assets/Newham_Logo_white.png" alt="Newham" class="h-7 w-auto" width="110" height="28" loading="lazy" />
        <p class="mt-4 text-sm leading-relaxed">Newham Technological Solutions builds CCorex construction software and provides specialist M&amp;E engineers and engineering services to construction businesses in Singapore and India.</p>
        <p class="mt-4 text-sm"><a :href="`mailto:${email}`" class="font-semibold text-white hover:text-cyan-400">{{ email }}</a></p>
      </div>
      <div>
        <h2 class="text-sm font-semibold text-white">CCorex software</h2>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li v-for="a in ccorexApps" :key="a.slug"><a :href="ccorexAppUrl(a.slug)" target="_blank" rel="noopener" class="hover:text-white">{{ a.name }}</a></li>
          <li><a :href="CCOREX_SIGNIN_URL" class="hover:text-white">Sign in to CCorex</a></li>
          <li><a :href="CCOREX_URL" target="_blank" rel="noopener" class="hover:text-white">ccorex.com <i class="fa-solid fa-arrow-up-right-from-square text-[10px]" aria-hidden="true"></i></a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-sm font-semibold text-white">Services</h2>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><NuxtLink to="/talent-outsourcing" class="hover:text-white">Engineering talent outsourcing</NuxtLink></li>
          <li><NuxtLink to="/engineering-services" class="hover:text-white">Construction engineering services</NuxtLink></li>
          <li><NuxtLink to="/boq-estimation-services" class="hover:text-white">BOQ &amp; estimation services</NuxtLink></li>
          <li><NuxtLink to="/fire-protection-design" class="hover:text-white">Fire protection design</NuxtLink></li>
          <li><NuxtLink to="/shop-drawing-services" class="hover:text-white">Shop drawings &amp; as-builts</NuxtLink></li>
          <li><NuxtLink to="/industries" class="hover:text-white">Industries</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h2 class="text-sm font-semibold text-white">Company</h2>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><NuxtLink to="/about" class="hover:text-white">About Newham</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink></li>
          <li><NuxtLink to="/appointment" class="hover:text-white">Book a discovery call</NuxtLink></li>
        </ul>
        <p class="mt-6 text-sm leading-relaxed"><span class="font-semibold text-white">Singapore</span><br />160 Robinson Road, #14-04 SBF Center<br />Newham Solutions Pte. Ltd. · UEN 202346654E</p>
        <p class="mt-3 text-sm leading-relaxed"><span class="font-semibold text-white">Chennai, India</span><br />Perungudi, OMR</p>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="container-site flex flex-col gap-2 py-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Newham Technological Solutions. CCorex is a product of Newham.</p>
        <p class="flex flex-wrap items-center gap-x-4 gap-y-1">
          <NuxtLink to="/privacy" class="hover:text-white">Privacy</NuxtLink>
          <button type="button" class="hover:text-white" @click="openSettings">Cookie settings</button>
          <span>Software and specialist engineers for construction in Singapore and India.</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ccorexApps, ccorexAppUrl, CCOREX_URL, CCOREX_SIGNIN_URL } from '~/data/ccorex'
const email = 'admin@newhamtech.com'
const year = new Date().getFullYear()
const { openSettings } = useConsent()
</script>
