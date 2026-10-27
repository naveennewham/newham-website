<template>
  <div class="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
    <form class="card" @submit.prevent>
      <h2 class="text-lg font-semibold">Construction Work Permit holders</h2>
      <p class="mt-1 text-sm text-ink-600">Enter the number of workers employed for the whole month in each levy tier.</p>
      <div class="relative mt-5 overflow-x-auto">
        <table class="w-full min-w-[460px] text-sm">
          <caption class="sr-only">Workers and monthly levy rate by tier</caption>
          <thead class="text-xs uppercase tracking-wider text-ink-500">
            <tr><th scope="col" class="pb-2 text-left font-semibold">Source and skill</th><th scope="col" class="pb-2 text-right font-semibold">Monthly rate</th><th scope="col" class="w-24 pb-2 text-right font-semibold">Workers</th></tr>
          </thead>
          <tbody class="divide-y divide-ink-100">
            <tr v-for="t in LEVY_TIERS" :key="t.id">
              <th scope="row" class="py-2.5 pr-3 text-left font-medium text-ink-900"><label :for="`levy-${t.id}`">{{ t.label }}</label></th>
              <td class="py-2.5 text-right text-ink-700">${{ t.monthly }}</td>
              <td class="py-2.5 pl-3"><input :id="`levy-${t.id}`" v-model="counts[t.id]" type="text" inputmode="numeric" autocomplete="off" class="calc-input text-right" placeholder="0" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <details class="mt-5 rounded-xl border border-ink-100 p-4">
        <summary class="cursor-pointer text-sm font-semibold text-ink-900">Add a worker employed for part of the month</summary>
        <div class="mt-4 grid gap-4 sm:grid-cols-[1fr_8rem]">
          <div>
            <label for="levy-part-tier" class="calc-label">Tier</label>
            <select id="levy-part-tier" v-model="partTier" class="calc-input">
              <option v-for="t in LEVY_TIERS.filter((x) => x.id !== 'unskilled')" :key="t.id" :value="t.id">{{ t.label }}</option>
            </select>
          </div>
          <div>
            <label for="levy-part-days" class="calc-label">Days</label>
            <input id="levy-part-days" v-model="partDays" type="text" inputmode="numeric" autocomplete="off" class="calc-input" placeholder="0" />
          </div>
        </div>
        <p class="calc-hint mt-2">Charged at MOM’s daily rate: {{ money(dailyLevy(partRate)) }} a day for this tier.</p>
      </details>
      <div class="mt-5">
        <label for="levy-locals" class="calc-label">Local employees earning the Local Qualifying Salary (optional)</label>
        <input id="levy-locals" v-model="locals" type="text" inputmode="numeric" autocomplete="off" class="calc-input" placeholder="e.g. 4" />
        <p class="calc-hint">Used for a rough quota check at 5 Work Permit holders per qualifying local.</p>
      </div>
    </form>

    <div class="card" aria-live="polite">
      <h2 class="text-lg font-semibold">Levy estimate</h2>
      <dl class="mt-5 grid gap-3">
        <div class="calc-result"><dt>Monthly levy</dt><dd>{{ money(res.monthly) }}</dd></div>
        <div class="calc-result"><dt>Annual levy at this headcount</dt><dd>{{ money(res.annual) }}</dd></div>
      </dl>
      <table class="mt-5 w-full text-sm">
        <caption class="sr-only">Headcount checks</caption>
        <tbody class="divide-y divide-ink-100">
          <tr><th scope="row" class="py-2 text-left font-medium text-ink-600">Work Permit holders</th><td class="py-2 text-right font-semibold text-ink-900">{{ res.workPermits }}</td></tr>
          <tr><th scope="row" class="py-2 text-left font-medium text-ink-600">Higher-skilled (R1)</th><td class="py-2 text-right font-semibold text-ink-900">{{ res.r1 }}<span v-if="res.r1Share != null" class="font-normal text-ink-500"> ({{ Math.round(res.r1Share * 100) }}%)</span></td></tr>
          <tr v-if="res.quota != null"><th scope="row" class="py-2 text-left font-medium text-ink-600">Quota at 1:5</th><td class="py-2 text-right font-semibold text-ink-900">{{ res.quota }}</td></tr>
          <tr v-if="res.partMonthAmount"><th scope="row" class="py-2 text-left font-medium text-ink-600">Part-month worker</th><td class="py-2 text-right font-semibold text-ink-900">{{ money(res.partMonthAmount) }}</td></tr>
        </tbody>
      </table>
      <div class="mt-5 space-y-3">
        <p v-if="res.belowR1" class="calc-warn"><i class="fa-solid fa-triangle-exclamation mt-1" aria-hidden="true"></i><span>Fewer than 10% of these workers are R1. MOM requires at least 10% R1 before new R2 permits are issued or R2 permits renewed.</span></p>
        <p v-if="res.overQuota" class="calc-warn"><i class="fa-solid fa-triangle-exclamation mt-1" aria-hidden="true"></i><span>This headcount is above a 1:5 quota for {{ num(locals) }} qualifying locals. Check your quota on MOM’s WP Online before applying or renewing.</span></p>
        <p class="calc-info"><i class="fa-solid fa-circle-info mt-1" aria-hidden="true"></i><span>Skill changes take effect from the 1st of the following month. The annual figure assumes the full-month headcount stays the same for 12 months.</span></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LEVY_TIERS, constructionLevy, dailyLevy, type LevyTier } from '~/utils/calculators'

const counts = reactive<Record<string, string>>({ 'mynas-r1': '2', 'mynas-r2': '6', 'nts-r1': '', 'nts-r2': '', 'offsite-r1': '', 'offsite-r2': '', unskilled: '' })
const partTier = ref<LevyTier>('mynas-r2')
const partDays = ref('')
const locals = ref('')
const num = (s: string) => { const n = Number(String(s).replace(/[,\s]/g, '')); return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0 }
const partRate = computed(() => LEVY_TIERS.find((t) => t.id === partTier.value)!.monthly)
const res = computed(() => constructionLevy({
  counts: Object.fromEntries(LEVY_TIERS.map((t) => [t.id, num(counts[t.id] ?? '')])),
  partMonth: num(partDays.value) ? [{ tier: partTier.value, days: Math.min(31, num(partDays.value)) }] : [],
  localQualifyingEmployees: locals.value.trim() ? num(locals.value) : undefined
}))
const money = (n: number) => `$${n.toLocaleString('en-SG', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 })}`
</script>
