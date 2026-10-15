<template>
  <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="a in list" :key="a.slug">
      <NuxtLink :to="`/products/${a.slug}`" class="card-hover group flex h-full flex-col">
        <div class="flex items-center justify-between">
          <span class="icon-tile" :class="a.color"><i :class="a.icon" aria-hidden="true"></i></span>
          <span class="flex gap-1.5">
            <span v-if="a.statusNote" class="chip" :class="a.status === 'preview' ? 'border-amber-200 bg-amber-50 text-amber-800' : ''">{{ a.statusNote }}</span>
            <span v-if="a.ai" class="chip-ai"><i class="fa-solid fa-wand-magic-sparkles text-[10px]" aria-hidden="true"></i>AI</span>
          </span>
        </div>
        <p class="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-500">{{ a.category }}</p>
        <h3 class="mt-1 text-xl font-bold">{{ a.name }}</h3>
        <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{{ a.summary }}</p>
        <span class="mt-5 text-sm font-semibold text-brand-700 group-hover:text-brand-900">Explore {{ a.name }} <i class="fa-solid fa-arrow-right ml-1 text-xs transition-transform group-hover:translate-x-0.5" aria-hidden="true"></i></span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { apps, type CcorexApp } from '~/data/apps'
const props = defineProps<{ only?: string[]; exclude?: string[] }>()
const list = computed<CcorexApp[]>(() => apps.filter((a) => (!props.only || props.only.includes(a.slug)) && !props.exclude?.includes(a.slug)))
</script>
