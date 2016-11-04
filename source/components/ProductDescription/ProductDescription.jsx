import React from 'react';
import style from './ProductDescription.css';

import Heading from '../../tags/Heading/Heading';
import Poster from '../../tags/Poster/Poster';
import Button from '../../tags/Button/Button';

export default ({
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
