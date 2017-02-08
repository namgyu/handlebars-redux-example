var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry : {
    app : [
      "webpack/hot/dev-server",
      "webpack-hot-middleware/client",
      "./src/main.js"
    ]
  },
  output : {
    path : path.resolve(__dirname, "build"),
    publicPath : "/assets/",
    filename : "bundle.js"
  },
  module : {
    loaders : [{
      test : /\.js$/,
      exclude : /node_modules/,
      loader : "babel-loader"
    }]
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin()
  ]
};
