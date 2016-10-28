import React from 'react';
import styles from './heading.css';

const Heading = ({
	tagName,
	type = 'default',
	level,
	className = '',
	children
}) => {
	let Tag = tagName || 'h1';
	let deLevel = level || 1;

	if (level !== undefined && tagName === undefined) {
		Tag	= 'h' + level;
		deLevel = level
	} else if (level === undefined && tagName !== undefined) {
		Tag = tagName;
	}

	return (
		<Tag className={`heading heading--${type} heading--h${deLevel} ${className}`}>
			{children}
		</Tag>
	)
};

export default Heading;
export {
	Heading
}