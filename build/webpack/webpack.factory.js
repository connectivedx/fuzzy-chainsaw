/*
  Configures webpack to build all elements of the site.

  This file imports the basic configuration of actions (e.g. webpack.tests.js),
  and decorates them with path configurations and other project-specific setups.

  Note that configurations defined here are imported and further extended by webpack.production.config.js,
  meaning that changes here apply to debug and production builds unless they are undone in the production file.

  Where possible, favor making changes in webpack configuration from here as opposed
  to the shared configurations to keep it easy to apply upgrades.
*/
const path = require('path');
const glob = require('glob');
const fs = require('fs');
const fileExists = require('file-exists');

const pkgpath = require('packpath');
const pkg = require(path.resolve(pkgpath.self(), 'package.json'));
const dirs = pkg.directories;


/*
 *
 * IMPORT SHARED WEBPACK WORKFLOWS
 *
 */
const staticConfig = require('./workflow/webpack.static');
const browserConfig = require('./workflow/webpack.browser');
const testsConfig = require('./workflow/webpack.tests');


/*
 *
 * HELPER FUNCTIONS
 *
 */
const baseOutput = config => Object.assign({
  outputPath: path.resolve(pkgpath.self(), dirs.dest),
}, config);


/*
 *
 * CREATE WEBPACK CONFIGURATIONS
 * The shared base configurations imported earlier are augmented with paths and specific details here.
 *
 */
const configurationFactory = () => {
  const renderStatic = staticConfig(baseOutput({
    entry: {
      styleguide: path.resolve(dirs.source, 'RenderStatic.jsx')
    }
  }));

  const styleguideBundle = browserConfig(baseOutput({
    entry: path.resolve(dirs.source, 'styleguide/styleguide.jsx'),
    outputScript: '/assets/styleguide.js',
    outputStyle: '/assets/styleguide.css'
  }));

  const browserStyles = browserConfig(baseOutput({
    entry: path.resolve(dirs.source, 'styles.jsx'),
    outputStyle: '/assets/styles.css'
  }));

  const browserScripts = browserConfig(baseOutput({
    entry: path.resolve(dirs.source, 'scripts.jsx'),
    outputScript: '/assets/scripts.js',
  }));

  const componentTests = testsConfig(baseOutput({
    entry: path.resolve(dirs.source, 'tests.jsx'),
    outputScript: '/tmp/tests.js',
    reporter: path.resolve(pkgpath.self(), 'node_modules', '.bin', 'tap-min')
  }));

  return [
    renderStatic,
    styleguideBundle,
    browserStyles,
    browserScripts,
    componentTests
  ];
};


/*
 *
 * EXPORT ALL CONFIGURATIONS
 * Consumers of this config (e.g. gulp) will pass these to webpack for execution.
 * Note that the export is a factory function (to avoid sharing the same config object across requires),
 * so call it after you require it.
 *
 */
module.exports = configurationFactory;
