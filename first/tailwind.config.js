/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Inter: ['Inter'],
      spaceGrotesk: ['Space Grotesk'],
    },
    extend: {
      colors: {
        span: '#E07B67',
      },
    },
  },
  plugins: [],
};
