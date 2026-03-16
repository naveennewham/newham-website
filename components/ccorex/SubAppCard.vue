<template>
  <template v-if="isExternal">
    <a :href="link" target="_blank" rel="noopener" class="group h-full">
      <div
        class="relative h-full p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 overflow-hidden glass-card cursor-pointer"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <!-- Background Glow Effect -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-teal-500/0 group-hover:from-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-300"
        ></div>
        <!-- Animated Border Glow -->
        <div
          v-if="isHovered"
          class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style="
            background: conic-gradient(
              from 0deg,
              rgba(6, 182, 212, 0.5),
              rgba(20, 184, 166, 0.3),
              rgba(6, 182, 212, 0.5)
            );
            animation: rotate-border 3s linear infinite;
            padding: 2px;
          "
        >
          <div class="absolute inset-[2px] bg-slate-900 rounded-2xl"></div>
        </div>
        <!-- Content -->
        <div class="relative z-10">
          <div class="mb-6 flex justify-center">
            <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <img :src="logo" :alt="name" class="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </div>
          </div>
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors">{{ name }}</h3>
          <p class="text-sm font-semibold text-cyan-400 text-center mb-4">{{ subtitle }}</p>
          <p class="text-gray-300 text-center mb-6 line-clamp-2">{{ description }}</p>
          <div class="space-y-3 mb-8">
            <div v-for="(feature, index) in features" :key="index" class="flex items-start gap-3 text-sm text-gray-300">
              <span class="text-cyan-400 font-bold mt-1">✓</span>
              <span>{{ feature }}</span>
            </div>
          </div>
          <div class="flex items-center justify-between pt-6 border-t border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
            <span class="text-cyan-400 font-semibold">Learn More</span>
            <svg class="w-5 h-5 text-cyan-400 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </a>
  </template>
  <NuxtLink v-else :to="link" class="group h-full">
    <div
      class="relative h-full p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 overflow-hidden glass-card cursor-pointer"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <!-- Background Glow Effect -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-teal-500/0 group-hover:from-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-300"
      ></div>

      <!-- Animated Border Glow -->
      <div
        v-if="isHovered"
        class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style="
          background: conic-gradient(
            from 0deg,
            rgba(6, 182, 212, 0.5),
            rgba(20, 184, 166, 0.3),
            rgba(6, 182, 212, 0.5)
          );
          animation: rotate-border 3s linear infinite;
          padding: 2px;
        "
      >
        <div class="absolute inset-[2px] bg-slate-900 rounded-2xl"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10">
        <!-- App Logo -->
        <div class="mb-6 flex justify-center">
          <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <img
              :src="logo"
              :alt="name"
              class="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </div>
        </div>

        <!-- App Name -->
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors">
          {{ name }}
        </h3>

        <!-- Subtitle/Badge -->
        <p class="text-sm font-semibold text-cyan-400 text-center mb-4">{{ subtitle }}</p>

        <!-- Description -->
        <p class="text-gray-300 text-center mb-6 line-clamp-2">
          {{ description }}
        </p>

        <!-- Features -->
        <div class="space-y-3 mb-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="flex items-start gap-3 text-sm text-gray-300"
          >
            <span class="text-cyan-400 font-bold mt-1">✓</span>
            <span>{{ feature }}</span>
          </div>
        </div>

        <!-- Learn More Button -->
        <div class="flex items-center justify-between pt-6 border-t border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
          <span class="text-cyan-400 font-semibold">Learn More</span>
          <svg
            class="w-5 h-5 text-cyan-400 transform group-hover:translate-x-2 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

const isHovered = ref(false)
const isExternal = computed(() => typeof link === 'string' && link.startsWith('http'))
</script>

<style scoped>
.glass-card {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
}

@keyframes rotate-border {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
