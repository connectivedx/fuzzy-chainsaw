const gulp = require('gulp');
const styles = require('../submodules/task-styles');

gulp.task('styles', styles({
	src: 'source/components/*.scss',
	dest: 'dist/assets'
}))
