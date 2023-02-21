/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./component/**/*.tsx"
  ],
  theme: {
    extend: {},
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'custom-profile': '30% 70% 70% 30% / 30% 30% 70% 70% '
    },
    colors: {
      'darkgreen': '#001920',
      'darkblue': '#00345B',
      'lightblue': '#00A7E6',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#DDDDDD'
    }
  },
  plugins: [],
}
