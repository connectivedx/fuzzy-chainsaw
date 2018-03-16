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
              We run 2 Accessibility tests based on the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast">WCAG 2.0 contrast ratio formula</a>. The WCAG 2.0 formula differentiates between text smaller than 18pt/24px, text larger than 18pt (or text that is bold and larger than 14pt/19px).
            </p>
            <p>For AA compliance, text should have a ratio of at least 4.5:1 (larger text, at least 3:1). For AAA compliance, text should have a ratio of at least 7:1 (larger text, at least 4.5:1).
              For each font color in the project, we test to the AA Standard for &#34;normal&#34; and &#34;large&#34; font size categories.
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
