<template>
  <section class="industries-hero-section relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,93,108,0.15),transparent_50%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(1,172,200,0.1),transparent_30%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" v-scroll-animation="'fade-up'">
            <span class="text-white">Industry-Specific</span>
            <span class="block mt-2 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Technology Solutions</span>
          </h1>
          
          <p class="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl" v-scroll-animation="'fade-up'">
            We deliver tailored software solutions that address the unique challenges of various industries, with deep expertise in construction and related sectors.
          </p>
          
          <div class="flex flex-wrap gap-4" v-scroll-animation="'fade-up'">
            <a href="#industry-cards" class="btn-primary">
              Explore Industries
            </a>
            <NuxtLink to="/contact" class="btn-outline">
              Discuss Your Industry
            </NuxtLink>
          </div>
          
          <!-- Industry Stats -->
          <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6" v-scroll-animation="'fade-up'">
            <div v-for="(stat, index) in industryStats" :key="index" class="glass-panel p-4 rounded-lg text-center">
              <div class="text-2xl md:text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
              <div class="text-sm text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        
        <!-- Hero Image -->
        <div class="relative" v-scroll-animation="'fade-left'">
          <div class="glass-panel p-2 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Industry Solutions" 
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <!-- Floating Industry Icons -->
          <div class="absolute -top-6 -left-6 w-16 h-16 glass-panel-light rounded-xl flex items-center justify-center transform rotate-12 animate-float-slow">
            <i class="fa-solid fa-building text-2xl text-primary-400"></i>
          </div>

          <div class="absolute top-1/4 -right-4 w-14 h-14 glass-panel-light rounded-xl flex items-center justify-center transform -rotate-6 animate-float">
            <i class="mdi mdi-bridge text-xl text-secondary-400"></i>
          </div>

          <div class="absolute bottom-1/4 -left-8 w-20 h-20 glass-panel-light rounded-xl flex items-center justify-center transform rotate-6 animate-float-slow">
            <i class="fa-solid fa-road text-3xl text-primary-400"></i>
          </div>

          <div class="absolute -bottom-4 right-12 w-16 h-16 glass-panel-light rounded-xl flex items-center justify-center transform -rotate-12 animate-float">
            <i class="fa-solid fa-house text-2xl text-secondary-400"></i>
          </div>
          
          <!-- Decorative Elements -->
          <div class="absolute -top-8 -right-8 w-32 h-32 bg-primary-800/20 rounded-full blur-2xl"></div>
          <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const industryStats = [
  { value: '10+', label: 'Industries Served' },
  { value: '200+', label: 'Projects Completed' },
  { value: '95%', label: 'Client Satisfaction' }
];
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(-6deg);
  }
  50% {
    transform: translateY(-10px) rotate(-3deg);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) rotate(6deg);
  }
  50% {
    transform: translateY(-15px) rotate(9deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}
</style>
