'use strict';

const defaultOpts = {
  debug: true,
  configure: function() { }
};

const watchOpts = {
  cache: { },
  packageCache: { },
  plugin: [ ]
}

module.exports = function(options) {
  let opts = Object.assign(
    {},
    defaultOpts,
    options.watch ? watchOpts : {},
    options
  );

  if (options.watch !== undefined) {
    opts.watch = options.watch;
  }

  if (options.entries !== undefined) {
    opts.entries = options.entries;
  }

  if (options.debug !== undefined) {
    opts.debug = options.debug;
  }

  // helper to force dest as an array
  if (!Array.isArray(options.dest)) {
    opts.dest = [options.dest];
  }

  if (options.gulpPlugins === undefined) {
    opts.gulpPlugins = [];
  }

  return opts;
}
