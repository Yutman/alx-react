const path = require("path");

module.exports = {
  mode: "production",
  entry: "./js/dashboard_main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css/, // Match CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader
      },
      {
        test: /\.(png|jpe?g|gif|svg)/, // Match common image file extensions
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // Images smaller than 8kb will be inlined as base64 data URLs
              name: "images/[name].[ext]", // Output images to the 'images' directory
            },
          },
        ],
      },
    ],
  },
};
