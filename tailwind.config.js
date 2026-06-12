/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      /* ── Colour Palette ─────────────────────────────── */
      colors: {
        /* Deep Maroon — primary brand */
        maroon: {
          50:  '#fef2f2',
          100: '#fee2e2',
          200: '#fdcaca',
          300: '#fba5a5',
          400: '#f57272',
          500: '#e84545',
          600: '#c52727',
          700: '#9b1c1c',
          800: '#822020',
          900: '#6f2020',
          950: '#3d0c0c',
        },
        /* Warm Gold — accent, CTAs, highlights */
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f6b935',
          500: '#d49a17',
          600: '#b37a10',
          700: '#8a5c0f',
          800: '#724a14',
          900: '#5f3d16',
          950: '#371f09',
        },
        /* Cream — page backgrounds */
        cream: {
          50:  '#fdfcf9',
          100: '#faf8f2',
          200: '#f5f0e6',
          300: '#ede6d5',
          400: '#e0d4bc',
          500: '#cfc0a3',
        },
        /* Rich Charcoal — text, dark sections */
        charcoal: {
          50:  '#f6f6f7',
          100: '#e2e3e5',
          200: '#c4c6cb',
          300: '#9fa2a9',
          400: '#7b7e87',
          500: '#61636d',
          600: '#4d4e57',
          700: '#3f4047',
          800: '#35363c',
          900: '#1e1f23',
          950: '#131316',
        },
        /* Sage — success/positive */
        sage: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        /* Terracotta — warm cultural accent */
        terracotta: {
          50:  '#fff7ed',
          100: '#ffeed4',
          200: '#ffd9a8',
          300: '#ffbd70',
          400: '#ff9537',
          500: '#f97316',
          600: '#e05a08',
          700: '#b94209',
          800: '#93350e',
          900: '#782d10',
          950: '#411406',
        },
        /* Semantic aliases */
        border:      'hsl(var(--border))',
        input:       'hsl(var(--input))',
        ring:        'hsl(var(--ring))',
        background:  'hsl(var(--background))',
        foreground:  'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      /* ── Typography ─────────────────────────────────── */
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
        hindi:   ['"Tiro Devanagari Hindi"', 'serif'],
      },

      /* ── Spacing ────────────────────────────────────── */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },

      /* ── Border Radius ──────────────────────────────── */
      borderRadius: {
        lg:   'var(--radius)',
        md:   'calc(var(--radius) - 2px)',
        sm:   'calc(var(--radius) - 4px)',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      /* ── Box Shadow ─────────────────────────────────── */
      boxShadow: {
        'soft':       '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)',
        'soft-lg':    '0 10px 40px -10px rgba(0,0,0,0.1), 0 2px 10px -2px rgba(0,0,0,0.04)',
        'soft-xl':    '0 20px 60px -15px rgba(0,0,0,0.12)',
        'warm':       '0 4px 20px -4px rgba(155,28,28,0.15)',
        'warm-lg':    '0 10px 40px -10px rgba(155,28,28,0.2)',
        'gold-glow':  '0 4px 25px -4px rgba(212,154,23,0.3)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0,0,0,0.04)',
      },

      /* ── Animations ─────────────────────────────────── */
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up':        'fade-up 0.6s ease-out forwards',
        'fade-in':        'fade-in 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'slide-in-left':  'slide-in-left 0.5s ease-out forwards',
        'scale-in':       'scale-in 0.4s ease-out forwards',
        'shimmer':        'shimmer 2s linear infinite',
        'pulse-soft':     'pulse-soft 2s ease-in-out infinite',
        'float':          'float 3s ease-in-out infinite',
        'spin-slow':      'spin-slow 20s linear infinite',
      },

      /* ── Backdrop Blur ──────────────────────────────── */
      backdropBlur: {
        xs: '2px',
      },

      /* ── Max-Width ──────────────────────────────────── */
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
