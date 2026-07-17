/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#020617',
        slateblue: '#4f46e5',
        violet: '#8b5cf6',
      },
      boxShadow: {
        glow: '0 0 40px rgba(99, 102, 241, 0.35)',
      },
    },
  },
  plugins: [],
}
