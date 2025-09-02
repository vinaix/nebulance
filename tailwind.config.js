/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pure: '#FFFFFF',
        snow: '#FEFEFE',
        paper: '#FDFDFD',
        ash: '#F8F9FA',
        mist: '#F2F4F6',
        silver: '#E8EAED',
        graphite: '#D1D5DA',
        charcoal: '#9CA3AF',
        slate: '#6B7280',
        ink: '#374151',
        obsidian: '#1F2937',
        void: '#111827'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace']
      },
      fontSize: {
        'hero': '72px',
        'h2': '48px',
        'h3': '32px',
        'body-lg': '20px'
      },
      letterSpacing: {
        'tight-xl': '-1.8px',
        'tight-lg': '-0.8px',
        'tight-md': '-0.4px',
        'tight-sm': '-1.2px'
      },
      borderRadius: {
        'xs': '6px',
        'sm': '10px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px'
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(17,24,39,0.06)',
        'medium': '0 8px 25px rgba(17,24,39,0.08)',
        'strong': '0 12px 40px rgba(17,24,39,0.12)',
        'focus': '0 0 0 3px rgba(37,99,235,0.12)'
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px'
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-slower': 'float-slower 8s ease-in-out infinite', 
        'float-fast': 'float-fast 4s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      }
    },
  },
  plugins: [],
};