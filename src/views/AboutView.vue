<template>
  <div class="about-page">
    <!-- Company Overview Section -->
    <CompanyOverview />
    
    <!-- Mission, Vision, and Values Section -->
    <MissionVisionValues />
    
    <!-- Team Section -->
    <TeamSection />
  </div>
</template>

<script setup>
import CompanyOverview from '../components/about/CompanyOverview.vue';
import MissionVisionValues from '../components/about/MissionVisionValues.vue';
import TeamSection from '../components/about/TeamSection.vue';
</script>
