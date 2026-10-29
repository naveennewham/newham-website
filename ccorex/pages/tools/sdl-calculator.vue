<template>
  <ToolsShell
    slug="sdl-calculator"
    seo-title="SDL calculator Singapore (Skills Development Levy)"
    seo-description="Free Skills Development Levy calculator for Singapore: 0.25% of monthly total wages per employee, the $2 minimum and $11.25 maximum, and the total rounded down to the dollar."
    eyebrow="Free calculator · Singapore payroll"
    h1="Skills Development Levy (SDL) calculator for Singapore"
    lead="Enter each employee’s total wages for the month to see the SDL for each person and the total payable, using the rate, minimum, maximum and rounding rule published by the CPF Board."
    disclaimer="This is an estimate using the CPF Board’s published SDL rate and rounding rule. Check the CPF Board and SkillsFuture Singapore pages for exemptions and for how to pay SDL for foreign employees."
    :faqs="faqs"
    :cta="{ eyebrow: 'SDL on every pay run', text: 'DeepHR works out CPF, SDL and self-help group funds on every pay run from the wages you have already approved, with an itemised PDF payslip for each employee.', to: '/solutions/payroll-software-singapore', label: 'Payroll software for Singapore' }"
  >
    <ToolsSdlCalculator />
    <template #method>
      <h3>The CPF Board’s formula</h3>
      <p><code>SDL for each employee = 0.25% × monthly total wages</code>, with a minimum and a maximum:</p>
      <table>
        <thead><tr><th>Monthly total wages</th><th>SDL for the employee</th></tr></thead>
        <tbody>
          <tr><td>Below $800</td><td>$2 (minimum)</td></tr>
          <tr><td>$800 to $4,500</td><td>0.25% of total wages</td></tr>
          <tr><td>Above $4,500</td><td>$11.25 (maximum)</td></tr>
        </tbody>
      </table>
      <h3>Rounding</h3>
      <p>The CPF Board says to work out the SDL for each employee, add the amounts up and round the total down to the nearest dollar. It does not round each employee’s amount, so the calculator keeps those exact. In the CPF Board’s example, five employees come to $40.75, so $40 is payable.</p>
      <h3>Who it applies to</h3>
      <p>As of October 2026, the CPF Board says employers must pay SDL for all employees working in Singapore, including foreign employees such as Work Permit and Employment Pass holders. SDL is in addition to CPF contributions. For local employees it is paid together with the monthly CPF contributions.</p>
      <p>Source: <a href="https://www.cpf.gov.sg/employer/employer-obligations/skills-development-levy" rel="noopener" target="_blank">CPF Board, Skills Development Levy</a>.</p>
    </template>
  </ToolsShell>
</template>

<script setup lang="ts">
const faqs = [
  { q: 'How is SDL calculated in Singapore?', a: 'SDL is 0.25% of each employee’s monthly total wages, with a minimum of $2 for an employee earning less than $800 a month and a maximum of $11.25 for an employee earning more than $4,500. The amounts for all employees are added up and the total is rounded down to the nearest dollar.' },
  { q: 'Do I pay SDL for foreign workers?', a: 'Yes. As of October 2026 the CPF Board says SDL is payable for all employees working in Singapore, including foreign employees such as Work Permit and Employment Pass holders.' },
  { q: 'Is SDL deducted from the employee’s salary?', a: 'No. SDL is a levy paid by the employer, in addition to CPF contributions. It is not taken from the employee’s wages.' },
  { q: 'Is SDL rounded for each employee?', a: 'No. The CPF Board’s method is to add up the SDL for every employee and then round the total down to the nearest dollar.' },
  { q: 'What is the most SDL I pay for one employee?', a: '$11.25 a month, which is 0.25% of $4,500. Wages above $4,500 do not increase the levy.' }
]
</script>
