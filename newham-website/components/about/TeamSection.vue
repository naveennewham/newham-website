<template>
  <section class="team-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(120,120,255,0.1),transparent_30%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Meet Our Team</span>
          <span class="block text-white mt-2">The People Behind Our Success</span>
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto">
          Our diverse team of experts combines deep industry knowledge with technical excellence to deliver exceptional solutions.
        </p>
      </div>
      
      <!-- Leadership Team -->
      <div class="mb-20">
        <h3 class="text-2xl font-semibold text-white mb-10 text-center">Leadership Team</h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(leader, index) in leadershipTeam" :key="index" 
               class="team-member group">
            <!-- Member Card -->
            <div class="glass-panel rounded-xl overflow-hidden transform transition-all duration-500 group-hover:shadow-glass-lg">
              <!-- Member Image -->
              <div class="relative aspect-[3/4] overflow-hidden">
                <img 
                  :src="leader.photo" 
                  :alt="leader.name" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                <!-- Social Links -->
                <div class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div class="flex justify-center space-x-4">
                    <a v-for="(social, socialIndex) in leader.socials" :key="socialIndex" 
                       :href="social.url" 
                       class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors">
                      <i :class="social.icon" class="text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <!-- Member Info -->
              <div class="p-6">
                <h4 class="text-xl font-semibold text-white mb-1">{{ leader.name }}</h4>
                <p class="text-primary-400 mb-3">{{ leader.position }}</p>
                <p class="text-gray-400 text-sm">{{ leader.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Team Categories -->
      <div>
        <h3 class="text-2xl font-semibold text-white mb-10 text-center">Our Departments</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(department, index) in departments" :key="index" 
               class="glass-panel-light p-6 rounded-xl text-center transform transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center mx-auto mb-4">
              <i :class="department.icon" class="text-2xl text-white"></i>
            </div>
            
            <h4 class="text-xl font-semibold text-white mb-2">{{ department.name }}</h4>
            <p class="text-gray-400 mb-4">{{ department.description }}</p>
            <p class="text-primary-400 font-medium">{{ department.teamSize }} Team Members</p>
          </div>
        </div>
      </div>
      
      <!-- Join Our Team CTA -->
      <div class="mt-20">
        <div class="glass-panel p-8 md:p-12 rounded-xl bg-gradient-to-br from-primary-900/50 to-secondary-900/50">
          <div class="text-center">
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Join Our Team</h3>
            <p class="text-gray-300 max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who are passionate about technology and construction. 
              Explore our current openings and become part of our innovative team.
            </p>
            <a href="#" class="btn-primary inline-flex items-center">
              View Open Positions
              <i class="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const leadershipTeam = [
  {
    name: 'Sarah Johnson',
    position: 'Chief Executive Officer',
    bio: 'With over 20 years of experience in construction technology, Sarah leads our company vision and strategic direction.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    socials: [
      { icon: 'fa-brands fa-linkedin-in', url: '#' },
      { icon: 'fa-brands fa-x-twitter', url: '#' }
    ]
  },
  {
    name: 'Michael Chen',
    position: 'Chief Technology Officer',
    bio: 'Michael oversees our technology strategy and leads our engineering teams in developing innovative solutions.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    socials: [
      { icon: 'fa-brands fa-linkedin-in', url: '#' },
      { icon: 'fa-brands fa-github', url: '#' }
    ]
  },
  {
    name: 'Jessica Rodriguez',
    position: 'Chief Product Officer',
    bio: 'Jessica brings deep industry knowledge to our product development, ensuring our solutions address real client needs.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    socials: [
      { icon: 'fa-brands fa-linkedin-in', url: '#' },
      { icon: 'fa-brands fa-x-twitter', url: '#' }
    ]
  }
];

const departments = [
  {
    name: 'Engineering',
    description: 'Our development team builds robust, scalable software solutions using cutting-edge technologies.',
    teamSize: '25',
    icon: 'fa-solid fa-code'
  },
  {
    name: 'Product',
    description: 'Product managers and designers who translate client needs into intuitive, powerful features.',
    teamSize: '12',
    icon: 'fa-solid fa-palette'
  },
  {
    name: 'Client Success',
    description: 'Dedicated professionals ensuring our clients achieve maximum value from our solutions.',
    teamSize: '8',
    icon: 'fa-solid fa-people-group'
  },
  {
    name: 'Operations',
    description: 'The team that keeps everything running smoothly, from finance to human resources.',
    teamSize: '5',
    icon: 'fa-solid fa-gears'
  }
];
</script>
