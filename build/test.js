const gulp = require('gulp');
const tape = require('gulp-tape');

const fs = require('fs');
const path = require('path');
const pkgpath = require('packpath');

const { directories: dirs } = require(path.resolve(pkgpath.self(), 'package.json'));


module.exports = () => {
  // const stats = require(path.resolve(pkgpath.self(), dirs.dest, 'stats.json'));

  return gulp.src(path.resolve(pkgpath.self(), dirs.dest, `tmp/tests.js`))
    .pipe(tape())
};
