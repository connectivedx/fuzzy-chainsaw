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
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
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
const defaultPostcssPlugins = require('../lib/postcss-plugins');


module.exports = (fcBuildConfig) => (factoryOpts) => {
  const { pkg, postcssPlugins, fcConfig, webpackOpts = {} } = fcBuildConfig;
  const { baseUrl, dest, source, sourceAll } = fcBuildConfig.pathHelpers;
  const { entries, outputDirectories, outputFormats, outputSort } = fcConfig;

  const postcssPipelines = postcssPlugins
    ? postcssPlugins(defaultPostcssPlugins, fcBuildConfig)
    : defaultPostcssPlugins;

  const alias = Object.assign({
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
  }, fcBuildConfig.alias);

  const skeletonConfig = {
    // dllStats,
    template: source(fcConfig.skeletonSource || 'lib/skeleton.html'),
    inject: true,
    chunksSortMode: outputSort
  };

  const shared = {
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
      alias
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
          exclude: /node_modules/, // (?!(FcUtils)\/)/,
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
        manifest: dest(`${outputDirectories.dll}/vendor-manifest.json`)
      }),
      new AddAssetHtmlPlugin({
        filepath: dest(`${outputDirectories.dll}/vendor.dll.js`),
        includeSourcemap: false,
        hash: true,
        outputPath: outputDirectories.dll
      }),
      new webpack.DefinePlugin(Object.assign({
        'process.env.BASE_URL': JSON.stringify(baseUrl)
      }, webpackOpts.definePlugin)),
      new webpack.ProvidePlugin(Object.assign({
        React: 'react',
        PropTypes: 'prop-types',
        FcUtils: 'FcUtils'
      }, webpackOpts.definePlugin))
    ]
  };

  const assets = {
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          loader: 'file-loader',
          options: {
            context: pkg.directories.source,
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
                context: pkg.directories.source,
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


  const cssLinting = {
    test: /\.css$/,
    enforce: 'pre',
    loader: 'postcss-loader', // linting
    exclude: /node_modules/, // (?!(FcUtils)\/)/,
    options: {
      plugins: postcssPipelines.linting(fcBuildConfig, { alias })
    }
  };

  const build = {
    module: {
      rules: [
        cssLinting,
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
        pipeline: postcssPipelines.build(fcBuildConfig, { alias })
      }),
      new WebpackNotifierPlugin({
        title: 'FC Build'
      }),
      new FaviconsWebpackPlugin({
        logo: source(fcConfig.favIcon || 'lib/favicon.png'),
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
        from: alias['@static'],
        to: outputDirectories.static
      }], {
        ignore: ['README.md']
      }),
      fcBuildConfig.skipOfflinePlugin ? undefined : (
        new OfflinePlugin({
          publicPath: baseUrl,
          excludes: [
            '**/_*',
            '**/.*',
            '**/*.map'
          ],
          ServiceWorker: {
            output: `${outputDirectories.dll}/sw.js`
          },
          AppCache: false
        })
      ),
      new HtmlWebpackPlugin(Object.assign({}, skeletonConfig, {
        filename: '_skeleton.html',
        baseUrl
      }))
    ].filter((a) => a)
  };

  const production = {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin(Object.assign({
        'process.env.NODE_ENV': JSON.stringify('production')
      }, webpackOpts.definePluginProduction)),
      new PostCssPipelineWebpackPlugin({
        suffix: undefined,
        pipeline: postcssPipelines.production(fcBuildConfig, { alias })
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
        cssLinting,
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: postcssPipelines.dev(fcBuildConfig, { alias })
              }
            }
          ]
        },
        {
          test: /\.css$/,
          loader: 'prefix-variables-loader',
          include: [
            alias['@elements']
          ],
          options: {
            path: '@vars/index.css'
          }
        },
        {
          test: /\.css$/,
          use: 'remove-tilde-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(Object.assign({
        'process.env.NODE_ENV': JSON.stringify('dev')
      }, webpackOpts.definePluginDev)),
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
        from: alias['@static'],
        to: outputDirectories.static
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
    externals: Object.assign({
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    }, fcConfig.testExternals),
    module: {
      rules: [
        {
          test: /\.(css|md|json|jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,
          use: 'null-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(Object.assign({
        'process.env.NODE_ENV': JSON.stringify('test')
      }, webpackOpts.definePluginTest))
    ],
    stats
  };

  const ci = {
    plugins: [
      new webpack.DefinePlugin(Object.assign({
        'process.env.CI_MODE': true
      }, webpackOpts.definePluginCi))
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
  return merge(shared, assets, dev, { entry: sourceAll(entries.dev) });
};
