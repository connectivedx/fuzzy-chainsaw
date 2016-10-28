import React from 'react';

import PageRoot from '../../tags/page-root/page-root.jsx';
import Rhythm from '../../tags/rhythm/rhythm.jsx';
import Heading from '../../tags/heading/heading.jsx';
import Wrapper from '../../tags/wrapper/wrapper.jsx';
import ComponentList from '../../styleguide/component-list.jsx';

export default ({ locals }) => (
	<PageRoot title="Styleguide">
		<Wrapper>
			<Rhythm size="large">
				<Heading level="1">Styleguide</Heading>
				
				<Rhythm size="small" deep="true">
					<Heading level="2">Tags</Heading>
					<ComponentList baseUrl="/styleguide/tags" components={locals.tags} />
				</Rhythm>

				<Rhythm size="small" deep="true">
					<Heading level="2">Components</Heading>
					<ComponentList baseUrl="/styleguide/components" components={locals.components} />
				</Rhythm>
			</Rhythm>
	</Wrapper>
	</PageRoot>
);