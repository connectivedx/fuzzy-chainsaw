const path = require('path');
const gulp = require('gulp');
const task = require('../submodules/task-scripts');
const dirs = require('../package.json').directories;

const scriptOpts = {
  entries: [dirs.components + '/main.js'],
  dest: [dirs.assets],
  name: 'bundle.js'
};

gulp.task('scripts', task.bundle(scriptOpts));
gulp.task('scripts-watch', task.watch(scriptOpts));
