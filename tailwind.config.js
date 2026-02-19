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
        card:    { DEFAULT: 'hsl(var(--card))',    foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        muted:   { DEFAULT: 'hsl(var(--muted))',   foreground: 'hsl(var(--muted-foreground))' },
        secondary:   { DEFAULT: 'hsl(var(--secondary))',   foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        // Brand
        saffron: '#C0392B',   // deep saffron-red (Indian community warmth)
        parchment: '#FAF7F2', // warm off-white
        sand: '#F0EAE0',      // slightly darker warm bg
        ink: '#1C1917',       // near-black warm
        slate: '#6B6560',     // warm mid-gray
        maroon: {
          600: '#9B2335',
          700: '#7D1C2A',
          800: '#5E1420',
          900: '#3D0D15',
        },
        stone: {
          100: '#F5F0EA',
          200: '#EDE6DA',
          300: '#D8CEBF',
          400: '#B8A898',
          500: '#8A7A6A',
        },
      },
      fontFamily: {
        serif:   ['Playfair Display', 'Georgia', 'serif'],
        sans:    ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
        mono:    ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        none:  '0px',
        sm:    '4px',
        DEFAULT: '6px',
        md:    '8px',
        lg:    '12px',
        xl:    '16px',
        '2xl': '20px',
        '3xl': '28px',
        full:  '9999px',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up':   { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.55s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
