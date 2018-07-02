const path = require('path');
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
    ]
  }
}