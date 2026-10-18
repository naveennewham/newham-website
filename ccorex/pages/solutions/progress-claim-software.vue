<template>
  <SolutionLanding
    slug="progress-claim-software"
    app="deeptrack"
    app-name="DeepTrack"
    eyebrow="Progress claims · Singapore"
    seo-title="Progress claim software for Singapore contractors"
    seo-description="Progress claim software for Singapore contractors: claims numbered per project with retention and 9% GST, a PDF claim certificate, claims beside cost; SOP Act tracking in early access."
    h1="Progress claim software for Singapore contractors"
    lead="DeepTrack prepares each progress claim against the customer PO, with retention and 9% GST worked out, produces the claim certificate as a PDF, and keeps claims on the same project as budgets and costs."
    :hero-points="['Claims numbered per project', 'Retention & 9% GST calculated', 'PDF claim certificate', 'Claims beside budget and cost']"
    problem-title="Claims built in spreadsheets"
    :problems="problems"
    flow-title="From work done to payment received"
    :flow="flow"
    feature-title="What your commercial team gets"
    :features="features"
    :guide-links="guides"
    :faqs="faqs"
    :early-access="['sop-act-claims', 'retention-release', 'variation-orders']"
    cta-title="See a progress claim in DeepTrack"
    cta-lead="Bring a recent claim to a 30-minute demo. We will set up the contract terms and produce the claim, certificate and retention position on your own numbers."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-table', title: 'A new spreadsheet every month', text: 'Previous claims, variations and retention are re-typed into each claim, and one wrong cell carries forward.' },
  { icon: 'fa-solid fa-piggy-bank', title: 'Retention worked out by hand', text: 'Retention to date and previous retention are recalculated in each spreadsheet.' },
  { icon: 'fa-solid fa-chart-line', title: 'Claims apart from cost', text: 'What has been claimed is not seen next to what the job has cost.' }
]
const flow = [
  { title: 'Contract set up', text: 'Contract value and customer PO with retention % and GST.', icon: 'fa-solid fa-file-contract' },
  { title: 'Claim prepared', text: 'Work done and variations to date.', icon: 'fa-solid fa-list-check' },
  { title: 'Retention & GST', text: 'Retention to date and 9% GST worked out.', icon: 'fa-solid fa-file-invoice-dollar' },
  { title: 'Certificate', text: 'PDF Progress Claim Certificate, ready to send.', icon: 'fa-solid fa-file-pdf' },
  { title: 'Status', text: 'Submitted, then completed or rejected.', icon: 'fa-solid fa-circle-check' }
]
const features = [
  { icon: 'fa-solid fa-arrow-down-1-9', title: 'Claims in sequence', text: 'Progress claims numbered per project, each built on the previous claim, so the cumulative position is always right.' },
  { icon: 'fa-solid fa-percent', title: 'Retention and GST worked out', text: 'Retention and 9% GST calculated on every claim from the contract terms.' },
  { icon: 'fa-solid fa-file-pdf', title: 'Claim certificate', text: 'Each claim produces a PDF Progress Claim Certificate showing work done, retention and the amount due.' },
  { icon: 'fa-solid fa-lock', title: 'Claim data encrypted', text: 'Claim amounts are stored encrypted in the database.' },
  { icon: 'fa-solid fa-chart-line', title: 'Claims beside the budget', text: 'Claims sit on the same project as budgets, purchasing and costs, so margin is visible while the job runs.' }
]
const guides = [
  { to: '/resources/progress-claims-singapore', title: 'Progress claims in Singapore' },
  { to: '/resources/sop-act-payment-claims-singapore', title: 'SOP Act payment claims and payment responses' },
  { to: '/resources/progress-claim-template-singapore', title: 'Progress claim template (Singapore)' },
  { to: '/resources/retention-sum-singapore', title: 'Retention sums in Singapore construction' }
]
const faqs = [
  { q: 'How are retention and GST handled?', a: 'Retention is calculated from the percentage on the claim and 9% GST is applied. The certificate shows retention to date and the previous retention.' },
  { q: 'Can we send the claim in our own format?', a: 'Each claim produces a PDF Progress Claim Certificate. If the main contractor requires its own format, you can use DeepTrack’s figures to fill it.' },
  { q: 'Do claims connect to project costs?', a: 'Yes. Claims sit on the same project as budgets, purchase requests, invoices and timesheets, so you see claimed value against cost.' },
  { q: 'How is DeepTrack priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
