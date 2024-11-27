/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        Montserrat: ['"Montserrat"', 'serif'],
        Pattaya: ["Pattaya", 'sans-serif'],
        CheeseBurga: ['CheeseBurga', 'sans-serif']
      },
      fontSize: {
        'mobile-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'mobile-base': ['1rem', { lineHeight: '1.5rem' }],
        'mobile-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'desktop-base': ['1.25rem', { lineHeight: '1.75rem' }],
        'desktop-lg': ['1.5rem', { lineHeight: '2rem' }],
      },
      spacing: {
        'mobile-gutter': '1rem',
        'tablet-gutter': '2rem',
        'desktop-gutter': '4rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      textStroke: {
        '2': '2px',
      },
      colors: {
        stroke: '#000000',
      },
    },
  },
  plugins: [],
}