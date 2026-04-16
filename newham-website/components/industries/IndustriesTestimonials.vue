<template>
  <section class="py-20 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,93,108,0.1),transparent_70%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Industry Success Stories
          </span>
        </h2>
        <p class="text-gray-300 max-w-3xl mx-auto">
          See how our industry-specific solutions have helped clients overcome challenges and achieve remarkable results.
        </p>
      </div>
      
      <div class="testimonials-slider relative">
        <!-- Navigation Arrows -->
        <button 
          @click="prevTestimonial" 
          class="absolute top-1/2 -left-4 md:-left-6 z-10 transform -translate-y-1/2 w-10 h-10 rounded-full glass-panel-light flex items-center justify-center text-white hover:text-secondary-400 transition-colors"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
          :disabled="currentIndex === 0"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        
        <button 
          @click="nextTestimonial" 
          class="absolute top-1/2 -right-4 md:-right-6 z-10 transform -translate-y-1/2 w-10 h-10 rounded-full glass-panel-light flex items-center justify-center text-white hover:text-secondary-400 transition-colors"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === testimonials.length - 1 }"
          :disabled="currentIndex === testimonials.length - 1"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        
        <!-- Testimonial Cards -->
        <div class="overflow-hidden">
          <div 
            class="testimonials-track flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
              class="testimonial-slide w-full flex-shrink-0 px-4"
            >
              <div class="glass-panel rounded-xl p-8 md:p-10 relative">
                <!-- Quote Icon -->
                <div class="absolute top-6 right-6 opacity-20">
                  <i class="fa-solid fa-quote-left text-4xl text-secondary-500"></i>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <!-- Left: Client Info -->
                  <div class="text-center md:text-left">
                    <div class="mb-4 relative inline-block">
                      <div class="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-secondary-600">
                        <img 
                          :src="testimonial.image" 
                          :alt="testimonial.name" 
                          class="w-full h-full object-cover"
                        />
                      </div>
                      <div class="absolute -bottom-2 -right-2 bg-primary-800 text-white p-1 rounded-full">
                        <i :class="testimonial.industryIcon" class="text-sm"></i>
                      </div>
                    </div>
                    
                    <h4 class="text-white font-bold">{{ testimonial.name }}</h4>
                    <p class="text-gray-400 text-sm">{{ testimonial.position }}</p>
                    <p class="text-secondary-500 text-sm mt-1">{{ testimonial.company }}</p>
                    
                    <div class="flex items-center justify-center md:justify-start mt-3">
                      <div v-for="i in 5" :key="i">
                        <i class="fa-solid fa-star text-sm" :class="i <= testimonial.rating ? 'text-secondary-500' : 'text-gray-600'"></i>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Right: Testimonial Content -->
                  <div class="md:col-span-2">
                    <p class="text-gray-300 italic mb-6">
                      "{{ testimonial.quote }}"
                    </p>
                    
                    <div class="mb-6">
                      <h5 class="text-white font-semibold mb-2">Project Highlights:</h5>
                      <ul class="space-y-2">
                        <li 
                          v-for="(highlight, hIndex) in testimonial.highlights" 
                          :key="hIndex"
                          class="flex items-start"
                        >
                          <span class="text-primary-500 mr-2 mt-1">
                            <i class="fa-solid fa-check"></i>
                          </span>
                          <span class="text-gray-400 text-sm">{{ highlight }}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                      <div class="text-sm">
                        <span class="text-gray-400">Industry: </span>
                        <span class="text-white">{{ testimonial.industry }}</span>
                      </div>
                      <div class="text-sm">
                        <span class="text-gray-400">Solution: </span>
                        <span class="text-white">{{ testimonial.solution }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pagination Dots -->
        <div class="flex justify-center mt-8 space-x-2">
          <button 
            v-for="(_, index) in testimonials" 
            :key="index"
            @click="currentIndex = index"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentIndex === index ? 'bg-secondary-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Testimonial data
const testimonials = [
  {
    name: "Michael Johnson",
    position: "Project Director",
    company: "Horizon Construction Group",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    industry: "Commercial Construction",
    industryIcon: 'fa-solid fa-building',
    solution: "Project Management Suite",
    quote: "Implementing Newham's project management solution transformed how we handle large-scale commercial projects. The real-time dashboards and integrated workflows have reduced our administrative overhead by 40% while improving on-time delivery rates.",
    highlights: [
      "Reduced project timeline by 22% through improved coordination",
      "Decreased change orders by 35% with better documentation",
      "Improved client satisfaction scores from 7.2 to 9.1"
    ]
  },
  {
    name: "Sarah Williams",
    position: "Operations Manager",
    company: "Greenfield Developments",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    industry: "Residential Development",
    industryIcon: 'fa-solid fa-house',
    solution: "Customer & Project Portal",
    quote: "The customer portal has revolutionized how we interact with homebuyers. Being able to offer virtual design selections and real-time construction updates has set us apart from competitors and significantly improved customer satisfaction.",
    highlights: [
      "Streamlined design selection process reduced decision time by 65%",
      "Customer support inquiries decreased by 47%",
      "Warranty management efficiency improved by 53%"
    ]
  },
  {
    name: "Robert Chen",
    position: "Chief Engineer",
    company: "InfraTech Solutions",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    rating: 5,
    industry: "Infrastructure",
    industryIcon: 'mdi mdi-bridge',
    solution: "Asset Management System",
    quote: "For our complex infrastructure projects, Newham's asset management system has been invaluable. The ability to track components from design through installation and into maintenance has provided unprecedented visibility and control.",
    highlights: [
      "Reduced asset lifecycle costs by 28% through predictive maintenance",
      "Improved regulatory compliance reporting efficiency by 60%",
      "Enhanced stakeholder communication with real-time progress updates"
    ]
  }
];

const currentIndex = ref(0);

// Navigation methods
const nextTestimonial = () => {
  if (currentIndex.value < testimonials.length - 1) {
    currentIndex.value++;
  }
};

const prevTestimonial = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<style scoped>
.testimonial-slide {
  min-width: 100%;
}

@media (min-width: 768px) {
  .testimonials-slider {
    padding: 0 2rem;
  }
}
</style>
