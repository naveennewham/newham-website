<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div 
      v-for="(project, index) in filteredProjects" 
      :key="index"
      class="case-study-card glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg"
    >
      <div class="relative h-60 overflow-hidden">
        <img 
          :src="project.image" 
          :alt="project.title" 
          class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div class="absolute top-4 right-4">
          <span class="px-3 py-1 text-xs font-medium rounded-full bg-dark-800/80 backdrop-blur-sm text-white">
            {{ project.category }}
          </span>
        </div>
      </div>
      
      <div class="p-6">
        <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
        <p class="text-gray-400 text-sm mb-4 line-clamp-2">{{ project.description }}</p>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <i class="fa-solid fa-calendar-check text-gray-500 mr-1 text-xs"></i>
            <span class="text-gray-500 text-xs">{{ project.date }}</span>
          </div>
          
          <NuxtLink 
            :to="`/case-studies/${project.id}`" 
            class="text-primary-500 hover:text-primary-400 text-sm font-medium flex items-center"
          >
            View Details
            <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  activeFilter: {
    type: String,
    default: 'all'
  }
});

const filteredProjects = computed(() => {
  if (props.activeFilter === 'all') {
    return props.projects;
  }
  
  return props.projects.filter(project => project.category === props.activeFilter);
});
</script>
