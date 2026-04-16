<template>
  <footer class="bg-dark-800 border-t border-gray-800">
    <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="mb-4">
            <img src="~/assets/Newham_Logo_white.png" alt="Newham Logo" class="h-10 w-auto" />
          </div>
          <p class="text-gray-400 mb-4">
            Innovative construction technology and software solutions for the modern world.
          </p>
          <!-- Products -->
          <div class="flex items-center space-x-4 mb-4">
            <img src="~/assets/Deepcost_Logo.png" alt="Deepcost Logo" class="h-8 w-auto" />
          </div>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
              <i class="fa-brands fa-facebook-f text-2xl" aria-hidden="true"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
              <i class="fa-brands fa-x-twitter text-2xl" aria-hidden="true"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
              <i class="fa-brands fa-instagram text-2xl" aria-hidden="true"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
              <i class="fa-brands fa-github text-2xl" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-400 hover:text-primary-400 transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-gray-400 hover:text-primary-400 transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-gray-400 hover:text-primary-400 transition-colors">Services</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="text-gray-400 hover:text-primary-400 transition-colors">Pricing</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-400 hover:text-primary-400 transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Services</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Custom Software Development</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">API Integration</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Legacy Modernization</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">QA & Automation</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Cloud Infrastructure</a></li>
            <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Mobile App Development</a></li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <div class="space-y-3">
            <p class="text-gray-400 flex items-start">
              <i class="fa-solid fa-location-dot text-lg mr-2 mt-1 text-primary-400" aria-hidden="true"></i>
              <span class="flex flex-col">
                <span class="font-semibold text-white text-sm mb-1">Singapore:</span>
                160 Robinson Rd, #14-04 SBF Center, Singapore 0689
              </span>
            </p>
            <p class="text-gray-400 flex items-start">
              <i class="fa-solid fa-location-dot text-lg mr-2 mt-1 text-primary-400" aria-hidden="true"></i>
              <span class="flex flex-col">
                <span class="font-semibold text-white text-sm mb-1">Chennai:</span>
                3rd Floor, Plot no. 21, Electrical, Electronics & Instruments Industries, Perungudi, Sholinganallur, Seevaram, OMR, Chennai, Tamil Nadu 600096
              </span>
            </p>
            <p class="text-gray-400 flex items-center">
              <i class="fa-solid fa-envelope text-lg mr-2 text-primary-400" aria-hidden="true"></i>
              info@newham.tech
            </p>
            <p class="text-gray-400 flex items-center">
              <i class="fa-solid fa-phone text-lg mr-2 text-primary-400" aria-hidden="true"></i>
              +91 9894-378-375
            </p>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-sm">© {{ new Date().getFullYear() }} Newham Technologies. All rights reserved.</p>
        <div class="mt-4 md:mt-0">
          <ul class="flex space-x-6">
            <li><a href="#" class="text-gray-500 hover:text-primary-400 text-sm">Privacy Policy</a></li>
            <li><a href="#" class="text-gray-500 hover:text-primary-400 text-sm">Terms of Service</a></li>
            <li><a href="#" class="text-gray-500 hover:text-primary-400 text-sm">Cookies</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
