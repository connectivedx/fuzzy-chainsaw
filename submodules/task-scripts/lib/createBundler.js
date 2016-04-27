const gulp = require('gulp');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');

const browserify = require('browserify');
const babelify = require('babelify');
const rogainify = require('rogainify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

module.exports = function createBundler(b, opts) {
  b.transform(babelify, { presets: ['es2015'] });

  b.on('update', bundle); // on any dep update, runs the bundler
  b.on('log', gutil.log); // output build logs to terminal

  function bundle() {
    return b.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source(opts.name))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(opts.dest));
  }

  return bundle();
}
