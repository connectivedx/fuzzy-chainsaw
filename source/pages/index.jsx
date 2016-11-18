import React from 'react';

import PageRoot from '../tags/PageRoot/PageRoot';
import Heading from '../tags/Heading/Heading';
import Rhythm from '../tags/Rhythm/Rhythm';
import Wrapper from '../tags/Wrapper/Wrapper';
import { Nav_List as StyleguideList } from '../styleguide/components/Nav';

export default ({ locals }) => (
	<PageRoot title="Hello World">
		<Wrapper>
			<Rhythm size="large">
				<Heading level="1">Hello World</Heading>
        <StyleguideList locals={locals} listClassName="rhythm--small" />

				<Rhythm size="small">
					<Heading level="2">Pages</Heading>
					<p>n/a</p>
				</Rhythm>
			</Rhythm>
		</Wrapper>
	</PageRoot>
)
