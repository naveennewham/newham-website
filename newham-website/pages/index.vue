<template>
  <div class="home-page">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Pillars Section -->
    <PillarsSection />
    
    <!-- Features Section -->
    <FeaturesSection />
    
    <!-- Products Section -->
    <ProductsSection />
    
    <!-- Tech Stack Section -->
    <TechStackSection />
    
    <!-- Testimonials Section -->
    <TestimonialsSection />
    
    <!-- Call to Action Section -->
    <CtaSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Home'
})
import HeroSection from '~/components/home/HeroSection.vue';
import PillarsSection from '~/components/home/PillarsSection.vue';
import FeaturesSection from '~/components/home/FeaturesSection.vue';
import ProductsSection from '~/components/home/ProductsSection.vue';
import TechStackSection from '~/components/home/TechStackSection.vue';
import TestimonialsSection from '~/components/home/TestimonialsSection.vue';
import CtaSection from '~/components/home/CtaSection.vue';
</script>
