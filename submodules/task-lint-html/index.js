const gulp = require('gulp');
const htmlhint = require('gulp-htmlhint');
const getOptions = require('./lib/getOptions');

module.exports = function(conf) {
  var opts = getOptions(conf);

	return function() {
    return gulp.src(opts.src)
      .pipe(htmlhint(opts.lintOpts))
      .pipe(htmlhint.reporter());
	}
};
