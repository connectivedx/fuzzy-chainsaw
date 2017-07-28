import Heading from '@tags/Heading/Heading';
import Rhythm from '@tags/Rhythm/Rhythm';
import Wrapper from '@tags/Wrapper/Wrapper';

import { TableOfContents } from '@styleguide/TableOfContents';
import archive from '@source/archive';

const page = () => (
  <Wrapper size="wide">
    <Rhythm size="large">
      <Rhythm size="small">
        <Heading level="h1">Fuzzy Chainsaw</Heading>
        <Heading level="h4">Front End Style Guide</Heading>
      </Rhythm>

      <br />

      <TableOfContents archive={archive} />
    </Rhythm>
  </Wrapper>
);

page.pageTitle = 'Fuzzy Chainsaw';
page.pageType = 'index';


export default page;

