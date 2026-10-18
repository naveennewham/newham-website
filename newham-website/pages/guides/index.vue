<template>
  <div>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative py-16 lg:py-20">
        <p class="eyebrow-dark">Guides</p>
        <h1 class="h-display mt-4 max-w-3xl text-white">Practical guides for M&amp;E contractors</h1>
        <p class="lead-dark mt-5 max-w-2xl">Plain-language guides on estimating, M&amp;E design and commercial work, project delivery and running site teams in Singapore and India.</p>
      </div>
    </section>
    <section class="section">
      <div class="container-site">
        <ul v-if="guides.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="p in guides" :key="p.slug">
            <NuxtLink :to="`/guides/${p.slug}`" class="card card-hover flex h-full flex-col">
              <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">{{ p.minutes }} min read</p>
              <h2 class="mt-2 text-lg font-semibold text-ink-900">{{ p.title }}</h2>
              <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{{ p.description }}</p>
              <span class="mt-5 text-sm font-semibold text-brand-700">Read the guide <i class="fa-solid fa-arrow-right ml-1 text-xs" aria-hidden="true"></i></span>
            </NuxtLink>
          </li>
        </ul>
        <p v-else class="text-ink-600">The first guides are being written. In the meantime, <NuxtLink to="/appointment" class="font-semibold text-brand-700 underline">book a discovery call</NuxtLink>.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const site = useRuntimeConfig().public.siteUrl as string
useSeoMeta({ title: 'Guides for M&E contractors: estimating, design and delivery', description: 'Practical guides from Newham on M&E estimating, fire protection and commercial work, project delivery and site teams in Singapore and India.', ogTitle: 'Guides for M&E contractors — Newham', ogDescription: 'Practical guides on M&E estimating, fire protection design and project delivery.', ogUrl: `${site}/guides` })
// An empty guides page is thin content: keep it out of the index until the first guide is published.
useHead({ link: [{ rel: 'canonical', href: `${site}/guides` }], meta: guides.length ? [] : [{ name: 'robots', content: 'noindex, follow' }] })
</script>
