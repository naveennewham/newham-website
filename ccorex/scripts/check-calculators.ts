// Checks utils/calculators.ts against worked examples from the guides and the CPF Board / MOM
// pages. Run after changing a rate: node --experimental-strip-types scripts/check-calculators.ts
import { cpfContribution as c, overtimePay as o, constructionLevy as l, dailyLevy, LEVY_TIERS } from '../utils/calculators.ts'

let fail = 0
const eq = (name: string, got: unknown, want: unknown) => {
  const ok = JSON.stringify(got) === JSON.stringify(want)
  if (!ok) fail++
  console.log(ok ? 'ok  ' : 'FAIL', name, JSON.stringify(got), ok ? '' : `want ${JSON.stringify(want)}`)
}
const p = (x: ReturnType<typeof c>) => [x.total, x.employee, x.employer]

// CPF: guide examples and the "Max. of" figures in the CPF Board's 2026 rate tables.
eq('CPF guide ex1: age 30, $6,000', p(c({ ordinaryWages: 6000, age: 'le55', scheme: 'full' })), [2220, 1200, 1020])
eq('CPF guide ex2: age 40, $10,000 (OW ceiling)', p(c({ ordinaryWages: 10000, age: 'le55', scheme: 'full' })), [2960, 1600, 1360])
eq('CPF max on OW, 55–60: $2,720 / $1,440', p(c({ ordinaryWages: 9000, age: '55to60', scheme: 'full' })).slice(0, 2), [2720, 1440])
eq('CPF max on OW, 60–65: $2,000 / $1,000', p(c({ ordinaryWages: 9000, age: '60to65', scheme: 'full' })).slice(0, 2), [2000, 1000])
eq('CPF max on OW, 65–70: $1,320 / $600', p(c({ ordinaryWages: 9000, age: '65to70', scheme: 'full' })).slice(0, 2), [1320, 600])
eq('CPF max on OW, above 70: $1,000 / $400', p(c({ ordinaryWages: 9000, age: 'gt70', scheme: 'full' })).slice(0, 2), [1000, 400])
eq('CPF SPR 1st year G/G max: $720 / $400', p(c({ ordinaryWages: 9000, age: 'le55', scheme: 'spr1-gg' })).slice(0, 2), [720, 400])
eq('CPF SPR 2nd year G/G max: $1,920 / $1,200', p(c({ ordinaryWages: 9000, age: 'le55', scheme: 'spr2-gg' })).slice(0, 2), [1920, 1200])
eq('CPF SPR 1st year F/G max: $1,760 / $400', p(c({ ordinaryWages: 9000, age: 'le55', scheme: 'spr1-fg' })).slice(0, 2), [1760, 400])
eq('CPF SPR 2nd year F/G max: $2,560 / $1,200', p(c({ ordinaryWages: 9000, age: 'le55', scheme: 'spr2-fg' })).slice(0, 2), [2560, 1200])
eq('CPF $50: nil', p(c({ ordinaryWages: 50, age: 'le55', scheme: 'full' })), [0, 0, 0])
eq('CPF $400: employer only, 17% = $68', p(c({ ordinaryWages: 400, age: 'le55', scheme: 'full' })), [68, 0, 68])
eq('CPF $600: 17% × 600 + 0.6 × 100 = $162, employee $60', p(c({ ordinaryWages: 600, age: 'le55', scheme: 'full' })), [162, 60, 102])
eq('CPF $725, 60–65: 90.625 + 84.375 = $175, employee $84', p(c({ ordinaryWages: 725, age: '60to65', scheme: 'full' })), [175, 84, 91])
eq('CPF rounding $2,501: 925.37 → 925, employee 500', p(c({ ordinaryWages: 2501, age: 'le55', scheme: 'full' })), [925, 500, 425])
eq('CPF rounding $3,005: 1,111.85 → 1,112, employee 601', p(c({ ordinaryWages: 3005, age: 'le55', scheme: 'full' })), [1112, 601, 511])
eq('CPF OW $5,000 + AW $10,000: 37% × 15,000', p(c({ ordinaryWages: 5000, additionalWages: 10000, age: 'le55', scheme: 'full' })), [5550, 3000, 2550])
const big = c({ ordinaryWages: 8000, additionalWages: 10000, age: 'le55', scheme: 'full' })
eq('CPF OW $8,000 + AW $10,000: AW ceiling $6,000', [big.awCeilingRemaining, big.awSubject, big.awCapped, big.total], [6000, 6000, true, 5180])
eq('CPF take-home on $6,000: $4,800', c({ ordinaryWages: 6000, age: 'le55', scheme: 'full' }).takeHome, 4800)

// Overtime: guide examples and MOM's own example ($13.60 × 1.5 × 2 = $40.80).
const t = (x: ReturnType<typeof o>) => [x.covered, x.hourlyBasic, x.overtimeRate, x.overtimePay]
eq('OT guide ex1: workman $2,200, 10 h = $173.10', t(o({ monthlyBasic: 2200, workman: true, overtimeHours: 10 })), [true, 11.54, 17.31, 173.1])
eq('OT MOM example: non-workman $2,600, 2 h = $40.80', t(o({ monthlyBasic: 2600, workman: false, overtimeHours: 2 })), [true, 13.6, 20.4, 40.8])
eq('OT guide ex2: non-workman $2,600, 8 h = $163.20', t(o({ monthlyBasic: 2600, workman: false, overtimeHours: 8 })), [true, 13.6, 20.4, 163.2])
eq('OT workman $4,500, 1 h: no cap, $23.60 → $35.40', t(o({ monthlyBasic: 4500, workman: true, overtimeHours: 1 })), [true, 23.6, 35.4, 35.4])
eq('OT non-workman $3,000: not covered by Part 4', o({ monthlyBasic: 3000, workman: false, overtimeHours: 5 }).covered, false)
eq('OT workman $4,600: not covered by Part 4', o({ monthlyBasic: 4600, workman: true, overtimeHours: 5 }).covered, false)
eq('OT 80 h: over the 72 h limit', o({ monthlyBasic: 2000, workman: true, overtimeHours: 80 }).overLimit, true)

// Levy: MOM's published daily rates, totals, quota and the 10% R1 rule.
eq('Levy daily rates match MOM', LEVY_TIERS.filter((x) => x.id !== 'unskilled').map((x) => dailyLevy(x.monthly)), [9.87, 23.02, 16.44, 29.59, 8.22, 12.17])
const L = l({ counts: { 'nts-r1': 2, 'nts-r2': 8, 'mynas-r1': 1 }, localQualifyingEmployees: 2 })
eq('Levy 2 NTS R1 + 8 NTS R2 + 1 MY R1 = $8,500; quota 10 exceeded', [L.monthly, L.annual, L.workPermits, L.quota, L.overQuota, L.belowR1], [8500, 102000, 11, 10, true, false])
const P = l({ counts: { 'nts-r2': 9 }, partMonth: [{ tier: 'nts-r1', days: 10 }] })
eq('Levy part month: 10 days NTS R1 = $164.40; R1 share 10%', [P.partMonthAmount, P.monthly, P.belowR1], [164.4, 8264.4, false])
eq('Levy 10 R2 and no R1: below 10% R1', l({ counts: { 'nts-r2': 10 } }).belowR1, true)

console.log(fail ? `${fail} FAILED` : 'all passed')
if (fail) process.exit(1)
