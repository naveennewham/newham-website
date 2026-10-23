<template>
  <div>
    <!-- Netlify Forms: declares the "enquiry" form so Netlify detects it at deploy. The server
         (server/api/lead.post.ts) submits a copy of each enquiry to it, which Netlify emails. -->
    <form name="enquiry" data-netlify="true" netlify-honeypot="website_url" hidden aria-hidden="true"><input name="form-name" /><input name="form" /><input name="site" /><input name="subject" /><input name="name" /><input name="email" /><input name="company" /><input name="role" /><input name="phone" /><input name="size" /><input name="apps" /><input name="when" /><textarea name="message"></textarea><input name="website_url" /></form>
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
            <p class="flex items-center gap-2 font-semibold text-brand-800"><UiLottie v-if="!viaEmail" src="/lottie/success.json" :loop="false" class="h-8 w-8 shrink-0"><template #fallback><i class="fa-solid fa-circle-check" aria-hidden="true"></i></template></UiLottie><i v-else class="fa-solid fa-circle-check" aria-hidden="true"></i>{{ viaEmail ? 'Almost done — please send the email' : 'Request received' }}</p>
            <p v-if="!viaEmail" class="mt-2 text-sm text-ink-700">Thank you. We have your request and will reply by email to arrange your demo. If it's urgent, write to <a href="mailto:admin@newhamtech.com" class="font-semibold text-brand-700 underline">admin@newhamtech.com</a>.</p>
            <p v-else class="mt-2 text-sm text-ink-700">Your email app should have opened with your request addressed to <a href="mailto:admin@newhamtech.com" class="font-semibold text-brand-700 underline">admin@newhamtech.com</a>. Press send and we will reply to arrange your demo. If nothing opened, email us directly at that address.</p>
            <button type="button" class="btn-secondary mt-4" @click="submitted = false">Edit my request</button>
          </div>

          <form v-else class="mt-6 grid gap-5 sm:grid-cols-2" novalidate @submit.prevent="handleSubmit">
            <p v-if="interest" class="sm:col-span-2 flex items-center gap-2 rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-2.5 text-sm text-cyan-900"><i class="fa-solid fa-flask" aria-hidden="true"></i>Early access request: <span class="font-semibold">{{ interest.title }}</span></p>
            <!-- Honeypot for bots: hidden from people and screen readers. -->
            <input v-model="form.website_url" type="text" name="website_url" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
            <p class="sm:col-span-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-500"><span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand-700 text-[10px] text-white">1</span>About you</p>
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
            <p class="sm:col-span-2 mt-2 flex items-center gap-2 border-t border-ink-100 pt-6 text-xs font-semibold uppercase tracking-wider text-ink-500"><span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand-700 text-[10px] text-white">2</span>What you’d like to see</p>
            <fieldset class="sm:col-span-2">
              <legend class="label">Apps you are interested in</legend>
              <div class="mt-1 grid gap-2 sm:grid-cols-2">
                <label v-for="a in appOptions" :key="a" class="group flex cursor-pointer items-center gap-3 rounded-xl border border-ink-200 px-3 py-2.5 text-sm transition-colors hover:border-brand-300 has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50 has-[:checked]:ring-1 has-[:checked]:ring-brand-600 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-400">
                  <input v-model="form.apps" type="checkbox" :value="a" class="sr-only" />
                  <UiAppIcon v-if="appIcon(a)" :app="appIcon(a)!" size="sm" />
                  <span v-else class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-xs text-ink-600"><i class="fa-solid fa-layer-group" aria-hidden="true"></i></span>
                  <span class="min-w-0 flex-1"><span class="block font-semibold text-ink-900">{{ a.split(' — ')[0] }}</span><span class="block text-xs text-ink-500">{{ a.split(' — ')[1] }}</span></span>
                  <i class="fa-solid fa-circle-check text-brand-700 opacity-0 transition-opacity group-has-[:checked]:opacity-100" aria-hidden="true"></i>
                </label>
              </div>
            </fieldset>
            <div class="sm:col-span-2">
              <label for="message" class="label">What would you like to see?</label>
              <textarea id="message" v-model.trim="form.message" rows="4" class="input" placeholder="For example: how we would price an ACMV tender, or run payroll for site workers."></textarea>
            </div>
            <div class="sm:col-span-2">
              <label class="flex gap-3 rounded-xl bg-ink-50 p-4 text-xs leading-relaxed text-ink-600">
                <input v-model="form.consent" type="checkbox" required class="mt-1 h-4 w-4 shrink-0 accent-brand-700" :aria-invalid="!!errors.consent" aria-describedby="consent-err" />
                <span>I agree that Newham Technological Solutions may use the details above to contact me about a CCorex demo. We only use them to respond to this request and handle them in line with Singapore’s Personal Data Protection Act (PDPA). If you accepted marketing cookies, we also record how you found us. See our <NuxtLink to="/privacy" class="font-semibold text-brand-700 underline">privacy policy</NuxtLink>. You can ask us to delete your details at any time by emailing admin@newhamtech.com. <span class="text-rose-600" aria-hidden="true">*</span></span>
              </label>
              <p v-if="errors.consent" id="consent-err" class="err">{{ errors.consent }}</p>
            </div>
            <div class="sm:col-span-2">
              <button type="submit" class="btn-primary w-full sm:w-auto" :disabled="sending">{{ sending ? 'Sending…' : 'Request my demo' }} <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i></button>
              <p class="mt-3 flex items-center gap-2 text-xs text-ink-500"><i class="fa-solid fa-envelope-circle-check text-brand-600" aria-hidden="true"></i>We reply by email to arrange a time that suits you.</p>
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
            <h2 class="text-lg font-bold">Prefer to talk?</h2>
            <p class="mt-2 text-sm text-ink-600">Write or call us about demos, pricing or support.</p>
            <a href="mailto:admin@newhamtech.com" class="mt-4 flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-900"><i class="fa-solid fa-envelope" aria-hidden="true"></i>admin@newhamtech.com</a>
            <a href="tel:+6598804197" class="mt-2 flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-900"><i class="fa-solid fa-phone" aria-hidden="true"></i>+65 9880 4197</a>
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
import { earlyAccessBySlug } from '~/data/earlyAccess'
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Book a CCorex demo for estimating, projects and payroll',
  description: 'Book a 30-minute live demo of CCorex on your own estimating, project or payroll workflow. Tell us about your team, or email us at admin@newhamtech.com.',
  ogTitle: 'Book a CCorex demo',
  ogDescription: 'See DeepCost, DeepTrack, DeepHR and ARIVU AI on your own workflow in a 30-minute live demo.'
})
useHead({ link: [{ rel: 'canonical', href: config.public.siteUrl + '/contact' }] })

const roles = ['Owner / Managing Director', 'General Manager', 'Estimation / QS', 'Project Manager', 'Procurement / Finance', 'HR / Admin', 'Site Engineer / Supervisor', 'IT', 'Other']
const sizes = ['1–20 employees', '21–50 employees', '51–200 employees', '201–500 employees', '500+ employees']
const appIcons: Record<string, string> = { 'DeepCost': 'deepcost', 'DeepTrack': 'deeptrack', 'DeepHR': 'deephr', 'DeepPlan AI': 'deepplan-ai', 'ARIVU AI': 'arivu-ai', 'Deep Drive & PDF Editor': 'deep-drive' }
const appIcon = (option: string) => appIcons[option.split(' — ')[0]!]
const appOptions = ['DeepCost — tender estimation', 'DeepTrack — project delivery', 'DeepHR — HR & payroll', 'DeepPlan AI — drawing take-off', 'ARIVU AI — AI assistant', 'Deep Drive & PDF Editor — documents', 'Not sure yet — the whole suite']
const nextSteps = [
  { title: 'We reply to you', text: 'Our team replies by email to understand your workflow and agree a time.' },
  { title: 'Live demo on your workflow', text: '30 minutes on the apps you chose, using examples close to your work.' },
  { title: 'Plan and tailored quote', text: 'A recommended plan, onboarding approach and per-user quote.' }
]
const demoPoints = ['Your estimating, project or payroll workflow', 'ARIVU AI answering from your data across apps', 'One sign-in, shared users, roles per app', 'Plans and onboarding for your team']

const blank = () => ({ name: '', email: '', company: '', role: '', phone: '', size: '', apps: [] as string[], message: '', consent: false, website_url: '' })
const form = ref(blank())
// ?interest=<slug> from an "Request early access" button: tag the lead with that feature.
const route = useRoute()
const interest = computed(() => earlyAccessBySlug(typeof route.query.interest === 'string' ? route.query.interest : undefined))
const appLabel = (app: string) => appOptions.find((a) => a.toLowerCase().startsWith(app))
watch(interest, (f) => {
  if (!f) return
  const label = appLabel(f.app)
  if (label && !form.value.apps.includes(label)) form.value.apps.push(label)
}, { immediate: true })
// ?app=<slug> from a guide or product call to action: pre-tick that app.
watch(() => route.query.app, (app) => {
  const norm = (v: string) => v.toLowerCase().replace(/[^a-z0-9]/g, '')
  const label = typeof app === 'string' && app ? appOptions.find((a) => norm(a).startsWith(norm(app))) : undefined
  if (label && !form.value.apps.includes(label)) form.value.apps.push(label)
}, { immediate: true })
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
    const kind = interest.value ? 'early_access' : 'demo_request'
    await $fetch('/api/lead', { method: 'POST', body: { ...form.value, form: kind, subject: interest.value ? `Early access: ${interest.value.title}` : undefined, pagesViewed: $track.pagesViewed() } })
    $track.lead(kind)
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
    ...(interest.value ? [`Early access: ${interest.value.title}`] : []),
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
/* .input bundles bg-white via @apply, which the dark theme doesn't flip: give it a dark field. */
:global(html.dark .input) { background-color: #0b171b; border-color: rgb(255 255 255 / .16); }
:global(html.dark .input option) { background-color: #0b171b; color: #eef3f5; }
</style>
