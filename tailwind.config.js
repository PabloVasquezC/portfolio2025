/** @type {import('tailwindcss').Config} */
// Ensure consistent casing in import paths
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      extend: {
              keyframes: {
                gradient: {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                },
              },
              animation: {
                gradient: 'gradient 8s linear infinite'
              },
    },
  },
  plugins: [],
}
}


