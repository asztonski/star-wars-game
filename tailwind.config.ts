import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'rgb(253,224,71)',
        secondary: 'rgb(22,78,99)',
        accent: 'rgb(30,41,59)',
        starship: 'rgb(239,68,68)',
        human: 'rgb(94,234,212)',
      }
    },
  },
  plugins: [],
}
export default config
