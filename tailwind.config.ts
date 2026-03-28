/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          outfit: ['Outfit', 'sans-serif'],
        },
        fontWeight: {
          '300': '300',
          '400': '400',
          '500': '500',
          '600': '600',
          '700': '700',
          '800': '800',
        },
        colors: {
          accent: '#2563EB',
          emerald: '#10B981',
          'bg-primary': '#FFFFFF',
          'bg-soft': '#F8FAFC',
        },
      },
    },
    plugins: [],
  }