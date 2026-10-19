<template>
  <SolutionLanding
    slug="construction-hr-software"
    app="deephr"
    app-name="DeepHR"
    eyebrow="HR software · Singapore"
    seo-title="HR software for construction companies in Singapore"
    seo-description="HR software for Singapore construction companies with office and site teams: phone attendance, leave, claims, multi-level approvals, payslips and CPF payroll."
    h1="HR software for construction companies in Singapore"
    lead="DeepHR runs HR for office and site teams in one app: face and GPS attendance on each employee's phone, leave, claims and timesheets through one approvals engine, and payroll with CPF, SDL and SHG. Use it on its own or with the rest of CCorex."
    :hero-points="['Attendance on the employee’s phone', 'Leave, claims & timesheets', 'Multi-level approvals', 'Payslips & reports', 'Employee self-service']"
    problem-title="HR for site teams still runs on paper and chat messages"
    :problems="problems"
    flow-title="From request to approved record"
    :flow="flow"
    feature-title="What HR, managers and employees get"
    :features="features"
    :guide-links="guides"
    :faqs="faqs"
    cta-title="See DeepHR for your office and site teams"
    cta-lead="Book a 30-minute demo. We will check in on a phone, submit leave and a claim, approve them and show the payroll run."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-comments', title: 'Requests lost in chat', text: 'Leave and claims arrive on WhatsApp and paper forms, and nobody can see what was approved.' },
  { icon: 'fa-solid fa-clipboard-list', title: 'Site attendance on paper', text: 'Attendance from each site is collected by hand and re-typed before payroll.' },
  { icon: 'fa-solid fa-user-lock', title: 'HR does everything', text: 'Employees ask HR for payslips, balances and policies because there is no self-service.' }
]
const flow = [
  { title: 'Employee request', text: 'Leave, claim or timesheet on the phone.', icon: 'fa-solid fa-mobile-screen' },
  { title: 'Approvals', text: 'Routed through your approval levels.', icon: 'fa-solid fa-user-check' },
  { title: 'HR review', text: 'Attendance sessions approved by HR.', icon: 'fa-solid fa-circle-check' },
  { title: 'Payroll', text: 'Approved data flows into payroll.', icon: 'fa-solid fa-money-check-dollar' },
  { title: 'Payslips', text: 'Available to each employee.', icon: 'fa-solid fa-file-invoice' }
]
const features = [
  { icon: 'fa-solid fa-location-crosshairs', title: 'Face + GPS attendance', text: 'Employees check in on their own phone, with no kiosk; punches queue when there is no signal.' },
  { icon: 'fa-solid fa-calendar-days', title: 'Leave and claims', text: 'Leave, claims and timesheets through one multi-level approvals engine.' },
  { icon: 'fa-solid fa-landmark', title: 'Singapore payroll', text: 'CPF (including graduated rates for new PRs), SDL and self-help group funds.' },
  { icon: 'fa-solid fa-id-badge', title: 'Employee self-service', text: 'Payslips, leave balances and policies in the app for every employee.' },
  { icon: 'fa-solid fa-chart-column', title: 'HR reports', text: 'Headcount, joiners and leavers, attrition, leave and claims registers, and payroll summaries.' },
  { icon: 'fa-solid fa-earth-asia', title: 'Singapore and India', text: 'Run a Singapore organisation, an India organisation, or both, each with its own statutory rules.' }
]
const guides = [
  { to: '/resources/construction-payroll-singapore', title: 'Construction payroll in Singapore' },
  { to: '/resources/foreign-worker-levy-construction-singapore', title: 'Foreign worker levy and quota for construction' },
  { to: '/solutions/foreign-worker-attendance-app', title: 'Foreign worker attendance app' }
]
const faqs = [
  { q: 'Can we use DeepHR without the other CCorex apps?', a: 'Yes. DeepHR is sold on its own in Starter, Growth and Enterprise tiers, priced per employee. DeepCost or DeepTrack can be added later on the same sign-in.' },
  { q: 'Is DeepHR only for construction companies?', a: 'It is built for firms with office and site teams, such as contractors, but the HR, leave, claims and payroll features work for any Singapore or India company.' },
  { q: 'Do employees need a company phone?', a: 'No. Attendance, leave, claims and payslips run on each employee’s own phone.' },
  { q: 'Which Singapore payroll contributions are covered?', a: 'CPF (including graduated rates for new permanent residents), the Skills Development Levy and self-help group funds (CDAC, SINDA, MBMF, ECF).' },
  { q: 'How is DeepHR priced?', a: 'Per employee, in Starter, Growth and Enterprise tiers. Contact us for a tailored quote.' }
]
</script>
