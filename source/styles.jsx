// require all variables files
require.context('./variables/', true, /\.css$/);

// require any components that
// need to preserve ordering
require('./tags/Skeleton/Skeleton');
require('./tags/RichText/RichText');

// require the rest of the components
require.context("./tags/", true, /\.css$/);
require.context("./components/", true, /\.css$/);
