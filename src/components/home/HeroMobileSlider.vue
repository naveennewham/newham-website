<template>
  <div class="hero-mobile-slider relative w-full h-screen overflow-hidden bg-dark-900">
    <!-- Video Background for Mobile -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <video 
        autoplay 
        loop 
        muted 
        playsinline 
        class="absolute w-full h-full object-cover brightness-110 contrast-105"
      >
        <source src="@/assets/hero_banner_mobile.mp4" type="video/mp4">
      </video>
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-dark-900/80 via-dark-800/70 to-dark-900/80 z-10"></div>
      
      <!-- Pattern Overlay -->
      <div class="absolute inset-0 pattern-overlay z-20 opacity-10"></div>
    </div>
    
    <!-- Main Content Container -->
    <div class="relative z-30 flex flex-col h-full justify-between pt-8 pb-4">
      <!-- Slider Container -->
      <div 
        class="swiper-container flex-grow"
        ref="swiperContainer"
      >
        <div class="swiper-wrapper">
          <!-- Slide 1 - Innovation -->
          <div class="swiper-slide flex items-center justify-center">
            <div class="slide-card slide-card-innovation flex flex-col justify-center items-center text-center px-14 py-60 w-[100vw] max-w-[1280px] h-auto min-h-[250px] rounded-lg border border-primary-500/30 backdrop-blur-sm shadow-lg cta-bg glow-border-card glow-border-primary">
              <div class="slide-icon mb-2 text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 class="text-5xl sm:text-6xl font-bold text-white mb-2 slide-title leading-tight w-full">
                Empowering Innovation Through Smart Software
              </h2>
              <div class="w-12 h-1 bg-primary-500 mb-2 glow-line"></div>
              <p class="text-gray-300 mb-2 slide-description text-2xl w-full">
                Build scalable, secure, and intelligent solutions tailored to your business goals — from concept to code.
              </p>
            </div>
          </div>
        
          <!-- Slide 2 - Results -->
          <div class="swiper-slide flex items-center justify-center">
            <div class="slide-card slide-card-results flex flex-col justify-center items-center text-center px-14 py-64 w-[100vw] max-w-[1280px] h-auto min-h-[250px] rounded-lg border border-primary-500/30 backdrop-blur-sm shadow-lg cta-bg glow-border-card glow-border-primary">
              <div class="slide-icon mb-2 text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 class="text-5xl sm:text-6xl font-bold text-white mb-2 slide-title leading-tight w-full">
                Custom Software. Real Results.
              </h2>
              <div class="w-12 h-1 bg-blue-500 mb-2 glow-line"></div>
              <p class="text-gray-300 mb-2 slide-description text-2xl w-full">
                Transform your ideas into high-performance digital solutions that drive growth and efficiency.
              </p>
            </div>
          </div>
        
          <!-- Slide 3 - Partner -->
          <div class="swiper-slide flex items-center justify-center">
            <div class="slide-card slide-card-partner flex flex-col justify-center items-center text-center px-14 py-64 w-[100vw] max-w-[1280px] h-auto min-h-[250px] rounded-lg border border-primary-500/30 backdrop-blur-sm shadow-lg cta-bg glow-border-card glow-border-primary">
              <div class="slide-icon mb-2 text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 class="text-5xl sm:text-6xl font-bold text-white mb-2 slide-title leading-tight w-full">
                Your Technology Partner for the Future
              </h2>
              <div class="w-12 h-1 bg-purple-500 mb-2 glow-line"></div>
              <p class="text-gray-300 mb-2 slide-description text-2xl w-full">
                From SaaS platforms to enterprise systems, we craft software that evolves with your business.
              </p>
            </div>
          </div>
        
          <!-- Slide 4 - Design -->
          <div class="swiper-slide flex items-center justify-center">
            <div class="slide-card slide-card-design flex flex-col justify-center items-center text-center px-14 py-64 w-[100vw] max-w-[1280px] h-auto min-h-[250px] rounded-lg border border-primary-500/30 backdrop-blur-sm shadow-lg cta-bg glow-border-card glow-border-primary">
              <div class="slide-icon mb-2 text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h2 class="text-5xl sm:text-6xl font-bold text-white mb-2 slide-title leading-tight w-full">
                Code That Solves. Design That Delights.
              </h2>
              <div class="w-12 h-1 bg-green-500 mb-2 glow-line"></div>
              <p class="text-gray-300 mb-2 slide-description text-2xl w-full">
                Delivering seamless user experiences and robust functionality across web, mobile, and cloud.
              </p>
            </div>
          </div>
        
          <!-- Slide 5 - Digital Transformation -->
          <div class="swiper-slide flex items-center justify-center">
            <div class="slide-card slide-card-transform flex flex-col justify-center items-center text-center px-14 py-64 w-[100vw] max-w-[1280px] h-auto min-h-[250px] rounded-lg border border-primary-500/30 backdrop-blur-sm shadow-lg cta-bg glow-border-card glow-border-primary">
              <div class="slide-icon mb-2 text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 class="text-5xl sm:text-6xl font-bold text-white mb-2 slide-title leading-tight w-full">
                Accelerate Your Digital Transformation
              </h2>
              <div class="w-12 h-1 bg-amber-500 mb-2 glow-line"></div>
              <p class="text-gray-300 mb-2 slide-description text-2xl w-full">
                We help startups and enterprises build powerful applications with the latest tech and agile execution.
              </p>
            </div>
          </div>
        </div>
        <!-- Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    
    <!-- Insights Section -->
    <div class="relative z-30 px-4 mb-4 mt-5">
      <div class="insights-container bg-dark-800/70 backdrop-blur-sm rounded-lg px-2 py-3 border border-white/10 w-[80vw] max-w-[320px] mx-auto">
        <h3 class="text-sm font-semibold text-white mb-2 text-center">Key Insights</h3>
        <div class="flex justify-between text-center text-xs">
          <div class="stat-item">
            <div class="text-primary-500 font-bold">95%</div>
            <div class="text-gray-400">Client Satisfaction</div>
          </div>
          <div class="stat-item">
            <div class="text-primary-500 font-bold">120+</div>
            <div class="text-gray-400">Projects</div>
          </div>
          <div class="stat-item">
            <div class="text-primary-500 font-bold">15+</div>
            <div class="text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- CTA Buttons -->
    <div class="relative z-40 flex flex-col items-center mt-4">
      <div class="flex flex-col gap-2 w-[80vw] max-w-[320px] mx-auto">
        <router-link to="/services" class="btn-primary text-center">
          Explore Services
        </router-link>
        <router-link to="/contact" class="btn-secondary text-center">
          Get in Touch
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const swiperContainer = ref(null);
let swiper = null;

onMounted(() => {
  swiper = new Swiper(swiperContainer.value, {
    modules: [Autoplay, EffectFade, Pagination],
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true // Prevents overlapping during fade transitions
    },
    speed: 800, // Slower transition for smoother fade
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });
});
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-mobile-slider {
  position: relative;
  height: calc(100vh - 80px);
  overflow: hidden;
}

.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.glow-line {
  box-shadow: 0 0 10px 2px currentColor;
}

.insights-container {
  width: 80%;
  max-width: 320px;
  margin: 0 auto;
}

.cta-container {
  width: 80%;
  max-width: 320px;
  margin: 0 auto;
}

/* CTA Background */
.cta-background {
  position: relative;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* Animated Gradient Backgrounds */
.animated-gradient-bg {
  position: relative;
  background-color: rgba(17, 24, 39, 0.9); /* dark-800 with opacity */
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  overflow: hidden;
}

.animated-gradient-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: 400% 400%;
  opacity: 0.15;
  animation: gradient-shift 15s ease infinite;
  z-index: -1;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-gradient-primary::before {
  background: radial-gradient(circle at top left, rgba(0, 156, 180, 0.5), transparent 70%),
               radial-gradient(circle at bottom right, rgba(0, 200, 220, 0.5), transparent 70%);
}

.animated-gradient-blue::before {
  background: radial-gradient(circle at top left, rgba(59, 130, 246, 0.5), transparent 70%),
               radial-gradient(circle at bottom right, rgba(96, 165, 250, 0.5), transparent 70%);
}

.animated-gradient-purple::before {
  background: radial-gradient(circle at top left, rgba(168, 85, 247, 0.5), transparent 70%),
               radial-gradient(circle at bottom right, rgba(192, 132, 252, 0.5), transparent 70%);
}

.animated-gradient-green::before {
  background: radial-gradient(circle at top left, rgba(34, 197, 94, 0.5), transparent 70%),
               radial-gradient(circle at bottom right, rgba(74, 222, 128, 0.5), transparent 70%);
}

.animated-gradient-amber::before {
  background: radial-gradient(circle at top left, rgba(245, 158, 11, 0.5), transparent 70%),
               radial-gradient(circle at bottom right, rgba(251, 191, 36, 0.5), transparent 70%);
}

/* CTA Background Styles */
.cta-bg {
  position: relative;
  overflow: hidden;
}

.cta-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(to bottom right, rgba(var(--color-primary-900-rgb), 0.9), rgba(17, 24, 39, 1), rgba(var(--color-secondary-900-rgb), 0.9));
  animation: gradientShift 8s ease infinite;
}

.cta-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: 
    radial-gradient(circle at 70% 30%, rgba(120, 120, 255, 0.2), transparent 40%),
    radial-gradient(circle at 30% 70%, rgba(var(--color-primary-400-rgb), 0.15), transparent 50%);
  animation: pulseGlow 6s ease-in-out infinite alternate;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulseGlow {
  0% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.7;
    transform: scale(1);
  }
}

/* iOS-style AI Border Animation */
.glow-border-card {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.glow-border-card::before,
.glow-border-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  padding: 4px; /* Increased from 2px to 4px */
  background: linear-gradient(120deg, transparent 10%, var(--glow-color-1) 30%, var(--glow-color-2) 70%, transparent 90%); /* Widened gradient spread */
  background-size: 300% 300%; /* Increased from 200% to 300% for wider animation */
  background-position: 0% 0%;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: ios-ai-glow 3s ease infinite;
  opacity: 0.9;
}

.glow-border-card::after {
  filter: blur(18px); /* Increased from 12px to 18px */
  opacity: 0.6; /* Increased from 0.4 to 0.6 */
  animation-duration: 5s;
}

/* Primary color glow */
.glow-border-primary {
  --glow-color-1: rgba(0, 156, 180, 0.8);
  --glow-color-2: rgba(0, 200, 220, 0.8);
}

/* Blue color glow */
.glow-border-blue {
  --glow-color-1: rgba(59, 130, 246, 0.8);
  --glow-color-2: rgba(96, 165, 250, 0.8);
}

/* Purple color glow */
.glow-border-purple {
  --glow-color-1: rgba(168, 85, 247, 0.8);
  --glow-color-2: rgba(192, 132, 252, 0.8);
}

/* Green color glow */
.glow-border-green {
  --glow-color-1: rgba(34, 197, 94, 0.8);
  --glow-color-2: rgba(74, 222, 128, 0.8);
}

/* Amber color glow */
.glow-border-amber {
  --glow-color-1: rgba(245, 158, 11, 0.8);
  --glow-color-2: rgba(251, 191, 36, 0.8);
}

@keyframes ios-ai-glow {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.hero-mobile-slider {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 60px;
}

/* Glowing Orbs Animation */
.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.4;
  animation: float 20s infinite ease-in-out;
}

.glow-orb-1 {
  width: 250px;
  height: 250px;
  background: rgba(var(--color-primary-500-rgb), 0.3);
  top: 10%;
  right: -50px;
  animation-delay: 0s;
}

.glow-orb-2 {
  width: 200px;
  height: 200px;
  background: rgba(var(--color-secondary-500-rgb), 0.25);
  bottom: 10%;
  left: -50px;
  animation-delay: -5s;
}

.glow-orb-3 {
  width: 150px;
  height: 150px;
  background: rgba(var(--color-primary-700-rgb), 0.2);
  top: 50%;
  left: 20%;
  animation-delay: -10s;
}

.glow-orb-4 {
  width: 180px;
  height: 180px;
  background: rgba(var(--color-secondary-700-rgb), 0.15);
  bottom: 30%;
  right: 20%;
  animation-delay: -15s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(0) translateX(20px);
  }
  75% {
    transform: translateY(20px) translateX(10px);
  }
}

/* Pattern Overlay */
.pattern-overlay {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* Slide Content Animation */
.slide-title {
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
  transform: translateY(20px);
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.glow-line {
  animation: fadeIn 0.8s ease 0.3s forwards, glowPulse 2s infinite;
  opacity: 0;
  box-shadow: 0 0 10px rgba(var(--color-primary-500-rgb), 0.7);
}

.slide-description {
  animation: fadeInUp 0.8s ease 0.5s forwards;
  opacity: 0;
  transform: translateY(20px);
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(var(--color-primary-500-rgb), 0.7);
  }
  50% {
    box-shadow: 0 0 20px rgba(var(--color-primary-500-rgb), 0.9);
  }
}

/* Button Styles */
.btn-primary {
  @apply px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary-500/25;
  width: 100%;
  max-width: 100%;
}

.btn-secondary {
  @apply px-6 py-3 bg-dark-800/70 hover:bg-dark-700/70 text-white font-medium backdrop-blur-md shadow-lg border border-white/10 rounded-lg transition-all duration-300;
  width: 100%;
  max-width: 100%;
}

/* Swiper Customization */
:deep(.swiper-pagination-bullet) {
  background: rgba(255, 255, 255, 0.5);
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--color-primary-500);
}
</style>
