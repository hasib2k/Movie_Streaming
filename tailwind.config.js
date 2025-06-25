/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        'xs': '480px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', maxHeight: '0' },
          '100%': { opacity: '1', maxHeight: '400px' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out forwards'
      },
    },
  },
  plugins: [],
}
