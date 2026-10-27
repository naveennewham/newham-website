<template>
  <ServiceLanding
    path="/elv-design-services"
    seo-title="ELV design services, Singapore: CCTV, access control & cabling"
    seo-description="ELV design services in Singapore: CCTV, access control, structured cabling, PA, MATV and car park systems, with telecom space and facilities to IMDA's COPIF."
    eyebrow="ELV design · Singapore"
    title="ELV design services in Singapore"
    lead="CCTV, access control, structured cabling, public address, MATV and car park system design for M&E contractors and consultants. Scoped in writing and coordinated with the other services, with PE review coordinated when the submission needs it."
    cta="Send us a project to scope"
    :chips="['CCTV', 'Access control', 'Structured cabling', 'IMDA COPIF']"
    lottie="/lottie/blueprint.json"
    lottie-label="Illustration of an engineer drawing a blueprint"
    problem-eyebrow="Why contractors outsource ELV design"
    problem-title="Many small systems, one tight programme"
    :problems="problems"
    scope-eyebrow="What we design"
    scope-title="From system design to riser diagram"
    scope-lead="Deliverables are prepared to the project specification and the requirements that apply, in your drawing standards."
    :scope="scope"
    :note="note"
    steps-title="Scoped in writing, delivered with review cycles"
    :steps="steps"
    :related="related"
    faq-title="ELV design questions"
    :faqs="faqs"
    cta-title="Have an ELV package to design?"
    cta-lead="Book a 30-minute call and share the drawings. We will confirm the scope, the systems and the date we can deliver."
    service-name="ELV systems design"
    service-type="Extra-low-voltage systems design"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-puzzle-piece', title: 'Systems designed in isolation', text: 'CCTV, access control, intercom and PA each get their own drawings, and the interfaces between them are missed.' },
  { icon: 'fa-solid fa-server', title: 'No space for the equipment', text: 'Telecom rooms, risers and rack space are left out until late, when the architecture is fixed.' },
  { icon: 'fa-solid fa-users-slash', title: 'A full-time designer is hard to justify', text: 'ELV design work rises and falls with tender wins, so a dedicated in-house designer rarely fits year-round.' }
]

const scope = [
  { icon: 'fa-solid fa-video', title: 'CCTV', text: 'Camera positions and coverage, recording and storage, and the network back to the control room.' },
  { icon: 'fa-solid fa-door-closed', title: 'Access control & intercom', text: 'Controlled doors, readers, locks and exit devices, and intercom and visitor systems, with interfaces to the fire alarm.' },
  { icon: 'fa-solid fa-network-wired', title: 'Structured cabling', text: 'Data outlets, horizontal and backbone cabling, racks and the telecom rooms and risers they need.' },
  { icon: 'fa-solid fa-volume-high', title: 'Public address', text: 'Speaker layouts and zoning, amplifiers and the interfaces with the fire alarm.' },
  { icon: 'fa-solid fa-tv', title: 'MATV & car park systems', text: 'MATV distribution, and car park guidance and barrier systems.' },
  { icon: 'fa-solid fa-folder-open', title: 'Drawing packages', text: 'Layouts, riser and schematic diagrams and equipment schedules in AutoCAD or Revit, to your standards.' }
]

const note = { icon: 'fa-solid fa-stamp', title: 'PE endorsement', text: 'Newham prepares the design, drawings and calculations. Where a statutory submission needs Professional Engineer endorsement, we coordinate review by a Singapore-registered PE and quote those fees separately.' }

const steps = [
  { title: 'Share the drawings', text: 'Architectural plans, the specification, the systems in scope and your submission or construction date.' },
  { title: 'Scope & quote', text: 'Systems, deliverables and timeline confirmed in writing.' },
  { title: 'Design & coordinate', text: 'System layouts and riser diagrams prepared and coordinated with the other services and the fire alarm.' },
  { title: 'Review & hand over', text: 'Revisions within scope, PE review coordinated where needed, package handed over.' }
]

const related = [
  { to: '/case-studies/elv', eyebrow: 'Case study', title: 'ELV work with Newham', text: 'How Newham supports ELV contractors with estimation and engineering capacity.', cta: 'Read the case study' },
  { to: '/boq-estimation-services', eyebrow: 'Also from Newham', title: 'ELV estimation & BOQ', text: 'Take-offs, priced BOQs and tender support for ELV and other M&E trades.', cta: 'BOQ services' },
  { to: '/shop-drawing-services', eyebrow: 'After award', title: 'ELV shop drawings', text: 'Coordinated shop drawings and as-builts in Revit MEP or AutoCAD.', cta: 'Shop drawing services' }
]

const faqs = [
  { q: 'What does ELV cover?', a: 'ELV (extra-low voltage) covers building systems such as CCTV, access control, intercom, structured cabling, public address, MATV and car park systems. Fire alarm is sometimes grouped with ELV; we design it as part of our fire protection design service.' },
  { q: 'Do you plan telecom rooms and risers?', a: 'Yes. Telecom rooms, risers and cable routes are planned with the ELV design. Space and facilities for telecom licensees follow IMDA’s Code of Practice for Info-communication Facilities in Buildings (COPIF), in the edition that applies to your project.' },
  { q: 'Do you design the interfaces with the fire alarm?', a: 'Yes. Access control door release, PA and other fire alarm interfaces are recorded so they can go into the cause-and-effect matrix.' },
  { q: 'Can you design one system only, such as CCTV?', a: 'Yes. Each ELV system can be scoped on its own or as part of a combined package. The scope is agreed in writing first.' },
  { q: 'Can you handle PE endorsement?', a: 'We coordinate review and endorsement by a Singapore-registered Professional Engineer where the submission needs it, and quote those fees separately.' },
  { q: 'How is the work priced?', a: 'Per deliverable, such as a CCTV design or a full ELV package, or as part of a monthly retainer. Billing is in SGD. Contact admin@newhamtech.com for a quote.' }
]
</script>
