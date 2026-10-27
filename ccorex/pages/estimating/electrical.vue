<template>
  <TradeLanding
    slug="electrical"
    trade="Electrical"
    seo-title="Electrical estimating software & BOQ for contractors"
    seo-description="Electrical estimating software for Singapore contractors: price power distribution, lighting, small power, cabling, containment and earthing by area, from one price library."
    h1="Price electrical tenders from one price library"
    lead="DeepCost prices power distribution, lighting, small power, cabling, containment and earthing from an electrical price library set up for your company during onboarding, or imported from your own Excel price list, then takes off by building, floor and room."
    :item-groups="['Switchboards & distribution boards', 'Lighting & emergency lighting', 'Small power & outlets', 'Cables & wiring', 'Containment: trunking, tray, conduit', 'Earthing & lightning protection']"
    problem-title="Thousands of metres of cable, priced by hand"
    :problems="problems"
    feature-title="What electrical estimators get"
    :features="features"
    systems-title="What to measure and price in an electrical tender"
    systems-lead="Set each system up as item groups in your DeepCost library, then take it off by building, floor and room. These are the quantities electrical estimators usually measure, and the items most often missed."
    :systems="systems"
    :guide-links="[{ to: '/resources/how-to-prepare-a-boq', title: 'How to prepare a BOQ' }, { to: '/resources/mep-estimating-checklist', title: 'MEP estimating checklist' }, { to: '/solutions/quantity-takeoff-software', title: 'Quantity take-off from PDF drawings' }]"
    :faqs="faqs"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-ruler', title: 'Cable runs measured by hand', text: 'Cable and containment lengths are scaled off drawings floor by floor, then added up in a spreadsheet.' },
  { icon: 'fa-solid fa-tags', title: 'Rates that drift', text: 'Cable and fitting prices move with supplier quotes, but old rates stay in last year’s spreadsheet.' },
  { icon: 'fa-solid fa-link-slash', title: 'Re-keying the client’s BOQ', text: 'Your priced figures are typed into the client’s BOQ line by line before the closing date.' }
]
const features = [
  { icon: 'fa-solid fa-layer-group', title: 'Take-off by area', text: 'Boards, fittings, points and cable runs organised by building, floor and room.' },
  { icon: 'fa-solid fa-book-open', title: 'An electrical price library', text: 'Part code, brand, unit, material and installation price, markup and datasheet, with dated price history; set up during onboarding or imported from Excel.' },
  { icon: 'fa-solid fa-cubes', title: 'Assemblies', text: 'Assemblies sum their child components, so a typical power point or light point is priced in one line.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Validation rules', text: 'Rules per trade and item group catch components that break your standards.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'FOT AI on the client’s BOQ', text: 'Prices filled on top of the client’s BOQ PDF, then reviewed by your estimator.' },
  { icon: 'fa-solid fa-file-export', title: 'Submission-ready exports', text: 'Area, component and FOT reports to Excel or PDF.' }
]
const systems = [
  { name: 'Power distribution', measure: 'Main and sub-switchboards, distribution boards, breakers by rating, and sub-mains by size and length (m).', watch: 'Who supplies the main switchboard and the incoming supply, and whether metering and testing are in your scope.' },
  { name: 'Lighting', measure: 'Light fittings by type (nr), emergency and exit lighting, switches and controls, and lighting final circuits.', watch: 'Fittings marked “by others” or client-supplied, and lighting controls that sit with another trade.' },
  { name: 'Small power', measure: 'Socket outlets, isolators and fused spurs (nr), power final circuits, and connections to other trades’ equipment.', watch: 'Connections to ACMV, pumps, lifts and doors. Each one is a point, a cable and testing time.' },
  { name: 'Cables and wiring', measure: 'Cable by type and size (m), terminations and glands (nr), with vertical runs included.', watch: 'Wastage allowances, and the measurement rule in the tender: actual length, or per point.' },
  { name: 'Containment', measure: 'Trunking, cable tray, ladder and conduit by size (m), with bends, tees and supports.', watch: 'Containment shared with ELV, and fire-rated or segregated routes.' },
  { name: 'Earthing and lightning protection', measure: 'Earth electrodes and pits, earth bars, bonding conductors (m), air terminals and down conductors.', watch: 'Testing and certification, and items that depend on the building structure.' }
]
const faqs = [
  { q: 'Can DeepCost estimate electrical work?', a: 'DeepCost has price libraries for every trade: Fire Protection, ACMV, A&A and ELV come seeded, and electrical, plumbing & sanitary and other trade libraries are set up for your company during onboarding, or imported from your own Excel price list.' },
  { q: 'Where does the electrical price library come from?', a: 'It is set up for your company during onboarding, or imported from your own Excel price list, so the rates are yours. You then add item groups, assemblies and templates for the way you price.' },
  { q: 'How do I price cable runs?', a: 'Measure each cable type and size in metres per area, and price it from your library with material and installation rates. Use assemblies when the tender prices per point instead.' },
  { q: 'Can I measure from PDF drawings?', a: 'DeepPlan AI measures rooms and lengths on PDF drawings and turns them into a priced BOQ. Its AI symbol detection is in early access.' },
  { q: 'How is DeepCost priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
