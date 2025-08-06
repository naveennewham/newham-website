<template>
  <!-- Hero Section with responsive video for both mobile and desktop -->
  <section class="hero-section relative min-h-screen overflow-hidden pt-48 md:pt-60 lg:pt-72 xl:pt-80">
      <!-- Main Hero Heading -->
      <div class="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center mt-16 md:mt-24 lg:mt-32 xl:mt-40">
        <h1 class="text-5xl md:text-7xl font-bold text-white text-center mb-8">Your Trusted Software</h1>
      </div>
      
      <!-- Video Background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 overflow-hidden">
          <!-- Desktop Video (hidden on mobile) -->
          <video 
            autoplay 
            loop 
            muted 
            playsinline 
            class="absolute w-full h-full object-cover brightness-110 contrast-105 hidden md:block"
          >
            <source src="@/assets/hero_banner.mp4" type="video/mp4">
          </video>
          
          <!-- Mobile Video (hidden on desktop) -->
          <video 
            autoplay 
            loop 
            muted 
            playsinline 
            class="absolute w-full h-full object-cover brightness-110 contrast-105 md:hidden"
          >
            <source src="@/assets/hero_banner_mobile.mp4" type="video/mp4">
          </video>
          
          <!-- Enhanced Video Overlay with Theme Color -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-700/40 via-primary-800/30 to-secondary-700/40 mix-blend-overlay"></div>
        </div>
      </div>
      
      <!-- Content container with CTAs and stats at very bottom center -->
      <div class="absolute bottom-0 left-0 right-0 z-10 flex flex-col justify-end items-center pb-8 pt-4 bg-gradient-to-t from-dark-900/80 to-transparent">
        <!-- Center Content Container -->
        <div class="relative z-20 w-full px-4 text-center">
          <!-- Rounded button layout with glassmorphism (horizontal on all screen sizes) -->
          <table class="mb-8 w-full">
            <tr>
              <td class="w-1/2 pr-2">
                <router-link to="/services" class="block w-full rounded-lg py-3 bg-primary-600/90 hover:bg-primary-500/90 text-white font-medium backdrop-blur-md shadow-lg border border-white/10 transform hover:scale-105 transition-all duration-300 text-center">
                  Explore Services
                </router-link>
              </td>
              <td class="w-1/2 pl-2">
                <router-link to="/contact" class="block w-full rounded-lg py-3 bg-dark-800/70 hover:bg-dark-700/70 text-white font-medium backdrop-blur-md shadow-lg border border-white/10 transform hover:scale-105 transition-all duration-300 text-center">
                  Get in Touch
                </router-link>
              </td>
            </tr>
          </table>
          
          <!-- Stats with iPhone-style AI Glow Effects -->
          <StatsWithGlow />
        </div>
      </div>
  </section>
</template>

<script>
import StatsWithGlow from './StatsWithGlow.vue'

export default {
  name: 'HeroSection',
  components: {
    StatsWithGlow
  }
}
</script>
