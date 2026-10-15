<template>
  <DemoSimpleAppPage
    slug="deep-drive"
    :points="['Folders and uploads', 'View and download', 'Searchable by ARIVU']"
    features-title="Everything your project documents need"
    features-lead="A shared document store for your organisation — tender documents, drawings, cost sheets and project files in one place."
    :features="features"
    :extra-platform="[{ icon: 'fa-solid fa-wand-magic-sparkles', title: 'Searchable by ARIVU', text: 'Ask ARIVU to find and summarise the documents you store.' }]"
  />
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
</script>
