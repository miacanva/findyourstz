module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#FF5864',
        'brand-pink-600': '#ff3b52',
        'brand-blue': '#3B82F6'
      },
      fontFamily: {
        lust: ['Lust', 'sans-serif'],
        paris: ['"Paris Pro"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        syne: ['Syne', 'sans-serif']
      }
    },
  },
  plugins: [],
}
