<template>
  <SolutionLanding
    slug="boq-software"
    app="deepcost"
    app-name="DeepCost"
    eyebrow="BOQ software · Singapore"
    seo-title="BOQ Software for Contractors in Singapore: Price the Client’s BOQ"
    seo-description="BOQ software for Singapore contractors: measure quantities by area, price them from one library, and fill the client’s BOQ PDF with FOT AI instead of re-keying it."
    h1="BOQ software for Singapore contractors"
    lead="DeepCost builds your bill of quantities from a take-off by building, floor and room, prices every line from one library, and overlays your rates on the client’s own BOQ PDF, so the BOQ you submit matches the estimate behind it."
    :hero-points="['Quantities by area', 'Rates from one library', 'Client’s BOQ priced with FOT AI', 'Approval before release']"
    problem-title="The BOQ is where tender errors get in"
    :problems="problems"
    flow-title="From drawings to a priced BOQ"
    :flow="flow"
    feature-title="What estimators get"
    :features="features"
    checklist-title="What to look for in BOQ software"
    checklist-lead="A BOQ has to be measured, priced and submitted in the client’s format, often under a tight closing date. Here is how DeepCost handles each step."
    :checklist="checklist"
    :guide-links="guides"
    :faqs="faqs"
    sub-category="BOQ software"
    cta-title="Price a BOQ in DeepCost"
    cta-lead="Bring a client BOQ from a recent tender to a 30-minute demo. We will measure, price and fill it in DeepCost on your own trade."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-link-slash', title: 'Rates typed twice', text: 'The estimate is priced in one spreadsheet, then every rate is typed again into the client’s BOQ before the closing date.' },
  { icon: 'fa-solid fa-arrow-trend-down', title: 'Different rates per estimator', text: 'Each estimator keeps their own price file, so similar BOQ lines are priced differently from bid to bid.' },
  { icon: 'fa-solid fa-ruler', title: 'Quantities without a trail', text: 'Totals are carried into the BOQ with no record of which floor or room they came from.' }
]
const flow = [
  { title: 'Area schedule', text: 'Building, floor and room for the tender.', icon: 'fa-solid fa-layer-group' },
  { title: 'Take-off', text: 'Item groups and assemblies per area.', icon: 'fa-solid fa-ruler-combined' },
  { title: 'Priced', text: 'Material and installation rates from the library.', icon: 'fa-solid fa-calculator' },
  { title: 'Approved', text: 'Checked before release.', icon: 'fa-solid fa-user-check' },
  { title: 'BOQ out', text: 'Your format, or the client’s BOQ PDF.', icon: 'fa-solid fa-table-list' }
]
const features = [
  { icon: 'fa-solid fa-layer-group', title: 'Quantities by area', text: 'Every quantity is measured against a building, floor and room, so each BOQ total can be traced back.' },
  { icon: 'fa-solid fa-book-open', title: 'One priced library', text: 'Part code, brand, unit, material and installation price, markup and datasheet, with dated price history.' },
  { icon: 'fa-solid fa-table-list', title: 'FOT AI on the client’s BOQ', text: 'Upload the client’s BOQ PDF. DeepCost finds the quantity and amount columns, overlays editable rates on the rows to price and shows page totals.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Validation rules', text: 'Rules per trade and item group catch the wrong item before it is priced.' },
  { icon: 'fa-solid fa-user-check', title: 'Approval at each stage', text: 'Area schedule, take-off and Form of Tender are each submitted, checked and approved, with a revision trail.' },
  { icon: 'fa-solid fa-file-export', title: 'Excel and PDF', text: 'Area, component and Form of Tender reports for the submission and the internal review.' }
]
const checklist = [
  { need: 'Pricing in the client’s format', how: 'FOT AI fills your rates onto the client’s BOQ PDF and saves a revision of the annotated PDF. Your estimator reviews every figure.' },
  { need: 'One set of rates', how: 'A single library with separate material and installation prices and markups, used by every estimator.' },
  { need: 'Traceable quantities', how: 'Take-off by building, floor and room, with item groups and assemblies per trade.' },
  { need: 'Every trade', how: 'Fire Protection, ACMV, A&A and ELV libraries come seeded in SGD; other trades are set up during onboarding or imported from Excel.' },
  { need: 'Checks before submission', how: 'Validation rules and an approval at each stage before the BOQ is released.' }
]
const guides = [
  { to: '/resources/what-is-a-boq', title: 'BOQ meaning: what is a bill of quantities?' },
  { to: '/resources/how-to-prepare-a-boq', title: 'How to prepare a BOQ' },
  { to: '/resources/elv-boq', title: 'ELV BOQ guide' },
  { to: '/solutions/tender-estimating-software', title: 'Tender estimating software' }
]
const faqs = [
  { q: 'What is BOQ software?', a: 'BOQ software helps a contractor measure the quantities in a tender, price each line from a rate library and produce the priced bill of quantities for submission. DeepCost also prices directly on the client’s BOQ PDF.' },
  { q: 'Can DeepCost fill in the client’s own BOQ?', a: 'Yes. FOT AI finds the quantity and amount columns on the client’s BOQ PDF and overlays editable rates on the rows to price, with page totals. Your estimator reviews and approves the result.' },
  { q: 'Does it replace our Excel BOQ?', a: 'It replaces the re-keying. You can import your existing Excel price list into the library, and export area, component and Form of Tender reports to Excel or PDF.' },
  { q: 'Which trades can we price?', a: 'Any trade. Fire Protection, ACMV, A&A and ELV come with seeded price libraries; other trades are set up during onboarding or imported from Excel.' },
  { q: 'How is DeepCost priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
