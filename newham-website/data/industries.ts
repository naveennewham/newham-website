// Sectors Newham supports. Describes typical M&E scope and how each pillar helps —
// no client names, project counts or outcomes (DESIGN_SYSTEM.md content rules).
export interface Industry {
  id: string
  name: string
  icon: string
  summary: string
  scope: string[]
  software: string
  talent: string
  engineering: string
}

export const industries: Industry[] = [
  {
    id: 'commercial-construction', name: 'Commercial buildings', icon: 'fa-solid fa-building',
    summary: 'Offices and mixed-use developments with full M&E packages and tight submission programmes.',
    scope: ['Sprinklers, fire alarm and hose reels', 'ACMV and mechanical ventilation', 'ELV, electrical and plumbing'],
    software: 'Price each trade in DeepCost and control budgets, procurement and claims in DeepTrack.',
    talent: 'BIM modellers and drafters for coordination models and shop drawings.',
    engineering: 'Fire protection design, hydraulic calculations and BOQs for tender.'
  },
  {
    id: 'residential-development', name: 'Residential', icon: 'fa-solid fa-house',
    summary: 'Condominiums and housing developments where repeated unit types reward a clean take-off.',
    scope: ['Residential sprinklers and fire alarm', 'Plumbing and sanitary', 'Electrical and ELV'],
    software: 'Area schedules by block, floor and unit in DeepCost.',
    talent: 'Estimators and QS for take-offs, BOQs and variations.',
    engineering: 'Sprinkler layouts and submission drawing packages.'
  },
  {
    id: 'industrial-facilities', name: 'Industrial facilities', icon: 'fa-solid fa-industry',
    summary: 'Factories and warehouses with high-hazard storage and process requirements.',
    scope: ['High-hazard and storage sprinklers', 'Fire pumps and tanks', 'Mechanical ventilation and electrical'],
    software: 'Validation rules in DeepCost tie component choice to hazard class.',
    talent: 'Fire protection engineers and drafters familiar with SCDF submissions.',
    engineering: 'Hydraulic calculations, fire pump selection and gas suppression design.'
  },
  {
    id: 'data-centres', name: 'Data centres', icon: 'fa-solid fa-server',
    summary: 'Services-heavy builds where fire protection, cooling and power dominate the M&E scope.',
    scope: ['Gas suppression and detection', 'ACMV and cooling', 'Electrical distribution and ELV'],
    software: 'Track budgets, procurement and claims per package in DeepTrack.',
    talent: 'BIM modellers for dense services coordination.',
    engineering: 'Clean agent and inert gas suppression design and fire alarm design.'
  },
  {
    id: 'healthcare-facilities', name: 'Healthcare', icon: 'fa-solid fa-hospital',
    summary: 'Hospitals and clinics with demanding services, phasing and documentation.',
    scope: ['Fire protection and alarm', 'ACMV for clinical areas', 'Medical-grade electrical and ELV'],
    software: 'Document control and approvals across a long programme.',
    talent: 'Document controllers, drafters and QS for multi-phase work.',
    engineering: 'Fire alarm cause-and-effect matrices and submission packages.'
  },
  {
    id: 'infrastructure', name: 'Infrastructure', icon: 'fa-solid fa-road',
    summary: 'Transport and public works with significant M&E and fire safety scope.',
    scope: ['Fire protection and wet and dry risers', 'Tunnel and station ventilation', 'Electrical and ELV systems'],
    software: 'Manpower and timesheets coded to project and WBS activity in DeepTrack.',
    talent: 'Tender and commercial coordinators for large compliance-heavy tenders.',
    engineering: 'Riser design, tender queries, addenda and progress claims.'
  },
  {
    id: 'retail-commercial', name: 'Retail & A&A', icon: 'fa-solid fa-store',
    summary: 'Shopping centres and addition & alteration works, often in occupied buildings.',
    scope: ['Sprinkler and fire alarm modifications', 'ACMV alterations', 'Electrical and ELV fit-out'],
    software: 'Revisions and variations tracked on one record in DeepCost and DeepTrack.',
    talent: 'Drafters for as-built and alteration drawings.',
    engineering: 'Hydraulic checks on modified systems and variation pricing.'
  }
]

export const industryById = (id: string) => industries.find((i) => i.id === id)
