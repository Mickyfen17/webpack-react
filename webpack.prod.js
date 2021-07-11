const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[contenthash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        extractComments: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new CopyWebpackPlugin({ patterns: [{ from: 'images', to: 'images' }] }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true
    })
  ]
});
