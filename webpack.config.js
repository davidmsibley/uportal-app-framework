/* eslint-env node */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
  entry: {
    app: './index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Webpack Frame',
      template: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
        }],
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }],
      },
    ],
  },
  resolve: {
    alias: {
      'my-app': path.resolve(__dirname, 'uw-frame-components/my-app/main.js'),
      'ngAria': 'angular-aria',
      'ngMaterial': 'angular-material',
      'ngRoute': 'angular-route',
      'ngStorage': 'ngstorage',
      'ngSanitize': 'angular-sanitize',
      'ui-bootstrap': 'angular-ui-bootstrap',
      'ui-gravatar': 'angular-gravatar',
      'portal$': path.resolve(__dirname, 'uw-frame-components/portal/main.js'),
      'portal': path.resolve(__dirname, 'uw-frame-components/portal'),
      'app-config':
          path.resolve(__dirname, 'uw-frame-components/js/app-config.js'),
      'frame-config':
          path.resolve(__dirname, 'uw-frame-components/js/frame-config.js'),
      'override': path.resolve(__dirname, 'uw-frame-components/js/override.js'),
      'sortable': path.resolve(__dirname, 'uw-frame-components/js/sortable.js'),
    },
  },
};
