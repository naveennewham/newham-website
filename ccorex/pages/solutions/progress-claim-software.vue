<template>
  <SolutionLanding
    slug="progress-claim-software"
    app="deeptrack"
    app-name="DeepTrack"
    eyebrow="Progress claims · Singapore"
    seo-title="Progress claim software for Singapore contractors"
    seo-description="Progress claim software for Singapore contractors: claims with retention and 9% GST, SOP Act payment claims, payment-response tracking and retention release."
    h1="Progress claim software for Singapore contractors"
    lead="DeepTrack prepares each progress claim from the contract, with retention and 9% GST worked out, tracks the payment response under the SOP Act and keeps retention in view until it is released."
    :hero-points="['Claims numbered per project', 'Retention & 9% GST calculated', 'SOP Act payment claims', 'Payment-response due dates', 'Retention release tracker']"
    problem-title="Claims built in spreadsheets, deadlines kept in memory"
    :problems="problems"
    flow-title="From work done to payment received"
    :flow="flow"
    feature-title="What your commercial team gets"
    :features="features"
    :guide-links="guides"
    :faqs="faqs"
    cta-title="See a progress claim in DeepTrack"
    cta-lead="Bring a recent claim to a 30-minute demo. We will set up the contract terms and produce the claim, certificate and retention position on your own numbers."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-table', title: 'A new spreadsheet every month', text: 'Previous claims, variations and retention are re-typed into each claim, and one wrong cell carries forward.' },
  { icon: 'fa-solid fa-hourglass-half', title: 'SOP deadlines tracked by memory', text: 'Nobody is sure when the payment response is due, or what to do if it does not arrive.' },
  { icon: 'fa-solid fa-piggy-bank', title: 'Retention forgotten', text: 'Retention held across finished projects is not chased at completion or after the defects liability period.' }
]
const flow = [
  { title: 'Contract set up', text: 'Contract sum, retention %, payment terms, DLP.', icon: 'fa-solid fa-file-contract' },
  { title: 'Work done valued', text: 'Cumulative value of work and variations.', icon: 'fa-solid fa-list-check' },
  { title: 'Payment claim', text: 'Retention and 9% GST, stated as made under the SOP Act.', icon: 'fa-solid fa-file-invoice-dollar' },
  { title: 'Certificate', text: 'PDF Progress Claim Certificate, ready to send.', icon: 'fa-solid fa-file-pdf' },
  { title: 'Payment response', text: 'Due date tracked; response recorded.', icon: 'fa-solid fa-clock' },
  { title: 'Paid & released', text: 'Payment and retention release recorded.', icon: 'fa-solid fa-circle-check' }
]
const features = [
  { icon: 'fa-solid fa-arrow-down-1-9', title: 'Claims in sequence', text: 'Progress claims numbered per project, each built on the previous claim, so the cumulative position is always right.' },
  { icon: 'fa-solid fa-percent', title: 'Retention and GST worked out', text: 'Retention and 9% GST calculated on every claim from the contract terms.' },
  { icon: 'fa-solid fa-scale-balanced', title: 'SOP Act payment claims', text: 'Claims can state that they are made under the Building and Construction Industry Security of Payment Act.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Payment-response tracker', text: 'The due date for each payment response is tracked, and the response amount is recorded against the claim.' },
  { icon: 'fa-solid fa-piggy-bank', title: 'Retention tracker', text: 'Retention held per project, with release dates at completion and after the defects liability period.' },
  { icon: 'fa-solid fa-chart-line', title: 'Claims beside the budget', text: 'Claims sit on the same project as budgets, purchasing and costs, so margin is visible while the job runs.' }
]
const guides = [
  { to: '/resources/progress-claims-singapore', title: 'Progress claims in Singapore' },
  { to: '/resources/sop-act-payment-claims-singapore', title: 'SOP Act payment claims and payment responses' },
  { to: '/resources/progress-claim-template-singapore', title: 'Progress claim template (Singapore)' },
  { to: '/resources/retention-sum-singapore', title: 'Retention sums in Singapore construction' }
]
const faqs = [
  { q: 'Does DeepTrack follow the SOP Act?', a: 'DeepTrack lets a progress claim state that it is made under the Building and Construction Industry Security of Payment Act, and tracks the due date for the payment response. It is a record-keeping tool, not legal advice: check your contract and the Act, and take legal advice on disputes.' },
  { q: 'How are retention and GST handled?', a: 'Retention is calculated from the percentage in the contract and 9% GST is applied on each claim. The retention tracker shows what is held per project and when it falls due for release.' },
  { q: 'Can we send the claim in our own format?', a: 'Each claim produces a PDF Progress Claim Certificate. If the main contractor requires its own format, you can use DeepTrack’s figures to fill it.' },
  { q: 'Do claims connect to project costs?', a: 'Yes. Claims sit on the same project as budgets, purchase requests, invoices and timesheets, so you see claimed value against cost.' },
  { q: 'How is DeepTrack priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
