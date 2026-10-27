// Search-led solution pages (/solutions/<slug>), listed on the solutions index, in the footer,
// on each solution page and in the sitemap. 'construction' pages answer contractor searches;
// 'business' pages answer broad Singapore searches from any sector (DeepHR only; DeepTrack is for contractors).
export type SolutionPage = { slug: string; name: string; icon: string; app: 'deephr' | 'deeptrack' | 'deepcost' | 'deepplan-ai'; group: 'construction' | 'business' }

export const solutionPages: SolutionPage[] = [
  { slug: 'hr-software-singapore', name: 'HR software for Singapore SMEs', icon: 'fa-solid fa-people-group', app: 'deephr', group: 'business' },
  { slug: 'payroll-software-singapore', name: 'Payroll software (CPF, SDL, SHG)', icon: 'fa-solid fa-money-check-dollar', app: 'deephr', group: 'business' },
  { slug: 'attendance-app-singapore', name: 'Attendance app with face and GPS', icon: 'fa-solid fa-location-crosshairs', app: 'deephr', group: 'business' },
  { slug: 'leave-management-system-singapore', name: 'Leave management system', icon: 'fa-solid fa-calendar-days', app: 'deephr', group: 'business' },
  { slug: 'expense-claim-software-singapore', name: 'Expense claim software', icon: 'fa-solid fa-receipt', app: 'deephr', group: 'business' },
  { slug: 'project-cost-management-software', name: 'Project cost management software', icon: 'fa-solid fa-chart-line', app: 'deeptrack', group: 'construction' },
  { slug: 'procurement-software-singapore', name: 'Procurement and purchase order software', icon: 'fa-solid fa-cart-shopping', app: 'deeptrack', group: 'construction' },
  { slug: 'construction-cost-control-software', name: 'Construction cost control software', icon: 'fa-solid fa-chart-line', app: 'deeptrack', group: 'construction' },
  { slug: 'progress-claim-software', name: 'Progress claim software', icon: 'fa-solid fa-file-invoice-dollar', app: 'deeptrack', group: 'construction' },
  { slug: 'construction-payroll-software', name: 'Construction payroll software', icon: 'fa-solid fa-money-check-dollar', app: 'deephr', group: 'construction' },
  { slug: 'construction-hr-software', name: 'HR software for construction', icon: 'fa-solid fa-people-group', app: 'deephr', group: 'construction' },
  { slug: 'foreign-worker-attendance-app', name: 'Foreign worker attendance app', icon: 'fa-solid fa-user-check', app: 'deephr', group: 'construction' },
  { slug: 'tender-estimating-software', name: 'Tender estimating software', icon: 'fa-solid fa-file-signature', app: 'deepcost', group: 'construction' },
  { slug: 'quantity-takeoff-software', name: 'Quantity take-off software', icon: 'fa-solid fa-ruler-combined', app: 'deepplan-ai', group: 'construction' },
  { slug: 'estimating', name: 'MEP estimating and BOQ software', icon: 'fa-solid fa-calculator', app: 'deepcost', group: 'construction' }
]

// Route of a solution entry (MEP estimating lives on the DeepCost product page).
export const solutionPath = (s: SolutionPage) => (s.slug === 'estimating' ? '/products/deepcost' : `/solutions/${s.slug}`)
