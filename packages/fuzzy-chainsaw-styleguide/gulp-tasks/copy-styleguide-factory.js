/*
  Copies bundled styleguide into dist
*/
const path = require('path');
const gulp = require('gulp');
const print = require('gulp-print');
const { colors } = require('gulp-util');


module.exports = (config) => () => () => {
  const { pathHelpers, directories } = config;

  return gulp.src('**/*', { cwd: path.resolve(__dirname, '..', 'dist') })
    .pipe(print((filepath) => {
      const dirName = directories.styleguide.substr(directories.dest.length + 1);
      const fileName = filepath.substr(filepath.lastIndexOf('/'));
      return colors.magenta(`${dirName}${fileName}`);
    }))
    .pipe(gulp.dest(pathHelpers.dest(directories.styleguide)));
};
