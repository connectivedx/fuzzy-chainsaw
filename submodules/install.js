// a script to install the package.json
// dependencies of submodules so we can
// develop these a bit easier locally
const fs = require('fs');
const execSync = require('child_process').execSync;
const directories = fs.readdirSync(__dirname);

directories
  .filter(name => name.includes('task-'))
  .forEach(task => execSync(`cd ${__dirname}/${task} && npm i`));


