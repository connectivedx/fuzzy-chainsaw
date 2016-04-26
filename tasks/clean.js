const gulp = require('gulp');
const clean = require('../submodules/task-clean');
const dirs = require('../package.json').directories;

gulp.task('clean', clean({ target: dirs.dest }))
