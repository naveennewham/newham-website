<template>
  <TradeLanding
    slug="elv"
    trade="ELV"
    seo-title="ELV estimating & BOQ software for contractors"
    seo-description="Price ELV tenders — CCTV, access control, data and other extra-low-voltage systems — from one library, with area take-off, approvals and FOT AI on the client's BOQ."
    h1="Price ELV tenders without re-keying the BOQ"
    lead="DeepCost prices CCTV, access control, data and other ELV systems from one library, organised by area, and fills your figures on the client's BOQ PDF."
    :item-groups="['CCTV cameras & recorders', 'Access control & door hardware', 'Structured cabling & data', 'Containment & cabling', 'Head-end equipment']"
    problem-title="Many small items, many systems, one deadline"
    :problems="problems"
    feature-title="What ELV estimators get"
    :features="features"
    :guide-links="[{ to: '/resources/elv-boq', title: 'How to prepare an ELV BOQ' }, { to: '/resources/how-to-prepare-a-boq', title: 'How to prepare a BOQ' }]"
    :faqs="faqs"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-list-ol', title: 'Long device lists', text: 'Devices, cabling and accessories counted by hand across several systems in one tender.' },
  { icon: 'fa-solid fa-tags', title: 'Prices scattered across suppliers', text: 'Quotes live in emails and spreadsheets, so nobody is sure which price is current.' },
  { icon: 'fa-solid fa-link-slash', title: 'Re-keying the client’s BOQ', text: 'Figures are typed into the client’s format line by line before submission.' }
]
const features = [
  { icon: 'fa-solid fa-layer-group', title: 'Area-based take-off', text: 'Devices and cabling organised by building, floor and room.' },
  { icon: 'fa-solid fa-book-open', title: 'One priced library', text: 'Part code, brand, unit, material and installation price, markup and datasheet for every component.' },
  { icon: 'fa-solid fa-cubes', title: 'Assemblies', text: 'Assemblies sum their child components, so a typical device point is priced in one line.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Validation rules', text: 'Rules per trade and item group catch components that break your standards.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'FOT AI on the client’s BOQ', text: 'Prices filled on top of the client’s BOQ PDF, then reviewed by your estimator.' },
  { icon: 'fa-solid fa-file-export', title: 'Submission-ready exports', text: 'Area, component and FOT reports to Excel or PDF.' }
]
const faqs = [
  { q: 'Is ELV supported out of the box?', a: 'Yes. ELV is one of DeepCost’s seeded trades, priced in SGD. You add the components and assemblies your business uses.' },
  { q: 'Can I price several ELV systems in one tender?', a: 'Yes. Use item groups for each system — for example CCTV, access control and data — within one order for the trade.' },
  { q: 'Can I count devices from drawings?', a: 'DeepPlan AI counts symbols and measures rooms on drawings into a priced BOQ. Its AI symbol detection is in early access.' },
  { q: 'Does DeepCost connect to accounting?', a: 'Won tenders run as projects in DeepTrack, which links to Zoho Books for vendors and purchase orders.' },
  { q: 'How is DeepCost priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
