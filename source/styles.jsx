// require all variables files
require.context('Vars/', true, /\.css$/);

// require any components that
// need to preserve ordering
require('Tags/Skeleton/Skeleton');
require('Tags/RichText/RichText');

// require the rest of the components
require.context("Tags/", true, /\.css$/);
require.context("Components/", true, /\.css$/);
