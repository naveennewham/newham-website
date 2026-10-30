<template>
  <ServiceLanding
    path="/sprinkler-hydraulic-calculation-services"
    seo-title="Fire sprinkler hydraulic calculation services, Singapore"
    seo-description="Sprinkler hydraulic calculation services for Singapore contractors: remote-area, node-by-node calculations to SS CP 52, demand against supply, fire pump duty and a report ready for SCDF submission."
    eyebrow="Sprinkler hydraulic calculations · Singapore"
    title="Fire sprinkler hydraulic calculation services in Singapore"
    lead="Send us the sprinkler layout and the water supply data. We calculate the hydraulically most remote area node by node, check demand against supply, set the fire pump duty and hand back a report a reviewer can trace, prepared to SS CP 52 and formatted for SCDF submission."
    cta="Send a layout to calculate"
    :chips="['SS CP 52', 'NFPA 13 where specified', 'Remote area', 'Fire pump duty', 'SCDF submission']"
    lottie="/lottie/blueprint.json"
    lottie-label="Illustration of an engineer drawing a blueprint"
    problem-eyebrow="Why contractors outsource hydraulic calculations"
    problem-title="The calculation is small, but it holds up the whole submission"
    :problems="problems"
    scope-eyebrow="What you receive"
    scope-title="A calculation package a reviewer can check line by line"
    scope-lead="Every figure traces back to a node on the drawing, a code requirement or the supply data you gave us."
    :scope="scope"
    :note="note"
    steps-title="From layout to calculation report"
    :steps="steps"
    :related="related"
    faq-title="Sprinkler hydraulic calculation questions"
    :faqs="faqs"
    cta-title="Have a sprinkler layout to calculate?"
    cta-lead="Share the layout, the hazard classification and the water supply data. We will confirm the scope, the code edition and the date we can deliver the report."
    service-name="Fire sprinkler hydraulic calculations"
    service-type="Fire protection engineering calculation"
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-location-crosshairs', title: 'The wrong remote area', text: 'The hydraulically most remote area is not always the one furthest away on plan. Picking the wrong one means the demand is understated and the report comes back.' },
  { icon: 'fa-solid fa-droplet-slash', title: 'Supply data that does not match', text: 'Calculations run on an assumed supply, or on a test that does not match the connection point, have to be redone once the real figures arrive.' },
  { icon: 'fa-solid fa-rotate', title: 'Layout changes after the calculation', text: 'Ceiling, partition and pipe-route changes move heads and nodes, and every change needs the affected areas recalculated before resubmission.' }
]

const scope = [
  { icon: 'fa-solid fa-location-crosshairs', title: 'Remote area selection', text: 'The hydraulically most remote design area for each hazard, with other candidate areas checked on large or irregular floors.' },
  { icon: 'fa-solid fa-diagram-project', title: 'Node diagram', text: 'Marked-up layout with every sprinkler, junction, change of pipe size and change of level numbered, so each line of the report can be found on the drawing.' },
  { icon: 'fa-solid fa-square-root-variable', title: 'Node-by-node calculation', text: 'Head flows from K-factor and pressure, Hazen-Williams friction loss, fittings and valves as equivalent lengths, and elevation gains and losses back to the source.' },
  { icon: 'fa-solid fa-chart-line', title: 'Demand against supply', text: 'System demand plotted against the water supply or town main test curve, with the safety margin the code requires shown on the graph.' },
  { icon: 'fa-solid fa-gears', title: 'Fire pump duty', text: 'The duty point the pump must meet, checked against the selected pump curve, with duty and standby arrangements confirmed.' },
  { icon: 'fa-solid fa-border-all', title: 'Tree, looped and gridded systems', text: 'Small tree systems by hand where that suits the review; looped and gridded systems balanced by iteration in calculation software and checked for sensible flows and velocities.' },
  { icon: 'fa-solid fa-code-compare', title: 'Recalculation after changes', text: 'Affected areas recalculated when the layout, ceiling heights or pipe routes change, with the revision recorded in the report.' },
  { icon: 'fa-solid fa-file-lines', title: 'Submission-ready report', text: 'Calculation sheets, the demand and supply graph and the marked-up drawings, formatted for SCDF submission with the code edition stated.' }
]

const note = { icon: 'fa-solid fa-stamp', title: 'PE endorsement', text: 'Newham prepares the calculations. Where a statutory submission needs Professional Engineer endorsement, we coordinate review by a Singapore-registered PE, so you receive one package. Endorsement fees are quoted separately.' }

const steps = [
  { title: 'Send the inputs', text: 'Sprinkler layout or the brief for one, sections, the hazard classification basis and the water supply or pump data.' },
  { title: 'Scope & quote', text: 'Areas to calculate, code edition, system types and delivery date confirmed in writing.' },
  { title: 'Calculate & check', text: 'Remote areas, node-by-node calculations and the demand and supply check, reviewed internally.' },
  { title: 'Report & revisions', text: 'Report and marked-up drawings issued, revisions within scope, PE review coordinated where needed.' }
]

const related = [
  { to: '/guides/sprinkler-hydraulic-calculations', eyebrow: 'Guide', title: 'How to calculate a fire sprinkler system', text: 'The method step by step, with a worked example for a three-head branch.', cta: 'Read the guide' },
  { to: '/guides/sprinkler-hazard-classification-singapore', eyebrow: 'Guide', title: 'Sprinkler hazard classification', text: 'How the hazard class sets the design density and area that the calculation starts from.', cta: 'Read the guide' },
  { to: '/fire-protection-design', eyebrow: 'Also from Newham', title: 'Fire protection design', text: 'Sprinkler layouts, fire alarm, riser, pump and gas suppression design for SCDF submission.', cta: 'Fire protection design' },
  { to: '/boq-estimation-services', eyebrow: 'Pricing the tender?', title: 'BOQ & estimation services', text: 'Take-offs and priced BOQs for fire protection and other M&E trades.', cta: 'BOQ services' }
]

const faqs = [
  { q: 'What is a sprinkler hydraulic calculation?', a: 'It proves that the water supply can deliver the flow and pressure the sprinkler system needs at its most demanding point. The calculation starts at the least favoured sprinkler in the hydraulically most remote design area and works back to the source, adding friction and elevation losses, then compares the total demand with the available supply.' },
  { q: 'Which code do you calculate to?', a: 'SS CP 52, the code of practice for automatic fire sprinkler systems that the SCDF Fire Code 2023 requires for sprinkler installations, with NFPA 13 only where the project specification calls for it. We state the code edition in the report and confirm it with you before we start.' },
  { q: 'What information do you need?', a: 'The sprinkler layout or the brief for one, sections or ceiling heights, the hazard classification basis, the pipe material, and the water supply data: a flow and pressure test at the connection point, or the tank and pump details. Missing supply data is the most common cause of rework.' },
  { q: 'Can you calculate looped and gridded systems?', a: 'Yes. Looped and gridded systems feed each head from more than one direction, so flows have to be balanced by iteration. We run them in calculation software and check the output for sensible flow directions and velocities before it goes into the report.' },
  { q: 'Can you size the fire pump?', a: 'Yes. The calculated system demand sets the duty point the pump has to meet. We check the selected pump curve against that demand and confirm duty and standby arrangements as part of the same package.' },
  { q: 'Do you recalculate when the layout changes?', a: 'Yes. Revisions within the agreed scope are included; larger changes to the layout are quoted before we start them, and every revision is recorded in the report.' },
  { q: 'Does Newham endorse the calculations as a PE?', a: 'No. Newham prepares the calculations and drawings. Where a statutory submission needs Professional Engineer endorsement, we coordinate review by a Singapore-registered PE and quote those fees separately.' },
  { q: 'How are hydraulic calculations priced?', a: 'Per calculation package, or as part of a monthly retainer if you have a steady pipeline. Billing is in SGD and the scope is confirmed in writing first. Email admin@newhamtech.com for a quote.' }
]
</script>
