'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');

const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

module.exports = function createBundler(options) {
  const opts = getOpts(options)
    const b = browserify(opts);

    b.transform(babelify, { presets: ['es2015'] });

    b.on('update', bundle);
    b.on('log', gutil.log);

    // allows an place to add transforms, plugins,
    // and any external hooks needed
    if (typeof opts.configure === 'function') {
      opts.configure(b);
    }

    function bundle() {
        var stream = b.bundle()
          .on('error', gutil.log.bind(gutil, 'Browserify Error'))
          .pipe(source(opts.name))
          .pipe(buffer())
          .pipe(sourcemaps.init({ loadMaps: true }))
          .pipe(sourcemaps.write('./'));

      // this allows a place for developer to
      // place external gulp plugins
      opts.gulpPlugins.forEach(plugin => {
        stream.pipe(plugin)
      });

      // this allows dest to be an array
      // to output to multiple locations
      opts.dest.forEach(dest => {
        stream.pipe(gulp.dest(dest))
      });

      return stream
    }

    return bundle();
}

const defaultOpts = {
  debug: true,
  configure: function() { }
};

const watchOpts = {
  cache: { },
  packageCache: { },
  plugin: [ watchify ]
}

function getOpts(options) {
  let opts = Object.assign(
    {},
    defaultOpts,
    options.watch ? watchOpts : {},
    options
  );

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
