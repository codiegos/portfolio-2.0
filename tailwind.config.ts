import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        primary: '#110428',
        secondary: '#A064FB',
        tertiary: '#0E0020',
      },
    },
  },
  plugins: [],
}
export default config
