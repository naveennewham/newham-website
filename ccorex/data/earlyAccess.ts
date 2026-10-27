// Singapore features offered as early access (not yet generally available).
// Each one links to the demo form with ?interest=<slug>, so Markaiting counts leads per feature.
// When a feature ships, move it into the page's normal feature list and remove it here.
export type EarlyAccessFeature = { slug: string; app: 'deephr' | 'deeptrack' | 'deepplan-ai'; title: string; text: string; icon: string }

export const earlyAccess: EarlyAccessFeature[] = [
  { slug: 'ir8a-ais', app: 'deephr', title: 'IR8A / AIS year-end files', text: 'Year-end employee income files for IRAS, prepared from the year’s payroll.', icon: 'fa-solid fa-file-export' },
  { slug: 'foreign-worker-levy', app: 'deephr', title: 'Foreign worker levy report', text: 'Skill tier per worker and the monthly levy cost per worker and per project, so levy is costed to the job.', icon: 'fa-solid fa-coins' },
  { slug: 'work-pass-alerts', app: 'deephr', title: 'Work Permit expiry alerts', text: 'Alerts to HR before a Work Permit, S Pass or EP expires, with insurance and security bond dates.', icon: 'fa-solid fa-bell' },
  { slug: 'sop-act-claims', app: 'deeptrack', title: 'SOP Act payment claims', text: 'Record when each claim is served, track the payment-response due date and log the response against the claim.', icon: 'fa-solid fa-scale-balanced' },
  { slug: 'retention-release', app: 'deeptrack', title: 'Retention release tracker', text: 'Retention held per project, with release dates at completion and after the defects liability period.', icon: 'fa-solid fa-piggy-bank' },
  { slug: 'variation-orders', app: 'deeptrack', title: 'Variation order register', text: 'Variations raised, approved and claimed, flowing into each progress claim.', icon: 'fa-solid fa-list-check' },
  { slug: 'ai-receipt-scan', app: 'deephr', title: 'AI receipt scan for claims', text: 'Snap a receipt and AI fills in the amount, date, merchant and category on the expense claim, for the employee to check and submit.', icon: 'fa-solid fa-receipt' },
  { slug: 'ai-attendance-alerts', app: 'deephr', title: 'Attendance anomaly alerts', text: 'AI flags unusual patterns — repeated lateness, check-ins from unusual locations, missing punches — for HR to review.', icon: 'fa-solid fa-user-clock' },
  { slug: 'ai-budget-forecast', app: 'deeptrack', title: 'Budget overrun forecast', text: 'AI warns you when committed plus forecast cost is heading past a project’s approved budget.', icon: 'fa-solid fa-chart-line' },
  { slug: 'ai-room-takeoff', app: 'deepplan-ai', title: 'AI room take-off', text: 'Finds walls, outlines each enclosed space and reads its label, with area, perimeter and wall length per room, for the estimator to check.', icon: 'fa-solid fa-vector-square' },
  { slug: 'ai-symbol-detection', app: 'deepplan-ai', title: 'AI symbol detection and count by example', text: 'A model for 23 electrical and fire symbol classes, and auto-count by boxing one symbol, one symbol type at a time.', icon: 'fa-solid fa-crosshairs' },
  { slug: 'ai-invoice-capture', app: 'deeptrack', title: 'Invoice auto-capture', text: 'AI reads vendor invoice PDFs and pre-fills them, ready for matching against the PO and the delivery endorsement.', icon: 'fa-solid fa-file-import' }
]

export const earlyAccessBySlug = (slug?: string) => earlyAccess.find((f) => f.slug === slug)
