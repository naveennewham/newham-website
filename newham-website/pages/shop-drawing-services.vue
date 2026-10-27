<template>
  <ServiceLanding
    path="/shop-drawing-services"
    seo-title="MEP shop drawing & as-built drafting services, Singapore"
    seo-description="Dedicated BIM modellers and drafters for M&E contractors: shop drawings, coordination models and as-built documentation in Revit MEP, AutoCAD and Navisworks."
    eyebrow="Shop drawings · coordination · as-builts"
    title="MEP shop drawings, coordination models and as-built drafting"
    lead="BIM modellers and drafters trained to Singapore submission standards, working on your projects in Revit MEP, AutoCAD and Navisworks — and in your own templates."
    cta="Book a discovery call"
    :chips="['Revit MEP', 'AutoCAD', 'Navisworks', 'Shop drawings', 'As-builts']"
    problem-eyebrow="Why contractors outsource drafting"
    problem-title="Drawings fall behind the programme"
    :problems="problems"
    scope-eyebrow="What our drafters produce"
    scope-title="From shop drawings to as-built records"
    scope-lead="Delivered by dedicated modellers and drafters who learn your standards, naming conventions and title blocks."
    :scope="scope"
    steps-title="A dedicated drafter, onboarded to your standards"
    :steps="steps"
    :related="related"
    faq-title="Shop drawing and drafting questions"
    :faqs="faqs"
    cta-title="Need drafting capacity for your next project?"
    cta-lead="Book a 30-minute call. Tell us the project, the software and the deliverables, and we will propose the right drafter or team."
    service-name="MEP shop drawing and as-built drafting"
    service-type="MEP drafting and BIM modelling"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-calendar-xmark', title: 'Shop drawings hold up site work', text: 'Installation waits for approved shop drawings, and revisions stack up when the design changes.' },
  { icon: 'fa-solid fa-diagram-project', title: 'Coordination takes skilled modellers', text: 'Clash-free services need modellers who understand each M&E trade, not just the software.' },
  { icon: 'fa-solid fa-box-archive', title: 'As-builts are left to the end', text: 'Record drawings get rushed at handover when the people who know the changes have moved on.' }
]

const scope = [
  { icon: 'fa-solid fa-pen-ruler', title: 'Shop drawings', text: 'M&E shop drawings prepared to your standards and to Singapore submission requirements.' },
  { icon: 'fa-solid fa-cubes', title: 'Coordination models', text: 'Services modelled in Revit MEP and coordinated in Navisworks with your project team.' },
  { icon: 'fa-solid fa-clipboard-check', title: 'As-built documentation', text: 'Record drawings that reflect what was installed, kept up to date as the project changes.' },
  { icon: 'fa-solid fa-layer-group', title: 'Your templates and tools', text: 'Your title blocks, layers, naming conventions and software — Revit MEP, AutoCAD and Navisworks.' }
]

const steps = [
  { title: 'Discovery call', text: 'The project, the software, the deliverables and the timeline.' },
  { title: 'Match & propose', text: 'A dedicated modeller or drafter, or a small team, confirmed in writing.' },
  { title: 'Onboarding', text: 'Your standards, templates, naming conventions and review process.' },
  { title: 'Delivery', text: 'Drawings and models delivered with revision cycles and regular reviews.' }
]

const related = [
  { to: '/talent-outsourcing', eyebrow: 'How engagement works', title: 'Engineering talent outsourcing', text: 'Single specialists, project teams or managed capacity, billed monthly.', cta: 'Talent outsourcing' },
  { to: '/fire-protection-design', eyebrow: 'Also from Newham', title: 'Fire protection design', text: 'Sprinkler design, hydraulic calculations and SCDF submission packages.', cta: 'Fire protection design' },
  { to: '/guides/mep-shop-drawings-singapore', eyebrow: 'Guide', title: 'MEP shop drawings in Singapore', text: 'What goes into MEP shop drawings, how they are coordinated and how the review cycle works.', cta: 'Read the guide' },
  { to: '/boq-estimation-services', eyebrow: 'Also from Newham', title: 'BOQ & estimation services', text: 'Take-offs, priced BOQs and tender support for M&E trades.', cta: 'BOQ services' }
]

const faqs = [
  { q: 'Which software do your drafters use?', a: 'Revit MEP, AutoCAD and Navisworks, working in your own templates and standards.' },
  { q: 'Do you provide one drafter or a team?', a: 'Either. Engage a single dedicated modeller or drafter, or a small project team for a peak.' },
  { q: 'Can your drafters work on our existing models?', a: 'Yes. They work in your files and templates, following your naming conventions and review process.' },
  { q: 'Which trades do you draft for?', a: 'M&E building services: fire protection, ACMV, ELV and wet services (plumbing and sanitary).' },
  { q: 'Do you prepare coordination drawings as well as shop drawings?', a: 'Yes. Our modellers build and coordinate the services in Revit MEP and Navisworks with your project team, and produce the shop drawings from the coordinated model.' },
  { q: 'How is it priced?', a: 'A dedicated drafter is billed monthly in SGD, with no recruitment or setup fees. Contact admin@newhamtech.com for a quote.' }
]
</script>
