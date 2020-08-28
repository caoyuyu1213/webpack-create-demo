const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = merge(baseConfig, {
  // 设置为开发模式
  mode: "development",
  // devtool: "source-map",
  // 配置服务端目录和端口
  devServer: {
    // contentBase: "../build",
    port: 12121,
    historyApiFallback: true,
    // quiet: true,
  },
  plugins: [new DashboardPlugin()],
});
