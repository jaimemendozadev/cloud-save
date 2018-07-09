const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dev = path.resolve(__dirname, './dev/index.jsx')
const public = path.resolve(__dirname, 'public')

module.exports = {
  entry: dev,
  output: {
      path: public,
      filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js?x$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })},
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]

}