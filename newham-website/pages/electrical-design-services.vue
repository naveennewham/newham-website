<template>
  <ServiceLanding
    path="/electrical-design-services"
    seo-title="Electrical design services, Singapore"
    seo-description="Electrical design services in Singapore: power distribution, single-line diagrams, lighting and small power layouts, cable sizing and containment, to SS 638."
    eyebrow="Electrical design · Singapore"
    title="Electrical design services in Singapore"
    lead="Power distribution, single-line diagrams, lighting and small power layouts, cable sizing and containment for M&E contractors and consultants. Prepared to SS 638 and scoped in writing, with PE review coordinated when the submission needs it."
    cta="Send us a project to scope"
    :chips="['SS 638', 'EMA requirements', 'Single-line diagrams', 'Cable sizing']"
    lottie="/lottie/blueprint.json"
    lottie-label="Illustration of an engineer drawing a blueprint"
    problem-eyebrow="Why contractors outsource electrical design"
    problem-title="Electrical design waits behind everything else"
    :problems="problems"
    scope-eyebrow="What we design"
    scope-title="From load schedule to containment layout"
    scope-lead="Deliverables are prepared to the codes and the edition that apply to your project, in your drawing standards."
    :scope="scope"
    :note="note"
    steps-title="Scoped in writing, delivered with review cycles"
    :steps="steps"
    :related="related"
    faq-title="Electrical design questions"
    :faqs="faqs"
    cta-title="Have an electrical package to design?"
    cta-lead="Book a 30-minute call and share the drawings. We will confirm the scope, the codes it is designed to and the date we can deliver."
    service-name="Electrical design"
    service-type="Electrical engineering design"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-bolt', title: 'Loads that keep changing', text: 'Equipment and tenant loads change through design, and the load schedule, cable sizes and switchboards fall behind.' },
  { icon: 'fa-solid fa-route', title: 'Containment drawn last', text: 'Cable trays and trunking routed after the other services end up clashing with ducts and pipes on site.' },
  { icon: 'fa-solid fa-users-slash', title: 'A full-time designer is hard to justify', text: 'Electrical design work rises and falls with tender wins, so a dedicated in-house designer rarely fits year-round.' }
]

const scope = [
  { icon: 'fa-solid fa-table-list', title: 'Load schedules', text: 'Connected and maximum demand loads by distribution board, used to size the incoming supply and switchboards.' },
  { icon: 'fa-solid fa-sitemap', title: 'Single-line diagrams', text: 'Main and sub-switchboards, distribution boards and protective devices on schematic diagrams.' },
  { icon: 'fa-solid fa-ruler', title: 'Cable sizing', text: 'Cable sizes checked for current-carrying capacity, voltage drop and protection, in a cable schedule.' },
  { icon: 'fa-solid fa-lightbulb', title: 'Lighting & small power layouts', text: 'General and emergency lighting, socket outlets and isolators laid out to the room use and the specification.' },
  { icon: 'fa-solid fa-grip-lines', title: 'Containment layouts', text: 'Cable tray, ladder and trunking routes coordinated with the structure and other services.' },
  { icon: 'fa-solid fa-plug-circle-bolt', title: 'Earthing & lightning protection', text: 'Earthing and lightning protection layouts and details to the codes the project specifies.' }
]

const note = { icon: 'fa-solid fa-stamp', title: 'PE endorsement', text: 'Newham prepares the design, drawings and calculations. Where a statutory submission needs Professional Engineer endorsement, we coordinate review by a Singapore-registered PE and quote those fees separately. Your licensed electrical worker stays responsible for the installation as EMA requires.' }

const steps = [
  { title: 'Share the drawings', text: 'Architectural plans, the specification, equipment loads and your submission or construction date.' },
  { title: 'Scope & quote', text: 'Systems, codes, deliverables and timeline confirmed in writing.' },
  { title: 'Calculate & design', text: 'Load schedules, cable sizing and layouts prepared to the agreed codes and coordinated with other services.' },
  { title: 'Review & hand over', text: 'Revisions within scope, PE review coordinated where needed, package handed over.' }
]

const related = [
  { to: '/case-studies/electrical', eyebrow: 'Case study', title: 'Electrical work with Newham', text: 'How Newham supports electrical contractors with estimation and engineering capacity.', cta: 'Read the case study' },
  { to: '/boq-estimation-services', eyebrow: 'Also from Newham', title: 'Electrical estimation & BOQ', text: 'Take-offs, priced BOQs and tender support for electrical and other M&E trades.', cta: 'BOQ services' },
  { to: '/shop-drawing-services', eyebrow: 'After award', title: 'Electrical shop drawings', text: 'Coordinated containment and shop drawings, and as-builts, in Revit MEP or AutoCAD.', cta: 'Shop drawing services' }
]

const faqs = [
  { q: 'Which code do you design electrical installations to?', a: 'SS 638, the Singapore code of practice for electrical installations, which EMA lists under the Electricity (Electrical Installations) Regulations and which replaced CP5. Other standards apply where the project specification calls for them.' },
  { q: 'Do you replace our licensed electrical worker?', a: 'No. EMA requires electrical installations to be tested and certified safe by a licensed electrical worker before the supply is turned on. We prepare the design and drawings; your LEW remains responsible for the installation and its certification.' },
  { q: 'Can you do cable sizing and single-line diagrams only?', a: 'Yes. We can deliver load schedules, single-line diagrams and cable schedules on their own, or the full layout package. The scope is agreed in writing first.' },
  { q: 'Do you coordinate containment with other services?', a: 'Yes. Containment routes are coordinated with the structure, ductwork and pipework, either on combined services drawings or in a federated Revit model.' },
  { q: 'Can you handle PE endorsement?', a: 'We coordinate review and endorsement by a Singapore-registered Professional Engineer where the submission needs it, and quote those fees separately.' },
  { q: 'How is the work priced?', a: 'Per deliverable, such as a set of single-line diagrams or a layout package, or as part of a monthly retainer. Billing is in SGD. Contact admin@newhamtech.com for a quote.' }
]
</script>
