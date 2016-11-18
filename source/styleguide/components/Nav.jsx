import React from 'react';

import Heading from '../../tags/Heading/Heading';
import Rhythm from '../../tags/Rhythm/Rhythm';
import LinkList from './LinkList';


const path2LinkList = baseUrl => path => {
  return ({
    url: `${baseUrl}/${path}.html`,
    content: path
  });
}

export const Nav_List = ({ locals, listClassName }) => {
  const tags =
    locals.outputPaths
      .filter(p => p.indexOf('/tags/') !== -1)
      .map(p => p.substr(p.indexOf('/tags/') + '/tags/'.length))
      .map(p => p.substr(0, p.length - '.html'.length));

  const components =
    locals.outputPaths
      .filter(p => p.indexOf('/components/') !== -1)
      .map(p => p.substr(p.indexOf('/components/') + '/components/'.length))
      .map(p => p.substr(0, p.length - '.html'.length));

  return (
    <Rhythm size="large">
      <Rhythm>
        <Heading level="2">Tags</Heading>
        <LinkList items={tags.map(path2LinkList('/styleguide/tags'))} className={listClassName} />
      </Rhythm>

      <Rhythm>
        <Heading level="2">Components</Heading>
        <LinkList items={components.map(path2LinkList('/styleguide/components'))} className={listClassName} />
      </Rhythm>
    </Rhythm>
  );
}

export default ({
  locals
}) => (
  <div className="sg-nav">
    <a href="#/" className="sg-nav__toggle">
      <span>Table of Contents</span>
      <span>Close</span>
    </a>

    <div className="sg-nav__container">
      <Nav_List locals={locals} />
    </div>

    <div className="sg-nav__cover"></div>
  </div>
);
