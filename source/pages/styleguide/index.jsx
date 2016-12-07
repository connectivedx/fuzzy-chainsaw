import React from 'react';

import Skeleton from '../../tags/Skeleton/Skeleton';
import Rhythm from '../../tags/Rhythm/Rhythm';
import Heading from '../../tags/Heading/Heading';
import Wrapper from '../../tags/Wrapper/Wrapper';
import {
  getTagsIndexData,
  getComponentsIndexData,
  Index
} from '../../styleguide/components/Index';

export default ({ locals }) => (
	<Skeleton title="Styleguide">
		<Wrapper>
			<Rhythm size="large">
				<Heading level="1">Styleguide</Heading>

        <Rhythm>
          <Heading level="2">Tags</Heading>
          <Index items={getTagsIndexData(locals)} className="rhythm--small" />
        </Rhythm>

        <Rhythm>
          <Heading level="2">Components</Heading>
          <Index items={getComponentsIndexData(locals)} className="rhythm--small" />
        </Rhythm>
			</Rhythm>
  	</Wrapper>
	</Skeleton>
);
