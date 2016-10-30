const dopl = require('dopl');

const output = process.argv[2];
const name = process.argv[3];
if (!name) throw new Error('No name provided, try `npm run create-tag NAME`')

const componentName =
  name
    .split('-')
    .map(part => part.substr(0, 1).toUpperCase() + part.substr(1))
    .join('');

dopl({
  name,
  src: __dirname + '/component-template',
  output,
  data: {
    componentName
  }
})
.then(() => {
  console.log(`${output}/${name} created successfully!`);
});
