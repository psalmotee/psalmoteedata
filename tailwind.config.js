/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:  '#0EA5C6',
        blue:     '#2563EB',
        accent:   '#F59E0B',
        accent2:  '#F97316',
        bg:       '#0B1220',
        card:     '#111827',
        card2:    '#0F1929',
        muted:    '#9CA3AF',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        sans:    ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        glow:    '0 0 30px rgba(14,165,198,0.25)',
        'glow-lg': '0 0 60px rgba(14,165,198,0.35)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulse2: 'pulse2 2s ease-in-out infinite',
      },
      keyframes: {
        float:  { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulse2: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.5 } },
      },
    },
  },
  plugins: [],
}
