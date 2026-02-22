import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#111827", // near-black for headings
          accent: "#EAB308"   // gold accent
        }
      },
      boxShadow: {
        soft: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)"
      },
      keyframes: {
        shine: {
          '0%': { left: '-100%' },
          '20%': { left: '100%' },
          '100%': { left: '100%' },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' }, // Zwiększony efekt wchodzenia w ekran
        },
        rocking: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        'rocking-reverse': {
          '0%, 100%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(-15deg)' },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
      },
      animation: {
        shine: 'shine 5s infinite',
        breathing: 'breathing 30s cubic-bezier(0.1, 0, 0.9, 1) infinite',
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        rocking: 'rocking 20s cubic-bezier(0.1, 0, 0.9, 1) infinite',
        'rocking-reverse': 'rocking-reverse 25s cubic-bezier(0.1, 0, 0.9, 1) infinite',
        'rocking-slow': 'rocking 30s cubic-bezier(0.1, 0, 0.9, 1) infinite',
        'rocking-reverse-slow': 'rocking-reverse 35s cubic-bezier(0.1, 0, 0.9, 1) infinite',
      }
    },
  },
  plugins: [],
}
export default config
