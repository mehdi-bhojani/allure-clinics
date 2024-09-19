// tailwind.config.js
const flowbite = require('flowbite/plugin'); // Use `flowbite/plugin` instead of `flowbite-react/tailwind`

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this to your project structure
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Include Flowbite components for PurgeCSS
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CE984B', // Your custom primary color
      },
      flex: {
        '1.5': '1.5 1.5 0%', // Define custom flex value
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    flowbite, // Use the plugin without parentheses
  ],
};
