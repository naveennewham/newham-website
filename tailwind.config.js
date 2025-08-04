/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' for system preference
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3f4',
          100: '#cce7ea',
          200: '#99cfd5',
          300: '#66b7c0',
          400: '#339fab',
          500: '#008796',
          600: '#007a87',
          700: '#006c78',
          800: '#005D6C', // Brand primary color
          900: '#004f5c',
          950: '#00333c',
        },
        secondary: {
          50: '#e6f9fc',
          100: '#ccf3f9',
          200: '#99e7f3',
          300: '#66dbed',
          400: '#33cfe7',
          500: '#01ACC8', // Brand secondary color
          600: '#009ab3',
          700: '#00889e',
          800: '#00778a',
          900: '#006575',
          950: '#00434d',
        },
        dark: {
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#374151',
          600: '#1f2937',
          700: '#111827',
          800: '#0d1117',
          900: '#030712',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-sm': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'glass-lg': '0 8px 40px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
