import SgHeading from '@sg-atoms/SgHeading/SgHeading';
import Link from '@atoms/Link/Link';
import Rhythm from '@atoms/Rhythm/Rhythm';
import {
  List,
  List__item
} from '@atoms/List/List';

import SgPageWrapper from '@sg-atoms/SgPageWrapper/SgPageWrapper';

import {
  SgPageShell,
  SgPageShell__header,
  SgPageShell__navigation,
  SgPageShell__main,
  SgPageShell__body
} from '@sg-molecules/SgPageShell/SgPageShell';
import SgGlobalHeader from '@sg-organisms/SgGlobalHeader/SgGlobalHeader';
import SgNavigation from '@sg-organisms/SgNavigation/SgNavigation';

const page = () => (
  <SgPageShell>
    <SgPageShell__header>
      <SgGlobalHeader />
    </SgPageShell__header>
    <SgPageShell__body>
      <SgPageShell__navigation>
        <SgNavigation />
      </SgPageShell__navigation>
      <SgPageShell__main>
        <div>
          <SgPageWrapper variant="large">
            <Rhythm size="small">
              <SgHeading level="h1" weight="bold">Fuzzy Chainsaw</SgHeading>
              <SgHeading level="h4" weight="bold">Front End Style Guide</SgHeading>
              <br />
              <SgHeading level="h3" weight="bold">About this style guide</SgHeading>
              <p>This project uses the <Link href="http://atomicdesign.bradfrost.com/chapter-2/">atomic design model</Link> for organizing and thinking about UI structure. What this means is that within the menu you’ll find front end assets organized as atoms, molecules, organisms, templates, and pages.</p>
              <List className="Rhythm">
                <List__item>Atoms are the smallest pieces, frequently aligned to single HTML tags.</List__item>
                <List__item>Molecules are slightly larger and typically represent a combination of atoms, such as an input and a label forming a form field.</List__item>
                <List__item className="is-leader">Organisms are larger still, typically combining molecules into a larger whole, such as a menu, a search field, and a logo combining to make up a site’s header.</List__item>
                <List__item className="is-leader">Templates display layout containers and potential section or full-page structures; they frequently will resemble wireframes, without content or fully-fledged design.</List__item>
                <List__item className="is-leader">Finally, pages are exactly what they say on the tin: representative examples of pages that might be published on a live website.</List__item>
              </List>
            </Rhythm>
          </SgPageWrapper>
        </div>
        <SgPageWrapper variant="large" />
      </SgPageShell__main>
    </SgPageShell__body>
  </SgPageShell>
);

page.pageTitle = 'Fuzzy Chainsaw Style Guide';
page.pageType = 'styleguide';


export default page;
