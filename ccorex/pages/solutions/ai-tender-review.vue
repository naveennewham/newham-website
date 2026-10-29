<template>
  <SolutionLanding
    slug="ai-tender-review"
    app="deepcost"
    app-name="DeepCost"
    eyebrow="AI tender review · Singapore"
    seo-title="AI Tender Review: Summarise Tender Documents in Minutes"
    seo-description="AI tender review for Singapore contractors: DeepCost reads the tender documents and fills a tender summary of scope, closing date, payment terms, bonds and DLP for your review."
    h1="AI tender review for Singapore contractors"
    lead="Upload the tender documents and DeepCost’s AI tender summary answers a set of questions from them: tender reference and closing date, client and consultant, scope, standards, payment terms, performance bond, insurance and defects liability period. Your estimator checks every answer before the bid is priced."
    :hero-points="['Answers from the tender documents', 'Questions grouped by category', 'Edit and refine', 'Export to Excel or PDF']"
    problem-title="Reading the tender takes days you don’t have"
    :problems="problems"
    flow-title="From tender documents to a reviewed summary"
    :flow="flow"
    feature-title="What estimators and managers get"
    :features="features"
    checklist-title="What to look for in AI tender review"
    checklist-lead="AI is only useful on a tender if you can check where each answer came from and keep control of the bid. Here is how DeepCost handles it."
    :checklist="checklist"
    :guide-links="guides"
    :faqs="faqs"
    sub-category="AI tender analysis"
    cta-title="See a tender summarised in DeepCost"
    cta-lead="Bring a recent tender to a 30-minute demo. We will upload the documents, generate the summary and walk through pricing it."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-file-lines', title: 'Hundreds of pages per tender', text: 'Specifications, conditions and drawings are read page by page before a single quantity is measured.' },
  { icon: 'fa-solid fa-triangle-exclamation', title: 'Commercial terms found late', text: 'Payment terms, bonds, insurance and the defects liability period surface after the bid is already priced.' },
  { icon: 'fa-solid fa-people-arrows', title: 'Go/no-go on a hunch', text: 'Managers decide whether to bid without a short, consistent view of what the tender asks for.' }
]
const flow = [
  { title: 'Upload documents', text: 'Against the tender in DeepCost.', icon: 'fa-solid fa-inbox' },
  { title: 'AI tender summary', text: 'Each question answered from the documents.', icon: 'fa-solid fa-wand-magic-sparkles' },
  { title: 'Estimator review', text: 'Answers edited and prompts refined.', icon: 'fa-solid fa-user-pen' },
  { title: 'Export', text: 'Summary to Excel or PDF.', icon: 'fa-solid fa-file-export' },
  { title: 'Price the tender', text: 'Take-off and Form of Tender.', icon: 'fa-solid fa-calculator' }
]
const features = [
  { icon: 'fa-solid fa-list-check', title: 'A consistent set of questions', text: 'Questions are grouped by category, such as general tender information, scope, specifications, commercial terms and schedule, so every tender is read the same way.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Answers from your documents', text: 'The summary is filled from the documents uploaded against that tender, not from the open internet.' },
  { icon: 'fa-solid fa-user-pen', title: 'Edit and refine', text: 'Estimators edit any answer and refine the prompts, then regenerate.' },
  { icon: 'fa-solid fa-file-export', title: 'Excel and PDF export', text: 'Share the reviewed summary with managers for the go/no-go decision.' },
  { icon: 'fa-solid fa-user-lock', title: 'Role permissions', text: 'Separate permissions switch AI chat, the tender summary and FOT AI on or off by role.' },
  { icon: 'fa-solid fa-comments', title: 'ARIVU in every plan', text: 'Ask ARIVU, the CCorex AI assistant, follow-up questions in plain language.' }
]
const checklist = [
  { need: 'Answers you can check', how: 'Each answer comes from the tender documents you uploaded, and your estimator reviews and edits it before it is used.' },
  { need: 'The commercial terms up front', how: 'Payment terms, performance bond, insurance, defects liability period and completion timeline are among the questions answered.' },
  { need: 'The same questions every time', how: 'A set of questions grouped by category, so tenders can be compared on the same basis.' },
  { need: 'Control over who uses AI', how: 'Role permissions switch the tender summary, FOT AI and AI chat on or off.' },
  { need: 'Straight into pricing', how: 'The same tender moves on to take-off by area, pricing from your library and the Form of Tender in DeepCost.' }
]
const guides = [
  { to: '/resources/ai-for-construction-contractors-singapore', title: 'AI for construction contractors in Singapore' },
  { to: '/resources/mep-estimating-checklist', title: 'MEP estimating checklist' },
  { to: '/resources/fire-protection-estimating', title: 'How to estimate a fire protection tender' },
  { to: '/solutions/tender-estimating-software', title: 'Tender estimating software' }
]
const faqs = [
  { q: 'What does the AI tender summary do?', a: 'It reads the documents uploaded against a tender and answers a set of questions grouped by category, such as the tender reference, closing date, client and consultant, scope of works, standards, payment terms, performance bond, insurance and defects liability period. You can edit the answers, refine the prompts and export the summary to Excel or PDF.' },
  { q: 'Does the AI price the tender?', a: 'No. The summary helps your team read the tender faster. Quantities are taken off by area and priced from your own library, and FOT AI fills your prices onto the client’s BOQ. Your estimator reviews and approves every figure.' },
  { q: 'Where does the AI get its answers?', a: 'From the documents uploaded against that tender. If something is not in the documents, it should be checked with the client or consultant before you rely on it.' },
  { q: 'Can we turn the AI features off for some users?', a: 'Yes. Separate role permissions switch AI chat, the tender summary and FOT AI on or off.' },
  { q: 'How is DeepCost priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
