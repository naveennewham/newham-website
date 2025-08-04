<template>
  <div class="mb-12">
    <div class="glass-panel p-6 rounded-xl">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 class="text-xl font-semibold text-white mb-2">Filter Projects</h3>
          <p class="text-gray-400 text-sm">{{ filteredCount }} projects found</p>
        </div>
        
        <div class="flex flex-wrap gap-3">
          <button 
            @click="setActiveFilter('all')" 
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              activeFilter === 'all' 
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white' 
                : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
            ]"
          >
            All Projects
          </button>
          
          <button 
            v-for="category in categories" 
            :key="category"
            @click="setActiveFilter(category)"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              activeFilter === category 
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white' 
                : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  totalCount: {
    type: Number,
    required: true
  },
  filteredCount: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['filter-change']);

const activeFilter = ref('all');

const setActiveFilter = (filter) => {
  activeFilter.value = filter;
  emit('filter-change', filter);
};
</script>
