/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: process.env.NODE_ENV === 'production',
  content: ['./src/**/*.vue'],
  theme: {
    extend: {}
  },
  plugins: []
}
