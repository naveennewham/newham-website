<template>
  <SolutionLanding
    slug="construction-timesheet-software"
    app="deeptrack"
    app-name="DeepTrack"
    sub-category="Construction timesheet and manpower software"
    eyebrow="Manpower & timesheets · Singapore"
    seo-title="Construction Timesheet and Manpower Tracking Software Singapore"
    seo-description="Construction timesheet software for Singapore contractors: workers and designations, individual and bulk timesheets coded to project, workhead and WBS, PM approval, labour cost per project."
    h1="Construction timesheet and manpower tracking software"
    lead="DeepTrack records who worked on which project, on what, and for how long: individual or bulk timesheets coded to project, BCA workhead, WBS activity and business unit, approved by the project manager, then costed at actual hourly rates at month end."
    :hero-points="['Workers & designations', 'Individual & bulk timesheets', 'Coded to project, workhead & WBS', 'PM approval', 'Labour cost per project']"
    problem-title="Labour is the project cost nobody can see"
    :problems="problems"
    flow-title="From site hours to true project labour cost"
    :flow="flow"
    feature-title="What project managers and finance get"
    :features="features"
    checklist-title="What to look for in construction timesheet software"
    checklist-lead="A construction timesheet has to say more than hours worked: which project, which part of the work, and whether the time was productive. Here is how DeepTrack handles it."
    :checklist="checklist"
    :guide-links="guides"
    :faqs="faqs"
    cta-title="See your manpower in DeepTrack"
    cta-lead="Bring a week of site timesheets to a 30-minute demo. We will code them to projects and show labour cost against budget."
  />
</template>

<script setup lang="ts">
const problems = [
  { icon: 'fa-solid fa-clipboard-list', title: 'Paper and chat timesheets', text: 'Hours arrive from each site on paper or in group chats, and are typed into a spreadsheet at month end.' },
  { icon: 'fa-solid fa-link-slash', title: 'Hours without a project', text: 'Time is recorded per worker but not per project or activity, so labour lands in overheads.' },
  { icon: 'fa-solid fa-chart-pie', title: 'Margins that look too good', text: 'Without labour cost on each project, job margins look better than they are until the project closes.' }
]
const flow = [
  { title: 'Workers', text: 'Set up with designations.', icon: 'fa-solid fa-people-group' },
  { title: 'Timesheets', text: 'Individual or bulk entry.', icon: 'fa-solid fa-clock' },
  { title: 'Coded', text: 'Project, workhead, WBS, business unit.', icon: 'fa-solid fa-tags' },
  { title: 'PM approves', text: 'Before the hours are costed.', icon: 'fa-solid fa-user-check' },
  { title: 'Month-end cost', text: 'Labour at actual hourly rates.', icon: 'fa-solid fa-coins' }
]
const features = [
  { icon: 'fa-solid fa-id-badge', title: 'Workers and designations', text: 'A register of workers and their designations, with an employee cost register for hourly rates.' },
  { icon: 'fa-solid fa-table-cells', title: 'Individual and bulk timesheets', text: 'Enter one worker’s week or a whole gang’s day in one go.' },
  { icon: 'fa-solid fa-tags', title: 'Coded properly', text: 'Each hour is coded to project, BCA workhead, WBS activity and business unit, and typed as productive, idle, training or tender.' },
  { icon: 'fa-solid fa-user-check', title: 'Approved by the PM', text: 'Project managers approve timesheets for their projects before the hours are costed.' },
  { icon: 'fa-solid fa-coins', title: 'Labour cost per project', text: 'The month-end run allocates direct labour at actual hourly rates, plus the worker pool and overheads, then locks the period.' },
  { icon: 'fa-solid fa-comments', title: 'Ask ARIVU', text: 'Ask in plain language, for example how many timesheet hours were booked to each project last week.' }
]
const checklist = [
  { need: 'Hours per project and activity', how: 'Timesheets coded to project, BCA workhead, WBS activity and business unit.' },
  { need: 'Idle and non-project time', how: 'Each hour is typed as productive, idle, training or tender, so lost time is visible.' },
  { need: 'Fast entry for site teams', how: 'Bulk timesheets for a gang or a whole site, as well as individual entry.' },
  { need: 'Approval before costing', how: 'Project managers approve timesheets for their own projects.' },
  { need: 'Labour in the project margin', how: 'Month-end allocation at actual hourly rates, with timesheets and costs frozen when the period is locked.' },
  { need: 'Link to payroll', how: 'If you also use DeepHR, attendance, leave and payroll run there, and timesheets and labour cost flow to projects in DeepTrack at month end.' }
]
const guides = [
  { to: '/resources/budget-vs-actual-construction', title: 'Budget vs actual in construction' },
  { to: '/resources/construction-payroll-singapore', title: 'Construction payroll in Singapore' },
  { to: '/resources/bca-contractor-registration-workheads', title: 'BCA workheads, grades and tendering limits' },
  { to: '/solutions/project-cost-management-software', title: 'Project cost management software' }
]
const faqs = [
  { q: 'What is construction timesheet software?', a: 'It records the hours each worker spends on each project and activity, gets them approved, and turns them into labour cost on the project. DeepTrack codes every hour to project, BCA workhead, WBS activity and business unit.' },
  { q: 'Can we enter timesheets for a whole gang at once?', a: 'Yes. DeepTrack supports bulk timesheets as well as individual entry.' },
  { q: 'Who approves timesheets?', a: 'The project manager approves timesheets for their projects before the hours are costed at month end.' },
  { q: 'How is labour cost worked out?', a: 'The month-end run allocates direct labour at actual hourly rates from the employee cost register, plus the worker pool, HQ and business-unit overhead and project overhead, then locks the period.' },
  { q: 'Does this run payroll?', a: 'No. DeepTrack tracks manpower and labour cost on projects. Payroll with CPF, SDL and SHG runs in DeepHR, which you can add on the same sign-in.' },
  { q: 'How is DeepTrack priced?', a: 'Manpower and timesheets are in the Growth and Enterprise plans. Pricing is shared on request; book a demo or email admin@newhamtech.com.' }
]
</script>
