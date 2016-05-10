const gulp = require('gulp');
module.exports = function(opts) {
	return function() {
    return gulp.src(opts.src + '/**/*').pipe(gulp.dest(opts.dest));
	}
};
