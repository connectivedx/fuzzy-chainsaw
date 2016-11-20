import React from 'react';
import styles from './Media.css';

export const Media_Figure = ({
	tagName = 'div',
	className = '',
	align,
	children
}) => {
	const Tag = tagName;

	if (align !== undefined) {
		className = `media__figure--${align} ` + className;
	}

	return (
		<Tag className={`media__figure ${className}`}>
			{children}
		</Tag>
	);
};

export const Media_Body = ({
	tagName = 'div',
	className = '',
	children
}) => {
	const Tag = tagName;
	return (
		<Tag className={`media__body ${className}`}>
			{children}
		</Tag>
	);
};

export const Media = ({
	tagName = 'div',
	className = '',
	align = 'top',
	children
}) => {
	const Tag = tagName;
	return (
		<Tag className={`media media--${align} ${className}`}>
			{children}
		</Tag>
	);
}

export default Media;
