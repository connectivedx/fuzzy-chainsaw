import React from 'react';

import Heading from '../../tags/Heading/Heading.jsx';
import {
	PageRoot__Wrapper,
	PageRoot__Head,
	PageRoot__Body
} from '../../tags/PageRoot/PageRoot.jsx';

import ComponentList from './ComponentList.jsx';
import Nav from './Nav.jsx';

export default ({
	title,
	locals,
	children
}) => (
	<PageRoot__Wrapper>
		<PageRoot__Head title={title}>
			<link rel="stylesheet" href="/assets/styleguide.css" />
		</PageRoot__Head>
		<PageRoot__Body className="page-styleguide">
			<Nav locals={locals} />

			<div className="sg-styleguide" id="content">
				{children}
			</div>
			<script src="/assets/styleguide.js"></script>
		</PageRoot__Body>
	</PageRoot__Wrapper>
);
