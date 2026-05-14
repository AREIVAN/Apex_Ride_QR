import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        apex: {
          void: '#050711',
          panel: '#0B1020',
          panel2: '#101A33',
          line: 'rgba(226,232,255,.14)',
          text: '#EEF4FF',
          muted: '#9AA8C7',
          violet: '#8B5CFF',
          cyan: '#2FE6FF',
          danger: '#FF315A',
          amber: '#FFB020',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(139,92,255,.28)',
        cyan: '0 0 36px rgba(47,230,255,.18)',
        card: '0 24px 80px rgba(0,0,0,.42)',
      },
      borderRadius: { '4xl': '2rem' },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
