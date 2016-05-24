'use strict';

const PluginName = require('../package.json').name

const defaultOpts = {
  debug: true,
  configure: function() { }
};

const watchOpts = {
  cache: { },
  packageCache: { }
}

module.exports = function(options) {
  options = options || {};

  let opts = Object.assign(
    {},
    defaultOpts,
    options.watch ? watchOpts : {},
    options
  );

  // Required Options
  if (options.name === undefined) {
    throw new Error(PluginName + ': options.name is not defined');
  }

  if (options.entries !== undefined) {
    opts.entries =
      Array.isArray(options.entries)
        ? options.entries
        : [options.entries];
  } else {
    throw new Error(PluginName + ': options.entries are not defined.');
  }

  // helper to force dest as an array
  if (options.dest !== undefined) {
    if (!Array.isArray(options.dest)) {
      opts.dest = [options.dest];
    }
  } else {
    throw new Error(PluginName + ': options.name is not defined');
  }

  // Optional Options
  if (options.watch !== undefined) {
    opts.watch = options.watch;
  }

  if (options.debug !== undefined) {
    opts.debug = options.debug;
  }

  if (options.gulpPlugins === undefined) {
    opts.gulpPlugins = [];
  }

  return opts;
}
