/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        forest:  '#0d2b1f',
        'forest-mid': '#1a4733',
        'forest-accent': '#2d6a4f',
        'forest-light': '#52b788',
        ember:   '#f4801a',
        'ember-dark': '#d96b10',
        cream:   '#f8f6f2',
        stone:   '#f1f0ed',
      },
    },
  },
  plugins: [],
}
