import test from 'tape';
import { shallow } from 'enzyme';

import Brand from './Brand';

test('<Brand />', (t) => {
  const component = shallow(<Brand />);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.brand'), 'tag class');
  t.ok(component.is('.brand--full'), 'variant class');
  t.end();
});

test('<Brand variant="compact" />', (t) => {
  const component = shallow(<Brand variant="compact" />);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.brand'), 'tag class');
  t.ok(component.is('.brand--compact'), 'variant class');
  t.end();
});
