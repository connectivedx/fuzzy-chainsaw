import React from 'react';

import Heading from '../tags/heading/heading.jsx';
import { 
	PageRoot__Wrapper,
	PageRoot__Head,
	PageRoot__Body
} from '../tags/page-root/page-root.jsx';

import ComponentList from './component-list.jsx';
import Nav from './nav.jsx';

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