<template>
  <SolutionLanding
    slug="payroll-software-singapore"
    app="deephr"
    app-name="DeepHR"
    sub-category="Payroll software"
    eyebrow="Payroll software · Singapore"
    seo-title="Payroll Software Singapore: CPF, SDL & SHG"
    seo-description="Payroll software for Singapore SMEs: CPF (incl. graduated PR rates), SDL and SHG on every pay run, MOM overtime and proration, itemised payslips, reports."
    h1="Payroll software for Singapore with CPF, SDL and SHG"
    lead="DeepHR runs Singapore payroll from attendance and leave you have already approved. CPF, SDL and self-help group funds are worked out on every pay run, overtime follows the MOM formula, and PDF payslips go to each employee."
    :hero-points="['CPF incl. graduated PR rates', 'SDL & SHG funds', 'MOM overtime & proration', 'Itemised payslips', 'Salary register & reconciliation']"
    problem-title="Payroll that is re-typed and checked by hand"
    :problems="problems"
    flow-title="From approved time to payslip"
    :flow="flow"
    feature-title="What HR and finance get from every pay run"
    :features="features"
    checklist-title="What Singapore payroll software must handle"
    checklist-lead="The statutory items Singapore employers check when choosing payroll software, and where DeepHR stands on each."
    :checklist="checklist"
    :early-access="['ir8a-ais', 'foreign-worker-levy']"
    early-access-title="Singapore payroll pack — join early access"
    :guide-links="guides"
    :faqs="faqs"
    cta-title="See a Singapore payroll run in DeepHR"
    cta-lead="Bring a month of attendance to a 30-minute demo. We will approve the attendance, run payroll and walk through CPF, SDL, SHG and the payslips."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-clipboard-list', title: 'Hours re-keyed', text: 'Attendance, overtime and unpaid leave are typed from timesheets into a payroll spreadsheet every month.' },
  { icon: 'fa-solid fa-calculator', title: 'Statutory figures checked by hand', text: 'CPF age bands, PR graduated rates, SDL and self-help group funds are worked out in formulas that break when rates change.' },
  { icon: 'fa-solid fa-envelope-open-text', title: 'Payslips sent one by one', text: 'Payslips are built and emailed by hand, and employees ask HR for copies months later.' }
]
const flow = [
  { title: 'Attendance & leave', text: 'Approved sessions, paid leave and holidays.', icon: 'fa-solid fa-user-check' },
  { title: 'Pay run', text: 'Select employees, choose pay items, review.', icon: 'fa-solid fa-play' },
  { title: 'Statutory', text: 'CPF, SDL and SHG applied.', icon: 'fa-solid fa-landmark' },
  { title: 'Payslips', text: 'PDFs filed to each employee’s Documents.', icon: 'fa-solid fa-file-invoice-dollar' },
  { title: 'Reports', text: 'Salary register, reconciliation, statutory summary.', icon: 'fa-solid fa-chart-column' }
]
const features = [
  { icon: 'fa-solid fa-landmark', title: 'CPF, SDL and SHG', text: 'CPF (full, graduated for new PRs, or exempt), the Skills Development Levy and CDAC, SINDA, MBMF and ECF funds.' },
  { icon: 'fa-solid fa-clock', title: 'MOM overtime rules', text: 'OT hourly rate = 12 × basic ÷ (52 × 44) × multiplier, rest-day and public-holiday pay rules, and warnings above 72 OT hours a month.' },
  { icon: 'fa-solid fa-scale-balanced', title: 'MOM proration', text: 'Part months and unpaid leave are prorated using the Ministry of Manpower method.' },
  { icon: 'fa-solid fa-file-invoice', title: 'Itemised payslips', text: 'Itemised PDF payslips, as MOM requires, filed to each employee’s Documents, with NRIC/FIN masked; release and email them a month at a time.' },
  { icon: 'fa-solid fa-chart-column', title: 'Payroll reports', text: 'Salary register, reconciliation, statutory summary, cost to company and monthly totals for gross, CPF, SHG, net and SDL.' },
  { icon: 'fa-solid fa-arrow-trend-up', title: 'Revisions and arrears', text: 'A back-dated salary revision pays one arrears line in the next run; past payslips never change.' },
  { icon: 'fa-solid fa-file-import', title: 'Record mode', text: 'Payroll already paid elsewhere can be uploaded from Excel, so the year-to-date record is complete.' },
  { icon: 'fa-solid fa-location-crosshairs', title: 'Attendance built in', text: 'Face and GPS attendance on each employee’s phone; only HR-approved days reach payroll.' },
  { icon: 'fa-solid fa-user-shield', title: 'Controlled access', text: 'HR admins and the General Manager run payroll; runs move from draft to finalised to paid.' }
]
const checklist = [
  { need: 'CPF contributions', how: 'Age-band rates for Singapore Citizens and PRs, graduated rates for first- and second-year PRs, or exempt, on every pay run.' },
  { need: 'Skills Development Levy (SDL)', how: 'Worked out on every pay run and shown in the monthly payroll totals.' },
  { need: 'Self-help group funds', how: 'CDAC, SINDA, MBMF and ECF deducted per employee.' },
  { need: 'Overtime under the Employment Act', how: 'MOM hourly basic rate formula, OT for basic salaries up to $2,600 (non-workmen) or $4,500 (workmen), rest-day and public-holiday rules.' },
  { need: 'Unpaid leave and part months', how: 'Prorated using the MOM method.' },
  { need: 'Payslips to every employee', how: 'Itemised PDF payslips from each pay run, filed to the employee’s Documents and released by email.' },
  { need: 'Payroll records and reports', how: 'Salary register, reconciliation and statutory summary, exportable to Excel or CSV and emailed on a schedule.' },
  { need: 'IR8A / AIS for IRAS', how: 'Year-end employee income files prepared from the year’s payroll.', early: true },
  { need: 'Foreign worker levy', how: 'Skill tier per worker and the monthly levy cost per worker.', early: true }
]
const guides = [
  { to: '/resources/how-to-calculate-cpf-contributions', title: 'How to calculate CPF contributions in Singapore' },
  { to: '/tools/cpf-contribution-calculator', title: 'Free CPF contribution calculator' },
  { to: '/tools/overtime-pay-calculator', title: 'Free overtime pay calculator' },
  { to: '/resources/leave-entitlement-singapore', title: 'Leave entitlement in Singapore (Employment Act)' },
  { to: '/solutions/construction-payroll-software', title: 'Payroll for construction site teams' },
  { to: '/resources/itemised-payslip-singapore', title: 'Itemised payslips: MOM requirements' },
  { to: '/resources/salary-payment-rules-singapore', title: 'Salary payment rules and deductions' },
  { to: '/solutions/expense-claim-software-singapore', title: 'Expense claim software' }
]
const faqs = [
  { q: 'Is DeepHR PSG pre-approved?', a: 'Not yet. We have applied for Productivity Solutions Grant (PSG) pre-approval for DeepHR. Until it is approved, PSG co-funding cannot be claimed for it; check the pre-approved list on GoBusiness or ask us for the latest status.' },
  { q: 'What should payroll software in Singapore handle?', a: 'CPF for Singapore Citizens and PRs (including graduated rates for new PRs), the Skills Development Levy, self-help group fund deductions, overtime and proration under the Employment Act, payslips for every employee, and year-end income reporting to IRAS. DeepHR covers the pay-run items today; IR8A / AIS files are in early access.' },
  { q: 'Do foreign employees pay CPF?', a: 'No. CPF applies to Singapore Citizens and permanent residents. For Work Permit and S Pass holders the employer pays the foreign worker levy instead, and SDL is still payable. DeepHR keeps each employee’s immigration status and pass details on their record.' },
  { q: 'How does attendance get into payroll?', a: 'Every completed attendance session becomes a pending approval for HR. Approved time is split into normal and OT hours against the schedule, and the pay run pulls approved attendance, approved paid leave and holidays for the period.' },
  { q: 'Can we move to DeepHR in the middle of the year?', a: 'Yes. Record mode lets you upload payroll already paid elsewhere from Excel, so the year-to-date record is complete. Past payslips never change.' },
  { q: 'Is DeepHR payroll only for construction?', a: 'No. The payroll works for any Singapore company. It suits businesses with staff on site, in the field or on shifts, because attendance is captured on each employee’s phone and approved by HR before it is paid.' },
  { q: 'How much does DeepHR payroll cost?', a: 'DeepHR is priced per employee in Starter, Growth and Enterprise tiers; payroll is included from Growth. Pricing is shared on request, with a tailored quote.' },
  { q: 'Is DeepHR AI payroll software? Can AI run our payroll?', a: 'No AI runs your payroll. ARIVU, the AI assistant in DeepHR, can answer questions about the attendance, leave and expense claims that feed the pay run, and export them to Excel or PDF, but it is read-only: it does not run, change or approve payroll. The pay run is prepared and approved by your HR team, with CPF, SDL and SHG worked out by DeepHR.' }
]
</script>
