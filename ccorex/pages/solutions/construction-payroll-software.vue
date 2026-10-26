<template>
  <SolutionLanding
    slug="construction-payroll-software"
    app="deephr"
    app-name="DeepHR"
    eyebrow="Construction payroll · Singapore"
    seo-title="Payroll software for construction companies in Singapore"
    seo-description="Construction payroll software for Singapore: site attendance into payroll, MOM overtime, CPF, SDL and SHG, itemised payslips and work pass records."
    h1="Payroll software for construction companies in Singapore"
    lead="DeepHR turns face and GPS attendance from your sites into payroll with CPF, SDL and SHG worked out, and keeps each worker’s pass type, number and expiry date on their record."
    :hero-points="['Site attendance into payroll', 'CPF, SDL & SHG', 'Payslips & leave', 'Work pass records']"
    problem-title="Payroll for site teams is still pieced together"
    :problems="problems"
    flow-title="From site check-in to payslip"
    :flow="flow"
    feature-title="What HR and finance get"
    :features="features"
    checklist-title="What to look for in construction payroll software"
    checklist-lead="Site teams make payroll harder than office payroll: attendance from many sites, overtime and rest-day work, foreign workers and labour cost per project. Here is how DeepHR handles each."
    :checklist="checklist"
    :guide-links="guides"
    :faqs="faqs"
    :early-access="['ir8a-ais', 'foreign-worker-levy', 'work-pass-alerts']"
    cta-title="See a construction payroll run in DeepHR"
    cta-lead="Bring a month of attendance to a 30-minute demo. We will walk through attendance approval, the payroll run and the statutory figures."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-clipboard-list', title: 'Attendance re-keyed', text: 'Site time sheets and punch-card exports are typed into payroll every month.' },
  { icon: 'fa-solid fa-calculator', title: 'Statutory figures checked by hand', text: 'CPF rates, SDL and self-help group funds are worked out in spreadsheets and checked again at year end.' },
  { icon: 'fa-solid fa-id-card', title: 'Pass details scattered', text: 'Work pass numbers and expiry dates sit in a separate spreadsheet from attendance and payroll.' }
]
const flow = [
  { title: 'Check in on site', text: 'Face and GPS on the worker’s own phone.', icon: 'fa-solid fa-user-check' },
  { title: 'HR approves', text: 'Each attendance session approved.', icon: 'fa-solid fa-circle-check' },
  { title: 'Leave & claims', text: 'Through the same approvals.', icon: 'fa-solid fa-calendar-days' },
  { title: 'Payroll run', text: 'CPF, SDL and SHG applied.', icon: 'fa-solid fa-money-check-dollar' },
  { title: 'Payslips', text: 'To every employee.', icon: 'fa-solid fa-file-invoice' }
]
const features = [
  { icon: 'fa-solid fa-location-crosshairs', title: 'Face + GPS attendance', text: 'Workers check in on their own phone, with no kiosk to install, and approved attendance flows into payroll.' },
  { icon: 'fa-solid fa-landmark', title: 'CPF, SDL and SHG', text: 'CPF, including graduated rates for new PRs, SDL and self-help group funds (CDAC, SINDA, MBMF, ECF).' },
  { icon: 'fa-solid fa-id-card', title: 'Work pass records', text: 'Immigration status, pass type, pass number and issue and expiry dates on each employee record, with Excel import and export.' },
  { icon: 'fa-solid fa-file-invoice', title: 'Payslips and reports', text: 'Payslips with NRIC/FIN masked, plus payroll reports for finance.' },
  { icon: 'fa-solid fa-diagram-project', title: 'Linked to project costs', text: 'Timesheets and labour cost flow to projects in DeepTrack at month end.' }
]
const checklist = [
  { need: 'Site attendance into payroll', how: 'Face and GPS check-in on each worker’s phone, approved by HR, then approved hours flow into the payroll run. No time sheets to re-key.' },
  { need: 'MOM overtime and proration', how: 'Overtime and part-month proration follow MOM rules, worked out from approved attendance.' },
  { need: 'CPF, SDL and SHG', how: 'CPF including graduated rates for new PRs, the Skills Development Levy and self-help group funds on every pay run.' },
  { need: 'Itemised payslips', how: 'Itemised payslips for every employee, with NRIC/FIN masked.' },
  { need: 'Work pass records', how: 'Pass type, number, and issue and expiry dates on each worker’s record, with Excel import and export.' },
  { need: 'Labour cost per project', how: 'Timesheets and labour cost flow to projects in DeepTrack at month end.' },
  { need: 'IR8A and AIS files', how: 'Year-end IR8A and AIS files are in early access.', early: true },
  { need: 'Foreign worker levy report', how: 'A monthly levy report by worker is in early access.', early: true },
  { need: 'Work pass expiry alerts', how: 'Alerts before passes expire are in early access.', early: true }
]
const guides = [
  { to: '/resources/construction-payroll-singapore', title: 'Construction payroll in Singapore' },
  { to: '/resources/foreign-worker-levy-construction-singapore', title: 'Foreign worker levy and quota for construction' },
  { to: '/resources/overtime-calculation-singapore', title: 'How to calculate overtime pay in Singapore' },
  { to: '/solutions/foreign-worker-attendance-app', title: 'Foreign worker attendance app' }
]
const faqs = [
  { q: 'Which Singapore contributions does DeepHR calculate?', a: 'CPF, including graduated rates for new permanent residents, the Skills Development Levy, and self-help group funds (CDAC, SINDA, MBMF, ECF). Rates follow the current CPF Board and IRAS rules; check them against official sources when they change.' },
  { q: 'Does it handle foreign workers?', a: 'Yes. Workers check in with face and GPS on their own phone, and each worker’s pass type, number and expiry date are kept on their record.' },
  { q: 'Do workers need a company phone?', a: 'No. Attendance runs on the worker’s own phone, and punches are queued if there is no signal on site.' },
  { q: 'Does DeepHR calculate overtime for site workers?', a: 'Yes. Approved attendance feeds the payroll run, and overtime follows MOM rules. Our guide to calculating overtime pay in Singapore explains the rates, the 72-hour monthly cap and rest-day pay.' },
  { q: 'Is this construction payroll software or a payroll service?', a: 'DeepHR is payroll software that your own HR or finance team runs. It is not an outsourced payroll bureau. Your team approves attendance and runs payroll, and DeepHR does the calculations and payslips.' },
  { q: 'How is DeepHR priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
