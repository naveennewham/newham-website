// Shared open/close state for the Quick book popup (components/ui/QuickBook.vue).
export const QUICK_BOOK_SERVICES = [
  'Sprinkler hydraulic calculations',
  'Fire protection design',
  'BOQ & estimation',
  'Shop drawings & BIM',
  'Engineering talent outsourcing',
  'CCorex software',
  'Something else'
]

export function useQuickBook() {
  const open = useState('quick-book-open', () => false)
  const service = useState('quick-book-service', () => QUICK_BOOK_SERVICES[0]!)
  return {
    open,
    service,
    show(s?: string) {
      if (s) service.value = s
      open.value = true
    },
    close() { open.value = false }
  }
}
