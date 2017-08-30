/*
  This provides a factory that returns a gulp task
  for scaffolding directories.
*/

const gutil = require('gulp-util');
const minimist = require('minimist');
const chalk = require('chalk');
const dopl = require('dopl');


const scaffoldComponent = ({
  name,
  src,
  output
}) => {
  if (!/^[A-Z][A-Za-z]+$/.test(name)) {
    gutil.log(chalk.bgRed('The name should be in PascalCase.'));
    process.exit(1);
  }

  return dopl({
    src,
    output,
    data: {
      name
    }
  });
};


module.exports = ({ source, dest }) => () => {
  const argv = minimist(process.argv.slice(2));

  return scaffoldComponent({
    name: argv.name,
    src: source(), // TODO: allow abs. path
    output: dest(argv.name)
  });
};

