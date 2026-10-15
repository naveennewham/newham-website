<template>
  <section class="section relative overflow-hidden bg-ink-50">
    <div class="container-site">
      <UiSectionHeader center eyebrow="Getting started" title="Up and running in four steps" lead="We set CCorex up with you — no servers to install and no hardware to buy." />
      <ol class="relative mt-14 grid gap-6 md:grid-cols-4">
        <svg class="pointer-events-none absolute left-0 right-0 top-7 hidden h-8 w-full md:block" viewBox="0 0 1000 32" preserveAspectRatio="none" aria-hidden="true">
          <path class="gs-line" d="M60 16 C 200 -10 300 42 440 16 S 700 -10 940 16" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 8" />
        </svg>
        <li v-for="(s, i) in steps" :key="s.title" class="relative text-center">
          <UiReveal :delay="i * 120">
            <span class="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl text-brand-700 shadow-lift ring-1 ring-ink-100">
              <i :class="s.icon" aria-hidden="true"></i>
              <span class="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-700 text-[11px] font-bold text-white">{{ i + 1 }}</span>
            </span>
            <h3 class="mt-5 text-lg font-semibold">{{ s.title }}</h3>
            <p class="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-ink-600">{{ s.text }}</p>
          </UiReveal>
        </li>
      </ol>

      <div class="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:flex-row sm:p-8">
        <UiLottie src="/lottie/getting-started.json" class="h-20 w-20 shrink-0"><template #fallback><span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-ai-gradient text-xl text-white"><i class="fa-regular fa-calendar-check" aria-hidden="true"></i></span></template></UiLottie>
        <div class="flex-1 text-center sm:text-left">
          <p class="text-lg font-bold text-ink-900">Not sure where to start?</p>
          <p class="mt-1 text-sm text-ink-600">Book a 30-minute call. We’ll look at how your team estimates, delivers and pays today — a conversation, not a sales pitch.</p>
        </div>
        <div class="flex shrink-0 flex-col gap-2 sm:items-end">
          <NuxtLink to="/contact" class="btn-primary">Book a call</NuxtLink>
          <a href="mailto:admin@newhamtech.com" class="text-xs font-medium text-ink-500 hover:text-brand-700">or email admin@newhamtech.com</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { icon: 'fa-solid fa-building-circle-check', title: 'Set up your organisation', text: 'We create your organisation and admin, and switch on the apps in your plan.' },
  { icon: 'fa-solid fa-users-gear', title: 'Add your people', text: 'Add users one by one or bulk-upload from Excel, with a role in each app.' },
  { icon: 'fa-solid fa-file-import', title: 'Bring your data', text: 'Import your price library, customers and employees from Excel templates.' },
  { icon: 'fa-solid fa-headset', title: 'Go live with support', text: 'Training for each team, a helpdesk in every app and ARIVU on hand for questions.' }
]
</script>

<style scoped>
.gs-line { color: rgb(0 111 127 / .35); animation: gs-dash 30s linear infinite; }
@keyframes gs-dash { to { stroke-dashoffset: -400; } }
@media (prefers-reduced-motion: reduce) { .gs-line { animation: none; } }
</style>
