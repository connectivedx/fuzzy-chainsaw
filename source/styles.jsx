require.context('Vars/', true, /\.css$/);

// require any components that
// need to preserve ordering
require('Tags/Fonts/Fonts.css');
require('Tags/Root/Root.css');
require('Tags/RichText/RichText.css');

// require the rest of the components
require.context('Tags/', true, /\.css$/);
require.context('Components/', true, /\.css$/);
