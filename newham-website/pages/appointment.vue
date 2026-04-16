<template>
  <div class="product-page">
    <section class="hero-section relative min-h-[40vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-dark-900"></div>
        <div class="absolute inset-0 opacity-5">
          <div class="h-full w-full bg-[repeating-linear-gradient(45deg,#005D6C,#005D6C_1px,transparent_1px,transparent_10px)]"></div>
        </div>
        <div class="absolute top-20 right-20 w-40 h-40 border-2 border-primary-500/10 transform rotate-45"></div>
        <div class="absolute bottom-24 left-16 w-64 h-64 border-2 border-secondary-500/10 transform -rotate-12"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span class="gradient-text">Schedule an Appointment</span>
            <span class="block text-white mt-2">Book a call with the Newham team</span>
            <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-500 transform skew-x-12"></span>
            <span class="absolute -bottom-2 right-0 w-1/3 h-1 bg-secondary-500 transform -skew-x-12"></span>
          </h1>
          <p class="text-lg text-gray-300 mt-6">
            Pick a date and time that works for you and well send a confirmation email with meeting details.
          </p>
        </div>
      </div>
    </section>

    <section class="section-padding relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-dark-900"></div>
        <div class="absolute inset-0 opacity-5">
          <div class="h-full w-full bg-[repeating-linear-gradient(135deg,#005D6C,#005D6C_1px,transparent_1px,transparent_12px)]"></div>
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto glass-panel p-8 md:p-10 rounded-2xl shadow-glass-lg">
          <h2 class="text-2xl md:text-3xl font-semibold text-white mb-6">Tell us a few details</h2>

          <form @submit.prevent="submitAppointment" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Full name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-2 rounded-lg bg-dark-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Work email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 rounded-lg bg-dark-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="date" class="block text-sm font-medium text-gray-300 mb-1">Preferred date</label>
                <input
                  id="date"
                  ref="dateInput"
                  v-model="form.date"
                  type="date"
                  required
                  @focus="openDatePicker"
                  class="w-full px-4 py-2 rounded-lg bg-dark-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label for="time" class="block text-sm font-medium text-gray-300 mb-1">Preferred time</label>
                <select
                  id="time"
                  v-model="form.time"
                  required
                  class="w-full px-4 py-2 rounded-lg bg-dark-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="" disabled>Select a time slot</option>
                  <option v-for="slot in timeOptions" :key="slot" :value="slot">
                    {{ slot }}
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label for="timezone" class="block text-sm font-medium text-gray-300 mb-1">Timezone</label>
              <select
                id="timezone"
                v-model="form.timezone"
                class="w-full px-4 py-2 rounded-lg bg-dark-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="" disabled>Select your timezone</option>
                <option v-for="tz in timezoneOptions" :key="tz" :value="tz">
                  {{ tz }}
                </option>
              </select>
            </div>

            <div>
              <label for="context" class="block text-sm font-medium text-gray-300 mb-1">What would you like to discuss?</label>
              <textarea
                id="context"
                v-model="form.context"
                rows="4"
                class="w-full px-4 py-2 rounded-lg bg-dark-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Share a bit about your projects, tools you use today, and your goals."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full btn-primary flex items-center justify-center relative overflow-hidden"
              :disabled="isSubmitting"
            >
              <i v-if="isSubmitting" class="fa-solid fa-spinner fa-spin -ml-1 mr-2 text-white"></i>
              {{ isSubmitting ? 'Scheduling...' : 'Schedule appointment' }}
            </button>

            <div v-if="submitSuccess" class="text-center p-3 rounded-lg bg-green-900/50 border border-green-700 text-green-100 text-sm">
              Appointment request sent successfully! We will contact you shortly to confirm.
            </div>

            <div v-if="submitError" class="text-center p-3 rounded-lg bg-red-900/50 border border-red-700 text-red-100 text-sm">
              {{ submitError }}
            </div>

            <p class="text-xs text-gray-400 text-center mt-3">
              We'll send a confirmation email with meeting details after we review your request.
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

useHead({
  title: 'Schedule Appointment'
})

const form = reactive({
  name: '',
  email: '',
  date: '',
  time: '',
  timezone: '',
  context: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref('');

const dateInput = ref(null);

const timeOptions = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30'
];

const timezoneOptions = [
  'GMT+8 – Singapore, Hong Kong',
  'IST (GMT+5:30) – India',
  'GMT+1 – UK, Lisbon (+1 in summer)',
  'CET (GMT+1) – Central Europe',
  'EST (GMT-5) – US East Coast',
  'PST (GMT-8) – US West Coast',
  'AEST (GMT+10) – Sydney, Melbourne'
];

const openDatePicker = () => {
  if (dateInput.value && typeof dateInput.value.showPicker === 'function') {
    dateInput.value.showPicker();
  }
};

const submitAppointment = async () => {
  if (!form.name || !form.email || !form.date || !form.time) {
    return;
  }

  isSubmitting.value = true;
  submitError.value = '';
  submitSuccess.value = false;

  try {
    const response = await fetch('https://firefabx.com/webhook/newham-appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      submitSuccess.value = true;
      form.name = '';
      form.email = '';
      form.date = '';
      form.time = '';
      form.timezone = '';
      form.context = '';
    } else {
      submitError.value = 'Failed to schedule appointment. Please try again.';
    }
  } catch (e) {
    submitError.value = 'An error occurred. Please try again later.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
