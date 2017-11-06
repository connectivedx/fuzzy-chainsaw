import test from 'tape';
import { shallow } from 'enzyme';

import Accordion from './Accordion';

test('<Accordion>', (t) => {
  const component = shallow(<Accordion>Hello World</Accordion>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Accordion'), 'tag class');
  t.end();
});
