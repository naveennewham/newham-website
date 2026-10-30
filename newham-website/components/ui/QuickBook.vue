<template>
  <!-- Quick book: floating button + popup form. Sends through /api/lead like the contact form. -->
  <div>
    <button
      v-show="!open"
      type="button"
      class="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-brand-800"
      @click="show()"
    >
      <i class="fa-solid fa-bolt text-cyan-300" aria-hidden="true"></i> Quick book
    </button>

    <Transition enter-active-class="transition duration-200" enter-from-class="opacity-0" leave-active-class="transition duration-150" leave-to-class="opacity-0">
      <div v-if="open" class="fixed inset-0 z-[70] flex items-end justify-center bg-ink-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-4" @click.self="close()">
        <div ref="dialog" role="dialog" aria-modal="true" aria-labelledby="qb-title" class="max-h-[92vh] w-full overflow-y-auto rounded-t-2xl bg-white p-6 shadow-2xl sm:max-w-lg sm:rounded-2xl sm:p-8">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="eyebrow"><i class="fa-solid fa-bolt text-[10px]" aria-hidden="true"></i> Quick book</p>
              <h2 id="qb-title" class="mt-2 text-2xl font-bold">Book a service</h2>
              <p class="mt-1 text-sm text-ink-600">Tell us what you need. We reply by email within one working day with the scope and a quote.</p>
            </div>
            <button type="button" class="rounded-full p-2 text-ink-500 hover:bg-ink-50 hover:text-ink-900" aria-label="Close" @click="close()"><i class="fa-solid fa-xmark text-lg" aria-hidden="true"></i></button>
          </div>

          <div v-if="sent" role="status" class="mt-8 text-center">
            <UiLottie src="/lottie/success.json" :loop="false" class="mx-auto h-20 w-20" />
            <p class="mt-3 text-lg font-semibold text-ink-900">Thank you, your request has been sent.</p>
            <p class="mt-1 text-sm text-ink-600">We will reply by email. For drawings or large files, reply to our email with a link.</p>
            <button type="button" class="btn-secondary mt-6" @click="close()">Close</button>
          </div>

          <form v-else class="mt-6 space-y-4" @submit.prevent="submit">
            <input v-model="form.website_url" type="text" name="website_url" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />
            <div>
              <label for="qb-service" class="field-label">Service</label>
              <select id="qb-service" v-model="service" required class="field">
                <option v-for="s in QUICK_BOOK_SERVICES" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label for="qb-name" class="field-label">Your name</label>
                <input id="qb-name" ref="first" v-model="form.name" type="text" required autocomplete="name" class="field" />
              </div>
              <div>
                <label for="qb-company" class="field-label">Company</label>
                <input id="qb-company" v-model="form.company" type="text" autocomplete="organization" class="field" />
              </div>
              <div>
                <label for="qb-email" class="field-label">Work email</label>
                <input id="qb-email" v-model="form.email" type="email" required autocomplete="email" class="field" />
              </div>
              <div>
                <label for="qb-phone" class="field-label">Phone <span class="font-normal text-ink-400">(optional)</span></label>
                <input id="qb-phone" v-model="form.phone" type="tel" autocomplete="tel" class="field" />
              </div>
            </div>
            <div>
              <label for="qb-message" class="field-label">Project details</label>
              <textarea id="qb-message" v-model="form.message" rows="3" required class="field" :placeholder="placeholder"></textarea>
            </div>
            <label class="flex items-start gap-3 text-sm text-ink-600">
              <input v-model="form.consent" type="checkbox" required class="mt-0.5 h-4 w-4 rounded border-ink-300 text-brand-700 focus:ring-brand-500" />
              <span>I agree that Newham may contact me about this request. See the <NuxtLink to="/privacy" class="font-semibold text-brand-700 underline" @click="close()">privacy policy</NuxtLink>.</span>
            </label>
            <p v-if="error" role="alert" class="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">{{ error }}</p>
            <button type="submit" class="btn-primary w-full" :disabled="sending">
              <i v-if="sending" class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>
              {{ sending ? 'Sending…' : 'Send request' }}
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { QUICK_BOOK_SERVICES } from '~/composables/useQuickBook'

const { open, service, show, close } = useQuickBook()
const { $track } = useNuxtApp()

const empty = () => ({ name: '', email: '', company: '', phone: '', message: '', consent: false, website_url: '' })
const form = ref(empty())
const sending = ref(false)
const sent = ref(false)
const error = ref('')
const first = ref<HTMLInputElement>()

const placeholder = computed(() => service.value === 'Sprinkler hydraulic calculations'
  ? 'Building type, number of areas or floors, hazard class, water supply data available, and when you need the report.'
  : 'What you need, the project and when you need it.')

watch(open, async (v) => {
  if (!import.meta.client) return
  document.documentElement.style.overflow = v ? 'hidden' : ''
  if (v) {
    sent.value = false
    error.value = ''
    await nextTick()
    first.value?.focus()
  }
})

const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open.value) close() }
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

async function submit() {
  sending.value = true
  error.value = ''
  try {
    // Same route as the contact form: stored in the CRM and emailed to the team.
    await $fetch('/api/lead', { method: 'POST', body: { ...form.value, subject: `Quick book: ${service.value}`, form: 'quick_book', pagesViewed: $track.pagesViewed() } })
    $track.lead('quick_book')
    sent.value = true
    form.value = empty()
  } catch {
    error.value = 'Your request could not be sent. Please try again or email admin@newhamtech.com.'
  } finally {
    sending.value = false
  }
}
</script>
