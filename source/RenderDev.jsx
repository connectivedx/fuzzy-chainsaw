import React from 'react';
import Dom from 'react-dom';
import match from 'minimatch';

import Styleguide from 'SgComponents/Styleguide/Styleguide';

const pagesContext = require.context('Pages/', true, /\.jsx$/);
const componentsContext = require.context('Components/', true, /.jsx$/);
const tagsContext = require.context('Tags/', true, /.jsx$/);


const requireOrFail = context => (path) => {
  try {
    const module = context(path);
    return module.default || module;
  } catch (e) {
    return undefined;
  }
};

const normalizePath = (path) => {
  const asset = `.${path}${(path.substr(-1) !== '/' ? '/' : '')}`;

  switch (asset) {
    case './': return './index';
    case './styleguide/': return './styleguide/index';
    default: return `${asset.substr(0, asset.length - 1)}`;
  }
};

const output = (component) => {
  if (component) {
    Dom.render(component, document.querySelector('#dev-entry'));
  } else {
    Dom.render(
      <div>Not Found</div>,
      document.querySelector('#dev-entry')
    );
  }
};

const getModule = (path) => {
  if (match(path, './styleguide/tags/**')) {
    const requirer = requireOrFail(tagsContext);
    const name = path.substr('./styleguide/tags/'.length);
    document.title = `${name} / Tags / Styleguide`;

    return (
      <Styleguide
        name={name}
        tag={requirer(`./${name}/${name}.jsx`)}
        readme={requirer(`./${name}/README.md`)}
        tests={requirer(`./${name}/${name}.test.jsx`)}
        locals={{ }}
      />
    );
  } else if (match(path, './styleguide/components/**')) {
    const requirer = requireOrFail(componentsContext);
    const name = path.substr('./styleguide/components/'.length);

    return (
      <Styleguide
        name={name}
        tag={requirer(`./${name}/${name}.jsx`)}
        readme={requirer(`./${name}/README.md`)}
        tests={requirer(`./${name}/${name}.test.jsx`)}
        locals={{ }}
      />
    );
  }

  const pagePathList = pagesContext.keys();
  const pagePath = `${normalizePath(location.pathname)}.jsx`;

  if (pagePathList.indexOf(pagePath) !== -1) {
    const Page = pagesContext(pagePath).default;
    document.title = Page.pageTitle;
    return <Page />;
  }
  document.title = 'Not Found';
  return <h1>Not Found</h1>;
};


const path = normalizePath(location.pathname);
const Module = getModule(path);

output(Module);


// // get component based on initial path
// if (isStyleguideablePath(location.pathname)) {
//   // const fileName = location.pathname.substr('styleguide/'.length);
//   // const type = fileName.split('/')[0];
//   // const first = fileName.substr(type.length + 1);
//   // const name = first.substr(0, first.length - 5);

//   // const requireContext = type === 'tags' ? tagsContext : componentsContext;
//   // const requirer = requireOrFail(requireContext);

//   // output(
//   //   <Styleguide
//   //     name={name}
//   //     tag={requirer(`./${name}/${name}.jsx`)}
//   //     readme={requirer(`./${name}/README.md`)}
//   //     tests={requirer(`./${name}/${name}.test.jsx`)}
//   //     locals={{ }}
//   //   />
//   // );
// } else {
//   output(<div className="yo-app" />);
// }
