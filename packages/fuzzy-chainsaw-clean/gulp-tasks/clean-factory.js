/*
  This task deletes old files before a webpack bundle
*/

const del = require('del');

module.exports = (config) => (factoryOptions) => {
  const { dest } = config.pathHelpers;
  const { outputDirectories } = config.projectConfig;

  let paths = [];

  if (factoryOptions.pre) {
    paths = paths.concat([
      dest('**/*.html'),
      dest('*.json'),
      dest(`${outputDirectories.js}/*.{js,js.map}`),
      dest(`${outputDirectories.css}/*.{css,css.map}`),
      dest(`${outputDirectories.fonts}/**`),
      dest(`${outputDirectories.images}/**`),
      dest(`${outputDirectories.offline}/**`),
      dest(`${outputDirectories.svgs}/*`),
      dest(`${outputDirectories.static}/*`)
    ]);
  }

  if (factoryOptions.post) {
    paths = paths.concat([
      dest('tmp')
    ]);
  }

  return () => del(paths, { force: true });
};
