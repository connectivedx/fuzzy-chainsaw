/*
  This task deletes temp files after a webpack bundle
*/

const del = require('del');
const { dest } = require('./lib/path-helpers');


module.exports = () => (
  del([
    dest('tmp')
  ], { force: true })
);
