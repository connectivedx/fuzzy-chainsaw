import Heading from '@tags/Heading/Heading';
import Rhythm from '@tags/Rhythm/Rhythm';
import Wrapper from '@tags/Wrapper/Wrapper';
import SgTableOfContents from '@sg-tags/SgTableOfContents/SgTableOfContents';

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

export default page;
