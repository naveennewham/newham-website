<template>
  <SolutionLanding
    slug="procurement-software-singapore"
    app="deeptrack"
    app-name="DeepTrack"
    sub-category="Procurement and purchase order software"
    eyebrow="Procurement software · Singapore"
    seo-title="Procurement & Purchase Order Software Singapore"
    seo-description="Procurement software for Singapore contractors: purchase requests against budgets, approval limits, POs, delivery endorsement, invoice matching, 9% GST."
    h1="Procurement and purchase order software for Singapore contractors"
    lead="DeepTrack follows every purchase from request to payment: raised against an approved budget, approved to your thresholds, issued as a purchase order, endorsed on delivery and matched to the vendor invoice before anyone is paid."
    :hero-points="['Purchase requests against budget', 'Approval thresholds', 'Versioned purchase orders', 'Delivery endorsement', 'Invoice matching & payments']"
    problem-title="Purchases approved by email and paid on trust"
    :problems="problems"
    flow-title="One purchase, from request to paid"
    :flow="flow"
    feature-title="Controls at every step of purchase to pay"
    :features="features"
    checklist-title="What to look for in procurement software in Singapore"
    checklist-lead="The controls finance teams ask for when they move purchasing off email and spreadsheets."
    :checklist="checklist"
    :guide-links="guides"
    :faqs="faqs"
    cta-title="Follow one purchase through DeepTrack"
    cta-lead="Book a 30-minute demo. We will raise a purchase request, approve it, issue the PO, endorse the delivery and match the invoice."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-inbox', title: 'Approvals stuck in inboxes', text: 'Purchase requests are signed off over email, with no thresholds and no record of who approved what.' },
  { icon: 'fa-solid fa-sack-dollar', title: 'Spend before budget', text: 'Orders are placed before anyone checks them against an approved budget.' },
  { icon: 'fa-solid fa-clone', title: 'Invoices paid twice', text: 'Vendor invoices are paid without checking the PO and delivery, and duplicates slip through.' }
]
const flow = [
  { title: 'Purchase request', text: 'Raised against an approved budget.', icon: 'fa-solid fa-file-circle-plus' },
  { title: 'Approval', text: 'PM, then GM; MD above your threshold.', icon: 'fa-solid fa-stamp' },
  { title: 'Purchase order', text: 'Issued to the vendor; each issue versioned.', icon: 'fa-solid fa-file-contract' },
  { title: 'Delivery', text: 'Goods received or returned, endorsed.', icon: 'fa-solid fa-truck-ramp-box' },
  { title: 'Invoice matched', text: 'To PO, endorsement and request.', icon: 'fa-solid fa-file-invoice' },
  { title: 'Paid', text: 'Approved by PM, PD and Director.', icon: 'fa-solid fa-circle-check' }
]
const features = [
  { icon: 'fa-solid fa-file-circle-plus', title: 'Purchase requests against budget', text: 'Requests are raised against an approved budget; a request code is assigned at final approval.' },
  { icon: 'fa-solid fa-stamp', title: 'Approval thresholds', text: 'Project manager, then general manager, and the managing director above the threshold your organisation sets.' },
  { icon: 'fa-solid fa-file-contract', title: 'Versioned purchase orders', text: 'The buyer creates, issues and closes POs; each issue is saved as a version. A PO without a request needs a recorded justification.' },
  { icon: 'fa-solid fa-boxes-stacked', title: 'Delivery endorsement', text: 'Goods received or returned are endorsed against the PO; endorsements cannot exceed the ordered quantity.' },
  { icon: 'fa-solid fa-file-circle-check', title: 'Invoice matching', text: 'AP matches each vendor invoice to the PO, delivery endorsement and request. Duplicate invoice numbers are blocked; rate or quantity mismatches are flagged.' },
  { icon: 'fa-solid fa-people-arrows', title: 'Maker-checker payments', text: 'PM, then PD, then Director approve each payment, each a different person. Changing the amount or payee restarts approval.' },
  { icon: 'fa-solid fa-scale-unbalanced', title: 'Payment ceiling', text: 'A payment request cannot exceed gross less credit notes, advances and amounts already paid or reserved.' },
  { icon: 'fa-solid fa-file-circle-exclamation', title: 'Non-PO invoice controls', text: 'Above your limit, invoices without a PO are blocked or warned, as you configure.' },
  { icon: 'fa-solid fa-link', title: 'Zoho Books link', text: 'Vendors and purchase orders linked to Zoho Books, with credentials stored encrypted, and email at each approval step.' }
]
const checklist = [
  { need: 'Approval workflow with limits', how: 'Configured approvals per organisation: PM, then GM, then MD above your threshold. The requester cannot approve their own request.' },
  { need: 'Budget check before purchase', how: 'Purchase requests are raised only against an approved budget, and matched invoices post net cost to the project cost ledger.' },
  { need: 'Purchase order tracking', how: 'POs created, issued and closed by the buyer, with every issue saved as a version.' },
  { need: 'Goods received', how: 'Delivery orders endorsed by the team that received the goods, capped at the ordered quantity.' },
  { need: 'Three-way invoice matching', how: 'Invoice matched to the PO, the delivery endorsement and the request; duplicates blocked and mismatches flagged as discrepancies.' },
  { need: 'Segregation of duties', how: 'Maker-checker payment approval by three different people; rejecting needs a comment.' },
  { need: 'Singapore GST', how: 'SGD with 9% GST; payable invoices post net cost excluding GST.' },
  { need: 'Accounting integration', how: 'Zoho Books link for vendors and purchase orders, and a month-end journal CSV for your ledger.' }
]
const guides = [
  { to: '/solutions/project-cost-management-software', title: 'Project cost management software' },
  { to: '/resources/budget-vs-actual-construction', title: 'Budget against actual: how it works' },
  { to: '/solutions/construction-cost-control-software', title: 'Cost control for construction contractors' }
]
const faqs = [
  { q: 'What is procure-to-pay software?', a: 'Software that runs the whole purchasing cycle in one place: purchase request, approval, purchase order, goods received, vendor invoice and payment. DeepTrack records each step with a named role and an approval trail.' },
  { q: 'What is three-way matching?', a: 'Checking a vendor invoice against the purchase order and the goods actually received before it is paid. DeepTrack matches each invoice to the PO, the delivery endorsement and the purchase request, blocks duplicate invoice numbers and flags rate or quantity mismatches.' },
  { q: 'Can we set approval limits by amount?', a: 'Yes. Purchase requests go to the project manager, then the general manager, and to the managing director above the threshold your organisation sets. Payments follow a separate maker-checker chain.' },
  { q: 'Does it work with our accounting software?', a: 'DeepTrack links to Zoho Books for vendors and purchase orders, and produces a month-end journal CSV that can be loaded into other ledgers.' },
  { q: 'Is DeepTrack procurement only for construction?', a: 'Yes. DeepTrack is built for construction contractors in Singapore, so purchasing runs against each project’s approved budget. Approval thresholds, dropdown lists and screen access are set for each organisation.' },
  { q: 'Can we use DeepTrack on its own, and how is it priced?', a: 'Yes. DeepTrack is sold on its own, priced per user. Procurement (purchase request to PO and delivery), invoice matching and payments are in the Growth tier. Pricing is shared on request.' },
  { q: 'Can AI approve purchase requests?', a: 'No. ARIVU, the AI assistant in DeepTrack, can tell you which purchase requests are waiting for approval or which delivery orders came in this week, but it is read-only: purchase requests and POs are raised and approved by people, within your approval limits. AI invoice auto-capture, which pre-fills vendor invoices for matching, is in early access.' }
]
</script>
