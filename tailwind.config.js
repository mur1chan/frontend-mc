/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}", "./templates/components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  daisyui: {
    themes: [
      {
        socialbid: {
          "primary": "#ff0000",
          "secondary": "#f3f4f6",
          "accent": "#bd0000",
          "neutral": "#00232a",
          "base-100": "#121212",
          "info": "#fde047",
          "success": "#84cc16",
          "warning": "#fb923c",
          "error": "#dc2626",
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
}
