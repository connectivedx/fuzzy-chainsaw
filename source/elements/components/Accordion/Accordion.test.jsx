import test from 'tape';
import { shallow } from 'enzyme';

import Accordion from './Accordion';

test('<Accordion>', (t) => {
  const component = shallow(<Accordion>
    <section title="First Section">
      <p>Accordion Section One</p>
    </section>
    <section title="Second Section">
      <p>Accordion Section Two</p>
    </section>
    <section title="Third Section">
      <p>Accordion Section Three</p>
    </section>
  </Accordion>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Accordion'), 'tag class');
  t.end();
});
