// CCorex apps as presented on newhamtech.com. Product detail lives on ccorex.com —
// every app links out to https://ccorex.com/products/<slug>.
export const CCOREX_URL = 'https://ccorex.com'
export const CCOREX_SIGNIN_URL = 'https://dash.ccorex.com'

export interface CcorexApp {
  slug: string
  name: string
  category: string
  summary: string
  icon: string // Font Awesome class
  color: string // Tailwind tone for the icon tile
  ai?: boolean
  status?: string // e.g. 'Early access'
  points?: string[] // three short facts for the menu snapshot
}

export const ccorexApps: CcorexApp[] = [
  {
    slug: 'deepcost', name: 'DeepCost', category: 'MEP estimation',
    summary: 'From tender received to a priced Form of Tender: AI tender summary, area-based take-off, a price library and approvals.',
    icon: 'fa-solid fa-calculator', color: 'bg-sky-50 text-sky-700', ai: true,
    points: ['AI tender summary', 'Area-based material take-off', 'FOT AI on the client’s BOQ PDF']
  },
  {
    slug: 'deeptrack', name: 'DeepTrack', category: 'Project delivery & cost control',
    summary: 'Budgets, procurement, client claims, timesheets and invoice matching per project, with approvals at every step.',
    icon: 'fa-solid fa-diagram-project', color: 'bg-amber-50 text-amber-700',
    points: ['Budget against actual by cost centre', 'PR → PO → invoice matching', 'Client claims with retention & GST']
  },
  {
    slug: 'deephr', name: 'DeepHR', category: 'HR & payroll',
    summary: 'Attendance, leave and claims flowing into Singapore payroll with CPF, SDL and SHG.',
    icon: 'fa-solid fa-user-group', color: 'bg-emerald-50 text-emerald-700',
    points: ['Face + GPS attendance on the phone', 'Leave, claims and approvals', 'Singapore payroll']
  },
  {
    slug: 'deepplan-ai', name: 'DeepPlan AI', category: 'Drawing take-off',
    summary: 'Turn floor plans into measured rooms, quantities and a priced BOQ. AI take-off is in early access.',
    icon: 'fa-solid fa-compass-drafting', color: 'bg-violet-50 text-violet-700', status: 'AI in early access',
    points: ['Scale calibration and rooms', 'AI symbol detection', 'BOQ from your own rates']
  },
  {
    slug: 'arivu-ai', name: 'ARIVU AI', category: 'AI assistant',
    summary: 'Ask questions in plain language and get answers, summaries, charts and exports from your data across the apps. Read-only.',
    icon: 'fa-solid fa-wand-magic-sparkles', color: 'bg-ai-50 text-ai-700', ai: true,
    points: ['Answers in plain language', 'Charts and PDF / Excel exports', 'Read-only across your apps']
  },
  {
    slug: 'deep-drive', name: 'Deep Drive', category: 'Documents',
    summary: 'Your organisation’s project documents in one place: folders, uploads and inline viewing, searchable by ARIVU.',
    icon: 'fa-solid fa-folder-open', color: 'bg-indigo-50 text-indigo-700',
    points: ['Folders and uploads', 'Inline viewing', 'Searchable by ARIVU']
  },
  {
    slug: 'pdf-editor', name: 'PDF Editor', category: 'PDF mark-up & signing',
    summary: 'Mark up, sign, split and merge PDFs on the same sign-in as every other app.',
    icon: 'fa-solid fa-file-pen', color: 'bg-rose-50 text-rose-700',
    points: ['Text, signatures and images', 'Split and merge', 'Export annotated PDFs']
  }
]

export const ccorexAppUrl = (slug: string) => `${CCOREX_URL}/products/${slug}`
