<template>
  <div>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative py-16 lg:py-20">
        <p class="eyebrow-dark">Contact</p>
        <h1 class="h-display mt-4 max-w-3xl text-white">Talk to Newham</h1>
        <p class="lead-dark mt-6 max-w-2xl">Questions about CCorex, dedicated engineers or an engineering package? Send us a message, or book a discovery call directly.</p>
      </div>
    </section>

    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div class="card p-6 sm:p-8">
          <h2 class="text-2xl font-bold">Send a message</h2>
          <form class="mt-6 space-y-5" @submit.prevent="submitForm">
            <input v-model="formData.website_url" type="text" name="website_url" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label for="name" class="field-label">Your name</label>
                <input id="name" v-model="formData.name" type="text" required autocomplete="name" class="field" />
              </div>
              <div>
                <label for="email" class="field-label">Work email</label>
                <input id="email" v-model="formData.email" type="email" required autocomplete="email" class="field" />
              </div>
            </div>
            <div>
              <label for="subject" class="field-label">What is it about?</label>
              <select id="subject" v-model="formData.subject" required class="field">
                <option value="" disabled>Select a topic</option>
                <option v-for="t in topics" :key="t" :value="t">{{ t }}</option>
              </select>
            </div>
            <div>
              <label for="message" class="field-label">Message</label>
              <textarea id="message" v-model="formData.message" rows="5" required class="field" placeholder="Tell us about your projects, team and what you need."></textarea>
            </div>
            <label class="flex items-start gap-3 text-sm text-ink-600">
              <input v-model="formData.consent" type="checkbox" required class="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-700 focus:ring-brand-500" />
              <span>I agree that Newham may contact me about this enquiry. If I accepted marketing cookies, Newham also records how I found the site. See the <NuxtLink to="/privacy" class="font-semibold text-brand-700 underline">privacy policy</NuxtLink>.</span>
            </label>
            <button type="submit" class="btn-primary w-full sm:w-auto" :disabled="isSubmitting">
              <i v-if="isSubmitting" class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>
              {{ isSubmitting ? 'Sending…' : 'Send message' }}
            </button>
            <p v-if="formSubmitted" role="status" class="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">Thank you. Your message has been sent and we will reply by email.</p>
            <p v-if="submitError" role="alert" class="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">{{ submitError }}</p>
          </form>
        </div>

        <aside class="space-y-6">
          <div class="card bg-brand-950 text-white">
            <p class="eyebrow-dark">Prefer a call?</p>
            <h2 class="mt-2 text-xl font-bold text-white">Book a 30-minute discovery call</h2>
            <p class="mt-2 text-sm text-ink-200">Pick a date and time; we confirm by email.</p>
            <NuxtLink to="/appointment" class="btn-accent mt-5">Book a discovery call</NuxtLink>
          </div>
          <div class="card">
            <h2 class="text-base font-semibold">Email</h2>
            <p class="mt-2 text-sm"><a href="mailto:admin@newhamtech.com" class="font-semibold text-brand-700 hover:text-brand-900">admin@newhamtech.com</a></p>
            <h2 class="mt-6 text-base font-semibold">Offices</h2>
            <p class="mt-2 text-sm text-ink-600"><span class="font-semibold text-ink-900">Singapore</span><br />160 Robinson Road, #14-04 SBF Center, Singapore</p>
            <p class="mt-3 text-sm text-ink-600"><span class="font-semibold text-ink-900">Chennai, India</span><br />3rd Floor, Plot no. 21, Perungudi, OMR, Chennai, Tamil Nadu 600096</p>
            <h2 class="mt-6 text-base font-semibold">CCorex users</h2>
            <p class="mt-2 text-sm text-ink-600">Sign in at <a :href="CCOREX_SIGNIN_URL" class="font-semibold text-brand-700 hover:text-brand-900">dash.ccorex.com</a>.</p>
          </div>
        </aside>
      </div>
    </section>

    <UiCtaBand title="Not sure where to start?" lead="A discovery call is the quickest way to find the right mix of software, people and services for your pipeline." secondary-label="Our services" secondary-to="/services" />
  </div>
</template>

<script setup lang="ts">
import { CCOREX_SIGNIN_URL } from '~/data/ccorex'

const siteUrl = useRuntimeConfig().public.siteUrl as string
useSeoMeta({
  title: 'Contact Newham: construction software and M&E engineers',
  description: 'Contact Newham Technological Solutions about CCorex construction software, dedicated M&E engineers or fire protection and commercial engineering services.',
  ogTitle: 'Contact Newham',
  ogDescription: 'Send us a message or book a 30-minute discovery call.',
  ogUrl: siteUrl + '/contact'
})
useHead({ link: [{ rel: 'canonical', href: siteUrl + '/contact' }] })

const topics = ['CCorex software', 'Engineering talent outsourcing', 'Construction engineering services', 'Partnership', 'Something else']

// Same payload as before: { name, email, subject, message, consent }.
const emptyForm = () => ({ name: '', email: '', subject: '', message: '', consent: false, website_url: '' })
const formData = ref(emptyForm())
const isSubmitting = ref(false)
const formSubmitted = ref(false)
const submitError = ref('')
const { $track } = useNuxtApp()

const submitForm = async () => {
  isSubmitting.value = true
  submitError.value = ''
  try {
    // Our server route stores the enquiry in the CRM and still notifies the team as before.
    await $fetch('/api/lead', { method: 'POST', body: { ...formData.value, form: 'contact', pagesViewed: $track.pagesViewed() } })
    $track.lead('contact')
    formSubmitted.value = true
    formData.value = emptyForm()
  } catch {
    submitError.value = 'Your message could not be sent. Please try again or email admin@newhamtech.com.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
