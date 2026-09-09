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
        // Markenpalette innovation.today. Verbindliche Werte aus
        // public/brand/README.md — keine weiteren Farben ergaenzen.
        brand: {
          navy: '#14304A',   // Primaertext, Headlines, Buttons
          teal: '#0F766E',   // Akzent, Links, CTAs, „today“
          mint: '#5EEAD4',   // Akzent auf dunklem Grund
          night: '#0F2540',  // dunkle Flaechen, Footer, Dark-Mode-Grund
          sky: '#EAF4FC',    // helle Akzentflaechen, Karten
          ink: '#1E293B',    // Fliesstext

          // Abgeleitete Werte fuer Flaechen und Trennlinien. Nicht Teil der
          // Kernpalette, aber noetig fuer Karten, Rahmen und Hover-Zustaende.
          'teal-dark': '#0B5A54',
          card: '#16324F',
          border: '#244059',
        },
      },
      fontFamily: {
        // Nunito ist die einzige Schrift der Website. Kein zweiter Stack.
        sans: [
          'Nunito',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
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
      borderRadius: {
        // Markenvorgabe: 8px an Buttons und Bedienelementen, nicht vollrund.
        DEFAULT: '8px',
      },
      letterSpacing: {
        headline: '-0.015em',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
