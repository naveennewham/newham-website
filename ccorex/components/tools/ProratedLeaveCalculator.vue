<template>
  <div class="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
    <form class="card space-y-5" @submit.prevent>
      <h2 class="text-lg font-semibold">Service and entitlement</h2>
      <div>
        <label for="al-year" class="calc-label">Year of service being counted</label>
        <select id="al-year" v-model.number="year" class="calc-input">
          <option v-for="(d, i) in ANNUAL_LEAVE_DAYS" :key="i" :value="i + 1">{{ ordinal(i + 1) }}{{ i + 1 === ANNUAL_LEAVE_DAYS.length ? ' and after' : '' }} year ({{ d }} days)</option>
        </select>
        <p class="calc-hint">Year of service starts on the day the employee starts work. Choose the 1st year for a new joiner.</p>
      </div>
      <div>
        <label for="al-ent" class="calc-label">Full-year annual leave (days)</label>
        <input id="al-ent" v-model="entitlement" type="text" inputmode="decimal" autocomplete="off" class="calc-input" :placeholder="String(statutory)" />
        <p class="calc-hint">The Employment Act minimum for this year is {{ statutory }} days. Enter a higher figure if the contract gives more.</p>
      </div>
      <fieldset>
        <legend class="calc-label">Months worked in that year</legend>
        <div class="grid gap-2 sm:grid-cols-2">
          <label class="flex cursor-pointer items-start gap-2 rounded-lg border border-ink-200 p-3 text-sm" :class="mode === 'dates' ? 'border-brand-600 bg-brand-50' : ''">
            <input v-model="mode" type="radio" value="dates" class="mt-0.5" />
            <span><span class="font-semibold text-ink-900">Work it out from dates</span><span class="block text-xs text-ink-500">Counts completed months only</span></span>
          </label>
          <label class="flex cursor-pointer items-start gap-2 rounded-lg border border-ink-200 p-3 text-sm" :class="mode === 'months' ? 'border-brand-600 bg-brand-50' : ''">
            <input v-model="mode" type="radio" value="months" class="mt-0.5" />
            <span><span class="font-semibold text-ink-900">Enter completed months</span><span class="block text-xs text-ink-500">0 to 12</span></span>
          </label>
        </div>
      </fieldset>
      <div v-if="mode === 'dates'" class="grid gap-4 sm:grid-cols-2">
        <div>
          <label for="al-from" class="calc-label">{{ year === 1 ? 'Start date' : 'Start of this year of service' }}</label>
          <input id="al-from" v-model="from" type="date" class="calc-input" />
        </div>
        <div>
          <label for="al-to" class="calc-label">Last day of service</label>
          <input id="al-to" v-model="to" type="date" class="calc-input" />
        </div>
        <p class="calc-hint sm:col-span-2">For an employee who has resigned, the last day includes the notice period. Leave out periods of approved unpaid leave.</p>
      </div>
      <div v-else>
        <label for="al-months" class="calc-label">Completed months of service in that year</label>
        <input id="al-months" v-model="monthsText" type="text" inputmode="numeric" autocomplete="off" class="calc-input" placeholder="e.g. 4" />
      </div>
    </form>

    <div class="card" aria-live="polite">
      <h2 class="text-lg font-semibold">Pro-rated annual leave</h2>
      <template v-if="res.eligible">
        <dl class="mt-5 grid gap-3 sm:grid-cols-2">
          <div class="calc-result sm:col-span-2"><dt>Annual leave for the period</dt><dd>{{ res.days }} {{ res.days === 1 ? 'day' : 'days' }}</dd></div>
          <div class="calc-result"><dt>Completed months</dt><dd>{{ res.months }}</dd></div>
          <div class="calc-result"><dt>Before rounding</dt><dd>{{ res.exact }} days</dd></div>
        </dl>
        <p class="mt-5 text-sm text-ink-600">({{ res.months }} ÷ 12) × {{ entNum }} days = {{ res.exact }} days<template v-if="res.exact !== res.days">, rounded {{ res.roundedUp ? 'up' : 'down' }}</template> = <strong class="text-ink-900">{{ res.days }} {{ res.days === 1 ? 'day' : 'days' }}</strong></p>
      </template>
      <p v-else-if="hasInput" class="calc-info mt-5"><i class="fa-solid fa-circle-info mt-1" aria-hidden="true"></i><span>With {{ res.months }} completed {{ res.months === 1 ? 'month' : 'months' }} of service the employee isn’t yet entitled to paid annual leave. MOM requires at least 3 months with the employer.</span></p>
      <p v-else class="mt-5 text-sm text-ink-500">Enter the dates or the completed months to see the pro-rated leave.</p>
      <div class="mt-5 space-y-3">
        <p class="calc-info"><i class="fa-solid fa-circle-info mt-1" aria-hidden="true"></i><span>MOM rounds a fraction of a day below one-half down, and one-half or more up to a full day.</span></p>
        <p v-if="mode === 'dates' && datesBackwards" class="calc-warn"><i class="fa-solid fa-triangle-exclamation mt-1" aria-hidden="true"></i><span>The last day of service is before the start date.</span></p>
        <p v-if="overYear" class="calc-warn"><i class="fa-solid fa-triangle-exclamation mt-1" aria-hidden="true"></i><span>These dates span more than 12 months. Count from the start of the current year of service; a full year gets the full entitlement.</span></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ANNUAL_LEAVE_DAYS, annualLeaveEntitlement, completedMonths, proratedAnnualLeave } from '~/utils/calculators'

const year = ref(1)
const entitlement = ref('')
const mode = ref<'dates' | 'months'>('dates')
const from = ref('2026-03-14')
const to = ref('2026-07-31')
const monthsText = ref('4')
const statutory = computed(() => annualLeaveEntitlement(year.value))
const num = (s: string) => { const n = Number(String(s).replace(/[,\s]/g, '')); return Number.isFinite(n) && n > 0 ? n : 0 }
const entNum = computed(() => num(entitlement.value) || statutory.value)
const datesBackwards = computed(() => !!from.value && !!to.value && to.value < from.value)
const rawMonths = computed(() => mode.value === 'dates' ? (from.value && to.value ? completedMonths(from.value, to.value) : 0) : Math.floor(num(monthsText.value)))
const overYear = computed(() => rawMonths.value > 12)
const hasInput = computed(() => mode.value === 'dates' ? !!from.value && !!to.value && !datesBackwards.value : num(monthsText.value) > 0)
// From the 2nd year on, the employee has already served over 3 months, so the 3-month rule is met.
const res = computed(() => proratedAnnualLeave({
  completedMonths: Math.min(12, rawMonths.value), entitlement: entNum.value,
  totalServiceMonths: year.value === 1 ? rawMonths.value : 12 * (year.value - 1) + rawMonths.value
}))
const ordinal = (n: number) => `${n}${n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'}`
</script>
