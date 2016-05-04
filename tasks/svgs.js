const gulp = require('gulp');
const svgs = require('../submodules/task-svgs');
const dirs = require('../package.json').directories;

gulp.task('svgs', svgs({
  src: dirs.svgs,
  dest: dirs.destSvgs
}));
