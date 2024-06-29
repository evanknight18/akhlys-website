module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        gothic: ['UnifrakturMaguntia', 'serif'],
        cook: ['UnifrakturCook', 'serif'],
        pirata: ['Pirata One', 'cursive'],
        medieval: ['MedievalSharp', 'cursive'],
        almendra: ['Almendra Display', 'serif'],
        blackchancery: ['BlackChancery', 'serif'],
        deutschgothic: ['Deutsch Gothic', 'serif'],
        gothicultra: ['Gothic Ultra OT', 'serif'],
        oldenglish: ['Old English Text MT', 'serif'],
        gothictextura: ['Gothic Textura', 'serif'],
        fraktur: ['Fraktur', 'serif'],
      },
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-primary': '#1a1a1a',
        'dark-secondary': '#2a2a2a',
        'dark-text': '#eaeaea',
        'accent': '#bb86fc',
      },
    },
    },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
