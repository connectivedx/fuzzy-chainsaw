const gulp = require('gulp');
const sequence = require('fuzzy-chainsaw-sequence');
const { clean, bundle, render, styleguide, scaffold, test } = require('./build/build-config');


// add cleaning tasks
clean.installGulpTasks(gulp);

// add bundle tasks
bundle.installGulpTasks(gulp);

// add rendering tasks
render.installGulpTasks(gulp);

// add styleguide tasks
styleguide.installGulpTasks(gulp);

// add test tasks
test.installGulpTasks(gulp);

// add scaffold tasks
scaffold.installGulpTasks(gulp);

// add main build/dev/production task sequences
sequence.installGulpTasks(gulp);
