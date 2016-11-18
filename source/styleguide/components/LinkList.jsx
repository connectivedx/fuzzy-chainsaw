import React from 'react';

export default ({
  items = [],
  className = '',
  children,
  ...attrs
}) => (
  <ul className={`link-list ${className}`} {...attrs}>
    { items.map(item => (
      <li key={item.url}>
        <a href={item.url}>{item.content}</a>
      </li>
    )) }
  </ul>
);
