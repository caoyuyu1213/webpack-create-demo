const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar')
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, '../build'),
  },
  module: {
    // 配置相应的规则
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader',
        ],
      },
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }, //这个上面是解析jsx语法
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], //这个是省略获取后缀文件名不加后缀jsx就报错
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new CleanWebpackPlugin(),
    new WebpackBar(),
    // new FriendlyErrorsWebpackPlugin({
    //   compilationSuccessInfo: {
    //     compilationSuccessInfo: {
    //       messages: ['You application is running here http://localhost:12121'],
    //       notes: [
    //         'Some additionnal notes to be displayed unpon successful compilation',
    //       ],
    //     },
    //   },
    //   clearConsole: true,
    // }),
  ],
}
