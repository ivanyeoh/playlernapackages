const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    library: "",
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env"],
          }
        }
      }
    ]
  }
};

