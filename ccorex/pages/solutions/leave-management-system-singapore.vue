<template>
  <SolutionLanding
    slug="leave-management-system-singapore"
    app="deephr"
    app-name="DeepHR"
    sub-category="Leave management software"
    eyebrow="Leave management · Singapore"
    seo-title="Leave Management System Singapore — DeepHR"
    seo-description="Leave management system for Singapore: apply on the phone, Singapore leave presets and public holidays, multi-level approvals, team calendar, payroll sync."
    h1="Leave management system for Singapore companies"
    lead="With DeepHR, employees apply for leave on their phone, the request follows your approval chain, and balances, the team calendar and payroll update when it is approved. Singapore leave presets and public holidays are built in."
    :hero-points="['Apply for leave on the phone', 'Singapore leave presets', 'Singapore public holidays', 'Multi-level approvals', 'Approved leave into payroll']"
    problem-title="Leave tracked in spreadsheets and chat"
    :problems="problems"
    flow-title="From leave request to payroll"
    :flow="flow"
    feature-title="What employees, managers and HR get"
    :features="features"
    checklist-title="What a leave management system in Singapore should cover"
    checklist-lead="The points buyers check when replacing leave spreadsheets, and how DeepHR handles each."
    :checklist="checklist"
    :guide-links="guides"
    :faqs="faqs"
    cta-title="See leave management with your own leave policy"
    cta-lead="Book a 30-minute demo. We will set up your leave types, apply for leave on a phone, approve it and show the balance, calendar and payroll update."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-table-cells', title: 'Balances nobody trusts', text: 'Leave balances live in a spreadsheet that is updated by hand and checked again at year end.' },
  { icon: 'fa-solid fa-comments', title: 'Requests in chat', text: 'Leave is asked for and approved on WhatsApp or email, and nobody can see what was agreed.' },
  { icon: 'fa-solid fa-calendar-xmark', title: 'Clashes found too late', text: 'Managers cannot see who else is away, and unpaid leave is missed in payroll.' }
]
const flow = [
  { title: 'Apply', text: 'Leave type and dates on the phone.', icon: 'fa-solid fa-mobile-screen' },
  { title: 'Approve', text: 'Through your numbered approval levels.', icon: 'fa-solid fa-user-check' },
  { title: 'Balance & calendar', text: 'Updated when approved.', icon: 'fa-solid fa-calendar-days' },
  { title: 'Payroll', text: 'Paid and unpaid leave in the pay run.', icon: 'fa-solid fa-money-check-dollar' }
]
const features = [
  { icon: 'fa-solid fa-mobile-screen', title: 'Leave on the phone', text: 'Employees apply, track the status in My Requests and see their balances and leave history in the app.' },
  { icon: 'fa-solid fa-umbrella-beach', title: 'Singapore leave presets', text: 'Annual, medical, hospitalisation, childcare, maternity and paternity presets as a starting point; HR adjusts types, entitlements and balances.' },
  { icon: 'fa-solid fa-flag', title: 'Singapore public holidays', text: 'Public holidays per jurisdiction, each with an enabled toggle, excluded from leave days.' },
  { icon: 'fa-solid fa-user-check', title: 'Multi-level approvals', text: 'Numbered levels per leave request, with conditional rules, for example an extra level when a request is more than 2 days.' },
  { icon: 'fa-solid fa-calendar-days', title: 'Team leave calendar', text: 'A month view of who is away, colour-coded by leave type.' },
  { icon: 'fa-solid fa-money-check-dollar', title: 'Linked to payroll', text: 'Approved paid leave and holidays are pulled into the pay run; unpaid leave is prorated using the MOM method.' },
  { icon: 'fa-solid fa-file-import', title: 'Import leave data', text: 'Bring existing balances in from Excel when you move off spreadsheets.' },
  { icon: 'fa-solid fa-chart-column', title: 'Leave reports', text: 'Leave balances and leave taken, exportable to Excel or CSV and emailed on a schedule.' },
  { icon: 'fa-solid fa-bell', title: 'Notifications', text: 'In-app notices and emails for approvals that each organisation can switch on or off.' }
]
const checklist = [
  { need: 'Employment Act leave types', how: 'Presets for annual, medical, hospitalisation, childcare, maternity and paternity leave, plus your own types such as unpaid or compassionate leave.' },
  { need: 'Entitlements you control', how: 'HR sets entitlements per leave type and can adjust any employee’s balance.' },
  { need: 'Singapore public holidays', how: 'The year’s Singapore public holidays are listed and excluded from leave days.' },
  { need: 'Approval workflow', how: 'One approvals engine with numbered levels, conditional rules and employee-specific chains; approvers can approve, reject or send back for clarification.' },
  { need: 'Visibility for managers', how: 'A team leave calendar and a Pending Approvals list for everything waiting on them.' },
  { need: 'Payroll accuracy', how: 'Approved leave flows into the DeepHR pay run, so unpaid leave is deducted and prorated without re-typing.' },
  { need: 'Mobile self-service', how: 'Leave, balances, attendance, claims and payslips in one app on each employee’s phone.' }
]
const guides = [
  { to: '/resources/leave-entitlement-singapore', title: 'Leave entitlement in Singapore (Employment Act)' },
  { to: '/solutions/hr-software-singapore', title: 'HR software for Singapore SMEs' },
  { to: '/solutions/payroll-software-singapore', title: 'Payroll software for Singapore' }
]
const faqs = [
  { q: 'Does DeepHR follow MOM leave rules?', a: 'Yes. DeepHR’s Singapore leave presets follow the Employment Act entitlements published by MOM. See our guide to leave entitlement in Singapore for the statutory figures.' },
  { q: 'How many days of annual leave are employees entitled to in Singapore?', a: 'Under the Employment Act, an employee who has worked for at least 3 months gets 7 days of annual leave in the first year of service, rising by one day a year to 14 days from the eighth year. Employers can give more by contract. See the MOM annual leave page for the full rules.' },
  { q: 'How much sick leave do employees get in Singapore?', a: 'After 6 months of service, employees covered by the Employment Act get 14 days of paid outpatient sick leave and up to 60 days of hospitalisation leave a year (the 60 days include the 14). Between 3 and 6 months of service the entitlement is pro-rated.' },
  { q: 'Can DeepHR follow our own leave policy?', a: 'Yes. The Singapore presets are a starting point. HR can add or change leave types, set entitlements, adjust balances and configure the approval chain for leave requests.' },
  { q: 'Can employees apply for leave on their phone?', a: 'Yes. Employees apply, see their balances and track each request in the DeepHR app on their own phone. Approvers see their queue in Pending Approvals.' },
  { q: 'Does leave sync with payroll?', a: 'Yes. Approved paid leave and public holidays are pulled into the pay run for the period, and unpaid leave is prorated using the Ministry of Manpower method.' },
  { q: 'Can we use DeepHR just for leave and attendance?', a: 'Yes. The DeepHR Starter tier covers employee self-service, leave and holidays, face and GPS attendance, documents, policies and standard approvals. Claims, payroll and multi-level approval chains come with Growth.' },
  { q: 'Can AI tell us our leave balances?', a: 'Yes. Ask ARIVU, the AI assistant in DeepHR, “How much annual leave does each person have left?” or for leave balances by leave type this year, and get the answer as text, a chart or an Excel export. ARIVU is read-only: it never applies for, approves or changes leave, and staff see only their own leave while managers and admins see their team’s.' }
]
</script>
