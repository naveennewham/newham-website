<template>
  <section id="early-access" class="section scroll-mt-20 bg-ink-50">
    <div class="container-site">
      <UiSectionHeader eyebrow="Singapore pack · early access" :title="title" :lead="lead" />
      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="f in features" :key="f.slug" class="card flex flex-col">
          <div class="flex items-start justify-between gap-3">
            <span class="icon-tile"><i :class="f.icon" aria-hidden="true"></i></span>
            <span class="rounded-full bg-cyan-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-700 ring-1 ring-cyan-200">Early access</span>
          </div>
          <h3 class="mt-5 text-lg font-semibold">{{ f.title }}</h3>
          <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{{ f.text }}</p>
          <NuxtLink :to="{ path: '/contact', query: { interest: f.slug } }" class="btn-secondary mt-5 self-start">Request early access <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Features offered as early access; each button opens the demo form tagged with the feature.
import { earlyAccess } from '~/data/earlyAccess'

const props = withDefaults(defineProps<{ items: string[]; title?: string; lead?: string }>(), {
  title: 'Built for Singapore contractors — join early access',
  lead: 'These features are in early access. Request access and we will show you where they stand in your demo.'
})
const features = computed(() => props.items.map((s) => earlyAccess.find((f) => f.slug === s)).filter((f) => !!f))
</script>
