// require ordered things here
require('./tags/page-root/page-root.jsx');

// // these will require what is left
require.context("./tags/", true, /\.jsx$/);
require.context("./components/", true, /\.jsx$/);