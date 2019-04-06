module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js"
  },
  module: {
    loader: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        use: ["babel-loader"],
        query: {
          presets: ["react", "es2015", "react-hmre"],
          plugins: ["transform-class-properties"]
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};
