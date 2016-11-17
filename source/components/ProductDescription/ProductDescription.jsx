import React from 'react';
import style from './ProductDescription.css';

import Heading from '../../tags/Heading/Heading';
import Button from '../../tags/Button/Button';

const ProductDescription = ({
	title,
	href,
	className,
	children
}) => (
	<div className={['product-description', className].join(' ')}>
		<Heading tagName="h1">{title}</Heading>
		{children}
		<Button href={href}>Learn More</Button>
	</div>
)

ProductDescription.propTypes = {
	title: React.PropTypes.string.isRequired,
	href: React.PropTypes.string.isRequired,
	className: React.PropTypes.string
};

export default ProductDescription;
