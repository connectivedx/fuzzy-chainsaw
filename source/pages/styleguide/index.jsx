import Heading from 'Tags/Heading/Heading';
import Rhythm from 'Tags/Rhythm/Rhythm';
import Wrapper from 'Tags/Wrapper/Wrapper';
import {
  tagsIndexData,
  componentsIndexData,
  SgFileIndex
} from 'SgTags/SgFileIndex/SgFileIndex';

const page = () => (
  <Wrapper>
    <Rhythm size="large">
      <Heading level="h1">Styleguide</Heading>
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

page.pageTitle = 'Styleguide';

export default page;
