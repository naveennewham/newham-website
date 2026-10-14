<template>
  <section class="section-tight">
    <div class="container-site">
      <div class="relative isolate overflow-hidden rounded-[2rem] bg-[#03191f] px-6 py-16 sm:px-12">
        <UiVideoBg v-if="video" :mp4="`/videos/${video}.mp4`" :poster="`/videos/${video}-poster.webp`" overlay="bg-gradient-to-r from-[#03191f] via-[#03191f]/90 to-[#03191f]/50" />
        <FxAurora v-else palette="ai" />
        <div class="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 class="h-section text-white">{{ title }}</h2>
            <p class="lead-dark mt-4 max-w-2xl">{{ lead }}</p>
          </div>
          <div class="flex flex-wrap gap-3 lg:justify-end">
            <NuxtLink :to="primaryTo" class="btn-accent">{{ primaryLabel }} <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <NuxtLink v-if="secondaryTo" :to="secondaryTo" class="btn-ghost-dark">{{ secondaryLabel }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  video?: string
  title?: string; lead?: string
  primaryLabel?: string; primaryTo?: string
  secondaryLabel?: string; secondaryTo?: string
}>(), {
  title: 'See CCorex run your business',
  lead: 'Book a 30-minute live demo. We will walk through your own estimating, project and payroll workflow — not a generic slide deck.',
  primaryLabel: 'Book a live demo', primaryTo: '/contact',
  secondaryLabel: 'Explore pricing', secondaryTo: '/pricing'
})
</script>
