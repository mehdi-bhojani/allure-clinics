// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CE984B', // Define your custom primary color
      },
      flex: {
        '1.5': '1.5 1.5 0%', // Define flex-grow, flex-shrink, and flex-basis for flex-1.5
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
