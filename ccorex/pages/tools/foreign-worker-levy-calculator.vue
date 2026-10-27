<template>
  <ToolsShell
    slug="foreign-worker-levy-calculator"
    seo-title="Foreign worker levy calculator for construction (Singapore)"
    seo-description="Free foreign worker levy calculator for Singapore construction firms: monthly and annual levy by source and skill (R1/R2), daily rates for part months, quota and 10% R1 checks."
    eyebrow="Free calculator · Construction workforce"
    h1="Foreign worker levy calculator for construction"
    lead="Estimate the monthly and annual levy for your construction Work Permit holders by source and skill tier, with MOM’s daily rate for part months and quick checks on quota and the 10% R1 rule."
    disclaimer="This is an estimate using MOM’s published construction levy rates. Your levy bill and quota on WP Online are the final figures."
    :faqs="faqs"
    :cta="{ eyebrow: 'Early access in DeepHR', text: 'A foreign worker levy report, with skill tier per worker and the levy costed to each project, is in early access in DeepHR. Ask to join and we will contact you.', to: '/contact?interest=foreign-worker-levy', label: 'Request early access' }"
  >
    <ToolsLevyCalculator />
    <template #method>
      <h3>Monthly rates for construction</h3>
      <p>As of October 2026, MOM lists these construction levy rates, in force since 1 January 2024:</p>
      <table>
        <thead><tr><th>Source</th><th>R1 (higher-skilled)</th><th>R2 (basic-skilled)</th></tr></thead>
        <tbody>
          <tr><td>Malaysia, North Asian sources, PRC</td><td>$300</td><td>$700</td></tr>
          <tr><td>Non-traditional sources</td><td>$500</td><td>$900</td></tr>
          <tr><td>Off-site construction</td><td>$250</td><td>$370</td></tr>
        </tbody>
      </table>
      <p>Workers without the required certification are charged $900 a month, whatever their source.</p>
      <h3>Part months</h3>
      <p>For a worker who wasn’t employed for the whole calendar month, MOM charges a daily rate: the monthly rate × 12 ÷ 365, rounded up to the cent. For example, $500 a month becomes $16.44 a day.</p>
      <h3>Quota and R1 checks</h3>
      <p>MOM allows 5 Work Permit holders for each local employee earning the Local Qualifying Salary, and requires at least 10% of construction Work Permit holders to be R1 before new R2 permits are issued or renewed. The calculator’s quota check is a rough guide: WP Online shows your actual quota.</p>
      <p>Source: <a href="https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/construction-sector-requirements" rel="noopener" target="_blank">MOM, construction sector requirements</a>.</p>
    </template>
  </ToolsShell>
</template>

<script setup lang="ts">
const faqs = [
  { q: 'How much is the foreign worker levy for construction?', a: 'As of October 2026, MOM’s monthly construction levy is $300 (R1) or $700 (R2) for workers from Malaysia, North Asian sources and the PRC, $500 (R1) or $900 (R2) for non-traditional sources, and $250 (R1) or $370 (R2) for off-site construction. Workers without the required certification are charged $900.' },
  { q: 'How is the levy charged for part of a month?', a: 'MOM charges a daily rate for workers who did not work the whole calendar month: the monthly rate × 12 ÷ 365, rounded up to the nearest cent. For a $700 monthly rate that is $23.02 a day.' },
  { q: 'What is the construction Work Permit quota?', a: 'MOM allows 5 Work Permit holders for each local employee who earns the Local Qualifying Salary. Your exact quota is shown on WP Online.' },
  { q: 'Why does the 10% R1 rule matter?', a: 'MOM requires at least 10% of a construction firm’s Work Permit holders to be higher-skilled (R1) before it can hire new R2 workers or renew R2 permits. Upgrading workers to R1 also lowers the levy by $400 a month for on-site workers.' },
  { q: 'Do Man-Year Entitlement (MYE) levy rates still apply?', a: 'No. MOM removed the MYE framework for construction from 1 January 2024, and levy rates now depend only on the worker’s source and skill tier.' }
]
</script>
