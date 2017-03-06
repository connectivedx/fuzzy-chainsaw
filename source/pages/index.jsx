import React from 'react';
import Heading from 'Tags/Heading/Heading';
import Rhythm from 'Tags/Rhythm/Rhythm';
import Wrapper from 'Tags/Wrapper/Wrapper';
import {
  tagsIndexData,
  componentsIndexData,
  pagesIndexData,
  FileIndex
} from 'SgTags/FileIndex/FileIndex';


const page = () => (
  <Wrapper>
    <Rhythm size="large">
      <Heading level="1">Hello World</Heading>

      <FileIndex
        items={pagesIndexData}
        title="Pages"
        className="rhythm--small"
        RhythmComponent={Rhythm}
        HeadingComponent={Heading}
      />
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

page.pageTitle = 'Hello World';

export default page;
