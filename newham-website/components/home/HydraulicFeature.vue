<template>
  <!-- Featured service: sprinkler hydraulic calculations, placed high on the home page. -->
  <section id="hydraulic-calculations" class="section relative scroll-mt-16 overflow-hidden bg-hero text-white" aria-labelledby="hydraulic-title">
    <div class="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>
    <div class="container-site relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <p class="eyebrow-dark"><i class="fa-solid fa-star text-[10px]" aria-hidden="true"></i> Featured service</p>
        <h2 id="hydraulic-title" class="mt-4 text-white text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Sprinkler hydraulic calculations, <span class="text-cyan-400">ready for SCDF submission</span>
        </h2>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
          Send us the sprinkler layout and the water supply data. We calculate the hydraulically most remote area node by node, check demand against supply, set the fire pump duty and hand back a report a reviewer can trace, prepared to SS CP 52.
        </p>
        <ul class="mt-7 grid gap-3 sm:grid-cols-2">
          <li v-for="p in points" :key="p" class="flex gap-2.5 text-white/90"><i class="fa-solid fa-circle-check mt-1 text-cyan-400" aria-hidden="true"></i>{{ p }}</li>
        </ul>
        <div class="mt-9 flex flex-wrap items-center gap-3">
          <NuxtLink to="/sprinkler-hydraulic-calculation-services" class="btn-accent">Hydraulic calculation services <i class="fa-solid fa-arrow-right ml-1 text-xs" aria-hidden="true"></i></NuxtLink>
          <NuxtLink to="/appointment" class="btn-ghost-dark">Send a layout to calculate</NuxtLink>
        </div>
        <p class="mt-5 text-sm text-white/60">
          Learning the method? Read <NuxtLink to="/guides/sprinkler-hydraulic-calculations" class="font-semibold text-cyan-300 underline-offset-2 hover:underline">how to calculate a fire sprinkler system</NuxtLink>, with a worked example.
        </p>
      </div>

      <!-- Calculation sheet preview (figures from the guide's illustrative example) -->
      <div class="relative" aria-hidden="true">
        <div class="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-2xl"></div>
        <div class="relative rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur">
          <div class="flex items-center justify-between">
            <p class="text-sm font-semibold">Remote area · branch 1</p>
            <span class="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-300">SS CP 52</span>
          </div>
          <table class="mt-4 w-full text-left text-sm">
            <thead class="text-xs uppercase tracking-wider text-white/50">
              <tr><th class="py-2 font-semibold">Node</th><th class="py-2 text-right font-semibold">Flow L/min</th><th class="py-2 text-right font-semibold">Pressure bar</th></tr>
            </thead>
            <tbody class="divide-y divide-white/10 tabular-nums">
              <tr v-for="r in rows" :key="r[0]"><td class="py-2.5">{{ r[0] }}</td><td class="py-2.5 text-right">{{ r[1] }}</td><td class="py-2.5 text-right">{{ r[2] }}</td></tr>
            </tbody>
          </table>
          <!-- demand vs supply -->
          <div class="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
            <div class="flex items-center justify-between text-xs text-white/60"><span>Demand against supply</span><span class="font-semibold text-emerald-300">Margin OK</span></div>
            <svg viewBox="0 0 300 110" class="mt-2 h-28 w-full">
              <path d="M10 100 H290 M10 100 V8" stroke="rgba(255,255,255,.25)" stroke-width="1" fill="none" />
              <path d="M10 22 C 110 26, 200 44, 290 92" stroke="#22d3ee" stroke-width="2.5" fill="none" />
              <path d="M10 92 C 90 88, 150 76, 196 60" stroke="#f472b6" stroke-width="2.5" fill="none" stroke-dasharray="5 4" />
              <circle cx="196" cy="60" r="5" fill="#f472b6" />
              <text x="232" y="44" fill="#a5f3fc" font-size="10">Supply</text>
              <text x="120" y="96" fill="#fbcfe8" font-size="10">System demand</text>
            </svg>
          </div>
          <p class="mt-3 text-[11px] text-white/40">Illustrative figures, not design values.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const points = ['Remote area and node diagram', 'Node-by-node calculation', 'Demand against supply', 'Fire pump duty point', 'Tree, looped and gridded systems', 'PE review coordinated']
const rows = [['Head 1', '60.0', '0.562'], ['Head 2', '62.8', '0.617'], ['Head 3', '72.5', '0.822'], ['Branch inlet', '195.4', '0.940']]
</script>
