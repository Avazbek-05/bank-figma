/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fff",
      a29: "#292929",
      b6: "#007db6",
      fb: "#f4f9fb",
      a51: "#515151",
      f9: "#ff879f",
      d6: " #65b2d6",
      f75: "#f0d075",
      black: "#000",
      d3d: "#3d3d3d",
      f3: "#aadcf3",
    },

    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
