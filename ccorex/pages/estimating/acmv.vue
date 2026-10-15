<template>
  <TradeLanding
    slug="acmv"
    trade="ACMV"
    seo-title="ACMV estimating software for M&E contractors"
    seo-description="Price ACMV tenders by building, floor and room: equipment, ductwork and piping item groups from one priced library, with approvals and FOT AI on the client's BOQ."
    h1="Price ACMV tenders room by room, from one library"
    lead="DeepCost structures an ACMV tender by area, prices equipment, ductwork and piping from one library with separate material and installation rates, and fills your figures on the client's BOQ."
    :item-groups="['Air-conditioning equipment', 'Ductwork & fittings', 'Refrigerant & condensate piping', 'Ventilation fans', 'Insulation & accessories']"
    problem-title="Big BOQs, many line items, little time"
    :problems="problems"
    feature-title="What ACMV estimators get"
    :features="features"
    :guide-links="[{ to: '/resources/acmv-cost-estimation', title: 'ACMV cost estimation guide' }, { to: '/resources/quantity-takeoff-methods', title: 'Quantity take-off methods compared' }]"
    :faqs="faqs"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-table-cells', title: 'Sprawling spreadsheets', text: 'Equipment, duct and pipe quantities spread across tabs that only their author understands.' },
  { icon: 'fa-solid fa-arrow-trend-down', title: 'Rates that drift', text: 'Each estimator keeps their own supplier prices, so two bids price the same item differently.' },
  { icon: 'fa-solid fa-envelope-open-text', title: 'No approval trail', text: 'Take-offs and prices go out without a checklist, sign-off or revision history.' }
]
const features = [
  { icon: 'fa-solid fa-layer-group', title: 'Area-based take-off', text: 'Quantities organised by building, floor and room, so the BOQ is easy to check and price.' },
  { icon: 'fa-solid fa-book-open', title: 'One priced library', text: 'Components and assemblies with material and installation prices, markups and dated price history.' },
  { icon: 'fa-solid fa-percent', title: 'Separate markups', text: 'Selling price applies material and installation markups separately.' },
  { icon: 'fa-solid fa-clipboard-list', title: 'Templates per trade', text: 'Item-group templates for ACMV, plus bulk Excel import of your library data.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'FOT AI on the client’s BOQ', text: 'Quantity and amount columns found on the client’s BOQ PDF, so you price on top of it.' },
  { icon: 'fa-solid fa-code-branch', title: 'Revisions with a reason', text: 'Each order revision is a chained copy with the reason recorded.' }
]
const faqs = [
  { q: 'Is ACMV supported out of the box?', a: 'Yes. ACMV is one of DeepCost’s seeded trades, priced in SGD. You extend it with your own components, assemblies and item-group templates.' },
  { q: 'Can I import our existing price list?', a: 'Yes. Library data can be bulk-imported from Excel templates, then kept current with dated price changes.' },
  { q: 'Can I take quantities off drawings?', a: 'DeepPlan AI measures rooms and counts symbols on drawings into a priced BOQ. Its AI take-off is in early access.' },
  { q: 'Can several estimators work on one tender?', a: 'Yes. One order per tender and trade, with roles and approvals, so work is shared and checked before submission.' },
  { q: 'How is DeepCost priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
