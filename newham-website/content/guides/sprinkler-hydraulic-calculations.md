---
title: "How to calculate a fire sprinkler system: hydraulic calculation step by step"
description: "How to calculate a fire sprinkler system in Singapore: the SS CP 52 method step by step, a worked three-head example with K-factor and Hazen-Williams, and what an SCDF-ready report contains."
slug: sprinkler-hydraulic-calculations
date: 2026-10-15
updated: 2026-10-30
author: "Newham engineering team"
author_role: "M&E estimators and fire protection engineers"
keywords: [how to calculate fire sprinkler system, sprinkler hydraulic calculation example, Hazen-Williams sprinkler, K-factor formula, hydraulic calculation services, sprinkler design outsourcing, fire protection design services Singapore, sprinkler hydraulic calculations, SS CP 52, NFPA 13, SCDF submission]
related: /sprinkler-hydraulic-calculation-services
faq:
  - q: "How do you calculate a fire sprinkler system?"
    a: "Start at the least favoured sprinkler in the hydraulically most remote design area. Its flow is the design density times the area it covers, and its pressure follows from P = (Q ÷ K)². Then work back pipe by pipe: add the Hazen-Williams friction loss and any elevation change to get the pressure at the next head, find that head's flow from Q = K × √P, and add it to the pipe flow. Carry on to the source, add the allowances the code requires, and check the total demand against the water supply curve."
  - q: "Which codes apply to sprinkler hydraulic calculations in Singapore?"
    a: "SS CP 52 is the local code of practice for automatic sprinkler systems and the one the SCDF Fire Code requires. NFPA 13 applies only where the project specification calls for it. Always design to the code edition in force for the project, and format the submission for SCDF."
  - q: "What do I need to send for an outsourced hydraulic calculation?"
    a: "The architectural plans and sections, the sprinkler layout or the brief for one, the hazard classification basis, the water supply data or pump details, the project specification and the required submission format. Missing supply data is the most common cause of rework."
  - q: "Does Newham endorse the calculations as a PE?"
    a: "No. Newham prepares the design and calculations. Where a statutory submission needs Professional Engineer endorsement, Newham coordinates review by a Singapore-registered PE, and those fees are quoted separately."
  - q: "Can you size the fire pump from the hydraulic calculation?"
    a: "Yes. Fire pump design and selection is part of the same service. The calculated system demand sets the duty point the pump has to meet, and the pump curve is then checked against that demand."
  - q: "How is sprinkler design outsourcing priced?"
    a: "Per deliverable for a single design package, or as a monthly retainer if you have a steady pipeline. Billing is in SGD and the scope is confirmed in writing first. Email admin@newhamtech.com for a quote."
---

A sprinkler hydraulic calculation proves that the water supply can deliver the flow and pressure the system needs at its most demanding point. You calculate the hydraulically most remote design area, work back node by node to the source, adding friction and elevation losses, and then compare the total demand with what the town main, tank or fire pump can supply. In Singapore the method follows SS CP 52 under the SCDF Fire Code, with NFPA 13 only where the project specification calls for it, and the report goes into the SCDF submission. Outsourcing the calculation works well when the inputs are fixed and the reviewer knows what a complete report looks like. This guide covers both.

## What a hydraulic calculation has to prove

The calculation answers three questions:

1. **Is the design area correct?** It has to be the area the code requires for the hazard classification, placed where the system is hardest to supply. That is usually the area furthest from the riser, the highest one, or both.
2. **Does every sprinkler in that area get at least the minimum it needs?** That means the code density across the area, and the minimum pressure at the least favoured head.
3. **Can the supply meet the total demand?** The flow and pressure needed at the source, including any allowances the code requires, must sit below the supply curve with the margin the code asks for.

If any of these is weak, the system may look fine on drawings and still fail to perform. That is why reviewers and authorities read the calculation as closely as the layout.

## Inputs to confirm before you calculate

Most rework comes from starting before the inputs are settled. Check that you have:

- [ ] Architectural plans, sections and ceiling heights for every protected area
- [ ] The occupancy and storage information you need to set the hazard classification
- [ ] The code and edition the project is designed to (SS CP 52, plus NFPA 13 if the project specification calls for it)
- [ ] The sprinkler layout, or a clear brief for one, including head type and orientation
- [ ] Pipe material, schedule and the friction loss method the code specifies
- [ ] Water supply data: town main test results, tank capacity, or the pump curve
- [ ] Elevations of the riser, the main runs and the remote area
- [ ] The project specification and any authority or consultant comments
- [ ] The submission format: AutoCAD or Revit, title blocks, report template

## The calculation method, step by step

The numeric values in each step (densities, design areas, minimum pressures, K-factors, allowances and margins) come from the code. Take them from the edition in force for your project, not from an old job or a rule of thumb.

1. **Set the hazard classification.** Classify each area from its occupancy and contents using the code. Where one floor holds more than one hazard, record each and calculate the worst case.
2. **Find the hydraulically most remote area.** Locate the design area where the supply is weakest, usually at the end of the longest run or at the highest level. On large or irregular floors, check more than one candidate. The most remote area is not always the one furthest away in plan.
3. **Number the nodes.** Assign a node to every sprinkler, junction, change of pipe size and change of elevation from the remote area back to the source. Clear numbering makes the report easy to check.
4. **Apply the design criteria.** Set the design density and the minimum pressure at the least favoured sprinkler from the code. Work out that head's flow from its K-factor and the pressure at that point.
5. **Work back node by node.** For each pipe section, calculate the friction loss for the flow it carries, using the method and coefficients the code specifies. Add equivalent lengths for fittings and valves. Add or subtract the pressure from changes in elevation.
6. **Balance the junctions.** Where two flow paths meet, the pressures must match. Adjust the flows until they do. Looped and gridded systems need iteration, which is why they are usually run in calculation software.
7. **Add the required allowances.** Include any hose or other allowances the code requires for the hazard, at the point it specifies.
8. **Compare demand with supply.** Plot the system demand, flow against pressure, on the supply curve. The demand must fall below the curve with the margin the code requires.
9. **Size or check the fire pump.** If the supply needs a pump, the demand point sets the duty the pump must meet. Check the pump's pressure-flow curve against the demand, and confirm duty and standby arrangements.
10. **Issue the report.** Package the calculation with marked-up drawings showing the remote area and node numbers, so a reviewer can trace each figure.

### Tree, looped and gridded systems

A tree system has one path from the riser to each head, so the calculation runs in one direction. Looped and gridded systems feed each head from more than one direction. That evens out pressure but means flows split at every junction and must be balanced by iteration. A hand calculation is practical for small tree systems. For grids, use software and check the output for sensible flow directions and velocities.

## Worked example: a three-head tree branch

The figures below are invented to show the arithmetic only. They are not design values: take the density, design area, minimum pressure, K-factor, pipe data and C-factor for a real project from SS CP 52 and the manufacturer's data. Pressures are in bar, flows in litres per minute and pipe internal diameters in millimetres.

Two formulas do the work:

- **Sprinkler discharge:** Q = K × √P, so P = (Q ÷ K)².
- **Hazen-Williams friction loss per metre:** p = 6.05 × 10⁵ × Q¹·⁸⁵ ÷ (C¹·⁸⁵ × d⁴·⁸⁷), with Q in L/min and d the internal diameter in mm. This is the metric form used in European sprinkler practice, such as EN 12845.

**Assumed inputs:** three sprinklers on one branch, each covering 12 m², a design density of 5 mm/min, K = 80, C = 120, no change in level. Pipes 1 and 2 are 3.2 m long with a 27.3 mm bore; pipe 3 to the range pipe is 3.0 m with a 36.0 mm bore. Fittings are ignored here; a real calculation adds them as equivalent lengths.

1. **Head 1 (most remote).** Flow = density × area = 5 × 12 = 60.0 L/min. Pressure = (60 ÷ 80)² = 0.562 bar.
2. **Pipe 1 (60.0 L/min).** Loss = 0.0170 bar/m × 3.2 m = 0.054 bar, so the pressure at head 2 is 0.562 + 0.054 = 0.617 bar.
3. **Head 2.** Flow = 80 × √0.617 = 62.8 L/min. It discharges more than head 1 because it sees more pressure.
4. **Pipe 2 (60.0 + 62.8 = 122.8 L/min).** Loss = 0.0640 bar/m × 3.2 m = 0.205 bar, so the pressure at head 3 is 0.822 bar.
5. **Head 3.** Flow = 80 × √0.822 = 72.5 L/min.
6. **Pipe 3 (195.4 L/min).** Loss = 0.0393 bar/m × 3.0 m = 0.118 bar, so the branch needs **195.4 L/min at 0.940 bar** where it joins the range pipe.

| Node | Flow at head (L/min) | Pressure (bar) | Actual density (mm/min) |
|---|---:|---:|---:|
| Head 1 | 60.0 | 0.562 | 5.00 |
| Head 2 | 62.8 | 0.617 | 5.24 |
| Head 3 | 72.5 | 0.822 | 6.04 |
| Branch inlet | 195.4 (total) | 0.940 | |

Every head nearer the supply discharges above the minimum density, which is why the most remote head sets the design. In a full calculation you carry on the same way through the range pipe, risers, valves and changes of level to the source, add any allowances the code requires, and plot the total demand against the supply curve.

## What each part of the report checks

| Report element | What it checks | Where the values come from |
|---|---|---|
| Hazard classification | The design basis is right for the occupancy | Code classification tables |
| Remote area plan | The worst-case area was chosen and marked | Layout and calculation |
| Node-by-node table | Flow, pipe size, friction loss and pressure at each node | Calculation software or hand method |
| Least favoured sprinkler | Minimum pressure and flow are met | Code criteria and head K-factor |
| Demand vs supply graph | The supply meets the demand with the required margin | Supply test data or pump curve |
| Pump data | The pump can deliver the duty point | Manufacturer's curve |

## What a submission-ready package contains

A calculation that is correct but hard to follow still slows approval. A complete package usually has:

- A summary sheet: project, hazard classification, code and edition, design criteria and the result
- A remote area plan with node numbers matching the calculation
- The node-by-node calculation output
- The demand and supply graph
- The supply data source, such as a flow test record or the pump curve
- Pipe material and friction loss basis
- Riser diagrams and floor plans in the Singapore submission format

The drawings and calculation must match. If the layout changes after the calculation, recalculate. Do not just update the drawing. Where PE endorsement is required, the PE will review the calculation alongside the drawings, so a clean package saves a review cycle.

## Sprinkler design outsourcing: what to hand over and what to keep

Outsourcing hydraulic calculations works best as a defined handover. Send the inputs listed above in one transmittal and name one person on your side to answer queries. Agree the deliverables in writing: layout, calculation, pump selection, submission drawings, or all of them.

Keep these decisions in-house or make sure they are signed off by you:

- The hazard classification, if it depends on how the owner will use the space
- Changes to the water supply strategy, such as adding a tank or pump
- Anything that affects other trades' coordination, such as main pipe routes through congested ceilings

If you need shop drawings and coordination models as well as the design, see [shop drawing services](/shop-drawing-services). For the full design scope, including fire alarm, gas suppression, wet and dry risers and hose reels, see [fire protection design](/fire-protection-design).

## Common mistakes

- **Choosing the remote area by eye.** The furthest area in plan is not always the hardest to supply. Check the highest floor and long branch lines as well.
- **Using values from an old project.** Densities, areas and pressures change with the hazard classification and the code edition. Take them from the code each time.
- **Leaving out elevation.** Pressure lost to height is easy to miss when the calculation is done on a floor plan.
- **Missing fittings.** Equivalent lengths for elbows, tees and valves add up on long runs.
- **Assuming the supply.** Calculating against a supply figure nobody has tested leads to a failed check later. Use test data or a confirmed pump curve.
- **Drawing and calculation out of step.** A late change in pipe size or head position invalidates the result unless it is recalculated.
- **No pump margin check.** The pump must meet the demand point on its actual curve, not just its nameplate rating.

## Related guides

If the sprinkler package is part of a tender, see the [MEP tender submission checklist](/guides/mep-tender-submission-checklist). If you are deciding how to staff design and estimating work, see [outsourcing MEP estimation](/guides/outsourcing-mep-estimation).

- [Sprinkler hazard classification under SS CP 52](/guides/sprinkler-hazard-classification-singapore)
- [Wet and dry riser requirements in Singapore](/guides/wet-and-dry-riser-requirements-singapore)

## How Newham can help

Newham's fire protection engineers prepare sprinkler layouts, hydraulic calculations and fire pump selection to SS CP 52, with NFPA 13 where the project specification calls for it, and package them as submission drawings in Singapore format. Where a submission needs Professional Engineer endorsement, we coordinate review by a Singapore-registered PE and quote those fees separately. Work is priced per deliverable or on a monthly retainer, billed in SGD, with the scope confirmed in writing first. See our [sprinkler hydraulic calculation services](/sprinkler-hydraulic-calculation-services) and [fire protection design](/fire-protection-design), or [book a discovery call](/appointment) to scope your next package.
