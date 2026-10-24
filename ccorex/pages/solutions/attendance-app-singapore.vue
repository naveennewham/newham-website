<template>
  <SolutionLanding
    slug="attendance-app-singapore"
    app="deephr"
    app-name="DeepHR"
    sub-category="Time and attendance app"
    eyebrow="Attendance app · Singapore"
    seo-title="Attendance App Singapore: Face & GPS Check-in"
    seo-description="Attendance app for Singapore: face and GPS check-in on each employee's own phone, no kiosk, works offline, HR approves each session, hours flow to payroll."
    h1="Attendance app for Singapore teams, with face and GPS check-in"
    lead="DeepHR turns each employee’s phone into the time clock. The face must match, the phone must be inside the site radius, and the punch is queued if there is no signal. HR approves each session, and approved hours flow into payroll."
    :hero-points="['Face check-in on the employee’s phone', 'GPS radius per site', 'Works without signal', 'HR approves each session', 'Normal and OT hours into payroll']"
    problem-title="Attendance that is easy to game and hard to check"
    :problems="problems"
    flow-title="From check-in to payable hours"
    :flow="flow"
    feature-title="What employees, supervisors and HR get"
    :features="features"
    checklist-title="What to look for in an attendance app in Singapore"
    checklist-lead="The features buyers compare most often in mobile attendance systems, and how DeepHR handles each."
    :checklist="checklist"
    :guide-links="guides"
    :faqs="faqs"
    cta-title="Check in on your own phone in the demo"
    cta-lead="Book a 30-minute demo. We will set up one of your sites, check in by face and GPS, approve the session and show the payable hours."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-user-secret', title: 'Buddy-punching', text: 'Cards, PINs and paper sign-in sheets let one person clock in for another.' },
  { icon: 'fa-solid fa-building', title: 'Hardware at every location', text: 'Time clocks have to be bought, installed and maintained at each office, outlet or site.' },
  { icon: 'fa-solid fa-clipboard-list', title: 'Hours re-typed for payroll', text: 'Attendance exports are cleaned up in spreadsheets before anyone can run payroll.' }
]
const flow = [
  { title: 'Check in', text: 'Face and GPS on the employee’s own phone.', icon: 'fa-solid fa-user-check' },
  { title: 'Rules checked', text: 'Face match, site radius, one session a day.', icon: 'fa-solid fa-list-check' },
  { title: 'Check out', text: 'Or auto check-out at the site’s cut-off.', icon: 'fa-solid fa-clock' },
  { title: 'HR approves', text: 'Approve, reject or edit, singly or in bulk.', icon: 'fa-solid fa-circle-check' },
  { title: 'Payroll', text: 'Normal and OT hours into the pay run.', icon: 'fa-solid fa-money-check-dollar' }
]
const features = [
  { icon: 'fa-solid fa-user-check', title: 'Face check-in', text: 'Employees register their face once (three samples, then locked until HR unlocks it); every check-in and check-out is matched against it.' },
  { icon: 'fa-solid fa-location-crosshairs', title: 'GPS radius per site', text: 'Each site has its own location, radius, working hours and time zone. Employees can be limited to an allowed-site list.' },
  { icon: 'fa-solid fa-signal', title: 'Works without signal', text: 'The phone checks the face and site radius locally and queues the punch; it is re-verified when the phone reconnects.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'No kiosk, no hardware', text: 'Every punch comes from the employee’s own signed-in phone. Employee self-service installs on a phone as an app.' },
  { icon: 'fa-solid fa-circle-check', title: 'HR approval', text: 'Each completed session becomes a pending approval. Only approved days reach payroll; rejected days count as absent.' },
  { icon: 'fa-solid fa-business-time', title: 'Payable hours', text: 'Times round down to 15 minutes, a 60-minute meal break comes off sessions over 6 hours, and hours split into normal and OT.' },
  { icon: 'fa-solid fa-chart-column', title: 'Live attendance dashboard', text: 'Present, absent, late and early out today, with weekly attendance and behaviour trends.' },
  { icon: 'fa-solid fa-file-excel', title: 'Attendance reports', text: 'A per-day attendance register by employee and month, with Excel and PDF export.' },
  { icon: 'fa-solid fa-calendar-days', title: 'Leave in the same app', text: 'Leave, claims and timesheets sit beside attendance, so approved leave and holidays are counted in the same pay run.' }
]
const checklist = [
  { need: 'Face recognition', how: 'Every check-in and check-out is matched against the employee’s enrolled face samples.' },
  { need: 'GPS geofencing', how: 'The phone must be inside the site’s radius; on time or late is marked against the site’s start time, in the site’s time zone.' },
  { need: 'Offline clocking', how: 'Punches are queued without signal and re-verified in capture order. Punches over 72 hours old are refused; over 24 hours are accepted but flagged for HR.' },
  { need: 'No hardware to buy', how: 'Attendance runs on each employee’s own phone. There is no shared kiosk mode.' },
  { need: 'Multiple sites or outlets', how: 'Sites set up one by one, each with its own radius, working hours and time zone, and allowed-site lists per employee.' },
  { need: 'Supervisor and HR review', how: 'HR approves, rejects, edits times or adds manual records, singly or in bulk; open sessions auto check-out at the site’s cut-off.' },
  { need: 'Link to payroll', how: 'Approved time becomes normal and OT hours against the schedule and flows into Singapore payroll with CPF, SDL and SHG.' }
]
const guides = [
  { to: '/solutions/foreign-worker-attendance-app', title: 'Attendance app for construction foreign workers' },
  { to: '/solutions/payroll-software-singapore', title: 'Payroll software for Singapore' },
  { to: '/resources/construction-payroll-singapore', title: 'Site attendance and payroll in Singapore' }
]
const faqs = [
  { q: 'How does a face and GPS attendance app work?', a: 'The employee opens the app on their own phone and checks in. DeepHR matches their face against the samples they enrolled, checks that the phone is inside the site’s radius, and marks the check-in on time or late against the site’s start time.' },
  { q: 'Do we need to buy a time clock or kiosk?', a: 'No. Every punch comes from the employee’s own signed-in phone, so there is no hardware to install at your office, outlets or sites.' },
  { q: 'What if an employee has no mobile signal?', a: 'The app still works. The phone checks the face and site radius locally and queues the punch; when it reconnects, each punch is re-verified in the order it was captured. Punches over 72 hours old are refused, and over 24 hours are accepted but flagged for HR.' },
  { q: 'Can staff check in at more than one location?', a: 'Yes. You set up each site with its own location, radius, working hours and time zone, and can limit each employee to an allowed list of sites.' },
  { q: 'Is the attendance app only for construction sites?', a: 'No. It works for any Singapore business with staff who start work away from a single office: field service, multiple outlets, client sites or shift teams.' },
  { q: 'Does attendance flow into payroll?', a: 'Yes. HR approves each session, approved time is split into normal and OT hours, and the DeepHR pay run pulls approved attendance, paid leave and holidays for the period.' },
  { q: 'Can we use the attendance app without the rest of CCorex?', a: 'Yes. Attendance is part of DeepHR, which is sold on its own in Starter, Growth and Enterprise tiers, priced per employee. Face and GPS attendance is included from Starter.' },
  { q: 'Is this an AI attendance system?', a: 'Check-in uses AI face recognition on the employee’s own phone, matched against the face samples they registered, plus a GPS check against the site radius. ARIVU, the CCorex AI assistant, then answers questions about logged hours, per day or per employee, over any date range. HR still approves every session. AI alerts for unusual attendance patterns are in early access.' }
]
</script>
