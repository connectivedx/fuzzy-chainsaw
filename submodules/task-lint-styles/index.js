'use strict';

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const reporter = require('postcss-reporter');
const stylelint = require('stylelint');

const getOptions = require('./lib/getOptions');

module.exports = function lint(conf) {
  let opts = getOptions(conf);

  return function() {
    gulp.src(opts.src)
      .pipe(postcss([
        stylelint({ config: opts.lintConfig }),
        reporter()
      ]));
  }
}
