// "Project experience" by trade. Replaces the old case studies, which used invented
// clients and metrics. No client names, project counts or outcome numbers here —
// add real, approved case studies only when the owner supplies them.
export interface Trade {
  id: string
  name: string
  icon: string
  summary: string
  deliverables: string[]
  standards: string[]
  roles: string[]
}

export const trades: Trade[] = [
  {
    id: 'fire-protection', name: 'Fire protection', icon: 'fa-solid fa-fire-extinguisher',
    summary: 'Sprinkler, fire alarm, gas suppression, riser and hose reel systems, from design and calculations to submission drawings.',
    deliverables: ['Sprinkler layouts and riser diagrams', 'Hydraulic calculation reports', 'Fire pump sizing and pump room layouts', 'Fire alarm zoning and cause-and-effect matrices', 'Gas suppression agent and pipe sizing', 'SCDF submission drawing packages'],
    standards: ['SS CP 52', 'NFPA 13', 'SS CP 10', 'BS 5839'],
    roles: ['Fire protection engineers', 'Drafters', 'Estimators']
  },
  {
    id: 'acmv', name: 'ACMV', icon: 'fa-solid fa-fan',
    summary: 'Air-conditioning and mechanical ventilation: coordination models, shop drawings, take-offs and BOQs.',
    deliverables: ['Coordination models and shop drawings', 'Ductwork and piping take-offs', 'BOQs and rate build-ups', 'Variation pricing'],
    standards: ['Local submission formats', 'Client and consultant specifications'],
    roles: ['BIM modellers', 'Drafters', 'Estimators & QS']
  },
  {
    id: 'elv', name: 'ELV', icon: 'fa-solid fa-network-wired',
    summary: 'Extra-low-voltage systems such as CCTV, access control and structured cabling: layouts, take-offs and tender support.',
    deliverables: ['ELV layouts and schematics', 'Device and cable take-offs', 'BOQs and tender compilation', 'As-built documentation'],
    standards: ['Client and consultant specifications'],
    roles: ['Drafters', 'Estimators', 'Tender coordinators']
  },
  {
    id: 'plumbing-sanitary', name: 'Plumbing & sanitary', icon: 'fa-solid fa-faucet-drip',
    summary: 'Wet services: water supply, sanitary and drainage drawings, take-offs and coordination.',
    deliverables: ['Plumbing and sanitary layouts', 'Pipe and fitting take-offs', 'Coordination with other services', 'As-built drawings'],
    standards: ['Local submission formats'],
    roles: ['BIM modellers', 'Drafters', 'Estimators']
  },
  {
    id: 'electrical', name: 'Electrical', icon: 'fa-solid fa-bolt',
    summary: 'Power and lighting layouts, schematics and take-offs for building services packages.',
    deliverables: ['Lighting and power layouts', 'Single-line and riser schematics', 'Cable and containment take-offs', 'BOQs'],
    standards: ['Client and consultant specifications'],
    roles: ['Drafters', 'Estimators & QS']
  },
  {
    id: 'commercial-support', name: 'Commercial & tender support', icon: 'fa-solid fa-file-invoice-dollar',
    summary: 'The commercial side of M&E projects: tenders, queries, document control, cost tracking and progress claims.',
    deliverables: ['Tender compilation and compliance checklists', 'RFIs, clarifications and addenda', 'Drawing registers and transmittals', 'Budget vs actual and variations', 'Monthly progress claims'],
    standards: ['Singapore tender formats'],
    roles: ['Tender coordinators', 'Quantity surveyors', 'Document controllers']
  }
]

export const tradeById = (id: string) => trades.find((t) => t.id === id)
