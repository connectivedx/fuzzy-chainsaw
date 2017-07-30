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


module.exports = (fcBuildConfig) => (factoryOpts) => {
  const { pkg, postcssPlugins } = fcBuildConfig;
  const { baseUrl, dest, source, sourceAll } = fcBuildConfig.pathHelpers;
  const { entries, outputDirectories, outputFormats, outputSort } = fcBuildConfig.fcConfig;

  const skeletonConfig = {
    // dllStats,
    template: source('lib/skeleton.html'),
    inject: true,
    chunksSortMode: outputSort
  };

  const shared = {
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: Object.assign({
        FcUtils: path.resolve(__dirname, '../lib/fc-utilities'),

        '@source': source(),
        '@config': source('config'),
        '@lib': source('lib'),
        '@static': source('static'),
        '@pages': source('pages'),

        '@elements': source('elements'),
        '@vars': source('elements/variables'),
        '@tags': source('elements/tags'),
        '@components': source('elements/components'),
        '@compositions': source('elements/compositions'),
        '@modifiers': source('elements/modifiers')
      }, fcBuildConfig.alias)
    },
    resolveLoader: {
      modules: [
        path.resolve(__dirname, '..', 'node_modules'),
        path.resolve(fcBuildConfig.directories.root, 'node_modules')
      ]
    },
    output: {
      path: dest(),
      publicPath: baseUrl,
      filename: `${outputDirectories.js}/${outputFormats.js}`,
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules\/(?!(FcUtils)\/)/,
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
        context: fcBuildConfig.root,
        manifest: dest(`${outputDirectories.dll}/vendor-manifest.json`) // eslint-disable-line
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

  const assets = {
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          loader: 'file-loader',
          options: {
            context: './source/',
            name: `${outputDirectories.fonts}/${outputFormats.fonts}`
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
                name: `${outputDirectories.fonts}/${outputFormats.images}`
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
            plugins: postcssPlugins.linting(fcBuildConfig, { alias: shared.resolve.alias })
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
      new ExtractTextPlugin(`${outputDirectories.css}/${outputFormats.css}`),
      new PostCssPipelineWebpackPlugin({
        suffix: undefined,
        pipeline: postcssPlugins.build(fcBuildConfig, { alias: shared.resolve.alias })
      }),
      new WebpackNotifierPlugin({
        title: 'FC Build'
      }),
      new FaviconsWebpackPlugin({
        logo: source('lib/favicon.png'),
        prefix: `${outputDirectories.favIcons}/${outputFormats.favIconPrefix}`,
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
        to: outputDirectories.static
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
        pipeline: postcssPlugins.production(fcBuildConfig, { alias: shared.resolve.alias })
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
                plugins: postcssPlugins.dev(fcBuildConfig, { alias: shared.resolve.alias })
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
      contentBase: pkg.directories.dest,
      stats,
      hot: true
    }
  };

  const archive = {
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
    return merge(shared, assets, build, ci, { entry: sourceAll(entries.ci) });

  // build mode
  } else if (factoryOpts.build) {
    return [
      merge(shared, assets, build, { entry: sourceAll(entries.build) }),
      merge(shared, assets, archive, { entry: sourceAll(entries.archive) })
    ];

  // production-ci mode
  } else if (factoryOpts.production && factoryOpts.ci) {
    return merge(shared, assets, build, production, ci, { entry: sourceAll(entries.ci) });

  // production mode
  } else if (factoryOpts.production) {
    return [
      merge(shared, assets, build, production, { entry: sourceAll(entries.build) }),
      merge(shared, assets, archive, { entry: sourceAll(entries.archive) })
    ];

  // static mode
  } else if (factoryOpts.static) {
    return merge(shared, assets, archive, { entry: sourceAll(entries.archive) });

  // test mode
  } else if (factoryOpts.test) {
    return merge(shared, test);
  }

  // dev mode
  return merge(dev, { entry: sourceAll(entries.dev) });
};
