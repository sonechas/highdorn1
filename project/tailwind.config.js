/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1EA7FF',
        'brand-primary-dark': '#0077CC',
        'brand-secondary-bg': '#F5FAFF',
        'brand-neutral-dark': '#0A1F33',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero-mobile': '12vw',
        'hero-mobile-sub': '14vw',
        'hero-desktop': '100px',
      },
      letterSpacing: {
        'tight-brand': '-0.02em',
      },
      backdropBlur: {
        'nav': '10px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};