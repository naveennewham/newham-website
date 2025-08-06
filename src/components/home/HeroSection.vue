<template>
  <section class="hero-section relative min-h-screen flex items-center pt-40 md:pt-48 lg:pt-52 pb-16 overflow-hidden">
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
      <div class="flex flex-col items-center justify-center relative z-20">
        <!-- Mobile: Table layout (horizontal side by side with equal width) -->
        <div class="block sm:hidden w-full px-2 mb-8">
          <table class="table-fixed w-4/5 mx-auto">
            <tbody>
              <tr>
                <td class="w-1/2 pr-1">
                  <router-link to="/services" class="block w-full rounded-lg py-4 px-3 bg-primary-600/90 hover:bg-primary-500/90 text-white font-medium backdrop-blur-md shadow-lg border border-white/10 transform hover:scale-105 transition-all duration-300 text-center whitespace-nowrap text-base">
                    Explore Services
                  </router-link>
                </td>
                <td class="w-1/2 pl-1">
                  <router-link to="/contact" class="block w-full rounded-lg py-4 px-3 bg-dark-800/70 hover:bg-dark-700/70 text-white font-medium backdrop-blur-md shadow-lg border border-white/10 transform hover:scale-105 transition-all duration-300 text-center whitespace-nowrap text-base">
                    Get in Touch
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- Desktop: Original flex layout -->
        <div class="hidden sm:flex flex-col sm:flex-row gap-4 mb-8">
          <router-link to="/services" class="rounded-lg px-6 py-3 bg-primary-600/90 hover:bg-primary-500/90 text-white font-medium backdrop-blur-md shadow-lg border border-white/10 transform hover:scale-105 transition-all duration-300">
            Explore Services
          </router-link>
          <router-link to="/contact" class="rounded-lg px-6 py-3 bg-dark-800/70 hover:bg-dark-700/70 text-white font-medium backdrop-blur-md shadow-lg border border-white/10 transform hover:scale-105 transition-all duration-300">
            Get in Touch
          </router-link>
        </div>
        
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
