// ARIVU AI in DeepHR and DeepTrack: what it reads and can answer today, and the AI features in early access.
// Used by the product pages, the solution template and /products/arivu-ai, so the claims stay the same everywhere.
// Only list what ARIVU's tools read today. ARIVU is read-only and has no payroll tool. Leave is balances only (not who is
// off on which dates); attendance is submitted work-log hours per day and per employee (not clock-in times or sites).
export type ArivuApp = 'deephr' | 'deeptrack'

export const arivuApps: Record<ArivuApp, { reads: string[]; questions: string[] }> = {
  deephr: {
    reads: ['Employees', 'Leave', 'Attendance', 'Claims'],
    // The first three also appear on /products/arivu-ai.
    questions: [
      'How much annual leave does each person have left this year?',
      'How many hours did each person log last week?',
      'Which expense claims are pending?',
      'Show leave balances by leave type for the whole company.',
      'Chart logged hours by day for this month.',
      'Export this month’s approved claims to Excel.'
    ]
  },
  deeptrack: {
    reads: ['Projects', 'Budgets', 'Purchase requests', 'Claims', 'Timesheets', 'Delivery orders'],
    questions: [
      'Show purchase requests by project this month.',
      'How is committed cost tracking against the approved budget?',
      'Which client claims are still unpaid?',
      'Which purchase requests are waiting for approval?',
      'How many timesheet hours were booked to each project last week?',
      'Chart budget against actual for my active projects.'
    ]
  }
}

// Trust notes shown next to every ARIVU block.
export const arivuTrust = [
  { icon: 'fa-solid fa-eye', title: 'Read-only', text: 'ARIVU never creates, changes or approves records. People still submit and approve in the app.' },
  { icon: 'fa-solid fa-user-shield', title: 'Role-aware', text: 'Staff see their own records; managers and admins see their team’s.' },
  { icon: 'fa-solid fa-building-shield', title: 'Your organisation only', text: 'Every lookup is limited to your organisation, with usage budgets and rate limits.' }
]

export const arivuPlanNote = 'ARIVU is included in every CCorex plan, even when you subscribe to DeepHR or DeepTrack on its own, with usage budgets per organisation. Each user must be assigned to it.'

// AI features in early access (see data/earlyAccess.ts), per app.
export const aiEarlyAccess: Record<ArivuApp, string[]> = {
  deephr: ['ai-receipt-scan', 'ai-attendance-alerts'],
  deeptrack: ['ai-budget-forecast', 'ai-invoice-capture']
}

// The compact AI block on each any-sector solution page, keyed by solution slug.
export const arivuSolutions: Record<string, { title: string; lead: string; questions: string[]; note?: string; earlyAccess?: string[] }> = {
  'hr-software-singapore': {
    title: 'AI built in: ask ARIVU about your people',
    lead: 'ARIVU, the AI assistant in every CCorex app, works inside DeepHR. HR and managers ask in plain language about employees, leave, attendance and claims, and get an answer, a chart or an Excel or PDF export.',
    questions: ['How much annual leave does each person have left this year?', 'How many hours did each person log last week?', 'Which expense claims are pending?', 'Show leave balances by leave type for the whole company.'],
    earlyAccess: ['ai-receipt-scan', 'ai-attendance-alerts']
  },
  'payroll-software-singapore': {
    title: 'AI to check the records behind the pay run',
    lead: 'Before payroll, HR can ask ARIVU, the AI assistant in DeepHR, about the attendance, leave and claims that feed the pay run, and export the answer to Excel or PDF.',
    questions: ['Which expense claims are still pending approval?', 'How many hours did each person log this month?', 'Show each employee’s leave balance for this year.', 'Export this month’s approved claims to Excel.'],
    note: 'ARIVU does not run, change or approve payroll. The pay run is prepared and approved by your HR team in DeepHR.',
    earlyAccess: ['ai-receipt-scan']
  },
  'attendance-app-singapore': {
    title: 'AI face check-in, and answers about attendance',
    lead: 'Check-in uses face recognition on the employee’s own phone, with a GPS check against the site radius. Then HR and managers can ask ARIVU, the AI assistant in DeepHR, about the hours logged over any date range.',
    questions: ['How many hours did each person log last week?', 'Summarise Ravi’s logged hours for last month.', 'Chart logged hours by day for this month.', 'Export last month’s hours per employee to Excel.'],
    note: 'HR still approves every attendance session; ARIVU only reads the records.',
    earlyAccess: ['ai-attendance-alerts']
  },
  'leave-management-system-singapore': {
    title: 'AI built in: ask ARIVU about leave balances',
    lead: 'ARIVU, the AI assistant in DeepHR, reads leave balances so HR and managers can see what each person has left without running a report. Answers come back as text, a chart, or an Excel or PDF export.',
    questions: ['How much annual leave does each person have left this year?', 'Show leave balances by leave type for the whole company.', 'What is Ravi’s leave balance this year?', 'Export this year’s leave balances to Excel.'],
    note: 'ARIVU never applies for, approves or changes leave. Requests and approvals stay with people in DeepHR.'
  },
  'project-cost-management-software': {
    title: 'AI built in: ask ARIVU how each project is tracking',
    lead: 'ARIVU, the AI assistant in every CCorex app, works inside DeepTrack. Project managers ask in plain language about budgets, committed and actual cost, claims and timesheets, and get an answer, a chart or an export.',
    questions: ['How is committed cost tracking against the approved budget?', 'Chart budget against actual for my active projects.', 'Which client claims are still unpaid?', 'How many timesheet hours were booked to each project last week?'],
    earlyAccess: ['ai-budget-forecast']
  },
  'procurement-software-singapore': {
    title: 'AI built in: ask ARIVU where each purchase stands',
    lead: 'ARIVU, the AI assistant in DeepTrack, reads purchase requests and delivery orders so buyers and approvers can find what is waiting without running a report.',
    questions: ['Which purchase requests are waiting for approval?', 'Show purchase requests by project this month.', 'Which delivery orders are still waiting to be verified?', 'Export this month’s purchase requests to Excel.'],
    note: 'ARIVU never raises, approves or changes a purchase request or PO. Approvals follow your configured limits.',
    earlyAccess: ['ai-invoice-capture']
  }
}
