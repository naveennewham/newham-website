<template>
  <TradeLanding
    slug="fire-protection"
    trade="Fire protection"
    seo-title="Fire protection estimating software for contractors"
    seo-description="Price sprinkler, fire alarm, hose reel and riser tenders from one library: area take-off with hazard class, validation rules and FOT AI on the client's BOQ."
    h1="Price fire protection tenders from one library"
    lead="DeepCost takes a fire protection tender from documents to a priced Form of Tender: take-off by building, floor and room with hazard class, one priced library, and rules that catch the wrong sprinkler type before it is priced."
    :item-groups="['Sprinkler heads & pipework', 'Valves & alarm check stations', 'Fire alarm devices & panels', 'Hose reels & risers', 'Fire pumps & tanks']"
    problem-title="Every bid re-counted, every rate re-checked"
    :problems="problems"
    feature-title="What fire protection estimators get"
    :features="features"
    :guide-links="[{ to: '/resources/fire-protection-estimating', title: 'How to estimate a fire protection tender' }, { to: '/resources/how-to-prepare-a-boq', title: 'How to prepare a BOQ' }]"
    :faqs="faqs"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-hourglass-half', title: 'Manual counts', text: 'Heads, fittings and devices counted from drawings into spreadsheets, room by room, bid after bid.' },
  { icon: 'fa-solid fa-triangle-exclamation', title: 'Wrong item for the hazard', text: 'A component that does not suit the area’s hazard class slips through and gets priced.' },
  { icon: 'fa-solid fa-link-slash', title: 'Re-keying the client’s BOQ', text: 'Your figures are typed again into the client’s BOQ just before the deadline.' }
]
const features = [
  { icon: 'fa-solid fa-layer-group', title: 'Area schedule with hazard class', text: 'Organise the tender by building, floor and room, with the hazard class recorded per area.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Validation rules', text: 'Rules per trade and item group — for example, hazard class decides which sprinkler type is allowed.' },
  { icon: 'fa-solid fa-book-open', title: 'One priced library', text: 'Part code, brand, unit, material and installation price, markup and datasheet, with dated price history.' },
  { icon: 'fa-solid fa-calculator', title: 'MTO per area', text: 'Item groups and assemblies priced as quantity × (material + installation price).' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'FOT AI on the client’s BOQ', text: 'DeepCost finds the quantity and amount columns on the client’s BOQ PDF so you price on top of it.' },
  { icon: 'fa-solid fa-user-check', title: 'Approval at each stage', text: 'Area schedule, MTO and FOT each submitted, checked and approved, with a revision trail.' }
]
const faqs = [
  { q: 'Which fire protection systems can I price?', a: 'Any system you set up as item groups in your library. DeepCost comes with Fire Protection as a seeded trade, and you add components, assemblies and templates for sprinklers, fire alarm, hose reels, risers and pumps.' },
  { q: 'How do validation rules work?', a: 'You define rules per trade and item group. For example, the hazard class recorded for an area decides which sprinkler type is allowed, so a mismatched item is flagged before it is priced.' },
  { q: 'Can DeepCost price the client’s BOQ directly?', a: 'Yes. FOT AI detects the quantity and amount columns on the client’s BOQ PDF so your prices are filled on top of it, and your estimator reviews the result.' },
  { q: 'Does DeepCost do the fire protection design?', a: 'No. DeepCost is for estimating and pricing. For design and hydraulic calculations, Newham offers fire protection design services at newhamtech.com.' },
  { q: 'How is DeepCost priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
