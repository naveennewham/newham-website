<template>
  <div class="app-wrapper gradient-bg min-h-screen">
    <Navbar />
    <main>
      <router-view v-slot="{ Component, route }">
        <transition 
          v-bind="pageTransition"
          mode="out-in"
          @before-enter="beforeEnter"
          @after-leave="afterLeave"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
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
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import { pageTransition } from './utils/transitions';
import scrollAnimation from './directives/scrollAnimation';

// Register scroll animation directive globally
import { app } from './main';
app.directive('scroll-animation', scrollAnimation);

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

// Page transition hooks
const beforeEnter = () => {
  // Scroll to top on page change
  window.scrollTo(0, 0);
  // Add a class to body to prevent scrolling during transition
  document.body.classList.add('page-transitioning');
};

const afterLeave = () => {
  // Remove the class after transition
  document.body.classList.remove('page-transitioning');
};

onMounted(() => {
  // Set dark mode
  document.documentElement.classList.add('dark');
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  // Clean up event listener
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
/* Prevent scrolling during page transitions */
body.page-transitioning {
  overflow: hidden;
}

/* Add some global animation classes */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.5s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out forwards;
}

/* Animation keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
