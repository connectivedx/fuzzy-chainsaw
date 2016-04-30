const gulp = require('gulp');
const bundle = require('../submodules/task-scripts').bundle;
const watch = require('../submodules/task-scripts').watch;

const dirs = require('../package.json').directories;

const scriptOpts = {
  entry: dirs.components + '/main.js',
  dest: dirs.assets,
  name: 'bundle.js'
};

gulp.task('scripts', bundle(scriptOpts));
gulp.task('scripts-watch', watch(scriptOpts));
