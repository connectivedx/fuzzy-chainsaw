import React from 'react';

import PageRoot from '../../tags/PageRoot/PageRoot';
import Rhythm from '../../tags/Rhythm/Rhythm';
import Heading from '../../tags/Heading/Heading';
import Wrapper from '../../tags/Wrapper/Wrapper';
import { Nav_List as StyleguideList } from '../../styleguide/components/Nav';

export default ({ locals }) => (
	<PageRoot title="Styleguide">
		<Wrapper>
			<Rhythm size="large">
				<Heading level="1">Styleguide</Heading>
        <StyleguideList locals={locals} listClassName="rhythm--small" />
			</Rhythm>
  	</Wrapper>
	</PageRoot>
);
