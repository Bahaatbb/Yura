const path = require('path');

module.exports = {
  entry: {
    index: './src/index.tsx'
    // Do we need multiple enties if we have Admin/Student:
    // https://webpack.js.org/concepts/entry-points/#multi-page-application
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.resolve('build'),
    publicPath: '/',
    clean: true // CleanWebpackPlugin probably will be deprecated, since this option was introduced
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader', // ts is expensive, thread-loader makes TS loader run faster
            options: {
              workers: 8,
              poolTimeout: 5000
            }
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              configFile: 'tsconfig.json'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        resourceQuery: /url/,
        type: 'asset/inline'
      },
      {
        test: /\.svg$/,
        resourceQuery: { not: [/url/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              memo: true,
              svgo: true,
              svgoConfig: {
                multipass: true,
                plugins: [
                  {
                    removeScriptElement: true,
                    removeComments: true
                  }
                ]
              }
            }
          }
        ]
      },
      {
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/[name].[contenthash:8].[ext]'
            }
          }
        ],
        exclude: [/\.(svg|png|bmp|gif|jpg|jpeg|css|scss|sass|js|mjs|jsx|ts|tsx|woff|woff2|ttf)$/, /\.html$/, /\.json$/]
      },
      {
        test: /\.png/,
        type: 'asset/inline'
      }
    ]
  },
  optimization: {
    // What before was CommonsChunkPlugin
    splitChunks: {
      chunks: 'async',
      hidePathInfo: true,
      minSize: 2000000,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          enforce: true,
          reuseExistingChunk: true
        },
        reactVendor: {
          name: 'react',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          priority: 0,
          chunks: 'all',
          enforce: true
        },
        default: {
          name: 'default',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        resources: {
          name: 'resources',
          test: /[\\/]resources/,
          priority: 0,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify')
    },
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      path.resolve('src/'),
      path.resolve('src/modules/'),
      path.resolve('src/components'),
      path.resolve('src/assets'),
      path.resolve('src/globalstyles'),
      path.resolve('src/routing'),
      path.resolve('src/misc'),
      'node_modules',
      'src/globalstyles'
    ]
  }
};
