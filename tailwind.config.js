/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        'recoleta': ['Recoleta', 'serif'],
        'recoleta-sans': ['Recoleta Sans', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      fontWeight: {
        'regular': 400,
        'bold': 700,
        'italic': 'italic',
        'black': 900,
        'xxl': 1100
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'custom-brown': '#3C1A00',
        'custom-light-brown': '#4A2401',
        'custom-white': '#FFF',
        peach: {
          100: '#FFEEE1', // Light peach for background
          200: '#FFE4D0', // Slightly darker peach for hover state
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}