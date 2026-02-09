/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#790000',
        secondary: '#EAB6C9',
        tertiary: {
          dark: '#001B2E',
          accent: '#C27013',
        },
        bg: '#FFF7F0',
        text: '#001B2E',
      },
      fontFamily: {
        display: ['Radicalis', 'cursive'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
