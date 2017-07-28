/*
  Defines the shared webpack config used by all workflows.
  This is a shared base webpack configuration, and the options may be overridden by consumers of this factory.
*/

const path = require('path');

// webpack core
const webpack = require('webpack');
const merge = require('webpack-merge');

// webpack helpers
const nodeExternals = require('webpack-node-externals');

// webpack plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const PostCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const SvgStorePlugin = require('webpack-svgstore-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const stats = require('./lib/webpack-stats');
// const { production: postcssProductionPipeline } = require('./lib/postcss-plugins.js');


module.exports = (buildConfig) => (factoryOpts) => {
  const { source, dest, baseUrl } = buildConfig.pathHelpers;
  const { entries, outputFormats } = buildConfig.fcConfig;

  const shared = {
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: Object.assign({
        FcUtils: path.resolve(__dirname, '../../lib/fc-utilities'),

        '@source': source(),
        '@static': source('static'),
        '@lib': source('lib'),
        '@pages': source('pages'),

        '@elements': source('elements'),
        '@vars': source('elements/variables'),
        '@tags': source('elements/tags'),
        '@components': source('elements/components'),
        '@compositions': source('elements/compositions'),
        '@modifiers': source('elements/modifiers'),

        '@styleguide': source('styleguide'),
        '@sg-vars': source('styleguide/variables'),
        '@sg-tags': source('styleguide/tags'),
        '@sg-components': source('styleguide/components')
      }, buildConfig.alias)
    },
    output: {
      path: dest(),
      publicPath: baseUrl,
      filename: `assets/${outputFormats.js}`,
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          enforce: 'pre',
          loader: 'eslint-loader' // linting
        },
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ]
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: buildConfig.root,
        manifest: require(dest('assets/dlls/vendor-manifest.json')) // eslint-disable-line
      }),
      new webpack.DefinePlugin({
        'process.env.BASE_URL': JSON.stringify(baseUrl)
      }),
      new webpack.ProvidePlugin({
        React: 'react',
        PropTypes: 'prop-types',
        FcUtils: 'FcUtils'
      })
    ]
  };

  const browser = {
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          loader: 'file-loader',
          options: {
            context: './source/',
            name: `assets/fonts/${outputFormats.fonts}`
          }
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        },
        {
          test: /\.md$/,
          use: [
            'html-loader',
            'markdown-loader'
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                context: './source/',
                name: `assets/images/${outputFormats.images}`
              }
            },
            {
              loader: 'image-webpack-loader',
              query: {
                bypassOnDebug: true,
                gifsicle: {
                  interlaced: false
                },
                optipng: {
                  optimizationLevel: 7
                },
                svgo: {
                  plugins: [
                    { cleanupAttrs: true },
                    { cleanupEnableBackground: true },
                    { cleanupIDs: true },
                    { cleanupListOfValues: true },
                    { collapseGroups: true },
                    { convertTransform: true },
                    { minifyStyles: true },
                    { removeAttrs: true },
                    { removeComments: true },
                    { removeDesc: true },
                    { removeDimensions: true },
                    { removeDoctype: true },
                    { removeEditorNSData: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyContainers: true },
                    { removeEmptyText: true },
                    { removeHiddenElems: true },
                    { removeMetadata: true },
                    { removeNonInheritableGroupAttrs: true },
                    { removeRasterImages: true },
                    { removeUnknownsAndDefaults: true },
                    { removeUnusedNS: true },
                    { removeUselessDefs: true },
                    { removeUselessStrokeAndFill: true },
                    { removeXMLNS: true },
                    { removeXMLProcInst: true },
                    { sortAttrs: true },
                    { removeViewBox: false }
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new SvgStorePlugin()
    ]
  };

  const build = {
    module: {
      rules: [
        {
          test: /\.css$/,
          enforce: 'pre',
          loader: 'postcss-loader', // linting
          options: {
            plugins: lintingPipeline
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract('css-loader?-minimize&sourceMap')
        }
      ]
    },
    plugins: [
      new ProgressBarPlugin(),
      new ExtractTextPlugin(`assets/${outputFormats.css}`),
      new PostCssPipelineWebpackPlugin({
        suffix: undefined,
        pipeline: buildPipeline
      }),
      new WebpackNotifierPlugin({
        title: 'FC Build'
      }),
      new FaviconsWebpackPlugin({
        logo: source('favicon.png'),
        prefix: `assets/favicons/${outputFormats.favIconPrefix}`,
        persistentCache: false,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }),
      new CopyWebpackPlugin([{
        from: source('static'),
        to: 'assets/static'
      }], {
        ignore: ['README.md']
      }),
      new OfflinePlugin({
        publicPath: baseUrl,
        excludes: [
          '**/_*',
          '**/.*',
          '**/*.map'
        ],
        ServiceWorker: {
          output: 'assets/offline/sw.js'
        },
        AppCache: false
      }),
      new HtmlWebpackPlugin(Object.assign({}, skeletonConfig, {
        filename: '_skeleton.html',
        baseUrl
      }))
    ]
  };

  const production = {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new PostCssPipelineWebpackPlugin({
        suffix: undefined,
        pipeline: postcssProductionPipeline
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        output: {
          comments: false
        }
      })
    ]
  };

  const dev = {
    devtool: 'inline-source-map',
    resolveLoader: {
      alias: {
        'remove-tilde-loader': path.resolve(__dirname, '../lib/remove-tilde-loader'),
        'prefix-variables-loader': path.resolve(__dirname, '../lib/prefix-variables-loader')
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: devPipeline
              }
            }
          ]
        },
        {
          test: /\.css$/,
          loader: 'prefix-variables-loader',
          include: [
            source('elements')
          ],
          options: {
            path: '@vars/index.css'
          }
        },
        {
          test: /\.css$/,
          loader: 'prefix-variables-loader',
          include: [
            source('styleguide')
          ],
          options: {
            path: '@sg-vars/index.css'
          }
        },
        {
          test: /\.css$/,
          use: 'remove-tilde-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('dev')
      }),
      new HtmlWebpackPlugin(Object.assign({}, skeletonConfig, {
        filename: 'index.html',
        mode: 'dev',
        baseUrl
      })),
      new webpack.HotModuleReplacementPlugin(),
      new WebpackNotifierPlugin({
        title: 'FC Dev'
      }),
      new CopyWebpackPlugin([{
        from: source('static'),
        to: 'assets/static'
      }], {
        ignore: ['README.md']
      })
    ],
    stats,
    devServer: {
      historyApiFallback: {
        rewrites: [{ from: /.*\.html/, to: '/index.html' }]
      },
      publicPath: '/',
      contentBase: directories.dest,
      stats,
      hot: true
    }
  };

  const staticConfig = {
    output: {
      filename: 'tmp/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: 'null-loader'
        }
      ]
    },
    externals: [
      nodeExternals({
        whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i]
      })
    ]
  };

  const test = {
    devtool: 'cheap-eval-source-map',
    node: {
      fs: 'empty'
    },
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
    module: {
      rules: [
        {
          test: /\.(css|md|json|jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,
          use: 'null-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('test')
      })
    ],
    stats
  };

  const ci = {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.CI_MODE': true
      })
    ]
  };

    // build-ci mode
  if (factoryOpts.build && factoryOpts.ci) {
    return merge(shared, browser, build, ci, entries.ci);

  // build mode
  } else if (factoryOpts.build) {
    return [
      merge(shared, browser, build, entries.build),
      merge(shared, browser, staticConfig, entries.static)
    ];

  // production-ci mode
  } else if (factoryOpts.production && factoryOpts.ci) {
    return merge(shared, browser, build, production, ci, entries.ci);

  // production mode
  } else if (factoryOpts.production) {
    return [
      merge(shared, browser, build, production, entries.build),
      merge(shared, browser, staticConfig, entries.static)
    ];

  // static mode
  } else if (factoryOpts.static) {
    return merge(shared, browser, staticConfig, entries.static);

  // test mode
  } else if (factoryOpts.test) {
    return merge(shared, test);
  }

  // dev mode
  return merge(dev, entries.dev);
};
