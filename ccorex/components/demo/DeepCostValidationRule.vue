<template>
  <div class="card flex flex-col">
    <div class="flex items-center gap-3">
      <span class="icon-tile"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i></span>
      <div class="mr-auto">
        <h3 class="text-lg font-semibold">Validation engine</h3>
        <p class="text-xs text-ink-500">Rules per trade and item group</p>
      </div>
      <span class="rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-600">Try it · sample rule</span>
    </div>

    <p class="mt-5 rounded-xl bg-ink-50 px-4 py-3 font-mono text-[12px] leading-relaxed text-ink-700">
      <span class="text-brand-700">IF</span> area.hazard_class = <strong>Light hazard</strong><br />
      <span class="text-brand-700">THEN</span> sprinkler_head.type = <strong>Quick response</strong>
    </p>

    <fieldset class="mt-5">
      <legend class="text-xs font-semibold uppercase tracking-wider text-ink-500">Area hazard class</legend>
      <div class="mt-2 flex flex-wrap gap-2">
        <button v-for="h in hazards" :key="h" type="button" class="rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors" :class="hazard === h ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300'" :aria-pressed="hazard === h" @click="hazard = h">{{ h }}</button>
      </div>
    </fieldset>
    <fieldset class="mt-4">
      <legend class="text-xs font-semibold uppercase tracking-wider text-ink-500">Component picked in the MTO</legend>
      <div class="mt-2 flex flex-wrap gap-2">
        <button v-for="h in heads" :key="h" type="button" class="rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors" :class="head === h ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300'" :aria-pressed="head === h" @click="head = h">Sprinkler head · {{ h }}</button>
      </div>
    </fieldset>

    <p class="mt-5 flex items-start gap-2.5 rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300" :class="ok ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-700'" aria-live="polite">
      <i :class="ok ? 'fa-solid fa-circle-check text-emerald-600' : 'fa-solid fa-circle-xmark text-rose-600'" class="mt-0.5" aria-hidden="true"></i>
      <span v-if="ok">Accepted — the component meets the rule for this area.</span>
      <span v-else>Rejected by the MTO — a {{ hazard.toLowerCase() }} area needs a quick-response head under this rule.</span>
    </p>
    <p class="mt-auto pt-4 text-xs text-ink-500">Sample rule for illustration. Your admins write the conditions for each trade and item group.</p>
  </div>
</template>

<script setup lang="ts">
// Interactive example of the DeepCost validation engine (FDD §6.4): "if the area
// meets these conditions, the component must meet these". Sample rule only.
const hazards = ['Light hazard', 'Ordinary hazard']
const heads = ['Quick response', 'Standard response']
const hazard = ref('Light hazard')
const head = ref('Standard response')
const ok = computed(() => hazard.value !== 'Light hazard' || head.value === 'Quick response')
</script>
