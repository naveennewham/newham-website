<template>
  <ServiceLanding
    path="/acmv-design-services"
    seo-title="ACMV & HVAC design services, Singapore"
    seo-description="ACMV and HVAC design services in Singapore: heat load calculations, equipment selection, ductwork and chilled water piping layouts and mechanical ventilation to SS 553 and SS 554."
    eyebrow="ACMV design · Singapore"
    title="ACMV and HVAC design services in Singapore"
    lead="Heat load calculations, equipment selection, ductwork and piping layouts and mechanical ventilation design for M&E contractors and consultants. Prepared to Singapore codes and scoped in writing, with PE review coordinated when the submission needs it."
    cta="Send us a project to scope"
    :chips="['SS 553', 'SS 554', 'SS 530', 'SCDF smoke control interfaces']"
    lottie="/lottie/blueprint.json"
    lottie-label="Illustration of an engineer drawing a blueprint"
    problem-eyebrow="Why contractors outsource ACMV design"
    problem-title="Design changes keep landing on the site team"
    :problems="problems"
    scope-eyebrow="What we design"
    scope-title="From heat load to coordinated layouts"
    scope-lead="Deliverables are prepared to the codes and the edition that apply to your project, in your drawing standards."
    :scope="scope"
    :note="note"
    steps-title="Scoped in writing, delivered with review cycles"
    :steps="steps"
    :related="related"
    faq-title="ACMV design questions"
    :faqs="faqs"
    cta-title="Have an ACMV package to design?"
    cta-lead="Book a 30-minute call and share the drawings. We will confirm the scope, the codes it is designed to and the date we can deliver."
    service-name="ACMV and HVAC design"
    service-type="Mechanical (ACMV) engineering design"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-temperature-arrow-up', title: 'Loads checked too late', text: 'Equipment is ordered before the heat load is confirmed, and undersized or oversized plant shows up at testing and commissioning.' },
  { icon: 'fa-solid fa-diagram-project', title: 'Ductwork that does not fit', text: 'Ducts drawn without the structure and other services clash with beams, sprinkler mains and cable trays on site.' },
  { icon: 'fa-solid fa-users-slash', title: 'A full-time designer is hard to justify', text: 'ACMV design work rises and falls with tender wins, so a dedicated in-house designer rarely fits year-round.' }
]

const scope = [
  { icon: 'fa-solid fa-calculator', title: 'Heat load calculations', text: 'Space-by-space cooling loads from the architectural layout, occupancy, lighting and equipment, with fresh air quantities.' },
  { icon: 'fa-solid fa-snowflake', title: 'Equipment selection', text: 'Chillers, AHUs, FCUs, VRF and split systems and fans selected against the calculated loads, with equipment schedules.' },
  { icon: 'fa-solid fa-wind', title: 'Ductwork layouts', text: 'Supply, return, fresh air and exhaust duct layouts and sizing, air terminals and dampers, coordinated with the ceiling.' },
  { icon: 'fa-solid fa-faucet', title: 'Chilled water & condensate piping', text: 'Pipe routing and sizing, valves and condensate drainage, with riser and schematic diagrams.' },
  { icon: 'fa-solid fa-fan', title: 'Mechanical ventilation', text: 'Car park, toilet, kitchen and plant room ventilation, and the interfaces with smoke control and the fire alarm.' },
  { icon: 'fa-solid fa-folder-open', title: 'Drawing packages', text: 'Layouts, sections, schematics, details and schedules in AutoCAD or Revit, to your standards and the project specification.' }
]

const note = { icon: 'fa-solid fa-stamp', title: 'PE endorsement', text: 'Newham prepares the design, drawings and calculations. Where a statutory submission needs Professional Engineer endorsement, we coordinate review by a Singapore-registered PE and quote those fees separately.' }

const steps = [
  { title: 'Share the drawings', text: 'Architectural plans, the specification, any consultant design and your submission or construction date.' },
  { title: 'Scope & quote', text: 'Systems, codes, deliverables and timeline confirmed in writing.' },
  { title: 'Calculate & design', text: 'Loads, selections and layouts prepared to the agreed codes and coordinated with other services.' },
  { title: 'Review & hand over', text: 'Revisions within scope, PE review coordinated where needed, package handed over.' }
]

const related = [
  { to: '/case-studies/acmv', eyebrow: 'Case study', title: 'ACMV work with Newham', text: 'How Newham supports ACMV contractors with estimation and engineering capacity.', cta: 'Read the case study' },
  { to: '/boq-estimation-services', eyebrow: 'Also from Newham', title: 'ACMV estimation & BOQ', text: 'Take-offs, priced BOQs and tender support for ACMV and other M&E trades.', cta: 'BOQ services' },
  { to: '/shop-drawing-services', eyebrow: 'After award', title: 'ACMV shop drawings', text: 'Coordinated shop drawings and as-builts in Revit MEP or AutoCAD.', cta: 'Shop drawing services' }
]

const faqs = [
  { q: 'Which codes do you design ACMV systems to?', a: 'SS 553, the Singapore code of practice for air-conditioning and mechanical ventilation in buildings, with SS 554 for indoor air quality and SS 530 for the energy efficiency of building services and equipment. Smoke control and fire-related ventilation follow the SCDF Fire Code. We design to the editions that apply to your project.' },
  { q: 'Is ACMV the same as HVAC?', a: 'Largely, yes. ACMV (air-conditioning and mechanical ventilation) is the term used in Singapore. HVAC is the international term and includes heating, which Singapore buildings rarely need.' },
  { q: 'Can you do heat load calculations only?', a: 'Yes. We can deliver heat load calculations and equipment schedules on their own, or the full design and drawing package. The scope is agreed in writing first.' },
  { q: 'Do you design smoke control systems?', a: 'We design the mechanical ventilation and its interfaces with smoke control and the fire alarm, such as fan shutdown and damper operation in the cause-and-effect matrix. Smoke control design is confirmed against the SCDF Fire Code requirements for your building during scoping.' },
  { q: 'Can you handle PE endorsement?', a: 'We coordinate review and endorsement by a Singapore-registered Professional Engineer where the submission needs it, and quote those fees separately.' },
  { q: 'How is the work priced?', a: 'Per deliverable, such as a set of heat load calculations or a design package, or as part of a monthly retainer. Billing is in SGD. Contact admin@newhamtech.com for a quote.' }
]
</script>
