<template>
  <DemoSimpleAppPage
    slug="deep-drive"
    :points="['Folders and uploads', 'View and download', 'Searchable by ARIVU']"
    features-title="Everything your project documents need"
    features-lead="A shared document store for your organisation — tender documents, drawings, cost sheets and project files in one place."
    :features="features"
    :extra-platform="[{ icon: 'fa-solid fa-wand-magic-sparkles', title: 'Searchable by ARIVU', text: 'Ask ARIVU to find and summarise the documents you store.' }]"
  >
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader eyebrow="Who it’s for" title="One document store for the whole organisation" lead="Deep Drive is for everyone who signs in to CCorex. Each team keeps its files in folders that match how it works." />
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="u in users" :key="u.title"><UiFeatureCard :icon="u.icon" :title="u.title" :text="u.text" /></li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" title="From upload to answer" lead="Set up folders once, upload as the work comes in, and find documents again by opening the folder or asking ARIVU." />
        <div class="mt-12"><UiStepFlow :steps="steps" /></div>
        <div class="mt-12 grid gap-4 lg:grid-cols-2">
          <div class="card">
            <p class="font-semibold text-ink-900"><i class="fa-solid fa-wand-magic-sparkles mr-2 text-brand-600" aria-hidden="true"></i>Ask ARIVU about your files</p>
            <p class="mt-2 text-sm text-ink-600">ARIVU, the AI assistant in every CCorex app, finds documents by meaning, not just keywords, and summarises them. It is read-only and every lookup stays inside your organisation. For example:</p>
            <ul class="mt-3 space-y-1.5 text-sm text-ink-700">
              <li v-for="q in questions" :key="q">“{{ q }}”</li>
            </ul>
          </div>
          <div class="card">
            <p class="font-semibold text-ink-900"><i class="fa-solid fa-file-pen mr-2 text-brand-600" aria-hidden="true"></i>Store here, mark up in PDF Editor</p>
            <p class="mt-2 text-sm text-ink-600">Deep Drive stores your project documents; <NuxtLink to="/products/pdf-editor" class="font-semibold text-brand-700 hover:text-brand-900">PDF Editor</NuxtLink> marks up, signs, splits and merges PDFs. Both open from the same portal with the same users and roles, and both are included with every active subscription.</p>
          </div>
        </div>
      </div>
    </section>

    <template #end>
      <section class="section-tight">
        <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <UiSectionHeader eyebrow="FAQ" title="Questions about Deep Drive" lead="Anything else? Email admin@newhamtech.com or book a demo." />
          <UiFaqList :items="faqs" />
        </div>
      </section>
    </template>
  </DemoSimpleAppPage>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Deep Drive — construction document storage',
  description: 'Deep Drive is CCorex’s document store for construction teams: folders, uploads, inline viewing and storage tracking, with the same sign-in and roles.',
  ogTitle: 'Deep Drive — document storage in CCorex',
  ogDescription: 'Folders, uploads, inline viewing and storage tracking for your organisation — searchable by ARIVU AI.'
})
useHead({ link: [{ rel: 'canonical', href: `${config.public.siteUrl}/products/deep-drive` }] })

const features = [
  { icon: 'fa-solid fa-folder-tree', title: 'Folders', text: 'Organise files by project, tender or department.' },
  { icon: 'fa-solid fa-cloud-arrow-up', title: 'Upload files and folders', text: 'Upload single files or whole folders at once.' },
  { icon: 'fa-solid fa-eye', title: 'View inline', text: 'Open documents in the browser, or download them.' },
  { icon: 'fa-solid fa-arrows-up-down-left-right', title: 'Copy, move and rename', text: 'Keep the structure tidy as projects change.' },
  { icon: 'fa-solid fa-trash-can', title: 'Delete safely', text: 'Remove files and folders you no longer need.' },
  { icon: 'fa-solid fa-chart-pie', title: 'Storage used', text: 'See how much storage your organisation uses.' },
  { icon: 'fa-solid fa-magnifying-glass', title: 'Document search', text: 'ARIVU can search the files you store and summarise them.' },
  { icon: 'fa-solid fa-lock', title: 'Kept per organisation', text: 'Your documents are separated from every other organisation.' }
]

const users = [
  { icon: 'fa-solid fa-diagram-project', title: 'Project managers', text: 'Drawings, submittals and project files in a folder per project, on the same sign-in as DeepTrack.' },
  { icon: 'fa-solid fa-ruler-combined', title: 'Tender teams', text: 'Tender documents and drawings kept together in a folder per tender.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: 'Procurement & finance', text: 'Cost sheets and project documents in one store shared across the organisation.' },
  { icon: 'fa-solid fa-id-card', title: 'HR & admin', text: 'Department folders for the files HR and admin keep, opened from the same portal as DeepHR.' }
]
const steps = [
  { title: 'Open Deep Drive', text: 'From the CCorex portal at dash.ccorex.com, already signed in.' },
  { title: 'Set up folders', text: 'By project, tender or department.' },
  { title: 'Upload', text: 'Single files, or whole folders at once.' },
  { title: 'View or download', text: 'Open documents in the browser, or download them.' },
  { title: 'Keep it tidy', text: 'Copy, move, rename or delete as projects change.' },
  { title: 'Ask ARIVU', text: 'Find and summarise the documents you store.' }
]
const questions = [
  'Find the latest approved shop drawings for Block B.',
  'Which documents mention the fire-alarm interface?'
]
const faqs = [
  { q: 'Is Deep Drive included in our subscription?', a: 'Yes. Deep Drive and PDF Editor are included with every active CCorex subscription, with no separate purchase.' },
  { q: 'What should we keep in Deep Drive?', a: 'Tender documents, drawings, submittals, cost sheets and other project files, organised in folders by project, tender or department.' },
  { q: 'Who can see our files?', a: 'Each organisation’s files are kept separate from every other organisation. People and access are managed once, centrally, with the same users and roles as the other CCorex apps.' },
  { q: 'Can ARIVU search Deep Drive?', a: 'Yes. ARIVU finds Deep Drive files by meaning, not just keywords, and can summarise them. It is read-only, so it never changes your files. Deep Drive search in ARIVU grows as Deep Drive moves from development to production.' },
  { q: 'Do we need a separate login?', a: 'No. Deep Drive opens from the CCorex portal at dash.ccorex.com with the same sign-in as DeepCost, DeepTrack and DeepHR.' }
]
</script>
