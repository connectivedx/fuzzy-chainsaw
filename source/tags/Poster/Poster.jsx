import React from 'react';
import Heading from '../Heading/Heading';
import styles from './Poster.css';

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
	title: React.PropTypes.string.isRequired,
	href: React.PropTypes.string,
	src: React.PropTypes.oneOfType([
		React.PropTypes.object,
		React.PropTypes.string
	]).isRequired,
	alt: React.PropTypes.string.isRequired,
	type: React.PropTypes.string,
	className: React.PropTypes.string
}

export default Poster;
export {
	Poster
}
