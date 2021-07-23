const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        material_ui_index: resolve(__dirname, "./material-ui/index.html"),
        material_ui_buttons: resolve(__dirname, "./material-ui/buttons.html"),
      },
    },
  },
};
