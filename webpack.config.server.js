const nodeExternals = require('webpack-node-externals')
const path = require('path')

const srcPath = path.join(__dirname, 'src')
const distPath = path.join(__dirname, 'dist')

module.exports = {
  context: srcPath,
  entry: ['babel-polyfill', './server/server.js'],
  output: {
    path: distPath,
    filename: 'server.js',
  },
  target: 'node',
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
        use: 'css-loader',
      },
    ],
  },
  externals: nodeExternals(),
}
