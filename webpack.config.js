const { resolve } = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const package = require("./package.json");

module.exports = {
  entry: resolve(__dirname, "src/index.js"),
  output: {
    path: resolve(__dirname, "./"),
    filename: `${package.name}.webpack.js`
  },
  plugins: [
    new UglifyJsPlugin({
      exclude: [/\.min\.js$/gi], // skip pre-minified libs
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
    ],
  },
};
