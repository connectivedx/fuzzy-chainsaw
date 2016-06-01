const gulp = require('gulp');
const getOptions = require('./lib/getOptions');

module.exports = function(conf) {
  var opts = getOptions(conf);

	return function copy() {
    return gulp.src(opts.src)
      .pipe(gulp.dest(opts.dest));
	}
};
