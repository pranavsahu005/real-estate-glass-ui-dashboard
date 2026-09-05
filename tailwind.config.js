/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        luxury: {
          cream: '#FDFBF7',
          ivory: '#FAF7F0',
          sand: '#F3EDE2',
          champagne: '#E8DFC8',
          gold: '#C5A059',
          'gold-light': '#DFBE77',
          'gold-dark': '#9E7C35',
          charcoal: '#1E1D1A',
          'charcoal-soft': '#383531',
          taupe: '#726D66',
          'taupe-light': '#A19B91',
          'taupe-lighter': '#D4CEC5',
          border: 'rgba(255, 255, 255, 0.70)',
          'border-subtle': 'rgba(218, 210, 198, 0.35)',
        },
      },
      backgroundColor: {
        'glass-panel': 'rgba(254, 252, 248, 0.78)',
        'glass-card': 'rgba(255, 254, 250, 0.84)',
        'glass-dock': 'rgba(255, 253, 249, 0.88)',
        'glass-badge': 'rgba(245, 239, 229, 0.65)',
      },
      boxShadow: {
        'glass': '0 20px 40px -15px rgba(90, 70, 45, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02), inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
        'glass-lg': '0 24px 48px -12px rgba(80, 60, 35, 0.12), 0 4px 12px rgba(0, 0, 0, 0.03), inset 0 1px 2px 0 rgba(255, 255, 255, 0.9)',
        'dock': '0 16px 36px -6px rgba(45, 35, 25, 0.14), inset 0 1px 1px 0 rgba(255, 255, 255, 0.85)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)',
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '3.5xl': '28px',
        '4xl': '32px',
      },
      backdropBlur: {
        'xs': '2px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
    },
  },
  plugins: [],
}

