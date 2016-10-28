import React from 'react';
import style from './product-description.css';

import Heading from '../../tags/heading/heading.jsx';
import Poster from '../../tags/poster/poster.jsx';
import Button from '../../tags/button/button.jsx';

export default ({ 
	title,
	href,
	className,
	children
}) => (
	<div className={['product-description', className].join(' ')}>				
		<Heading tagName="h1">{title}</Heading>
		<p>{children}</p>
		<Button href={href}>Learn More</Button>
	</div>
)