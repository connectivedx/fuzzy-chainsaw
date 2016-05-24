const path = require('path');

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const reporter = require('postcss-reporter');
const stylelint = require('stylelint');

const config = {
  "extends": "stylelint-config-standard",
  "rules": {
      "color-named": "never",
      "indentation": "tab"
  }
};

function lint(opts) {
  return function() {
    return gulp.src(opts.src)
      .pipe(postcss([
        stylelint({
          config: config
        }),
        reporter()
      ]))
  }
}

module.exports = {
  config: config,
  lint: lint
};
