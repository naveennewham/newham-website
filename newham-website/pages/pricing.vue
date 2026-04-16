<template>
  <div class="product-page">
    <!-- Hero Section -->
    <section class="hero-section relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-dark-900"></div>
        <div class="absolute inset-0 opacity-5">
          <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#005D6C,#005D6C_1px,transparent_1px,transparent_10px)]"></div>
        </div>
        <div class="absolute top-20 right-20 w-40 h-40 border-2 border-primary-500/10 transform rotate-45"></div>
        <div class="absolute bottom-32 left-16 w-64 h-64 border-2 border-secondary-500/10 transform -rotate-12"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span class="gradient-text">Pricing & Business Model</span>
            <span class="block text-white mt-2">Choose the right way to get started with Deepcost</span>
            <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-500 transform skew-x-12"></span>
            <span class="absolute -bottom-2 right-0 w-1/3 h-1 bg-secondary-500 transform -skew-x-12"></span>
          </h1>
          <p class="text-lg md:text-xl mt-8 text-gray-300 max-w-2xl mx-auto">
            Flexible options across Freemium, Subscription and Transactional usage so you can adopt AI estimation at your own pace.
          </p>
        </div>
      </div>
    </section>

    <!-- Plans Section -->
    <section class="section-padding relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-dark-900"></div>
        <div class="absolute inset-0 opacity-5">
          <div class="h-full w-full bg-[repeating-linear-gradient(135deg,#005D6C,#005D6C_1px,transparent_1px,transparent_12px)]"></div>
        </div>
        <div class="absolute top-16 left-10 w-32 h-32 border-2 border-primary-500/10 transform rotate-12"></div>
        <div class="absolute bottom-16 right-10 w-52 h-52 border-2 border-secondary-500/10 transform -rotate-12"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-12 relative">
          <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500 skew-x-12"></div>
          <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 translate-x-12 w-10 h-1 bg-secondary-500 -skew-x-12"></div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            <span class="gradient-text">Business Model</span>
            <span class="block text-white mt-2">Designed to grow with your team</span>
            <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-500 transform skew-x-12"></span>
            <span class="absolute -bottom-2 right-0 w-1/3 h-1 bg-secondary-500 transform -skew-x-12"></span>
          </h2>
          <p class="text-gray-300 max-w-3xl mx-auto mt-6">
            Deepcost combines subscription (seats + project packs) with transactional AI usage and services. Start free, upgrade to team-wide subscriptions, and add transactional usage as you scale.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <!-- Freemium -->
          <div class="relative bg-dark-800/60 backdrop-blur-sm p-8 rounded-2xl border border-primary-500/30 ai-glow-primary flex flex-col">
            <div class="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-primary-900/40 border border-primary-500/40 text-primary-200 text-xs uppercase tracking-wide">
              Freemium · Promotional
            </div>
            <h3 class="text-2xl font-semibold text-white mb-3">Freemium</h3>
            <p class="text-sm text-gray-400 mb-6">
              Perfect for trying Deepcost on a live project with a small team.
            </p>
            <ul class="space-y-3 text-sm text-gray-300 flex-1">
              <li class="flex items-start">
                <span class="text-primary-400 mr-2 mt-0.5">•</span>
                <span>
                  <span class="font-semibold">What&apos;s free:</span>
                  1 project, 2 seats, limited AI, community templates (watermarked export).
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-400 mr-2 mt-0.5">•</span>
                <span>
                  <span class="font-semibold">Upgrade triggers:</span>
                  approvals/CRM, custom rules, BIM import, FOT export and advanced reporting.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-400 mr-2 mt-0.5">•</span>
                <span>
                  <span class="font-semibold">Goal:</span>
                  convert 10–20% of users within 60 days via in-app prompts.
                </span>
              </li>
            </ul>
            <div class="mt-8">
              <a :href="deepcostLink" class="btn-outline w-full text-center" target="_blank" rel="noopener noreferrer">
                Try now
              </a>
            </div>
          </div>

          <!-- Subscription -->
          <div class="relative bg-gradient-to-b from-primary-900/60 via-dark-900 to-dark-900/90 backdrop-blur-md p-8 rounded-2xl border-2 border-primary-500/70 shadow-glass-lg flex flex-col">
            <div class="absolute -top-3 right-6 px-3 py-1 rounded-full bg-secondary-600 text-xs font-semibold text-white tracking-wide">
              Most Popular
            </div>
            <div class="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-primary-900/40 border border-primary-500/40 text-primary-200 text-xs uppercase tracking-wide">
              Subscription · Primary
            </div>
            <h3 class="text-2xl font-semibold text-white mb-3">Subscription</h3>
            <p class="text-sm text-gray-300 mb-6">
              Core revenue model with seat-based pricing and annual commitments.
            </p>
            <p class="text-xs uppercase tracking-wide text-primary-300 mb-4">Packaging</p>
            <p class="text-gray-200 text-sm mb-4">Seats / Month (paid annually)</p>

            <p class="text-xs uppercase tracking-wide text-primary-300 mb-3">Who it's for</p>
            <ul class="space-y-3 text-sm text-gray-200 flex-1">
              <li>
                <span class="font-semibold">Growing teams</span> that need predictable, always‑on access for estimators and project leaders.
              </li>
              <li>
                <span class="font-semibold">Centralised governance</span> with role‑based access, approvals and audit trails across projects.
              </li>
              <li>
                <span class="font-semibold">Multi‑project usage</span> with shared master data, templates and reporting across your portfolio.
              </li>
            </ul>

            <div class="mt-8 flex flex-col gap-3">
              <NuxtLink to="/contact" class="btn-primary w-full text-center">
                Talk to us about subscriptions
              </NuxtLink>
              <NuxtLink to="/case-studies" class="btn-outline w-full text-center">
                See how customers use Deepcost
              </NuxtLink>
            </div>
          </div>

          <!-- Transactional -->
          <div class="relative bg-dark-800/60 backdrop-blur-sm p-8 rounded-2xl border border-secondary-500/40 ai-glow-secondary flex flex-col">
            <div class="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-secondary-900/40 border border-secondary-500/40 text-secondary-200 text-xs uppercase tracking-wide">
              Transactional · Secondary
            </div>
            <h3 class="text-2xl font-semibold text-white mb-3">Transactional</h3>
            <p class="text-sm text-gray-400 mb-6">
              Pay-as-you-go usage and professional services to complement subscriptions.
            </p>
            <ul class="space-y-3 text-sm text-gray-300 flex-1">
              <li class="flex items-start">
                <span class="text-secondary-400 mr-2 mt-0.5">•</span>
                <span>
                  <span class="font-semibold">AI Usage Credits:</span>
                  FOT generations, drawing/Q&amp;A tokens, OCR pages (monthly pool + overage).
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary-400 mr-2 mt-0.5">•</span>
                <span>
                  <span class="font-semibold">Storage / API overage:</span>
                  versioned master data and integrations.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary-400 mr-2 mt-0.5">•</span>
                <span>
                  <span class="font-semibold">Professional services:</span>
                  onboarding, ruleset build (NFPA/SS/FI), BIM/ERP integrations (fixed-fee).
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary-400 mr-2 mt-0.5">•</span>
                <span>
                  <span class="font-semibold">Partner revenue:</span>
                  OEM component libraries &amp; marketplaces (rev-share).
                </span>
              </li>
            </ul>
            <div class="mt-8">
              <NuxtLink to="/contact" class="btn-outline w-full text-center">
                Discuss transactional model
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section: Drive to Contact / Demo -->
    <section class="cta-section section-padding relative overflow-hidden">
      <div class="absolute inset-0 z-0 bg-gradient-to-br from-primary-900/90 via-dark-900 to-secondary-900/90"></div>
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#ffffff,#ffffff_1px,transparent_1px,transparent_12px)]"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="glass-panel p-8 md:p-12 rounded-2xl shadow-glass-lg max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                <span class="gradient-text">Need help choosing</span>
                <span class="block text-white mt-2">the right plan?</span>
              </h2>
              <p class="text-gray-300 mb-6">
                Share your project pipeline, team size and workflows — we&apos;ll recommend a mix of seats, AI credits and services that fits your budget.
              </p>
              <ul class="space-y-2 text-sm text-gray-300 mb-6">
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-primary-400 mr-2 mt-0.5"></i>
                  <span>Side‑by‑side comparison of Freemium vs. Subscription vs. Transactional.</span>
                </li>
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-primary-400 mr-2 mt-0.5"></i>
                  <span>Custom quote for your region and regulatory requirements.</span>
                </li>
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-primary-400 mr-2 mt-0.5"></i>
                  <span>Guidance on rollout, change management and adoption.</span>
                </li>
              </ul>
              <NuxtLink to="/contact" class="btn-primary inline-flex items-center">
                Talk to our team
              </NuxtLink>
            </div>

            <div class="glass-panel-light p-6 rounded-xl">
              <h3 class="text-xl font-semibold text-white mb-4">Get a tailored pricing overview</h3>
              <p class="text-gray-300 text-sm mb-4">
                We&apos;ll respond within 1 business day with next steps.
              </p>
              <NuxtLink to="/contact" class="btn-outline w-full text-center">
                Share my requirements
              </NuxtLink>
              <p class="text-xs text-gray-500 mt-4">
                No spam. No obligation. Just a clear view of how Deepcost can work for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

useHead({
  title: 'Pricing & Business Model'
})

const route = useRoute();

const deepcostLink = computed(() => {
  const baseUrl = 'https://deepcost.io';
  const query = route.query;
  const queryString = new URLSearchParams(query).toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
});
</script>
