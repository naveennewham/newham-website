<template>
  <ServiceLanding
    path="/fire-protection-design"
    seo-title="Fire protection & sprinkler design services, Singapore"
    seo-description="Fire protection design services in Singapore: sprinkler layouts and hydraulic calculations to SS CP 52, plus fire alarm, pump, riser and gas suppression design for SCDF submission."
    eyebrow="Fire protection design · Singapore"
    title="Fire protection and sprinkler design services in Singapore"
    lead="Sprinkler layouts, hydraulic calculations and submission drawings for M&E contractors and consultants — prepared to Singapore codes, scoped in writing, with PE review coordinated when the submission needs it."
    cta="Send us a project to scope"
    :chips="['SS CP 52', 'NFPA 13', 'SS 645', 'SCDF submission']"
    lottie="/lottie/blueprint.json"
    lottie-label="Illustration of an engineer drawing a blueprint"
    problem-eyebrow="Why contractors outsource fire protection design"
    problem-title="Design work piles up behind site and coordination"
    :problems="problems"
    scope-eyebrow="What we design"
    scope-title="From sprinkler layout to submission package"
    scope-lead="Deliverables are produced to Singapore codes and formatted for authority submission."
    :scope="scope"
    :note="note"
    steps-title="Scoped in writing, delivered with review cycles"
    :steps="steps"
    :related="related"
    faq-title="Fire protection design questions"
    :faqs="faqs"
    cta-title="Have a fire protection package to design?"
    cta-lead="Book a 30-minute call and share the drawings. We will confirm the scope, the codes it is designed to and the date we can deliver."
    service-name="Fire protection design and hydraulic calculations"
    service-type="Fire protection engineering design"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-hourglass-half', title: 'Design bottlenecks', text: 'Sprinkler drawings and hydraulic calculations wait while engineers juggle coordination meetings, site visits and submissions.' },
  { icon: 'fa-solid fa-file-circle-exclamation', title: 'Resubmissions cost time', text: 'Layouts and calculations that do not match the code edition or the latest architectural drawings come back for changes.' },
  { icon: 'fa-solid fa-users-slash', title: 'A full-time designer is hard to justify', text: 'Fire protection design demand rises and falls with your tender wins, so a dedicated in-house designer rarely fits year-round.' }
]

const scope = [
  { icon: 'fa-solid fa-shower', title: 'Sprinkler system design', text: 'Layout, head placement, pipe routing, zoning and riser diagrams to SS CP 52, with NFPA 13 where the project specification calls for it, across hazard classifications.' },
  { icon: 'fa-solid fa-square-root-variable', title: 'Hydraulic calculations', text: 'Node-by-node analysis, demand versus supply and residual pressure, in submission-ready reports.' },
  { icon: 'fa-solid fa-gears', title: 'Fire pump design & selection', text: 'Pump sizing, duty and standby, pressure-flow curves and pump room layouts.' },
  { icon: 'fa-solid fa-bell', title: 'Fire alarm system design', text: 'Detection layout, zoning, loop design and cause-and-effect matrices to SS 645, with BS 5839 where the project specification calls for it.' },
  { icon: 'fa-solid fa-wind', title: 'Gas suppression design', text: 'Clean agent and inert gas systems: agent quantities, pipe sizing and nozzle placement.' },
  { icon: 'fa-solid fa-arrows-up-down', title: 'Wet & dry riser design', text: 'Riser sizing, landing valve placement and breeching inlet locations to SS CP 52.' },
  { icon: 'fa-solid fa-fire-extinguisher', title: 'Hose reel system design', text: 'Coverage planning, pipe sizing and flow and pressure analysis.' },
  { icon: 'fa-solid fa-folder-open', title: 'Submission drawing packages', text: 'Floor plans, riser diagrams, schematics, details and schedules in AutoCAD or Revit, in Singapore submission format.' }
]

const note = { icon: 'fa-solid fa-stamp', title: 'PE endorsement', text: 'Newham delivers the design. Where a statutory submission needs Professional Engineer endorsement, we coordinate review by a Singapore-registered PE, so you receive one submission-ready package. Endorsement fees are quoted separately.' }

const steps = [
  { title: 'Share the drawings', text: 'Architectural plans, the fire safety requirements and your submission date.' },
  { title: 'Scope & quote', text: 'Systems, codes, deliverables and timeline confirmed in writing.' },
  { title: 'Design & calculate', text: 'Layouts, hydraulic calculations and drawings prepared to the agreed codes.' },
  { title: 'Review & submit', text: 'Revisions within scope, PE review coordinated where needed, package handed over.' }
]

const related = [
  { to: '/guides/sprinkler-hydraulic-calculations', eyebrow: 'Guide', title: 'Sprinkler hydraulic calculations explained', text: 'What a hydraulic calculation checks, step by step, and what the reviewer looks for.', cta: 'Read the guide' },
  { to: '/guides/wet-and-dry-riser-requirements-singapore', eyebrow: 'Guide', title: 'Wet and dry riser requirements', text: 'When the SCDF Fire Code requires a dry or wet rising main, and the landing valve and breeching inlet rules.', cta: 'Read the guide' },
  { to: '/boq-estimation-services', eyebrow: 'Also from Newham', title: 'BOQ & estimation services', text: 'Take-offs, priced BOQs and tender support for fire protection and other M&E trades.', cta: 'BOQ services' },
  { to: '/talent-outsourcing', eyebrow: 'Need someone every month?', title: 'A dedicated fire protection engineer', text: 'A Newham engineer working on your projects, in your templates.', cta: 'Talent outsourcing' }
]

const faqs = [
  { q: 'Do you provide fire sprinkler design for SCDF submission?', a: 'Yes. We prepare sprinkler layouts, hydraulic calculations and submission drawings to SS CP 52, formatted for SCDF. A Singapore-registered Professional Engineer reviews and endorses the submission where required; we coordinate that and quote the PE fees separately.' },
  { q: 'Which codes do you design to?', a: 'Sprinkler design and hydraulic calculations follow SS CP 52 and fire alarm design follows SS 645, as the SCDF Fire Code requires. NFPA 13 or BS 5839 apply only where the project specification calls for them. Drawings are formatted for SCDF submission, using the code edition that applies to your project.' },
  { q: 'Can you handle PE endorsement?', a: 'We coordinate review and endorsement by a Singapore-registered Professional Engineer where the submission needs it, and quote those fees separately.' },
  { q: 'What do you need to start?', a: 'The architectural drawings, any fire safety requirements already issued, the systems in scope and your submission date. Existing water supply information helps for hydraulic calculations.' },
  { q: 'Do you work in AutoCAD or Revit?', a: 'Either. Submission drawing packages are prepared in AutoCAD or Revit to match your standards.' },
  { q: 'How is the work priced?', a: 'Per deliverable, such as a design package or a set of calculations, or as part of a monthly retainer. Billing is in SGD. Contact admin@newhamtech.com for a quote.' }
]
</script>
