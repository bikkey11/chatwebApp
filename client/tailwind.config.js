/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]

      },
      colors: {
        inputfield: "#dde2e7",
        loginLabel: "#7c838a",
        fortText: "#92969b",
        buttonlogin: "#f9ed32"

      }

    },
  },
  plugins: [

  ],
}