const gulp = require('gulp');
const task = require('../index');

gulp.task('default', task.bundle({
  entries: 'fixtures/main.js',
  dest: 'dist',
  name: 'bundle.test.js'
}));
