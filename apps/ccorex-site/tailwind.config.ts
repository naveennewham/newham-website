import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#22d3ee',
          500: '#06b6d4'
        },
        secondary: {
          400: '#2dd4bf',
          500: '#14b8a6'
        }
      }
    }
  }
}
