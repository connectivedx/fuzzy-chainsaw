import test from 'tape';
import { shallow } from 'enzyme';

import Padding from './Padding';

test('<Padding>', (t) => {
  const component = shallow(<Padding>Hello World</Padding>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Padding'), 'tag class');
  t.equal(component.text(), 'Hello World', 'text');
  t.end();
});
