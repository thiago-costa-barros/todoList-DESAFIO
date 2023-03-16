/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    fontSize: {
      sm: 12,
      md: 16,
      lg: 20,
      xl: 24,
    },
    colors: {
      white: "#fefefe",

      black: "#010109",
      "black-700": "#1b1d37",

      "gray-200": "#f2f2f2",
      "gray-400": "#d9d9d9",
      "gray-600": "#797979",
      "gray-800": "#838383",

      "blue-300": "#69c5e0",
      "blue-700": "#0089ff",

      "cyan-700": "#437eb1",

      "violet-700": "#636AC7",

      "red-700": "#ce0000",

      "green-700": "#038b00",

      "blue-500": "#0089ff",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
