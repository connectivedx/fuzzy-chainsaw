import React from 'react';
import isEmpty from ('lodash.isempty');

import Skeleton from '../../tags/Skeleton/Skeleton';
import Heading from '../../tags/Heading/Heading';
import Rhythm from '../../tags/Rhythm/Rhythm';
import Wrapper from '../../tags/Wrapper/Wrapper';
import {
  getTagsIndexData,
  getComponentsIndexData,
  FileIndex
} from '../../styleguide/tags/FileIndex/FileIndex';

export default ({ locals }) => (
  <Skeleton title="Styleguide">
    <Wrapper>
      <Rhythm size="large">
        <Heading level="1">Styleguide</Heading>

        {
          isEmpty(getComponentsIndexData(locals))
          ?
          <Rhythm>
            <Heading level="2">Components</Heading>
            <FileIndex items={getComponentsIndexData(locals)} className="rhythm--small" />
          </Rhythm>
          :
          null
        }

        {
          isEmpty(getTagsIndexData(locals))
          ?
          <Rhythm>
            <Heading level="2">Tags</Heading>
            <FileIndex items={getTagsIndexData(locals)} className="rhythm--small" />
          </Rhythm>
          :
          null
        }
      </Rhythm>
    </Wrapper>
  </Skeleton>
);
