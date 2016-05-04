const gulp = require('gulp');
const fonts = require('../submodules/task-fonts');
const dirs = require('../package.json').directories;

gulp.task('fonts', fonts({
  src: dirs.fonts,
  dest: dirs.destFonts
}))
