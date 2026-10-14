<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"></div>
      <div class="container-site relative pb-32 pt-16 lg:pt-20">
        <div class="max-w-3xl">
          <p class="eyebrow-dark">Book a live demo</p>
          <h1 class="h-display mt-5 text-white">See CCorex run your business.</h1>
          <p class="lead-dark mt-6 max-w-2xl">A 30-minute live demo on your own estimating, project or payroll workflow — not a generic slide deck. Tell us a little about your team and we will set it up.</p>
        </div>
      </div>
    </section>

    <section class="relative -mt-20 pb-20">
      <div class="container-site grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <!-- Form -->
        <div class="card p-6 shadow-lift sm:p-8">
          <h2 class="text-2xl font-bold">Request a demo</h2>
          <p class="mt-1 text-sm text-ink-600">Fields marked <span class="text-rose-600" aria-hidden="true">*</span><span class="sr-only">with an asterisk</span> are required.</p>

          <div v-if="submitted" class="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-5" role="status">
            <p class="flex items-center gap-2 font-semibold text-brand-800"><i class="fa-solid fa-circle-check" aria-hidden="true"></i>{{ viaEmail ? 'Almost done — please send the email' : 'Request received' }}</p>
            <p v-if="!viaEmail" class="mt-2 text-sm text-ink-700">Thank you. We have your request and will reply by email to arrange your demo. If it's urgent, write to <a href="mailto:admin@newhamtech.com" class="font-semibold text-brand-700 underline">admin@newhamtech.com</a>.</p>
            <p v-else class="mt-2 text-sm text-ink-700">Your email app should have opened with your request addressed to <a href="mailto:admin@newhamtech.com" class="font-semibold text-brand-700 underline">admin@newhamtech.com</a>. Press send and we will reply to arrange your demo. If nothing opened, email us directly at that address.</p>
            <button type="button" class="btn-secondary mt-4" @click="submitted = false">Edit my request</button>
          </div>

          <form v-else class="mt-6 grid gap-5 sm:grid-cols-2" novalidate @submit.prevent="handleSubmit">
            <!-- Honeypot for bots: hidden from people and screen readers. -->
            <input v-model="form.website_url" type="text" name="website_url" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
            <div>
              <label for="name" class="label">Full name <span class="text-rose-600" aria-hidden="true">*</span></label>
              <input id="name" v-model.trim="form.name" type="text" autocomplete="name" required class="input" :aria-invalid="!!errors.name" aria-describedby="name-err" />
              <p v-if="errors.name" id="name-err" class="err">{{ errors.name }}</p>
            </div>
            <div>
              <label for="email" class="label">Work email <span class="text-rose-600" aria-hidden="true">*</span></label>
              <input id="email" v-model.trim="form.email" type="email" autocomplete="email" required class="input" :aria-invalid="!!errors.email" aria-describedby="email-err" />
              <p v-if="errors.email" id="email-err" class="err">{{ errors.email }}</p>
            </div>
            <div>
              <label for="company" class="label">Company <span class="text-rose-600" aria-hidden="true">*</span></label>
              <input id="company" v-model.trim="form.company" type="text" autocomplete="organization" required class="input" :aria-invalid="!!errors.company" aria-describedby="company-err" />
              <p v-if="errors.company" id="company-err" class="err">{{ errors.company }}</p>
            </div>
            <div>
              <label for="role" class="label">Your role</label>
              <select id="role" v-model="form.role" class="input">
                <option value="">Select your role</option>
                <option v-for="r in roles" :key="r" :value="r">{{ r }}</option>
              </select>
            </div>
            <div>
              <label for="phone" class="label">Phone <span class="font-normal text-ink-500">(optional)</span></label>
              <input id="phone" v-model.trim="form.phone" type="tel" autocomplete="tel" class="input" />
            </div>
            <div>
              <label for="size" class="label">Company size</label>
              <select id="size" v-model="form.size" class="input">
                <option value="">Select company size</option>
                <option v-for="s in sizes" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>
            <fieldset class="sm:col-span-2">
              <legend class="label">Apps you are interested in</legend>
              <div class="mt-1 grid gap-2 sm:grid-cols-2">
                <label v-for="a in appOptions" :key="a" class="flex cursor-pointer items-center gap-3 rounded-lg border border-ink-200 px-3 py-2.5 text-sm text-ink-800 hover:border-brand-300 has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50">
                  <input v-model="form.apps" type="checkbox" :value="a" class="h-4 w-4 rounded border-ink-300 text-brand-700 accent-brand-700" />{{ a }}
                </label>
              </div>
            </fieldset>
            <div class="sm:col-span-2">
              <label for="message" class="label">What would you like to see?</label>
              <textarea id="message" v-model.trim="form.message" rows="4" class="input" placeholder="For example: how we would price an ACMV tender, or run payroll for site workers."></textarea>
            </div>
            <div class="sm:col-span-2">
              <label class="flex gap-3 text-sm leading-relaxed text-ink-700">
                <input v-model="form.consent" type="checkbox" required class="mt-1 h-4 w-4 shrink-0 accent-brand-700" :aria-invalid="!!errors.consent" aria-describedby="consent-err" />
                <span>I agree that Newham Technological Solutions may use the details above to contact me about a CCorex demo. We only use them to respond to this request and handle them in line with Singapore’s Personal Data Protection Act (PDPA). If you accepted marketing cookies, we also record how you found us. See our <NuxtLink to="/privacy" class="font-semibold text-brand-700 underline">privacy policy</NuxtLink>. You can ask us to delete your details at any time by emailing admin@newhamtech.com. <span class="text-rose-600" aria-hidden="true">*</span></span>
              </label>
              <p v-if="errors.consent" id="consent-err" class="err">{{ errors.consent }}</p>
            </div>
            <div class="sm:col-span-2">
              <button type="submit" class="btn-primary w-full sm:w-auto" :disabled="sending">{{ sending ? 'Sending…' : 'Request my demo' }} <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></button>
              <p class="mt-3 text-xs text-ink-500">Submitting opens your email app with your request addressed to admin@newhamtech.com.</p>
            </div>
          </form>
        </div>

        <!-- Side -->
        <aside class="space-y-6">
          <div class="card p-6 shadow-lift">
            <h2 class="text-lg font-bold">What happens next</h2>
            <ol class="mt-5 space-y-5">
              <li v-for="(s, i) in nextSteps" :key="s.title" class="flex gap-4">
                <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">{{ i + 1 }}</span>
                <div><p class="font-semibold text-ink-900">{{ s.title }}</p><p class="mt-0.5 text-sm text-ink-600">{{ s.text }}</p></div>
              </li>
            </ol>
          </div>
          <div class="card p-6">
            <h2 class="text-lg font-bold">Prefer email?</h2>
            <p class="mt-2 text-sm text-ink-600">Write to us about demos, pricing or support.</p>
            <a href="mailto:admin@newhamtech.com" class="mt-4 inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-900"><i class="fa-solid fa-envelope" aria-hidden="true"></i>admin@newhamtech.com</a>
          </div>
          <div class="rounded-2xl bg-brand-950 p-6 text-white">
            <p class="eyebrow-dark">In your demo</p>
            <ul class="mt-4 space-y-2.5 text-sm text-ink-200">
              <li v-for="d in demoPoints" :key="d" class="flex gap-2.5"><i class="fa-solid fa-check mt-1 text-cyan-400" aria-hidden="true"></i>{{ d }}</li>
            </ul>
            <p class="mt-5 text-xs text-ink-300">CCorex is delivered by Newham Technological Solutions, Singapore.</p>
          </div>
        </aside>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-tight bg-ink-50">
      <div class="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <UiSectionHeader eyebrow="Before you book" title="Common questions" lead="More answers on our FAQ page." />
        <div>
          <UiFaqList :items="faqs" />
          <NuxtLink to="/faq" class="mt-6 inline-flex font-semibold text-brand-700 hover:text-brand-900">Read the full FAQ <i class="fa-solid fa-arrow-right ml-2 mt-1 text-xs" aria-hidden="true"></i></NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Book a demo',
  description: 'Book a 30-minute live demo of CCorex on your own estimating, project or payroll workflow. Tell us about your team, or email us at admin@newhamtech.com.',
  ogTitle: 'Book a CCorex demo',
  ogDescription: 'See DeepCost, DeepTrack, DeepHR and ARIVU AI on your own workflow in a 30-minute live demo.'
})
useHead({ link: [{ rel: 'canonical', href: config.public.siteUrl + '/contact' }] })

const roles = ['Owner / Managing Director', 'General Manager', 'Estimation / QS', 'Project Manager', 'Procurement / Finance', 'HR / Admin', 'Site Engineer / Supervisor', 'IT', 'Other']
const sizes = ['1–20 employees', '21–50 employees', '51–200 employees', '201–500 employees', '500+ employees']
const appOptions = ['DeepCost — tender estimation', 'DeepTrack — project delivery', 'DeepHR — HR & payroll', 'DeepPlan AI — drawing take-off', 'ARIVU AI — AI assistant', 'Deep Drive & PDF Editor (coming soon)', 'Not sure yet — the whole suite']
const nextSteps = [
  { title: 'We reply to you', text: 'Our team replies by email to understand your workflow and agree a time.' },
  { title: 'Live demo on your workflow', text: '30 minutes on the apps you chose, using examples close to your work.' },
  { title: 'Plan and tailored quote', text: 'A recommended plan, onboarding approach and per-user quote.' }
]
const demoPoints = ['Your estimating, project or payroll workflow', 'ARIVU AI answering from your data across apps', 'One sign-in, shared users, roles per app', 'Plans and onboarding for your team']

const blank = () => ({ name: '', email: '', company: '', role: '', phone: '', size: '', apps: [] as string[], message: '', consent: false, website_url: '' })
const form = ref(blank())
const errors = ref<Record<string, string>>({})
const submitted = ref(false)
const sending = ref(false)
const viaEmail = ref(false)
const { $track } = useNuxtApp()

function validate() {
  const e: Record<string, string> = {}
  if (!form.value.name) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) e.email = 'Please enter a valid work email.'
  if (!form.value.company) e.company = 'Please enter your company.'
  if (!form.value.consent) e.consent = 'Please agree so we can contact you.'
  errors.value = e
  return Object.keys(e).length === 0
}

// Sends the request to our CRM. If that isn't reachable, falls back to a prefilled email.
async function handleSubmit() {
  if (!validate()) return
  sending.value = true
  try {
    await $fetch('/api/lead', { method: 'POST', body: { ...form.value, form: 'demo_request', pagesViewed: $track.pagesViewed() } })
    $track.lead('demo_request')
    viaEmail.value = false
    submitted.value = true
    return
  } catch {
    // fall through to email
  } finally {
    sending.value = false
  }
  const f = form.value
  const body = [
    `Name: ${f.name}`, `Work email: ${f.email}`, `Company: ${f.company}`, `Role: ${f.role || '-'}`,
    `Phone: ${f.phone || '-'}`, `Company size: ${f.size || '-'}`, `Apps of interest: ${f.apps.join(', ') || '-'}`,
    '', 'Message:', f.message || '-', '', 'PDPA consent given: yes'
  ].join('\n')
  const href = `mailto:admin@newhamtech.com?subject=${encodeURIComponent(`CCorex demo request — ${f.company}`)}&body=${encodeURIComponent(body)}`
  window.location.href = href
  viaEmail.value = true
  submitted.value = true
}

const faqs = [
  { q: 'How long is the demo?', a: 'About 30 minutes. We focus on the apps and workflows you tell us about in the form.' },
  { q: 'Do we have to buy the whole suite?', a: 'No. You can start with one flagship app — DeepCost, DeepTrack or DeepHR — and add apps later on the same sign-in.' },
  { q: 'How do we get pricing?', a: 'Pricing is shared on request. Email admin@newhamtech.com or use this form and we will prepare a quote.' },
  { q: 'Do you help import our data?', a: 'Yes. Onboarding includes configuring your organisation and roles and importing data such as your price library, customers, users and employees.' }
]
</script>

<style scoped>
.label { @apply mb-1.5 block text-sm font-semibold text-ink-900; }
.input { @apply block w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100; }
.input[aria-invalid='true'] { @apply border-rose-400; }
.err { @apply mt-1.5 text-xs font-medium text-rose-600; }
</style>
