const gulp = require('gulp');
const task = require('../submodules/task-svgs');
const dirs = require('../package.json').directories;

gulp.task('svgs', task({
  src: dirs.svgs,
  dest: dirs.destSvgs,
	meta: dirs.svgs + '/meta.yaml',
}));
