<template>
  <SolutionLanding
    slug="construction-cost-control-software"
    app="deeptrack"
    app-name="DeepTrack"
    eyebrow="Construction cost control · Singapore"
    seo-title="Construction cost control software for Singapore contractors"
    seo-description="Construction cost control and job costing software for Singapore contractors: approved budgets, budget against actual, PR to PO with approvals and invoice matching."
    h1="Construction cost control software for Singapore contractors"
    lead="DeepTrack keeps every project's margin in view: approved budgets, purchase requests checked against them, invoices matched before payment, and labour and overhead allocated at month end. Use it on its own, in SGD with 9% GST."
    :hero-points="['Approved budgets per project', 'Budget against actual', 'PR → PO → delivery → invoice', 'Invoice matching', 'Month-end cost allocation']"
    problem-title="Margin shows up at project close, when it is too late to act"
    :problems="problems"
    flow-title="From approved budget to true project margin"
    :flow="flow"
    feature-title="What project and finance teams get"
    :features="features"
    :guide-links="guides"
    :faqs="faqs"
    cta-title="See your project margin in DeepTrack"
    cta-lead="Bring one live project to a 30-minute demo. We will set up its budget and show purchasing, invoice matching and budget against actual on your numbers."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-eye-slash', title: 'Margin you can’t see', text: 'Contract value against actual spend lives in spreadsheets, so real project margin surfaces too late.' },
  { icon: 'fa-solid fa-inbox', title: 'Approvals stuck in inboxes', text: 'Purchase requests and payments are signed off over email, with no thresholds and no trail.' },
  { icon: 'fa-solid fa-file-invoice', title: 'Invoices paid on trust', text: 'Vendor invoices are paid without checking them against the PO and what was actually delivered.' }
]
const flow = [
  { title: 'Budget approved', text: 'From a template, approved by GM (and MD above threshold).', icon: 'fa-solid fa-sack-dollar' },
  { title: 'Purchase request', text: 'Raised against the approved budget.', icon: 'fa-solid fa-cart-shopping' },
  { title: 'PO & delivery', text: 'PO issued, delivery endorsed.', icon: 'fa-solid fa-truck' },
  { title: 'Invoice matched', text: 'Against PO, delivery and request.', icon: 'fa-solid fa-file-circle-check' },
  { title: 'Month end', text: 'Labour and overhead allocated.', icon: 'fa-solid fa-calendar-check' },
  { title: 'True margin', text: 'Budget against actual per project.', icon: 'fa-solid fa-chart-line' }
]
const features = [
  { icon: 'fa-solid fa-sitemap', title: 'Cost codes that fit construction', text: 'Budget against actual by workhead, WBS activity and cost centre, coded to BCA workheads.' },
  { icon: 'fa-solid fa-user-shield', title: 'Approvals with thresholds', text: 'Purchase requests route project manager → general manager → managing director above your threshold.' },
  { icon: 'fa-solid fa-file-circle-check', title: 'Invoice matching', text: 'Duplicate invoice numbers are blocked; rate or quantity mismatches are flagged as discrepancies.' },
  { icon: 'fa-solid fa-user-clock', title: 'Labour and overhead', text: 'Timesheets coded to project and WBS; month-end allocates labour, HQ and project overhead, then locks the period.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'Claims on the same project', text: 'Progress claims with retention and 9% GST sit beside costs, so claimed value is always visible against spend.' },
  { icon: 'fa-solid fa-link', title: 'Accounting link', text: 'Zoho Books for vendors and purchase orders, and a month-end journal CSV for your ledger.' }
]
const guides = [
  { to: '/resources/budget-vs-actual-construction', title: 'Budget against actual in construction' },
  { to: '/resources/progress-claims-singapore', title: 'Progress claims in Singapore' },
  { to: '/resources/retention-sum-singapore', title: 'Retention sums in Singapore construction' },
  { to: '/resources/construction-cost-report-template', title: 'Construction cost report template (Excel)' },
  { to: '/resources/subcontractor-progress-claims-singapore', title: 'Assessing subcontractor progress claims' }
]
const faqs = [
  { q: 'Can we use DeepTrack without the other CCorex apps?', a: 'Yes. DeepTrack is sold on its own in Starter, Growth and Enterprise tiers, priced per user. DeepCost or DeepHR can be added later on the same sign-in.' },
  { q: 'Is DeepTrack job costing software?', a: 'Yes. Every cost — purchases, invoices, labour from timesheets and allocated overhead — lands on a project and its workhead, WBS activity and cost centre, so you see job cost and margin per project.' },
  { q: 'Is it set up for Singapore?', a: 'DeepTrack works in SGD with 9% GST, codes cost to BCA workheads, and produces progress claims with retention and a PDF certificate.' },
  { q: 'Does it replace our accounting system?', a: 'No. It sits beside it: Zoho Books links for vendors and purchase orders, and month-end produces a journal CSV for your ledger.' },
  { q: 'How is DeepTrack priced?', a: 'Per user, in Starter, Growth and Enterprise tiers. Contact us for a tailored quote.' }
]
</script>
