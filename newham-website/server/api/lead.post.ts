// Website enquiries → Markaiting CRM. Runs on the server (Vercel function), so the
// ingest secret never reaches the browser. First-touch attribution comes from the
// mk_ft cookie, which exists only if the visitor accepted marketing cookies.
// Optionally also forwards the raw form to a legacy webhook (email notifications).

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const str = (v: unknown, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : undefined) || undefined

// "21–50 employees" → 35, so lead scoring can compare it with the target company size.
function employees(size?: string) {
  const n = (size ?? '').match(/\d+/g)?.map(Number) ?? []
  if (!n.length) return undefined
  return n.length > 1 ? Math.round((n[0]! + n[1]!) / 2) : n[0]
}

export default defineEventHandler(async (event) => {
  const cfg = useRuntimeConfig(event) as unknown as {
    markaitingUrl?: string; markaitingLeadSecret?: string; markaitingWorkspace?: string; legacyLeadWebhook?: string; legacyAppointmentWebhook?: string; public: { siteUrl?: string }
  }
  const body = (await readBody<Record<string, unknown>>(event).catch(() => null)) ?? {}

  // Honeypot: real visitors never see or fill this field.
  if (str(body.website_url)) return { ok: true }
  const name = str(body.name, 200)
  const email = str(body.email, 320)
  if (!name || !email || !EMAIL.test(email)) throw createError({ statusCode: 400, statusMessage: 'Please enter your name and a valid email.' })
  if (body.consent !== true) throw createError({ statusCode: 400, statusMessage: 'Please agree so we can contact you.' })

  let firstTouch: Record<string, unknown> = {}
  try { firstTouch = JSON.parse(getCookie(event, 'mk_ft') ?? '{}') } catch { firstTouch = {} }
  const form = str(body.form, 60) ?? 'contact'
  const site = new URL(cfg.public.siteUrl ?? 'https://newhamtech.com').hostname
  const lead = {
    name, email,
    mobile: str(body.phone, 50),
    designation: str(body.role, 200),
    companyName: str(body.company, 300),
    employees: employees(str(body.size, 60)),
    message: [str(body.subject, 200), str(body.message, 5000), str(body.context, 5000),
      body.date ? `Requested call: ${str(body.date, 20)} ${str(body.time, 10) ?? ''} (${str(body.timezone, 60) ?? 'timezone not given'})` : ''].filter(Boolean).join('\n\n') || undefined,
    form,
    product: Array.isArray(body.apps) && body.apps.length === 1 ? String(body.apps[0]).split(' —')[0] : undefined,
    consent: { status: 'given' as const, source: `${site} ${form} form` },
    touch: {
      landingPage: str(firstTouch.landingPage, 2000), referrer: str(firstTouch.referrer, 2000),
      utm: (firstTouch.utm as Record<string, string> | undefined) ?? {}, clickIds: (firstTouch.clickIds as Record<string, string> | undefined) ?? {},
    },
    pagesViewed: Array.isArray(body.pagesViewed) ? body.pagesViewed.slice(-20).map((p) => String(p).slice(0, 300)) : [],
  }

  const sends: Promise<unknown>[] = []
  if (cfg.markaitingUrl && cfg.markaitingLeadSecret) {
    sends.push($fetch(`${cfg.markaitingUrl.replace(/\/$/, '')}/api/public/lead`, {
      method: 'POST',
      headers: { authorization: `Bearer ${cfg.markaitingLeadSecret}` },
      body: { workspace: cfg.markaitingWorkspace || 'newham', lead },
      timeout: 10_000,
    }))
  }
  // The existing n8n webhooks still get the same payload as before, so email notifications keep working.
  const legacy = form === 'discovery_call' ? cfg.legacyAppointmentWebhook : cfg.legacyLeadWebhook
  if (legacy) {
    const { form: _f, pagesViewed: _p, website_url: _w, ...original } = body
    sends.push($fetch(legacy, { method: 'POST', body: original, timeout: 10_000 }))
  }
  if (!sends.length) throw createError({ statusCode: 503, statusMessage: 'The enquiry service is not configured.' })

  const results = await Promise.allSettled(sends)
  const failed = results.filter((r) => r.status === 'rejected') as PromiseRejectedResult[]
  for (const f of failed) console.error(JSON.stringify({ msg: 'lead forward failed', error: String(f.reason).slice(0, 300) }))
  // Delivered if at least one destination took it.
  if (failed.length === results.length) throw createError({ statusCode: 502, statusMessage: 'Your enquiry could not be sent.' })
  return { ok: true }
})
