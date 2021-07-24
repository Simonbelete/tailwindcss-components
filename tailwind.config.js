module.exports = {
  mode: "jit",
  purge: ["./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        material_ui: {
          default: "#e0e0e0",
          defautl_hover: "#d5d5d5",
          default_hover_1: "#0000000a",
          primary: "#1976d2",
          primary_hover: "#115293",
          primary_hover_1: "#1976d20a",
          secondary: "#dc004e",
          secondary_hover: "#9a0036",
          secondary_hover_1: "#dc004e0a",
          disabled: "#e0e0e0",
          disabled_1: "#aaaaaa",
          link: "#1976d2",
          link_hover: "#115293",
          link_hover_1: "#1976d20a",
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
        material_ui_hover:
          "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
        material_ui_active:
          "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
