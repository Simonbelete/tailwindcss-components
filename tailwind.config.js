module.exports = {
  mode: "jit",
  purge: ["./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      material_ui: {
        default: "#e0e0e0",
        primary: "#1976d2",
        secondary: "#dc004e",
        disabled: "#e0e0e0",
        disabled_1: "#aaaaaa",
        link: "#1976d2",
        black: "#323232",
        white: "#fffefe",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
    boxShadow: {
      material_ui:
        "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
