/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: [
      {
        nerdthemes: {
          primary: '#4568dc',
          secondary: '#b06ab3'
        }
      },
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
