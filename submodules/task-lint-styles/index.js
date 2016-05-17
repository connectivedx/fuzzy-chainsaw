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
  let lintConfig = config;

  if (opts.rules) {
    Object.assign(lintConfig.rules, opts.rules);
  }

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
