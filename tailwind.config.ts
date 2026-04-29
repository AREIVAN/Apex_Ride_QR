import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        apex: {
          bg: '#F6F8FB',
          surface: '#FFFFFF',
          ink: '#111827',
          muted: '#6B7280',
          border: '#E5E7EB',
          blue: '#2563EB',
          blueDark: '#1D4ED8',
          safety: '#10B981',
          emergency: '#EF4444',
          graphite: '#172033',
        },
      },
      boxShadow: {
        premium: '0 24px 70px rgba(17, 24, 39, 0.09)',
        soft: '0 12px 34px rgba(17, 24, 39, 0.07)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
