module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        link: '0 -4px 0 0 rgba(97, 218, 251, .4) inset'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
