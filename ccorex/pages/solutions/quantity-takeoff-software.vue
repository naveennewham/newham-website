<template>
  <SolutionLanding
    slug="quantity-takeoff-software"
    app="deepplan-ai"
    app-name="DeepPlan AI"
    eyebrow="Quantity take-off · Singapore"
    seo-title="Quantity take-off software for PDF drawings, Singapore"
    seo-description="Quantity take-off software for Singapore MEP contractors: upload PDF drawings, calibrate the scale, measure rooms, price from a rate library and export the BOQ. AI take-off in early access."
    h1="Quantity take-off software for PDF drawings"
    lead="DeepPlan AI measures PDF drawings and turns the quantities into a priced BOQ: upload the drawings, calibrate the scale, outline and measure rooms, assign them to floors, then price them from your rate library. AI room take-off and symbol detection are in early access."
    :hero-points="['PDF drawings to 300-dpi pages', 'Scale calibration', 'Rooms and measurements editor', 'Rate library and BOQ export']"
    problem-title="Take-off is where tender time goes"
    :problems="problems"
    flow-title="From PDF drawing to priced BOQ"
    :flow="flow"
    feature-title="What estimators use today"
    :features="features"
    checklist-title="What to look for in quantity take-off software"
    checklist-lead="Take-off software is only as good as its scale, its measurements and the link from quantities to prices. Here is where DeepPlan AI stands on each."
    :checklist="checklist"
    :early-access="['ai-room-takeoff', 'ai-symbol-detection']"
    early-access-title="AI take-off: join early access"
    early-access-eyebrow="DeepPlan AI · early access"
    :guide-links="guides"
    :faqs="faqs"
    sub-category="Quantity take-off"
    cta-title="Measure one of your drawings with us"
    cta-lead="Bring a PDF drawing to a 30-minute demo. We will calibrate the scale, measure rooms and generate a BOQ with you, and show where AI take-off stands."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-ruler', title: 'Scaling by hand', text: 'Room areas, perimeters and wall lengths scaled and measured floor by floor, often from PDFs printed at the wrong size.' },
  { icon: 'fa-solid fa-hand-pointer', title: 'Counting symbol by symbol', text: 'Light fittings, detectors, call points and boards counted sheet by sheet, then checked again.' },
  { icon: 'fa-solid fa-table-cells', title: 'Quantities re-keyed', text: 'Measurements copied from mark-ups into spreadsheets, then again into the BOQ, with an error risk at every step.' }
]
const flow = [
  { title: 'Upload drawings', text: 'Each PDF page becomes a 300-dpi image.', icon: 'fa-solid fa-file-arrow-up' },
  { title: 'Calibrate scale', text: 'Set once; your scale always wins.', icon: 'fa-solid fa-ruler-combined' },
  { title: 'Measure rooms', text: 'Magic wand outline or manual measurement.', icon: 'fa-solid fa-wand-magic' },
  { title: 'Assign', text: 'Floors and area categories.', icon: 'fa-solid fa-layer-group' },
  { title: 'Price and export', text: 'Rates from your library, editable BOQ.', icon: 'fa-solid fa-file-export' }
]
const features = [
  { icon: 'fa-solid fa-folder-open', title: 'Projects and drawing upload', text: 'PDFs are turned into one 300-dpi image per page, with a page rail showing each page and its processing status.' },
  { icon: 'fa-solid fa-ruler-combined', title: 'Scale calibration', text: 'Set one scale in pixels per metre. Changing it recalculates every room area and perimeter.' },
  { icon: 'fa-solid fa-wand-magic', title: 'Rooms and measurements editor', text: 'Layers, rooms and measurements with undo/redo, a one-click magic wand to outline a room, manual measurements and CSV export.' },
  { icon: 'fa-solid fa-layer-group', title: 'Area schedule', text: 'Rooms assigned to floors and area categories, so quantities are organised the way the BOQ is.' },
  { icon: 'fa-solid fa-book', title: 'Per-client rate library', text: 'Unit rates per client fill the BOQ lines.' },
  { icon: 'fa-solid fa-file-export', title: 'BOQ generation and export', text: 'Line items built from assigned rooms and counts, priced from the library, edited and exported.' }
]
const checklist = [
  { need: 'Measuring from PDF drawings', how: 'Each uploaded PDF page becomes a 300-dpi image you measure on, with a page rail showing each page.' },
  { need: 'A scale you can trust', how: 'You set the scale once per drawing. Your scale always overrides one derived from the drawing, and changing it recalculates areas and perimeters.' },
  { need: 'Area and length measurement', how: 'A magic wand outlines a room in one click; manual measurements, layers and undo/redo cover the rest, with CSV export.' },
  { need: 'Quantities organised for the BOQ', how: 'Rooms are assigned to floors and area categories in an area schedule.' },
  { need: 'From quantities to prices', how: 'A per-client rate library fills the BOQ lines, which you edit before export.' },
  { need: 'Automatic room and symbol take-off', how: 'Automatic room outlines with OCR labels, and detection of 23 electrical and fire symbol classes, are being rebuilt and are not live in production.', early: true }
]
const guides = [
  { to: '/resources/quantity-takeoff-methods', title: 'Quantity takeoff methods: manual, digital and AI' },
  { to: '/resources/how-to-prepare-a-boq', title: 'How to prepare a BOQ' },
  { to: '/resources/mep-estimating-checklist', title: 'MEP estimating checklist' },
  { to: '/products/deepplan-ai', title: 'DeepPlan AI: drawing take-off and BOQ' }
]
const faqs = [
  { q: 'What is quantity take-off software?', a: 'It is software for measuring lengths, areas and counts from construction drawings on screen, so the quantities can be priced into a BOQ. DeepPlan AI does this from PDF drawings, with scale calibration, a rooms and measurements editor, a rate library and BOQ export.' },
  { q: 'Is the AI take-off live?', a: 'Not in production yet. Drawing upload, scale calibration, the rooms and measurements editor, the area schedule, the rate library and BOQ generation are live today. AI room take-off and symbol detection are in early access while they are rebuilt.' },
  { q: 'Can I measure PDF drawings?', a: 'Yes. Upload the PDF and each page becomes a 300-dpi image. Calibrate the scale against a known dimension, then outline rooms with the magic wand or measure manually.' },
  { q: 'Does DeepPlan AI replace our estimators?', a: 'No. Your estimator measures, checks and corrects every room and quantity in the drawing editor, and edits the BOQ lines before export.' },
  { q: 'How does DeepPlan AI work with DeepCost?', a: 'In the CCorex tender flow, drawings are measured in DeepPlan and the priced bid goes out from DeepCost, on the same sign-in. ARIVU can answer questions across DeepPlan projects, drawings and BOQs.' },
  { q: 'Which plan includes DeepPlan AI?', a: 'DeepPlan AI is included in the Enterprise plan, which covers the full CCorex suite. Ask us for a tailored quote.' }
]
</script>
