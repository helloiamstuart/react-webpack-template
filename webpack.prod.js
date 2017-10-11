const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});
