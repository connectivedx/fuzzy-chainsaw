import React from 'react';
import styles from './List.css';

export const List_Item = ({
	className = '',
	children
}) => (
	<li className={`list__item ${className}`}>{children}</li>
);

export const List = ({
	className = '',
	type = 'unordered',
	tagName,
	children
}) => {
	const Tag = tagName || type === 'ordered' ? 'ol' : 'ul';

	return (
		<Tag className={`list list--${type} ${className}`}>
			{children}
		</Tag>
	);
}

export default List;
