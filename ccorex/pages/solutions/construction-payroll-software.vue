<template>
  <SolutionLanding
    slug="construction-payroll-software"
    app="deephr"
    app-name="DeepHR"
    eyebrow="Construction payroll · Singapore"
    seo-title="Construction payroll software in Singapore"
    seo-description="Construction payroll software for Singapore: site attendance into payroll, CPF, SDL and SHG, foreign worker levy reports, payslips and IR8A/AIS files."
    h1="Construction payroll software for Singapore"
    lead="DeepHR turns face and GPS attendance from your sites into payroll with CPF, SDL and SHG worked out, reports the foreign worker levy by worker and project, and prepares the year-end IR8A/AIS files."
    :hero-points="['Site attendance into payroll', 'CPF, SDL & SHG', 'Foreign worker levy report', 'Payslips & leave', 'IR8A / AIS year-end files']"
    problem-title="Payroll for site teams is still pieced together"
    :problems="problems"
    flow-title="From site check-in to payslip"
    :flow="flow"
    feature-title="What HR and finance get"
    :features="features"
    :guide-links="guides"
    :faqs="faqs"
    cta-title="See a construction payroll run in DeepHR"
    cta-lead="Bring a month of attendance to a 30-minute demo. We will walk through attendance approval, the payroll run and the statutory figures."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-clipboard-list', title: 'Attendance re-keyed', text: 'Site time sheets and punch-card exports are typed into payroll every month.' },
  { icon: 'fa-solid fa-calculator', title: 'Statutory figures checked by hand', text: 'CPF rates, SDL and self-help group funds are worked out in spreadsheets and checked again at year end.' },
  { icon: 'fa-solid fa-coins', title: 'Levy cost not visible', text: 'The foreign worker levy is paid but never shown against the projects the workers are on.' }
]
const flow = [
  { title: 'Check in on site', text: 'Face and GPS on the worker’s own phone.', icon: 'fa-solid fa-user-check' },
  { title: 'HR approves', text: 'Each attendance session approved.', icon: 'fa-solid fa-circle-check' },
  { title: 'Leave & claims', text: 'Through the same approvals.', icon: 'fa-solid fa-calendar-days' },
  { title: 'Payroll run', text: 'CPF, SDL and SHG applied.', icon: 'fa-solid fa-money-check-dollar' },
  { title: 'Payslips', text: 'To every employee.', icon: 'fa-solid fa-file-invoice' },
  { title: 'Year end', text: 'IR8A / AIS submission files.', icon: 'fa-solid fa-file-export' }
]
const features = [
  { icon: 'fa-solid fa-location-crosshairs', title: 'Face + GPS attendance', text: 'Workers check in on their own phone, with no kiosk to install, and approved attendance flows into payroll.' },
  { icon: 'fa-solid fa-landmark', title: 'CPF, SDL and SHG', text: 'CPF, including graduated rates for new PRs, SDL and self-help group funds (CDAC, SINDA, MBMF, ECF).' },
  { icon: 'fa-solid fa-coins', title: 'Foreign worker levy report', text: 'Monthly levy cost per worker and per project, so it can be costed to the job.' },
  { icon: 'fa-solid fa-id-card', title: 'Work Permit register', text: 'Work Permit numbers and expiry dates, with alerts before a permit expires.' },
  { icon: 'fa-solid fa-file-export', title: 'IR8A / AIS files', text: 'Year-end employee income files prepared for submission.' },
  { icon: 'fa-solid fa-diagram-project', title: 'Linked to project costs', text: 'Timesheets and labour cost flow to projects in DeepTrack at month end.' }
]
const guides = [
  { to: '/resources/construction-payroll-singapore', title: 'Construction payroll in Singapore' },
  { to: '/resources/foreign-worker-levy-construction-singapore', title: 'Foreign worker levy and quota for construction' },
  { to: '/solutions/foreign-worker-attendance-app', title: 'Foreign worker attendance app' }
]
const faqs = [
  { q: 'Which Singapore contributions does DeepHR calculate?', a: 'CPF, including graduated rates for new permanent residents, the Skills Development Levy, and self-help group funds (CDAC, SINDA, MBMF, ECF). Rates follow the current CPF Board and IRAS rules; check them against official sources when they change.' },
  { q: 'Does it handle foreign workers?', a: 'Yes. Workers check in with face and GPS on their phone, Work Permit expiry dates are tracked with alerts, and the monthly levy cost is reported per worker and per project.' },
  { q: 'Does DeepHR prepare IR8A?', a: 'DeepHR prepares the year-end IR8A / AIS employee income files for submission to IRAS.' },
  { q: 'Do workers need a company phone?', a: 'No. Attendance runs on the worker’s own phone, and punches are queued if there is no signal on site.' },
  { q: 'How is DeepHR priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
