import React from 'react';

import Heading from '../../tags/Heading/Heading';
import {
	Skeleton_Wrapper,
	Skeleton_Head,
	Skeleton_Body
} from '../../tags/Skeleton/Skeleton';

import Nav from './Nav';

export default ({
	title,
	locals,
	children
}) => (
	<Skeleton_Wrapper>
		<Skeleton_Head title={title}>
			<link rel="stylesheet" href="/assets/styleguide.css" />
		</Skeleton_Head>
		<Skeleton_Body className="page-styleguide">
			<Nav locals={locals} />
			<div className="sg-styleguide" id="content">
				{children}
			</div>
			<script src="/assets/styleguide.js"></script>
		</Skeleton_Body>
	</Skeleton_Wrapper>
);
