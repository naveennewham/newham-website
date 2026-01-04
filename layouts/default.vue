<template>
  <div class="app-wrapper gradient-bg min-h-screen">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
    
    <!-- Scroll to top button -->
    <button 
      v-show="showScrollTop" 
      @click="scrollToTop"
      class="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg z-50 transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from '~/components/layout/Navbar.vue';
import Footer from '~/components/layout/Footer.vue';

// Scroll to top functionality
const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  // Set dark mode
  if (process.client) {
      document.documentElement.classList.add('dark');
      window.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('scroll', handleScroll);
    }
});
</script>
