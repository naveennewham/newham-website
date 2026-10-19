// One source of truth for the CCorex app line-up: menus, product grids and app pages read from here.
export interface CcorexApp {
  slug: string
  name: string
  category: string
  tagline: string
  summary: string
  icon: string // Font Awesome class
  color: string // Tailwind text/bg tone for the app's icon tile
  screenshot?: string
  ai?: boolean
  // Release status from the Functional Design Document (Oct 2026). 'preview' = not yet in production.
  status: 'available' | 'preview'
  statusNote?: string
  points?: string[] // three short facts for the Products menu
}

export const apps: CcorexApp[] = [
  {
    slug: 'deepcost', name: 'DeepCost', category: 'MEP estimation',
    tagline: 'Win the bid. Know the cost.',
    summary: 'From tender to priced Form of Tender: AI tender summary, area schedules, material take-off, a priced library and approvals at every stage.',
    points: ['AI tender summary', 'Area-based material take-off', 'FOT AI on the client’s BOQ PDF'],
    status: 'available',
    icon: 'fa-solid fa-calculator', color: 'bg-sky-50 text-sky-700', screenshot: '/images/product/deepcost-mto.webp'
  },
  {
    slug: 'deeptrack', name: 'DeepTrack', category: 'Project delivery & cost control',
    tagline: 'Every project. On budget, on record.',
    summary: 'Budgets, purchasing, invoice matching, client claims, manpower and month-end cost allocation — with approvals built in.',
    points: ['Budget against actual by cost centre', 'PR → PO → invoice matching', 'Client claims with retention & GST'],
    status: 'available',
    icon: 'fa-solid fa-diagram-project', color: 'bg-amber-50 text-amber-700', screenshot: '/images/product/deeptrack-dashboard.webp'
  },
  {
    slug: 'deephr', name: 'DeepHR', category: 'HR & Singapore payroll',
    tagline: 'Hire to retire, fully automated.',
    summary: 'Face-and-GPS attendance on the phone, leave, claims and Singapore payroll with CPF, SDL and SHG.',
    points: ['Face + GPS attendance on the phone', 'Leave, claims and approvals', 'Singapore payroll'],
    status: 'available',
    icon: 'fa-solid fa-user-group', color: 'bg-emerald-50 text-emerald-700', screenshot: '/images/product/deephr-dashboard.webp'
  },
  {
    slug: 'deepplan-ai', name: 'DeepPlan AI', category: 'AI drawing take-off',
    tagline: 'From drawings to quantities with AI.',
    summary: 'Upload drawings, calibrate the scale and measure rooms into a priced BOQ. AI room take-off and symbol counting are in early access.',
    points: ['Scale calibration and rooms', 'AI symbol detection', 'BOQ from your own rates'],
    status: 'available', statusNote: 'AI take-off in early access',
    icon: 'fa-solid fa-compass-drafting', color: 'bg-violet-50 text-violet-700', ai: true
  },
  {
    slug: 'arivu-ai', name: 'ARIVU AI', category: 'AI assistant',
    tagline: 'Ask your business anything.',
    summary: 'Ask questions about your own data across DeepCost, DeepTrack, DeepHR, DeepPlan and Deep Drive — with charts, exports and document search.',
    points: ['Answers in plain language', 'Charts and PDF / Excel exports', 'Read-only across your apps'],
    status: 'available',
    icon: 'fa-solid fa-wand-magic-sparkles', color: 'bg-ai-50 text-ai-700', ai: true
  },
  {
    slug: 'deep-drive', name: 'Deep Drive', category: 'Document storage',
    tagline: 'Every project document, in one place.',
    summary: 'Your organisation\'s document store: folders, uploads, inline viewing and storage tracking, searchable by ARIVU.',
    points: ['Folders and uploads', 'Inline viewing', 'Searchable by ARIVU'],
    status: 'available',
    icon: 'fa-solid fa-folder-open', color: 'bg-indigo-50 text-indigo-700'
  },
  {
    slug: 'pdf-editor', name: 'PDF Editor', category: 'Drawing markup',
    tagline: 'Annotate drawings without leaving CCorex.',
    summary: 'Mark up and sign PDFs: text, signatures, overlays, split and merge, with draft-to-completed states.',
    points: ['Text, signatures and images', 'Split and merge', 'Export annotated PDFs'],
    status: 'available',
    icon: 'fa-solid fa-file-pen', color: 'bg-rose-50 text-rose-700'
  }
]

export const flagship = apps.filter((a) => ['deepcost', 'deeptrack', 'deephr'].includes(a.slug))
export const appBySlug = (slug: string) => apps.find((a) => a.slug === slug)
