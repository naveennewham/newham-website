<template>
  <ToolsShell
    slug="cpf-contribution-calculator"
    seo-title="CPF contribution calculator 2026 (employer & employee)"
    seo-description="Free CPF contribution calculator for Singapore employers: employer and employee shares for a month, with 2026 rates, the $8,000 ceiling and PR graduated rates."
    eyebrow="Free calculator · Singapore payroll"
    h1="CPF contribution calculator for 2026"
    lead="Work out the employer’s and employee’s CPF for one month, using the CPF Board’s rates from 1 January 2026, the Ordinary Wage ceiling and the rates for first- and second-year PRs."
    disclaimer="This is an estimate using the CPF Board’s published rates for private-sector employees. Confirm amounts with the CPF Board’s own contribution calculator before you pay."
    :faqs="faqs"
    :cta="{ eyebrow: 'Run CPF on every pay run', text: 'DeepHR works out CPF, SDL and self-help group funds on every pay run, from approved attendance and leave, and files an itemised PDF payslip to each employee’s Documents.', to: '/solutions/payroll-software-singapore', label: 'Payroll software for Singapore' }"
  >
    <ToolsCpfCalculator />
    <template #method>
      <h3>The steps</h3>
      <ul>
        <li><strong>Find the wages that attract CPF.</strong> Ordinary wages count up to the $8,000 Ordinary Wage ceiling. Additional wages, such as bonuses, count up to the Additional Wage ceiling: $102,000 less the year’s ordinary wages subject to CPF.</li>
        <li><strong>Apply the rate</strong> for the employee’s age and residency to those wages.</li>
        <li><strong>Round the total</strong> to the nearest dollar (50 cents and above rounds up).</li>
        <li><strong>Work out the employee’s share</strong> and drop the cents. The employer’s share is the total less the employee’s share.</li>
      </ul>
      <h3>Rates for Citizens and PRs from the third year</h3>
      <p>As of October 2026, the CPF Board says these rates apply from 1 January 2026 to monthly wages above $750:</p>
      <table>
        <thead><tr><th>Age</th><th>Employer</th><th>Employee</th><th>Total</th></tr></thead>
        <tbody>
          <tr><td>55 and below</td><td>17%</td><td>20%</td><td>37%</td></tr>
          <tr><td>Above 55 to 60</td><td>16%</td><td>18%</td><td>34%</td></tr>
          <tr><td>Above 60 to 65</td><td>12.5%</td><td>12.5%</td><td>25%</td></tr>
          <tr><td>Above 65 to 70</td><td>9%</td><td>7.5%</td><td>16.5%</td></tr>
          <tr><td>Above 70</td><td>7.5%</td><td>5%</td><td>12.5%</td></tr>
        </tbody>
      </table>
      <h3>Lower wages and new PRs</h3>
      <p>No CPF is due on total wages of $50 or less. Above $50 and up to $500, only the employer contributes. Above $500 and up to $750, the employee’s share is phased in (for example, 0.6 × (total wages − $500) for employees aged 55 and below). First- and second-year PRs contribute at graduated rates unless they and their employer apply for higher rates. The calculator uses the CPF Board’s rate tables for each of these cases.</p>
      <p>Source: <a href="https://www.cpf.gov.sg/employer/employer-obligations/how-much-cpf-contributions-to-pay" rel="noopener" target="_blank">CPF Board, how much CPF contributions to pay</a>.</p>
    </template>
  </ToolsShell>
</template>

<script setup lang="ts">
const faqs = [
  { q: 'How is CPF calculated in 2026?', a: 'Multiply the wages that attract CPF by the rate for the employee’s age and residency, round the total to the nearest dollar, then work out the employee’s share and drop the cents. The employer pays the rest. For a Citizen aged 55 and below earning more than $750, the total is 37%: 17% from the employer and 20% from the employee.' },
  { q: 'What is the CPF Ordinary Wage ceiling in 2026?', a: 'As of October 2026, the CPF Board says the Ordinary Wage ceiling is $8,000 a month from 1 January 2026, and the annual salary ceiling for ordinary and additional wages together is $102,000.' },
  { q: 'Is CPF payable on low wages?', a: 'No CPF is payable on total wages of $50 or less a month. Above $50 and up to $500, only the employer contributes. Above $500 and up to $750, the employee’s share is phased in. Full rates apply above $750.' },
  { q: 'Do new PRs pay full CPF rates?', a: 'Not by default. In the first and second years of PR status, employer and employee contribute at graduated (lower) rates. They can jointly apply to the CPF Board for full rates, or the employer can pay full rates while the employee stays on graduated rates. Full rates apply from the third year.' },
  { q: 'Do foreign workers pay CPF?', a: 'No. CPF applies to Singapore Citizens and Permanent Residents. Employers of Work Permit and S Pass holders pay the foreign worker levy to MOM instead.' }
]
</script>
