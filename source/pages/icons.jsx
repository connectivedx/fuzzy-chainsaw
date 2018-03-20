import Heading from '@atoms/Heading/Heading';
import Rhythm from '@atoms/Rhythm/Rhythm';
import SgPageWrapper from '@sg-atoms/SgPageWrapper/SgPageWrapper';
import { SgIconSwatch, SgIconSwatch__search } from '@sg-molecules/SgIconSwatch/SgIconSwatch';
import {
  SgPageShell,
  SgPageShell__header,
  SgPageShell__navigation,
  SgPageShell__main,
  SgPageShell__body }
  from '@sg-molecules/SgPageShell/SgPageShell';
import SgGlobalHeader from '@sg-organisms/SgGlobalHeader/SgGlobalHeader';
import SgNavigation from '@sg-organisms/SgNavigation/SgNavigation';

const importIcons = (r) => r.keys().map(r);
const projectIcons = importIcons(require.context('@elements/atoms/Icon/assets', false, /\.(svg)$/));
const icons = [];

Object.keys(projectIcons).map((i) => {
  const fileName = projectIcons[i].split('/').slice(-1)[0].split('-');
  fileName.pop();
  const iconName = fileName.join('-');
  icons.push({ name: iconName, path: projectIcons[i] });
  return icons;
});

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
            <Heading>Fuzzy Chainsaw Icons</Heading>
            <p>
              For each SVG file added to source/elements/atoms/Icon/assets, this page will list them here as a global view of all project icons.
              The Icon example page better demonstraits icon style variations, while this page simply lists all project icons without variations.
            </p>
          </Rhythm>
          <Rhythm>
            <SgIconSwatch__search type="search" name="IconSearch" placeholder="Search for icon(s)" />
          </Rhythm>
          <Rhythm>
            {
              projectIcons ?
              Object.keys(icons).map((i) => <SgIconSwatch icon={icons[i]} key={i} />)
              : <div>No SVG files found in source/elements/atoms/Icon/assets/</div>
            }
          </Rhythm>
        </SgPageWrapper>
      </SgPageShell__main>
    </SgPageShell__body>
  </SgPageShell>
);

page.pageTitle = 'Style Guide | Colors';
page.pageType = 'styleguide';

export default page;
