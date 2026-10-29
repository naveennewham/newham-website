<template>
  <TradeLanding
    slug="fire-protection"
    trade="Fire protection"
    seo-title="Fire Protection Estimating Software for Sprinkler & Fire Alarm"
    seo-description="Estimating software for fire sprinkler, fire alarm, gas suppression, firestopping and fireproofing tenders in Singapore: take-off by area, one price library, FOT AI."
    h1="Fire protection estimating software for sprinkler, fire alarm and suppression tenders"
    lead="DeepCost takes a fire protection tender from documents to a priced Form of Tender: take-off by building, floor and room with hazard class, one priced library, and rules that catch the wrong sprinkler type before it is priced."
    :item-groups="['Sprinkler heads & pipework', 'Valves & alarm check stations', 'Fire alarm devices & panels', 'Gas suppression', 'Hose reels & risers', 'Fire pumps & tanks', 'Firestopping & fireproofing']"
    problem-title="Every bid re-counted, every rate re-checked"
    :problems="problems"
    feature-title="What fire protection estimators get"
    :features="features"
    systems-title="What to measure and price in each fire protection system"
    systems-lead="Set each system up as item groups in your DeepCost library, then take it off by building, floor and room. These are the quantities estimators usually measure, and the items most often missed."
    :systems="systems"
    sample-boq-title="How fire sprinkler and fire alarm lines read in a BOQ"
    sample-boq-lead="Sprinkler and fire alarm packages are usually billed by system, then by item, with the unit and quantity measured from the drawings. Each line in DeepCost is priced from your library as quantity × (material + installation price)."
    :sample-boq="sampleBoq"
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
const systems = [
  { name: 'Fire sprinklers', measure: 'Heads by type and temperature rating, pipework by diameter (m), fittings, hangers and supports, installation control valves and alarm check stations, flushing and testing.', watch: 'Hazard class per area decides head type and spacing. Check concealed versus pendent heads against the finishes schedule.' },
  { name: 'Fire alarm', measure: 'Detectors by type (smoke, heat, multi-sensor), manual call points, sounders and visual alarm devices, panels and repeaters, loop cabling (m), interface and monitor modules.', watch: 'Interfaces to lifts, ACMV, access control and the sprinkler system. Each one is a module, cabling and testing time.' },
  { name: 'Gas suppression', measure: 'Agent quantity by protected room volume (kg), cylinders and racks, nozzles, distribution piping, detection and release panel, abort and manual release stations.', watch: 'Room integrity (door fan) testing and any sealing works the protected room needs before it can pass.' },
  { name: 'Hose reels, risers and hydrants', measure: 'Hose reel units, wet and dry riser pipework (m), landing valves, breeching inlets, hydrants and associated valves.', watch: 'Riser heights and pressure zones, and who supplies the tanks and pump room fit-out.' },
  { name: 'Fire pumps and tanks', measure: 'Duty, standby and jockey pumps with controllers, pump-room pipework and valves, water tanks and level controls.', watch: 'Electrical supply and backup power to the pumps, which may sit in another trade’s scope.' },
  { name: 'Firestopping', measure: 'Service penetrations by type and size (nr), linear joints (m), and the collars, wraps, sealants and boards used for each.', watch: 'The fire rating of each wall and slab, and penetrations created by other trades late in the job.' },
  { name: 'Fireproofing', measure: 'Steel surface area (m²) by member size, required fire rating and coating thickness, for intumescent or cementitious systems.', watch: 'Section factors drive thickness and cost. Access, protection of finished areas and inspection are often left out.' }
]
const sampleBoq = [
  { item: 'A', description: 'Automatic fire sprinkler system', heading: true },
  { item: 'A1', description: 'Supply and install pendent sprinkler heads, quick response, 68°C, complete with fittings', unit: 'nr', qty: '420' },
  { item: 'A2', description: 'Supply and install concealed sprinkler heads, quick response, 68°C, with cover plate to match ceiling finish', unit: 'nr', qty: '180' },
  { item: 'A3', description: 'Black steel pipework, 50 mm diameter, including fittings, hangers and supports', unit: 'm', qty: '640' },
  { item: 'A4', description: 'Installation control valve set with alarm check valve, gauges and trim', unit: 'set', qty: '2' },
  { item: 'A5', description: 'Flushing, hydrostatic testing and commissioning of the sprinkler system', unit: 'item', qty: '1' },
  { item: 'B', description: 'Fire alarm system', heading: true },
  { item: 'B1', description: 'Supply and install addressable smoke detectors, complete with base', unit: 'nr', qty: '310' },
  { item: 'B2', description: 'Supply and install manual call points', unit: 'nr', qty: '24' },
  { item: 'B3', description: 'Supply and install sounders with visual alarm devices', unit: 'nr', qty: '36' },
  { item: 'B4', description: 'Fire-rated loop cabling in containment', unit: 'm', qty: '2,850' },
  { item: 'B5', description: 'Interface modules for lift homing, ACMV shutdown and door release', unit: 'nr', qty: '18' },
  { item: 'B6', description: 'Addressable fire alarm panel, 4 loops, with repeater panel', unit: 'set', qty: '1' }
]
const faqs = [
  { q: 'Which fire protection systems can I price?', a: 'Any system you set up as item groups in your library. DeepCost comes with Fire Protection as a seeded trade, and you add components, assemblies and templates for sprinklers, fire alarm, hose reels, risers and pumps.' },
  { q: 'How do validation rules work?', a: 'You define rules per trade and item group. For example, the hazard class recorded for an area decides which sprinkler type is allowed, so a mismatched item is flagged before it is priced.' },
  { q: 'Can I estimate gas suppression, firestopping and fireproofing?', a: 'Yes. Set each up as item groups in your library: gas suppression priced by agent quantity, cylinders, nozzles and pipework; firestopping by penetration and linear metre; fireproofing by steel area, fire rating and thickness. They are then taken off by area like any other system.' },
  { q: 'Is there fire alarm estimating software in DeepCost?', a: 'Yes. Fire alarm is part of the Fire Protection trade, which comes seeded in DeepCost. You set up detectors, call points, sounders, panels, loop cabling and interface modules as item groups in your library, then take them off by area and price them like any other system.' },
  { q: 'Does it work for sprinkler and fire alarm tenders together?', a: 'Yes. One tender can carry several fire protection systems. Each is taken off by building, floor and room, priced from the same library, and rolled up into one Form of Tender.' },
  { q: 'Can DeepCost price the client’s BOQ directly?', a: 'Yes. FOT AI detects the quantity and amount columns on the client’s BOQ PDF so your prices are filled on top of it, and your estimator reviews the result.' },
  { q: 'Does DeepCost do the fire protection design?', a: 'No. DeepCost is for estimating and pricing. For design and hydraulic calculations, Newham offers fire protection design services at newhamtech.com.' },
  { q: 'How is DeepCost priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
