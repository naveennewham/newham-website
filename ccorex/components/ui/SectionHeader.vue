<template>
  <div :class="[center ? 'mx-auto text-center' : '', 'max-w-3xl']">
    <p v-if="eyebrow" :class="dark ? 'eyebrow-dark' : 'eyebrow'">{{ eyebrow }}</p>
    <component :is="as" class="h-section mt-3" :class="dark ? 'text-white' : ''">
      <slot name="title">{{ title }}</slot>
    </component>
    <p v-if="lead || $slots.lead" class="mt-4" :class="dark ? 'lead-dark' : 'lead'"><slot name="lead">{{ lead }}</slot></p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ eyebrow?: string; title?: string; lead?: string; center?: boolean; dark?: boolean; as?: string }>(), { as: 'h2' })
</script>
