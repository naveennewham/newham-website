<template>
  <DemoSimpleAppPage
    slug="pdf-editor"
    :points="['Mark up and sign', 'Split and merge', 'Export annotated PDFs']"
    features-title="Mark up, sign and finish documents"
    features-lead="Annotate drawings, forms and submittals, sign them and send them on — without switching to another tool."
    :features="features"
  >
    <section class="section bg-ink-50">
      <div class="container-site">
        <UiSectionHeader eyebrow="Who it’s for" title="For office and project staff who finish documents" lead="Anyone who has to read, annotate or sign a PDF before it goes out can do it in PDF Editor, on the same sign-in as the rest of CCorex." />
        <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="u in users" :key="u.title"><UiFeatureCard :icon="u.icon" :title="u.title" :text="u.text" /></li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container-site">
        <UiSectionHeader center eyebrow="How it works" title="From PDF received to finished file" lead="Open the document, add what it needs, sign it, and export the annotated PDF — with its status showing where it is up to." />
        <div class="mt-12"><UiStepFlow :steps="steps" /></div>
        <ul class="mt-10 grid gap-4 sm:grid-cols-3">
          <li v-for="n in notes" :key="n.title" class="flex gap-3">
            <span class="icon-tile h-9 w-9 shrink-0 text-sm"><i :class="n.icon" aria-hidden="true"></i></span>
            <div><p class="font-semibold text-ink-900">{{ n.title }}</p><p class="text-sm text-ink-600">{{ n.text }} <NuxtLink v-if="n.to" :to="n.to" class="font-semibold text-brand-700 hover:text-brand-900">See Deep Drive</NuxtLink></p></div>
          </li>
        </ul>
      </div>
    </section>

    <template #end>
      <section class="section-tight">
        <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <UiSectionHeader eyebrow="FAQ" title="Questions about PDF Editor" lead="Anything else? Email admin@newhamtech.com or book a demo." />
          <UiFaqList :items="faqs" />
        </div>
      </section>
    </template>
  </DemoSimpleAppPage>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'PDF Editor — mark up and sign construction PDFs',
  description: 'The CCorex PDF Editor lets office and project staff mark up, sign, split and merge PDFs, then export the finished file, with the same sign-in and roles.',
  ogTitle: 'PDF Editor — mark up and sign construction PDFs | CCorex',
  ogDescription: 'The CCorex PDF Editor lets office and project staff mark up, sign, split and merge PDFs, then export the finished file, with the same sign-in and roles.'
})
useHead({ link: [{ rel: 'canonical', href: `${config.public.siteUrl}/products/pdf-editor` }] })

const features = [
  { icon: 'fa-solid fa-magnifying-glass-plus', title: 'View with zoom', text: 'Read PDFs page by page and zoom into details.' },
  { icon: 'fa-solid fa-font', title: 'Add text', text: 'Type notes and comments anywhere on the page.' },
  { icon: 'fa-solid fa-signature', title: 'Sign', text: 'Draw or upload signatures and reuse them from your library.' },
  { icon: 'fa-regular fa-image', title: 'Add images', text: 'Place stamps and images; remove an image’s background.' },
  { icon: 'fa-solid fa-layer-group', title: 'Page overlays', text: 'Apply an overlay to every page, or remove it from every page.' },
  { icon: 'fa-solid fa-object-ungroup', title: 'Split and merge', text: 'Break a PDF apart or combine several into one.' },
  { icon: 'fa-solid fa-list-check', title: 'Document status', text: 'Move documents from draft to published to completed.' },
  { icon: 'fa-solid fa-file-export', title: 'Export', text: 'Download the finished, annotated PDF.' }
]

const users = [
  { icon: 'fa-solid fa-ruler-combined', title: 'Estimation & QS', text: 'Annotate drawings and tender PDFs with notes, then split out or merge the files you need.' },
  { icon: 'fa-solid fa-diagram-project', title: 'Project managers', text: 'Mark up submittals and forms, sign them and send them on.' },
  { icon: 'fa-solid fa-helmet-safety', title: 'Site supervisors', text: 'Add notes and a signature to forms, then export the finished PDF.' },
  { icon: 'fa-solid fa-building', title: 'Office staff', text: 'Sign, stamp and combine documents, and keep track of which are completed.' }
]
const steps = [
  { title: 'Open the PDF', text: 'Read it page by page and zoom into details.' },
  { title: 'Mark it up', text: 'Type notes anywhere; place stamps and images.' },
  { title: 'Add an overlay', text: 'Apply one to every page, or remove it from every page.' },
  { title: 'Sign', text: 'Draw or upload a signature, or reuse one from your library.' },
  { title: 'Split or merge', text: 'Break the PDF apart, or combine several into one.' },
  { title: 'Finish and export', text: 'Move it from draft to published to completed, and download the annotated PDF.' }
]
const notes = [
  { icon: 'fa-solid fa-signature', title: 'Signature library', text: 'Save a drawn or uploaded signature once and reuse it on later documents.' },
  { icon: 'fa-regular fa-image', title: 'Clean images', text: 'Remove an image’s background before you place it on the page.' },
  { icon: 'fa-solid fa-folder-open', title: 'Works with Deep Drive', text: 'Deep Drive stores project documents; PDF Editor marks up and signs PDFs. Both use the same sign-in.', to: '/products/deep-drive' }
]
const faqs = [
  { q: 'What is the CCorex PDF Editor?', a: 'PDF Editor marks up and signs PDFs in CCorex: text, signatures, images, overlays, split and merge, with draft, published and completed states and an export of the annotated PDF.' },
  { q: 'Is PDF Editor included in our subscription?', a: 'Yes. PDF Editor and Deep Drive are included with every active CCorex subscription, with no separate purchase.' },
  { q: 'Can we reuse signatures?', a: 'Yes. Draw or upload a signature and keep it in your signature library, then reuse it on later documents.' },
  { q: 'Can we combine PDFs or break one apart?', a: 'Yes. Merge combines several PDFs into one, and split breaks a PDF apart.' },
  { q: 'Can we see which documents are finished?', a: 'Yes. Each document moves from draft to published to completed, so you can see where it is up to.' },
  { q: 'Do we need a separate login?', a: 'No. PDF Editor opens from the CCorex portal at dash.ccorex.com with the same sign-in, users and roles as the other CCorex apps, and each organisation’s files are kept separate.' }
]
</script>
