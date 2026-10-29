<template>
  <TradeLanding
    slug="a-and-a"
    trade="A&A"
    seo-title="A&A Works Estimating Software Singapore"
    seo-description="Estimating software for A&A (addition and alteration) works in Singapore: strip-out, partitions, ceilings, finishes and M&E reinstatement priced by area from one A&A library."
    h1="A&A works estimating software, priced room by room"
    lead="DeepCost takes an addition and alteration tender from documents to a priced Form of Tender: take-off by building, floor and room, a seeded A&A price library with material and installation prices, and FOT AI on the client’s BOQ."
    :item-groups="['Strip-out & demolition', 'Partitions & drywall', 'Ceilings', 'Flooring & wall finishes', 'Doors & ironmongery', 'M&E diversion & reinstatement', 'Hoarding, protection & making good']"
    problem-title="Many small items, every one easy to miss"
    :problems="problems"
    feature-title="What A&A estimators get"
    :features="features"
    systems-title="What to measure and price in an A&A tender"
    systems-lead="Set each work package up as item groups in your DeepCost library, then take it off by building, floor and room. These are the quantities A&A estimators usually measure, and the items most often missed."
    :systems="systems"
    sample-boq-title="How A&A lines read in a BOQ"
    sample-boq-lead="A&A packages are usually billed by work package, then by item, with the unit and quantity measured from the drawings and a site survey. Each line in DeepCost is priced from your library as quantity × (material + installation price)."
    :sample-boq="sampleBoq"
    :guide-links="[{ to: '/resources/how-to-prepare-a-boq', title: 'How to prepare a BOQ' }, { to: '/resources/quantity-takeoff-methods', title: 'Quantity take-off methods compared' }, { to: '/resources/mep-estimating-checklist', title: 'MEP estimating checklist' }]"
    :faqs="faqs"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-list-check', title: 'Hundreds of small items', text: 'Strip-out, patching, finishes and reinstatement lines added up room by room in a spreadsheet.' },
  { icon: 'fa-solid fa-arrow-trend-down', title: 'Rates that drift', text: 'Each estimator keeps their own board, tile and labour rates, so two bids price the same room differently.' },
  { icon: 'fa-solid fa-link-slash', title: 'Re-keying the client’s BOQ', text: 'Your priced figures are typed into the client’s BOQ line by line before the closing date.' }
]
const features = [
  { icon: 'fa-solid fa-file-lines', title: 'AI tender summary', text: 'Reads the tender documents and fills a predefined set of fields, which your team reviews and edits.' },
  { icon: 'fa-solid fa-layer-group', title: 'Area schedule', text: 'Organise the tender by building, floor and room, so each room’s strip-out, finishes and reinstatement sit together.' },
  { icon: 'fa-solid fa-book-open', title: 'A seeded A&A library', text: 'A&A is one of DeepCost’s seeded trades, priced in SGD, with material and installation prices, markups and dated price history.' },
  { icon: 'fa-solid fa-cubes', title: 'Item groups and assemblies', text: 'Assemblies sum their child components, so a typical partition or ceiling build-up is priced in one line.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Validation rules', text: 'Rules per trade and item group catch components that break your standards before they are priced.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'FOT AI on the client’s BOQ', text: 'DeepCost finds the quantity and amount columns on the client’s BOQ PDF so you price on top of it.' },
  { icon: 'fa-solid fa-user-check', title: 'Approval at each stage', text: 'Area schedule, MTO and FOT each submitted, checked and approved, with a revision trail.' },
  { icon: 'fa-solid fa-file-export', title: 'Submission-ready exports', text: 'Area, component and FOT reports to Excel or PDF.' }
]
const systems = [
  { name: 'Strip-out and demolition', measure: 'Removal of existing partitions and ceilings (m²), floor and wall finishes (m²), doors and fixtures (nr), and disposal of debris off site.', watch: 'Hidden conditions behind finishes, items the client wants kept or salvaged, and night or weekend working in occupied buildings.' },
  { name: 'Partitions and drywall', measure: 'Partitions by type, height and board layers (m²), with insulation, head and base details, openings and access panels (nr).', watch: 'Full-height versus ceiling-height partitions, fire or acoustic ratings, and partitions that need firestopping at slab or services.' },
  { name: 'Ceilings', measure: 'Ceilings by type, such as plasterboard or mineral fibre (m²), bulkheads and edge trims (m), and access panels (nr).', watch: 'Re-using an existing ceiling grid, ceiling height changes, and coordination with light fittings, diffusers and sprinkler heads.' },
  { name: 'Flooring and wall finishes', measure: 'Floor finishes by type, such as tile, vinyl or carpet (m²), screed and levelling (m²), skirting (m), wall tiles and paint (m²).', watch: 'Surface preparation and levelling of the existing floor, and transitions where new finishes meet existing.' },
  { name: 'Doors and ironmongery', measure: 'Door sets by type and size (nr), frames, ironmongery sets (nr) and vision panels.', watch: 'Fire-rated doors and the ironmongery they need, and doors that tie into access control, which may sit with the ELV trade.' },
  { name: 'M&E diversion and reinstatement', measure: 'Disconnection, diversion and reconnection of lighting, power, ACMV, sprinkler and fire alarm points affected by the new layout (nr or item).', watch: 'Who carries each trade’s work, testing and recommissioning after changes, and shutdowns that must be booked with the building manager.' },
  { name: 'Making good', measure: 'Patching of walls, floors and slabs after removals and new openings (m² or nr), and reinstatement of existing finishes.', watch: 'Matching existing finishes, and making good after other trades’ penetrations late in the job.' },
  { name: 'Hoarding, protection and preliminaries', measure: 'Hoarding and dust screens (m), protection to existing floors, lifts and finishes (m² or item), and site cleaning.', watch: 'Working hours and noise limits in occupied buildings, lift and loading bay bookings, and final cleaning before handover.' }
]
const sampleBoq = [
  { item: 'A', description: 'Strip-out and demolition', heading: true },
  { item: 'A1', description: 'Remove existing drywall partition including studs, and dispose off site', unit: 'm²', qty: '180' },
  { item: 'A2', description: 'Remove existing ceiling boards and grid, and dispose off site', unit: 'm²', qty: '420' },
  { item: 'A3', description: 'Remove existing carpet tiles and adhesive, and prepare floor to receive new finish', unit: 'm²', qty: '420' },
  { item: 'B', description: 'Partitions, ceilings and finishes', heading: true },
  { item: 'B1', description: 'Supply and install full-height drywall partition, double-layer board each side, with insulation', unit: 'm²', qty: '240' },
  { item: 'B2', description: 'Supply and install plasterboard ceiling on suspended grid, including access panels', unit: 'm²', qty: '380' },
  { item: 'B3', description: 'Supply and lay vinyl flooring including levelling screed', unit: 'm²', qty: '420' },
  { item: 'B4', description: 'Supply and install single-leaf timber door set with frame and ironmongery set', unit: 'nr', qty: '12' },
  { item: 'C', description: 'M&E reinstatement and making good', heading: true },
  { item: 'C1', description: 'Relocate existing light fittings to suit new ceiling layout, including testing', unit: 'nr', qty: '64' },
  { item: 'C2', description: 'Make good walls and floor after removal of existing partitions', unit: 'item', qty: '1' }
]
const faqs = [
  { q: 'What are A&A works?', a: 'Addition and alteration works change an existing building rather than build a new one: strip-out, new partitions and ceilings, finishes, doors, and diverting or reinstating M&E services to suit the new layout.' },
  { q: 'Is A&A supported out of the box?', a: 'Yes. A&A is one of DeepCost’s seeded trades, alongside Fire Protection, ACMV and ELV, priced in SGD. You extend it with your own components, assemblies and item-group templates, and other trades are set up during onboarding or imported from Excel.' },
  { q: 'Can I import our existing A&A price list?', a: 'Yes. Library data can be bulk-imported from Excel templates, then kept current with dated price changes.' },
  { q: 'Can one tender cover A&A and M&E trades together?', a: 'Yes. One tender can carry several trades, with one order per tender and trade. Each is taken off by building, floor and room, priced from the same library, and rolled up into the Form of Tender.' },
  { q: 'Can DeepCost price the client’s BOQ directly?', a: 'Yes. FOT AI detects the quantity and amount columns on the client’s BOQ PDF so your prices are filled on top of it, and your estimator reviews the result.' },
  { q: 'Can someone estimate the A&A tender for us?', a: 'If you would rather outsource the take-off and BOQ, Newham offers estimating services at newhamtech.com. DeepCost is for estimating and pricing; design endorsement and submissions stay with your appointed professionals.' },
  { q: 'How is DeepCost priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
