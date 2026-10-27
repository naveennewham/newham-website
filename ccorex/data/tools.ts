// Free calculators at /tools/<slug>. Listed on /tools, in the footer, the sitemap and llms.txt.
export interface Tool { slug: string; name: string; short: string; icon: string; guide: { to: string; title: string } }

export const tools: Tool[] = [
  { slug: 'cpf-contribution-calculator', name: 'CPF contribution calculator', short: 'Employer and employee CPF for a month, with the 2026 rates, ceilings and SPR graduated rates.', icon: 'fa-solid fa-calculator', guide: { to: '/resources/how-to-calculate-cpf-contributions', title: 'How to calculate CPF contributions' } },
  { slug: 'overtime-pay-calculator', name: 'Overtime pay calculator', short: 'Overtime pay under Part 4 of the Employment Act, with the non-workman cap and the 72-hour limit.', icon: 'fa-solid fa-user-clock', guide: { to: '/resources/overtime-calculation-singapore', title: 'How to calculate overtime pay in Singapore' } },
  { slug: 'foreign-worker-levy-calculator', name: 'Construction foreign worker levy calculator', short: 'Monthly and annual levy for construction Work Permit holders, with the quota and R1 checks.', icon: 'fa-solid fa-helmet-safety', guide: { to: '/resources/foreign-worker-levy-construction-singapore', title: 'Foreign worker levy for construction' } }
]

export const toolPath = (t: Tool) => `/tools/${t.slug}`
