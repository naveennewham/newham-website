# Newham & CCorex website design system

Applies to both sites in this repo: `ccorex/` (ccorex.com, the product) and `newham-website/` (newhamtech.com, the services company that makes CCorex). Reference implementation: `ccorex/pages/index.vue`.

## Positioning

- **Audience:** B2B buyers in Singapore construction — M&E / MEP contractors, main contractors, EPC companies, QS and estimating teams, engineering consultants. Owners, directors, estimation managers, project managers, HR/admin.
- **Look:** enterprise SaaS (think Procore, Autodesk Construction Cloud): light pages, generous white space, one dark navy-teal hero per page, real product screenshots in browser frames, crisp cards. Not neon, not dark-everything.
- **AI story:** CCorex is AI-enabled. ARIVU AI (assistant in every app) and DeepPlan AI (AI drawing take-off) are the AI proof points. Use the `ai` violet colour, `bg-ai-gradient` and `text-ai-gradient` **only** for AI features.
- **Brand relationship:** "CCorex — delivered by Newham Technological Solutions". Newham sells software (CCorex) + specialist M&E engineering services. The hybrid "software + specialists" is Newham's differentiator.

## Content rules (non-negotiable)

1. **No fabricated proof.** No testimonials, client names or logos, case-study metrics, certifications (SOC 2, ISO…), uptime/SLA numbers, customer counts or performance percentages unless the file already had evidence that is clearly real. Remove placeholder people ("John Smith", "ABC Construction").
2. **No unverifiable superlatives.** Do not write "world's #1", "leading", "best-in-class". The sales decks use "World's #1 MEP" and "80% faster" — do not copy those. Describe what the product does instead.
3. **No placeholders left visible.** No "[IMAGE PLACEHOLDER]", lorem ipsum or empty logo boxes. Use a real image from `public/images/` or a coded visual (StepFlow, cards, diagram), or remove the block.
4. **Source of truth for product content:** FIRST the Functional Design Document at `/Users/Naveen/Documents/Projects/Newham/Webiste/Repo/Presentaiton /CCorex Platform — Functional Design Document.md` (authoritative; derived from the code). It overrides the decks where they differ — e.g. FOT = **Form of Tender** (priced tender schedule), not 'final order tracking'; DeepPlan AI take-off is NOT live in production (early access / in development); ARIVU (DeepAssist) is **read-only** across apps (it answers, summarises, charts, exports, searches documents — it does not perform actions); Deep Drive and PDF Editor are in development (label 'Coming soon'); DeepHR supports Singapore and India payroll; sign-in is https://dash.ccorex.com. Second source: the pitch decks, extracted to `/private/tmp/claude-502/pres/*.txt` (CCoreX_Suite_Pitch, DeepCost_Sales_Pitch, DeepTrack_Sales_Pitch, DeepHR_Sales_Pitch). Capability statements from there are fine; marketing stats are not (rule 2).
5. Copy style: plain, specific, construction vocabulary (MTO, BOQ, tender, claims, variations, CPF, MOM, SS CP 52). Short sentences. Sentence-case headings. Contact email: hello@ccorex.com (CCorex). Never invent phone numbers or addresses.
6. Any place a real fact is still missing (price, client quote, address), leave the section out rather than inventing it, and list it in your report.

## Tokens (Tailwind, see `tailwind.config.*`)

- `brand-50…950` (teal; logo is `brand-700` #005D6C), `cyan-400/500/600` (#01ACC8 accent, used for primary CTA on dark), `ink-50…950` (neutrals; body text `ink-600/700`, headings `ink-900`), `ai-50…700` (violet, AI only).
- Fonts: `font-display` (Inter Tight) for headings, `font-sans` (Inter) body.
- Shadows: `shadow-card`, `shadow-lift`, `shadow-frame`. Width: `container-site` (max 1240px).

## Utility classes (`assets/css/main.css`)

`container-site`, `section`, `section-tight`, `eyebrow`, `eyebrow-dark`, `h-display`, `h-section`, `lead`, `lead-dark`, `btn-primary`, `btn-accent` (on dark), `btn-secondary`, `btn-ghost-dark`, `card`, `card-hover`, `icon-tile`, `chip`, `chip-ai`, `bg-hero` (dark gradient hero), `bg-grid` (overlay), `text-ai-gradient`.

## Components (`components/ui/`, auto-imported as `Ui*`)

| Component | Use |
|---|---|
| `UiSectionHeader` | eyebrow + title + lead. Props: `eyebrow, title, lead, center, dark, as`; slots `title`, `lead` |
| `UiBrowserFrame` | screenshot in a browser chrome. Props: `src, alt, url, caption, dark, eager` |
| `UiScreenshotTabs` | tab list + screenshot, for product tours. Props: `tabs[{title,text,src,alt,url}]`, `label` |
| `UiStepFlow` | numbered process steps (3–7). Props: `steps[{title,text}]`, `dark` |
| `UiFeatureCard` | icon + title + text card. Props: `icon` (Font Awesome class), `title, text, tone` |
| `UiFaqList` | accordion + FAQPage JSON-LD. Props: `items[{q,a}]` |
| `UiCtaBand` | closing dark CTA. Props override title/lead/buttons |
| `UiTrustStrip` | security + Singapore compliance strip (CCorex only) |
| `UiAppGrid` | app cards from `data/apps.ts`. Props: `only`, `exclude` (CCorex only) |
| `UiProductHero` | app page hero. Props: `slug, points, screenshot, screenshotAlt, url`; slots `title`, `lead`, `visual` (CCorex only) |
| `UiArivuChat` | animated ARIVU AI chat demo (CCorex only) |
| `UiPlatformDiagram` | hub-and-spoke suite diagram (CCorex only) |
| `UiReveal` | fade-up on scroll (SSR-visible, reduced-motion safe). Props `as`, `delay` |
| `UiVideoBg` | decorative looping background video with poster + overlay; place inside a `relative overflow-hidden` section. Props `mp4, webm?, poster, overlay` |
| `UiChart` | animated SVG `bar` (1–2 series, e.g. budget vs actual), `line`, `donut`. Props `type, title, subtitle, data[{label,value,value2?}], legend, sample (default true → "Sample data" badge), dark`. Illustrative numbers MUST keep `sample` |
| `UiFlowPipeline` | horizontal workflow with a highlight travelling step to step. Props `steps[{title,text,icon,ai?}]`, `dark`, `interval` |
| `UiPhoneFrame` | phone mock; prop `src`/`alt` or default slot (for coded mobile UIs) |

## Page anatomy

1. Dark hero (`bg-hero` + `bg-grid`) with H1, lead, 2 CTAs, a real visual.
2. Alternate light sections: `bg-white` and `bg-ink-50`. One more dark band at most (e.g. AI), then `UiCtaBand`.
3. Every page: `useSeoMeta({ title, description, ogTitle, ogDescription })` (title ≤ 60 chars, description 140–160 chars, primary keyword early) and a canonical link `useHead({ link: [{ rel: 'canonical', href: siteUrl + path }] })`. Exactly one `<h1>`. Product pages add `SoftwareApplication` JSON-LD.

## Images (`public/images/`)

- `product/` — real screenshots (webp): `ccorex-launcher`, `deepcost-{mto,review,catalog,opportunity,dashboard,validation,area-schedule}`, `deeptrack-{dashboard,budget,procurement,claims,timesheet,reports,overview}`, `deephr-{dashboard,my-dashboard,payroll,leave,policies}`. (No DeepPlan screenshot yet.)
- `product/` additions from the Functional Design Document PDF (demo tenant "Meridian", personal data redacted): `ccorex-portal` (portal with DeepAssist tile), `deepplan-dashboard`, `deepplan-detections` (redacted; third-party title block removed), `arivu-deepcost` (redacted), `deephr-{admin-dashboard,org-settings,approval-config,pending-approvals,public-holidays,leave-calendar,attendance-analytics,checkout-approvals,attendance-sites,face-checkin,attendance-reports,payroll-run,payruns,payroll-totals,payslips}`.
- `videos/` (see MEDIA_LICENSES.md — Mixkit Free License): `construction-aerial.mp4` + `-poster.webp`; `blueprint-review.mp4|.webm` + `-poster.webp`. Use only as decorative backgrounds (UiVideoBg), never as product footage.
- `photos/` — licensed stock + brand art (webp): `bim-engineer-workstation`, `bim-team-review`, `mep-model-laptop`, `bim-mep-building`, `ai-workflow`, `ai-core`, `global-talent`, `mep-icon`, `data-analytics`, `hero-ccorex-flow`, `hero-ccorex-suite`, `hero-newham-network`, `hero-building-digital`, `ccorex-hub`.
- Always meaningful `alt`, `loading="lazy"` below the fold, `width`/`height` or aspect classes to avoid layout shift. Never present stock photos as customer projects.

## Accessibility

Real `<button>`/`<a>`; visible focus (global ring); icons `aria-hidden="true"`; text contrast ≥ 4.5:1 (on dark use `ink-200/300`, not `ink-400`, for body text); forms with `<label>`; respect `prefers-reduced-motion` for animation.

## Icons

Font Awesome 6 **free** only (`fa-solid`, `fa-regular`, `fa-brands`). No Pro icons (e.g. `fa-sparkles` is Pro — use `fa-wand-magic-sparkles`). Do not use mdi / flaticon classes in new or rewritten code.

## Newham site (`newham-website/`)

Same tokens and utility classes as CCorex (`tailwind.config.js`, `assets/main.css`; Inter + Inter Tight, Font Awesome only). Extra classes: `field-label`, `field` (form inputs). Layout: `layouts/default.vue` (light sticky header `LayoutNavbar`, `LayoutFooter`); `layouts/ccorex.vue` is an alias kept for compatibility. `error.vue` renders 404/500 in the system. Site URL from `runtimeConfig.public.siteUrl` (`https://newhamtech.com`).

| Component | Use |
|---|---|
| `UiSectionHeader` | as CCorex |
| `UiBrowserFrame` | as CCorex, plus `width`/`height` (intrinsic px, avoids layout shift); `eager` also sets `fetchpriority=high` |
| `UiScreenshotTabs` | as CCorex |
| `UiStepFlow` | as CCorex |
| `UiFeatureCard` | as CCorex, plus optional `to` + `linkLabel` (whole card becomes a link) |
| `UiFaqList` | as CCorex (FAQPage JSON-LD) |
| `UiCtaBand` | Newham defaults: "Book a discovery call" → `/appointment`, "Contact us" → `/contact`; external `secondaryTo` opens in a new tab |
| `HomeHero` | homepage hero (photo + CCorex screenshot) |
| `HomePillars` | the three pillar cards (software / talent / engineering); used on `/`, `/about`, `/services` |
| `CcorexAppSummary` | short CCorex app page. Props `slug` (deepcost, deeptrack, deephr, deepplan-ai). Sets `rel=canonical` to the ccorex.com product page |

Data (`newham-website/data/`, import explicitly): `ccorex.ts` (app list, `ccorexAppUrl(slug)`, `CCOREX_URL`, `CCOREX_SIGNIN_URL`, `ccorexSummaries`), `industries.ts` (`/industries/:id`), `experience.ts` (project experience by trade, `/case-studies/:id`). Keep CCorex claims in line with rule 4 (FOT = Form of Tender; DeepPlan AI take-off early access; ARIVU read-only; Deep Drive and PDF Editor coming soon).

Newham contact: hello@newhamtech.com. Forms post to the existing webhooks (`firefabx.com/webhook/newham-contact`, `…/newham-appointment`) with unchanged payloads.
