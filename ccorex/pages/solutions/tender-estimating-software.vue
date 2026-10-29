<template>
  <SolutionLanding
    slug="tender-estimating-software"
    app="deepcost"
    app-name="DeepCost"
    eyebrow="Tender estimating · Singapore"
    seo-title="Tender estimating software for contractors in Singapore"
    seo-description="Tender estimating and costing software for Singapore M&E contractors: AI tender summary, take-off by area, one price library, approvals and FOT AI on the client's BOQ."
    h1="Tender estimating software for Singapore contractors"
    lead="DeepCost takes a tender from documents received to a priced Form of Tender: an AI summary of the tender documents, take-off by building, floor and room, one priced library, an approval at every stage, and your prices overlaid on the client’s BOQ."
    :hero-points="['AI tender summary', 'Take-off by area', 'One price library', 'FOT AI on the client’s BOQ']"
    problem-title="Tender season outruns the estimating team"
    :problems="problems"
    flow-title="From tender received to tender submitted"
    :flow="flow"
    feature-title="What estimators and managers get"
    :features="features"
    checklist-title="What to look for in tender estimating software"
    checklist-lead="Tender costing in Singapore runs to tight closing dates, the client’s BOQ format and SGD pricing. Here is how DeepCost handles each part."
    :checklist="checklist"
    :guide-links="guides"
    :faqs="faqs"
    sub-category="Tender estimating"
    cta-title="See a tender priced in DeepCost"
    cta-lead="Bring a recent tender to a 30-minute demo. We will walk through the tender summary, take-off, pricing and Form of Tender on your own trade."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-file-lines', title: 'Tender documents read by hand', text: 'Specifications, drawings and conditions read page by page before a single quantity is counted.' },
  { icon: 'fa-solid fa-arrow-trend-down', title: 'Rates that differ by estimator', text: 'Each estimator keeps their own spreadsheet of prices, so two bids for similar work come out differently.' },
  { icon: 'fa-solid fa-link-slash', title: 'Re-keying into the client’s BOQ', text: 'Your priced figures are typed again into the client’s BOQ, line by line, just before the closing date.' }
]
const flow = [
  { title: 'Tender received', text: 'Customer, tender type, trades, estimator and submission date.', icon: 'fa-solid fa-inbox' },
  { title: 'AI tender summary', text: 'Key fields read from the tender documents, then reviewed.', icon: 'fa-solid fa-file-lines' },
  { title: 'Take-off by area', text: 'Building, floor and room, with hazard class where it matters.', icon: 'fa-solid fa-layer-group' },
  { title: 'Priced from the library', text: 'Material and installation prices, with markups.', icon: 'fa-solid fa-calculator' },
  { title: 'Form of Tender', text: 'Line by line, or overlaid on the client’s BOQ PDF.', icon: 'fa-solid fa-table-list' }
]
const features = [
  { icon: 'fa-solid fa-file-lines', title: 'AI tender summary', text: 'DeepCost reads the uploaded tender documents and fills a set of fields you can edit and export to Excel or PDF.' },
  { icon: 'fa-solid fa-layer-group', title: 'Take-off by area', text: 'Organise every tender by building, floor and room, with item groups and assemblies per trade.' },
  { icon: 'fa-solid fa-book-open', title: 'One priced library', text: 'Part code, brand, unit, material and installation price, markup and datasheet, with dated price history.' },
  { icon: 'fa-solid fa-table-list', title: 'FOT AI on the client’s BOQ', text: 'Upload the client’s BOQ PDF. DeepCost finds the quantity and amount columns and overlays editable prices on the rows to price.' },
  { icon: 'fa-solid fa-user-check', title: 'Approval at each stage', text: 'Area schedule, material take-off and Form of Tender each submitted, checked and approved, with a revision trail.' },
  { icon: 'fa-solid fa-file-export', title: 'Tender reports', text: 'Area, component and Form of Tender reports to Excel or PDF for the submission and the internal review.' }
]
const checklist = [
  { need: 'Reading the tender quickly', how: 'An AI summary of the tender documents fills predefined fields, which your estimator reviews and edits.' },
  { need: 'Consistent rates on every bid', how: 'One price library with material and installation prices, separate markups and dated price history.' },
  { need: 'Pricing in the client’s BOQ format', how: 'FOT AI overlays your prices on the client’s BOQ PDF and shows page totals, so nothing is re-keyed.' },
  { need: 'Checks before the bid goes out', how: 'Validation rules per trade and item group, and an approval at each stage before the Form of Tender is released.' },
  { need: 'SGD pricing for M&E trades', how: 'Price libraries for every trade: Fire Protection, ACMV, A&A and ELV come seeded, priced in SGD; electrical, plumbing & sanitary and other trades are set up during onboarding or imported from Excel.' },
  { need: 'A record of every tender', how: 'Opportunities with customer, tender type, sector, trades, estimator and submission date, and the documents in one place.' }
]
const guides = [
  { to: '/solutions/ai-tender-review', title: 'AI tender review' },
  { to: '/solutions/boq-software', title: 'BOQ software' },
  { to: '/resources/how-to-prepare-a-boq', title: 'How to prepare a BOQ' },
  { to: '/resources/mep-estimating-checklist', title: 'MEP estimating checklist' },
  { to: '/resources/choosing-mep-estimating-software', title: 'Choosing MEP estimating software' },
  { to: '/products/deepcost', title: 'DeepCost: MEP estimating software' }
]
const faqs = [
  { q: 'What is tender estimating software?', a: 'It is software that takes a contractor from the tender documents to a priced bid: reading the tender, measuring quantities, pricing them from a rate library and producing the priced schedule you submit. DeepCost does this for M&E trades, ending in a priced Form of Tender.' },
  { q: 'Which trades does DeepCost cover?', a: 'Every trade. DeepCost has price libraries for every trade: Fire Protection, ACMV, A&A and ELV come seeded, priced in SGD, and electrical, plumbing & sanitary and other trade libraries are set up for your company during onboarding, or imported from your own Excel price list. See the trade pages for fire protection, ACMV, ELV, electrical and plumbing & sanitary.' },
  { q: 'Can it price the client’s own BOQ?', a: 'Yes. FOT AI finds the quantity and amount columns on the client’s BOQ PDF, overlays editable figures on the rows to price and saves a revision of the annotated PDF. Your estimator reviews every figure.' },
  { q: 'Does it work for government tenders?', a: 'DeepCost prices the tender you receive, whether it comes from a main contractor, a developer or a public-sector client. You still submit the bid through the client’s own channel, such as GeBIZ for government tenders.' },
  { q: 'How is DeepCost priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
