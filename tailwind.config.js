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
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        // Brand
        maroon: {
          50:  '#FDF2F3',
          100: '#FAE3E5',
          200: '#F4C6CB',
          300: '#EB9AA2',
          400: '#DF6470',
          500: '#CE3545',
          600: '#B91C1C',
          700: '#9B1515',
          800: '#821416',
          900: '#6E1518',
        },
        gold: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE58A',
          300: '#FBD14A',
          400: '#F9BA0F',
          500: '#E8A000',
          600: '#CA7A00',
          700: '#A35A00',
          800: '#864700',
          900: '#6F3C03',
        },
        cream: {
          DEFAULT: '#FBF7F0',
          50: '#FDFBF7',
          100: '#FBF7F0',
          200: '#F5EDE0',
        },
        ink:   '#0D0D0D',
        body:  '#4B5563',
        muted2: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem',  { lineHeight: '1.1',  letterSpacing: '-0.03em' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        'display-lg':  ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md':  ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.02em' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.25', letterSpacing: '-0.015em' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.08)',
        'glow-maroon': '0 0 0 3px rgba(185,28,28,0.12)',
        'glow-gold': '0 0 0 3px rgba(202,122,0,0.15)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
      },
      animation: {
        'fade-up':       'fade-up 0.6s ease-out both',
        'fade-in':       'fade-in 0.4s ease-out both',
        'accordion-down':'accordion-down 0.2s ease-out',
        'accordion-up':  'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
