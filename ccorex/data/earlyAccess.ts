// Singapore features offered as early access (not yet generally available).
// Each one links to the demo form with ?interest=<slug>, so Markaiting counts leads per feature.
// When a feature ships, move it into the page's normal feature list and remove it here.
export type EarlyAccessFeature = { slug: string; app: 'deephr' | 'deeptrack'; title: string; text: string; icon: string }

export const earlyAccess: EarlyAccessFeature[] = [
  { slug: 'ir8a-ais', app: 'deephr', title: 'IR8A / AIS year-end files', text: 'Year-end employee income files for IRAS, prepared from the year’s payroll.', icon: 'fa-solid fa-file-export' },
  { slug: 'foreign-worker-levy', app: 'deephr', title: 'Foreign worker levy report', text: 'Skill tier per worker and the monthly levy cost per worker and per project, so levy is costed to the job.', icon: 'fa-solid fa-coins' },
  { slug: 'work-pass-alerts', app: 'deephr', title: 'Work Permit expiry alerts', text: 'Alerts to HR before a Work Permit, S Pass or EP expires, with insurance and security bond dates.', icon: 'fa-solid fa-bell' },
  { slug: 'sop-act-claims', app: 'deeptrack', title: 'SOP Act payment claims', text: 'Record when each claim is served, track the payment-response due date and log the response against the claim.', icon: 'fa-solid fa-scale-balanced' },
  { slug: 'retention-release', app: 'deeptrack', title: 'Retention release tracker', text: 'Retention held per project, with release dates at completion and after the defects liability period.', icon: 'fa-solid fa-piggy-bank' },
  { slug: 'variation-orders', app: 'deeptrack', title: 'Variation order register', text: 'Variations raised, approved and claimed, flowing into each progress claim.', icon: 'fa-solid fa-list-check' }
]

export const earlyAccessBySlug = (slug?: string) => earlyAccess.find((f) => f.slug === slug)
