import type { Config } from 'tailwindcss'

// CCorex design tokens. Brand teal comes from the logo (#005D6C) and the
// secondary cyan (#01ACC8). "ai" is reserved for ARIVU / AI features only.
export default <Partial<Config>>{
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './data/**/*.ts'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: 'rgb(var(--brand-50) / <alpha-value>)', 100: 'rgb(var(--brand-100) / <alpha-value>)', 200: 'rgb(var(--brand-200) / <alpha-value>)', 300: '#62bfcb', 400: '#2aa3b3',
          500: '#0b8798', 600: '#006f7f', 700: '#005d6c', 800: '#064c58', 900: '#083f49', 950: '#062a33'
        },
        cyan: { 400: '#33cfe7', 500: '#01acc8', 600: '#009ab3' },
        ink: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((k) => [k, `rgb(var(--ink-${k}) / <alpha-value>)`])),
        ai: { 50: '#f3f1ff', 100: '#e9e5ff', 400: '#9b8afb', 500: '#7a5af8', 600: '#6938ef', 700: '#5925dc' },
        mep: { mech: '#2563eb', elec: '#d97706', plumb: '#0891b2', fire: '#dc2626' }
      },
      maxWidth: { site: '1240px' },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,.05), 0 1px 3px rgba(16,24,40,.08)',
        lift: '0 12px 32px -8px rgba(16,24,40,.18), 0 4px 8px -4px rgba(16,24,40,.08)',
        frame: '0 30px 60px -20px rgba(6,42,51,.35), 0 18px 36px -18px rgba(0,0,0,.3)'
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        'ai-gradient': 'linear-gradient(135deg, #01acc8 0%, #7a5af8 100%)'
      }
    }
  }
}
