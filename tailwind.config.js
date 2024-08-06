/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#FF269B",
        secondary: "#F69669",
        background: "#FEFCFF",
        foreground: "",
        front: "#11151E",
        back: "#FFFFFF",
      },
      borderRadius: {
        inherit: "inherit",
      },
      transitionDuration: {
        inherit: "inherit",
      },
      fontFamily: {
        proximaNova: '"Proxima-Nova", sans-serif',
        inter: '"Inter", sans-serif',
        poppins: '"Poppins", sans-serif',
        raleway: '"Raleway", sans-serif',
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [],
};
