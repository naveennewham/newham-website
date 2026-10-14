<template>
  <div class="card">
    <div class="flex items-center gap-3">
      <span class="icon-tile"><i class="fa-solid fa-calculator" aria-hidden="true"></i></span>
      <div class="mr-auto">
        <h3 class="text-lg font-semibold">How a line is priced</h3>
        <p class="text-xs text-ink-500">From the price library, in SGD</p>
      </div>
      <span class="rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-600">Sample figures</span>
    </div>

    <div class="mt-6 grid gap-6 lg:grid-cols-3">
      <!-- Cost -->
      <div>
        <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">1 · Line cost</p>
        <p class="mt-3 flex flex-wrap items-center gap-1.5 text-sm">
          <span class="token">Qty</span><span class="op">×</span><span class="op">(</span><span class="token">Material</span><span class="op">+</span><span class="token">Installation</span><span class="op">)</span>
        </p>
        <p class="mt-3 font-mono text-xs text-ink-600">10 × (45.00 + 20.00) = <strong class="text-ink-900">650.00</strong></p>
        <p class="mt-2 text-xs text-ink-500">Uses the latest dated library price, or the estimator's override.</p>
      </div>
      <!-- Selling -->
      <div>
        <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">2 · Selling price</p>
        <p class="mt-3 flex flex-wrap items-center gap-1.5 text-sm">
          <span class="token">Material + markup</span><span class="op">+</span><span class="token">Installation + markup</span>
        </p>
        <p class="mt-3 font-mono text-xs text-ink-600">450.00 +15% · 200.00 +25% = <strong class="text-ink-900">767.50</strong></p>
        <p class="mt-2 text-xs text-ink-500">Material and installation markups are applied separately.</p>
      </div>
      <!-- Assembly -->
      <div>
        <p class="text-xs font-semibold uppercase tracking-wider text-brand-700">3 · Assemblies</p>
        <ul class="mt-3 space-y-1 text-xs">
          <li class="flex justify-between rounded-md bg-brand-50 px-2.5 py-1.5 font-semibold text-brand-900"><span>Sample assembly</span><span class="font-mono">= Σ children</span></li>
          <li v-for="c in children" :key="c" class="ml-4 flex items-center gap-2 rounded-md border border-ink-100 px-2.5 py-1 text-ink-700"><i class="fa-solid fa-turn-up rotate-90 text-[9px] text-ink-400" aria-hidden="true"></i>{{ c }}</li>
        </ul>
        <p class="mt-2 text-xs text-ink-500">An assembly's price is the sum of its child components.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Pricing rules from FDD §6.4, shown with sample figures.
const children = ['Sprinkler head', 'Drop pipe', 'Fittings']
</script>

<style scoped>
.token { @apply rounded-md bg-brand-700 px-2 py-1 text-xs font-semibold text-white; }
.op { @apply font-semibold text-ink-400; }
</style>
