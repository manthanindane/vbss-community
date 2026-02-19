/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        card:        { DEFAULT: 'hsl(var(--card))',        foreground: 'hsl(var(--card-foreground))' },
        popover:     { DEFAULT: 'hsl(var(--popover))',     foreground: 'hsl(var(--popover-foreground))' },
        muted:       { DEFAULT: 'hsl(var(--muted))',       foreground: 'hsl(var(--muted-foreground))' },
        secondary:   { DEFAULT: 'hsl(var(--secondary))',   foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        // ── Brand Palette ──────────────────────────────────────────
        // Primary: Deep Forest Teal  #1B4D3E
        // Accent:  Warm Amber        #D97706
        // Surface: Cream             #FAFAF7
        // Ink:     Rich Charcoal     #1A1A2E  (slightly cool dark)
        // ──────────────────────────────────────────────────────────
        teal: {
          50:  '#F0F9F5',
          100: '#DCEFE6',
          200: '#B3D9C7',
          300: '#80BDA4',
          400: '#4A9A7C',
          500: '#2E7D5E',
          600: '#1B4D3E',
          700: '#163E32',
          800: '#0F2D23',
          900: '#081A15',
        },
        amber: {
          50:  '#FFFBF0',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
        },
        cream: '#FAFAF7',
        ink:   '#1A1A2E',
        mist:  '#F4F4F0',
      },
      fontFamily: {
        sans:    ['Satoshi', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Satoshi', 'system-ui', 'sans-serif'],
        body:    ['Satoshi', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        none:    '0px',
        xs:      '4px',
        sm:      '6px',
        DEFAULT: '10px',
        md:      '12px',
        lg:      '16px',
        xl:      '20px',
        '2xl':   '24px',
        '3xl':   '32px',
        full:    '9999px',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up':   { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        'fade-up':        'fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
