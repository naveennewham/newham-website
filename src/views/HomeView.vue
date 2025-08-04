<template>
  <div class="home-page">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Features Section -->
    <FeaturesSection />
    
    <!-- Tech Stack Section -->
    <TechStackSection />
    
    <!-- Testimonials Section -->
    <TestimonialsSection />
    
    <!-- Call to Action Section -->
    <CtaSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue';
import FeaturesSection from '../components/home/FeaturesSection.vue';
import TechStackSection from '../components/home/TechStackSection.vue';
import TestimonialsSection from '../components/home/TestimonialsSection.vue';
import CtaSection from '../components/home/CtaSection.vue';
</script>
