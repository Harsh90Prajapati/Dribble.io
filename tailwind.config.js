/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#070707',
          soft: '#0d0d0d',
          card: '#111111',
        },
        line: '#1f1f1f',
        ink: {
          DEFAULT: '#f5f4f2',
          muted: '#9a9894',
          faint: '#65635f',
        },
        ember: {
          DEFAULT: '#ff5a2b',
          light: '#ff8a4c',
          dark: '#c73a12',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        ember: 'linear-gradient(135deg, #ff8a4c 0%, #ff5a2b 45%, #c73a12 100%)',
        glow: 'radial-gradient(circle at 50% 50%, rgba(255,90,43,0.35), transparent 70%)',
      },
      maxWidth: {
        wrap: '1240px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
