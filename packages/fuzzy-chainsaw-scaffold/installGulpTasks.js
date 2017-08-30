/* eslint global-require: 0 */
const path = require('path');

module.exports = (config) => (gulp, taskOptions = { skip: [] }) => {
  const { source, dest } = config.pathHelpers;
  const scaffoldFactory = require('./gulp-tasks/scaffold-factory')({ source, dest });

  // wrapper around gulp.task to provide install
  // option to skip certain
  const gulpTask = (name, fn) => {
    if (taskOptions.skip.indexOf(name) < 0) {
      gulp.task(name, fn);
    }
  };


  // scaffolding tasks
  // tasks here require cli arguments

  // stateless:

  // gulp scaffold:tag --name [name]
  gulpTask('scaffold:tag', scaffoldFactory({
    src: path.resolve(__dirname, 'template/stateless-component'),
    dest: source('elements/tags')
  }));

  // gulp scaffold:component --name [name]
  gulpTask('scaffold:component', scaffoldFactory({
    src: path.resolve(__dirname, 'template/stateless-component'),
    dest: source('elements/components')
  }));

  // gulp scaffold:composition --name [name]
  gulpTask('scaffold:composition', scaffoldFactory({
    src: path.resolve(__dirname, 'template/stateless-component'),
    dest: source('elements/composition')
  }));

  // stateful:

  // gulp scaffold:tag:stateful --name [name]
  gulpTask('scaffold:tag:stateful', scaffoldFactory({
    src: path.resolve(__dirname, 'template/stateful-component'),
    dest: source('elements/tags')
  }));

  // gulp scaffold:component:stateful --name [name]
  gulpTask('scaffold:component:stateful', scaffoldFactory({
    src: path.resolve(__dirname, 'template/stateful-component'),
    dest: source('elements/components')
  }));

  // gulp scaffold:composition:stateful --name [name]
  gulpTask('scaffold:composition:stateful', scaffoldFactory({
    src: path.resolve(__dirname, 'template/stateful-component'),
    dest: source('elements/compositions')
  }));
};
