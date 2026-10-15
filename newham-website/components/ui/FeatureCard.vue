<template>
  <component :is="to ? NuxtLink : 'div'" :to="to" class="card-hover group block h-full">
    <span class="icon-tile" :class="tone"><i :class="icon" aria-hidden="true"></i></span>
    <h3 class="mt-5 text-lg font-semibold">{{ title }}</h3>
    <p class="mt-2 text-sm leading-relaxed text-ink-600"><slot>{{ text }}</slot></p>
    <span v-if="to && linkLabel" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:text-brand-900">{{ linkLabel }} <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></span>
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'
// Icon + title + text card. Optional `to` makes the whole card a link.
withDefaults(defineProps<{ icon: string; title: string; text?: string; tone?: string; to?: string; linkLabel?: string }>(), { tone: '' })
</script>
