const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBar = require("webpackbar");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

module.exports = {
  performance: {
    hints: "warning", // 枚举
    maxAssetSize: 30000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
    assetFilter: function (assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
    },
  },
  entry: "./src/index.js",
  devtool: false,
  output: {
    filename: "bundle.[hash].js",
    path: path.join(__dirname, "../build"),
  },
  module: {
    rules: [
      {
        test: /redux$/,
        resolve: {
          mainFields: ["module", "main", "unpkg"],
        },
      },
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: "babel-loader?cacheDirectory" }],
        exclude: /node_modules/,
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "sass-loader" },
          { loader: "postcss-loader" },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"], //这个是省略获取后缀文件名不加后缀jsx就报错
  },
  devServer: {
    // contentBase: "../build",
    port: 12121,
    historyApiFallback: true,
    hot: true,
    quiet: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new CleanWebpackPlugin(),
    new WebpackBar(),
    new SpeedMeasurePlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ],
};
