import React from 'react';
import Heading from '../heading/heading.jsx';
import styles from './poster.css';

const Poster = ({ 
	title,
	href,
	src,
	alt, 
	type = 'default',
	className,
	children
}) => {
	let Tag, hrefAttr;
	let classList = ['poster'];

	if (href === undefined) {
		Tag = 'div';
		hrefAttr = {};
	} else {
		Tag = 'a';
		classList.push('poster--link');
		hrefAttr = { href };
	}

	classList.push('poster--' + type);
	if (className) classList.push(className);

	return (
		<Tag {...hrefAttr} className={classList.join(' ')}>
			<Heading className="poster__heading" tagName="h2">{title}</Heading>
			<img className="poster__img" src={src} alt={alt} />
		</Tag>
	);
};

Poster.propTypes = {
	title: React.PropTypes.string
}

export default Poster;
export {
	Poster
}