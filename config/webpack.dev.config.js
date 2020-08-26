const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = merge(baseConfig, {
  // 设置为开发模式
  mode: 'development',
  devtool: 'source-map',
  // 配置服务端目录和端口
  devServer: {
    contentBase: '../build',
    port: 12121,
    historyApiFallback: true,
    quiet: true,
  },
  module: {
    //所以第三方模块的配置规则
    rules: [
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, //这个上面是解析jsx语法
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], //这个是省略获取后缀文件名不加后缀jsx就报错
  },
  plugins: [new DashboardPlugin()],
})
