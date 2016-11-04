// require ordered things here
require('./tags/PageRoot/PageRoot');

// // these will require what is left
require.context("./tags/", true, /\.jsx$/);
require.context("./components/", true, /\.jsx$/);
