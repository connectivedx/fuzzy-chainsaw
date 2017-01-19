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
} from '../styleguide/tags/FileIndex/FileIndex';

export default ({ locals }) => (
  <Skeleton title="Hello World">
    <Wrapper>
      <Rhythm size="large">
        <Heading level="1">Hello World</Heading>
        <FileIndex
          items={getPagesIndexData(locals)}
          title="Pages"
          className="rhythm--small"
          RhythmComponent={Rhythm}
          HeadingComponent={Heading}
        />
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
)
