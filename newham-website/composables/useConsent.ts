// Cookie consent (PDPA SG/MY, DPDP India; also fine for EU/UK visitors).
// Only essential cookies run until the visitor chooses. The choice lives in one
// first-party cookie for 180 days and can be changed from "Cookie settings" in the footer.

export interface ConsentState { decided: boolean; analytics: boolean; marketing: boolean }

type Stored = { a: 0 | 1; m: 0 | 1; v: 1; t: number }

export function useConsent() {
  const cookie = useCookie<Stored | null>('mk_consent', { maxAge: 60 * 60 * 24 * 180, sameSite: 'lax', path: '/', default: () => null })
  const ui = useState('consent-ui', () => ({ open: false, choose: false }))
  const consent = computed<ConsentState>(() => ({ decided: !!cookie.value, analytics: !!cookie.value?.a, marketing: !!cookie.value?.m }))

  function save(analytics: boolean, marketing: boolean) {
    cookie.value = { a: analytics ? 1 : 0, m: marketing ? 1 : 0, v: 1, t: Date.now() }
    ui.value = { open: false, choose: false }
  }
  return {
    consent,
    ui,
    acceptAll: () => save(true, true),
    essentialOnly: () => save(false, false),
    save,
    openSettings: () => { ui.value = { open: true, choose: true } },
  }
}
