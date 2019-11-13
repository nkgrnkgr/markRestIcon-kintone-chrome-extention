module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.ts",
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
  }
}