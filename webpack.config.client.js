const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcPath = path.join(__dirname, 'src')
const distPath = path.join(__dirname, 'dist')

module.exports = {
  context: srcPath,
  entry: ['babel-polyfill', 'whatwg-fetch', './client/client.js'],
  output: {
    path: distPath,
    filename: 'client.js',
    publicPath: '/',
  },
  target: 'web',
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '/styles/app.css',
    }),
  ],
}
