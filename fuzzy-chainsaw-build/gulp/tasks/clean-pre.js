/*
  This task deletes old files before a webpack bundle
*/

const del = require('del');

module.exports = ({ pathHelpers }) => () => (
  del([
    pathHelpers.dest('**/*.html'),
    pathHelpers.dest('*.json'),
    pathHelpers.dest('assets/*.{js,js.map,css,css.map}'),
    pathHelpers.dest('assets/fonts/**'),
    pathHelpers.dest('assets/images/**'),
    pathHelpers.dest('assets/offline/**'),
    pathHelpers.dest('assets/svgs/*'),
    pathHelpers.dest('assets/vendor/*')
  ], {
    force: true
  })
);
