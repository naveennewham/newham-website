<template>
  <section class="products-section section-padding relative overflow-hidden glow-container cta-background">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
      
      <!-- CTA Background Elements -->
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20"></div>
      <div class="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(var(--color-primary-500-rgb),0.15),transparent_70%)]">
      </div>
      <div class="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(var(--color-secondary-500-rgb),0.15),transparent_70%)]">
      </div>
      
      <!-- Main Glow Effects -->
      <div class="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-secondary-500/5 rounded-full blur-[80px] animate-pulse-slow animation-delay-2000"></div>
      
      <!-- Diagonal Stripes -->
      <div class="absolute inset-0 opacity-5">
        <div class="h-full w-full bg-[repeating-linear-gradient(135deg,#005D6C,#005D6C_1px,transparent_1px,transparent_10px)]">
        </div>
      </div>
      
      <!-- Geometric Shapes -->
      <div class="absolute top-10 left-20 w-40 h-40 border-2 border-primary-500/10 transform -rotate-12"></div>
      <div class="absolute bottom-20 right-20 w-64 h-64 border-2 border-secondary-500/10 transform rotate-45"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header with Geometric Design -->
      <div class="text-center mb-16 relative glow-header">
        <!-- Geometric accent elements -->
        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500 skew-x-12"></div>
        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 translate-x-12 w-10 h-1 bg-secondary-500 -skew-x-12"></div>
        
        <h2 class="text-3xl md:text-4xl font-bold mb-4 relative inline-block text-glow">
          <span class="gradient-text">Our Flagship</span>
          <span class="block text-white mt-2">Products</span>
          <!-- Underline with geometric design -->
          <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-500 transform skew-x-12"></span>
          <span class="absolute -bottom-2 right-0 w-1/3 h-1 bg-secondary-500 transform -skew-x-12"></span>
        </h2>
        
        <p class="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
          Discover our innovative solutions designed to transform your construction project management and cost estimation processes.
        </p>
      </div>
      
      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto products-grid">
        <!-- DeepCost Card -->
        <div class="product-card group relative overflow-hidden border-glow-primary">
          <!-- Card Background with Hover Effect -->
          <div class="absolute inset-0 bg-dark-800/70 backdrop-blur-sm border border-primary-500/30 rounded-xl transform transition-all duration-500 group-hover:scale-[0.98]"></div>
          
          <!-- AI Glow Effect on Hover -->
          <div class="absolute inset-0 ai-glow-primary opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100"></div>
          
          <!-- Edge Glow Effect -->
          <div class="absolute inset-0 glow-border-primary opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          <!-- Card Content -->
          <div class="relative z-10 p-8">
            <!-- Product Logo/Icon -->
            <div class="w-16 h-16 mb-6 flex items-center justify-center bg-primary-900/50 rounded-lg relative overflow-hidden">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-400-rgb),0.3),transparent_70%)]"></div>
              <span class="text-3xl">💰</span>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4">DeepCost</h3>
            
            <p class="text-gray-300 mb-6">
              AI-powered MEP cost estimation platform that transforms weeks of work into hours with precision and intelligence.
            </p>
            
            <!-- Key Features List -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <span class="text-primary-400 mr-3">✓</span>
                <span class="text-gray-300">70% Faster Estimation Process</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-400 mr-3">✓</span>
                <span class="text-gray-300">95% Accuracy Rate</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-400 mr-3">✓</span>
                <span class="text-gray-300">Enterprise-Grade Security</span>
              </li>
            </ul>
            
            <!-- Singapore Compliance Badge -->
            <div class="flex items-center mb-8 bg-dark-900/50 p-3 rounded-lg border border-primary-500/20">
              <span class="text-lg mr-2">🇸🇬</span>
              <span class="text-sm text-gray-300">Singapore Regulatory Compliant</span>
            </div>
            
            <!-- CTA Button -->
            <router-link to="/deepcost" class="btn-primary block text-center">
              Explore DeepCost
            </router-link>
          </div>
        </div>
        
        <!-- DeepTrack Card -->
        <div class="product-card group relative overflow-hidden border-glow-secondary">
          <!-- Card Background with Hover Effect -->
          <div class="absolute inset-0 bg-dark-800/70 backdrop-blur-sm border border-secondary-500/30 rounded-xl transform transition-all duration-500 group-hover:scale-[0.98]"></div>
          
          <!-- AI Glow Effect on Hover -->
          <div class="absolute inset-0 ai-glow-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100"></div>
          
          <!-- Edge Glow Effect -->
          <div class="absolute inset-0 glow-border-secondary opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          <!-- Card Content -->
          <div class="relative z-10 p-8">
            <!-- Product Logo/Icon -->
            <div class="w-16 h-16 mb-6 flex items-center justify-center bg-secondary-900/50 rounded-lg relative overflow-hidden">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-secondary-400-rgb),0.3),transparent_70%)]"></div>
              <span class="text-3xl">📊</span>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4">DeepTrack</h3>
            
            <p class="text-gray-300 mb-6">
              Comprehensive project financial tracking platform with workflow automation and real-time insights.
            </p>
            
            <!-- Key Features List -->
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <span class="text-secondary-400 mr-3">✓</span>
                <span class="text-gray-300">Automated Approval Workflows</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary-400 mr-3">✓</span>
                <span class="text-gray-300">60% Faster Purchase Approvals</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary-400 mr-3">✓</span>
                <span class="text-gray-300">End-to-End Security & Encryption</span>
              </li>
            </ul>
            
            <!-- Singapore Compliance Badge -->
            <div class="flex items-center mb-8 bg-dark-900/50 p-3 rounded-lg border border-secondary-500/20">
              <span class="text-lg mr-2">🇸🇬</span>
              <span class="text-sm text-gray-300">Singapore Regulatory Compliant</span>
            </div>
            
            <!-- CTA Button -->
            <router-link to="/deeptrack" class="btn-secondary block text-center">
              Explore DeepTrack
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Integration Note -->
      <div class="text-center mt-12">
        <div class="inline-block bg-dark-800/70 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/10">
          <p class="text-gray-300">
            <span class="text-lg mr-2">🔄</span>
            Our products seamlessly integrate with each other for a complete project management solution
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script needed for this component
</script>

<style scoped>
/* Any component-specific styles can go here */
.ai-glow-primary {
  background: radial-gradient(circle at center, rgba(var(--color-primary-400-rgb), 0.4), transparent 70%);
  filter: blur(15px);
}

.ai-glow-secondary {
  background: radial-gradient(circle at center, rgba(var(--color-secondary-400-rgb), 0.4), transparent 70%);
  filter: blur(15px);
}

.glow-border-primary {
  border: 1px solid rgba(var(--color-primary-500-rgb), 0.3);
  border-radius: 0.75rem;
  box-shadow: 0 0 15px 2px rgba(var(--color-primary-500-rgb), 0.2);
}

.glow-border-secondary {
  border: 1px solid rgba(var(--color-secondary-500-rgb), 0.3);
  border-radius: 0.75rem;
  box-shadow: 0 0 15px 2px rgba(var(--color-secondary-500-rgb), 0.2);
}

.glow-container {
  position: relative;
}

.text-glow {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.glow-header::before {
  content: '';
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(var(--color-primary-500-rgb), 0.1), transparent 70%);
  border-radius: 50%;
  filter: blur(20px);
  z-index: -1;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 8s infinite ease-in-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400;
}

/* Modern Frontend Border Glow Effects */
.border-glow-primary {
  position: relative;
  border-radius: 0.75rem;
  z-index: 0;
}

.border-glow-primary::before,
.border-glow-primary::after {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  border-radius: 0.75rem;
  z-index: -1;
  animation: border-rotate 4s linear infinite;
}

.border-glow-primary::before {
  background: linear-gradient(90deg, 
    rgba(var(--color-primary-300-rgb), 0), 
    rgba(var(--color-primary-300-rgb), 0.3), 
    rgba(var(--color-primary-500-rgb), 0.8), 
    rgba(var(--color-primary-700-rgb), 0.3), 
    rgba(var(--color-primary-300-rgb), 0));
  filter: blur(8px);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.border-glow-primary::after {
  background: linear-gradient(90deg, 
    rgba(var(--color-primary-300-rgb), 0), 
    rgba(var(--color-primary-300-rgb), 0.2), 
    rgba(var(--color-primary-500-rgb), 0.6), 
    rgba(var(--color-primary-700-rgb), 0.2), 
    rgba(var(--color-primary-300-rgb), 0));
  opacity: 0;
  transition: opacity 0.5s ease;
}

.border-glow-primary:hover::before,
.border-glow-primary:hover::after {
  opacity: 1;
}

.border-glow-secondary {
  position: relative;
  border-radius: 0.75rem;
  z-index: 0;
}

.border-glow-secondary::before,
.border-glow-secondary::after {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  border-radius: 0.75rem;
  z-index: -1;
  animation: border-rotate 4s linear infinite;
}

.border-glow-secondary::before {
  background: linear-gradient(90deg, 
    rgba(var(--color-secondary-300-rgb), 0), 
    rgba(var(--color-secondary-300-rgb), 0.3), 
    rgba(var(--color-secondary-500-rgb), 0.8), 
    rgba(var(--color-secondary-700-rgb), 0.3), 
    rgba(var(--color-secondary-300-rgb), 0));
  filter: blur(8px);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.border-glow-secondary::after {
  background: linear-gradient(90deg, 
    rgba(var(--color-secondary-300-rgb), 0), 
    rgba(var(--color-secondary-300-rgb), 0.2), 
    rgba(var(--color-secondary-500-rgb), 0.6), 
    rgba(var(--color-secondary-700-rgb), 0.2), 
    rgba(var(--color-secondary-300-rgb), 0));
  opacity: 0;
  transition: opacity 0.5s ease;
}

.border-glow-secondary:hover::before,
.border-glow-secondary:hover::after {
  opacity: 1;
}

@keyframes border-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.section-padding {
  @apply py-20;
}

.cta-background {
  position: relative;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.btn-primary {
  @apply px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary-500/25;
}

.btn-secondary {
  @apply px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-secondary-500/25;
}
</style>
