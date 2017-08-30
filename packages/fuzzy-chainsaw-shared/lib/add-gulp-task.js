// wrapper around gulp.task to provide install
// option to skip certain
module.exports = (gulp, taskOptions = { skip: [] }) => (name, fn) => {
  if (taskOptions.skip.indexOf(name) < 0) {
    gulp.task(name, fn);
  }
};
