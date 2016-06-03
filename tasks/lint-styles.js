const gulp = require('gulp');
const lint = require('../submodules/task-lint-styles');
const dirs = require('../package.json').directories

gulp.task('lint-styles', lint({
	src: dirs.components + '/*.css'
}));

gulp.task('lint-styles-watch', () => {
	gulp.watch('source/components/**/*.css', ['lint-styles']);
});
