const path = require('path');

module.exports = {
  entry: {
    'play': './play/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'play'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: [
      path.join(__dirname, 'play'),
      __dirname
    ],
    port: 7100,
    host: '0.0.0.0',
  },
  resolve: {
    modules: ['node_modules']
  },
  module: {
    rules: [{
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-default-from'
          ]
        }
      },
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/
    }, {
      test: /\.md$/,
      use: 'raw-loader'
    }]
  },
  devtool: 'inline-source-map',
  watchOptions: {
    poll: true
  },
};
