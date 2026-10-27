// Free calculators on /tools. Pure functions only, so the maths can be checked outside the page.
// Rates are as published in October 2026; each block names its source. Update the tables here
// when an agency changes them, and the pages pick the new figures up.

const EPS = 1e-9
const roundHalfUp = (x: number) => Math.floor(x + 0.5 + EPS)
const floorDollar = (x: number) => Math.floor(x + EPS)
const round2 = (x: number) => Math.round((x + EPS) * 100) / 100
const ceilCents = (x: number) => Math.ceil(x * 100 - EPS) / 100

// ---------------------------------------------------------------------------
// CPF: CPF Board contribution rate tables from 1 January 2026 (Tables 1–5), private sector.
// ---------------------------------------------------------------------------
export const CPF_OW_CEILING = 8000
export const CPF_ANNUAL_SALARY_CEILING = 102000

export type CpfAge = 'le55' | '55to60' | '60to65' | '65to70' | 'gt70'
export type CpfScheme = 'full' | 'spr1-gg' | 'spr2-gg' | 'spr1-fg' | 'spr2-fg'

/** low: total % of TW for wages > $50 to $500 (all employer); taper: employee factor on (TW − 500)
 *  for > $500 to $750; total / employee: % of wages above $750. */
interface CpfRate { low: number; taper: number; total: number; employee: number }

const r = (low: number, taper: number, total: number, employee: number): CpfRate => ({ low, taper, total, employee })
export const CPF_RATES: Record<CpfScheme, Record<CpfAge, CpfRate>> = {
  // Table 1: Singapore Citizens, SPRs from the 3rd year, and 1st/2nd-year SPRs on joint full rates.
  full: { le55: r(17, 0.6, 37, 20), '55to60': r(16, 0.54, 34, 18), '60to65': r(12.5, 0.375, 25, 12.5), '65to70': r(9, 0.225, 16.5, 7.5), gt70: r(7.5, 0.15, 12.5, 5) },
  // Tables 2–3: graduated employer and employee rates (the default for 1st/2nd-year SPRs).
  'spr1-gg': { le55: r(4, 0.15, 9, 5), '55to60': r(4, 0.15, 9, 5), '60to65': r(3.5, 0.15, 8.5, 5), '65to70': r(3.5, 0.15, 8.5, 5), gt70: r(3.5, 0.15, 8.5, 5) },
  'spr2-gg': { le55: r(9, 0.45, 24, 15), '55to60': r(6, 0.375, 18.5, 12.5), '60to65': r(3.5, 0.225, 11, 7.5), '65to70': r(3.5, 0.15, 8.5, 5), gt70: r(3.5, 0.15, 8.5, 5) },
  // Tables 4–5: full employer and graduated employee rates.
  'spr1-fg': { le55: r(17, 0.15, 22, 5), '55to60': r(16, 0.15, 21, 5), '60to65': r(12.5, 0.15, 17.5, 5), '65to70': r(9, 0.15, 14, 5), gt70: r(7.5, 0.15, 12.5, 5) },
  'spr2-fg': { le55: r(17, 0.45, 32, 15), '55to60': r(16, 0.375, 28.5, 12.5), '60to65': r(12.5, 0.225, 20, 7.5), '65to70': r(9, 0.15, 14, 5), gt70: r(7.5, 0.15, 12.5, 5) }
}

export interface CpfInput {
  ordinaryWages: number; additionalWages?: number; age: CpfAge; scheme: CpfScheme
  /** Additional wages already paid earlier in the calendar year (for the Additional Wage ceiling). */
  additionalWagesEarlierThisYear?: number
}
export interface CpfResult {
  band: 'none' | 'employer-only' | 'phase-in' | 'full'
  totalWages: number; owSubject: number; awSubject: number; awCeilingRemaining: number
  total: number; employee: number; employer: number; takeHome: number
  owCapped: boolean; awCapped: boolean
}

export function cpfContribution(input: CpfInput): CpfResult {
  const ow = Math.max(0, input.ordinaryWages || 0)
  const aw = Math.max(0, input.additionalWages || 0)
  const rate = CPF_RATES[input.scheme][input.age]
  const tw = ow + aw
  const owSubject = Math.min(ow, CPF_OW_CEILING)
  // AW ceiling = annual salary ceiling − total OW subject to CPF for the year. Assumes this
  // month's OW is paid every month of the year; the result says so.
  const awCeilingRemaining = Math.max(0, CPF_ANNUAL_SALARY_CEILING - owSubject * 12 - Math.max(0, input.additionalWagesEarlierThisYear || 0))
  const awSubject = Math.min(aw, awCeilingRemaining)
  const base = { totalWages: tw, owSubject, awSubject, awCeilingRemaining, owCapped: ow > CPF_OW_CEILING, awCapped: aw > awCeilingRemaining }
  const done = (band: CpfResult['band'], total: number, employee: number): CpfResult =>
    ({ ...base, band, total, employee, employer: total - employee, takeHome: round2(tw - employee) })

  if (tw <= 50) return done('none', 0, 0)
  if (tw <= 500) return done('employer-only', roundHalfUp((rate.low / 100) * tw), 0)
  if (tw <= 750) {
    const employee = floorDollar(rate.taper * (tw - 500))
    return done('phase-in', roundHalfUp((rate.low / 100) * tw + rate.taper * (tw - 500)), employee)
  }
  const subject = owSubject + awSubject
  return done('full', roundHalfUp((rate.total / 100) * subject), floorDollar((rate.employee / 100) * subject))
}

// ---------------------------------------------------------------------------
// Overtime: MOM, hours of work, overtime and rest days (Part 4 of the Employment Act).
// ---------------------------------------------------------------------------
export const OT_NON_WORKMAN_LIMIT = 2600
export const OT_WORKMAN_LIMIT = 4500
export const OT_NON_WORKMAN_HOURLY_CAP = 13.6
export const OT_MONTHLY_HOURS_LIMIT = 72
export const OT_MULTIPLIER = 1.5

export interface OvertimeInput { monthlyBasic: number; workman: boolean; overtimeHours: number }
export interface OvertimeResult {
  covered: boolean; hourlyBasic: number; hourlyCapped: boolean; overtimeRate: number; overtimePay: number; overLimit: boolean
}

export function overtimePay(input: OvertimeInput): OvertimeResult {
  const basic = Math.max(0, input.monthlyBasic || 0)
  const hours = Math.max(0, input.overtimeHours || 0)
  const covered = basic > 0 && basic <= (input.workman ? OT_WORKMAN_LIMIT : OT_NON_WORKMAN_LIMIT)
  // (12 × monthly basic) ÷ (52 × 44), to the cent, as in MOM's worked examples.
  let hourly = round2((12 * basic) / (52 * 44))
  const hourlyCapped = !input.workman && hourly > OT_NON_WORKMAN_HOURLY_CAP
  if (hourlyCapped) hourly = OT_NON_WORKMAN_HOURLY_CAP
  const overtimeRate = round2(hourly * OT_MULTIPLIER)
  return { covered, hourlyBasic: hourly, hourlyCapped, overtimeRate, overtimePay: covered ? round2(overtimeRate * hours) : 0, overLimit: hours > OT_MONTHLY_HOURS_LIMIT }
}

// ---------------------------------------------------------------------------
// Construction foreign worker levy: MOM construction sector requirements, rates from 1 Jan 2024.
// ---------------------------------------------------------------------------
export type LevyTier = 'nts-r1' | 'nts-r2' | 'mynas-r1' | 'mynas-r2' | 'offsite-r1' | 'offsite-r2' | 'unskilled'
export const LEVY_TIERS: { id: LevyTier; label: string; monthly: number; r1: boolean }[] = [
  { id: 'mynas-r1', label: 'Malaysia, North Asian sources or PRC, Higher-skilled (R1)', monthly: 300, r1: true },
  { id: 'mynas-r2', label: 'Malaysia, North Asian sources or PRC, Basic-skilled (R2)', monthly: 700, r1: false },
  { id: 'nts-r1', label: 'Non-traditional sources, Higher-skilled (R1)', monthly: 500, r1: true },
  { id: 'nts-r2', label: 'Non-traditional sources, Basic-skilled (R2)', monthly: 900, r1: false },
  { id: 'offsite-r1', label: 'Off-site construction, Higher-skilled (R1)', monthly: 250, r1: true },
  { id: 'offsite-r2', label: 'Off-site construction, Basic-skilled (R2)', monthly: 370, r1: false },
  { id: 'unskilled', label: 'Without the required certification (any source)', monthly: 900, r1: false }
]
export const LEVY_DRC_PER_LOCAL = 5
export const LEVY_MIN_R1_SHARE = 0.1

/** MOM: daily levy = monthly rate × 12 ÷ 365, rounded up to the nearest cent. */
export const dailyLevy = (monthly: number) => ceilCents((monthly * 12) / 365)

export interface LevyInput {
  counts: Partial<Record<LevyTier, number>>
  /** Optional workers who were employed for only part of the month. */
  partMonth?: { tier: LevyTier; days: number }[]
  localQualifyingEmployees?: number
}
export interface LevyResult {
  lines: { tier: LevyTier; count: number; monthly: number; amount: number }[]
  partMonthAmount: number; monthly: number; annual: number
  workPermits: number; r1: number; r1Share: number | null; quota: number | null; overQuota: boolean; belowR1: boolean
}

export function constructionLevy(input: LevyInput): LevyResult {
  const lines = LEVY_TIERS.map((t) => {
    const count = Math.max(0, Math.floor(input.counts[t.id] || 0))
    return { tier: t.id, count, monthly: t.monthly, amount: count * t.monthly }
  })
  const part = (input.partMonth ?? []).filter((p) => p.days > 0)
  const partMonthAmount = round2(part.reduce((s, p) => s + dailyLevy(LEVY_TIERS.find((t) => t.id === p.tier)!.monthly) * Math.floor(p.days), 0))
  const full = lines.reduce((s, l) => s + l.amount, 0)
  const workPermits = lines.reduce((s, l) => s + l.count, 0) + part.length
  const r1 = lines.filter((l) => LEVY_TIERS.find((t) => t.id === l.tier)!.r1).reduce((s, l) => s + l.count, 0)
    + part.filter((p) => LEVY_TIERS.find((t) => t.id === p.tier)!.r1).length
  const locals = input.localQualifyingEmployees
  const quota = locals != null && locals >= 0 ? Math.floor(locals) * LEVY_DRC_PER_LOCAL : null
  const r1Share = workPermits ? r1 / workPermits : null
  return {
    lines, partMonthAmount, monthly: round2(full + partMonthAmount), annual: full * 12, workPermits, r1, r1Share, quota,
    overQuota: quota != null && workPermits > quota, belowR1: r1Share != null && r1Share < LEVY_MIN_R1_SHARE
  }
}
