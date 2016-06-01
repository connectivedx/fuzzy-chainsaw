const gulp = require('gulp');
const lintHtml = require('../submodules/task-lint-html');
const dirs = require('../package.json').directories;

gulp.task('lint-html', lintHtml({
  src: dirs.dest + '/**/*.html'
}));

gulp.task('lint-html-watch', function() {
  gulp.watch(dirs.dest + '/**/*.html', ['lint-html'])
});
