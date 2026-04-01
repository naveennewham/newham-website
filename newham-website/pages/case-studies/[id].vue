<template>
  <div class="case-study-detail-page">
    <div v-if="project" class="pt-24 pb-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
           <!-- Navigation -->
           <div class="mb-8">
            <NuxtLink to="/case-studies" class="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Case Studies
            </NuxtLink>
          </div>

          <!-- Hero Image -->
          <div class="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-glass-lg">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
            <div class="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <span class="px-3 py-1 text-sm font-medium rounded-full bg-primary-600/90 text-white mb-4 inline-block">
                {{ project.category }}
              </span>
              <h1 class="text-3xl md:text-5xl font-bold text-white">{{ project.title }}</h1>
            </div>
          </div>

          <!-- Content -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="md:col-span-2 space-y-8">
              <div class="glass-panel p-8 rounded-xl">
                <h2 class="text-2xl font-bold text-white mb-4">Project Overview</h2>
                <p class="text-gray-300 text-lg leading-relaxed">{{ project.description }}</p>
                <p class="text-gray-300 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              
              <div class="glass-panel p-8 rounded-xl">
                <h2 class="text-2xl font-bold text-white mb-4">The Challenge</h2>
                <p class="text-gray-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              <div class="glass-panel p-8 rounded-xl">
                <h2 class="text-2xl font-bold text-white mb-4">The Solution</h2>
                <p class="text-gray-300">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>

            <div class="space-y-6">
              <div class="glass-panel p-6 rounded-xl">
                <h3 class="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Project Details</h3>
                <ul class="space-y-4">
                  <li>
                    <span class="block text-gray-500 text-xs uppercase tracking-wider">Client</span>
                    <span class="text-white font-medium">{{ project.client }}</span>
                  </li>
                  <li>
                    <span class="block text-gray-500 text-xs uppercase tracking-wider">Date</span>
                    <span class="text-white font-medium">{{ project.date }}</span>
                  </li>
                  <li>
                    <span class="block text-gray-500 text-xs uppercase tracking-wider">Category</span>
                    <span class="text-white font-medium">{{ project.category }}</span>
                  </li>
                </ul>
              </div>

              <div class="glass-panel p-6 rounded-xl">
                <h3 class="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Technologies</h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="px-3 py-1 bg-dark-700 text-primary-300 text-xs rounded-lg border border-dark-600"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
        <NuxtLink to="/case-studies" class="btn-primary">Back to Case Studies</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { caseStudies } from '~/utils/caseStudiesData';

const route = useRoute();
const projectId = route.params.id;
const project = caseStudies.find(p => p.id === projectId);

useHead({
  title: project ? project.title : 'Case Study Not Found'
});
</script>
