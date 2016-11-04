import React from 'react';

import Heading from '../../tags/Heading/Heading.jsx';
import ComponentList from './ComponentList.jsx';

export default ({
	locals
}) => (
	<div className="sg-nav">
		<a href="#/" className="sg-nav__toggle">
			<span>Table of Contents</span>
			<span>Close</span>
		</a>

		<div className="sg-nav__container">
			<Heading level="2">Tags</Heading>
			<ComponentList baseUrl="/styleguide/tags" components={locals.tags} />

			<Heading level="2">Components</Heading>
			<ComponentList baseUrl="/styleguide/components" components={locals.components} />
		</div>

		<div className="sg-nav__cover"></div>
	</div>
);
