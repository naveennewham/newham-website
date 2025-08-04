<template>
  <section class="service-faq-section section-padding relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-dark-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,120,255,0.1),transparent_30%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="gradient-text">Frequently Asked Questions</span>
          <span class="block text-white mt-2">Common Questions About Our Services</span>
        </h2>
        <p class="text-gray-400 max-w-3xl mx-auto">
          Find answers to the most common questions about our services, process, and technology solutions.
        </p>
      </div>
      
      <!-- FAQ Accordion -->
      <div class="max-w-4xl mx-auto">
        <div class="space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" 
               class="faq-item glass-panel rounded-xl overflow-hidden">
            <!-- FAQ Question -->
            <button 
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <h3 class="text-lg md:text-xl font-semibold text-white pr-8">{{ faq.question }}</h3>
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center transform transition-transform duration-300"
                   :class="activeFaq === index ? 'rotate-45' : ''">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
            </button>
            
            <!-- FAQ Answer -->
            <div 
              class="overflow-hidden transition-all duration-300 max-h-0"
              :class="activeFaq === index ? 'max-h-96' : ''"
              :style="activeFaq === index ? 'opacity: 1' : 'opacity: 0'"
            >
              <div class="p-6 pt-0 text-gray-300">
                <p>{{ faq.answer }}</p>
                
                <!-- Additional Info if available -->
                <ul v-if="faq.additionalInfo" class="mt-4 space-y-2">
                  <li v-for="(info, infoIndex) in faq.additionalInfo" :key="infoIndex" class="flex items-start">
                    <svg class="w-5 h-5 text-primary-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{{ info }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Still Have Questions -->
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-semibold text-white mb-4">Still Have Questions?</h3>
        <p class="text-gray-400 max-w-2xl mx-auto mb-8">
          Our team is ready to help you with any additional questions you may have about our services or how we can help your business.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="btn-primary">
            Contact Us
          </router-link>
          <a href="#" class="btn-outline flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeFaq = ref(null);

const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null;
  } else {
    activeFaq.value = index;
  }
};

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "While we serve clients across various sectors, our primary focus is on the construction industry and related fields. We have deep expertise in addressing the unique technological challenges faced by construction companies, general contractors, specialty contractors, engineering firms, and construction material suppliers.",
    additionalInfo: [
      "Commercial and residential construction",
      "Heavy civil and infrastructure",
      "Engineering and architectural firms",
      "Construction material suppliers and manufacturers",
      "Real estate development"
    ]
  },
  {
    question: "How long does it typically take to implement your solutions?",
    answer: "Implementation timelines vary based on the complexity of the solution and your specific requirements. Simple mobile applications or targeted solutions might take 2-3 months, while comprehensive enterprise systems could take 6-12 months. During our initial consultation, we'll provide a detailed timeline based on your project scope.",
    additionalInfo: null
  },
  {
    question: "Do you offer customization for your software solutions?",
    answer: "Yes, customization is at the core of our approach. We understand that every construction business has unique workflows and requirements. All our solutions can be tailored to match your specific processes, integrating with your existing systems and addressing your particular challenges.",
    additionalInfo: null
  },
  {
    question: "What kind of support do you provide after implementation?",
    answer: "We offer comprehensive post-implementation support to ensure your solution continues to deliver value. Our support packages include:",
    additionalInfo: [
      "24/7 technical support for critical issues",
      "Regular maintenance and updates",
      "User training and onboarding assistance",
      "Performance monitoring and optimization",
      "Ongoing consultation for continuous improvement"
    ]
  },
  {
    question: "Can your solutions integrate with our existing systems?",
    answer: "Absolutely. We design our solutions with integration in mind. We can connect with your existing ERP systems, accounting software, project management tools, and other business applications. Our team has experience integrating with popular construction software like Procore, Autodesk BIM 360, PlanGrid, and many others.",
    additionalInfo: null
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "Security is built into every aspect of our development process. We implement industry best practices for data protection, including:",
    additionalInfo: [
      "Encryption of data both in transit and at rest",
      "Regular security audits and penetration testing",
      "Role-based access controls and authentication",
      "Compliance with relevant regulations like GDPR and CCPA",
      "Secure cloud infrastructure with redundancy and disaster recovery"
    ]
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models to accommodate different business needs. Depending on the solution, we may use subscription-based pricing, one-time licensing fees, or custom project-based pricing. We work with you to find a pricing structure that aligns with your budget and expected ROI.",
    additionalInfo: null
  },
  {
    question: "Do you provide training for our team?",
    answer: "Yes, comprehensive training is included with all our implementations. We offer a variety of training options to ensure your team can effectively use and maintain your new solution:",
    additionalInfo: [
      "On-site training sessions",
      "Virtual training workshops",
      "Detailed documentation and user guides",
      "Video tutorials and knowledge base",
      "Train-the-trainer programs for internal knowledge transfer"
    ]
  }
];
</script>

<style scoped>
.faq-item:hover {
  box-shadow: 0 0 25px rgba(139, 92, 246, 0.15);
}
</style>
