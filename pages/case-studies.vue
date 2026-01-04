<template>
  <div class="case-studies-page">
    <!-- Hero Section -->
    <CaseStudiesHero />
    
    <!-- Case Studies Content -->
    <section class="py-12 relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filters -->
        <CaseStudiesFilter 
          :categories="categories" 
          :total-count="caseStudies.length"
          :filtered-count="filteredProjects.length"
          @filter-change="setActiveFilter"
        />
        
        <!-- Projects Grid -->
        <CaseStudiesGrid 
          :projects="caseStudies" 
          :active-filter="activeFilter"
        />
        
        <!-- Pagination -->
        <div class="mt-12 flex justify-center">
          <div class="glass-panel rounded-lg inline-flex">
            <button 
              v-for="page in 3" 
              :key="page"
              :class="[
                'px-4 py-2 text-sm font-medium',
                currentPage === page 
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white' 
                  : 'text-gray-300 hover:bg-dark-700'
              ]"
              @click="currentPage = page"
            >
              {{ page }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CaseStudiesHero from '~/components/case-studies/CaseStudiesHero.vue';
import CaseStudiesFilter from '~/components/case-studies/CaseStudiesFilter.vue';
import CaseStudiesGrid from '~/components/case-studies/CaseStudiesGrid.vue';
import { caseStudies } from '~/utils/caseStudiesData';

useHead({
  title: 'Case Studies'
})

// Extract unique categories
const categories = [...new Set(caseStudies.map(project => project.category))];

// Filter state
const activeFilter = ref('all');
const currentPage = ref(1);

const setActiveFilter = (filter) => {
  activeFilter.value = filter;
  currentPage.value = 1; // Reset to first page when filter changes
};

// Computed properties for filtering
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return caseStudies;
  }
  
  return caseStudies.filter(project => project.category === activeFilter.value);
});
</script>