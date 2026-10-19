<template>
  <SolutionLanding
    slug="foreign-worker-attendance-app"
    app="deephr"
    app-name="DeepHR"
    eyebrow="Site attendance · Singapore"
    seo-title="Foreign worker attendance app with face & GPS"
    seo-description="Attendance app for construction foreign workers in Singapore: face and GPS check-in on the worker's phone, offline punches, HR approval, work pass records; permit alerts in early access."
    h1="Foreign worker attendance app with face and GPS check-in"
    lead="Workers check in on their own phone with face and GPS, even without signal. HR approves each session, and approved attendance flows straight into payroll."
    :hero-points="['Face + GPS on the worker’s phone', 'Works without signal', 'HR approves each session', 'Work pass details per worker']"
    problem-title="Site attendance that nobody fully trusts"
    :problems="problems"
    flow-title="From check-in to payroll"
    :flow="flow"
    feature-title="What site and HR teams get"
    :features="features"
    :guide-links="guides"
    :faqs="faqs"
    :early-access="['work-pass-alerts', 'foreign-worker-levy']"
    cta-title="See site attendance in DeepHR"
    cta-lead="Book a 30-minute demo. We will check in on a phone, approve the session and show it in payroll."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-fingerprint', title: 'Kiosks and paper sheets', text: 'Hardware has to be installed and maintained on every site, or attendance lives on paper.' },
  { icon: 'fa-solid fa-user-secret', title: 'Buddy punching', text: 'Without a face check and a location, it is hard to prove who was on which site.' },
  { icon: 'fa-solid fa-clock', title: 'Hours re-keyed', text: 'Site hours are copied from sheets into payroll and project costs, with mistakes along the way.' }
]
const flow = [
  { title: 'Check in', text: 'Face and GPS on the worker’s phone.', icon: 'fa-solid fa-user-check' },
  { title: 'No signal? Queued', text: 'Punches sync when the phone reconnects.', icon: 'fa-solid fa-wifi' },
  { title: 'HR approves', text: 'Each session reviewed and approved.', icon: 'fa-solid fa-circle-check' },
  { title: 'Timesheets', text: 'Hours per project and site.', icon: 'fa-solid fa-clock' },
  { title: 'Payroll', text: 'Approved attendance flows into payroll.', icon: 'fa-solid fa-money-check-dollar' }
]
const features = [
  { icon: 'fa-solid fa-face-smile', title: 'Face check-in', text: 'Each check-in and check-out is verified against the worker’s face.' },
  { icon: 'fa-solid fa-location-dot', title: 'GPS location', text: 'The location is recorded with every punch, so you know which site the worker was on.' },
  { icon: 'fa-solid fa-signal', title: 'Works offline', text: 'Punches are queued without signal and sent when the phone reconnects.' },
  { icon: 'fa-solid fa-id-card', title: 'Work pass details', text: 'Pass type, number and issue and expiry dates on each worker’s record.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'No hardware', text: 'Runs on the worker’s own phone as an installable web app.' }
]
const guides = [
  { to: '/resources/foreign-worker-levy-construction-singapore', title: 'Foreign worker levy and quota for construction' },
  { to: '/resources/construction-payroll-singapore', title: 'Construction payroll in Singapore' },
  { to: '/solutions/construction-payroll-software', title: 'Construction payroll software' }
]
const faqs = [
  { q: 'Do workers need to install anything?', a: 'DeepHR runs on the worker’s own phone as an installable web app. There is no kiosk or other hardware to buy.' },
  { q: 'What if a site has no mobile signal?', a: 'Punches are queued on the phone and sent when it reconnects, so attendance is not lost.' },
  { q: 'How do we stop buddy punching?', a: 'Each punch is checked against the worker’s face and records the GPS location, and HR approves each session before it reaches payroll.' },
  { q: 'Does it keep Work Permit details?', a: 'Yes. Each worker’s pass type, number and issue and expiry dates are kept on their record and can be imported or exported in Excel.' },
  { q: 'How is DeepHR priced?', a: 'Pricing is shared on request. Book a demo or email admin@newhamtech.com.' }
]
</script>
