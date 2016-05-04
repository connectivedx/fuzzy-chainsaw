const gulp = require('gulp');
const images = require('../submodules/task-images');
const dirs = require('../package.json').directories;

gulp.task('images', images({
  src: dirs.images,
  dest: dirs.destImages
}))
