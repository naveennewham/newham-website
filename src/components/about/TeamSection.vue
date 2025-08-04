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
                      <component :is="social.icon" class="w-4 h-4 text-white" />
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
              <component :is="department.icon" class="w-8 h-8 text-white" />
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
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

// SVG Icons as render functions
const LinkedInIcon = (props) => h('svg', {
  ...props,
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>'
});

const TwitterIcon = (props) => h('svg', {
  ...props,
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>'
});

const GithubIcon = (props) => h('svg', {
  ...props,
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>'
});

const DevelopmentIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>'
});

const ProductIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>'
});

const ClientSuccessIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>'
});

const OperationsIcon = (props) => h('svg', {
  ...props,
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  innerHTML: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>'
});

const leadershipTeam = [
  {
    name: 'Sarah Johnson',
    position: 'Chief Executive Officer',
    bio: 'With over 20 years of experience in construction technology, Sarah leads our company vision and strategic direction.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    socials: [
      { icon: LinkedInIcon, url: '#' },
      { icon: TwitterIcon, url: '#' }
    ]
  },
  {
    name: 'Michael Chen',
    position: 'Chief Technology Officer',
    bio: 'Michael oversees our technology strategy and leads our engineering teams in developing innovative solutions.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    socials: [
      { icon: LinkedInIcon, url: '#' },
      { icon: GithubIcon, url: '#' }
    ]
  },
  {
    name: 'Jessica Rodriguez',
    position: 'Chief Product Officer',
    bio: 'Jessica brings deep industry knowledge to our product development, ensuring our solutions address real client needs.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    socials: [
      { icon: LinkedInIcon, url: '#' },
      { icon: TwitterIcon, url: '#' }
    ]
  }
];

const departments = [
  {
    name: 'Engineering',
    description: 'Our development team builds robust, scalable software solutions using cutting-edge technologies.',
    teamSize: '25',
    icon: DevelopmentIcon
  },
  {
    name: 'Product',
    description: 'Product managers and designers who translate client needs into intuitive, powerful features.',
    teamSize: '12',
    icon: ProductIcon
  },
  {
    name: 'Client Success',
    description: 'Dedicated professionals ensuring our clients achieve maximum value from our solutions.',
    teamSize: '8',
    icon: ClientSuccessIcon
  },
  {
    name: 'Operations',
    description: 'The team that keeps everything running smoothly, from finance to human resources.',
    teamSize: '5',
    icon: OperationsIcon
  }
];
</script>
