<template>
  <section id="testimonials" class="testimonials-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(0,135,150,0.16),transparent_35%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(1,172,200,0.12),transparent_40%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Construction teams run better</span>
          <span class="block text-white mt-2">with CCorex</span>
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto">
          See how estimators, project teams, and commercial managers reduce rework and make decisions faster when everything is connected.
        </p>
      </div>
      
      <!-- Testimonials Slider -->
      <div class="testimonials-slider relative">
        <!-- Navigation Buttons -->
        <button @click="prevSlide" class="absolute top-1/2 -left-4 md:-left-8 z-10 transform -translate-y-1/2 w-10 h-10 rounded-full bg-dark-700/80 text-white flex items-center justify-center hover:bg-primary-900/80 transition-colors ai-glow-primary-subtle">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button @click="nextSlide" class="absolute top-1/2 -right-4 md:-right-8 z-10 transform -translate-y-1/2 w-10 h-10 rounded-full bg-dark-700/80 text-white flex items-center justify-center hover:bg-primary-900/80 transition-colors ai-glow-secondary-subtle">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        
        <!-- Slides Container -->
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="w-full flex-shrink-0 px-4">
              <div class="glass-panel p-8 rounded-xl relative overflow-hidden" :class="index % 2 === 0 ? 'ai-glow-primary' : 'ai-glow-secondary'">
                <!-- AI Glow Effect -->
                <div class="absolute inset-0 z-0" :class="index % 2 === 0 ? 'ai-glow-radial-primary opacity-35' : 'ai-glow-radial-secondary opacity-35'"></div>
                <!-- Quote Icon -->
                <div class="mb-6" :class="index % 2 === 0 ? 'text-primary-300' : 'text-secondary-300'">
                  <svg class="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <!-- Testimonial Content -->
                <p class="text-gray-300 text-lg mb-6 italic">{{ testimonial.content }}</p>
                
                <!-- Client Info -->
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 class="text-white font-medium">{{ testimonial.name }}</h4>
                    <p class="text-gray-400 text-sm">{{ testimonial.position }}, {{ testimonial.company }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pagination Dots -->
        <div class="flex justify-center mt-8 space-x-2">
          <button v-for="(_, index) in testimonials" :key="index" 
                  @click="goToSlide(index)"
                  class="w-3 h-3 rounded-full transition-colors relative overflow-hidden"
                  :class="[currentSlide === index ? 'bg-primary-500 ai-glow-primary-subtle' : 'bg-gray-600 hover:bg-gray-500']">
          </button>
        </div>
      </div>
      
      <!-- Client Logos -->
      <div class="mt-20">
        <h3 class="text-xl font-semibold text-white text-center mb-8">Trusted by construction and MEP teams</h3>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div v-for="(client, index) in clients" :key="index" 
               class="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 relative overflow-hidden"
               :class="index % 2 === 0 ? 'hover:ai-glow-primary-subtle' : 'hover:ai-glow-secondary-subtle'">
            <!-- AI Glow Effect on hover -->
            <div class="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                 :class="index % 2 === 0 ? 'ai-glow-radial-primary' : 'ai-glow-radial-secondary'"></div>
            <img :src="client.logo" :alt="client.name" class="max-w-full max-h-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Auto-advance slides
let slideInterval;
const startSlideTimer = () => {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

// Start and stop timer on component mount/unmount
import { onMounted, onUnmounted } from 'vue';
onMounted(() => {
  startSlideTimer();
});
onUnmounted(() => {
  clearInterval(slideInterval);
});

const testimonials = [
  {
    content: "With CCorex, our estimator-to-project handover is finally consistent. Takeoffs and BOQs stay connected, so we reduced rework and version confusion across teams.",
    name: "Sarah Johnson",
    position: "Commercial Lead",
    company: "BuildTech Construction",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    content: "DeepCost helped us standardize our estimates across packages. We can explain rates and revisions to stakeholders quickly, and the audit trail is a big win.",
    name: "Michael Chen",
    position: "Pre-Construction Manager",
    company: "Horizon Builders",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "DeepTrack gives us instant visibility into commitments and variances. Our commercial team can spot overruns earlier and take action while there’s still time.",
    name: "Jessica Rodriguez",
    position: "Commercial Manager",
    company: "Metropolitan Construction",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    content: "DeepHR made our site attendance and labor cost reporting much clearer. We spend less time chasing updates and more time managing productivity.",
    name: "Robert Williams",
    position: "Operations Manager",
    company: "Pinnacle Development",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

const clients = [
  { name: "BuildTech Construction", logo: "https://placehold.co/200x100/252525/808080?text=BuildTech" },
  { name: "Horizon Builders", logo: "https://placehold.co/200x100/252525/808080?text=Horizon" },
  { name: "Metropolitan Construction", logo: "https://placehold.co/200x100/252525/808080?text=Metro" },
  { name: "Pinnacle Development", logo: "https://placehold.co/200x100/252525/808080?text=Pinnacle" },
  { name: "Summit Engineering", logo: "https://placehold.co/200x100/252525/808080?text=Summit" }
];
</script>
