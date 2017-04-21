import Heading from 'Tags/Heading/Heading';
import Rhythm from 'Tags/Rhythm/Rhythm';
import Wrapper from 'Tags/Wrapper/Wrapper';
import {
  tagsIndexData,
  componentsIndexData,
  pagesIndexData,
  SgFileIndex
} from 'SgTags/SgFileIndex/SgFileIndex';


const page = () => (
  <Wrapper>
    <Rhythm size="large">
      <Heading level="h1">Hello World</Heading>

      <SgFileIndex
        items={pagesIndexData}
        title="Pages"
        className="rhythm--small"
        RhythmComponent={Rhythm}
        HeadingComponent={Heading}
      />
      <SgFileIndex
        items={componentsIndexData}
        title="Components"
        className="rhythm--small"
        RhythmComponent={Rhythm}
        HeadingComponent={Heading}
      />
      <SgFileIndex
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
