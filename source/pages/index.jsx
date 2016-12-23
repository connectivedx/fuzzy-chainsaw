import React from 'react';

import Skeleton from '../tags/Skeleton/Skeleton';
import Heading from '../tags/Heading/Heading';
import Rhythm from '../tags/Rhythm/Rhythm';
import Wrapper from '../tags/Wrapper/Wrapper';
import {
  getTagsIndexData,
  getComponentsIndexData,
  getPagesIndexData,
  FileIndex
} from '../styleguide/components/FileIndex';

export default ({ locals }) => (
  <Skeleton title="Hello World">
    <Wrapper>
      <Rhythm size="large">
        <Heading level="1">Hello World</Heading>

        <Rhythm>
          <Heading level="2">Pages</Heading>
          <FileIndex items={getPagesIndexData(locals)} className="rhythm--small" />
        </Rhythm>

        <Rhythm>
          <Heading level="2">Components</Heading>
          <FileIndex items={getComponentsIndexData(locals)} className="rhythm--small" />
        </Rhythm>

        <Rhythm>
          <Heading level="2">Tags</Heading>
          <FileIndex items={getTagsIndexData(locals)} className="rhythm--small" />
        </Rhythm>
      </Rhythm>
    </Wrapper>
  </Skeleton>
)
