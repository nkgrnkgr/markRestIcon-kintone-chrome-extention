const path = require('path');
const webpack = require('webpack');
require('dotenv').config();
module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    index: "./src/index.ts",
    background: "./src/background.ts"
  },
  output: {
    path: path.join(__dirname,"dist/js/"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      ".ts"
    ]
  },
  plugins : [
    new webpack.DefinePlugin({
      "process.env.AUTH_KEY": JSON.stringify(process.env.AUTH_KEY),
    })
  ],
};