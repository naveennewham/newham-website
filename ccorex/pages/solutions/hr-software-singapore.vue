<template>
  <SolutionLanding
    slug="hr-software-singapore"
    app="deephr"
    app-name="DeepHR"
    sub-category="HR and payroll software"
    eyebrow="HR software · Singapore SMEs"
    seo-title="HR Software Singapore for SMEs — DeepHR"
    seo-description="HR software for Singapore SMEs: face and GPS attendance on staff phones, leave, claims, timesheets, multi-level approvals, and CPF, SDL and SHG payroll."
    h1="HR software for Singapore SMEs"
    lead="DeepHR is an HR system for Singapore SMEs, especially teams with staff on site or on the move. Employees check in by face and GPS on their own phone and apply for leave and claims in the app; approved records flow into payroll with CPF, SDL and SHG worked out."
    :hero-points="['Face + GPS attendance on staff phones', 'Leave, claims & timesheets', 'Multi-level approvals', 'CPF, SDL & SHG payroll', 'Employee self-service app']"
    problem-title="HR in a growing SME runs on spreadsheets and chat"
    :problems="problems"
    flow-title="From employee request to payslip"
    :flow="flow"
    feature-title="One HR system for HR, managers and employees"
    :features="features"
    checklist-title="What Singapore SMEs look for in HR software"
    checklist-lead="The questions buyers ask most when comparing HR systems in Singapore, and how DeepHR answers each one."
    :checklist="checklist"
    :early-access="['ir8a-ais', 'work-pass-alerts']"
    early-access-title="Singapore HR pack — join early access"
    :guide-links="guides"
    :faqs="faqs"
    cta-title="See DeepHR with your own HR policies"
    cta-lead="Book a 30-minute demo. We will check in on a phone, submit leave and a claim, approve them and show the payroll run with CPF, SDL and SHG."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-table-cells', title: 'Spreadsheets nobody trusts', text: 'Leave balances, claims and payroll sit in separate files that HR reconciles by hand every month.' },
  { icon: 'fa-solid fa-user-secret', title: 'Attendance you can’t verify', text: 'Staff who work away from the office sign in on paper or by message, and nobody can check who was where.' },
  { icon: 'fa-solid fa-comments', title: 'Approvals lost in chat', text: 'Leave and claims are approved on WhatsApp or email, with no trail and no live status for the employee.' }
]
const flow = [
  { title: 'Check in or request', text: 'Attendance, leave, claim or timesheet on the phone.', icon: 'fa-solid fa-mobile-screen' },
  { title: 'Approvals', text: 'Routed through your approval levels.', icon: 'fa-solid fa-user-check' },
  { title: 'HR review', text: 'HR approves each attendance session.', icon: 'fa-solid fa-circle-check' },
  { title: 'Payroll', text: 'CPF, SDL and SHG applied.', icon: 'fa-solid fa-money-check-dollar' },
  { title: 'Itemised payslips', text: 'Filed to each employee’s Documents.', icon: 'fa-solid fa-file-invoice' }
]
const features = [
  { icon: 'fa-solid fa-id-badge', title: 'Employee records', text: 'Profiles, organisation structure and work pass details, with Excel bulk upload and a dry run before anything is saved.' },
  { icon: 'fa-solid fa-location-crosshairs', title: 'Face + GPS attendance', text: 'Staff check in on their own phone against a site radius, with no kiosk to buy; punches queue when there is no signal.' },
  { icon: 'fa-solid fa-calendar-days', title: 'Leave and public holidays', text: 'Singapore leave presets as a starting point, Singapore public holidays and a team leave calendar.' },
  { icon: 'fa-solid fa-receipt', title: 'Expense claims', text: 'Transport, meals, medical, training and more in SGD with a receipt, approved and then marked paid.' },
  { icon: 'fa-solid fa-user-check', title: 'Multi-level approvals', text: 'One engine for leave, claims, HR letters and timesheets, with numbered levels and conditional rules.' },
  { icon: 'fa-solid fa-landmark', title: 'Singapore payroll', text: 'CPF (including graduated rates for new PRs), SDL and self-help group funds on every pay run.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'Employee self-service', text: 'Payslips, leave balances, policies to acknowledge and a helpdesk to HR, installable on a phone as an app.' },
  { icon: 'fa-solid fa-chart-column', title: 'HR reports', text: 'Headcount, joiners and leavers, attrition, leave and claims registers and payroll reports, emailed on a schedule.' },
  { icon: 'fa-solid fa-lock', title: 'Employee data protected', text: 'Personal, bank and ID fields encrypted, role-based access and an audit log of HR changes.' }
]
const checklist = [
  { need: 'CPF, SDL and SHG contributions', how: 'Worked out on every pay run: CPF (full, graduated for new PRs, or exempt), the Skills Development Levy and CDAC, SINDA, MBMF and ECF funds.' },
  { need: 'Employment Act leave', how: 'Singapore leave presets (annual, medical, hospitalisation, childcare, maternity, paternity) as a starting point; HR adjusts leave types, entitlements and balances.' },
  { need: 'MOM overtime and proration', how: 'Overtime from the MOM hourly basic rate formula, for basic salaries up to $2,600 (non-workmen) or $4,500 (workmen), and part months and unpaid leave prorated using the MOM method.' },
  { need: 'Attendance for staff away from the office', how: 'Face and GPS check-in on each employee’s own phone, checked against the site radius; HR approves each session before it reaches payroll.' },
  { need: 'Payslips and records', how: 'PDF payslips filed to each employee’s Documents and released by email a month at a time, with salary register and reconciliation reports.' },
  { need: 'Mobile access for every employee', how: 'Employee self-service installs on a phone as an app: check-in, leave, claims, timesheets, payslips and documents.' },
  { need: 'Employee data protection', how: 'Personal, bank and ID fields encrypted, role-based access, and an audit log of HR changes.' },
  { need: 'IR8A / AIS year-end files', how: 'Year-end employee income files for IRAS, prepared from the year’s payroll.', early: true }
]
const guides = [
  { to: '/resources/leave-entitlement-singapore', title: 'Leave entitlement in Singapore (Employment Act)' },
  { to: '/resources/how-to-calculate-cpf-contributions', title: 'How to calculate CPF contributions' },
  { to: '/solutions/payroll-software-singapore', title: 'Payroll software for Singapore' }
]
const faqs = [
  { q: 'Is DeepHR PSG pre-approved?', a: 'Not yet. We have applied for Productivity Solutions Grant (PSG) pre-approval for DeepHR. Until it is approved, PSG co-funding cannot be claimed for it; check the pre-approved list on GoBusiness or ask us for the latest status.' },
  { q: 'What should HR software in Singapore include?', a: 'At minimum: employee records, leave that follows Employment Act entitlements, claims, attendance, and payroll that works out CPF, SDL and self-help group funds, with approvals and self-service for employees. DeepHR covers all of these in one app, with face and GPS attendance on each employee’s own phone.' },
  { q: 'Is DeepHR only for construction companies?', a: 'No. DeepHR works for any Singapore company. It was built for businesses with staff on site or on the move as well as in the office, so it suits SMEs whose people do not sit at a desk all day.' },
  { q: 'What is the difference between HR software and payroll software?', a: 'HR software manages people, leave, claims, attendance and approvals; payroll software turns that into pay with statutory contributions. DeepHR does both, so approved attendance and leave flow straight into the pay run.' },
  { q: 'Do employees need a company phone or a time clock?', a: 'No. Attendance, leave, claims and payslips run on each employee’s own phone. There is no kiosk or time clock to buy.' },
  { q: 'Can we use DeepHR on its own?', a: 'Yes. DeepHR is sold on its own in Starter, Growth and Enterprise tiers, priced per employee. DeepTrack or DeepCost can be added later on the same sign-in.' },
  { q: 'Does DeepHR prepare IR8A forms?', a: 'IR8A / AIS year-end files are in early access. Request early access and we will show you where the feature stands in your demo.' },
  { q: 'How much does DeepHR cost?', a: 'DeepHR is priced per employee in Starter, Growth and Enterprise tiers. Pricing is shared on request: book a demo or email admin@newhamtech.com for a tailored quote.' },
  { q: 'Is DeepHR AI HR software?', a: 'DeepHR has AI built in. ARIVU, the AI assistant in every CCorex app, answers HR and managers’ questions about employees, leave balances, attendance and expense claims, as text, a chart, or an Excel or PDF export, and attendance check-in uses face recognition on the employee’s own phone. ARIVU is read-only: it never changes records, and staff see only their own data while managers and admins see their team’s. AI receipt scanning and attendance anomaly alerts are in early access.' }
]
</script>
