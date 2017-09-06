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

// fc stuff
const { webpackStats: stats } = require('fuzzy-chainsaw-shared');
const defaultPostcssPlugins = require('./lib/postcss-plugins');


module.exports = (config) => (factoryOpts = {}) => {
  const { pkg, postcssPlugins, framework, projectConfig, webpackOpts = {} } = config;
  const { entries, outputDirectories, outputFormats } = projectConfig;
  const { baseUrl, dest, source, root: rootPath } = config.pathHelpers;

  // This takes a simple object of entry:filepath pairs
  // and runs each filepath through the source() helper
  const sourceAll = (entry) =>
    Object.keys(entry)
      .reduce((allEntries, key) => {
        allEntries[key] = source(entry[key]);
        return allEntries;
      }, {});

  const postcssPipelines = postcssPlugins
    ? postcssPlugins(defaultPostcssPlugins, config)
    : defaultPostcssPlugins;


  const alias = Object.assign({
    FcUtils: path.resolve(__dirname, '../helpers/fc-utilities'),

    '@root': rootPath(),
    '@build': rootPath('build'),

    '@source': source(),
    '@lib': source('lib'),
    '@static': source('static'),
    '@pages': source('pages'),

    '@elements': source('elements'),
    '@vars': source('variables'),
    '@tags': source('elements/tags'),
    '@components': source('elements/components'),
    '@compositions': source('elements/compositions'),
    '@modifiers': source('elements/modifiers')
  }, config.alias);


  const skeletonConfig = {
    template: source(projectConfig.skeletonSource || 'lib/skeleton.html'),
    inject: true,
    chunksSortMode: projectConfig.outputSort
  };


  const vendorDll = {
    plugins: [
      new webpack.DllReferencePlugin({
        context: config.root,
        manifest: dest(outputDirectories.dll, 'vendor-manifest.json')
      }),
      new AddAssetHtmlPlugin({
        filepath: dest(outputDirectories.dll, 'vendor.dll.js'),
        includeSourcemap: false,
        hash: false,
        publicPath: baseUrl + outputDirectories.dll,
        outputPath: baseUrl + outputDirectories.dll
      })
    ]
  };


  const archiveDll = {
    plugins: [
      new webpack.DllReferencePlugin({
        context: config.root,
        manifest: dest(outputDirectories.dll, 'archive-manifest.json')
      }),
      new AddAssetHtmlPlugin({
        filepath: dest(outputDirectories.dll, 'archive.dll.js'),
        includeSourcemap: false,
        hash: false,
        publicPath: baseUrl + outputDirectories.dll,
        outputPath: baseUrl + outputDirectories.dll
      })
    ]
  };


  const shared = {
    devtool: 'source-map',
    resolve: {
      extensions: framework.build.extensions,
      alias
    },
    resolveLoader: {
      modules: [
        path.resolve(__dirname, '..', 'node_modules'),
        path.resolve(config.directories.root, 'node_modules')
      ]
    },
    output: {
      path: dest(),
      publicPath: baseUrl,
      filename: `${outputDirectories.js}/${outputFormats.js}`,
      libraryTarget: 'umd'
    },
    module: {
      rules: framework.build.webpackLoaders
    },
    plugins: [
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
                name: `${outputDirectories.images}/${outputFormats.images}`
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
      plugins: postcssPipelines.linting(config, { alias })
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
        pipeline: postcssPipelines.build(config, { alias })
      }),
      new WebpackNotifierPlugin({
        title: 'FC Build'
      }),
      new FaviconsWebpackPlugin({
        logo: source(projectConfig.favIcon || 'lib/favicon.png'),
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
      config.skipOfflinePlugin ? undefined : (
        new OfflinePlugin({
          publicPath: baseUrl,
          excludes: [
            '**/_*',
            '**/.*',
            '**/*.map'
          ],
          ServiceWorker: {
            output: `${outputDirectories.offline}/sw.js`
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
        pipeline: postcssPipelines.production(config, { alias })
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
    // BUG FOR SLOW SLOW SLOW https://github.com/webpack/webpack/issues/5478
    cache: false,
    devtool: 'inline-source-map',
    resolveLoader: {
      alias: {
        'remove-tilde-loader': path.resolve(__dirname, './lib/remove-tilde-loader'),
        'prefix-variables-loader': path.resolve(__dirname, './lib/prefix-variables-loader')
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
                plugins: postcssPipelines.dev(config, { alias })
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
    output: {
      filename: `${outputDirectories.js}/[name].js`
    }
  };


  const ci = {
    plugins: [
      new webpack.DefinePlugin(Object.assign({
        'process.env.CI_MODE': true
      }, webpackOpts.definePluginCi))
    ]
  };


  const excludeExternals = {
    externals: [
      nodeExternals({
        whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i]
      })
    ]
  };


  // production-ci mode
  if (factoryOpts.production && factoryOpts.ci) {
    return merge(vendorDll, shared, assets, build, ci, production, { entry: sourceAll(entries.ci) });

  // production mode
  } else if (factoryOpts.production) {
    return [
      merge(vendorDll, shared, assets, build, production, { entry: sourceAll(entries.build) }),
      merge(shared, assets, archive, { entry: sourceAll(entries.archive) })
    ];

  // build-ci mode
  } else if (factoryOpts.build && factoryOpts.ci) {
    return merge(vendorDll, shared, assets, build, ci, { entry: sourceAll(entries.ci) });

  // build mode
  } else if (factoryOpts.build) {
    return [
      merge(vendorDll, shared, assets, build, { entry: sourceAll(entries.build) }),
      merge(shared, assets, archive, excludeExternals, { entry: sourceAll(entries.archive) })
    ];

  // archive mode
  } else if (factoryOpts.archive) {
    return merge(shared, assets, archive, { entry: sourceAll(entries.archive) });

  // dev mode
  } else if (factoryOpts.dev) {
    return merge(vendorDll, archiveDll, shared, assets, dev, { entry: sourceAll(entries.dev) });
  }

  // shared
  return merge(shared);
};
