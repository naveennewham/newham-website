---
title: "CORENET X for MEP teams: BIM submission guide"
description: "What CORENET X changes for M&E teams: the gateways, IFC+SG models, mandatory dates as of October 2026, and what to prepare in the MEP model."
slug: corenet-x-mep-bim-submission
date: 2026-10-18
author: "Newham engineering team"
author_role: "M&E estimators and fire protection engineers"
keywords: [CORENET X, CORENET X BIM submission, CORENET X MEP, IFC+SG, IFC-SG, BIM submission Singapore, Construction Gateway, MEP model]
related: /shop-drawing-services
faq:
  - q: "Is CORENET X mandatory for my project?"
    a: "As of October 2026, CORENET X is mandatory for new projects of 30,000 m² GFA and above since 1 October 2025, and for new projects of 5,000 m² GFA and above from 1 October 2026. Projects of 5,000 m² and above that began submissions in CORENET 2 by 30 September 2026 may continue there for now, and projects below 5,000 m² are not required to onboard. Check URA/BCA circular DC26-08 for the details."
  - q: "What is IFC+SG?"
    a: "IFC+SG is the format for BIM models submitted through CORENET X. Models are exported to the international IFC4 standard, with Singapore-specific property sets (SGPsets) and parameters that carry the information agencies used to read from 2D drawings."
  - q: "When does the M&E model have to be submitted?"
    a: "The first Construction Gateway submission must include the full Architectural and M&E models alongside the structural model. Some M&E content, such as the sanitary model for PUB, can be needed earlier at the Design Gateway."
  - q: "Do we still need 2D drawings under CORENET X?"
    a: "Yes, for some items. Details that cannot be shown in the model, calculations and supporting documents are submitted separately, and Independent Submissions such as SCDF fire protection and mechanical ventilation plans can be in non-BIM format. Where both exist, the 3D model takes precedence unless the QP states otherwise."
  - q: "Does Newham submit to CORENET X?"
    a: "No. Submissions are made by the Qualified Persons on the project. Newham prepares BIM models, drawings and designs for M&E teams. Where Professional Engineer endorsement is needed, Newham coordinates review by a Singapore-registered PE, and those fees are quoted separately."
---

CORENET X is Singapore's new regulatory submission system for building works, run jointly by BCA, URA, LTA, NEA, NParks, PUB and SCDF. For M&E teams, the big change is that approval is based on a coordinated BIM model in the IFC+SG format rather than mainly on 2D drawings. Instead of separate submissions to each agency, a project goes through a small number of gateways, and the first Construction Gateway submission must include the full M&E model. As of October 2026, CORENET X is mandatory for new projects of 5,000 m² GFA and above. This guide explains the gateways, the mandatory dates and scope, and what an M&E consultant or contractor has to put in the model.

Everything below is checked against official sources as of October 2026: the [CORENET X site](https://info.corenet.gov.sg/), the [CORENET X Code of Practice](https://info.corenet.gov.sg/regulatory-process/corenet-x-code-of-practice) (Fourth Edition, published 2026-09) and the URA/BCA circulars linked below. The rules are still being updated, so confirm the current position before you start a project.

## What CORENET X changes for M&E teams

Under CORENET 2, each agency mostly reviewed its own 2D plans. CORENET X changes four things that matter to MEP teams:

1. **Gateways instead of agency-by-agency approvals.** Agencies review a coordinated submission together at each gateway.
2. **BIM is the main submission.** Architectural, C&S and M&E models are submitted in IFC+SG format. Where a submission has both a 3D model and 2D plans, the [typical submission package page](https://info.corenet.gov.sg/regulatory-process/about-the-new-submission-process/typical-submission-package) says the model takes precedence unless the QP states in the cover letter which 2D plans are for approval.
3. **Coordination before submission, not after.** All discipline models must be geo-referenced and federate into one project model. Agencies cannot start processing models that are not geo-referenced.
4. **Data, not just geometry.** Agencies read properties in the model, such as space use, fire ratings and system declarations, so missing data is as much a problem as missing objects.

## The gateway stages

According to the [3-gateway process page](https://info.corenet.gov.sg/regulatory-process/about-the-new-submission-process/3-gateway-process) and the [submission workflows page](https://info.corenet.gov.sg/regulatory-process/about-the-new-submission-process/submission-workflows):

| Stage | Purpose | What it means for M&E |
|---|---|---|
| Design Gateway | Resolve multi-agency key parameters before detailed design | Limited M&E content, for example a sanitary model showing the last inspection chamber for PUB |
| Piling Gateway (optional) | Start piling before the Construction Gateway | Mainly C&S |
| Construction Gateway | Resolve multi-agency design details before main works | The first submission must include the full Architectural and M&E models plus the C&S model |
| Independent Submissions | Agency-specific items with no cross-agency dependency, in parallel with the gateways | Includes SCDF fire protection and mechanical ventilation plans; can be non-BIM |
| Completion Gateway | As-built plans, technical clearances and TOP/CSC | Technical clearances such as SCDF's TFP/FSC, then the overall TOP/CSC application |

Submissions are made by the Qualified Persons through the [CORENET X Submission Portal](https://portal.corenet.gov.sg/). The submission workflows page gives a service level of up to 20 working days for agencies to respond at the Design Gateway; check the current Code of Practice for other stages.

## Mandatory dates and scope, as of October 2026

The implementation plan has changed more than once, so date your information.

- **1 October 2025:** CORENET X mandatory for new projects with GFA of 30,000 m² and above ([URA circular DC25-07](https://www.ura.gov.sg/guidelines/circulars/dc25-07/)).
- **1 October 2026:** CORENET X Gateway Processes mandatory for new projects with GFA of 5,000 m² and above, covering new buildings, additions and extensions, and major alteration works where the GFA created or affected meets the threshold ([URA/BCA circular DC26-08, 23 July 2026](https://www.ura.gov.sg/guidelines/circulars/dc26-08/)).
- **Transition:** projects of 5,000 m² and above that began submissions in CORENET 2 by 30 September 2026 may continue in CORENET 2 for now. Ongoing projects may continue in CORENET 2 until further details are announced.
- **Below 5,000 m²:** not required to onboard the Gateway Processes.

**Conflicting sources.** The earlier circular [DC25-01 (January 2025)](https://www.ura.gov.sg/guidelines/circulars/dc25-01/) planned CORENET X for all new projects regardless of GFA from 1 October 2026, and onboarding of all ongoing projects by 1 October 2027. DC26-08 is the later circular and revises that plan. The CORENET X home page, as of October 2026, still headlines only the 30,000 m² phase. If you are unsure which applies, ask through the [CORENET X enquiry form](https://go.gov.sg/cxenquiry).

## IFC+SG in brief

[IFC+SG](https://info.corenet.gov.sg/ifc-sg/start-here/WhatIsIFCSG) defines how BIM models are structured for CORENET X. The Code of Practice requires models to be exported to the international IFC4 standard, with Singapore-specific property sets (SGPsets) and parameters for information that IFC does not cover. Teams model in their usual authoring tools and export using the IFC+SG mapping, then check the export with the IFC+SG Onboarding Checklist so no data is lost.

The [Model Checker](https://info.corenet.gov.sg/submission-portal-resource/more/model-checker) on the Submission Portal runs three kinds of checks before submission: an IFC schema check, a quality check for missing mandatory properties and misaligned discipline models, and a regulatory compliance check for selected rules. The Code of Practice tells QPs to use it during design and before submission.

## What an M&E consultant or contractor must prepare in the model

The exact list depends on the project and agencies, and the Code of Practice (Section 3 by agency, Section 4 for the "Identified Components") is the reference. As a working checklist:

### Set-up and coordination

- [ ] Model geo-referenced to SVY21 (EPSG:3414) and Singapore Height, matching the architectural and structural models
- [ ] Storey names and elevations identical across all discipline models
- [ ] Separate, federatable discipline models, split into the blocks and parts the project has agreed
- [ ] IFC4 export using the current IFC+SG mapping, checked with the Onboarding Checklist
- [ ] Clashes between services and structure resolved before export, since the quality check looks at coordination

### Systems and components

- [ ] Ducts, pipes, air terminals, mechanical equipment such as tanks and pumps, and sanitary fittings modelled with the correct IFC entities
- [ ] Pipe sizes, locations and gradients modelled accurately where agencies check them, for example sanitary and drainage for PUB
- [ ] Required SGPset properties filled in, not left at default values

### Fire safety content for SCDF

The SCDF section of the Code of Practice asks the QP to declare, space by space, which fire alarm and protection systems are provided, and lists components to be modelled. Examples:

- Fire alarm panels, manual call points, sounders and visual alarm devices
- Sprinkler control valves, breeching inlets (2-way or 4-way) and landing valves
- Wet riser tanks and pumps, hose reel cabinets, and private or public hydrants
- Space properties for ventilation mode and smoke control system type

Automatic detectors are not modelled; they are recorded as a space property. Some items, such as fire pumps and water tanks, can be represented by suitable objects rather than modelled in full. Detailed fire protection and mechanical ventilation plans, with schematics and calculations, go in as Independent Submissions and can be 2D. See our [SCDF fire safety plan submission guide](/guides/scdf-fire-safety-plan-submission).

### Outside the model

- Design calculations and reports
- 2D details that cannot be shown in 3D
- Any 2D plans the QP has stated are for approval

## Common mistakes

- **Modelling for coordination only.** A clash-free model can still fail the quality check if required properties are missing.
- **Late geo-referencing.** If disciplines use different origins or storey levels, the models will not federate and processing cannot start.
- **Assuming the old dates.** Earlier circulars set different thresholds. Check the latest circular before you plan.
- **Exporting without checking.** Data can be lost in the IFC export. Use the Onboarding Checklist and the Model Checker before every submission.
- **3D and 2D that disagree.** The model takes precedence by default, so a correct drawing will not save an incorrect model.
- **Leaving M&E to the end.** The first Construction Gateway submission needs the full M&E model, so M&E modelling has to run alongside architecture.

## Related guides

For the fire safety side of the same submission, see [SCDF fire safety plan submission](/guides/scdf-fire-safety-plan-submission). For handover at the end of the project, see [as-built drawings and MEP handover](/guides/as-built-drawings-handover). For tender stage, see the [MEP tender submission checklist](/guides/mep-tender-submission-checklist).

## How Newham can help

Newham's BIM modellers and drafters work in Revit MEP, AutoCAD and Navisworks to build M&E coordination models, shop drawings and as-built documentation, to your templates and the project's IFC+SG requirements. Newham is not a QP or PE firm, and submissions to CORENET X are made by the project's Qualified Persons. Where Professional Engineer endorsement is needed for design work we prepare, we coordinate review by a Singapore-registered PE and quote those fees separately. Work is priced per deliverable or on a monthly retainer, billed in SGD, with the scope confirmed in writing first. See [shop drawing services](/shop-drawing-services), or [book a discovery call](/appointment) to scope your next package.
