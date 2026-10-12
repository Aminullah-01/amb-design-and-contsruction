import type { Config } from 'tailwindcss'

/**
 * AMB Design and Construction Limited — design tokens.
 * Source: Design Guide Sections 3 (colour), 4 (typography) and 5 (layout).
 * Colours are logo-derived only. Values are loaded into Tailwind via the
 * `@config` directive in src/index.css.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        blue: {
          50: '#EAF6FF',
          100: '#CFEAFE',
          500: '#34A9FA',
          600: '#1B8CE0',
          700: '#0B6FB8',
        },
        red: {
          500: '#E91C24',
          600: '#D3151C',
        },
        brick: {
          500: '#C73E1D',
        },
        ink: {
          400: '#9CA3AF',
          600: '#4B5563',
          800: '#151515',
          900: '#0B0B0B',
        },
        line: '#E5E7EB',
        surface: '#F5F7FA',
      },
      borderRadius: {
        DEFAULT: '10px',
        lg: '16px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(11, 11, 11, 0.08)',
        md: '0 8px 24px rgba(11, 11, 11, 0.12)',
      },
      fontFamily: {
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        accent: ['"Lobster Two"', 'ui-serif', 'cursive'],
      },
      maxWidth: {
        container: '1240px',
      },
      spacing: {
        section: '72px',
        'section-md': '120px',
      },
    },
  },
} satisfies Config
