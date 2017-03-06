import React from 'react';
import Heading from 'Tags/Heading/Heading';
import Rhythm from 'Tags/Rhythm/Rhythm';
import Wrapper from 'Tags/Wrapper/Wrapper';
import {
  tagsIndexData,
  componentsIndexData,
  FileIndex
} from 'SgTags/FileIndex/FileIndex';

const page = () => (
  <Wrapper>
    <Rhythm size="large">
      <Heading level="1">Styleguide</Heading>
      <FileIndex
        items={componentsIndexData}
        title="Components"
        className="rhythm--small"
        RhythmComponent={Rhythm}
        HeadingComponent={Heading}
      />
      <FileIndex
        items={tagsIndexData}
        title="Tags"
        className="rhythm--small"
        RhythmComponent={Rhythm}
        HeadingComponent={Heading}
      />
    </Rhythm>
  </Wrapper>
);

page.pageTitle = 'Styleguide';
page.propTypes = {
  locals: React.PropTypes.object
};

export default page;
