var path = require("path");
var express = require("express");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var proxy = require("http-proxy-middleware");

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  noInfo : true,
  publicPath : webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.get("/:firstname/:lastname", function(req, res) {
  res.sendFile(path.join(__dirname, "/build/index.html"));
})

app.listen("8809", function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("listening at http://localhost:8809");
});
