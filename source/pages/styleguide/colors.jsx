import Heading from '@atoms/Heading/Heading';
import Rhythm from '@atoms/Rhythm/Rhythm';
import Wrapper from '@atoms/Wrapper/Wrapper';
import SgColorSwatch from '@sg-molecules/SgColorSwatch/SgColorSwatch';

const page = () => (
  <Wrapper size="wide">
    <Rhythm>
      <Heading>Fuzzy Chainsaw Colors</Heading>
      <Heading level="h3">We are generating Project Colors! Neat!</Heading>
      <p>Colors are cool! (And so are you!) You can see all of the color variables defined in &#39;variables/colors.css&#39; here!</p>
      <Heading level="h2">Accessibility</Heading>
      <p>
        We run 2 Accessibility tests based on the <a href="https://www.w3.org/TR/WCAG20/">WCAG 2.0 Standards</a> for web content.
        For each font color in the project, we test to the AA Standard for &#34;normal&#34; and &#34;large&#34; font size categories.
      </p>
    </Rhythm>
    <br />
    <SgColorSwatch />
  </Wrapper>
);

page.pageTitle = 'StyleGuide | Colors';
page.pageType = 'index';

export default page;
