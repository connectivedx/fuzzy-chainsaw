/*
  This task deletes temp files after a webpack bundle
*/

const del = require('del');

module.exports = ({ pathHelpers }) => () => (
  del([
    pathHelpers.dest('tmp')
  ], { force: true })
);
