<template>
  <section class="section-tight">
    <div class="container-site">
      <div class="relative isolate overflow-hidden rounded-[2rem] bg-[#03191f] px-6 py-16 sm:px-12">
        <FxAurora palette="teal" />
        <div class="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 class="h-section text-white">{{ title }}</h2>
            <p class="lead-dark mt-4 max-w-2xl">{{ lead }}</p>
          </div>
          <div class="flex flex-wrap gap-3 lg:justify-end">
            <NuxtLink :to="primaryTo" class="btn-accent">{{ primaryLabel }} <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
            <NuxtLink v-if="secondaryTo" :to="secondaryTo" class="btn-ghost-dark" :target="external ? '_blank' : undefined" :rel="external ? 'noopener' : undefined">{{ secondaryLabel }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Closing dark CTA band. Newham defaults: discovery call (/appointment) + contact.
const props = withDefaults(defineProps<{
  title?: string; lead?: string
  primaryLabel?: string; primaryTo?: string
  secondaryLabel?: string; secondaryTo?: string
}>(), {
  title: 'Tell us what your next project needs',
  lead: 'Book a 30-minute discovery call. We will look at your pipeline and suggest the right mix of CCorex software, dedicated engineers and engineering services — no obligation.',
  primaryLabel: 'Book a discovery call', primaryTo: '/appointment',
  secondaryLabel: 'Contact us', secondaryTo: '/contact'
})
const external = computed(() => /^https?:/.test(props.secondaryTo || ''))
</script>
