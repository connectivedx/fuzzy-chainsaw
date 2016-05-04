const gulp = require('gulp');
const check = require('../submodules/task-check-versions');

gulp.task('check-versions', check({
	pkg: require('../package.json')
}))
