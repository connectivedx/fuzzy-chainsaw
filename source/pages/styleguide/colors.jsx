import Heading from '@atoms/Heading/Heading';
import Rhythm from '@atoms/Rhythm/Rhythm';
import SgPageWrapper from '@sg-atoms/SgPageWrapper/SgPageWrapper';
import SgColorSwatch from '@sg-molecules/SgColorSwatch/SgColorSwatch';
import {
  SgPageShell,
  SgPageShell__header,
  SgPageShell__navigation,
  SgPageShell__main,
  SgPageShell__body }
  from '@sg-molecules/SgPageShell/SgPageShell';
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
        <SgPageWrapper>
          <Rhythm>
            <Heading>Fuzzy Chainsaw Colors</Heading>
            <p>
              We run two accessibility tests based on the <a href="https://www.w3.org/TR/WCAG20/">WCAG 2.0 Standards</a> for web content.
              For each font color defined within the project, we test color contrast to the AA Standard for the defined “normal” (14pt/18px) and “large” (18pt/24px) font sizes.
            </p>
          </Rhythm>
          <br />
          <SgColorSwatch />
        </SgPageWrapper>
      </SgPageShell__main>
    </SgPageShell__body>
  </SgPageShell>
);

page.pageTitle = 'Style Guide | Colors';
page.pageType = 'index';

export default page;
