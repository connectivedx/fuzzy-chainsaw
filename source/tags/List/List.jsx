import React from 'react';
import styles from './List.css';

export const List_Item = ({
  className = '',
  children,
  ...attrs
}) => (
  <li className={`list__item ${className}`} {...attrs}>{children}</li>
);

export const List = ({
  tagName,
  className = '',
  variant = 'unordered',
  children,
  ...attrs
}) => {
  const Tag = tagName || variant === 'ordered' ? 'ol' : 'ul';

  return (
    <Tag className={`list list--${variant} ${className}`} {...attrs}>
      {children}
    </Tag>
  );
}

export default List;
