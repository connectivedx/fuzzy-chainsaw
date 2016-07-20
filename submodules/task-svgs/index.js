const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const getOptions = require('./lib/getOptions');
const getConfig = require('./lib/getConfig');

module.exports = function(options) {
	var opts = getOptions(options);
	var config = getConfig(options);

	return function() {
		return gulp.src(opts.src)
      .pipe(svgSprite(config))
      .pipe(gulp.dest(opts.dest));
  };
};
