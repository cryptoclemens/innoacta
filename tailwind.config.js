/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vencly: {
          bg: '#0F172A',
          card: '#1E293B',
          border: '#334155',
          teal: '#0f766e',
          'teal-dark': '#0d6b61',
          'teal-light': '#14b8a6',
          navy: '#0F172A',
          blue: '#0f766e',
          'blue-dark': '#0d6b61',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-nunito)',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        display: [
          'var(--font-fraunces)',
          'Georgia',
          '"Times New Roman"',
          'serif',
        ],
        mono: [
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
