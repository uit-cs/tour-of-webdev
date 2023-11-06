/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#F0F1F2',
      },
      backgroundColor: {
        black: '#1C2128',
        gray: '#22272E',
        white: '#F0F1F2',
      },
      borderColor: {
        gray: '#444C56',
      },
    },
  },
  plugins: [],
}
