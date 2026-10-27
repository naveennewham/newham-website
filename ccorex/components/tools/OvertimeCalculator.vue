<template>
  <div class="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
    <form class="card space-y-5" @submit.prevent>
      <h2 class="text-lg font-semibold">Employee and overtime hours</h2>
      <div>
        <label for="ot-basic" class="calc-label">Monthly basic salary (S$)</label>
        <input id="ot-basic" v-model="basic" type="text" inputmode="decimal" autocomplete="off" class="calc-input" placeholder="e.g. 2200" />
        <p class="calc-hint">Basic pay only: leave out allowances, overtime and bonuses.</p>
      </div>
      <fieldset>
        <legend class="calc-label">Type of employee</legend>
        <div class="grid gap-2 sm:grid-cols-2">
          <label class="flex cursor-pointer items-start gap-2 rounded-lg border border-ink-200 p-3 text-sm" :class="workman ? 'border-brand-600 bg-brand-50' : ''">
            <input v-model="workman" type="radio" :value="true" class="mt-0.5" />
            <span><span class="font-semibold text-ink-900">Workman</span><span class="block text-xs text-ink-500">Mainly manual work, e.g. construction workers, cleaners, lorry and van drivers</span></span>
          </label>
          <label class="flex cursor-pointer items-start gap-2 rounded-lg border border-ink-200 p-3 text-sm" :class="!workman ? 'border-brand-600 bg-brand-50' : ''">
            <input v-model="workman" type="radio" :value="false" class="mt-0.5" />
            <span><span class="font-semibold text-ink-900">Non-workman</span><span class="block text-xs text-ink-500">Other employees who aren’t managers or executives</span></span>
          </label>
        </div>
      </fieldset>
      <div>
        <label for="ot-hours" class="calc-label">Overtime hours this month</label>
        <input id="ot-hours" v-model="hours" type="text" inputmode="decimal" autocomplete="off" class="calc-input" placeholder="e.g. 10" />
        <p class="calc-hint">Hours worked beyond the contractual normal hours, excluding breaks.</p>
      </div>
    </form>

    <div class="card" aria-live="polite">
      <h2 class="text-lg font-semibold">Overtime pay for the month</h2>
      <template v-if="res.covered">
        <dl class="mt-5 grid gap-3 sm:grid-cols-2">
          <div class="calc-result sm:col-span-2"><dt>Overtime pay</dt><dd>{{ money(res.overtimePay) }}</dd></div>
          <div class="calc-result"><dt>Hourly basic rate</dt><dd>{{ money(res.hourlyBasic) }}</dd></div>
          <div class="calc-result"><dt>Overtime rate (1.5×)</dt><dd>{{ money(res.overtimeRate) }}</dd></div>
        </dl>
        <p class="mt-5 text-sm text-ink-600">{{ money(res.overtimeRate) }} × {{ hoursNum }} hours = <strong class="text-ink-900">{{ money(res.overtimePay) }}</strong></p>
      </template>
      <p v-else-if="basicNum > 0" class="calc-info mt-5"><i class="fa-solid fa-circle-info mt-1" aria-hidden="true"></i><span>A {{ workman ? 'workman' : 'non-workman' }} earning a basic salary above {{ money(workman ? OT_WORKMAN_LIMIT : OT_NON_WORKMAN_LIMIT) }} isn’t covered by Part 4 of the Employment Act, so overtime pay, if any, follows the employment contract.</span></p>
      <p v-else class="mt-5 text-sm text-ink-500">Enter a monthly basic salary to see the overtime pay.</p>
      <div class="mt-5 space-y-3">
        <p v-if="res.covered && res.hourlyCapped" class="calc-info"><i class="fa-solid fa-circle-info mt-1" aria-hidden="true"></i><span>For non-workmen the hourly rate for overtime is capped at $13.60, the rate for a $2,600 salary.</span></p>
        <p v-if="res.overLimit" class="calc-warn"><i class="fa-solid fa-triangle-exclamation mt-1" aria-hidden="true"></i><span>MOM limits overtime to 72 hours a month for employees covered by Part 4. Check whether an exemption applies before scheduling more.</span></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { overtimePay, OT_NON_WORKMAN_LIMIT, OT_WORKMAN_LIMIT } from '~/utils/calculators'

const basic = ref('2200')
const workman = ref(true)
const hours = ref('10')
const num = (s: string) => { const n = Number(String(s).replace(/[,\s$]/g, '')); return Number.isFinite(n) && n > 0 ? n : 0 }
const basicNum = computed(() => num(basic.value))
const hoursNum = computed(() => num(hours.value))
const res = computed(() => overtimePay({ monthlyBasic: basicNum.value, workman: workman.value, overtimeHours: hoursNum.value }))
const money = (n: number) => `$${n.toLocaleString('en-SG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
</script>
