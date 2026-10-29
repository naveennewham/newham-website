<template>
  <ToolsShell
    slug="prorated-annual-leave-calculator"
    seo-title="Pro-rated annual leave calculator Singapore (MOM)"
    seo-description="Free pro-rated annual leave calculator for Singapore: MOM’s formula for employees who join or leave part-way through the year, the 7 to 14 day table, the 3-month rule and rounding."
    eyebrow="Free calculator · Singapore leave"
    h1="Pro-rated annual leave calculator for Singapore"
    lead="Work out the annual leave for an employee who joins or leaves part-way through a year of service, using MOM’s formula, entitlement table and rounding rule under the Employment Act."
    disclaimer="This is an estimate for employees covered by the Employment Act, using MOM’s published formula. The contract may give more leave than the Act requires; check MOM’s pages for unpaid leave, leave taken in advance and encashment on leaving."
    :faqs="faqs"
    :cta="{ eyebrow: 'Leave balances you can trust', text: 'In DeepHR, employees apply for leave on their phone, requests follow your approval chain, and balances, the team calendar and payroll update when leave is approved. HR sets entitlements per leave type and can adjust any balance.', to: '/solutions/leave-management-system-singapore', label: 'Leave management for Singapore' }"
  >
    <ToolsProratedLeaveCalculator />
    <template #method>
      <h3>MOM’s formula</h3>
      <p><code>Pro-rated leave = (completed months of service ÷ 12) × annual leave entitlement</code></p>
      <p>Only completed months count. In MOM’s example, an employee who started on 14 March and left on 31 July has 4 completed months, because 14 to 31 July is not a full month. With 10 days’ entitlement, (4 ÷ 12) × 10 = 3.33 days, which rounds down to 3 days.</p>
      <h3>Rounding</h3>
      <p>If the fraction of a day is less than one-half, MOM rounds it down. If it is one-half or more, it is rounded up to one full day.</p>
      <h3>Entitlement and eligibility</h3>
      <p>As of October 2026, MOM says an employee covered by the Employment Act is entitled to paid annual leave after working for the employer for at least 3 months. Year of service starts on the day the employee starts work.</p>
      <table>
        <thead><tr><th>Year of service</th><th>Days of annual leave</th></tr></thead>
        <tbody>
          <tr><td>1st</td><td>7</td></tr>
          <tr><td>2nd</td><td>8</td></tr>
          <tr><td>3rd</td><td>9</td></tr>
          <tr><td>4th</td><td>10</td></tr>
          <tr><td>5th</td><td>11</td></tr>
          <tr><td>6th</td><td>12</td></tr>
          <tr><td>7th</td><td>13</td></tr>
          <tr><td>8th and after</td><td>14</td></tr>
        </tbody>
      </table>
      <p>In the first year, leave is based on completed months worked, even during probation. For longer service, leave in the current year is pro-rated on completed months worked in that year. For an employee who has resigned, the notice period counts towards the months. Periods of approved unpaid leave can be left out.</p>
      <p>Where a month runs from the 29th, 30th or 31st, the calculator ends it on the last day of a shorter month. Check edge cases against the contract.</p>
      <p>Source: <a href="https://www.mom.gov.sg/employment-practices/leave/annual-leave/eligibility-and-entitlement" rel="noopener" target="_blank">MOM, annual leave eligibility and entitlement</a>.</p>
    </template>
  </ToolsShell>
</template>

<script setup lang="ts">
const faqs = [
  { q: 'How is annual leave pro-rated in Singapore?', a: 'MOM’s formula is (completed months of service ÷ 12) × the annual leave entitlement. Only completed months count, and a fraction of a day below one-half is rounded down while one-half or more is rounded up to a full day.' },
  { q: 'How much annual leave does a new employee get?', a: 'As of October 2026, an employee covered by the Employment Act gets 7 days in the first year of service once they have worked for at least 3 months, pro-rated on completed months. It rises by one day a year to 14 days from the eighth year.' },
  { q: 'Does probation count for annual leave?', a: 'Yes. MOM says that in the first year leave is based on completed months worked, and this applies even during probation.' },
  { q: 'Does the notice period count when an employee resigns?', a: 'Yes. MOM says the notice period is included when calculating pro-rated annual leave for an employee who has resigned.' },
  { q: 'Can an employer give more annual leave than the Employment Act?', a: 'Yes. The Employment Act sets the minimum. Enter the contractual figure in the calculator to pro-rate it the same way.' }
]
</script>
