// require all variables files
require.context('Vars/', true, /\.css$/);

// require any components that
// need to preserve ordering
require('Tags/Skeleton/Skeleton.css');

// require module for richtext first
require('Tags/Rhythm/Rhythm.css');
require('Tags/Heading/Heading.css');
require('Tags/Button/Button.css');
require('Tags/RichText/RichText.css');

// require the rest of the components
require.context("Tags/", true, /\.css$/);
require.context("Components/", true, /\.css$/);
