<template>
  <section class="relative isolate overflow-hidden bg-[#03191f] text-white">
    <FxAurora palette="ai" />
    <div class="bg-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden="true"></div>
    <div class="container-site relative grid gap-12 pb-24 pt-16 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:pt-20">
      <div>
        <nav aria-label="Breadcrumb" class="mb-6 text-xs text-ink-300">
          <NuxtLink to="/products" class="hover:text-white">Products</NuxtLink>
          <span class="mx-2" aria-hidden="true">/</span><span class="text-white">{{ app.name }}</span>
        </nav>
        <div class="flex flex-wrap items-center gap-3">
          <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg" :class="app.color"><i :class="app.icon" aria-hidden="true"></i></span>
          <span class="eyebrow-dark">{{ app.name }} · {{ app.category }}</span>
          <span v-if="app.ai" class="inline-flex items-center gap-1.5 rounded-full bg-ai-gradient px-3 py-1 text-xs font-semibold"><i class="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>AI</span>
        </div>
        <h1 class="h-display mt-6 text-white"><slot name="title">{{ app.tagline }}</slot></h1>
        <p class="lead-dark mt-5 max-w-xl"><slot name="lead">{{ app.summary }}</slot></p>
        <ul v-if="points?.length" class="mt-6 flex flex-wrap gap-2">
          <li v-for="p in points" :key="p" class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-100">
            <i class="fa-solid fa-check text-cyan-400" aria-hidden="true"></i>{{ p }}
          </li>
        </ul>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink to="/contact" class="btn-accent">Book a live demo <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
          <NuxtLink to="/pricing" class="btn-ghost-dark">See plans</NuxtLink>
          <button v-if="tour" type="button" class="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm font-semibold text-white hover:text-cyan-400" @click="tourOpen = true">
            <span class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20"><i class="fa-solid fa-play ml-0.5 text-xs" aria-hidden="true"></i></span>Watch the tour<span v-if="tourDuration" class="text-ink-300">· {{ tourDuration }}</span>
          </button>
        </div>
      </div>
      <div class="lg:-mr-24">
        <slot name="visual">
          <UiBrowserFrame v-if="screenshot" :src="screenshot" :alt="screenshotAlt ?? `${app.name} screen`" :url="url" dark eager />
        </slot>
      </div>
    </div>
    <UiVideoLightbox v-if="tour" v-model:open="tourOpen" :src="`/videos/tour-${tour}.mp4`" :poster="`/videos/tour-${tour}-poster.webp`" :title="`${app.name} tour`" />
  </section>
</template>

<script setup lang="ts">
import { appBySlug } from '~/data/apps'
const props = defineProps<{ slug: string; points?: string[]; screenshot?: string; screenshotAlt?: string; url?: string; tour?: string; tourDuration?: string }>()
const tourOpen = ref(false)
const app = computed(() => {
  const a = appBySlug(props.slug)
  if (!a) throw new Error(`Unknown app ${props.slug}`)
  return a
})
</script>
