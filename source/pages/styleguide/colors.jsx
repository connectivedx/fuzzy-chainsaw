import Heading from '@tags/Heading/Heading';
import Wrapper from '@tags/Wrapper/Wrapper';
import SgColorSwatch from '@sg-components/SgColorSwatch/SgColorSwatch';

const page = () => (
  <Wrapper size="wide">
    <Heading>Fuzzy Chainsaw Colors</Heading>
    <br />
    <SgColorSwatch />
  </Wrapper>
);

page.pageTitle = 'StyleGuide | Colors';
page.pageType = 'index';

export default page;
