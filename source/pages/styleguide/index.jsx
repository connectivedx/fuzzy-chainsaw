import Heading from 'Tags/Heading/Heading';
import Rhythm from 'Tags/Rhythm/Rhythm';
import Wrapper from 'Tags/Wrapper/Wrapper';
import SgTableOfContents from 'SgTags/SgTableOfContents/SgTableOfContents';

const page = () => (
  <Wrapper size="wide">
    <Rhythm size="large">
      <Rhythm size="small">
        <Heading level="h1">Fuzzy Chainsaw</Heading>
        <Heading level="h4">Component Style Guide</Heading>
      </Rhythm>

      <br />

      <SgTableOfContents
        hidePages
        indexClassName="Rhythm--small"
        RhythmComponent={Rhythm}
        HeadingComponent={Heading}
      />
    </Rhythm>
  </Wrapper>
);

page.pageTitle = 'Component Style Guide';
page.pageType = 'index';
page.theme = null;

export default page;
