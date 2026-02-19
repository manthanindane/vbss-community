/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border:     'hsl(var(--border))',
        input:      'hsl(var(--input))',
        ring:       'hsl(var(--ring))',
        card:    { DEFAULT: 'hsl(var(--card))',    foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        muted:   { DEFAULT: 'hsl(var(--muted))',   foreground: 'hsl(var(--muted-foreground))' },
        secondary:   { DEFAULT: 'hsl(var(--secondary))',   foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        // Brutalist brand
        brand: {
          red:   '#E60023',
          black: '#000000',
          white: '#FFFFFF',
        },
        maroon: {
          50: '#FFF0F0', 100: '#FFD6D6', 200: '#FFADAD',
          300: '#FF7070', 400: '#FF3D3D', 500: '#E60023',
          600: '#CC001F', 700: '#A8001A', 800: '#880015', 900: '#6E0011',
        },
        gold: {
          300: '#FCD34D', 400: '#FBBF24', 500: '#F59E0B', 600: '#D97706',
        },
        ink: '#000000',
      },
      fontFamily: {
        sans:    ['Barlow', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero-xl': ['clamp(4rem,12vw,11rem)',    { lineHeight: '0.9',  letterSpacing: '-0.04em' }],
        'hero-lg': ['clamp(3rem,8vw,7rem)',     { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'hero-md': ['clamp(2rem,5vw,4.5rem)',   { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'section': ['clamp(2rem,4vw,3.5rem)',   { lineHeight: '0.95', letterSpacing: '-0.025em' }],
        'label':   ['0.7rem',                  { lineHeight: '1',    letterSpacing: '0.12em' }],
      },
      borderRadius: {
        DEFAULT: '0px',
        none:    '0px',
        sm:      '0px',
        md:      '0px',
        lg:      '0px',
        xl:      '0px',
        '2xl':   '0px',
        '3xl':   '0px',
        full:    '0px',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up':   { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
