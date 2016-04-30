const gulp = require('gulp');
const styles = require('../submodules/task-styles');
const dirs = require('../package.json').directories

gulp.task('styles', styles({
	src: dirs.components + '/*.scss',
	dest: dirs.assets
}))
