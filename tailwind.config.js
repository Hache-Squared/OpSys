/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary : "rgb(11,20,28)",
        textboxs : "rgb(237, 240, 245)",
        secondary: "#00a8ff",//"#1DE9B6",//"rgb(33,192, 99)",

        selectedMenuContainer : "#103629",
        selectedMenuText : "#D0F5CA",
      },
    },
  },
  plugins: [],
}

