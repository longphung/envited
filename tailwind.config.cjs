/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: "#240D57",
          "purple-light": "#501FC1",
          "envited-purple": "#8456EC",
          "envited-pink": "#E87BF8",
        },
        "secondary": {
          DEFAULT: "#CCB6FF",
          "purple-2": "#EDE5FF",
          "purple-3": "#F6F2FF",
        },
        "background-red": "#FFD7E0",
        "foreground-red": "#E61445",
        "background-green": "#D3FFE2",
        "foreground-green": "#00805E",
      },
      margin: {
        "8.5": "2.125rem",
      },
      padding: {
        "5.1": "1.3125rem",
      },
      borderRadius: {
        "xl":  "10px",
      },
      backgroundImage: {
        "envited-gradient": "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
      },
    },
  },
  plugins: [],
}
