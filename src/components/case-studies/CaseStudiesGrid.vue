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
            <component :is="CalendarIcon" class="w-4 h-4 text-gray-500 mr-1" />
            <span class="text-gray-500 text-xs">{{ project.date }}</span>
          </div>
          
          <router-link 
            :to="`/case-studies/${project.id}`" 
            class="text-primary-500 hover:text-primary-400 text-sm font-medium flex items-center"
          >
            View Details
            <component :is="ArrowRightIcon" class="w-4 h-4 ml-1" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h, computed } from 'vue';

// SVG Icons as render functions
const CalendarIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>'
});

const ArrowRightIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>'
});

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
