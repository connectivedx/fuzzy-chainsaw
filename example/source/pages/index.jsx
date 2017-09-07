import {
  Heading,
  Padding,
  Rhythm,
  Wrapper
} from '@tags';

import tableOfContents from 'fuzzy-chainsaw-toc';
import * as archive from '@source/archive';


const page = () => (
  <Wrapper size="large">
    <Padding size="medium-large">
      <Rhythm size="large">
        <Rhythm size="small">
          <Heading level="h1">Fuzzy Chainsaw</Heading>
          <Heading level="h4">Front End Style Guide</Heading>
        </Rhythm>

        <div className="RichText" dangerouslySetInnerHTML={{ __html: tableOfContents(archive) }} />
      </Rhythm>
    </Padding>
  </Wrapper>
);

page.pageTitle = 'Fuzzy Chainsaw';
page.pageType = 'index';


export default page;

