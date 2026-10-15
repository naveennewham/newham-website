<template>
  <DemoSimpleAppPage
    slug="pdf-editor"
    :points="['Mark up and sign', 'Split and merge', 'Export annotated PDFs']"
    features-title="Mark up, sign and finish documents"
    features-lead="Annotate drawings, forms and submittals, sign them and send them on — without switching to another tool."
    :features="features"
  />
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'PDF Editor — mark up and sign construction PDFs',
  description: 'The CCorex PDF Editor lets office and project staff mark up, sign, split and merge PDFs, then export the finished document — with the same sign-in and roles.',
  ogTitle: 'PDF Editor — mark up and sign PDFs in CCorex',
  ogDescription: 'Text, signatures, images and overlays on any PDF; split, merge and export — part of the CCorex suite.'
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
</script>
