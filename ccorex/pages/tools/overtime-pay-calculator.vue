<template>
  <ToolsShell
    slug="overtime-pay-calculator"
    seo-title="Overtime pay calculator Singapore (MOM formula)"
    seo-description="Free overtime pay calculator for Singapore: MOM’s hourly basic rate formula, 1.5× rate, the $13.60 non-workman cap, Part 4 eligibility and the 72-hour monthly limit."
    eyebrow="Free calculator · Singapore payroll"
    h1="Overtime pay calculator for Singapore"
    lead="Enter the monthly basic salary and overtime hours to see the hourly basic rate, the overtime rate and the overtime pay, using MOM’s formula for employees covered by Part 4 of the Employment Act."
    disclaimer="This is an estimate for monthly-rated employees using MOM’s published formula. Check MOM’s pages for daily-rated, piece-rated, part-time and shift workers, and for rest day and public holiday pay."
    :faqs="faqs"
    :cta="{ eyebrow: 'Overtime on every pay run', text: 'In DeepHR, approved attendance flows into payroll and overtime follows the MOM formula on every pay run, with an itemised PDF payslip for each employee.', to: '/solutions/payroll-software-singapore', label: 'Payroll software for Singapore' }"
  >
    <ToolsOvertimeCalculator />
    <template #method>
      <h3>MOM’s formula</h3>
      <p><code>Overtime pay = hourly basic rate × 1.5 × overtime hours</code></p>
      <p>For a monthly-rated employee, MOM’s hourly basic rate is <code>(12 × monthly basic salary) ÷ (52 × 44)</code>. The calculator rounds the hourly rate and the overtime rate to the cent, as in MOM’s examples. The 1.5× rate is a minimum; an employer can pay more.</p>
      <h3>Who is covered</h3>
      <p>As of October 2026, MOM says overtime rules in Part 4 of the Employment Act cover:</p>
      <table>
        <thead><tr><th>Employee</th><th>Monthly basic salary</th><th>Hourly rate for overtime</th></tr></thead>
        <tbody>
          <tr><td>Workman</td><td>$4,500 or less</td><td>From the formula</td></tr>
          <tr><td>Non-workman</td><td>$2,600 or less</td><td>Capped at $13.60</td></tr>
        </tbody>
      </table>
      <p>Managers and executives aren’t covered by Part 4. Overtime is limited to 72 hours a month and must be paid within 14 days after the end of the salary period.</p>
      <p>Source: <a href="https://www.mom.gov.sg/employment-practices/hours-of-work-overtime-and-rest-days" rel="noopener" target="_blank">MOM, hours of work, overtime and rest days</a>.</p>
    </template>
  </ToolsShell>
</template>

<script setup lang="ts">
const faqs = [
  { q: 'How is overtime pay calculated in Singapore?', a: 'For employees covered by Part 4 of the Employment Act, overtime pay is at least 1.5 times the hourly basic rate for each overtime hour. For a monthly-rated employee, MOM’s hourly basic rate is (12 × monthly basic salary) ÷ (52 × 44).' },
  { q: 'Who is entitled to overtime pay?', a: 'As of October 2026, MOM says Part 4 covers workmen earning a basic salary of $4,500 or less a month and non-workmen earning $2,600 or less. Managers and executives are not covered; their overtime terms follow their contract.' },
  { q: 'What is the $13.60 overtime cap?', a: 'For non-workmen, MOM caps the hourly rate used for overtime at the $2,600 salary level, which is $13.60 an hour. So the overtime rate for a non-workman is at most 1.5 × $13.60 = $20.40 an hour.' },
  { q: 'Are allowances included in the overtime calculation?', a: 'No. Overtime uses the basic rate of pay, which leaves out allowances, overtime, bonuses, the annual wage supplement and productivity incentives.' },
  { q: 'How many overtime hours are allowed?', a: 'MOM limits overtime to 72 hours a month. Hours worked beyond normal daily hours on a rest day or public holiday count toward the limit.' }
]
</script>
