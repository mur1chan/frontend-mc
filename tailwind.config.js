/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}", "./templates/components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brown-nav': '#221a16', // Extend colors here
        'brown-base': '#17120D',
        'brown-h2': '#9d5505',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mcblock: {
          "primary": "#9d5505", // Just an example for primary color in the mcblock theme
          "brown-nav": "#221a16", // DaisyUI mcblock theme color
          "bg-brown": '#17120D',
          "brown-h2": '#9d5505'
        },
      },
      "light",
      "dark",
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('daisyui'),
  ],
};
