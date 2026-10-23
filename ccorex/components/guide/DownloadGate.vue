<template>
  <div class="card border-brand-200">
    <p class="eyebrow flex items-center gap-2"><i class="fa-solid fa-file-excel text-emerald-600" aria-hidden="true"></i>Free download</p>
    <p class="mt-2 font-semibold text-ink-900">{{ title }}</p>

    <div v-if="done" class="mt-4" role="status">
      <p class="text-sm text-ink-700">Thanks, {{ form.name.split(' ')[0] }}. Your download is ready.</p>
      <a :href="file" download class="btn-primary mt-3 w-full"><i class="fa-solid fa-download text-xs" aria-hidden="true"></i> Download</a>
    </div>

    <form v-else class="mt-4 space-y-3" novalidate @submit.prevent="submit">
      <p class="text-sm text-ink-600">Tell us where to send updates and the file is yours.</p>
      <!-- Honeypot for bots: hidden from people and screen readers. -->
      <input v-model="form.website_url" type="text" name="website_url" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
      <div>
        <label :for="`dl-name-${guide}`" class="sr-only">Name</label>
        <input :id="`dl-name-${guide}`" v-model.trim="form.name" type="text" autocomplete="name" placeholder="Name" class="gate-input" />
      </div>
      <div>
        <label :for="`dl-email-${guide}`" class="sr-only">Work email</label>
        <input :id="`dl-email-${guide}`" v-model.trim="form.email" type="email" autocomplete="email" placeholder="Work email" class="gate-input" />
      </div>
      <div>
        <label :for="`dl-company-${guide}`" class="sr-only">Company (optional)</label>
        <input :id="`dl-company-${guide}`" v-model.trim="form.company" type="text" autocomplete="organization" placeholder="Company (optional)" class="gate-input" />
      </div>
      <label class="flex gap-2 text-[11px] leading-snug text-ink-600">
        <input v-model="form.consent" type="checkbox" class="mt-0.5 h-3.5 w-3.5 shrink-0 accent-brand-700" />
        <span>I agree that Newham Solutions Pte. Ltd. may email me about CCorex, under the PDPA. See our <NuxtLink to="/privacy" class="font-semibold text-brand-700 underline">privacy policy</NuxtLink>; unsubscribe any time.</span>
      </label>
      <p v-if="error" class="text-xs font-medium text-rose-600" role="alert">{{ error }}</p>
      <button type="submit" class="btn-primary w-full" :disabled="sending">{{ sending ? 'Sending…' : 'Get the template' }}</button>
    </form>
  </div>
</template>

<script setup lang="ts">
// A short form in front of a guide download. The lead goes to /api/lead (Markaiting + Netlify
// Forms email) as form "template_download"; the file link appears once it is accepted.
// Not sent to GA as generate_lead: downloads are not enquiries and must not count as conversions
// (GA's enhanced measurement already records the file_download).
const props = defineProps<{ file: string; title: string; guide: string }>()
const form = reactive({ name: '', email: '', company: '', consent: false, website_url: '' })
const sending = ref(false)
const done = ref(false)
const error = ref('')
const { $track } = useNuxtApp()

async function submit() {
  error.value = ''
  if (!form.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { error.value = 'Please enter your name and a valid email.'; return }
  if (!form.consent) { error.value = 'Please tick the box so we can email you.'; return }
  sending.value = true
  try {
    await $fetch('/api/lead', { method: 'POST', body: { ...form, form: 'template_download', subject: `Download: ${props.title}`, message: `Downloaded from /resources/${props.guide}`, pagesViewed: $track.pagesViewed() } })
    done.value = true
  } catch {
    error.value = 'Something went wrong. Please try again, or email admin@newhamtech.com.'
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.gate-input { @apply block w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100; }
/* .gate-input bundles bg-white via @apply, which the dark theme doesn't flip: give it a dark field. */
:global(html.dark .gate-input) { background-color: #0b171b; border-color: rgb(255 255 255 / .16); }
</style>
