const path = require('path')
const webpack = require('webpack') 
const merge = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})