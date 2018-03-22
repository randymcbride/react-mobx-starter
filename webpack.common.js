const path = require('path')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HardSourceWebpackPlugin()
  ]
}