'use strict';

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const reporter = require('postcss-reporter');
const stylelint = require('stylelint');

const defaults = {
  "extends": "stylelint-config-standard",
  "rules": {
      "color-named": "never",
      "indentation": "tab"
  }
};

function config(opts) {
  let conf = Object.assign(defaults);
  opts = opts || {};

  if (opts.rules) {
    Object.assign(conf.rules, opts.rules);
  }

  return conf;
}

function lint(opts) {
  opts = opts || {};
  let lintConfig = config(opts);

  return function() {
    gulp.src(opts.src)
      .pipe(postcss([
        stylelint({ config: lintConfig }),
        reporter()
      ]));
  }
}

module.exports = {
  config: config,
  lint: lint
};
