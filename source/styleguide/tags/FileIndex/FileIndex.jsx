import React from 'react';

const path2LinkList = (baseUrl = '') => path => {
  const url = `${baseUrl}/${path.substr(0, path.lastIndexOf('.'))}.html`;

  return ({
    url: url.indexOf('index.html') !== -1 ? url.substr(0, url.length - 'index.html'.length) : url,
    content:
      path
        .substr(0, path.lastIndexOf('.'))
        .split('/')
        .map(seg => seg.substr(0, 1).toUpperCase() + seg.substr(1))
        .join('/')
        .replace('/Index', '')
  });
}

export const getTagsIndexData = locals =>
  locals.outputPaths
    .filter(p => p.indexOf('/tags/') !== -1)
    .map(p => p.substr(p.indexOf('/tags/') + '/tags/'.length))
    .map(path2LinkList('/styleguide/tags'));

export const getComponentsIndexData = locals =>
  locals.outputPaths
    .filter(p => p.indexOf('/components/') !== -1)
    .map(p => p.substr(p.indexOf('/components/') + '/components/'.length))
    .map(path2LinkList('/styleguide/components'));

export const getPagesIndexData = locals =>
  locals.paths
    .filter(p => (
      p.indexOf('styleguide/tags') === -1 &&
      p.indexOf('styleguide/components') === -1 &&
      p.indexOf('./index.jsx') === -1
    ))
    .map(p => p.substr(2))
    .sort((a, b) => a.split('/').length - b.split('/').length)
    .map(path2LinkList());

export const FileIndex = ({
  items = [],
  ...attrs
}) => (
  <ul {...attrs}>
    { items.map(item => (
      <li key={item.url}>
        <a href={item.url}>{item.content}</a>
      </li>
    )) }
  </ul>
);


export default FileIndex;
