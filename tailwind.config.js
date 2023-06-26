/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bromega': ['BR Omega'],
      },
      colors: {
        primary: '#FA4A6F',
        gradientPrimary: 'linear-gradient(180deg, #FA4A6F 0%, #532B79 100%)',
      },
    },
  },
  plugins: [],
}
