const requireAll = (context) => context.keys().map(context);

// import variables before molecules
require('@vars/index.css');

// require any molecules that
// need to preserve ordering
require('@atoms/Root/Root.css');
require('@atoms/RichText/RichText.css');

// require the rest of the molecules
requireAll(require.context('@atoms/', true, /\.css$/));
requireAll(require.context('@molecules/', true, /\.css$/));
requireAll(require.context('@compositions/', true, /\.css$/));
requireAll(require.context('@modifiers', true, /\.css$/));
