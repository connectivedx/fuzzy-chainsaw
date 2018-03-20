const requireAll = (context) => context.keys().map(context);

// import variables before molecules
require('@vars/index.css');

// require any molecules that
// need to preserve ordering
require('@atoms/Root/Root.css');
require('@atoms/RichText/RichText.css');

// require the rest of the elements
requireAll(require.context('@atoms/', true, /\.css$/));
requireAll(require.context('@molecules/', true, /\.css$/));
requireAll(require.context('@organisms/', true, /\.css$/));
requireAll(require.context('@templates/', true, /\.css$/));
requireAll(require.context('@modifiers/', true, /\.css$/));
