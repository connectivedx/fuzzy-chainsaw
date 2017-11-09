import test from 'tape';
import { shallow } from 'enzyme';

import Tabs from './Tabs';

test('<Tabs>', (t) => {
  const component = shallow(<Tabs id="1" variant="horizontal--bottom" defaultTab="1">
    <section title="Tab 1">
      <p>Lorem ipsum dolor sit amet</p>
    </section>
    <section title="Tab 2">
      <p>Lorem ipsum dolor sit amet</p>
    </section>
    <section title="Tab 3">
      <p>Lorem ipsum dolor sit amet</p>
    </section>
    <section title="Tab 4">
      <p>Lorem ipsum dolor sit amet</p>
    </section>
  </Tabs>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Tabs'), 'tag class');
  t.end();
});
