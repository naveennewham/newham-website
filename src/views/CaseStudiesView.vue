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
import CaseStudiesHero from '../components/case-studies/CaseStudiesHero.vue';
import CaseStudiesFilter from '../components/case-studies/CaseStudiesFilter.vue';
import CaseStudiesGrid from '../components/case-studies/CaseStudiesGrid.vue';

// Sample data for case studies
const caseStudies = [
  {
    id: 'cs1',
    title: 'Modern Office Tower Construction',
    description: 'Implementing BIM and project management solutions for a 40-story office tower, reducing construction time by 15%.',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'June 2023',
    client: 'Global Developments Inc.',
    technologies: ['BIM', 'Project Management', 'IoT Sensors']
  },
  {
    id: 'cs2',
    title: 'Smart Home Community',
    description: 'Developing integrated smart home systems for a 200-unit residential community with centralized management.',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'April 2023',
    client: 'EcoLiving Developments',
    technologies: ['IoT', 'Smart Home', 'Energy Management']
  },
  {
    id: 'cs3',
    title: 'Highway Bridge Monitoring System',
    description: 'Implementing real-time structural health monitoring for a major highway bridge using IoT sensors and predictive analytics.',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1545158535-c3f7168c28b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'March 2023',
    client: 'State Transportation Department',
    technologies: ['Structural Monitoring', 'IoT', 'Analytics']
  },
  {
    id: 'cs4',
    title: 'Manufacturing Facility Automation',
    description: 'Modernizing a manufacturing facility with automated systems and digital twins for improved efficiency and quality control.',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3b4b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'January 2023',
    client: 'Precision Manufacturing Co.',
    technologies: ['Automation', 'Digital Twin', 'Quality Control']
  },
  {
    id: 'cs5',
    title: 'Hospital Expansion Project',
    description: 'Managing a complex hospital expansion with specialized healthcare construction requirements and minimal disruption to operations.',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'December 2022',
    client: 'Regional Medical Center',
    technologies: ['Healthcare Construction', 'BIM', 'Project Management']
  },
  {
    id: 'cs6',
    title: 'Shopping Mall Renovation',
    description: 'Comprehensive renovation of a 25-year-old shopping mall with minimal disruption to retail operations and improved energy efficiency.',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'October 2022',
    client: 'Urban Retail Properties',
    technologies: ['Renovation', 'Energy Efficiency', 'Retail Construction']
  }
];

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
