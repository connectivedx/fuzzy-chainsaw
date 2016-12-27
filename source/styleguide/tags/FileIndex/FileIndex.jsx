import React from 'react';

const path2LinkList = (baseUrl = '') => path => {
  return ({
    url: `${baseUrl}/${path.substr(0, path.lastIndexOf('.'))}.html`,
    content:
      path
        .substr(0, path.lastIndexOf('.'))
        .split('/')
        .map(seg => seg.substr(0, 1).toUpperCase() + seg.substr(1))
        .join(' / ')
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
      p.indexOf('styleguide/components') === -1
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
