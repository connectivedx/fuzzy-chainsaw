import React from 'react';

import PageRoot from '../../tags/PageRoot/PageRoot';
import Rhythm from '../../tags/Rhythm/Rhythm';
import Heading from '../../tags/Heading/Heading';
import Wrapper from '../../tags/Wrapper/Wrapper';
import LinkList from '../../styleguide/components/LinkList';

export default ({ locals }) => (
	<PageRoot title="Styleguide">
		<Wrapper>
			<Rhythm size="large">
				<Heading level="1">Styleguide</Heading>

				<Rhythm size="small" deep="true">
					<Heading level="2">Tags</Heading>
					<LinkList baseUrl="/styleguide/tags" components={locals.tags} />
				</Rhythm>

				<Rhythm size="small" deep="true">
					<Heading level="2">Components</Heading>
					<LinkList baseUrl="/styleguide/components" components={locals.components} />
				</Rhythm>
			</Rhythm>
	</Wrapper>
	</PageRoot>
);
