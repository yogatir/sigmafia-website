/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        mochiy: ['Mochiy Pop One']
      },
      backgroundImage: {
        'gray-rectangle': "url('/src/assets/svg/gray-rectangle-background.svg')",
        'sigmafia-home-banner': "url('/src/assets/svg/sigmafia-home-banner.svg')",
        'sigmafia-wave': "url('/src/assets/svg/sigmafia-orange-wave.svg')",
        'sigmafia-ellipse': "url('/src/assets/svg/sigmafia-ellipse.svg')"
      },
      colors: {
        'sigmafia-orange': '#FF9E2C',
        'sigmafia-gray': '#A1A1A1',
        'sigmafia-dark-gray': '#676767',
        'sigmafia-dark-blue': '#002346',
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}