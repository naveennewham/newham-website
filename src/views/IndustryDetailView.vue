<template>
  <div class="industry-detail-page">
    <!-- Hero Section -->
    <section class="hero-section relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
      <!-- Dark Background with Geometric Elements -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-dark-900"></div>
        
        <!-- Diagonal Stripes -->
        <div class="absolute inset-0 opacity-5">
          <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#005D6C,#005D6C_1px,transparent_1px,transparent_10px)]">
          </div>
        </div>
        
        <!-- Geometric Shapes -->
        <div class="absolute top-20 right-20 w-40 h-40 border-2 border-primary-500/10 transform rotate-45"></div>
        <div class="absolute bottom-40 left-20 w-64 h-64 border-2 border-secondary-500/10 transform -rotate-12"></div>
        
        <!-- Diagonal Lines -->
        <div class="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-800/5 to-transparent skew-y-12"></div>
        <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary-800/5 to-transparent -skew-y-12"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div v-if="industry">
            <!-- Industry Image -->
            <div class="relative h-48 w-48 mx-auto mb-8 overflow-hidden rounded-xl">
              <img 
                :src="industry.image" 
                :alt="industry.name" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-50"></div>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              <span class="gradient-text">{{ industry.name }}</span>
              <span class="block text-white mt-2">Industry Solutions</span>
              <!-- Underline with geometric design -->
              <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-primary-500 skew-x-12"></span>
              <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-x-24 w-1/3 h-1 bg-secondary-500 -skew-x-12"></span>
            </h1>
          </div>
          <div v-else class="text-center">
            <div class="animate-pulse bg-dark-700 h-48 w-48 mx-auto mb-8 rounded-xl"></div>
            <div class="animate-pulse bg-dark-700 h-12 w-3/4 mx-auto mb-4 rounded"></div>
            <div class="animate-pulse bg-dark-700 h-8 w-1/2 mx-auto rounded"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Overview Section -->
    <section class="py-16 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-dark-900"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,172,200,0.05),transparent_70%)]"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div v-if="industry">
            <!-- Overview -->
            <div class="mb-12">
              <h2 class="text-3xl font-bold mb-6 gradient-text">Overview</h2>
              <p class="text-gray-300 text-lg leading-relaxed mb-6">
                {{ industry.description }}
              </p>
              <p class="text-gray-300 text-lg leading-relaxed">
                At Newham, we understand the unique challenges faced by {{ industry.name.toLowerCase() }} professionals. 
                Our tailored software solutions are designed to address these specific needs, 
                helping you streamline operations, reduce costs, and deliver projects more efficiently.
              </p>
            </div>
            
            <!-- Key Features -->
            <div class="mb-12">
              <h2 class="text-3xl font-bold mb-6 gradient-text">Key Features</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(feature, index) in industry.features" :key="index" 
                  class="p-6 glass-panel rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/20">
                  <div class="flex items-start">
                    <div class="mr-4 text-secondary-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-white mb-2">{{ feature }}</h3>
                      <p class="text-gray-400">
                        Our {{ feature.toLowerCase() }} solution helps you optimize workflows, 
                        reduce errors, and improve overall project outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Benefits -->
            <div class="mb-12">
              <h2 class="text-3xl font-bold mb-6 gradient-text">Benefits</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-6 glass-panel rounded-xl text-center">
                  <div class="text-primary-500 text-4xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-white mb-2">Increased Efficiency</h3>
                  <p class="text-gray-400">Streamline workflows and reduce manual tasks</p>
                </div>
                <div class="p-6 glass-panel rounded-xl text-center">
                  <div class="text-secondary-500 text-4xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
                  <p class="text-gray-400">Lower operational costs and improve ROI</p>
                </div>
                <div class="p-6 glass-panel rounded-xl text-center">
                  <div class="text-primary-500 text-4xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-white mb-2">Enhanced Quality</h3>
                  <p class="text-gray-400">Improve accuracy and consistency in deliverables</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <!-- Loading state -->
            <div class="animate-pulse space-y-8">
              <div class="bg-dark-700 h-8 w-1/4 rounded mb-6"></div>
              <div class="bg-dark-700 h-4 w-full rounded mb-2"></div>
              <div class="bg-dark-700 h-4 w-full rounded mb-2"></div>
              <div class="bg-dark-700 h-4 w-3/4 rounded mb-8"></div>
              
              <div class="bg-dark-700 h-8 w-1/4 rounded mb-6"></div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-dark-700 h-32 rounded"></div>
                <div class="bg-dark-700 h-32 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Case Studies Section -->
    <section class="py-16 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-dark-800"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(1,172,200,0.1),transparent_70%)]"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 gradient-text text-center">Related Case Studies</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="glass-panel rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/20">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Case Study 1" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2">Optimizing Project Delivery</h3>
                <p class="text-gray-300 mb-4">How our solutions helped a leading company reduce project delivery time by 30%.</p>
                <router-link to="/case-studies" class="inline-flex items-center text-secondary-400 hover:text-secondary-300 transition-colors duration-300">
                  Read Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </router-link>
              </div>
            </div>
            
            <div class="glass-panel rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/20">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Case Study 2" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2">Cost Efficiency Breakthrough</h3>
                <p class="text-gray-300 mb-4">How our client achieved 25% cost savings through intelligent automation.</p>
                <router-link to="/case-studies" class="inline-flex items-center text-secondary-400 hover:text-secondary-300 transition-colors duration-300">
                  Read Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-dark-900"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,172,200,0.1),transparent_70%)]"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6 gradient-text">Ready to Transform Your Operations?</h2>
          <p class="text-xl text-gray-300 mb-8">
            Contact us today to learn how our solutions can help your organization thrive.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link to="/contact" class="btn-primary text-lg px-8 py-3">
              Get in Touch
            </router-link>
            <router-link to="/industries" class="btn-secondary text-lg px-8 py-3">
              Explore Other Industries
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const industry = ref(null);

// Industry data - this would typically come from an API or store
const industries = [
  {
    id: 'commercial-construction',
    name: 'Commercial Construction',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive software solutions for commercial construction projects, from planning to completion. Our tools help project managers, engineers, and contractors collaborate effectively, manage resources efficiently, and deliver projects on time and within budget.',
    features: [
      'Project management and scheduling',
      'BIM integration and coordination',
      'Cost estimation and control',
      'Quality and safety management'
    ]
  },
  {
    id: 'residential-development',
    name: 'Residential Development',
    image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Tailored solutions for residential builders and developers to streamline processes and enhance customer experience. Our residential development software helps you manage multiple projects simultaneously, coordinate with contractors, and provide transparent updates to homebuyers.',
    features: [
      'Customer relationship management',
      'Design customization tools',
      'Construction progress tracking',
      'Warranty and maintenance management'
    ]
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Advanced software for infrastructure projects including roads, bridges, and public facilities. Our infrastructure solutions help government agencies and contractors manage complex, large-scale projects with multiple stakeholders, regulatory requirements, and long timelines.',
    features: [
      'Asset lifecycle management',
      'Regulatory compliance tools',
      'Environmental impact assessment',
      'Public stakeholder communication'
    ]
  },
  {
    id: 'industrial-facilities',
    name: 'Industrial Facilities',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Specialized solutions for industrial construction and facility management with focus on efficiency and safety. Our industrial facility software helps you design, build, and maintain manufacturing plants, warehouses, and other industrial spaces with an emphasis on operational efficiency.',
    features: [
      'Equipment integration and IoT',
      'Maintenance scheduling',
      'Safety protocol management',
      'Energy efficiency optimization'
    ]
  },
  {
    id: 'healthcare-facilities',
    name: 'Healthcare Facilities',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Custom software for healthcare construction projects addressing unique regulatory and operational requirements. Our healthcare facility solutions help you navigate complex regulations, ensure compliance with medical standards, and create spaces that promote healing and efficiency.',
    features: [
      'Medical equipment planning',
      'Infection control measures',
      'Patient flow optimization',
      'Regulatory compliance tracking'
    ]
  },
  {
    id: 'retail-commercial',
    name: 'Retail & Commercial',
    image: 'https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Retail-focused construction and management solutions that integrate with business operations. Our retail and commercial software helps you design, build, and manage spaces that enhance customer experience, optimize sales, and support your brand identity.',
    features: [
      'Store layout optimization',
      'Customer experience design',
      'Visual merchandising tools',
      'Facility management integration'
    ]
  }
];

// Get industry data based on route parameter
onMounted(() => {
  const industryId = route.params.id;
  industry.value = industries.find(ind => ind.id === industryId) || null;
  
  // If industry not found, redirect to industries page
  if (!industry.value && industryId) {
    // In a real app, you might want to redirect to a 404 page or industries page
    console.error('Industry not found:', industryId);
  }
});
</script>

<style scoped>
.gradient-text {
  @apply bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent;
}

.glass-panel {
  @apply bg-dark-800/50 backdrop-blur-sm border-t-2 border-l-2 border-dark-700/50;
}

.btn-primary {
  @apply bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-primary-900/20;
}

.btn-secondary {
  @apply bg-dark-700 hover:bg-dark-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 border border-dark-600;
}
</style>
