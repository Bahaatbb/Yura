const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // speedup TS lint checking
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Generate new bundles
const CopyPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map', //slowest build, but best sourcemaps, autodisabled on "prod" mode
  devServer: {
    compress: true,
    port: process.env.DEVELOPMENT_PORT || 9001,
    host: process.env.DEVELOPMENT_HOST || '0.0.0.0',
    hot: true,
    client: {
      logging: 'info',
      overlay: false,
    },
    historyApiFallback: true,
    liveReload: true
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 200,
    poll: 1000
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: '/',
      inject: true,
      favicon: false,
      template: 'src/index.html'
    }),
    new ForkTsCheckerWebpackPlugin({ // runs TypeScript type checker on a separate process
      typescript: {
        memoryLimit: 4 * 1024,
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        }
      }
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/resources', to: '' }
      ],
    }),
    // new InjectManifest({
    //   swSrc: path.resolve('./src/serviceWorker/serviceWorker.js'),
    //   include: [],
    // }),
  ]
};
