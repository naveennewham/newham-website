<template>
  <Transition name="consent">
    <section v-if="show" class="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-2xl border border-ink-200 bg-white p-5 shadow-lift sm:inset-x-6 sm:p-6" role="dialog" aria-modal="false" aria-labelledby="consent-title">
      <h2 id="consent-title" class="text-base font-bold text-ink-900">Cookies on {{ site }}</h2>
      <p class="mt-2 text-sm text-ink-600">
        We use essential cookies to run this site. With your permission, we also use analytics and marketing cookies to see how visitors find us and which pages help, and to measure our advertising.
        You can change your choice at any time from “Cookie settings” in the footer. <NuxtLink to="/privacy" class="font-semibold text-brand-700 underline underline-offset-2">Privacy policy</NuxtLink>
      </p>

      <div v-if="ui.choose" class="mt-4 space-y-3">
        <label v-for="c in categories" :key="c.key" class="flex items-start justify-between gap-4 rounded-xl border border-ink-100 p-3">
          <span>
            <span class="block text-sm font-semibold text-ink-900">{{ c.title }}</span>
            <span class="block text-xs text-ink-600">{{ c.text }}</span>
          </span>
          <input v-if="c.key !== 'essential'" v-model="choice[c.key]" type="checkbox" class="mt-1 h-5 w-5 shrink-0 accent-brand-700" :aria-label="c.title" />
          <span v-else class="mt-0.5 shrink-0 text-xs font-semibold text-ink-500">Always on</span>
        </label>
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        <button type="button" class="btn-primary" @click="acceptAll">Accept all</button>
        <button type="button" class="btn-secondary" @click="essentialOnly">Essential only</button>
        <button v-if="!ui.choose" type="button" class="btn-secondary" @click="ui.choose = true">Choose</button>
        <button v-else type="button" class="btn-secondary" @click="save(choice.analytics, choice.marketing)">Save my choice</button>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
// Equal-weight buttons; nothing beyond essential cookies runs until the visitor chooses.
const props = withDefaults(defineProps<{ site?: string }>(), { site: 'this site' })
const { consent, ui, acceptAll, essentialOnly, save } = useConsent()
const mounted = ref(false)
onMounted(() => { mounted.value = true })
const show = computed(() => mounted.value && (!consent.value.decided || ui.value.open))
const choice = reactive({ analytics: consent.value.analytics, marketing: consent.value.marketing })
watch(() => ui.value.open, (open) => { if (open) Object.assign(choice, { analytics: consent.value.analytics, marketing: consent.value.marketing }) })
const site = computed(() => props.site)
const categories = [
  { key: 'essential', title: 'Essential', text: 'Keeps the site working and remembers your cookie choice.' },
  { key: 'analytics', title: 'Analytics', text: 'Google Analytics: pages visited, how you arrived, device type.' },
  { key: 'marketing', title: 'Marketing', text: 'Remembers the campaign or ad that brought you, for up to 90 days, so we can tell which campaigns lead to enquiries; Google Ads conversion measurement.' },
] as const
</script>

<style scoped>
.consent-enter-active, .consent-leave-active { transition: opacity .25s ease, transform .25s ease; }
.consent-enter-from, .consent-leave-to { opacity: 0; transform: translateY(12px); }
@media (prefers-reduced-motion: reduce) { .consent-enter-active, .consent-leave-active { transition: none; } }
</style>
