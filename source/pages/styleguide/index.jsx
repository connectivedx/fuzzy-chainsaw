import React from 'react';
import Skeleton from 'Tags/Skeleton/Skeleton';
import Heading from 'Tags/Heading/Heading';
import Rhythm from 'Tags/Rhythm/Rhythm';
import Wrapper from 'Tags/Wrapper/Wrapper';
import {
  getTagsIndexData,
  getComponentsIndexData,
  FileIndex
} from 'SgTags/FileIndex/FileIndex';

const page = ({ locals }) => (
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

page.propTypes = {
  locals: React.PropTypes.object
};

export default page;
