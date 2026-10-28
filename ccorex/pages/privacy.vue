<template>
  <div>
    <section class="bg-hero text-white">
      <div class="container-site py-16 sm:py-20">
        <p class="eyebrow text-cyan-300">Legal</p>
        <h1 class="mt-3 text-4xl font-extrabold text-white sm:text-5xl">Privacy policy</h1>
        <p class="lead-dark mt-4 max-w-2xl">How Newham Solutions Pte. Ltd. handles personal data on ccorex.com.</p>
      </div>
    </section>
    <section class="section">
      <div class="container-site prose-legal max-w-3xl">
        <h2>Who we are</h2>
        <p>ccorex.com is run by Newham Solutions Pte. Ltd. (“Newham”, “we”). CCorex is a Newham product. For anything about your personal data, contact our Data Protection Officer at <a href="mailto:admin@newhamtech.com">admin@newhamtech.com</a>.</p>

        <h2>What we collect</h2>
        <ul>
          <li><strong>What you send us</strong> in a form: your name, work email, company, role, phone number, company size, the apps you're interested in and your message.</li>
          <li><strong>How you found us</strong>, only if you accept marketing cookies: the campaign or ad that brought you (for example utm parameters or a Google Ads click id), the page you landed on and the site that referred you. We keep this for up to 90 days in a cookie on your device and attach it to an enquiry you send.</li>
          <li><strong>How the site is used</strong>, only if you accept analytics cookies: pages visited, how you arrived and device type, through Google Analytics.</li>
        </ul>

        <h2>Why we use it</h2>
        <ul>
          <li>To reply to your enquiry and, if you ask, arrange a demo.</li>
          <li>To understand which pages and campaigns lead to enquiries, so we can improve the site and our advertising.</li>
        </ul>
        <p>We don't sell personal data. We don't use your enquiry details for anything you didn't ask for.</p>

        <h2>Cookies</h2>
        <p>Essential cookies keep the site working and remember your cookie choice. Analytics and marketing cookies are off until you accept them, and you can change your choice at any time from “Cookie settings” in the footer. Turning marketing cookies off deletes the campaign cookie.</p>

        <h2>Who processes it for us</h2>
        <ul>
          <li>Google (Google Analytics and Google Ads), if you accept those cookies.</li>
          <li>Apollo.io, if you accept marketing cookies: it identifies the company a business visitor's network belongs to, and which pages that company viewed, so we can follow up with businesses interested in our services.</li>
          <li>Vercel, which hosts this website.</li>
          <li>Cloudflare, which hosts the system where we keep enquiries.</li>
        </ul>

        <h2>How long we keep it</h2>
        <p>Enquiries are kept for 24 months unless a customer relationship follows. The campaign cookie expires after 90 days.</p>

        <h2>Your rights</h2>
        <p>You can ask to see, correct or delete the personal data we hold about you, and withdraw your consent at any time. Email <a href="mailto:admin@newhamtech.com">admin@newhamtech.com</a> and we will respond within 30 days.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy policy: how CCorex handles personal data',
  ogTitle: 'Privacy policy | CCorex',
  ogDescription: 'How Newham Solutions Pte. Ltd. handles personal data on ccorex.com.',
  description: 'How Newham Solutions Pte. Ltd. collects, uses and protects personal data on ccorex.com, including cookies and enquiry forms.',
})
useHead({ link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}/privacy` }] })
</script>

<style scoped>
.prose-legal :deep(h2) { @apply mt-10 text-xl font-bold text-ink-900 first:mt-0; }
.prose-legal :deep(p), .prose-legal :deep(li) { @apply mt-3 text-ink-700 leading-relaxed; }
.prose-legal :deep(ul) { @apply mt-2 list-disc space-y-1 pl-6; }
.prose-legal :deep(a) { @apply font-semibold text-brand-700 underline underline-offset-2; }
</style>
