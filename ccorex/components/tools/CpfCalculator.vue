<template>
  <div class="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
    <form class="card space-y-5" @submit.prevent>
      <h2 class="text-lg font-semibold">Employee and wages for the month</h2>
      <div>
        <label for="cpf-ow" class="calc-label">Ordinary wages (S$)</label>
        <input id="cpf-ow" v-model="ow" type="text" inputmode="decimal" autocomplete="off" class="calc-input" placeholder="e.g. 4500" />
        <p class="calc-hint">Salary and fixed allowances for the month, before deductions.</p>
      </div>
      <div>
        <label for="cpf-aw" class="calc-label">Additional wages this month (S$)</label>
        <input id="cpf-aw" v-model="aw" type="text" inputmode="decimal" autocomplete="off" class="calc-input" placeholder="0" />
        <p class="calc-hint">Bonuses and other pay not granted wholly for the month, such as an annual bonus.</p>
      </div>
      <div v-if="awNum > 0">
        <label for="cpf-aw-prev" class="calc-label">Additional wages already paid this year (S$)</label>
        <input id="cpf-aw-prev" v-model="awPrev" type="text" inputmode="decimal" autocomplete="off" class="calc-input" placeholder="0" />
      </div>
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="cpf-age" class="calc-label">Age</label>
          <select id="cpf-age" v-model="age" class="calc-input">
            <option value="le55">55 and below</option>
            <option value="55to60">Above 55 to 60</option>
            <option value="60to65">Above 60 to 65</option>
            <option value="65to70">Above 65 to 70</option>
            <option value="gt70">Above 70</option>
          </select>
        </div>
        <div>
          <label for="cpf-scheme" class="calc-label">Residency</label>
          <select id="cpf-scheme" v-model="scheme" class="calc-input">
            <option value="full">Citizen, PR from 3rd year, or PR on joint full rates</option>
            <option value="spr1-gg">PR 1st year: graduated rates</option>
            <option value="spr2-gg">PR 2nd year: graduated rates</option>
            <option value="spr1-fg">PR 1st year: full employer, graduated employee</option>
            <option value="spr2-fg">PR 2nd year: full employer, graduated employee</option>
          </select>
        </div>
      </div>
      <p class="calc-hint">Work Permit, S Pass and Employment Pass holders don’t contribute to CPF.</p>
    </form>

    <div class="card" aria-live="polite">
      <h2 class="text-lg font-semibold">CPF for the month</h2>
      <dl class="mt-5 grid gap-3 sm:grid-cols-2">
        <div class="calc-result"><dt>Employer pays</dt><dd>{{ money(res.employer) }}</dd></div>
        <div class="calc-result"><dt>Deducted from employee</dt><dd>{{ money(res.employee) }}</dd></div>
        <div class="calc-result"><dt>Total to CPF Board</dt><dd>{{ money(res.total) }}</dd></div>
        <div class="calc-result"><dt>Take-home before other deductions</dt><dd>{{ money(res.takeHome) }}</dd></div>
      </dl>
      <table class="mt-5 w-full text-sm">
        <caption class="sr-only">Wages that attract CPF</caption>
        <tbody class="divide-y divide-ink-100">
          <tr><th scope="row" class="py-2 text-left font-medium text-ink-600">Total wages</th><td class="py-2 text-right font-semibold text-ink-900">{{ money(res.totalWages) }}</td></tr>
          <tr><th scope="row" class="py-2 text-left font-medium text-ink-600">Ordinary wages subject to CPF</th><td class="py-2 text-right font-semibold text-ink-900">{{ money(res.owSubject) }}</td></tr>
          <tr v-if="awNum > 0"><th scope="row" class="py-2 text-left font-medium text-ink-600">Additional wages subject to CPF</th><td class="py-2 text-right font-semibold text-ink-900">{{ money(res.awSubject) }}</td></tr>
          <tr><th scope="row" class="py-2 text-left font-medium text-ink-600">Rates used (above $750)</th><td class="py-2 text-right font-semibold text-ink-900">{{ rate.total }}% total · {{ rate.employee }}% employee</td></tr>
        </tbody>
      </table>
      <div class="mt-5 space-y-3">
        <p v-if="res.band === 'none'" class="calc-info"><i class="fa-solid fa-circle-info mt-1" aria-hidden="true"></i><span>No CPF is payable on total wages of $50 or less in a month.</span></p>
        <p v-if="res.band === 'employer-only'" class="calc-info"><i class="fa-solid fa-circle-info mt-1" aria-hidden="true"></i><span>Above $50 and up to $500: only the employer contributes ({{ rate.low }}% of total wages).</span></p>
        <p v-if="res.band === 'phase-in'" class="calc-info"><i class="fa-solid fa-circle-info mt-1" aria-hidden="true"></i><span>Above $500 and up to $750: the employee share is phased in at {{ rate.taper }} × (total wages − $500).</span></p>
        <p v-if="res.owCapped" class="calc-info"><i class="fa-solid fa-circle-info mt-1" aria-hidden="true"></i><span>Ordinary wages above the $8,000 Ordinary Wage ceiling don’t attract CPF.</span></p>
        <p v-if="res.awCapped" class="calc-warn"><i class="fa-solid fa-triangle-exclamation mt-1" aria-hidden="true"></i><span>Only {{ money(res.awSubject) }} of the additional wages attracts CPF. This estimate assumes {{ money(res.owSubject) }} of ordinary wages in every month of the year; use the CPF Board’s Additional Wage ceiling calculator if pay changes during the year.</span></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CPF_RATES, cpfContribution, type CpfAge, type CpfScheme } from '~/utils/calculators'

const ow = ref('4500')
const aw = ref('')
const awPrev = ref('')
const age = ref<CpfAge>('le55')
const scheme = ref<CpfScheme>('full')

const num = (s: string) => { const n = Number(String(s).replace(/[,\s$]/g, '')); return Number.isFinite(n) && n > 0 ? n : 0 }
const awNum = computed(() => num(aw.value))
const rate = computed(() => CPF_RATES[scheme.value][age.value])
const res = computed(() => cpfContribution({ ordinaryWages: num(ow.value), additionalWages: awNum.value, additionalWagesEarlierThisYear: num(awPrev.value), age: age.value, scheme: scheme.value }))
const money = (n: number) => `$${n.toLocaleString('en-SG', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 })}`
</script>
