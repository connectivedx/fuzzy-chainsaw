# History

This file keeps a list of changes between revisions.

## 2.0.2 Release

Fixes a major bug related to outputing bundles files outside of the project directory root.

 - Injects `module.paths = require.main.paths` at the start static.js before build render
 - Moves postcss-mixins plugin to the start of the postcss pipeline to solve an issue with unexpanded selectors.


## 2.0.1 Release

Fixes minor bugs and some instant feedback while upgrading a project.

### Changes

- Adds `enhanced-resolve@^3.4.1` dependency to yarn and packages (#256)
- Adds `postcss-mixins@^6.0.1` to postcss-plugin list by default since @apply went away in cssnext
- Adds `rand-token@^0.3.0` to dependencies
- Removes `slugify@^1.1.0` from dependencies
- Updates readmes to use correct scaffolding-cli commands and add notes on the fc-config file (#252).
- Fixes a typo in the gulp scaffolding config for compositions
- Update clean-pre gulp task to clean correct directory `static` instead of old `vendor` folder
- Updates `build` to exclude common assets in `static` from webpack loaders (this means you cannot practically include static assets into a bundle)
- Updates fc-config.js dll section defaults
- Updates styleguide anchor logic to allow duplicate names
- Remove `postcss` plugins from `fc-config.js` because it could be sucked up into webpack and cause critical dependencies (will revisit postcss config in a 2.x type release).


## 2.0.0 Release

Dependencies have been updated to their latest versions, the most major change was from Webpack 1 to Webpack 3.


### Entries

- Entry files have been merged where possible
    - `scripts.jsx` is now `bundle.jsx` outputting `bundle.js`
    - `styles.jsx` in now `bundle.styles.jsx` and is required by `bundle.jsx` instead of being treated as a separate entry.
    - `styleguide.jsx` and `styleguide.styles.jsx` have been separated in the same manor as `bundle.jsx` and `bundle.styles.jsx`
- New entry for static generation mode (`static.js`)
- New entry for development mode (`dev.js`)
- New entry for a generic theme that can be duplicated for projects with multiple themes (`bundle-generic.jsx` and `bundle-generic.css.jsx`)


### NPM Scripts

- Adds `dll` to produce vendor libs, this will be run after `npm install` or `yarn`
- Adds `dll:production` to produce production ready bundles (this is slow)
- Adds `dll:production:ci` to produce production ready vendor only bundles (this is slow)
- Updates `watch` to `dev`
- Adds `build:dev` to develop assets and skip testing
- Updates `integration-watch` to `watch`
- Adds `dll:production:ci` to produce minimal production ready vendor bundles
- Adds `production:ci` for a minimal production run (only css, js and assets) [#179]
- Adds `full:build`,  `full:build:ci`, `full:production`, `full:production:ci` for full builds, inluding DLLs
- Adds `postinstall` to automatically generate DLLs
- Updates `new-tag` to `new:tag`
- Updates `new-component` to `new:component`
- Adds `new:composition` scaffolding task
- Adds `new:stateful`
- Adds `test` and `test:dev` to run testings separately of build/dev
- Makes chained tasks cross-platform.


### Workflow

- React is now used to render the styleguide components in the browser instead of vanilla js. This should help address [#89]
- Tests and examples are defined in separate files (`MyComponent.test.jsx` and `MyComponent.example.jsx`)
- Tests are written directly as Tape tests, which will look much more familiar than before, but is more verbose.
- Tests are now run by Karma and tested in PhantomJS so browser/integration tests should be more straightforward. [#14]
- Component codestyle has been refactored for readability [#184]
- Remove `import React from 'react';` it will now be auto injected when you use React
- Favicons are automatically generated using favicon-webpack-plugin [#124]
- Offline service worker automatically generated on build using offline-plugin [#41]
- Adds `FcUtils.createBasicComponent` to define simple components.
- Adds more complete set of css breakpoints and updates to `px` instead of `em`.
- Grayscale color variable naming is more generalized.
- Automatically copies the `static` source folder to `dist/assets`
- Adds `source/lib` for non element things
- Moves `tags`, `components`, and `variables` to the `source/elements` directory.
- Adds `source/elements/compositions` to live a level above components
- Adds `source/elements/modifiers` to support non html css / js
- Pages can now define the `pageType` static property to categorize on indexes.
- Pages can now define a `theme` static property to only display that page for a specific theme.
- Updates testing language to be more specific and reliable.
- Adds Readme section in styleguide for components with a `README.md` file
- Adds `source/fc-config` for configuring the build system without touch build files directly.
- Adds `?theme=generic` theme parameter to page rendering logic
- `postcss-nesting` has been replaced with `postcss-nested` which behaves more like sass than the standards track.
- Removes `@apply` from postcss plugins.
- Adds Webpack aliases for project folders like `@tags`, `@components`, etc.  Look at `build/webpack/workflow/shared.js` for a complete listing
- Adds `htmlClass` and `bodyClass` page options

### Output

- All assets are now output with hashes for cache busting [#177]
- modules are now compiled independently, so `@import` is required in the head of a css files to `@extend` a rule (look at `RichText.css` for an example)
- `source/skeleton.html` replaces the `<Skeleton />` tag, this is shared for all output html, including the styleguide.
- HTML skeletons file are output separately of full static html files.
- Paths produced by webpack will always be absolute, use `BASE_URL`
 environmental variable to override.
- Output file formats are configurable via `source/fc-config.js`
- Favicons now support `BASE_URL` as expected


### Other

- Allow `tagName` to be a React component as well as a string
- Moves font to the root directory since it's not a tag
- Comment build files more thoroughly
- Adds `object.assign` polyfill for development on <=IE11
- Updates `README.md` to be more useful!


## 1.0.2 Changes

- Temporary fix to solve an error where SVGs wouldn't load when building deeper than the server root.

## 1.0.1 Changes

- Fixed an error where newly scaffolded components cause linting errors.
