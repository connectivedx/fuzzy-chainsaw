import React from 'react';
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
        <FileIndex
          items={getComponentsIndexData(locals)}
          title="Components"
          className="rhythm--small"
          RhythmComponent={Rhythm}
          HeadingComponent={Heading}
        />
        <FileIndex
          items={getTagsIndexData(locals)}
          title="Tags"
          className="rhythm--small"
          RhythmComponent={Rhythm}
          HeadingComponent={Heading}
        />
      </Rhythm>
    </Wrapper>
  </Skeleton>
);
