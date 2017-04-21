import test from 'tape';
import { shallow } from 'enzyme';

import Rhythm from './Rhythm';

test('<Rhythm />', (t) => {
  const component = shallow(<Rhythm>abc</Rhythm>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Rhythm--default'), 'class name');
  t.ok(component.text(), 'abc');
  t.end();
});
