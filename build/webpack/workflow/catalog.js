/*
  Configures webpack form development
*/
const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const pkgpath = require('packpath');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const skeletonConfig = require('../lib/skeleton-html-config.js');
const browserWorkflow = require('./browser');
const stats = require('../lib/webpack-stats');
const { dev: devPipeline } = require('../lib/postcss-plugins.js');
const { source, baseUrl } = require('../../lib/path-helpers');

const { directories } = require(path.resolve(pkgpath.self(), 'package.json')); // eslint-disable-line

module.exports = (
  webpackMerge(
    browserWorkflow,
    {
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
        hot: false,
        setup(app){
          const bodyParser = require('body-parser');
          app.use(bodyParser.json());
          app.post("/catalog/consume", bodyParser.json(), (req, res) => {
            const oldPath = req.body['OLD'];
            const newPath = req.body['NEW'];
            const fileName = req.body['JSX'];
            const jsxPath = [newPath, '/', fileName].join('');

            fs.rename(oldPath, newPath, (err) => {
              if ( err ) console.log('ERROR: ' + err);
              fs.readFile(jsxPath, (err, contents) => {
                if (err) console.log('ERROR '+ err);
                fs.writeFile(jsxPath, contents, (err) => {
                  if (err) console.log('ERROR '+ err);
                  console.log('New Element Has Been Consumed');
                });
              });
            });
          })
        }        
      }
    }
  )
);

