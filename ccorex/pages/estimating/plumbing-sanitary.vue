<template>
  <TradeLanding
    slug="plumbing-sanitary"
    trade="Plumbing & sanitary"
    seo-title="Plumbing & sanitary estimating software for contractors"
    seo-description="Plumbing and sanitary estimating software for Singapore contractors: price water supply, sanitary and drainage pipework, fittings and fixtures by area, from one price library."
    h1="Price plumbing and sanitary tenders from one price library"
    lead="DeepCost prices water supply, sanitary and drainage pipework, fittings and fixtures from a plumbing price library set up for your company during onboarding, or imported from your own Excel price list, then takes off by building, floor and room."
    :item-groups="['Cold & hot water pipework', 'Sanitary & soil pipework', 'Drainage', 'Valves & fittings', 'Sanitary fixtures', 'Tanks & pumps']"
    problem-title="Pipe lengths, fittings and fixtures counted by hand"
    :problems="problems"
    feature-title="What plumbing and sanitary estimators get"
    :features="features"
    systems-title="What to measure and price in a plumbing and sanitary tender"
    systems-lead="Set each system up as item groups in your DeepCost library, then take it off by building, floor and room. These are the quantities estimators usually measure, and the items most often missed."
    :systems="systems"
    :guide-links="[{ to: '/resources/how-to-prepare-a-boq', title: 'How to prepare a BOQ' }, { to: '/resources/mep-estimating-checklist', title: 'MEP estimating checklist' }, { to: '/solutions/quantity-takeoff-software', title: 'Quantity take-off from PDF drawings' }]"
    :faqs="faqs"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-ruler', title: 'Pipework scaled floor by floor', text: 'Pipe runs by size and material are measured by hand, and vertical stacks are easy to miss.' },
  { icon: 'fa-solid fa-list-ol', title: 'Fittings and fixtures re-counted', text: 'Fixture schedules and fittings are counted again for every bid instead of priced from a template.' },
  { icon: 'fa-solid fa-link-slash', title: 'Re-keying the client’s BOQ', text: 'Your priced figures are typed into the client’s BOQ line by line before the closing date.' }
]
const features = [
  { icon: 'fa-solid fa-layer-group', title: 'Take-off by area', text: 'Pipework, fittings and fixtures organised by building, floor and room.' },
  { icon: 'fa-solid fa-book-open', title: 'A plumbing price library', text: 'Part code, brand, unit, material and installation price, markup and datasheet, with dated price history; set up during onboarding or imported from Excel.' },
  { icon: 'fa-solid fa-cubes', title: 'Assemblies', text: 'Assemblies sum their child components, so a typical toilet or pantry is priced in one line.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Validation rules', text: 'Rules per trade and item group catch components that break your standards.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'FOT AI on the client’s BOQ', text: 'Prices filled on top of the client’s BOQ PDF, then reviewed by your estimator.' },
  { icon: 'fa-solid fa-file-export', title: 'Submission-ready exports', text: 'Area, component and FOT reports to Excel or PDF.' }
]
const systems = [
  { name: 'Water supply', measure: 'Cold and hot water pipework by material and size (m), valves, meters, and insulation where specified.', watch: 'Where your scope starts at the incoming main, and who supplies the water heaters.' },
  { name: 'Sanitary and soil pipework', measure: 'Soil, waste and vent pipework by material and size (m), with fittings, cleaning eyes and supports.', watch: 'Vertical stacks and sleeves through slabs, which are easy to leave out of a floor-by-floor take-off.' },
  { name: 'Drainage', measure: 'Below-ground and above-ground drainage pipework (m), floor traps, gullies and inspection chambers (nr).', watch: 'Excavation and reinstatement, and which external drainage sits with the civil contractor.' },
  { name: 'Fixtures and fittings', measure: 'Sanitary fixtures by type (nr): WCs, basins, urinals, sinks, showers, taps and accessories.', watch: 'Fixtures supplied by the client or the main contractor, where you only install and connect.' },
  { name: 'Tanks and pumps', measure: 'Water tanks, transfer and booster pumps with controls, and pump-room pipework and valves.', watch: 'The electrical supply to the pumps, which may sit in another trade’s scope.' }
]
const faqs = [
  { q: 'Can DeepCost estimate plumbing and sanitary work?', a: 'DeepCost has price libraries for every trade: Fire Protection, ACMV, A&A and ELV come seeded, and electrical, plumbing & sanitary and other trade libraries are set up for your company during onboarding, or imported from your own Excel price list.' },
  { q: 'Where does the plumbing price library come from?', a: 'It is set up for your company during onboarding, or imported from your own Excel price list, so the rates are yours. You then add item groups, assemblies and templates for the way you price.' },
  { q: 'How do I price a typical toilet or pantry once?', a: 'Build it as an assembly of its fixtures, fittings and pipework. The assembly sums its child components, so each repeat is one line in the take-off.' },
  { q: 'Can I measure from PDF drawings?', a: 'DeepPlan AI measures rooms and lengths on PDF drawings and turns them into a priced BOQ. Its AI symbol detection is in early access.' },
  { q: 'How is DeepCost priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
