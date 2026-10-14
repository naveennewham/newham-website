<template>
  <div>
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative py-16 lg:py-20">
        <p class="eyebrow-dark">Discovery call</p>
        <h1 class="h-display mt-4 max-w-3xl text-white">Book a discovery call</h1>
        <p class="lead-dark mt-6 max-w-2xl">Thirty minutes on your project pipeline, systems and team. We will suggest the right mix of CCorex software, dedicated engineers and engineering services — no obligation.</p>
      </div>
    </section>

    <section class="section">
      <div class="container-site grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div class="card p-6 sm:p-8">
          <h2 class="text-2xl font-bold">Pick a time</h2>
          <form class="mt-6 space-y-5" @submit.prevent="submitAppointment">
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label for="name" class="field-label">Full name</label>
                <input id="name" v-model="form.name" type="text" required autocomplete="name" class="field" />
              </div>
              <div>
                <label for="email" class="field-label">Work email</label>
                <input id="email" v-model="form.email" type="email" required autocomplete="email" class="field" />
              </div>
            </div>
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label for="date" class="field-label">Preferred date</label>
                <input id="date" ref="dateInput" v-model="form.date" type="date" :min="today" required class="field" @focus="openDatePicker" />
              </div>
              <div>
                <label for="time" class="field-label">Preferred time</label>
                <select id="time" v-model="form.time" required class="field">
                  <option value="" disabled>Select a time slot</option>
                  <option v-for="slot in timeOptions" :key="slot" :value="slot">{{ slot }}</option>
                </select>
              </div>
            </div>
            <div>
              <label for="timezone" class="field-label">Timezone</label>
              <select id="timezone" v-model="form.timezone" class="field">
                <option value="" disabled>Select your timezone</option>
                <option v-for="tz in timezoneOptions" :key="tz" :value="tz">{{ tz }}</option>
              </select>
            </div>
            <div>
              <label for="context" class="field-label">What would you like to discuss?</label>
              <textarea id="context" v-model="form.context" rows="4" class="field" placeholder="Your projects, the tools you use today, and what you need help with."></textarea>
            </div>
            <label class="flex items-start gap-3 text-sm text-ink-600">
              <input v-model="form.consent" type="checkbox" required class="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-700 focus:ring-brand-500" />
              <span>I agree that Newham may contact me to arrange this call. If I accepted marketing cookies, Newham also records how I found the site. See the <NuxtLink to="/privacy" class="font-semibold text-brand-700 underline">privacy policy</NuxtLink>.</span>
            </label>
            <input v-model="form.website_url" type="text" name="website_url" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
            <button type="submit" class="btn-primary w-full sm:w-auto" :disabled="isSubmitting">
              <i v-if="isSubmitting" class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>
              {{ isSubmitting ? 'Sending…' : 'Request this time' }}
            </button>
            <p v-if="submitSuccess" role="status" class="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">Request sent. We will email you to confirm the meeting details.</p>
            <p v-if="submitError" role="alert" class="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">{{ submitError }}</p>
          </form>
        </div>

        <aside class="space-y-6">
          <div class="card">
            <h2 class="text-lg font-bold">What we will cover</h2>
            <ul class="mt-4 space-y-3 text-sm">
              <li v-for="c in agenda" :key="c" class="flex gap-2.5 text-ink-700"><i class="fa-solid fa-check mt-1 text-brand-600" aria-hidden="true"></i>{{ c }}</li>
            </ul>
          </div>
          <div class="card bg-ink-50">
            <h2 class="text-base font-semibold">Have a live tender?</h2>
            <p class="mt-2 text-sm text-ink-600">Mention it above. We can talk through how a take-off, BOQ or fire protection design would be scoped for it.</p>
          </div>
          <p class="text-sm text-ink-600">Prefer email? <a href="mailto:admin@newhamtech.com" class="font-semibold text-brand-700 hover:text-brand-900">admin@newhamtech.com</a></p>
        </aside>
      </div>
    </section>

    <UiCtaBand title="Questions before you book?" lead="Send us a message and we will reply by email, or read more about what we do." primary-label="Contact us" primary-to="/contact" secondary-label="Our services" secondary-to="/services" />
  </div>
</template>

<script setup lang="ts">
const siteUrl = useRuntimeConfig().public.siteUrl as string
useSeoMeta({
  title: 'Book a discovery call',
  description: 'Book a 30-minute discovery call with Newham about CCorex software, dedicated M&E engineers or fire protection and commercial engineering services.',
  ogTitle: 'Book a discovery call with Newham',
  ogDescription: 'Thirty minutes on your pipeline and team, with no obligation.',
  ogUrl: siteUrl + '/appointment'
})
useHead({ link: [{ rel: 'canonical', href: siteUrl + '/appointment' }] })

// The notification webhook still receives { name, email, date, time, timezone, context, consent }.
const form = reactive({ name: '', email: '', date: '', time: '', timezone: 'GMT+8 – Singapore, Hong Kong', context: '', consent: false, website_url: '' })
const { $track } = useNuxtApp()
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')
const dateInput = ref<HTMLInputElement | null>(null)
const today = new Date().toISOString().slice(0, 10)

const timeOptions = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30']
const timezoneOptions = [
  'GMT+8 – Singapore, Hong Kong',
  'IST (GMT+5:30) – India',
  'GMT+1 – UK, Lisbon (+1 in summer)',
  'CET (GMT+1) – Central Europe',
  'EST (GMT-5) – US East Coast',
  'PST (GMT-8) – US West Coast',
  'AEST (GMT+10) – Sydney, Melbourne'
]
const agenda = ['Your project pipeline and current workload', 'The tools and systems you use today', 'Where software, people or services would help most', 'Next steps and a written proposal if it fits']

const openDatePicker = () => {
  const el = dateInput.value as (HTMLInputElement & { showPicker?: () => void }) | null
  try { el?.showPicker?.() } catch { /* not supported */ }
}

const submitAppointment = async () => {
  if (!form.name || !form.email || !form.date || !form.time || !form.consent) return
  isSubmitting.value = true
  submitError.value = ''
  submitSuccess.value = false
  try {
    // Our server route stores the request in the CRM and still notifies the team as before.
    await $fetch('/api/lead', { method: 'POST', body: { ...form, form: 'discovery_call', pagesViewed: $track.pagesViewed() } })
    $track.lead('discovery_call')
    submitSuccess.value = true
    Object.assign(form, { name: '', email: '', date: '', time: '', context: '', consent: false })
  } catch {
    submitError.value = 'Your request could not be sent. Please try again or email admin@newhamtech.com.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
