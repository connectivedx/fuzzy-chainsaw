const context = require.context('Source/', true, /\.test\.jsx$/);

context.keys().forEach(context);
