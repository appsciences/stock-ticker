const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',

  output: {
    path: './build/client',
    filename: 'client.bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          babelrc: false,
          presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html'
    })
  ]
};