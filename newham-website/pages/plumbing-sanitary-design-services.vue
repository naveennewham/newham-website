<template>
  <ServiceLanding
    path="/plumbing-sanitary-design-services"
    seo-title="Plumbing & sanitary design services, Singapore"
    seo-description="Plumbing and sanitary design services in Singapore: cold and hot water supply, sanitary plumbing and drainage layouts and riser diagrams, to SS 636 and PUB codes of practice."
    eyebrow="Plumbing & sanitary design · Singapore"
    title="Plumbing and sanitary design services in Singapore"
    lead="Water supply, sanitary plumbing and drainage design for M&E contractors and consultants. Prepared to SS 636 and the PUB codes of practice and scoped in writing, with PE review coordinated when the submission needs it."
    cta="Send us a project to scope"
    :chips="['SS 636', 'PUB sewerage & sanitary works', 'PUB surface water drainage']"
    lottie="/lottie/blueprint.json"
    lottie-label="Illustration of an engineer drawing a blueprint"
    problem-eyebrow="Why contractors outsource plumbing and sanitary design"
    problem-title="Gravity pipes leave no room for late changes"
    :problems="problems"
    scope-eyebrow="What we design"
    scope-title="From water demand to drainage layout"
    scope-lead="Deliverables are prepared to the codes and the edition that apply to your project, in your drawing standards."
    :scope="scope"
    :note="note"
    steps-title="Scoped in writing, delivered with review cycles"
    :steps="steps"
    :related="related"
    faq-title="Plumbing and sanitary design questions"
    :faqs="faqs"
    cta-title="Have a plumbing and sanitary package to design?"
    cta-lead="Book a 30-minute call and share the drawings. We will confirm the scope, the codes it is designed to and the date we can deliver."
    service-name="Plumbing and sanitary design"
    service-type="Plumbing and sanitary engineering design"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-arrow-down-wide-short', title: 'Falls that do not work', text: 'Sanitary and drainage pipes need gradient, and a late ceiling or beam change can leave no way to keep the fall.' },
  { icon: 'fa-solid fa-file-circle-exclamation', title: 'Submissions sent back', text: 'Layouts and riser diagrams that miss a PUB requirement come back for changes and delay approval.' },
  { icon: 'fa-solid fa-users-slash', title: 'A full-time designer is hard to justify', text: 'Plumbing and sanitary design work rises and falls with tender wins, so a dedicated in-house designer rarely fits year-round.' }
]

const scope = [
  { icon: 'fa-solid fa-droplet', title: 'Cold & hot water supply', text: 'Water demand, storage tanks, booster pumps, pipe sizing and distribution layouts, with riser diagrams.' },
  { icon: 'fa-solid fa-toilet', title: 'Sanitary plumbing', text: 'Soil, waste and vent pipe layouts and stacks for toilets, kitchens and other sanitary appliances.' },
  { icon: 'fa-solid fa-water', title: 'Sanitary drainage', text: 'Below-ground drainage, inspection chambers and the connection to the public sewer.' },
  { icon: 'fa-solid fa-cloud-showers-heavy', title: 'Rainwater & surface water', text: 'Rainwater downpipes, roof outlets and the interfaces with the surface water drainage design.' },
  { icon: 'fa-solid fa-gauge', title: 'Pumps & tanks', text: 'Transfer and booster pump sizing, tank capacities and pump room layouts.' },
  { icon: 'fa-solid fa-folder-open', title: 'Drawing packages', text: 'Layouts, riser diagrams, schematics and details in AutoCAD or Revit, to your standards and the submission format.' }
]

const note = { icon: 'fa-solid fa-stamp', title: 'PE endorsement', text: 'Newham prepares the design, drawings and calculations. Where a statutory submission needs Professional Engineer endorsement, we coordinate review by a Singapore-registered PE and quote those fees separately.' }

const steps = [
  { title: 'Share the drawings', text: 'Architectural plans, the specification, site drainage information and your submission date.' },
  { title: 'Scope & quote', text: 'Systems, codes, deliverables and timeline confirmed in writing.' },
  { title: 'Calculate & design', text: 'Demand, pipe sizes and layouts prepared to the agreed codes and coordinated with the structure and other services.' },
  { title: 'Review & hand over', text: 'Revisions within scope, PE review coordinated where needed, package handed over.' }
]

const related = [
  { to: '/case-studies/plumbing-sanitary', eyebrow: 'Case study', title: 'Plumbing & sanitary work with Newham', text: 'How Newham supports plumbing and sanitary contractors with estimation and engineering capacity.', cta: 'Read the case study' },
  { to: '/boq-estimation-services', eyebrow: 'Also from Newham', title: 'Plumbing estimation & BOQ', text: 'Take-offs, priced BOQs and tender support for plumbing and other M&E trades.', cta: 'BOQ services' },
  { to: '/shop-drawing-services', eyebrow: 'After award', title: 'Plumbing shop drawings', text: 'Coordinated shop drawings and as-builts in Revit MEP or AutoCAD.', cta: 'Shop drawing services' }
]

const faqs = [
  { q: 'Which codes do you design plumbing and sanitary systems to?', a: 'Potable water services follow SS 636, the Singapore code of practice for water services (formerly CP 48). Sanitary plumbing and drainage follow PUB’s Code of Practice on Sewerage and Sanitary Works, and rainwater and site drainage interface with PUB’s Code of Practice on Surface Water Drainage. We design to the editions that apply to your project.' },
  { q: 'Do you prepare drawings for PUB submission?', a: 'We prepare the layouts, riser diagrams and details the submission needs. The Qualified Person submits them, and where Professional Engineer endorsement is needed we coordinate review by a Singapore-registered PE, quoted separately.' },
  { q: 'Can you design the water supply only?', a: 'Yes. Water supply, sanitary plumbing and drainage can be scoped together or separately. The scope is agreed in writing first.' },
  { q: 'Do you model sanitary pipes for CORENET X?', a: 'Yes. Sanitary and drainage pipework can be modelled in Revit for coordination and BIM submission. See our CORENET X guide for what agencies check in the M&E model.' },
  { q: 'Can you handle PE endorsement?', a: 'We coordinate review and endorsement by a Singapore-registered Professional Engineer where the submission needs it, and quote those fees separately.' },
  { q: 'How is the work priced?', a: 'Per deliverable, such as a water supply design or a drainage layout package, or as part of a monthly retainer. Billing is in SGD. Contact admin@newhamtech.com for a quote.' }
]
</script>
