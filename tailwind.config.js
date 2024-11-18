/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      primary: "#e94477",
      secondary: "#0d8bdf",
      gradient: "#dec203",
      blackTitle: "#1A1F22",
      title: "#0F2239",
      subtitle: "#3D484D",
      secondarySubtitle: "#B2BBC6",
      borders: "#E6E8E9",
      description: "#3D484D",
      nav: "#494949",
      white: "#fff",
      black: "#000",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      transparent: "transparent",
      current: "currentColor",
      red: colors.red,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    screens: {
      xs: "475px",

      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // '3xl': '1600px',
    },
    fontFamily: {
      cairo: ["Cairo", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      elMessiri: ["elMessiri", "sans-serif"],
      din: ["Din", "sans-serif"],
    },
    minHeight: {
      "3/4": "75%",
    },
    maxWidth: {
      "3/4": "75%",
    },
    extend: {
      translate: {
        45: "45%",
        32: "32%",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "4rem",
      },
    },
  },
  plugins: [],
};
