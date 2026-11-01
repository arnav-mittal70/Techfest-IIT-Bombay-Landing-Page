/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#02040a',
          900: '#040816',
          850: '#070f26',
          800: '#0b163b',
          700: '#112255',
        },
        cyber: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          electric: '#0066ff',
          neon: '#00e5ff',
          purple: '#9d4edd',
          magenta: '#f72585',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 242, 254, 0.45)',
        'glow-blue': '0 0 30px -5px rgba(0, 102, 255, 0.45)',
        'glow-purple': '0 0 30px -5px rgba(157, 78, 221, 0.4)',
        'neon-card': '0 0 20px rgba(0, 242, 254, 0.15), inset 0 0 15px rgba(0, 242, 254, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spinReverse 25s linear infinite',
        'scanline': 'scan 8s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        glowPulse: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0, 242, 254, 0.4))' },
          '100%': { opacity: '0.85', filter: 'drop-shadow(0 0 30px rgba(79, 172, 254, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}
