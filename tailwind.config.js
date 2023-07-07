/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundImage: (theme) => ({
        'hero-pattern': "url('https://i.ibb.co/Qn5BR8N/bg.png')",
      }),
      animation: {
        'slide': 'slide 60s linear infinite',
      },
      keyframes: {
        'slide': {
          'from': { 'background-position': '0 0' },
          'to': { 'background-position': '400% 1000%' },
        },
      },
    },
  },
  plugins: [],
}
