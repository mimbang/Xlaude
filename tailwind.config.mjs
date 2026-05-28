/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void:    '#04060E',
        surface: '#0B0F19',
        panel:   '#0D1120',
        raised:  '#101525',
        border:  '#161D30',
        edge:    '#1C2640',
        dim:     '#3D4E6B',
        muted:   '#5A6A88',
        ghost:   '#7888A8',
        slate:   '#9AA5BE',
        light:   '#C4CEDF',
        bright:  '#E6EBF4',
        snow:    '#F0F4FA',
        em: {
          DEFAULT: '#10B981',
          dim:     'rgba(16,185,129,0.12)',
          border:  'rgba(16,185,129,0.18)',
          glow:    'rgba(16,185,129,0.06)',
          subtle:  'rgba(16,185,129,0.035)',
          50:  '#ECFDF5',
          100: '#D1FAE5',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
      },
      fontFamily: {
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
        sans:    ['"Inter"', '"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem',   letterSpacing: '0.06em' }],
        'xs':  ['0.72rem',  { lineHeight: '1.1rem'  }],
        'sm':  ['0.82rem',  { lineHeight: '1.4rem'  }],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      backgroundImage: {
        'blueprint-coarse': `
          linear-gradient(rgba(16,185,129,0.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16,185,129,0.045) 1px, transparent 1px)
        `,
        'blueprint-fine': `
          linear-gradient(rgba(16,185,129,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16,185,129,0.018) 1px, transparent 1px)
        `,
        'dot-grid': `
          radial-gradient(circle, rgba(16,185,129,0.07) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'bp-coarse': '72px 72px',
        'bp-fine':   '18px 18px',
        'dot-lg':    '72px 72px',
      },
      boxShadow: {
        'em-glow':  '0 0 0 1px rgba(16,185,129,0.18), 0 0 24px rgba(16,185,129,0.10)',
        'card-md':  '0 2px 16px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.03)',
        'card-lg':  '0 8px 32px rgba(0,0,0,0.5),  0 1px 0 rgba(255,255,255,0.04)',
        'inset-t':  'inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      animation: {
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'slide-up':   'slideUp 0.55s cubic-bezier(0.16,1,0.3,1) forwards',
        'blink':      'blink 1.1s step-end infinite',
        'ping-slow':  'ping 2.5s cubic-bezier(0,0,0.2,1) infinite',
        'cursor-in':  'cursorIn 0.8s ease-out 1.2s both',
      },
      keyframes: {
        fadeIn:   { from: { opacity: '0' },                         to: { opacity: '1' } },
        slideUp:  { from: { opacity: '0', transform: 'translateY(18px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        blink:    { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        cursorIn: { from: { opacity: '0', width: '0' },             to: { opacity: '1', width: '2px' } },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16,1,0.3,1)',
      },
    },
  },
  plugins: [],
};
