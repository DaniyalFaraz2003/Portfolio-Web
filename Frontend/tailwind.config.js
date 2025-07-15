/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)',
        },
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: 'var(--color-destructive-foreground)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          foreground: 'var(--color-success-foreground)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          foreground: 'var(--color-warning-foreground)',
        },
      },
      dropShadow: {
        primary: '0 0 20px var(--color-primary)',
        accent: '0 0 20px var(--color-accent)',
        secondary: '0 0 20px var(--color-secondary)',
        destructive: '0 0 20px var(--color-destructive)',
        success: '0 0 20px var(--color-success)',
      },
      textShadow: {
        primary: '0 0 10px var(--color-primary)',
        accent: '0 0 10px var(--color-accent)',
        secondary: '0 0 10px var(--color-secondary)',
        destructive: '0 0 10px var(--color-destructive)',
        success: '0 0 10px var(--color-success)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-lg': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-primary': {
          'text-shadow': '0 0 10px var(--color-primary)',
        },
        '.text-shadow-accent': {
          'text-shadow': '0 0 10px var(--color-accent)',
        },
        '.text-shadow-secondary': {
          'text-shadow': '0 0 10px var(--color-secondary)',
        },
        '.text-shadow-destructive': {
          'text-shadow': '0 0 10px var(--color-destructive)',
        },
        '.text-shadow-success': {
          'text-shadow': '0 0 10px var(--color-success)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 