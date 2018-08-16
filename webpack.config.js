const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require('path');

const PUBLIC_PATH = 'https://www.danielsr.com/';
module.exports = {
  entry: path.resolve('./client/src/index.js'),
  output: {
    path: path.resolve('./client/public'),
    filename: 'bundle.js'
  },
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'personal site',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      minify: false,
      navigateFallback: `${PUBLIC_PATH}index.html`,
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=1000000&mimetype=image/svg+xml'
      },
      {
        test: /\.(pdf|gif|png|jpe?g)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  mode: 'production'
};
