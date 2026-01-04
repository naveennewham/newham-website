<template>
  <!-- Desktop Stats with AI Glow -->
  <div class="hidden md:block">
    <div class="grid grid-cols-4 gap-4">
      <div class="rounded-lg p-4 bg-dark-800/60 backdrop-blur-md border border-primary-500/30 shadow-lg transform hover:scale-105 transition-all duration-300 relative ai-glow-primary overflow-hidden">
        <div class="text-3xl font-bold text-primary-400">10+</div>
        <div class="text-gray-300 text-sm">Years Experience</div>
      </div>
      <div class="rounded-lg p-4 bg-dark-800/60 backdrop-blur-md border border-secondary-500/30 shadow-lg transform hover:scale-105 transition-all duration-300 relative ai-glow-secondary overflow-hidden">
        <div class="text-3xl font-bold text-secondary-400">200+</div>
        <div class="text-gray-300 text-sm">Projects</div>
      </div>
      <div class="rounded-lg p-4 bg-dark-800/60 backdrop-blur-md border border-primary-500/30 shadow-lg transform hover:scale-105 transition-all duration-300 relative ai-glow-primary overflow-hidden">
        <div class="text-3xl font-bold text-primary-400">50+</div>
        <div class="text-gray-300 text-sm">Team Members</div>
      </div>
      <div class="rounded-lg p-4 bg-dark-800/60 backdrop-blur-md border border-secondary-500/30 shadow-lg transform hover:scale-105 transition-all duration-300 relative ai-glow-secondary overflow-hidden">
        <div class="text-3xl font-bold text-secondary-400">98%</div>
        <div class="text-gray-300 text-sm">Satisfaction</div>
      </div>
    </div>
  </div>
  
  <!-- Mobile Stats with AI Glow -->
  <div class="grid grid-cols-2 gap-4 md:hidden">
    <div class="rounded-lg p-3 bg-dark-800/60 backdrop-blur-md border border-primary-500/30 shadow-lg transform hover:scale-105 transition-all duration-300 relative ai-glow-primary overflow-hidden">
      <div class="text-2xl font-bold text-primary-400">10+</div>
      <div class="text-gray-300 text-xs">Years Experience</div>
    </div>
    <div class="rounded-lg p-3 bg-dark-800/60 backdrop-blur-md border border-secondary-500/30 shadow-lg transform hover:scale-105 transition-all duration-300 relative ai-glow-secondary overflow-hidden">
      <div class="text-2xl font-bold text-secondary-400">200+</div>
      <div class="text-gray-300 text-xs">Projects</div>
    </div>
    <div class="rounded-lg p-3 bg-dark-800/60 backdrop-blur-md border border-primary-500/30 shadow-lg transform hover:scale-105 transition-all duration-300 relative ai-glow-primary overflow-hidden">
      <div class="text-2xl font-bold text-primary-400">50+</div>
      <div class="text-gray-300 text-xs">Team Members</div>
    </div>
    <div class="rounded-lg p-3 bg-dark-800/60 backdrop-blur-md border border-secondary-500/30 shadow-lg transform hover:scale-105 transition-all duration-300 relative ai-glow-secondary overflow-hidden">
      <div class="text-2xl font-bold text-secondary-400">98%</div>
      <div class="text-gray-300 text-xs">Satisfaction</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatsWithGlow'
}
</script>
