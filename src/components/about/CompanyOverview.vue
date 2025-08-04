<template>
  <section class="company-overview-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,120,255,0.1),transparent_30%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
      <!-- Page Title -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span class="gradient-text">About Us</span>
        </h1>
        <p class="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Pioneering construction technology solutions since 2010
        </p>
      </div>
      
      <!-- Company Overview -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <!-- Company Image -->
        <div class="relative">
          <div class="glass-panel p-2 rounded-2xl shadow-glass-lg">
            <div class="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Newham Team" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <!-- Decorative Elements -->
          <div class="absolute -top-6 -right-6 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
          <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl"></div>
        </div>
        
        <!-- Company Description -->
        <div>
          <h2 class="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
          
          <div class="space-y-4 text-gray-300">
            <p>
              Founded in 2010, Newham Technologies began with a simple mission: to solve the unique technological challenges faced by the construction industry. What started as a small team of developers and construction experts has grown into a leading technology provider serving clients across multiple industries.
            </p>
            <p>
              Our journey began by developing specialized project management tools for construction companies. As we worked closely with our clients, we identified additional pain points and expanded our offerings to include field applications, compliance solutions, and custom software development.
            </p>
            <p>
              Today, Newham stands at the intersection of construction expertise and cutting-edge technology. Our team combines deep industry knowledge with technical excellence to deliver solutions that drive real business value for our clients.
            </p>
          </div>
          
          <!-- Company Stats -->
          <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold gradient-text">10+</div>
              <div class="text-gray-400 text-sm">Years of Experience</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold gradient-text">50+</div>
              <div class="text-gray-400 text-sm">Team Members</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold gradient-text">200+</div>
              <div class="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold gradient-text">5</div>
              <div class="text-gray-400 text-sm">Global Offices</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Timeline -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center gradient-text">Our Journey</h2>
        
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
          
          <div class="space-y-24 relative">
            <div v-for="(milestone, index) in milestones" :key="index" 
                 class="relative"
                 :class="index % 2 === 0 ? 'text-right' : 'text-left'">
              <!-- Timeline Content -->
              <div class="grid grid-cols-5 items-center">
                <!-- Content Side (alternating left/right) -->
                <div class="col-span-2" :class="index % 2 === 0 ? '' : 'order-last'">
                  <div class="glass-panel p-6 rounded-xl inline-block" :class="index % 2 === 0 ? 'ml-auto' : ''">
                    <h3 class="text-xl font-semibold text-white mb-2">{{ milestone.title }}</h3>
                    <p class="text-gray-400">{{ milestone.description }}</p>
                  </div>
                </div>
                
                <!-- Timeline Dot -->
                <div class="flex justify-center col-span-1">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center z-10">
                    <span class="text-white font-bold">{{ milestone.year }}</span>
                  </div>
                </div>
                
                <!-- Empty Space (opposite side) -->
                <div class="col-span-2" :class="index % 2 === 0 ? 'order-last' : ''"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const milestones = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Newham Technologies was established with a focus on construction software solutions.'
  },
  {
    year: '2013',
    title: 'First Major Product',
    description: 'Launched our flagship project management platform for construction companies.'
  },
  {
    year: '2015',
    title: 'International Expansion',
    description: 'Opened offices in Europe and Asia to serve our growing international client base.'
  },
  {
    year: '2018',
    title: 'Mobile Solutions',
    description: 'Introduced our suite of mobile field applications for on-site construction management.'
  },
  {
    year: '2021',
    title: 'Cloud Transformation',
    description: 'Migrated all our solutions to cloud-native architecture for enhanced scalability.'
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Incorporated artificial intelligence and machine learning capabilities into our products.'
  }
];
</script>
