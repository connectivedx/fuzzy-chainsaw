import React from 'react';
import Dom from 'react-dom/server';

import Styleguide from './styleguide/Template';
import match from 'minimatch';
import { html } from 'js-beautify';


const pagesContext = require.context('./pages/', true, /\.jsx$/);
const tagsContext = require.context('./tags/', true, /\.jsx$/);
const componentsContext = require.context('./components/', true, /\.jsx$/);

const requireOrFail = context => path => {
  try {
    const module = context(path);
    return module.default || module;
  } catch(e) {}
}

const isRenderableModule = key => (
  key.indexOf('.jsx') !== -1 && // grab jsx files
  key.indexOf('.test.jsx') === -1 && // skip test files
  key.substr(0, 1) !== '_' // skip partial files
);

// builds a path:module object
// { './source/page.jsx': require('./source/page.jsx') }
const requireAllpages = context => {
  return context.keys()
    .filter(isRenderableModule)
    .reduce((modules, key) => {
      modules[key] = context(key);
      return modules;
    }, {});
}

const requireAllComponents = (context, prefix) => {
  return context.keys()
    .filter(isRenderableModule)
    .reduce((modules, key) => {
      modules[prefix + key.substr(2)] = context(key);
      return modules;
    }, {});
}

const isStyleguideablePath = path => (
  match(path, './styleguide/tags/**') ||
  match(path, './styleguide/components/**')
);

const makeAbsolutePathRelative = (output, locals) => {
  return output
    .replace(/src\=\"\//gi, `src="${locals.baseHref}/`)
    .replace(/href\=\"\//gi, `href="${locals.baseHref}/`)
    .replace(/url\=\"\//gi, `url="${locals.baseHref}/`)
    .replace(/url\(\//gi, `url(${locals.baseHref}/`)
    .replace(/url\(\"\//gi, `url("${locals.baseHref}/`);
}

const formatHtml = output => {
  return html(output, {
    indent_size: 2,
    preserve_newlines: false
  });
}

const processHtmlOutput = (output, locals) => {
  return formatHtml(
    makeAbsolutePathRelative(output, locals)
  );
}


module.exports = {
  render: (Page, locals, done) => {
    const output = component => {
      const htmlOutput = Dom.renderToStaticMarkup(component);
      done(null, '<!DOCTYPE html>' + processHtmlOutput(htmlOutput, locals));
    }

    if (isStyleguideablePath(locals.path)) {
      const fileName = locals.outputPath.substr('styleguide/'.length)
      const type = fileName.split('/')[0];
      const first = fileName.substr(type.length + 1);
      const name = first.substr(0, first.length - 5);

      const requireContext = type === 'tags' ? tagsContext : componentsContext;
      const requirer = requireOrFail(requireContext);

      // done(null, '')
      output(
        <Styleguide
          name={name}
          tag={requirer(`./${name}/${name}.jsx`)}
          readme={requirer(`./${name}/README.md`)}
          tests={requirer(`./${name}/${name}.test.jsx`)}
          locals={locals} />
      );
    } else {
      output(<Page locals={locals} />);
    }
  },
  pages: Object.assign(
    requireAllpages(pagesContext),
    requireAllComponents(tagsContext, './styleguide/tags/'),
    requireAllComponents(componentsContext, './styleguide/components/')
  ),
  transform: inputPath => {
    if (isStyleguideablePath(inputPath)) {
      return inputPath
        .substr(0, inputPath.lastIndexOf('/'))
        .replace('./', '') + '.html';
    }

    return inputPath
      .replace('./', '')
      .replace(/\.jsx/, '.html');

  }
};

