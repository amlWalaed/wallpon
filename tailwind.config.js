import defaultTheme from "tailwindcss/defaultTheme";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#334699",
          50: "#f1f5fd",
          100: "#e0eaf9",
          200: "#c8daf5",
          300: "#a3c2ed",
          400: "#77a2e3",
          500: "#5683db",
          600: "#4267ce",
          700: "#3855bd",
          800: "#334699",
          900: "#2e3e7a",
          950: "#20284b",
        },
        secondary: {
          DEFAULT: "#80bd57",
          50: "#f2f9ec",
          100: "#e2f1d6",
          200: "#c8e5b1",
          300: "#a4d383",
          400: "#80bd57",
          500: "#66a43e",
          600: "#4d822e",
          700: "#3d6427",
          800: "#335024",
          900: "#2d4522",
          950: "#15250e",
        },
        surface: {
          50: "#f7f8fc",
          100: "#e5e7f4",
          200: "#d0d6ed",
          300: "#b0bce0",
          400: "#8a98d0",
          500: "#6e7ac3",
          600: "#5b62b5",
          700: "#5052a5",
          800: "#464687",
          900: "#3b3c6d",
          950: "#282843",
        },
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: {
        app: {
          icons: {},
        },
        ...getIconCollections(["heroicons"]),
      },
    }),
  ],
};
