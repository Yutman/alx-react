const path = require("path");

module.exports = {
  mode: "production", // Set the mode to production
  entry: "./js/dashboard_main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
