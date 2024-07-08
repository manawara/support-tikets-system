import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnightBlue: '#41729F',
        blueGray: '#5885AF',
        darkBlue: '#274472',
        babyBlue: '#C3E0E5',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
}
export default config
