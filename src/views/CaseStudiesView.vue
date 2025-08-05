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
    id: 'acmv1',
    title: 'ACMV System Optimization for Data Center',
    description: 'Implementation of energy-efficient ACMV solutions for a major data center, resulting in 30% energy savings while maintaining optimal cooling performance.',
    category: 'ACMV Solutions',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'July 2023',
    client: 'TechCore Data Centers',
    technologies: ['Energy Efficiency', 'Smart Controls', 'Precision Cooling']
  },
  {
    id: 'fire1',
    title: 'Integrated Fire Fighting System for High-Rise',
    description: 'Design and implementation of comprehensive fire protection systems for a 50-story mixed-use development, exceeding SCDF compliance requirements.',
    category: 'Fire Fighting Systems',
    image: 'https://images.unsplash.com/photo-1599202875854-23b7cd490ff4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'June 2023',
    client: 'Skyline Developments',
    technologies: ['Smart Detection', 'Automated Suppression', 'Emergency Response']
  },
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
    id: 'elv1',
    title: 'Enterprise-Grade ELV Infrastructure',
    description: 'Design and implementation of comprehensive ELV systems including access control, CCTV, and structured cabling for a corporate headquarters.',
    category: 'ELV Solutions',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'May 2023',
    client: 'GlobalTech Corporation',
    technologies: ['Access Control', 'CCTV', 'Structured Cabling']
  },
  {
    id: 'ana1',
    title: 'Heritage Building A&A Project',
    description: 'Addition and alteration project for a heritage building, preserving historical elements while modernizing infrastructure and facilities.',
    category: 'A&A Solutions',
    image: 'https://images.unsplash.com/photo-1582650949011-13947d8266a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'April 2023',
    client: 'Heritage Conservation Trust',
    technologies: ['Heritage Conservation', 'Structural Reinforcement', 'MEP Upgrades']
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
  },
  {
    id: 'ai1',
    title: 'AI-Powered Predictive Maintenance System',
    description: 'Implementation of machine learning algorithms for predictive maintenance of HVAC systems across multiple commercial buildings, reducing downtime by 45%.',
    category: 'AI Technology',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'August 2023',
    client: 'Smart Property Management',
    technologies: ['Machine Learning', 'IoT Sensors', 'Predictive Analytics']
  },
  {
    id: 'cloud1',
    title: 'Cloud-Based Building Management Platform',
    description: 'Development of a comprehensive cloud platform integrating building systems, energy management, and maintenance workflows for a portfolio of 50+ properties.',
    category: 'Cloud Technology',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'July 2023',
    client: 'Regional Property Group',
    technologies: ['Cloud Infrastructure', 'Real-time Monitoring', 'Data Analytics']
  },
  {
    id: 'uiux1',
    title: 'User-Centered Facility Management App',
    description: 'Design and development of an intuitive mobile application for facility management staff, reducing training time by 60% and improving task completion rates.',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    date: 'June 2023',
    client: 'Facilities Management Inc.',
    technologies: ['User Research', 'Mobile App Design', 'Usability Testing']
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
