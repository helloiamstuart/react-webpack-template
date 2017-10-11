const merge = require('webpack-merge');
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
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});
