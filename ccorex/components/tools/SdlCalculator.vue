<template>
  <div class="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
    <form class="card" @submit.prevent>
      <h2 class="text-lg font-semibold">Employees and monthly total wages</h2>
      <p class="mt-1 text-sm text-ink-600">Enter each employee’s total wages for the calendar month. Add a row for each employee working in Singapore, including Work Permit and Employment Pass holders.</p>
      <div class="relative mt-5 overflow-x-auto">
        <table class="w-full min-w-[420px] text-sm">
          <caption class="sr-only">Monthly total wages and SDL for each employee</caption>
          <thead class="text-xs uppercase tracking-wider text-ink-500">
            <tr><th scope="col" class="pb-2 text-left font-semibold">Employee</th><th scope="col" class="pb-2 text-left font-semibold">Total wages (S$)</th><th scope="col" class="pb-2 text-right font-semibold">SDL</th><th scope="col" class="w-10 pb-2"><span class="sr-only">Remove</span></th></tr>
          </thead>
          <tbody class="divide-y divide-ink-100">
            <tr v-for="(row, i) in rows" :key="row.id">
              <th scope="row" class="py-2.5 pr-3 text-left font-medium text-ink-900"><label :for="`sdl-${row.id}`">Employee {{ i + 1 }}</label></th>
              <td class="py-2.5"><input :id="`sdl-${row.id}`" v-model="row.wages" type="text" inputmode="decimal" autocomplete="off" class="calc-input" placeholder="e.g. 3200" /></td>
              <td class="py-2.5 pl-3 text-right text-ink-700">
                {{ res.lines[i].wages > 0 ? money(res.lines[i].levy, true) : '–' }}
                <span v-if="res.lines[i].band === 'minimum'" class="block text-xs text-ink-500">minimum</span>
                <span v-else-if="res.lines[i].band === 'maximum'" class="block text-xs text-ink-500">maximum</span>
              </td>
              <td class="py-2.5 pl-2 text-right">
                <button v-if="rows.length > 1" type="button" class="text-ink-400 hover:text-ink-700" :aria-label="`Remove employee ${i + 1}`" @click="rows.splice(i, 1)"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button v-if="rows.length < 50" type="button" class="btn-secondary mt-4" @click="addRow">Add an employee</button>
      <p class="calc-hint mt-3">Use the total wages for the calendar month, as in CPF Board’s worked example. For which payments count as wages, check CPF Board’s SDL page.</p>
    </form>

    <div class="card" aria-live="polite">
      <h2 class="text-lg font-semibold">SDL for the month</h2>
      <template v-if="res.employees">
        <dl class="mt-5 grid gap-3">
          <div class="calc-result"><dt>SDL payable</dt><dd>{{ money(res.payable) }}</dd></div>
          <div class="calc-result"><dt>Total before rounding down</dt><dd>{{ money(res.total, true) }}</dd></div>
        </dl>
        <p class="mt-5 text-sm text-ink-600">{{ res.employees }} {{ res.employees === 1 ? 'employee' : 'employees' }}: {{ money(res.total, true) }} rounded down to the nearest dollar = <strong class="text-ink-900">{{ money(res.payable) }}</strong></p>
      </template>
      <p v-else class="mt-5 text-sm text-ink-500">Enter monthly total wages for at least one employee to see the SDL.</p>
      <div class="mt-5 space-y-3">
        <p class="calc-info"><i class="fa-solid fa-circle-info mt-1" aria-hidden="true"></i><span>Each employee’s SDL is 0.25% of total wages, at least $2 (wages below $800) and at most $11.25 (wages above $4,500). CPF Board adds up the amounts and rounds the total down to the nearest dollar.</span></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sdlLevy } from '~/utils/calculators'

let nextId = 4
const rows = ref([{ id: 1, wages: '609.50' }, { id: 2, wages: '2000' }, { id: 3, wages: '5200' }])
const addRow = () => { rows.value.push({ id: nextId++, wages: '' }) }
const num = (s: string) => { const n = Number(String(s).replace(/[,\s$]/g, '')); return Number.isFinite(n) && n > 0 ? n : 0 }
const res = computed(() => sdlLevy(rows.value.map((r) => num(r.wages))))
// Per-employee SDL can run past the cent (e.g. 0.25% of $1,234.56 = $3.0864); show up to 4 decimals there.
const money = (n: number, exact = false) => `$${n.toLocaleString('en-SG', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: exact ? 4 : 2 })}`
</script>
