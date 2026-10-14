<template>
  <section class="section relative overflow-hidden bg-white">
    <div class="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-ai-100 blur-3xl" aria-hidden="true"></div>
    <div class="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-brand-100 blur-3xl" aria-hidden="true"></div>
    <div class="container-site relative">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <UiSectionHeader eyebrow="See it in action" title="Watch CCorex at work" lead="Short tours of the real product — the same screens your estimators, project managers and HR team will use." />
        <NuxtLink to="/contact" class="btn-secondary shrink-0">Book a live demo instead <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></NuxtLink>
      </div>

      <div class="mt-12 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <UiVideoCard large src="/videos/tour-overview.mp4" poster="/videos/tour-overview-poster.webp" eyebrow="Platform tour" title="CCorex in 40 seconds" duration="0:39" />
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <UiVideoCard src="/videos/tour-deepcost.mp4" poster="/videos/tour-deepcost-poster.webp" eyebrow="DeepCost" title="From tender to Form of Tender" duration="0:36" />
          <UiVideoCard src="/videos/tour-arivu.mp4" poster="/videos/tour-arivu-poster.webp" eyebrow="ARIVU AI" title="Ask your business anything" duration="0:31" />
        </div>
      </div>
      <div class="mt-5 grid gap-5 sm:grid-cols-3">
        <UiVideoCard src="/videos/tour-deeptrack.mp4" poster="/videos/tour-deeptrack-poster.webp" eyebrow="DeepTrack" title="Budgets, purchasing and claims" duration="0:24" />
        <UiVideoCard src="/videos/tour-deephr.mp4" poster="/videos/tour-deephr-poster.webp" eyebrow="DeepHR" title="Attendance to payslips" duration="0:29" />
        <UiVideoCard src="/videos/tour-deepplan.mp4" poster="/videos/tour-deepplan-poster.webp" eyebrow="DeepPlan AI" title="Drawings to quantities" duration="0:23" />
      </div>
    </div>
  </section>
</template>
