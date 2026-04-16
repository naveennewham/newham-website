<template>
  <section class="mission-vision-values-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-800"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.1),transparent_30%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Our Foundation</span>
          <span class="block text-white mt-2">Mission, Vision & Values</span>
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto">
          The principles that guide our work and shape our company culture
        </p>
      </div>
      
      <!-- Mission, Vision, Values Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <!-- Mission Card -->
        <div class="glass-panel p-8 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-glass-lg">
          <div class="w-16 h-16 rounded-full bg-primary-900/50 flex items-center justify-center mb-6 mx-auto">
            <i class="fa-solid fa-bolt text-2xl text-primary-400"></i>
          </div>
          
          <h3 class="text-2xl font-semibold text-white mb-4 text-center">Our Mission</h3>
          
          <p class="text-gray-300 text-center">
            To empower construction companies with innovative technology solutions that streamline operations, enhance collaboration, and drive sustainable growth.
          </p>
        </div>
        
        <!-- Vision Card -->
        <div class="glass-panel p-8 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-glass-lg">
          <div class="w-16 h-16 rounded-full bg-secondary-900/50 flex items-center justify-center mb-6 mx-auto">
            <i class="fa-solid fa-eye text-2xl text-secondary-400"></i>
          </div>
          
          <h3 class="text-2xl font-semibold text-white mb-4 text-center">Our Vision</h3>
          
          <p class="text-gray-300 text-center">
            To be the global leader in construction technology, recognized for transforming the industry through digital innovation and exceptional client outcomes.
          </p>
        </div>
        
        <!-- Values Card -->
        <div class="glass-panel p-8 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-glass-lg">
          <div class="w-16 h-16 rounded-full bg-primary-900/50 flex items-center justify-center mb-6 mx-auto">
            <i class="fa-solid fa-shield-halved text-2xl text-primary-400"></i>
          </div>
          
          <h3 class="text-2xl font-semibold text-white mb-4 text-center">Our Values</h3>
          
          <p class="text-gray-300 text-center">
            We are guided by integrity, innovation, excellence, collaboration, and a relentless focus on delivering value to our clients and partners.
          </p>
        </div>
      </div>
      
      <!-- Core Values -->
      <div>
        <h3 class="text-2xl font-semibold text-white mb-8 text-center">Core Values in Action</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(value, index) in coreValues" :key="index" 
               class="glass-panel-light p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mr-4">
                <i :class="value.icon" class="text-white"></i>
              </div>
              <h4 class="text-xl font-semibold text-white">{{ value.title }}</h4>
            </div>
            
            <p class="text-gray-300">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const coreValues = [
  {
    title: 'Integrity',
    description: 'We operate with transparency and honesty in all our interactions, building trust with our clients, partners, and team members.',
    icon: 'fa-solid fa-handshake'
  },
  {
    title: 'Innovation',
    description: 'We continuously explore new technologies and approaches to solve complex challenges and create better solutions.',
    icon: 'fa-solid fa-lightbulb'
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality in everything we do, exceeding expectations and setting new standards.',
    icon: 'fa-solid fa-trophy'
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork, fostering an environment where diverse perspectives drive better outcomes.',
    icon: 'fa-solid fa-people-group'
  },
  {
    title: 'Client Focus',
    description: 'We put our clients at the center of our work, deeply understanding their needs and delivering solutions that create lasting value.',
    icon: 'fa-solid fa-bullseye'
  },
  {
    title: 'Sustainability',
    description: 'We develop solutions that promote environmental responsibility and contribute to a more sustainable construction industry.',
    icon: 'fa-solid fa-leaf'
  }
];
</script>
