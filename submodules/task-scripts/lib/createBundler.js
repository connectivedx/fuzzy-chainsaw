'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const hbsfy = require('hbsfy');

const getOpts = require('./getOptions');

module.exports = function createBundler(options) {
  const opts = getOpts(options)
  const b = browserify(opts);

  b.transform(babelify, { presets: ['es2015'] });
  b.transform(hbsfy);

  if (opts.watch) {
    b.plugin(watchify);
    b.on('update', bundle);
  }

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

    return stream;
  }

  return bundle();
}
