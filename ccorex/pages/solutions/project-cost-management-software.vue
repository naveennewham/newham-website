<template>
  <SolutionLanding
    slug="project-cost-management-software"
    app="deeptrack"
    app-name="DeepTrack"
    sub-category="Project cost management software"
    eyebrow="Project cost management · Singapore"
    seo-title="Project Cost Management Software Singapore"
    seo-description="Project cost management software for Singapore: approved budgets, budget against actual, purchases to POs, invoice matching, timesheet labour, 9% GST."
    h1="Project cost management software for Singapore businesses"
    lead="DeepTrack keeps every project’s budget, commitments and actual cost in one place: approved budgets, purchases checked against them, vendor invoices matched before payment, and labour and overhead allocated at month end. Built for contractors and other project-based businesses in Singapore, in SGD with 9% GST."
    :hero-points="['Approved budgets per project', 'Budget against actual', 'Purchases within budget', 'Invoice matching', 'Labour and overhead per project']"
    problem-title="Project margin is only known when the project closes"
    :problems="problems"
    flow-title="From approved budget to true project margin"
    :flow="flow"
    feature-title="What project managers and finance get"
    :features="features"
    checklist-title="What to look for in project cost management software"
    checklist-lead="Task boards plan the work; cost management software controls the money. These are the points that decide whether you see margin while you can still act."
    :checklist="checklist"
    :guide-links="guides"
    :faqs="faqs"
    cta-title="See one of your projects in DeepTrack"
    cta-lead="Bring one live project to a 30-minute demo. We will set up its budget and show purchasing, invoice matching and budget against actual on your own numbers."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-eye-slash', title: 'Margin you can’t see', text: 'Budget and actual spend sit in different spreadsheets, so overruns surface after the money is spent.' },
  { icon: 'fa-solid fa-user-clock', title: 'Labour cost missing', text: 'Staff time never lands back on the project, so its true cost is understated.' },
  { icon: 'fa-solid fa-file-invoice', title: 'Invoices paid on trust', text: 'Vendor invoices are paid without checking them against the purchase order and what was delivered.' }
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
  { icon: 'fa-solid fa-sack-dollar', title: 'Approved budgets', text: 'Budgets built from template categories against a project or client PO, with a version history for every budget.' },
  { icon: 'fa-solid fa-scale-balanced', title: 'Budget against actual', text: 'Utilisation and over-budget alerts on each budget; matched invoices post net cost to the project cost ledger.' },
  { icon: 'fa-solid fa-sitemap', title: 'Cost codes', text: 'Cost tracked by workhead, WBS activity, cost centre and business unit, with dropdown lists set for your organisation.' },
  { icon: 'fa-solid fa-cart-shopping', title: 'Purchases within budget', text: 'Purchase requests are raised against an approved budget and routed through your approval thresholds.' },
  { icon: 'fa-solid fa-user-clock', title: 'Labour from timesheets', text: 'Individual or bulk timesheets coded to project and WBS activity; each hour productive, idle, training or tender. PMs approve.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month-end allocation', text: 'Direct labour at actual hourly rates, worker pool, HQ, business-unit and project overhead, then the period is locked.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'Client billing beside cost', text: 'Client claims with retention and 9% GST sit on the same project, so billed value is always visible against spend.' },
  { icon: 'fa-solid fa-chart-column', title: 'Project reports', text: 'Project, budget, procurement, claims and finance reports, a custom report builder and scheduled reports.' },
  { icon: 'fa-solid fa-link', title: 'Accounting link', text: 'Zoho Books for vendors and purchase orders, a month-end journal CSV for your ledger, and general-ledger costs imported from CSV.' }
]
const checklist = [
  { need: 'Budget against actual while the project runs', how: 'Approved budgets with utilisation and over-budget alerts; matched invoices and month-end allocations land against them.' },
  { need: 'Commitments checked before spending', how: 'Every purchase request is raised against an approved budget and approved by PM, then GM, then MD above your threshold.' },
  { need: 'Labour cost per project', how: 'Timesheets coded to project and WBS activity, costed at each person’s actual hourly rate at month end.' },
  { need: 'Overhead in project cost', how: 'HQ overhead by fixed percentages, business-unit overhead by approved project value, and project overhead spread to workheads.' },
  { need: 'Audit trail and controls', how: 'Maker-checker payment approvals, a finance audit log, and audited period unlocks.' },
  { need: 'Confidential rates', how: 'Individual cost rates are visible only to the Finance Controller, MD and Admin; project managers see labour totals.' },
  { need: 'Singapore tax and currency', how: 'SGD with 9% GST on claims and invoices.' },
  { need: 'Fit with your accounting', how: 'Zoho Books link per organisation and a month-end journal CSV for any ledger.' }
]
const guides = [
  { to: '/resources/budget-vs-actual-construction', title: 'Budget against actual: how it works' },
  { to: '/solutions/procurement-software-singapore', title: 'Procurement and purchase order software' },
  { to: '/solutions/construction-cost-control-software', title: 'Cost control for construction contractors' }
]
const faqs = [
  { q: 'What is project cost management software?', a: 'Software that keeps each project’s budget, committed spend and actual cost in one place, so you can compare budget against actual and see margin while the project is still running. DeepTrack does this with approved budgets, purchasing against them, invoice matching, timesheet labour and month-end overhead allocation.' },
  { q: 'Is DeepTrack project management software?', a: 'DeepTrack covers the commercial side of running projects: projects and client POs, budgets, purchasing, timesheets, client claims and cost reports. It is not a task board. If you also need task scheduling, DeepHR has an optional Tasks module with phases, templates and dependency-driven dates.' },
  { q: 'Is DeepTrack only for construction companies?', a: 'DeepTrack was built for contractors, and it suits other businesses that deliver work as projects against a budget. Budget templates, dropdown lists, approval thresholds and screen access are set for each organisation.' },
  { q: 'Is DeepTrack job costing software?', a: 'Yes. Purchases, matched invoices, labour from timesheets and allocated overhead all land on a project and its cost codes, so you see job cost and margin per project.' },
  { q: 'Does it replace our accounting software?', a: 'No. It sits beside it. Each organisation can link Zoho Books for vendors and purchase orders, and month-end produces a journal CSV for your ledger.' },
  { q: 'Can we use DeepTrack on its own, and how is it priced?', a: 'Yes. DeepTrack is sold on its own in Starter, Growth and Enterprise tiers, priced per user. Pricing is shared on request, with a tailored quote.' },
  { q: 'Does DeepTrack use AI for project cost control?', a: 'Yes. ARIVU, the AI assistant in DeepTrack, answers questions such as “How is committed cost tracking against the approved budget?” from your own project data, and can chart the answer or export it to Excel or PDF. It is read-only and never changes budgets or approves spend. An AI budget overrun forecast is in early access.' }
]
</script>
