module.exports = {
  content: [
    "./index.html",   
    "./src/**/*.{vue,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
