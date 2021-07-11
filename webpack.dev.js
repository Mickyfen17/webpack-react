const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
});
