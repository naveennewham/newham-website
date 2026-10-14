<template>
  <section class="section bg-ink-50">
    <div class="container-site">
      <UiSectionHeader center eyebrow="On site and in the office" title="One platform, wherever the work happens" lead="From the estimating desk to the site gate to the board room — CCorex goes where your people work." />

      <div class="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-4">
        <UiVideoTile src="/videos/loop-suite.mp4" poster="/videos/loop-suite-poster.webp" class="md:col-span-2 md:row-span-2">
          <span class="chip-ai w-fit bg-white/15 text-white"><i class="fa-solid fa-diagram-project text-[10px]" aria-hidden="true"></i>Tender to handover</span>
          <h3 class="mt-3 text-2xl font-bold text-white sm:text-3xl">Every job, from the first drawing to the final claim</h3>
          <p class="mt-2 max-w-md text-sm text-ink-200">Price it in DeepCost, run it in DeepTrack, staff and pay it in DeepHR — on one sign-in.</p>
        </UiVideoTile>

        <UiVideoTile image="/images/product/deepcost-mto.webp" image-alt="DeepCost material take-off screen" class="md:col-span-2">
          <p class="text-xs font-semibold uppercase tracking-wider text-cyan-400">Estimators</p>
          <h3 class="mt-1 text-lg font-semibold text-white">AI reads the tender. You price it.</h3>
          <p class="mt-1 text-sm text-ink-200">AI tender summary and FOT AI in DeepCost.</p>
        </UiVideoTile>

        <UiVideoTile image="/images/product/deephr-attendance-sites.webp" image-alt="DeepHR attendance site locations with GPS radius" image-pos="object-center">
          <p class="text-xs font-semibold uppercase tracking-wider text-cyan-400">Site teams</p>
          <h3 class="mt-1 text-base font-semibold text-white">Check in by face and GPS</h3>
        </UiVideoTile>

        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-6 text-white">
          <i class="fa-solid fa-landmark text-2xl text-cyan-400" aria-hidden="true"></i>
          <h3 class="mt-3 text-base font-semibold text-white">Singapore &amp; India payroll</h3>
          <div class="mt-3 flex flex-wrap gap-1.5">
            <span v-for="b in statutory" :key="b" class="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium">{{ b }}</span>
          </div>
        </div>

        <UiVideoTile image="/images/product/deeptrack-procurement.webp" image-alt="DeepTrack purchase requests with approvals by PM, general manager and MD" class="md:col-span-2">
          <p class="text-xs font-semibold uppercase tracking-wider text-cyan-400">Managers &amp; directors</p>
          <h3 class="mt-1 text-lg font-semibold text-white">Approve budgets, purchases and leave — with the evidence in front of you</h3>
        </UiVideoTile>

        <UiVideoTile image="/images/product/arivu-deepcost.webp" image-alt="ARIVU assistant open inside DeepCost" image-pos="object-right-top">
          <p class="text-xs font-semibold uppercase tracking-wider text-ai-400">ARIVU AI</p>
          <h3 class="mt-1 text-base font-semibold text-white">Answers from your own data</h3>
        </UiVideoTile>

        <NuxtLink to="/platform" class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lift">
          <span class="flex -space-x-2" aria-hidden="true">
            <span v-for="a in appIcons" :key="a.icon" class="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-card ring-2 ring-white" :class="a.tone"><i :class="a.icon"></i></span>
          </span>
          <span>
            <span class="block text-base font-semibold text-ink-900">One sign-in, every app</span>
            <span class="mt-1 block text-sm text-brand-700 group-hover:text-brand-900">How the platform works →</span>
          </span>
        </NuxtLink>
      </div>
      <p class="mt-4 text-center text-xs text-ink-400">All tiles show the real CCorex product.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const statutory = ['CPF', 'SDL', 'SHG', 'EPF', 'ESI', 'PT', 'TDS']
const appIcons = [
  { icon: 'fa-solid fa-calculator', tone: 'text-sky-700' }, { icon: 'fa-solid fa-diagram-project', tone: 'text-amber-700' },
  { icon: 'fa-solid fa-user-group', tone: 'text-emerald-700' }, { icon: 'fa-solid fa-compass-drafting', tone: 'text-violet-700' },
  { icon: 'fa-solid fa-wand-magic-sparkles', tone: 'text-ai-600' }
]
</script>
