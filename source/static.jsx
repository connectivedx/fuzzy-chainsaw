import match from 'minimatch';
import SgStyleguide from '@sg-organisms/SgStyleguide/SgStyleguide';

// this regex selects *.jsx and *.md files, but skips *.test.jsx
export const pagesContext = require.context('@pages/', true, /^(?!.*\.test\.jsx$).*\.(jsx|md)$/);
export const templatesContext = require.context('@templates/', true, /^(?!.*\.test\.jsx$).*\.(jsx|md)$/);
export const organismsContext = require.context('@organisms/', true, /^(?!.*\.test\.jsx$).*\.(jsx|md)$/);
export const moleculesContext = require.context('@molecules/', true, /^(?!.*\.test\.jsx$).*\.(jsx|md)$/);
export const atomsContext = require.context('@atoms/', true, /^(?!.*\.test\.jsx$).*\.(jsx|md)$/);


const requireOrFail = (context) => (path) => {
  try {
    const module = context(path);
    return module.default || module;
  } catch (e) {
    return undefined;
  }
};

export const normalizePath = (path) => {
  const asset = `.${path}${(path.substr(-1) !== '/' ? '/' : '')}`;
  const indexList = pagesContext.keys().filter((key) => key.indexOf('index.jsx') !== -1);

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
        <SgStyleguide
          name={name}
          readme={requirer(`./${name}/README.md`)}
          examples={requirer(`./${name}/${name}.example.jsx`)}
          locals={{ }}
        />
      )
    };
  }

  return PageNotFound;
};

export const getModule = (path) => {
  const normalPath = normalizePath(path);

  if (match(normalPath, './styleguide/atoms/**')) {
    return getStyleguideModule(path, atomsContext, 'atoms');
  } else if (match(normalPath, './styleguide/molecules/**')) {
    return getStyleguideModule(path, moleculesContext, 'molecules');
  } else if (match(normalPath, './styleguide/organisms/**')) {
    return getStyleguideModule(path, organismsContext, 'organisms');
  } else if (match(normalPath, './styleguide/templates/**')) {
    return getStyleguideModule(path, templatesContext, 'templates');
  }

  const pagePath = `${normalPath}.jsx`;
  const pagePathList = pagesContext.keys();

  if (pagePathList.indexOf(pagePath) !== -1) {
    const module = pagesContext(pagePath).default;

    return Object.assign({ }, module, {
      Component: React.createElement(module, null)
    });
  }

  return PageNotFound;
};
