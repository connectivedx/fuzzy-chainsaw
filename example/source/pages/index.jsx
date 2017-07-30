import {
  Heading,
  Rhythm,
  Wrapper
} from '@tags';

// import { TableOfContents } from 'fuzzy-chainsaw-styleguide/source/components';
// import archive from '@source/archive';

const page = () => (
  <Wrapper size="wide">
    <Rhythm size="large">
      <Rhythm size="small">
        <Heading level="h1">Fuzzy Chainsaw</Heading>
        <Heading level="h4">Front End Style Guide</Heading>
      </Rhythm>

      <br />

    </Rhythm>
  </Wrapper>
);

      // <TableOfContents archive={archive} />
page.pageTitle = 'Fuzzy Chainsaw';
page.pageType = 'index';


export default page;

