const gulp = require('gulp');
const { installBuildTasks } = require('./build/fc-build-config');
// const { installStyleguideTasks } = require('./build/fc-styleguide-config');

// add gulp tasks from FC build
installBuildTasks(gulp);

// add gulp tasks from FC styleguide
// installStyleguideTasks(gulp);
