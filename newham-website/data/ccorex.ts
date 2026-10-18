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

// Short summaries for the CCorex pages on newhamtech.com (/ccorex/*). They point to
// the canonical product pages on ccorex.com rather than duplicating them.
// Facts follow the CCorex Functional Design Document (see DESIGN_SYSTEM.md rule 4).
export interface CcorexSummary {
  slug: string
  name: string
  title: string
  lead: string
  points: string[]
  screenshot?: { src: string; alt: string; url: string; width: number; height: number }
  image?: { src: string; alt: string; width: number; height: number }
  note?: string
}

export const ccorexSummaries: Record<string, CcorexSummary> = {
  deepcost: {
    slug: 'deepcost', name: 'DeepCost',
    title: 'DeepCost: tender estimation for MEP contractors',
    lead: 'DeepCost takes a tender from the documents you receive to a priced Form of Tender (FOT), on one linked record per tender and trade.',
    points: [
      'AI tender summary reads the uploaded tender documents and fills key fields for review',
      'Area schedule and material take-off by building, floor and room',
      'Price library with validation rules, such as sprinkler type by hazard class',
      'FOT AI overlays your prices on the client’s BOQ PDF',
      'Submit, approve and complete with checklists at every stage'
    ],
    screenshot: { src: '/images/product/deepcost-mto.webp', alt: 'DeepCost material take-off grouped by building, floor and room', url: 'deepcost.app / mto', width: 1433, height: 522 }
  },
  deeptrack: {
    slug: 'deeptrack', name: 'DeepTrack',
    title: 'DeepTrack: project and financial control',
    lead: 'DeepTrack runs a contractor’s projects from contract to profit: budgets, client claims, manpower, procurement and accounts payable.',
    points: [
      'Budgets against actuals with over-budget alerts and version history',
      'Progress claims with retention and GST, and a claim certificate PDF',
      'Timesheets coded to project, workhead and WBS activity',
      'Purchase request to purchase order to payment, with multi-level approvals',
      'Invoice matching against PO, delivery endorsement and request'
    ],
    screenshot: { src: '/images/product/deeptrack-dashboard.webp', alt: 'DeepTrack dashboard with project status, budget overview and pending approvals', url: 'deeptrack.app / dashboard', width: 1647, height: 852 }
  },
  deephr: {
    slug: 'deephr', name: 'DeepHR',
    title: 'DeepHR: HR and payroll for construction teams',
    lead: 'DeepHR is the HR system of record: people, leave, attendance, claims and payroll, with self-service for every employee on their phone.',
    points: [
      'Face and GPS attendance check-in against each site',
      'Leave with Singapore presets, and multi-level approvals',
      'Singapore payroll: CPF, SDL and self-help group funds, MOM proration',
      'Payslips filed to each employee’s documents'
    ],
    screenshot: { src: '/images/product/deephr-payroll.webp', alt: 'DeepHR payroll run selecting employees, pay items and pay period', url: 'deephr.app / payroll', width: 1580, height: 711 }
  },
  'deepplan-ai': {
    slug: 'deepplan-ai', name: 'DeepPlan',
    title: 'DeepPlan: quantities from drawings',
    lead: 'DeepPlan lets estimators turn floor plans into measured rooms, symbol counts and a priced bill of quantities.',
    points: [
      'Upload drawing PDFs and calibrate the scale',
      'Room take-off with areas, perimeters and wall lengths',
      'Count symbols by example across a page',
      'Assign rooms to an area schedule and price from your rate library',
      'Generate and export the BOQ'
    ],
    image: { src: '/images/photos/mep-model-laptop.webp', alt: 'Drawing and model review on a laptop (stock photo)', width: 2000, height: 1055 },
    note: 'DeepPlan’s AI take-off features are in early access and not yet generally available.'
  }
}
