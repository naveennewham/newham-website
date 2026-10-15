<template>
  <div>
    <UiProductHero :slug="slug" :points="points">
      <template #visual>
        <div class="mx-auto grid max-w-md grid-cols-2 gap-3 lg:mr-28" aria-hidden="true">
          <div v-for="f in features.slice(0, 4)" :key="f.title" class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <i :class="f.icon" class="text-xl text-cyan-400"></i>
            <p class="mt-3 text-sm font-semibold text-white">{{ f.title }}</p>
          </div>
        </div>
      </template>
    </UiProductHero>

    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="Features" :title="featuresTitle" :lead="featuresLead" />
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="f in features" :key="f.title"><UiFeatureCard :icon="f.icon" :title="f.title" :text="f.text" /></li>
        </ul>
      </div>
    </section>

    <section class="section bg-ink-50">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <UiSectionHeader eyebrow="Part of CCorex" :title="`${app.name} works like the rest of the suite`" lead="No separate accounts or logins to manage." />
        <ul class="grid gap-4 sm:grid-cols-2">
          <li v-for="p in platform" :key="p.title" class="card">
            <i :class="p.icon" class="text-brand-600" aria-hidden="true"></i>
            <p class="mt-3 font-semibold text-ink-900">{{ p.title }}</p>
            <p class="mt-1 text-sm text-ink-600">{{ p.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <UiCtaBand :title="`Ask us about ${app.name}`" lead="Tell us how your team handles documents today and we will show you where it fits in CCorex." secondary-label="See all apps" secondary-to="/products" />
  </div>
</template>

<script setup lang="ts">
// Simple, generic app page for supporting apps (Deep Drive, PDF Editor):
// features only, no product screenshots.
import { appBySlug } from '~/data/apps'

const props = defineProps<{
  slug: string
  points: string[]
  featuresTitle: string
  featuresLead: string
  features: { icon: string; title: string; text: string }[]
  extraPlatform?: { icon: string; title: string; text: string }[]
}>()
const app = computed(() => appBySlug(props.slug)!)
const platform = computed(() => [
  { icon: 'fa-solid fa-key', title: 'Same sign-in', text: 'Opens from the CCorex portal, already signed in.' },
  { icon: 'fa-solid fa-user-shield', title: 'Same users and roles', text: 'People and access are managed once, centrally.' },
  { icon: 'fa-solid fa-building-shield', title: 'Your organisation only', text: 'Each organisation’s files are kept separate.' },
  ...(props.extraPlatform ?? [{ icon: 'fa-solid fa-box-open', title: 'Included with your subscription', text: 'No separate purchase for the supporting apps.' }])
])
</script>
