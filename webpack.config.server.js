const path = require('path');
const ExternalsPlugin = require('webpack-externals-plugin');

module.exports = {
  entry: './server/index.js',

  output: {
    path: './build/server',
    filename: 'server.bundle.js'
  },

  target: 'node',

  node: {
    __filename: true,
    __dirname: true
  },

  resolve: {
    extensions: ['', '.js'],
    modules: [
      'node_modules'
    ]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new ExternalsPlugin({
      type: 'commonjs',
      include: path.join(__dirname, './node_modules/')
    })
  ]
};