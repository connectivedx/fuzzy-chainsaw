import Heading from '@tags/Heading/Heading';
import Rhythm from '@tags/Rhythm/Rhythm';
import Wrapper from '@tags/Wrapper/Wrapper';
import SgTableOfContents from '@sg-tags/SgTableOfContents/SgTableOfContents';

const page = () => (
  <Wrapper size="wide">
    <Rhythm size="large">
      <Rhythm size="small">
        <Heading level="h1">Fuzzy Chainsaw</Heading>
        <Heading level="h4">Front End Style Guide</Heading>
      </Rhythm>

      <br />

      <SgTableOfContents
        indexClassName="Rhythm--small"
        RhythmComponent={Rhythm}
        HeadingComponent={Heading}
      />
    </Rhythm>
  </Wrapper>
);

page.pageTitle = 'Fuzzy Chainsaw';
page.pageType = 'index';
page.theme = null;

export default page;

