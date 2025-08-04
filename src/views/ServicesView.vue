<template>
  <div class="services-page">
    <!-- Services Hero Section -->
    <ServicesHero />
    
    <!-- Services List Section -->
    <ServicesList />
    
    <!-- Service Process Section -->
    <ServiceProcess />
    
    <!-- Technologies Section -->
    <ServiceTechnologies />
    
    <!-- FAQ Section -->
    <ServiceFaq />
    
    <!-- CTA Section -->
    <ServiceCta />
  </div>
</template>

<script setup>
import ServicesHero from '../components/services/ServicesHero.vue';
import ServicesList from '../components/services/ServicesList.vue';
import ServiceProcess from '../components/services/ServiceProcess.vue';
import ServiceTechnologies from '../components/services/ServiceTechnologies.vue';
import ServiceFaq from '../components/services/ServiceFaq.vue';
import ServiceCta from '../components/services/ServiceCta.vue';
</script>
