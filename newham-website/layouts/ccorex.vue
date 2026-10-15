<template>
  <!-- Kept for backwards compatibility: identical to layouts/default.vue. -->
  <div class="flex min-h-screen flex-col bg-white">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
    <LayoutNavbar />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <LayoutFooter />
    <UiConsentBanner site="newhamtech.com" />
  </div>
</template>
