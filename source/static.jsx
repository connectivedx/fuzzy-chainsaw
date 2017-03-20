import React from 'react';
import match from 'minimatch';
import Styleguide from 'SgComponents/Styleguide/Styleguide';

export const pagesContext = require.context('Pages/', true, /\.jsx$/);
export const componentsContext = require.context('Components/', true, /.jsx$/);
export const tagsContext = require.context('Tags/', true, /.jsx$/);


const requireOrFail = context => (path) => {
  try {
    const module = context(path);
    return module.default || module;
  } catch (e) {
    return undefined;
  }
};

export const normalizePath = (path) => {
  const asset = `.${path}${(path.substr(-1) !== '/' ? '/' : '')}`;
  const indexList = pagesContext.keys().filter(key => key.indexOf('index.jsx') !== -1);

  for (let i = 0; i < indexList.length; i++) {
    const item = indexList[i];
    const sub = item.substr(0, item.indexOf('index.jsx'));
    if (asset === sub) return `${sub}index`;
  }

  switch (asset) {
    case './': return './index';
    case './styleguide/': return './styleguide/index';
    default: return `${asset.substr(0, asset.length - 1)}`;
  }
};

const PageNotFound = {
  pageTitle: 'Page not found',
  Component: <h1>Not Found</h1>
};

const getStyleguideModule = (path, context, type) => {
  const name = path.substr(`./styleguide/${type}/`.length - 1);
  const requirer = requireOrFail(context);
  const tag = requirer(`./${name}/${name}.jsx`);
  const titleType = type.substr(0, 1).toUpperCase() + type.substr(1);

  if (tag) {
    return {
      pageTitle: `${name} / ${titleType}`,
      Component: (
        <Styleguide
          name={name}
          tag={tag}
          readme={requirer(`./${name}/README.md`)}
          tests={requirer(`./${name}/${name}.test.jsx`)}
          locals={{ }}
        />
      )
    };
  }

  return PageNotFound;
};

export const getModule = (path) => {
  const normalPath = normalizePath(path);

  if (match(normalPath, './styleguide/tags/**')) {
    return getStyleguideModule(path, tagsContext, 'tags');
  } else if (match(normalPath, './styleguide/components/**')) {
    return getStyleguideModule(path, componentsContext, 'components');
  }

  const pagePath = `${normalPath}.jsx`;
  const pagePathList = pagesContext.keys();

  if (pagePathList.indexOf(pagePath) !== -1) {
    const module = pagesContext(pagePath).default;

    return {
      pageTitle: module.pageTitle,
      Component: React.createElement(module, null)
    };
  }

  return PageNotFound;
};
