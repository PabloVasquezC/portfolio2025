/** @type {import('tailwindcss').Config} */
// Ensure consistent casing in import paths
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      scrollBehavior: ['hover', 'focus'],
    },
  },
  plugins: [],
}

