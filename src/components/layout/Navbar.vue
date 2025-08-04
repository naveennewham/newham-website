<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="glass-panel mx-4 my-4 md:mx-8 px-4 py-3 flex items-center justify-between">
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
          <img src="@/assets/Newham_Logo_white.png" alt="Newham Logo" class="h-10 w-auto mr-2" />
        </router-link>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <router-link v-for="item in navItems" 
          :key="item.path" 
          :to="item.path"
          class="text-gray-300 hover:text-white transition-colors duration-300"
          :class="{ 'gradient-text font-medium': $route.path === item.path }">
          {{ item.name }}
        </router-link>
        <router-link to="/contact" class="btn-primary text-sm">
          Get in Touch
        </router-link>
      </div>
      
      <!-- Mobile Menu Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-300 focus:outline-none">
        <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>
    
    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-8 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-8 opacity-0"
    >
      <div v-if="mobileMenuOpen" class="glass-panel mx-4 px-4 py-5 md:hidden">
        <div class="flex flex-col space-y-4">
          <router-link v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="text-gray-300 hover:text-white py-2 transition-colors duration-300"
            :class="{ 'gradient-text font-medium': $route.path === item.path }">
            {{ item.name }}
          </router-link>
          <router-link to="/contact" @click="mobileMenuOpen = false" class="btn-primary text-center mt-2">
            Get in Touch
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Industries', path: '/industries' },
  { name: 'Case Studies', path: '/case-studies' }
];
</script>
