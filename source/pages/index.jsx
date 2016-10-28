import React from 'react';

import PageRoot from '../tags/page-root/page-root.jsx';
import Heading from '../tags/heading/heading.jsx';
import Rhythm from '../tags/rhythm/rhythm.jsx';
import Wrapper from '../tags/wrapper/wrapper.jsx';

import ComponentList from '../styleguide/component-list.jsx';

export default ({ locals }) => (
	<PageRoot title="Hello World">
		<Wrapper>	
			<Rhythm size="large">
				<Heading level="1">Hello World</Heading>
			
				<Rhythm size="small" deep="true">
					<Heading level="3">Tags</Heading>
					<ComponentList baseUrl="/styleguide/tags" components={locals.tags} />
				</Rhythm>

				<Rhythm size="small" deep="true">
					<Heading level="3">Components</Heading>
					<ComponentList baseUrl="/styleguide/components" components={locals.components} />
				</Rhythm>

				<Rhythm size="small">			
					<Heading level="2">Pages</Heading>
					<p>n/a</p>
				</Rhythm>
			</Rhythm>
		</Wrapper>
	</PageRoot>
)