// require all variables files
require.context('./variables/', true, /\.css$/);

// require any components that
// need to preserve ordering
require('./tags/Skeleton/Skeleton.css');

// require module for richtext first
require('./tags/Rhythm/Rhythm.css');
require('./tags/Heading/Heading.css');
require('./tags/Button/Button.css');
require('./tags/RichText/RichText.css');

// require the rest of the components
require.context("./tags/", true, /\.css$/);
require.context("./components/", true, /\.css$/);
