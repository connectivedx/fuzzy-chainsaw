const gulp = require('gulp');
const clean = require('../submodules/task-clean');

gulp.task('clean', clean({ target: 'dist' }))
