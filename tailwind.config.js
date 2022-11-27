/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    /^bg-/,
    /^bg-gradient-/,
    /^to/,
    /^from-/

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
