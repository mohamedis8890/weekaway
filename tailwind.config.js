/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primairy-dark": "#5651e5",
        "primary-light": "#709dff",
      },
      maxWidth: {
        large: "1140px",
      },
    },
  },
  plugins: [],
};
