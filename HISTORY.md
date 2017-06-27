# History

This file keeps a list of changes between versions.


## 2.0.0 Changes

Dependencies have been updated to their latest versions, the most major change was from Webpack 1 to Webpack 2.

### Entries

- Entry files have been merged where possible
    - `scripts.jsx` is now `bundle.jsx` outputting `bundle.js`
    - `styles.jsx` in now `bundle.styles.jsx` and is required by `bundle.jsx` instead of being treated as a separate entry.
    - `styleguide.jsx` and `styleguide.styles.jsx` have been separated in the same manor as `bundle.jsx` and `bundle.styles.jsx`
- New entry for static generation mode (`static.js`)
- New entry for development mode (`dev.js`)

### NPM Scripts

- Adds `dll` to produce vendor libs, this will be run after `npm install` or `yarn`
- Adds `dll:production` to produce production ready vendor bundles (this is slow)
- Updates `watch` to `dev`
- Adds `build:dev` to develop assets and skip testing
- Updates `integration-watch` to `watch`
- Adds `dll:production:ci` to produce minimal production ready vendor bundles
- Adds `production:ci` for a minimal production run (only css, js and assets) [#179]
- Adds `full:build`, `full:production`, `full:production:ci` for full builds, inluding DLLs
- Adds `postinstall` to automatically generate DLLs
- Updates `new-tag` to `new:tag`
- Updates `new-component` to `new:component`
- Adds `new:stateful`
- Adds `test` and `test:dev` to run testings separately of build/dev

### Workflow

- React is now used to render the styleguide components in the browser instead of vanilla js. This should help address [#89]
- Tests and examples are defined in separate files (`MyComponent.test.jsx` and `MyComponent.example.jsx`)
- Tests are written directly as Tape tests, which will look much more familiar than before, but is more verbose.
- Tests are now run by Karma and tested in PhantomJS so browser/integration tests should be more straightforward. [#14]
- Component codestyle has been refactored for readability [#184]
- Remove `import React from 'react';` it will now be auto injected when you use React
- Favicons are automatically generated using favicon-webpack-plugin [#124]
- Offline service worker automatically generated on build using offline-plugin [#41]

### Output

- All assets are now output with hashes for cache busting [#177]
- modules are now compiled independently, so `@import` is required in the head of a css files to `@extend` a rule (look at `RichText.css` for an example)
- `source/skeleton.html` replaces the `<Skeleton />` tag, this is shared for all output html, including the styleguide.
- HTML skeletons file are output separately of full static html files.
- Paths produced by webpack will always be absolute, use `BASE_URL`
 environmental variable to override.
