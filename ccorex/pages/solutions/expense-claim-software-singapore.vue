<template>
  <SolutionLanding
    slug="expense-claim-software-singapore"
    app="deephr"
    app-name="DeepHR"
    sub-category="Expense claim software"
    eyebrow="Expense claims · Singapore"
    seo-title="Expense Claim Software Singapore — DeepHR"
    seo-description="Expense claim software for Singapore SMEs: claims in SGD with a receipt on the phone, multi-level approvals with amount rules, marked paid, claims register and reports."
    h1="Expense claim software for Singapore companies"
    lead="With DeepHR, employees submit transport, meal, medical, training and other claims in SGD with a receipt from their phone. Each claim follows your approval chain, with an extra level above a set amount, and is marked paid once approved."
    :hero-points="['Claims in SGD with a receipt', 'Submit on the phone', 'Multi-level approvals', 'Extra level above a set amount', 'Claims register & reports']"
    problem-title="Claims on paper, receipts in a drawer"
    :problems="problems"
    flow-title="From receipt to paid claim"
    :flow="flow"
    feature-title="What employees, approvers and finance get"
    :features="features"
    checklist-title="What expense claim software in Singapore should cover"
    checklist-lead="The points finance and HR teams check when replacing paper claim forms, and where DeepHR stands on each."
    :checklist="checklist"
    :early-access="['ai-receipt-scan']"
    early-access-title="AI receipt scan — join early access"
    :guide-links="guides"
    :faqs="faqs"
    cta-title="See an expense claim approved in DeepHR"
    cta-lead="Book a 30-minute demo. We will submit a claim with a receipt on a phone, approve it through your levels and show the claims register."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-file-lines', title: 'Paper forms and lost receipts', text: 'Claims are filled in on paper or in a spreadsheet, and receipts go missing before finance checks them.' },
  { icon: 'fa-solid fa-comments', title: 'Approvals in chat', text: 'Managers approve claims on WhatsApp or email, so nobody can see who approved what, or when.' },
  { icon: 'fa-solid fa-hourglass-half', title: 'Employees chasing payment', text: 'Staff ask HR and finance whether a claim was approved or paid, because there is no status to check.' }
]
const flow = [
  { title: 'Submit', text: 'Claim type, amount in SGD and receipt on the phone.', icon: 'fa-solid fa-mobile-screen' },
  { title: 'Approve', text: 'Through your numbered approval levels.', icon: 'fa-solid fa-user-check' },
  { title: 'Amount rule', text: 'An extra level above a set amount.', icon: 'fa-solid fa-scale-balanced' },
  { title: 'Paid', text: 'Approved claims marked paid.', icon: 'fa-solid fa-circle-check' },
  { title: 'Reports', text: 'Claims register, saved and scheduled.', icon: 'fa-solid fa-chart-column' }
]
const features = [
  { icon: 'fa-solid fa-receipt', title: 'Claims with a receipt', text: 'Transport, meals, medical, training and more, in SGD with a receipt attached.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'Self-service on the phone', text: 'Employees submit claims and track them in My Requests; self-service installs on a phone as an app.' },
  { icon: 'fa-solid fa-sitemap', title: 'Multi-level approvals', text: 'Numbered levels per request type, by reporting line or role, from the same engine as leave, HR letters and timesheets.' },
  { icon: 'fa-solid fa-code-branch', title: 'Conditional rules', text: 'Add an approval level when a field matches, for example a claim above a set amount.' },
  { icon: 'fa-solid fa-list-check', title: 'Status for everyone', text: 'Draft, submitted, in progress, approved or rejected, with a full trail for HR and a live status for the employee.' },
  { icon: 'fa-solid fa-chart-column', title: 'Claims register', text: 'Claims reports saved and emailed on a schedule, alongside payroll, people and leave reports.' }
]
const checklist = [
  { need: 'Receipts kept with each claim', how: 'Every claim is submitted in SGD with its receipt, so the record and the evidence stay together.' },
  { need: 'Claim types your policy uses', how: 'Transport, meals, medical, training and more.' },
  { need: 'Approval by the right people', how: 'Numbered approval levels per request type, by reporting line or role.' },
  { need: 'Extra checks on larger claims', how: 'A conditional rule adds an approval level when the claim is above a set amount.' },
  { need: 'A clear status for the employee', how: 'Claims move from submitted to approved or rejected, and approved claims are marked paid.' },
  { need: 'A register for finance', how: 'A claims register report, which can be saved and emailed on a schedule.' },
  { need: 'Receipt details filled in automatically', how: 'Snap a receipt and AI fills in the amount, date, merchant and category for the employee to check.', early: true }
]
const guides = [
  { to: '/solutions/hr-software-singapore', title: 'HR software for Singapore SMEs' },
  { to: '/solutions/payroll-software-singapore', title: 'Payroll software for Singapore' },
  { to: '/resources/salary-payment-rules-singapore', title: 'Salary payment rules in Singapore' },
  { to: '/resources/itemised-payslip-singapore', title: 'Itemised payslips: MOM requirements' }
]
const faqs = [
  { q: 'What claims can employees submit in DeepHR?', a: 'Transport, meals, medical, training and other claim types, in SGD with a receipt. Each claim follows the approval chain HR sets up for claims.' },
  { q: 'Can large claims need an extra approver?', a: 'Yes. A conditional rule can add an approval level when a field matches, for example when the claim is above a set amount, so the General Manager approves only the larger claims.' },
  { q: 'Can employees submit claims on their phone?', a: 'Yes. Employee self-service covers claims as well as leave, attendance, timesheets and documents, and it installs on a phone as an app.' },
  { q: 'Does DeepHR read receipts with AI?', a: 'Not yet. AI receipt scan, which fills in the amount, date, merchant and category from a photo of the receipt, is in early access. Today employees enter the claim and attach the receipt.' },
  { q: 'Can AI approve claims?', a: 'No. ARIVU, the AI assistant in DeepHR, can tell you which claims are pending and export approved claims to Excel, but it is read-only. Claims are approved by people through your approval levels.' },
  { q: 'Is DeepHR PSG pre-approved?', a: 'Not yet. We have applied for Productivity Solutions Grant (PSG) pre-approval for DeepHR. Until it is approved, PSG co-funding cannot be claimed for it.' },
  { q: 'Which plan includes claims?', a: 'Claims are included from the Growth tier. DeepHR is priced per employee in Starter, Growth and Enterprise tiers, with a tailored quote.' }
]
</script>
